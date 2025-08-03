<script lang="ts">
	import MarkdownRenderer from './MarkdownRenderer.svelte';
	export let data: string;
	export let title: string;
</script>

<section class="blogPostContentWrapper">
<div class="blogPostContent">
	<h1 class="blogContentTitle">{title}</h1>
	<MarkdownRenderer source={data} />
</section>


<style>
.blogPostContentWrapper {
	display: flex;
	justify-content: center;
}
.blogPostContent {
	display: flex;
	flex-direction: column;
	width: 80%;
}
.blogContentTitle {
	text-align: center;
	font-size: 100px;
	margin: 20px;

}

</style>
