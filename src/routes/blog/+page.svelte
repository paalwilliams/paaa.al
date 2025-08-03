<script lang="ts">
	import { page } from '$app/stores';
	import BlogContent from '$lib/components/BlogContent.svelte';
	import MarkdownRenderer from '$lib/components/MarkdownRenderer.svelte';
	import {getBlogPost, getBlogPosts, type GithubApiResponse} from '$lib/util/fetch.util'
	const request = getBlogPosts()

	const cleanBlogPostEntryName = (name: string) => {
		return name.split('.')[0]
	}
	const filterBlogPosts = (posts: GithubApiResponse[]) => {
		return posts.filter((post) => !post.name.includes('README')) 
	}

	$: post = $page.url.searchParams.get('post')

	$: postQuery = post ? getBlogPost(post) : null
</script>

{#if !post}
	{#await request then data} 
			<section class=" h-screen flex items-center justify-center flex-col">
	{#each filterBlogPosts(data) as post}
			<h1 class="text-6xl hover:italic py-4 underline">
				<a href={`/blog?post=${post.name}`}>{cleanBlogPostEntryName(post.name)}</a>
			</h1>
		{/each}
		</section>
	{/await}
	{:else}
		{#if postQuery} 
		{#await postQuery then {data} }
			<BlogContent { data } title={post} />
		{/await}
	{/if}
{/if}
