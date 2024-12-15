<script>
    import { createEventDispatcher } from "svelte";
    import Tag from "./tag.svelte";
    export let list = [];
    let filters = [];

    let dispatch = createEventDispatcher();
    const clickTag = (e) => {
        if (e.detail.add === true) {
            if (filters.indexOf(e.detail.value) < 0) {
                filters.push(e.detail.value);
            }
        }
        else {
            let index = filters.indexOf(e.detail.value);
            if (index >= 0) {
                filters.splice(index, 1);
            }
        }

        dispatch('select', { filters });
    };

    const clearAllTags = () => {
        filters = [];
        dispatch('clear', {});
    };
</script>

<div class="header">
    <h2>Filters</h2>
    <button on:click={clearAllTags}>Clear Filters</button>
</div>
<section>
    {#each list as tag}
        <Tag enable="true" tag={tag} on:click={clickTag} />
    {/each}
</section>

<style>
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 0.5rem;
        border-bottom: 1px solid var(--color-blue-flag);
        margin-bottom: 0.75rem;
    }
    .header h2 {
        font-size: var(--fs-md);
    }
    .header button {
        padding: 0.5rem 1rem;
        border: 0;
        border-radius: 0.5rem;
        background-color: var(--color-red-flag-lite);
        color: white;
        font-size: var(--fs-xs);
        cursor: pointer;
        transition: all 50ms ease-in-out;
    }
    .header button:hover {
        background-color: var(--color-red-flag);
    }
    section {
        /* border: 1px solid green; */
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;
    }
</style>