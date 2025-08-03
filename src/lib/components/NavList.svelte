<script>
	import { page } from '$app/stores';
	import ListItem from './ListItem.svelte';

	$: post = $page.url.searchParams.get('post');

	$: links = [
			{
				path: '/',
				label: '~/',
				suffix: null
			},
			{
				path: '/blog',
				label: "blog/",
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
