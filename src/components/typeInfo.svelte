<script>
    export let data = [];

    let selected = null;
    data = data.map(d => {
        let isSelected = selected === null;
        if (selected === null) { selected = d; }

        return {
            ...d,
            selected: isSelected
        };
    });

    const viewInfo = (e) => {
        let info = e.target.dataset.info;
        let infoButtons = document.querySelectorAll(`button.info-btn`);
        infoButtons.forEach(s => {
            if (s.classList.contains('selected') === true) { s.classList.remove('selected'); }
            return true;
        });

        let targetButton = document.querySelector(`button[data-info="${info}"]`);
        console.log('targetButton', targetButton);

        if (targetButton) { targetButton.classList.add('selected'); }

        let infoSections = document.querySelectorAll(`section.info`);
        infoSections.forEach(s => {
            if (s.classList.contains('hidden') === false) { s.classList.add('hidden'); }
            return true;
        });

        let targetSection = document.querySelector(`section[data-info="${info}"]`);
        console.log('targetSection', targetSection);

        if (targetSection) { targetSection.classList.remove('hidden'); }
    };
</script>

<section class="buttons">
    {#each data as d}
    <button class="info-btn {d.selected === true ? 'selected' : ''}" data-info={d.title} on:click={viewInfo}>{d.title}</button>
    {/each}
</section>

{#each data as d}
<section class="info {d.selected === true ? '' : 'hidden'}" data-info={d.title}>
    <div>
        {#each d.desc as desc}
        <p>{desc}</p>
        {/each}
    </div>
</section>
{/each}

<style>
    /* .buttons {
        margin-bottom: 1rem;
    } */
    button {
        margin-right: 1rem;
        padding: 0.5rem 1rem;
        background-color: transparent;
        /* background-color: rgba(0, 0, 0, 0.1); */
        border: 1px solid transparent;
        border-bottom: 0;
        border: 0;
        font-weight: 500;
        font-size: var(--fs-md);
        opacity: 0.6;
        cursor: pointer;
    }
    button.selected {
        background-color: rgba(0, 0, 0, 0.1);
        border: 1px solid rgba(0, 0, 0, 0.1);
        font-weight: 700;
    }
    button:hover {
        /* scale: 1.05; */
        color: var(--color-red-flag);
    }
    .info {
        border: 1px solid rgba(0, 0, 0, 0.1);
        /* border-radius: 0.25rem; */
        margin-bottom: 1rem;
    }
    /* h1 {
        background-color: rgba(0, 0, 0, 0.1);
        padding: 0.5rem 1rem;
        font-size: var(--fs-md);
        color: var(--color-font);
    } */
    div {
        padding: 1rem 2rem;
    }
    p {
        /* border: 1px solid red; */
        /* padding: 0 1rem 0.5rem; */
        line-height: 2rem;
        /* text-indent: ; */
    }
    p:not(:last-child) {
        margin-bottom: 2rem;
    }
</style>