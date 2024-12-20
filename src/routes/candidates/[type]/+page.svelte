<script>
    import { page } from "$app/stores";
    import Crumbs from "../../../components/crumbs.svelte";
    import Candidate from '../../../components/candidate.svelte';
    import Filters from "../../../components/filters.svelte";

    export let data;

    let slug = $page.params.type;
    let slugProper = slug.charAt(0).toUpperCase() + slug.slice(1);
    let slugTitle = `Candidates for ${slugProper}`;

    // let tags = data.tags;
    let candidates = data.candidates[slug];
    let filters = [];

    const clearFilters = () => {
        filters = [];
        filterList({ detail: { filters } });
    };

    const filterList = (e) => {
        filters = e.detail.filters;
        // console.log('filters', filters);

        let cards = document.querySelectorAll('.card.candidate');
        // console.log('cards', cards);

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
    <Crumbs data={$page.params} />
    <h2>2025 Candidates for {slug}</h2>
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
	.hero {
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
    }
    .header {
        margin-top: 4rem;
        border-top: 1px solid red;
    }
	.content {
		display: flex;
        /* flex: 2 1 auto; */
		/* flex-direction: column; */
        flex-wrap: wrap;
		color: var(--color-white);
		gap: 1.5rem;
        justify-content: flex-start;
	}

</style>