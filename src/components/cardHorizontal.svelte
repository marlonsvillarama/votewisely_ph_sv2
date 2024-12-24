<script>
    export let data = {};
</script>

<div class="card-row">
    <img src={data.img} alt={data.title}>
    <aside>
        <h3>{data.title}</h3>
        <p>{data.text}</p>
    </aside>
</div>

<style>
    .card-row {
        display: flex;
        gap: 1.5rem;
        border: 1px solid black;
    }
    aside {
        max-width: 10rem;
        border: 1px solid green;
    }
</style>