<script lang="ts">
	import MarkdownRenderer from "../../../lib/components/MarkdownRenderer.svelte";
	import {page} from '$app/state'
	import axios from "axios";
	export let url: string;
	let result = axios.get(`https://raw.githubusercontent.com/paalwilliams/blog-posts/main/${page.params.post}`);



</script>


{#await result then {data}}
	<section class="h-screen flex items-center justify-center flex-col">
	<MarkdownRenderer source={data}/>
	</section>
	
{/await}



