<script>
    export let id = "candidate";

</script>

<div id={id} class="card candidate">
    <img src={abalos} alt="Abalos" />
    <div class="name">
        <span class="ln">Abalos</span>
        <span>Benhur Jr.</span>
    </div>
    <div class="tags">
        <span class="tag alert">Political family</span>
        <span class="tag">Former DILG Secretary</span>
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
		text-align: center;
    }
    .candidate:hover {
        box-shadow: var(--card-shadow-full);
        transform: translateY(-3px);
    }
	/* .candidates .card {
	} */
	img {
		width: 100%;
        height: auto;
		overflow: hidden;
	}
	.name,
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
	.name .ln {
		font-size: var(--fs-lg);
		text-transform: uppercase;
		font-weight: 900;
		color: var(--color-default);
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