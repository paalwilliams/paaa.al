<script lang="ts">
	export let center = false ;
	const centerString ="flex items-center justify-center h-full"

</script>
<section class="p-4 h-[calc(100vh-80px)] {center && centerString}">
	<slot/>
</section>
