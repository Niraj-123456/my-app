<script>
	import { ChevronLeft, Search, X } from '@lucide/svelte';
	import { showSearch } from '../../../store/common';
</script>

<div id="header" class="w-full border-b border-gray-100 bg-white/40 p-6 backdrop-blur-2xl">
	<div class="flex w-full items-center justify-between">
		<button onclick={() => history.back()} class="flex items-center gap-2">
			<ChevronLeft />
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
</div>

<style lang="postcss">
	#header {
		view-transition-name: header;
	}
</style>
