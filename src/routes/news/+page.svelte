<script>
    import { onMount } from 'svelte';
    let records = [];
    onMount(async () => {
        records = await directus.items('Articles').readMany();
    });
</script>

{#each records as record}
<div>{record.titre}</div>
{/each}
