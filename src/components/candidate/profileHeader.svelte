<script>
    import Tag from "../tag.svelte";

    export let data = {};
    export let tags = [];

    let name = data ? `${data.ln}, ${data.fn}` : 'Not Found';
    let imgUrl = `/images/profiles/${data.slug}.jpg`;

    const calculateAge = (options) => {
        let { dob } = options;
        let age = '-';
        if (dob?.length < 8) { return 0; }

        let today = new Date();
        let birthDate = new Date(`${dob.slice(0, 4)}/${dob.slice(4, 2)}/${dob.slice(6, 2)}`);
        age = today.getFullYear() - birthDate.getFullYear();
        
        let m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        return age;
    };
    let age = calculateAge({ dob: data.dob });

    const getTag = (id) => {
        let tag = tags.find(t => t.id === id);
        console.log(`getTag(${id})`, tag);
        return tag;
    };

    const addInfo = () => {
        console.log(`addInfo ${slug}`);
    };

    const factCheck = () => {
        console.log(`factCheck ${slug}`);
    };
    
    const discuss = () => {
        console.log(`discuss ${slug}`);
    };

    const share = () => {
        console.log(`share ${slug}`);
    };
</script>

<div class="header">
    <img src={imgUrl} alt={name}>
    <aside>
        <div class="head">
            <h2 id="party">{data.party}</h2>
            <div class="content">
                <div class="tags">
                    {#each data.tags as tag}
                        <Tag tag={getTag(tag)} />
                    {/each}
                </div>
                <!-- <div class="info"> -->
                    <ul class="personal">
                        <li class="job">{data.job}</li>
                        <li>{#if age > 0}{age} years old{:else}Age not disclosed{/if}</li>
                    </ul>
                    <div class="contact">
                        <p>Website: {#if data.web}<a href={data.web} target="_blank">{data.web}</a>{:else}None{/if}</p>
                        <p>Email: {#if data.email}<a href="mailto:{data.email}" target="_blank">{data.email}</a>{:else}None{/if}</p>
                    </div>
                <!-- </div> -->
            </div>
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
        gap: 1.5rem;
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
        border-radius: 0.25rem;
        /* box-shadow: var(--box-shadow); */
    }
    aside {
        /* width: 100%; */
        /* height: 100%;
        min-height: 100%; */
        flex: auto;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 0.75rem;
        /* display: grid;
        grid-template-rows: repeat(3, minmax(1fr, auto));
        grid-auto-rows: max-content; */
    }
    /* aside > * {
        border: 1px solid red;
    } */
    .head {
        display: flex;
        flex-direction: column;
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 0.25rem;
        /* gap: 0.5rem; */
    }
    #party {
        /* text-align: center; */
        display: block;
        width: 100%;
		padding: 0.5rem 1rem;
        margin: 0;
        /* line-height: 1.6rem; */
        font-size: var(--fs-lg);
        font-weight: 700;
        letter-spacing: 0.25px;
        color: var(--color-slate-900);
		background-color: rgba(0, 0, 0, 0.1);
        border-top-left-radius: 0.25rem;
        border-top-right-radius: 0.25rem;
        /* border-radius: 0.25rem; */
    }
    .content {
        padding: 0.5rem 1rem;
        font-size: var(--fs-md);
        display: flex;
        flex-direction: column;
        /* justify-content: space-between; */
        gap: 1rem;
    }
    .info {
        font-size: var(--fs-sm);
    }
    /* .content {
        flex-grow: auto;
    } */
    ul.personal {
        /* border: 1px solid red; */
        list-style: none;
    }
    ul.personal li {
        display: inline;
        padding-right: 0.5rem;
    }
    ul.personal li:not(:last-child) {
        border-right: 1px solid #ccc;
        margin-right: 0.5rem;
    }
    .job {
        font-weight: 600;
        /* font-size: var(--fs-md); */
    }
    /* .actions {
        text-align: center;
    } */
    .contact a {
        letter-spacing: 0.5px;
        color: var(--color-blue-flag);
        text-decoration: underline;
    }
    .contact a:hover {
        font-weight: 600;
    }
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
        margin-right: 0.5rem;
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