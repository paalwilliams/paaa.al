<script lang="ts">
// let {path, label} : {path: string, label: string } = $props()
export let path: string;
export let label: string;
export let suffix: undefined | string | null = undefined;
</script>

<li class="listItem">
	<a href={path}>{label}{suffix}</a>
</li>

<style> 

	.listItem {
		padding-right: 20px;
		padding-left: 20px;
		list-style: none;
		& a {
			font-size: 50px
		}

		& :hover {
				font-style: italic;
			}
	}

</style>
