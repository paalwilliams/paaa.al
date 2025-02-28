<script lang="ts"> 
	import MarkdownRenderer from "$lib/components/MarkdownRenderer.svelte"; 
	import {page} from '$app/state'
	import {getBlogPost} from '$lib/util/fetch.util'
	const blogPostQuery = getBlogPost(page.params.post)
</script>


{#await blogPostQuery then {data}}
	<section class="h-screen flex items-center justify-center flex-col">
	<MarkdownRenderer source={data}/>
	</section>
	
{/await}



