<script>
    import { page } from "$app/stores";
    import Crumbs from "../../../components/crumbs.svelte";
    import JumpTo from "../../../components/jumpTo.svelte";
    import Filters from "../../../components/filters.svelte";
    import TypeInfo from "../../../components/typeInfo.svelte";
    import Candidate from '../../../components/candidate.svelte';

    export let data = {};

    let slug = $page.params.type;
    let slugProper = slug.charAt(0).toUpperCase() + slug.slice(1);
    let slugTitle = `Candidates for ${slugProper}`;
    let crumbs = [ 'candidates', slug ];
    let jumps = Object.keys(data.candidates);

    let candidates = data.candidates[slug];
    let types = data.types[slug];
    let filters = [];

    const clearFilters = () => {
        filters = [];
        filterList({ detail: { filters } });
    };

    const filterList = (e) => {
        let cards = document.querySelectorAll('.card.candidate');

        filters = e.detail.filters;
        if (filters.length <= 0) {
            cards.forEach(c => {
                c.style.display = 'inline-block';
                return true;
            });
            return;
        }

        cards.forEach(c => {
            c.style.display = 'none';
            return true;
        });
        cards.forEach(c => {
            let ct = c.dataset.tags ? c.dataset.tags.split(',') : [];
            for (let i = 0, count = filters.length; i < count; i++) {
                if (ct.indexOf(filters[i]) < 0) { continue; }

                c.style.display = 'inline-block';
                break;
            }

            return true;
        });
    };

    const goToProfile = (e) => {
        console.log('gotoProfile url path', $page.url.pathname);
        console.log('gotoProfile slug', e.detail.slug);
        window.location = `${$page.url.pathname}/${e.detail.slug}`;
    };

    const jump = (e) => {
        console.log('jump', e);
        if (!e.detail.link) { return; }
        window.location = `${e.detail.link}`;
    };
</script>

<svelte:head>
	<title>VoteWisely.PH - {slugTitle}</title>
	<meta name="description" content={slugTitle} />
</svelte:head>

<!-- <section class="hero">
	<div class="overlay"></div>
	<div class="content wrapper">
		<h1>{slugProper}</h1>
	</div>
</section> -->

<div class="header wrapper">
    <!-- <Crumbs data={crumbs} /> -->
    <!-- <JumpTo data={jumps} base="candidates" on:click={jump} /> -->
    <div class="title">
        <h1>2025 {slugTitle}</h1>
    </div>
</div>

<div class="info wrapper">
    <TypeInfo data={types} />
</div>

<div class="filters wrapper">
    <Filters list={data.tags} filters={filters} on:select={filterList} on:clear={clearFilters} />
</div>

<div class="content wrapper">
    {#each candidates as candidate}
        <Candidate candidate={candidate} tags={data.tags} on:click={goToProfile} />
    {/each}
</div>

<style>
	/* .hero {
		background: url('/images/senate.jpg') 50% 50%;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        padding: 5.75rem 0 3rem;
		opacity: 0.8;
	}
    @media (min-width: 40rem) {
        .hero {
            padding: 8rem 0 6rem;
        }
    }
    @media (min-width: 60rem) {
        .hero {
            padding: 10.5rem 0 8rem;
        }
    } */
    .header {
        margin: 4rem auto 1rem;
        /* border-top: 1px solid red; */
    }
    /* .title {
        padding: 0.5rem 0;
    } */
    .title h1 {
        /* color: var(--color-slate-900); */
        border-top: 1px solid var(--color-blue-flag);
        margin-top: 0.5rem;
        margin-bottom: 1rem;
        padding-top: 0.75rem;
    }
    .filters {
        margin-bottom: 1.5rem;
    }
	.content {
        margin-top: 2rem;
		display: flex;
        /* flex: 2 1 auto; */
		/* flex-direction: column; */
        flex-wrap: wrap;
		color: var(--color-white);
		gap: 1.5rem;
        justify-content: flex-start;
	}

</style>