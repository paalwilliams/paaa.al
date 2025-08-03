<script lang="ts">
	import { type ComponentProps } from 'svelte';
	import ListItem from "./ListItem.svelte";
	type ListItemProps = ComponentProps<ListItem>

	export let listItems: ListItemProps[]
</script>


<ul class="blogPostList">
	{#each listItems as {path, label}}
		<ListItem { path } { label }/>
	{/each}

</ul>


<style>

.blogPostList {
	text-align: center;
}

</style>
