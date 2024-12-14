<script>
    import { createEventDispatcher } from "svelte";
    import Tag from "./tag.svelte";
    export let data = [];
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
</script>

<!-- <h1>Filters</h1> -->
<section>
    {#each data as tag}
        <Tag enable="true" text={tag.text} value={tag.id} on:click={clickTag} />
    {/each}
</section>

<style>
    section {
        /* border: 1px solid green; */
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;
    }
</style>