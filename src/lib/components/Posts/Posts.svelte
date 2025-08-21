<script lang="ts">
	import { onMount } from 'svelte';
	import { fetchPosts } from '../../../services/post';
	import { type Post } from '../../../services/post';
	import { createVirtualizer } from '@tanstack/svelte-virtual';
	import { writable } from 'svelte/store';
	import Button from '../ui/button/button.svelte';

	let posts: Post[] = $state([]);
	let virtualListEl: HTMLDivElement | null = $state(null);
	let virtualItemEls: HTMLDivElement[] = $state([]);

	let virtualizer = $derived(
		createVirtualizer<HTMLDivElement, HTMLDivElement>({
			count: posts.length,
			getScrollElement: () => virtualListEl,
			estimateSize: () => 45
		})
	);

	const items = $derived($virtualizer.getVirtualItems());

	$effect(() => {
		if (virtualItemEls.length) virtualItemEls.forEach((el) => $virtualizer?.measureElement(el));
	});

	const getPosts = async () => {
		try {
			posts = await fetchPosts();
		} catch (err) {
			console.log('error', err);
		}
	};

	onMount(() => getPosts());
</script>

<div class="mx-auto max-w-4xl">
	<div class="h-screen space-y-2 overflow-y-auto py-8" bind:this={virtualListEl}>
		<div style="position: relative; height: {$virtualizer.getTotalSize()}px; width: 100%;">
			<div
				style="position: absolute; top: 0; left: 0; width: 100%; transform: translateY({items[0]
					?.start ?? 0}px);"
			>
				{#each items as row, idx (row.index)}
					{#if posts[row.index]}
						<div
							data-index={row.index}
							bind:this={virtualItemEls[idx]}
							class="rounded-lg border border-gray-200 px-4 py-2"
						>
							<h3 class="text-lg font-semibold">
								<a href={`/post/${posts[row.index].id}`}>
									{posts[row.index].id}. {posts[row.index].title}
								</a>
							</h3>
							<p class="pt-2 text-sm">{posts[row.index].body}</p>
						</div>
					{/if}
				{/each}
			</div>
		</div>
	</div>
</div>
