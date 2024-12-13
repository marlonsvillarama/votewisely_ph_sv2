<script>
    import { page } from "$app/stores";
    import Candidate from '../../../components/candidate.svelte';
    import Filters from "../../../components/filters.svelte";

    export let data;

    let slug = $page.params.type;
    console.log(slug);
    let slugProper = slug.charAt(0).toUpperCase() + slug.slice(1);
    let slugTitle = `Candidates for ${slugProper}`;

    let list = data[slug];
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
    <Filters />
</div>

<div class="content wrapper">

    {#each list as candidate}
        <Candidate data={candidate} />
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

    .filters {
        border: 1px solid red;
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