<script lang="ts">
  import SvelteMarkdown from 'svelte-markdown'
  import Heading from './markdown/renderers/Heading.svelte';
  import Link from './markdown/renderers/Link.svelte';
  export let source: string;

</script>



<SvelteMarkdown {source} renderers={{heading: Heading, link: Link}}/>


