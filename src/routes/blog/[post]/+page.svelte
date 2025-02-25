<script lang="ts">
	import MarkdownRenderer from "../../../lib/components/MarkdownRenderer.svelte";
	import {page} from '$app/state'
	import { onMount } from "svelte";

	const post = page.params.post


</script>




<MarkdownRenderer source={"# Hello world"}/>
