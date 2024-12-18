<script>
    import Card from "../components/card.svelte";

    export let data = {};
</script>
<section class="hero">
    <div class="overlay"></div>
    <div class="content wrapper">
        <h1 id="banner-title">Join the fight for a better future</h1>
        <p>
            Traditional politics is hurting our country. We need to vote for the right leaders who have the country's best interests at heart.
            <br><br>
            Be informed. Get to know the people running for office.
        </p>
        <p>
            <a href="./" class="cta">Start here</a>
        </p>
        
    </div>
</section>

<section id="advocacy" class="row">
    <div class="content wrapper">
        <h1>Our Advocacy</h1>
        <p>
            Learn more about the issues facing our country today.
        </p>

        <div class="flex-row">
            {#each data.cards as card}
                <Card data={card} />
            {/each}
        </div>
        <!-- <div class="grid-row-3">
            <div class="card">Card 1</div>
            <div class="card">Card 2</div>
            <div class="card">Card 3</div>
        </div> -->
    </div>
</section>

<style>
    .hero {
		background: url("/images/ph-flag.jpg") 50% 50%;
	}
    #banner-title {
        text-align: justify;
    }
    .content .flex-row {
		display: flex;
        /* flex: 2 1 auto; */
		flex-direction: row;
        flex-wrap: wrap;
		color: var(--color-white);
		gap: 1.5rem;
        justify-content: flex-start;
    }
</style>