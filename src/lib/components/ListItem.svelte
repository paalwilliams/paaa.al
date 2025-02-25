<script lang="ts">
	export let path: string;
	export let label: string;
</script>

<li class="px-4 hover:italic">
	<a class="text-6xl p-0 m-0" href={path}>{label}/</a>
</li>
