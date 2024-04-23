<script lang="ts">
let slideUrl: string = '';

$: console.log(slideUrl)
</script>

<div>
    <label for="slideurl">Where are your slides located?
    <input type="text" name="slideurl" bind:value={slideUrl}>
</label>
</div>

