<script>
    export let data = [];
</script>

{#each data as d}
<section>
    <h1>Responsibilities</h1>
    <div>
        <p>A senator is an elected official of the Republic of the Philippines who is part of the upper house of Congress.</p>
        <p>Every 3 years, Filipinos must elect 12 of the 24 senators that make up the Senate of the Philippines. Each elected senator will serve six years in office, with a maximum of two consecutive terms.</p>
    </div>
</section>
{/each}

<style>
    section {
        border: 1px solid rgba(0, 0, 0, 0.2);
        /* border-radius: 0.25rem; */
    }
    h1 {}
</style>