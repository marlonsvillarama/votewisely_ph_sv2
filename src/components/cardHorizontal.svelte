<script>
    export let data = {};
</script>

<a href={data.link} target="_blank">
    <div class="card-row">
        <img src={data.img} alt={data.title}>
        <aside>
            <h3>{data.title}</h3>
            <p>{data.text}</p>
        </aside>
    </div>
</a>

<style>
    .card-row {
        display: flex;
        gap: 1.5rem;
        height: 3rem;
        border: 1px solid black;
    }
    img {
        width: 25%;
        max-width: 100%;
        height: auto;
    }
    aside {
        max-width: 10rem;
        border: 1px solid green;
    }
</style>