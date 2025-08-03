<script>
	import { page } from '$app/state';
	import ListItem from './ListItem.svelte';

	$: post = page.url.searchParams.get('post');

	const links = [
		{
			path: '/',
			label: '~/'
		},
		{
			path: '/blog',
			label: 'blog/',
			suffix: post
		}
	];


</script>

<ul class="navList">
	{#each links as {path, label, suffix}}
		<ListItem path={path} label={label} {suffix}/>
	{/each}
</ul>


<style>
	.navList {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}
</style>
