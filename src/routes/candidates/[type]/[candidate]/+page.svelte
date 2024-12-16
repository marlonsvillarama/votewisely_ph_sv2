<script>
    import { page } from '$app/stores';
    import Tag from '../../../../components/tag.svelte';

    export let data = {};

    console.log('[candidate] data', data);
    let type = $page.params.type;
    let slug = $page.params.candidate;
    let candidate = data.candidates[type]?.find(d => d.slug === slug);
    let candidateName = candidate ? `${candidate.ln}, ${candidate.fn}` : 'Not Found';
    let imgUrl = `/images/profiles/${slug}.jpg`;
    let age = 0;

    const getTag = (id) => {
        let tag = data.tags.find(t => t.id === id);
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

<svelte:head>
	<title>VoteWisely.PH - {candidateName}</title>
	<meta name="description" content={candidateName} />
</svelte:head>

<div class="banner">
    <h1 class="wrapper">{candidateName}</h1>
</div>

<section class="candidate wrapper">
    <div class="header">
        <img src={imgUrl} alt={candidateName}>
        <aside>
            <div class="head">
                <h2 id="party">{candidate.party}</h2>
                <div class="tags">
                    {#each candidate.tags as tag}
                        <Tag tag={getTag(tag)} />
                    {/each}
                </div>
                <span class="age">{age} years old</span>
                <span class="job">{candidate.job}</span>
            </div>
            <div class="contact">
                <p>Website: {#if candidate.web}<a href={candidate.web} target="_blank">{candidate.web}</a>{:else}None{/if}</p>
                <p>Email: {#if candidate.email}<a href="mailto:{candidate.email}" target="_blank">{candidate.email}</a>{:else}None{/if}</p>
            </div>
            <div class="actions">
                <button id="add-info" on:click={addInfo}>Add info</button>
                <button id="fact-check" on:click={factCheck}>Fact check</button>
                <button id="discuss" on:click={discuss}>Discuss</button>
                <button id="share" on:click={share}>Share</button>
            </div>
        </aside>
    </div>

    <div class="details">
        <div class="detail">
            <h3>Work Experience</h3>
            {#if candidate.exp?.length > 0}
                <ul>
                    {#each candidate.exp as exp}
                        <li>{exp.value}
                            {#if exp.sub?.length > 0}
                                <ul>
                                    {#each exp.sub as sub}
                                    <li>{sub}</li>
                                    {/each}
                                </ul>
                            {/if}
                        </li>
                    {/each}
                </ul>
            {:else}
                <p>No work experience identified at this time.</p>
            {/if}
        </div>
        <div class="detail">
            <h3>Known Advocacies</h3>
            {#if candidate.adv?.length > 0}
                <p>{candidate.ln} is a known advocate for the following issues:</p>
                <ul>
                    {#each candidate.adv as adv}
                        <li>{adv}</li>
                    {/each}
                </ul>
            {:else}
                <p>No advocacies identified at this time.</p>
            {/if}
        </div>
        <div class="detail">
            <h3>Relatives in Politics</h3>
            {#if candidate.pf?.length > 0}
                <p>{candidate.ln} is a member of a political family that includes the following persons:</p>
                <ul>
                    {#each candidate.pf as pf}
                        <li>{pf.name}{pf.rel ? ', ' + pf.rel : ''} - {pf.pos}</li>
                    {/each}
                </ul>
            {:else}
                <p>No known relatives in politics.</p>
            {/if}
        </div>
        <div class="detail">
            <h3>Net Worth</h3>
            <p>No Statement of Assets, Liabilities, and Net Worth (SALN) released at this time.</p>
        </div>
        <div class="detail">
            <h3>Education</h3>
            {#if candidate.ed?.length > 0}
                <ul>
                    {#each candidate.ed as ed}
                    <li>{ed}</li>
                    {/each}
                </ul>
            {:else}
                <p>No known educational background at this time.</p>
            {/if}
        </div>
        <div class="detail">
            <h3>Related News</h3>
            {#if candidate.news?.length > 0}
                <ul>
                    {#each candidate.news as news}
                        <li><a href={news.link} target="_blank">{news.text}</a></li>
                    {/each}
                </ul>
            {:else}
                <p>No known related news at this time.</p>
            {/if}
        </div>
    </div>
</section>

<style>
    .banner {
        padding: 4.75rem 0 1.5rem;
        /* background: linear-gradient(var(--color-blue-flag) 0, var(--color-blue-flag) 60%, white ); */
        background-color: var(--color-blue-flag);
        opacity: 0.7;
        color: white;
        font-weight: 700;
    }
    .candidate {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
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
    .details {
        /* border: 1px solid green; */
        display: flex;
        flex-direction: column;
        gap: 2.5rem;
    }
    .detail {
        font-size: var(--fs-sm);
        line-height: 1.5rem;
    }
    .detail h3 {
        padding-bottom: 0.5rem;
        margin-bottom: 1rem;
        border-bottom: 1px solid #CCC;
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