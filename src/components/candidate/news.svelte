<script>
    export let data = {};
</script>

<div class="profile-section">
    <h3>Related News</h3>
    {#if data?.length > 0}
        <ul>
            {#each data as news}
                <li><a href={news.link} target="_blank">{news.text}</a></li>
            {/each}
        </ul>
    {:else}
        <p>No known related news at this time.</p>
    {/if}
    <a class="back-to-top" href="#top">Back to Top &uarr;</a>
</div>
