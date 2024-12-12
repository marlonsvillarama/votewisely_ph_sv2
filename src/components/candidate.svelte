<script>
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
            <div class="sub">
                {#if showAge}
                    <span class="age">{age} years old</span>
                {/if}
                <span class="job">{age} years old</span>
            </div>
            <!-- <span class="party">{data.party || 'Party'}</span> -->
        </aside>
    </div>
    <div class="tags">
        {#each data.tags as tag}
            <span class="tag {tag.alert ? 'alert' : ''}">{tag.text}</span>
        {/each}
    </div>
</div>

<style>
    .candidate {
        cursor: pointer;
		box-shadow: var(--card-shadow);
        transition: all 100ms ease-in-out;
        margin: 0 auto;
        max-width: 20rem;
        min-width: 16rem;
		/* text-align: center; */
    }
    .candidate:hover {
        box-shadow: var(--card-shadow-full);
        transform: translateY(-3px);
    }
    .candidate .header {
        display: grid;
        grid-template-columns: 2fr 3fr;
        gap: 1rem;
    }
	img {
		width: 100%;
        height: auto;
        max-height: 8rem;
		overflow: hidden;
	}
    .header aside {
        /* border: 1px solid green; */
        padding: 0.5rem 0;
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        font-size: var(--fs-sm);
        font-family: var(--font-serif);
    }
    .name {
        display: flex;
        flex-direction: column;
        /* line-height: 1.5rem; */
        /* justify-content: flex-start; */
		/* align-items: center; */
    }
	.name .ln {
        font-family: var(--font-sans);
		font-size: var(--fs-lg);
		text-transform: uppercase;
		font-weight: 900;
		color: var(--color-default);
        letter-spacing: 1.25px;
	}
    .name .fn {
        margin-top: -0.25rem;
    }
	.tags {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem;
		font-weight: 400;
		font-size: var(--fs-sm);
		background-color: var(--color-white);
		color: rgba(0, 0, 0, 0.5);
	}
	.tags {
		padding-top: 0;
		justify-content: flex-start;
		gap: 0.5rem;
	}
	.tag {
		padding: 0.125rem 1rem;
		border-radius: 8px;
		background-color: rgba(0, 0, 0, 0.1);
		color: var(--color-default);
		font-size: var(--fs-xs);
	}
	.tag.alert {
		background-color: var(--color-red-flag);
		color: var(--color-white);
	}
</style>