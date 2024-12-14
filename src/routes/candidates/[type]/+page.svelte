<script>
    import { page } from "$app/stores";
    import Candidate from '../../../components/candidate.svelte';
    import Filters from "../../../components/filters.svelte";

    export let data;

    let slug = $page.params.type;
    console.log(slug);
    let slugProper = slug.charAt(0).toUpperCase() + slug.slice(1);
    let slugTitle = `Candidates for ${slugProper}`;

    let tags = data.tags;
    let list = data.candidates[slug];
    let filters = [];

    const filterList = (e) => {
        filters = e.detail.filters;
        // console.log('filters', filters);

        if (filters.length <= 0) {
            list = data.candidates[slug];
            return;
        }

        list = data.candidates[slug].filter(item => {
            let output = false;
            for (let i = 0, count = filters.length; i < count; i++) {
                if (item.tags.indexOf(filters[i]) < 0) { continue; }

                output = true;
            }

            return output;
        });

        // console.log('filtered List', list);
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

<section class="hero">
	<div class="overlay"></div>
	<div class="content wrapper">
		<h1>{slugProper}</h1>
	</div>
</section>

<div class="filters wrapper">
    <Filters data={tags} filters={filters} on:select={filterList} />
</div>

<div class="content wrapper">

    {#each list as candidate}
        <Candidate data={candidate} visible="true" on:click={goToProfile} />
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
	.content {
		display: flex;
        /* flex: 2 1 auto; */
		/* flex-direction: column; */
        flex-wrap: wrap;
		color: var(--color-default);
		gap: 1.5rem;
        justify-content: flex-start;
	}

</style>