<script lang="ts">
	import { ChevronLeft, Search, X } from '@lucide/svelte';
	import { showSearch } from '../../../store/common';
	import { isDesktop } from '../../../store/responsiveStore';
</script>

<header
	data-view-transition-name="root-header"
	class="w-full border-b border-gray-100 bg-white/40 px-6 py-4 backdrop-blur-2xl"
>
	<div class="flex w-full items-center justify-between">
		<button onclick={() => history.back()} class="flex items-center gap-2">
			<ChevronLeft class="block sm:hidden" />
			<span class="text-lg font-semibold"> Demo </span>
		</button>

		<button onclick={() => ($showSearch = !$showSearch)}>
			{#if !$showSearch}
				<Search />
			{:else}
				<X />
			{/if}
		</button>
	</div>
</header>

<style lang="postcss">
	[data-view-transition-name='root-header'] {
		view-transition-name: root-header;
	}
</style>
