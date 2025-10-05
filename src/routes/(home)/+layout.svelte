<script lang="ts">
	import BottomNavigation from '$lib/components/BottomNavigation/BottomNavigation.svelte';
	import Header from '$lib/components/header/Header.svelte';
	import { showSearch } from '../../store/common';
	import { cn } from '$lib/utils';
	import SearchInput from '$lib/components/common/search/SearchInput.svelte';

	let { children } = $props();
</script>

<div id="container" class="relative w-full">
	<div class="absolute top-0 w-full">
		<Header />
	</div>
	<main class="absolute top-19 h-[82vh] w-full overflow-hidden">
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

		{@render children()}
	</main>
	<div class="fixed bottom-0 w-full">
		<BottomNavigation />
	</div>
</div>

<style lang="postcss">
</style>
