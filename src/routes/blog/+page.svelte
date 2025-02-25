<script lang="ts">
	import {getBlogPosts} from '$lib/util/fetch.util'
	const request = getBlogPosts()
	request.then(console.log)
</script>


{#await request then data} 
	{#each data as post}

	<section class="h-screen flex items-center justify-center flex-col">
	<h1 class="text-6xl hover:italic"><a href={`/blog/${post.name}`}>{post.name}</a></h1>
	</section>
	{/each}
{/await}


