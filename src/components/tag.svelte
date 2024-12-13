<script>
    export let text = 'Tag';
    export let alert = false;
    export let enable = false;
    
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
</script>

<span id={id} class="tag{alert ? ' alert' : ''}{enable ? ' enable' : ''}">{text}</span>

<style>
    .tag {
		padding: 0rem 1rem;
        line-height: 1.6rem;
		border-radius: 4px;
		background-color: rgba(0, 0, 0, 0.1);
		color: var(--color-default);
		font-size: var(--fs-xs);
        letter-spacing: 0.5px;
	}
	.tag.alert {
		background-color: var(--color-red-flag);
		color: var(--color-white);
	}
    .tag.enable {
        cursor: pointer;
    }
    .tag.enable:hover {
		background-color: rgba(0, 0, 0, 0.15);
    }
</style>