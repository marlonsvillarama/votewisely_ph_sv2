<script>
    import Header from '../components/header.svelte';
	import Footer from '../components/footer.svelte';
    import '../app.css';

	let { children } = $props();
</script>

<div class="app">

    <Header />

	<main>
		{@render children()}
	</main>

	<Footer />

</div>

