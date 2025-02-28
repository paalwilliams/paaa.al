<script lang="ts">
	import {getBlogPosts} from '$lib/util/fetch.util'
	const request = getBlogPosts()
</script>


{#await request then data} 
		<section class=" h-screen flex items-center justify-center flex-col">
{#each data as post}
		<h1 class="text-6xl hover:italic py-4 underline">
			<a href={`/blog/${post.name}`}>{post.name}</a>
		</h1>
	{/each}
	</section>
{/await}


