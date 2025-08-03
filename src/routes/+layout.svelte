<script>
	import Header from '$lib/components/Header.svelte';
	import '../app.css';
</script>
<div class="wrapper">
	<Header />
	<slot />
</div>
<style>

.wrapper {
	display: flex;
	flex-direction: column;
	height: 100%;
}
</style>
