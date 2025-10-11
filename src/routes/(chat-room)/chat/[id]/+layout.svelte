<script lang="ts">
	import Header from '$lib/components/ChatRoom/Header.svelte';
	import SendMessageField from '$lib/components/ChatRoom/SendMessageField.svelte';
	import BottomNavigation from '$lib/components/BottomNavigation/BottomNavigation.svelte';
	import RootHeader from '$lib/components/header/Header.svelte';
	import { showSearch } from '../../../../store/common';
	import { cn } from '$lib/utils';
	import SearchInput from '$lib/components/common/search/SearchInput.svelte';
	import Posts from '$lib/components/Posts/Posts.svelte';
	import type { Snippet } from 'svelte';
	import { isDesktop } from '../../../../store/responsiveStore';
	import { page } from '$app/state';

	type Props = {
		children: Snippet;
	};

	let { children }: Props = $props();
</script>

<main id="container" class="relative flex h-full w-full overflow-hidden sm:divide-x">
	<section
		class="relative hidden h-full w-full max-w-lg sm:block"
		id={$isDesktop ? 'dk-left-pane' : 'left-pane'}
	>
		<div class="absolute top-0 w-full">
			<RootHeader />
		</div>
		<div class="absolute top-19 h-[85vh] w-full overflow-hidden">
			<div
				class={cn(
					'w-full px-2 transition-all duration-300 ease-in-out',
					$showSearch
						? 'pointer-events-auto max-h-20 -translate-y-0 pt-2'
						: 'pointer-events-none max-h-0 -translate-y-12'
				)}
			>
				<SearchInput />
			</div>

			<Posts />
		</div>
		<div class="sticky top-full w-full">
			<BottomNavigation />
		</div>
	</section>

	{#key page.params?.id}
		<section
			id={$isDesktop ? 'dk-layout-viewport' : 'layout-viewport'}
			class="relative flex h-full w-full flex-col overflow-hidden"
		>
			<div class="absolute top-0 w-full"><Header /></div>
			<div class="absolute top-19 h-full max-h-[85vh] w-full">
				{@render children()}
			</div>
			<div class="sticky top-full w-full">
				<SendMessageField />
			</div>
		</section>
	{/key}
</main>

<style lang="postcss">
	#dk-left-pane {
		view-transition-name: dk-left-pane;
	}
	#dk-layout-viewport {
		view-transition-name: dk-layout-viewport;
	}
</style>
