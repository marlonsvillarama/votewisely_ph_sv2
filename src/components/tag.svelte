<script>
    import { createEventDispatcher } from "svelte";

    export let tag = {};
    export let enable = false;
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

        // console.log(`getClass tag=${tag.id}`, tag);
        // console.log(`getClass tag=${tag.id}`, `enable=${enable}; alert=${tag.alert}`);
        if (enable.toString() === "true") { classList.push('enable'); }
        else {
            if (tag.alert === true) { classList.push('alert'); }
        }

        if (selected === true) { classList.push('selected'); }

        return classList.join(' ');
    };
    let tagClass = getClass();

    const clickTag = (e) => {
        if (enable === false) { return; }

        selected = !selected;
        tagClass = getClass();
        dispatch('click', { value: tag.id, add: selected });
    };
</script>

<div id={id} class={tagClass} on:click={clickTag}>{tag.text}</div>

<style>
    .tag {
		padding: 0.25rem 1rem;
        line-height: 1.6rem;
		border-radius: 4px;
		background-color: rgba(0, 0, 0, 0.1);
		/* color: var(--color-default); */
		font-size: var(--fs-sm);
        letter-spacing: 0.25px;
        position: relative;
	}
	.tag.alert,
    .tag.selected,
    .tag.selected:hover {
		background-color: var(--color-red-flag);
		color: var(--color-white);
	}
    .tag.enable {
        cursor: pointer;
    }
    .tag.enable:hover {
		background-color: rgba(0, 0, 0, 0.15);
    }
    .tag.selected,
    .tag.selected:hover {
        box-shadow: var(--box-shadow);
    }
    .tag.selected:hover {
        background-color: var(--color-red-flag-lite);
    }
</style>