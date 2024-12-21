<script>
    import { createEventDispatcher } from "svelte";
    import Tag from "./tag.svelte";
    import { goto } from "$app/navigation";
    export let list = [];
    let filters = [];
    let btnClass = 'disabled';

    let dispatch = createEventDispatcher();
    const clickTag = (e) => {
        console.log('clickTag e', e);
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

        updateClearClass();

        dispatch('select', { filters });
    };

    const clearAllTags = () => {
        filters = [];
        // for (let i = 0, count = list.length; i < count; i++) {
        //     clickTag({ detail: { value: list} });
        // }
        dispatch('clear');
    };

    const updateClearClass = (options) => {
        console.log(`filters`, filters);
        console.log(`btnClass`, btnClass);

        if (filters.length > 0 && btnClass.indexOf('disabled') >= 0) {
            console.log('removing disabled class...');
            btnClass = '';
        }
        else if (filters.length <= 0 && btnClass.indexOf('disabled') < 0) {
            console.log('adding disabled class...');
            btnClass = 'disabled';
        }
        console.log('btnClass', btnClass);
    };
</script>

<div class="header">
    <h2>Filters</h2>
    <button class={btnClass} on:click={clearAllTags}>Clear Filters</button>
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
        border-bottom: 1px solid var(--color-red-flag);
        margin-bottom: 0.75rem;
    }
    .header h2 {
        font-size: var(--fs-md);
    }
    .header button {
        padding: 0.5rem 1rem;
        border: 0;
        border-radius: 0.5rem;
        background-color: var(--color-red-flag);
        color: white;
        font-size: var(--fs-sm);
        cursor: pointer;
        transition: all 50ms ease-in-out;
    }
    .header button:hover {
        background-color: var(--color-red-flag-lite);
    }
    .header button.disabled {
        background-color: #CCC;
        color: var(--color-default);
        opacity: 0.5;
        cursor: not-allowed;
    }
    section {
        /* border: 1px solid green; */
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;
    }
</style>