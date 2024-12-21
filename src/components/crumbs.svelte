<script>
    export let data = [];

    let list = data.map(d => {
        let arr = data.slice(0, data.indexOf(d));
        console.log(`d = ${d} arr`, arr);
        return {
            link: `/${data.slice(0, data.indexOf(d) + 1).join('/')}`,
            text: d
        };
    });
    console.log('list', list);
</script>

{#if data.length > 0}
<ul>
    {#each list as item}
    <li><a href={item.link}>{item.text}</a></li>
    {/each}
</ul>
{/if}

<style>
    ul {
        /* border: 1px solid red; */
        list-style: none;
    }
    li {
        display: inline-block;
        margin-right: 1rem;
        /* border: 1px solid black; */
        align-items: center;
        text-transform: uppercase;
        /* font-size: var(--fs-md); */
    }
    li:last-child {
        opacity: 0.9;
    }
    li:not(:last-child) {
        opacity: 0.5;
    }
    li:not(:last-child)::after {
        padding-left: 1rem;
        content: '\203A';
        font-weight: bold;
        /* font-size: var(--fs-xl); */
    }
    li:hover {
        opacity: 1;
        scale: 1.05;
    }
    a {
        font-weight: 700;
        letter-spacing: 0.25px;
    }
    a:hover {
        color: var(--color-red-flag);
    }
</style>