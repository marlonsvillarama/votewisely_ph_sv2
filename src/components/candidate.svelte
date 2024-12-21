<script>
    import { createEventDispatcher } from "svelte";
    import Tag from "./tag.svelte";

    export let candidate = {};
    export let tags = [];
    let candidateTags = candidate.tags.slice(0, 2);

    const calculateAge = (options) => {
        let { dob } = options;
        let age = '-';
        if (dob?.length < 8) { return '-'; }

        let today = new Date();
        let birthDate = new Date(`${dob.slice(0, 4)}/${dob.slice(4, 2)}/${dob.slice(6, 2)}`);
        age = today.getFullYear() - birthDate.getFullYear();
        
        let m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        return age;
    };

    let age = calculateAge({ dob: candidate.dob });
    let showAge = !!candidate.dob === true;
    
    const generateId = (length = 10) => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';

        let counter = 0;
        while (counter < length) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
            counter++;
        }

        return result;
    };
    let id = generateId();

    const getRunningFor = (term) => {
        let value = '-';
        switch(term.toString()) {
            case '1': { value = 'first'; break; }
            case '2': { value = 'second'; break; }
            case '3': { value = 'third'; break; }
            case '4': { value = 'fourth'; break; }
            case '5': { value = 'fifth'; break; }
            case '6': { value = 'sixth'; break; }
        }
        return `Running for ${value} term`;
    };

    const getTag = (id) => {
        let tag = tags.find(t => t.id === id);
        return tag;
    };

    let dispatch = createEventDispatcher();
    const viewProfile = (e) => {
        dispatch('click', { slug: candidate.slug });
    };
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<buttton id={id} class="card candidate" data-tags={candidate.tags.join(',')} on:click={viewProfile}>
    <div class="header">
        <img src="/images/profiles/{candidate.slug}.jpg" alt={candidate.last} />
        <aside>
            <div class="name">
                <span class="ln">{candidate.ln}</span>
                <span class="age">{#if showAge}{age} years old{:else}-{/if}</span>
                <!-- <span class="fn">{candidate.short_fn}</span> -->
                <span class="job">{candidate.job}</span>
            </div>
            <div class="details">
                <span class="job">{getRunningFor(candidate.term)}</span>
            </div>
        </aside>
    </div>
    <div class="contents">
        <span class="party">{candidate.party}</span>
        <!-- <div class="tags">
            {#each candidateTags as tag}
                <Tag tag={getTag(tag)} />
            {/each}
        </div> -->
    </div>
</buttton>

<style>
    .candidate {
        cursor: pointer;
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
        transform: scale(105%);
    }
    .header {
        display: grid;
        grid-template-columns: 2fr 3fr;
        gap: 1rem;
        color: var(--color-font);
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
        padding: 0.25rem 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        /* gap: 0.75rem; */
    }
    aside span {
        line-height: 1.2rem;
    }
    .name {
        display: flex;
        flex-direction: column;
        /* gap: 0.125rem; */
        line-height: 1.25rem;
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
    .name .fn {
        /* font-family: var(--font-serif); */
        font-weight: 600;
        letter-spacing: 0.5px;
        text-transform: uppercase;
    }
    .details {
        display: flex;
        flex-direction: column;
        line-height: 1.25rem;
        /* gap: 0.125rem; */
    }
    /* .contents { */
        /* padding: 0.3rem 0.75rem 0.5rem; */
    /* } */
    .party {
        display: block;
        text-align: center;
		padding: 0.25rem 0;
        line-height: 1.6rem;
        font-weight: 600;
        font-size: var(--fs-sm);
        letter-spacing: 0.25px;
        color: var(--color-default);
		/* background-color: var(--color-white); */
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