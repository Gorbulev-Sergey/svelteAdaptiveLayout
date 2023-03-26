<script>
	import After from '$lib/After.svelte';
	import Before from '$lib/Before.svelte';
	import { filter } from '$lib/scripts/storage';

	let routes = [
		{ url: '/', title: 'Домой' },
		{ url: '/about', title: 'О нас' }
	];
</script>

<Before>
	<div class="sticky-top mb-3 bg-light">
		<div class="d-flex justify-content-between align-items-center">
			<div class="ms-3">Заголовок</div>
			<div class="dropdown">
				<button class="btn btn-light m-1" data-bs-toggle="dropdown">Меню</button>
				<div class="dropdown-menu bg-light shadow-sm border-0">
					<div>
						{#each routes as route}
							<button class="btn btn-light text-dark text-start w-100 rounded-0"
								>{route.title}</button
							>
						{/each}
					</div>
				</div>
			</div>
		</div>
		<div class="d-flex justify-content-between align-items-center bg-light p-2">
			<button class="btn btn-sm btn-dark" on:click={async () => ($filter = 1)}>1</button>
			<button class="btn btn-sm btn-dark" on:click={async () => ($filter = 2)}>2</button>
		</div>
	</div>
	<slot />
</Before>
<After>
	<div class="d-flex align-items-start">
		<div class="sticky-top bg-light" style="width: 15em; min-height: 100vh;">
			<div class="m-3">Заголовок</div>
			<div>
				{#each routes as route}
					<button class="btn btn-light text-dark text-start w-100 rounded-0">{route.title}</button>
				{/each}
			</div>
		</div>
		<div class="flex-grow-1 d-flex flex-column gap-3">
			<div class="sticky-top d-flex justify-content-between align-items-center bg-light p-2 mb3">
				<button class="btn btn-sm btn-dark" on:click={async () => ($filter = 1)}>1</button>
				<button class="btn btn-sm btn-dark" on:click={async () => ($filter = 2)}>2</button>
			</div>
			<div class="px-2">
				<slot />
			</div>
		</div>
	</div>
</After>
