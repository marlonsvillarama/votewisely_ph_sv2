<script>
    export let data;
</script>

<svelte:head>
	<title>VoteWisely.PH - Candidates</title>
	<meta name="description" content="Candidates" />
</svelte:head>

<section class="candidates hero">
	<div class="overlay"></div>
	<div class="content wrapper">
		<h1>Candidates</h1>
	</div>
</section>

<nav class="row-menu">
    <a href="./candidates/president">President</a>
    <a href="./candidates/veep">Vice President</a>
    <a href="./candidates/senate">Senate</a>
    <a href="./candidates/congress">Congress</a>
</nav>

<style>
	.candidates.hero {
		background: url('/images/candidates.jpg') 50% 50%;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        padding: 5.75rem 0 3rem;
		opacity: 0.8;
	}
    @media (min-width: 40rem) {
        .candidates.hero {
            padding: 8rem 0 6rem;
        }
    }
    @media (min-width: 60rem) {
        .candidates.hero {
            padding: 10.5rem 0 8rem;
        }
    }

    .row-menu {
        /* border: 1px solid red; */
        display: none;
    }
    @media (min-width: 40rem) {
        .row-menu {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;
        }
    }
    .row-menu a {
        padding: 0.5rem 1.25rem;
        /* background-color: antiquewhite; */
        font-family: var(--font-serif);
        font-size: 0.875rem;
        font-weight: 500;
        border-bottom: 2px solid transparent;
    }
    .row-menu a:hover {
        /* background-color: #E6E6E6; */
        border-bottom: 2px solid var(--color-red-flag);
    }
    .row-menu a:active {
        background-color: #E6E6E6;
    }

	.candidates.content {
		display: flex;
		/* flex-direction: column; */
        flex-wrap: wrap;
		color: var(--color-default);
		gap: 2rem;
	}
</style>