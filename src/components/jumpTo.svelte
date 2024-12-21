<script>
    export let data = [];
    export let base = '';

    let jumps = data.map(d => {
        return {
            link: `/`
        };
    });
</script>

<div>
    Jump to:
    <ul>
        {#each data as d}
        <li><a href={d.link}>{d.text}</a></li>
        {/each}
    </ul>
</div>

<style>
    div {
        font-size: var(--fs-sm);
        font-weight: bold;
        letter-spacing: 0.25px;
    }
</style>