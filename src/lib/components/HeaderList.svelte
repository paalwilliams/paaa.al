<script>
	import ListItem from './ListItem.svelte';

	const links = [
{
path: '/',
	      label: '~'
},
		{
			path: '/blog',
			label: 'posts'
		},

	];
</script>

<div class="fixed  border-black border-2 flex w-full p-2 text-center flex-row align-middle">
	<ul class="flex flex-row">
		{#each links as link}
			<ListItem path={link.path} label={link.label} />
		{/each}
	</ul>
</div>
