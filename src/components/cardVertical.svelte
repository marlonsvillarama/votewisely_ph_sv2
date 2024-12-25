<script>
    import { createEventDispatcher } from "svelte";
    export let data = {};

    let dispatch = createEventDispatcher();
    const clickButton = (e) => {
        dispatch('click', { link: data.link });
    };
</script>

<button on:click={clickButton}>
    <div class="card-col">
        <img src={data.img} alt={data.title}>
        <h3>{data.title}</h3>
        <p>{data.text}</p>
    </div>
</button>

<style>
    button {
        border: 0;
        background-color: transparent;
    }
    .card-col {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        max-width: 320px;
        gap: 1rem;
        box-shadow: var(--card-shadow);
        color: var(--color-font);
        transition: all 100ms ease-in-out;
        /* cursor: pointer; */
    }
    .card-col:hover {
        scale: 1.02;
        /* box-shadow: var(--box-shadow); */
    }
    .card-col h3 {
        align-self: center;
        padding-bottom: 0.25rem;
        border-bottom: 1px solid var(--color-red-flag);
    }
    .card-col > p {
        font-family: var(--font-sans);
        font-size: var(--fs-sm);
        width: 100%;
        line-height: 1.5rem;
        padding: 0 0.75rem 1rem;
    }
</style>