<script lang="ts">

	import MarkdownRenderer from "./MarkdownRenderer.svelte";
	export let data: string;
	export let title: string

</script>
	<section class="flex items-center justify-center flex-col">
		<h1>{title}</h1>
		<MarkdownRenderer source={data}/>
	</section>
