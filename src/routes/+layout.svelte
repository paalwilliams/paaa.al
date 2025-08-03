<script>
	import Header from '$lib/components/Header.svelte';
	import '../app.css';
	let blogEnabled = false;
</script>
<div class="wrapper">
{#if blogEnabled}
	<Header />
{/if}
	<slot />
</div>
<style>

.wrapper {
	display: flex;
	flex-direction: column;
	height: 100%;
}
</style>
