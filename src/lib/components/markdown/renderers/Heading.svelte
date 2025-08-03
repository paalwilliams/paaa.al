<script lang="ts">
	export let text: string;
	export let depth: number;
</script>

{#if depth === 1}
	<h1 class="depth{depth}">{text}</h1>
{:else if depth === 2}
	<h2 class="depth{depth}">{text}</h2>
{:else if depth === 3}
	<h3 class="depth{depth}">{text}</h3>
{:else if depth === 4}
	<h4 class="depth{depth}">{text}</h4>
{:else if depth === 5}
	<h5 class="depth{depth}">{text}</h5>
{:else if depth === 6}
	<h6 class="depth{depth}">{text}</h6>
{/if}


<style> 

  .depth1 {
	font-size:80px;
	margin: 0
  }

  .depth2 {
	font-size:60px;
	margin: 0
  }
  .depth3 {
	font-size:40px;
	margin: 0
  }
  .depth4 {
	font-size:30px;
	margin: 0
  }
  .depth5 {
	font-size:20px;
	margin: 0
  }
  .depth6 {
	font-size:10px;
  }


</style>
