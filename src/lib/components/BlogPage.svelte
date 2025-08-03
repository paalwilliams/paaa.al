<script lang="ts">
	export const prerender = false
	import { page } from '$app/stores';
	import BlogContent from '$lib/components/BlogContent.svelte';
	import BlogPostList from '$lib/components/BlogPostList.svelte';
	import { onMount, type ComponentProps } from 'svelte';
	import ListItem from '$lib/components/ListItem.svelte';
	import { getBlogPost, getBlogPosts, type GithubApiResponse } from '$lib/util/fetch.util';
	import type { AxiosResponse } from 'axios';
	const request = getBlogPosts();

	const cleanBlogPostEntryName = (name: string) => {
		return name.split('.')[0];
	};
	const filterBlogPosts = (posts: GithubApiResponse[]) => {
		return posts.filter((post) => !post.name.includes('README'));
	};

	type ListItemProps = ComponentProps<ListItem>


	const githubApiResponseToListItemProps = (post: GithubApiResponse):  ListItemProps => {

		return {
			path: `/blog?post=${post.name}`,
			label: cleanBlogPostEntryName(post.name)
		}

	}
	let post: string | null;
	onMount(() => {
		post = $page.url.searchParams.get('post');

	})
	let postQuery: Promise<AxiosResponse> | null;
	onMount(() => {
	 postQuery = post ? getBlogPost(post) : null;
	}) 
</script>

{#if !post}
	{#await request then data}
		<BlogPostList listItems={filterBlogPosts(data).map(githubApiResponseToListItemProps)}/>
	{/await}
{:else if postQuery}
	{#await postQuery then { data }}
		<BlogContent {data} title={post} />
	{/await}
{/if}


