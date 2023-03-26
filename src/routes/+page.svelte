<script lang="ts">
	import { filter } from '$lib/scripts/storage';
	import type { PageServerLoad } from './$types';

	export let data: PageServerLoad;
</script>

{#if data.posts}
	{#each data.posts as { id, title }}
		<div class="{$filter == 1 ? 'bg-light text-dark' : 'bg-dark text-light'} p-2 mb-3">
			<b>id:</b>
			{id}, <b>title:</b>
			{title}
		</div>
	{/each}
{/if}
