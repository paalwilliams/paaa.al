<script lang="ts">
  export let text: string
  export let depth: number 
  const {text, depth} = $props()
</script>
{#if depth === 1}
<h1 class="text-8xl">{text}</h1>
{:else if depth === 2}
<h2 class="text-6xl">{text}</h2>
{:else if depth === 3}
<h3 class="text-4xl">{text}</h3>
{:else if depth === 4}
<h4 class="text-3xl">{text}</h4>
{:else if depth === 5}
<h5 class="text-2xl">{text}</h5>
{:else if depth === 6}
<h6 class="text-xl">{text}</h6>

{/if}

