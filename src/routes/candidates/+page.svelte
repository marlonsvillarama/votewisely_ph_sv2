<script>
	import abalos from '$lib/images/profiles/abalos.jpg'
	import adonis from '$lib/images/profiles/adonis.jpg'
	import amad from '$lib/images/profiles/amad.jpg'
</script>

<svelte:head>
	<title>VoteWisely.PH - List of Candidates</title>
	<meta name="description" content="List of Candidates" />
</svelte:head>

<section class="candidates hero">
	<div class="overlay"></div>
	<div class="content wrapper">
		<h1>Candidates</h1>
	</div>
</section>

<nav class="row-menu">
    <a href="./">President</a>
    <a href="./">Vice President</a>
    <a href="./">Senate</a>
    <a href="./">Congress</a>
</nav>

<div class="candidates content wrapper">
    <div id="abalos" class="card candidate">
        <img src={abalos} alt="Abalos" />
        <div class="name">
            <span class="ln">Abalos</span>
            <span>Benhur Jr.</span>
        </div>
        <div class="tags">
            <span class="tag alert">Political family</span>
            <span class="tag">Former DILG Secretary</span>
        </div>
    </div>

    <div id="adonis" class="card candidate">
        <img src={adonis} alt="Adonis" />
        <div class="name">
            <span class="ln">Adonis</span>
            <span>Ronaldo</span>
        </div>
        <div class="tags">
            <span class="tag">Independent</span>
        </div>
    </div>

    <div id="amad" class="card candidate">
        <img src={amad} alt="Amad" />
        <div class="name">
            <span class="ln">Amad</span>
            <span>Wilson</span>
        </div>
        <div class="tags">
            <span class="tag">Independent</span>
            <span class="tag">Attorney</span>
        </div>
    </div>
</div>

<style>
	.candidates.hero {
		background: url('../../lib/images/candidates.jpg') 50% 50%;
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