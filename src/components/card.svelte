<script>
    export let data = {};
</script>

<div class="card">
    <img src={data.image} alt={data.alt}>
    <section>
        <h3>{data.title}</h3>
        <p>{data.text}</p>
    </section>
</div>

<style>
    .card {
        border: 1px solid red;
        display: inline-block;
    }
</style>