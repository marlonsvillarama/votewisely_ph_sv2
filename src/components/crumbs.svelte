<script>
    export let data = {};
</script>

{#if data.length > 0}
<ul>
    {#each data as d}
    <li><a href={d.link}>{d.text}</a></li>
    {/each}
</ul>
{/if}