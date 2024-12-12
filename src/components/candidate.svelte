<script>
    import Tag from "./tag.svelte";

    export let data = {};

    const calculateAge = (options) => {
        let { dob } = options;
        let age = 0;
        return age;
    };

    let slug = data.slug || 'candidate';
    console.log('slug', slug);
    let first = data.short_fn || 'First';
    let last = data.ln || 'Last';
    let age = calculateAge({ dob: data.dob });
    let showAge = !!data.dob === true;

    let job = data.job || '';

    let imgUrl = `/images/profiles/${slug}.jpg`;
</script>

<div id={slug || 'candidate'} class="card candidate">
    <div class="header">
        <img src={imgUrl} alt={last} />
        <aside>
            <div class="name">
                <span class="ln">{last}</span>
                <span class="fn">{first}</span>
            </div>
            <span class="age">{#if showAge}{age} years old{:else}test{/if}</span>
            <span class="job">{job}</span>
        </aside>
    </div>
    <div class="contents">
        <span class="party">{data.party}</span>
        <div class="tags">
            {#each data.short_tags as tag}
                <Tag alert={tag.alert} text={tag.text} enable=true />
                <!-- <span class="tag {tag.alert ? 'alert' : ''}">{tag.text}</span> -->
            {/each}
        </div>
    </div>
</div>

<style>
    .candidate {
        /* cursor: pointer; */
		box-shadow: var(--card-shadow);
        transition: all 100ms ease-in-out;
        margin: 0 auto;
        padding: 0;
        max-width: 20rem;
        min-width: 16rem;
        display: grid;
        /* gap: 0.5rem; */
		/* text-align: center; */
        font-size: var(--fs-xs);
        font-family: var(--font-sans);
		border-radius: 4px;
    }
    .candidate:hover {
        box-shadow: var(--card-shadow-full);
        transform: translateY(-3px);
    }
    .header {
        display: grid;
        grid-template-columns: 2fr 3fr;
        gap: 1rem;
    }
	img {
		width: 100%;
        height: auto;
        max-height: 10rem;
        border-top-left-radius: 4px;
		/* overflow: hidden; */
	}
    .header aside {
        /* border: 1px solid green; */
        padding: 0.5rem 0 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        /* gap: 0.75rem; */
    }
    .name {
        display: flex;
        flex-direction: column;
        line-height: 1.2rem;
        /* justify-content: flex-start; */
		/* align-items: center; */
    }
	.name .ln {
		font-size: var(--fs-lg);
		text-transform: uppercase;
		font-weight: 900;
		color: var(--color-default);
        letter-spacing: 1.25px;
        margin-bottom: 0.25rem;
	}
    /* .name .fn {
        font-family: var(--font-serif);
    } */
    /* .contents { */
        /* padding: 0.3rem 0.75rem 0.5rem; */
    /* } */
    .party {
        display: block;
        text-align: center;
		padding: 0rem 1rem;
        line-height: 1.6rem;
        font-weight: 700;
        /* font-size: var(--fs-sm); */
        letter-spacing: 0.25px;
        color: var(--color-slate-900);
		background-color: var(--color-white);
		background-color: rgba(0, 0, 0, 0.1);
    }
	.tags {
		display: flex;
		/* justify-content: space-between; */
		align-items: center;
		gap: 0.5rem;
		padding: 0.5rem;
		font-weight: 400;
		font-size: var(--fs-sm);
		/* background-color: var(--color-white); */
		/* color: rgba(0, 0, 0, 0.5); */
        /* border: 1px solid red; */
	}
</style>