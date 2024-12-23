<script>
    export let data = [];
</script>

<section class="buttons">
    {#each data as d}
    <button>{d.title}</button>
    {/each}
</section>

{#each data as d}
<section class="info hidden">
    <h1>Responsibilities of a Senator</h1>
    <div>
        <p>A senator is an elected official of the Republic of the Philippines who is part of the upper house of Congress.</p>
        <p>Every 3 years, Filipinos must elect 12 of the 24 senators that make up the Senate of the Philippines. Each elected senator will serve six years in office, with a maximum of two consecutive terms.</p>
    </div>
</section>
{/each}

<style>
    .buttons {

    }
    .info {
        border: 1px solid rgba(0, 0, 0, 0.1);
        /* border-radius: 0.25rem; */
        margin-bottom: 1rem;
    }
    h1 {
        background-color: rgba(0, 0, 0, 0.1);
        padding: 0.5rem 1rem;
        font-size: var(--fs-md);
        color: var(--color-font);
    }
    div {
        padding: 1rem 2rem;
    }
    p {
        /* border: 1px solid red; */
        /* padding: 0 1rem 0.5rem; */
        line-height: 2rem;
        /* text-indent: ; */
    }
</style>