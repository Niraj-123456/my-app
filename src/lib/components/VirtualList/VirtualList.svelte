<script lang="ts">
	import { createInfiniteQuery } from '@tanstack/svelte-query';
	import {
		createVirtualizer,
		elementScroll,
		type VirtualizerOptions
	} from '@tanstack/svelte-virtual';
	import { fetchProducts } from '../../../services/products/products';
	import { onMount } from 'svelte';

	let virtualListEl: HTMLDivElement | null = $state(null);
	let time = Date.now();
	let randomIndex = Math.floor(Math.random() * 10000);
	let scrollToFn: VirtualizerOptions<any, any>['scrollToFn'] = () => {};

	function easeInOutQuint(t: number) {
		return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
	}

	const query = createInfiniteQuery({
		queryKey: ['infinite-scroll'],
		queryFn: ({ pageParam }) => fetchProducts(15, pageParam),
		initialPageParam: 0,
		getNextPageParam: (_lastProduct) =>
			_lastProduct.data.skip > _lastProduct.data.total ? undefined : _lastProduct.data.skip + 15
	});

	let allRows = $derived(
		($query.data && $query.data.pages.flatMap((page) => page.data.recipes)) || []
	);

	$effect(() => console.log('data', $query.hasNextPage));

	let virtualizer = $derived(
		createVirtualizer<HTMLDivElement, HTMLDivElement>({
			count: 0,
			getScrollElement: () => virtualListEl,
			estimateSize: () => 100,
			overscan: 5,
			scrollToFn
		})
	);

	$effect(() => {
		console.log('all rows', allRows);
		$virtualizer.setOptions({
			count: $query.hasNextPage ? allRows.length + 1 : allRows.length
		});

		const [lastItem] = [...$virtualizer.getVirtualItems()].reverse();

		console.log('last item', lastItem);

		console.log('all rows length', allRows.length);

		if (
			lastItem &&
			lastItem.index > allRows.length - 1 &&
			$query.hasNextPage &&
			!$query.isFetchingNextPage
		) {
			$query.fetchNextPage();
		}
	});

	onMount(() => {
		scrollToFn = (offset, canSmooth, instance) => {
			const duration = 1000;
			const start = virtualListEl?.scrollTop;
			const startTime = (time = Date.now());

			function run() {
				if (time !== startTime) return;
				const now = Date.now();
				const elapsed = now - startTime;
				const progress = easeInOutQuint(Math.min(elapsed / duration, 1));
				const interpolated = start! + (offset - start!) * progress;

				if (elapsed < duration) {
					elementScroll(interpolated, canSmooth, instance);
					requestAnimationFrame(run);
				} else {
					elementScroll(interpolated, canSmooth, instance);
				}
			}

			requestAnimationFrame(run);
		};
	});
</script>

<main>
	{#if $query.isLoading}
		Loading...
	{:else if $query.isError}
		<span>Error: {$query.error.message}</span>
	{:else if $query.isSuccess}
		<div class="list scroll-container" bind:this={virtualListEl}>
			<div style="position: relative; height: {$virtualizer.getTotalSize()}px; width: 100%;">
				{#each $virtualizer.getVirtualItems() as row (row.index)}
					<div
						data-index={row.index}
						class="border border-red-400"
						class:list-item-even={row.index % 2 === 0}
						class:list-item-odd={row.index % 2 === 1}
						style="position: absolute; top: 0; left: 0; width: 100%; height: {row.size}px; transform: translateY({row.start}px);"
					>
						{#if row.index > allRows.length - 1}
							{#if $query.hasNextPage}
								Loading more...
							{:else}
								Nothing more to load
							{/if}
						{:else}
							{allRows[row.index].name}
						{/if}
					</div>
				{/each}
			</div>
		</div>
	{/if}
	{#if $query.isFetching && !$query.isFetchingNextPage}
		<p>Background updating...</p>
	{/if}
</main>

<style>
	.scroll-container {
		height: 100dvh;
		width: 100%;
		overflow: auto;
	}
</style>
