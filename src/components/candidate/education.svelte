<script>
    export let data = {};
</script>

<div class="profile-section">
    <h3>Education</h3>
    {#if data?.length > 0}
        <ul>
            {#each data as d}
            <li>{d}</li>
            {/each}
        </ul>
    {:else}
        <p>No known educational background at this time.</p>
    {/if}
    <a class="back-to-top" href="#top">Back to Top &uarr;</a>
</div>
