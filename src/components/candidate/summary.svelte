<script>
    import Tag from "../tag.svelte";

    export let data = {};

    let name = data ? `${data.ln}, ${data.fn}` : 'Not Found';
    let imgUrl = `/images/profiles/${data.slug}.jpg`;
</script>

<div class="header">
    <img src={imgUrl} alt={name}>
    <aside>
        <div class="head">
            <h2 id="party">{data.party}</h2>
            <div class="tags">
                {#each data.tags as tag}
                    <Tag tag={getTag(tag)} />
                {/each}
            </div>
            <span class="age">{age} years old</span>
            <span class="job">{data.job}</span>
        </div>
        <div class="contact">
            <p>Website: {#if data.web}<a href={data.web} target="_blank">{data.web}</a>{:else}None{/if}</p>
            <p>Email: {#if data.email}<a href="mailto:{data.email}" target="_blank">{data.email}</a>{:else}None{/if}</p>
        </div>
        <div class="actions">
            <button id="add-info" on:click={addInfo}>Add info</button>
            <button id="fact-check" on:click={factCheck}>Fact check</button>
            <button id="discuss" on:click={discuss}>Discuss</button>
            <button id="share" on:click={share}>Share</button>
        </div>
    </aside>
</div>

<style>
    .header {
        display: flex;
        gap: 2rem;
        /* grid-template-columns: 2fr 3fr; */
        /* background-color: aliceblue; */
    }
    /* .header > * {
        border: 1px solid red;
    } */
    img {
        min-width: 16rem;
        max-width: 20rem;
        height: auto;
        border-radius: 4px;
        /* box-shadow: var(--box-shadow); */
    }
    aside {
        /* width: 100%; */
        /* height: 100%;
        min-height: 100%; */
        /* border: 1px solid black; */
        /* flex: auto; */
        font-size: var(--fs-sm);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .head {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
    #party {
        /* text-align: center; */
		/* padding: 0.25rem 1rem; */
        /* line-height: 1.6rem; */
        font-size: var(--fs-xl);
        font-weight: 700;
        letter-spacing: 0.25px;
        color: var(--color-slate-900);
		/* background-color: rgba(0, 0, 0, 0.1); */
    }
    /* .actions {
        text-align: center;
    } */
    button {
        cursor: pointer;
        background-color: white;
        color: var(--color-slate-900);
        box-shadow: var(--button-shadow);
        /* border: 1px solid var(--color-red-flag); */
        font-weight: 500;
        border: 0;
        border-radius: 4px;
        padding: 0.5rem 1rem;
        margin-right: 1rem;
        transition: all 50ms ease-in-out;
    }
    button:hover {
        /* background-color: var(--color-blue-flag-lite); */
        box-shadow: var(--button-shadow-hover);
        /* color: white; */
        transform: scale(1.05);
    }
    .tags {
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;
        justify-content: flex-start;
        /* border: 1px solid red; */
        margin: 0.5rem 0 0.25rem -0.25rem;
    }
</style>