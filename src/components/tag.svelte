<script>
    import { createEventDispatcher } from "svelte";

    export let alert = false;
    export let enable = false;
    export let text = 'Tag';
    export let value = 'TAG';
    let selected = false;
    
    const generateId = (length = 10) => {
        const TITLE = `generateId`;
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
    let dispatch = createEventDispatcher();

    const getClass = () => {
        let classList = [ 'tag' ];

        if (alert) { classList.push('alert'); }
        if (enable) { classList.push('enable'); }
        if (selected) { classList.push('selected'); }

        return classList.join(' ');
    };
    let tagClass = getClass();

    const clickTag = (e) => {
        if (enable === false) { return; }

        selected = !selected;
        tagClass = getClass();
        dispatch('click', { value, add: selected });
    };
</script>

<div id={id} class={tagClass} on:click={clickTag}>{text}</div>

<style>
    .tag {
		padding: 0rem 1rem;
        line-height: 1.6rem;
		border-radius: 4px;
		background-color: rgba(0, 0, 0, 0.1);
		color: var(--color-default);
		font-size: var(--fs-xs);
        letter-spacing: 0.5px;
        position: relative;
	}
	.tag.alert {
		background-color: var(--color-red-flag);
		color: var(--color-white);
	}
    .tag.enable {
        cursor: pointer;
        /* border: 3px solid transparent; */
    }
    .tag.enable:hover {
		background-color: rgba(0, 0, 0, 0.15);
    }
    .tag.selected,
    .tag.selected:hover {
        background-color: var(--color-red-flag);
        color: var(--color-white);
        box-shadow: var(--box-shadow);
    }
</style>