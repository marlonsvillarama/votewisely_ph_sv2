<main>
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

    <section id="senators" class="row page-row">
        <div class="content wrapper">
            <h1>In 2025, the country will elect 12 senators.</h1>
            <button class="cta" on:click={goToCandidates}>See all candidates here</button>
        </div>
    </section>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        gap: 3rem;
    }
    section {
        margin-bottom: 5rem;
    }
    .hero {
		background: url("/images/hero/issues.jpg") 50% 50%;
        background-size: cover;
	}
</style>