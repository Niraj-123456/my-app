<script lang="ts">
	import { onMount } from 'svelte';
	import { fetchPosts } from '../../../services/post';
	import { type Post } from '../../../services/post';
	import { createVirtualizer } from '@tanstack/svelte-virtual';
	import * as Avatar from '../ui/avatar/index';

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

	onMount(() => {
		getPosts();
	});
</script>

<div class="h-full space-y-2 overflow-y-auto pb-2" bind:this={virtualListEl}>
	<div style="position: relative; height: {$virtualizer.getTotalSize()}px; width: 100%;">
		<div
			class="divide-y"
			style="position: absolute; top: 0; left: 0; width: 100%; transform: translateY({items[0]
				?.start ?? 0}px);"
		>
			{#each items as row, idx (row.index)}
				{#if posts[row.index]}
					<a href={`/chat/${posts[row.index].id}`}>
						<div
							data-index={row.index}
							bind:this={virtualItemEls[idx]}
							class="flex items-center gap-2 p-4"
						>
							<Avatar.Root class="h-12 w-12 font-semibold">
								<Avatar.AvatarImage />
								<Avatar.Fallback class="bg-red-600/20">N</Avatar.Fallback>
							</Avatar.Root>

							<div class="flex flex-col gap-1">
								<h3 class="line-clamp-1 pr-6 font-semibold">
									{posts[row.index].id}. {posts[row.index].title}
								</h3>
								<div class="flex items-center justify-between gap-4">
									<p class="line-clamp-1 pr-8 text-sm">{posts[row.index].body}</p>
									<span class="text-[10px] whitespace-nowrap">27 Sep</span>
								</div>
							</div>
						</div>
					</a>
				{/if}
			{/each}
		</div>
	</div>
</div>
