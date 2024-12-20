<script>
    export let title = 'section';
    export let data = [];
</script>

<div class="detail">
    <h3>{title}</h3>
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
        <p>No {title} identified at this time.</p>
    {/if}
</div>

<style>
    .detail {
        font-size: var(--fs-sm);
        line-height: 1.5rem;
    }
    .detail h3 {
        padding-bottom: 0.5rem;
        margin-bottom: 1rem;
        border-bottom: 1px solid #CCC;
        text-transform: capitalize;
    }
    .detail ul {
        /* border: 1px solid red; */
        /* margin-left: 2rem; */
        margin-block-start: 0.5rem;
        margin-block-end: 1rem;
        padding-inline-start: 2rem;
    }
    a {
        color: var(--color-blue-flag-lite);
        border-bottom: 1px solid var(--color-blue-flag-lite);
        font-weight: 500;
        padding-bottom: 2px;
    }
    a:hover {
        color: var(--color-blue-flag);
        border-bottom: 1px solid var(--color-blue-flag);
        font-weight: 700;
    }
</style>