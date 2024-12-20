<script>
    export let data = {};
</script>

<div class="profile-section">
    <h3>Relatives in Politics</h3>
    {#if data.pf?.length > 0}
        <p>{data.ln} is a member of a political family that includes the following persons:</p>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Relationship</th>
                    <th>Position in government</th>
                </tr>
            </thead>
            <tbody>
                {#each data.pf as pf}
                    <tr>
                        <td>{pf.name}</td>
                        <td>{pf.rel}</td>
                        <td>{pf.pos}</td>
                    </tr>
                    <!-- <li>{pf.name}{pf.rel ? ', ' + pf.rel : ''} - {pf.pos}</li> -->
                {/each}
            </tbody>
        </table>
        <!-- <ul>
            {#each data.pf as pf}
                <li>{pf.name}{pf.rel ? ', ' + pf.rel : ''} - {pf.pos}</li>
            {/each}
        </ul> -->
    {:else}
        <p>No known relatives in politics.</p>
    {/if}
    <a class="back-to-top" href="#top">Back to Top &uarr;</a>
</div>
