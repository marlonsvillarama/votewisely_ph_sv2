<script>
    export let data = {};
</script>

<div class="profile-section">
    <h3>Known Advocacies</h3>
    {#if data?.adv?.length > 0}
        <p>{data.ln} is a known advocate for the following issues:</p>
        {#each data.adv as adv}
            <div class="item">
                <h4>{adv.title}</h4>
                <p>{adv.desc}</p>
            </div>
        {/each}
    {:else}
        <p>No advocacies identified at this time.</p>
    {/if}
    <a class="back-to-top" href="#top">Back to Top &uarr;</a>
</div>

<style>
    .item {
        padding: 0 1.5rem;
    }
    .item:not(:last-child) {
        margin-bottom: 1rem;
    }
    .item h4 {
        text-decoration: underline;
    }
</style>