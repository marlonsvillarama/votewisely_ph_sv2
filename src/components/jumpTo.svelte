<script>
    import { createEventDispatcher } from "svelte";

    export let data = [];
    export let base = '';

    let jumps = data.map(d => {
        return {
            link: `/${base}/${d}`,
            text: d
        };
    });
    
    let dispatch = createEventDispatcher();
    const jumpTo = (link) => {
        dispatch('click', { link });
    };
</script>

<div>
    <span>Jump to:</span>
    {#each jumps as d}
    <button on:click={jumpTo(d.link)}>{d.text}</button>
    {/each}
</div>

<style>
    div {
        /* font-size: var(--fs-sm); */
        font-weight: bold;
        letter-spacing: 0.25px;
    }
    span {
        display: inline-block;
        margin-right: 0.5rem;
        opacity: 0.5;
    }
    button {
        background-color: white;
        border: 0;
        display: inline-block;
        margin-right: 0.75rem;
        align-items: center;
        text-transform: uppercase;
        font-size: var(--fs-sm);
        font-weight: 700;
        opacity: 0.9;
        text-decoration: underline;
    }
    button:hover {
        cursor: pointer;
        color: var(--color-red-flag);
        scale: 1.05;
    }
</style>