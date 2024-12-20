<script>
    export let data = [];
</script>

<div class="profile-section">
    <h3>Work Experience</h3>
    {#if data?.length > 0}
        <ul>
            {#each data as d}
                <li>{d.value}
                    {#if d.sub?.length > 0}
                        <ul>
                            {#each d.sub as sub}
                            <li>{sub}</li>
                            {/each}
                        </ul>
                    {/if}
                </li>
            {/each}
        </ul>
    {:else}
        <p>No work experience identified at this time.</p>
    {/if}
    <a class="back-to-top" href="#top">Back to Top &uarr;</a>
</div>
