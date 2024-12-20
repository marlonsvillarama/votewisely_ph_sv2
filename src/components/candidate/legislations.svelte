<script>
    export let data = [];

    let leg = data?.leg;
    let principalCount = leg?.pr?.total || 0;
    let coCount = leg?.co?.total || 0;
    // console.log(`principalCount = ${principalCount}`, data?.pr?.list);
</script>

<div class="profile-section">
    <h3>Legislations</h3>
    {#if principalCount > 0 || coCount > 0}
        <!-- <ul> -->
            {#if principalCount > 0}
                <p>As the principal author:</p>
                <ul>
                    {#each leg.pr.list as d}
                    <li><a href={d.link} target="_blank">{d.text}</a><br><p>{d.desc}</p></li>
                    {/each}
                </ul>
            {/if}
            {#if coCount > 0}
                <p>As a co-author:</p>
                <ul>
                    {#each leg.co.list as d}
                    <li><a href={d.link} target="_blank">{d.text}</a><br><p>{d.desc}</p></li>
                    {/each}
                </ul>
            {/if}
        <!-- </ul> -->
    {:else}
        <p>This candidate has not yet previously filed any legislations.</p>
    {/if}
    <a class="back-to-top" href="#top">Back to Top &uarr;</a>
</div>
