<script>
	import ListItem from './ListItem.svelte';

	const links = [
		{
			path: '/blog',
			label: 'posts'
		}
	];
</script>

<div class="fixed hover:italic border-black border-2 flex w-full p-2 text-center align-middle">
	<ul>
		{#each links as link}
			<ListItem path={link.path} label={link.label} />
		{/each}
	</ul>
</div>
