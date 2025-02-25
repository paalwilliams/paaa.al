<script lang="ts">
	import { onMount } from 'svelte';
	import {getBlogPosts} from '$lib/util/fetch.util'
	import {type GithubApiResponse} from '$lib/util/fetch.util'
	let data: GithubApiResponse[];
	let loading = true;

onMount(async () =>{
	data = await getBlogPosts();
	loading = false;
})
</script>


{#if !loading} 
	{#each data as post}
		{post.name}
	{/each}
{/if}


