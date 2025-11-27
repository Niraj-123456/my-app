<script lang="ts">
	import BottomNavigation from '$lib/components/BottomNavigation/BottomNavigation.svelte';
	import Header from '$lib/components/header/Header.svelte';
	import { showSearch } from '../../store/common';
	import { cn } from '$lib/utils';
	import SearchInput from '$lib/components/common/search/SearchInput.svelte';
	import Posts from '$lib/components/Posts/Posts.svelte';
	import type { Snippet } from 'svelte';
	import { page } from '$app/state';
	import { isDesktop } from '../../store/responsiveStore';
	import RouteHeader from '$lib/components/common/route-header/RouteHeader.svelte';

	type Props = {
		children: Snippet;
	};

	let { children }: Props = $props();
</script>

<main id="container" class="relative flex h-full w-full overflow-hidden sm:divide-x">
	<section class="relative h-full w-full max-w-lg" id={$isDesktop ? 'dk-left-pane' : 'left-pane'}>
		<div class="absolute top-0 w-full">
			<Header />
		</div>
		<div class="absolute top-15 h-[92.9dvh] w-full overflow-hidden">
			<div
				class={cn(
					'w-full px-4 transition-all duration-300 ease-in-out',
					$showSearch
						? 'pointer-events-auto max-h-20 -translate-y-0 pt-2'
						: 'pointer-events-none max-h-0 -translate-y-12'
				)}
			>
				<SearchInput />
			</div>

			{#if $isDesktop}
				<Posts />
			{:else}
				{@render children?.()}
			{/if}
		</div>
		<div class="fixed bottom-0 w-full">
			<BottomNavigation />
		</div>
	</section>

	<section class="hidden w-full sm:flex" id={$isDesktop ? 'dk-right-pane' : 'right-pane'}>
		{#if page.url.pathname === '/' && $isDesktop}
			Welcome content
		{:else}
			<div class="h-full w-full">
				<RouteHeader />
				{@render children?.()}
			</div>
		{/if}
	</section>
</main>

<style lang="postcss">
	#dk-left-pane {
		view-transition-name: dk-left-pane;
	}
	#dk-right-pane {
		view-transition-name: dk-right-pane;
	}
</style>
