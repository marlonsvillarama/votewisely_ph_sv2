<script>
    import { page } from '$app/stores';
    // import Tag from '../../../../components/tag.svelte';
    // import ProfileSection from '../../../../components/profileSection.svelte';
    import ProfileHeader from '../../../../components/candidate/profileHeader.svelte';
    import WorkExperience from '../../../../components/candidate/workExperience.svelte';
    import Legislations from '../../../../components/candidate/legislations.svelte';
    import Advocacies from '../../../../components/candidate/advocacies.svelte';
    import PoliticalFamily from '../../../../components/candidate/politicalFamily.svelte';
    import Education from '../../../../components/candidate/education.svelte';
    import News from '../../../../components/candidate/news.svelte';

    export let data = {};

    // console.log('[candidate] data', data);
    let type = $page.params.type;
    let slug = $page.params.candidate;
    let candidate = data.candidates[type]?.find(d => d.slug === slug);
    let candidateName = candidate ? `${candidate.ln}, ${candidate.fn}` : 'Not Found';
    // let imgUrl = `/images/profiles/${slug}.jpg`;
    // let age = 0;

    /* const getTag = (id) => {
        let tag = data.tags.find(t => t.id === id);
        return tag;
    }; */

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

<a id="top"></a>
<div class="banner">
    <h1 class="wrapper">{candidateName}</h1>
</div>

<section class="candidate wrapper">

    <ProfileHeader data={candidate} tags={data.tags} />

    <div class="details">

        <WorkExperience data={candidate.exp} />

        <Legislations data={candidate} />

        <Advocacies data={candidate} />

        <PoliticalFamily data={candidate} />

        <Education data={candidate.ed} />

        <News data={candidate.news} />
    </div>
</section>

<style>
    .banner {
        padding: 2.75rem 0 1.5rem;
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
    /*.header {
        display: flex;
        gap: 2rem;
        /* grid-template-columns: 2fr 3fr; */
        /* background-color: aliceblue; *
    }
    /* .header > * {
        border: 1px solid red;
    } *
    img {
        min-width: 16rem;
        max-width: 20rem;
        height: auto;
        border-radius: 4px;
        /* box-shadow: var(--box-shadow); *
    }
    aside {
        /* width: 100%; */
        /* height: 100%;
        min-height: 100%; */
        /* border: 1px solid black; */
        /* flex: auto; *
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
        /* line-height: 1.6rem; *
        font-size: var(--fs-xl);
        font-weight: 700;
        letter-spacing: 0.25px;
        color: var(--color-slate-900);
		/* background-color: rgba(0, 0, 0, 0.1); *
    }
    /* .actions {
        text-align: center;
    } *
    button {
        cursor: pointer;
        background-color: white;
        color: var(--color-slate-900);
        box-shadow: var(--button-shadow);
        /* border: 1px solid var(--color-red-flag); *
        font-weight: 500;
        border: 0;
        border-radius: 4px;
        padding: 0.5rem 1rem;
        margin-right: 1rem;
        transition: all 50ms ease-in-out;
    }
    button:hover {
        /* background-color: var(--color-blue-flag-lite); *
        box-shadow: var(--button-shadow-hover);
        /* color: white; *
        transform: scale(1.05);
    }
    .tags {
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;
        justify-content: flex-start;
        /* border: 1px solid red; *
        margin: 0.5rem 0 0.25rem -0.25rem;
    } */
    .details {
        /* border: 1px solid green; */
        display: flex;
        flex-direction: column;
        gap: 3.5rem;
    }
    /* .detail {
        font-size: var(--fs-sm);
        line-height: 1.5rem;
    }
    .detail h3 {
        padding-bottom: 0.5rem;
        margin-bottom: 1rem;
        border-bottom: 1px solid #CCC;
    }
    .detail ul {
        /* border: 1px solid red; *
        /* margin-left: 2rem; *
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
    } */
</style>