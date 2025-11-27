<script lang="ts">
	import { Toaster } from 'svelte-sonner';
	import '../app.css';
	import ViewTransition from '$lib/components/ViewTransition/ViewTransition.svelte';
	import { onMount } from 'svelte';
	import { backHandler } from '../utils/backHandler';
	import type { Snippet } from 'svelte';

	import { isDesktop } from '../store/responsiveStore';
	import BottomNavigation from '$lib/components/BottomNavigation/BottomNavigation.svelte';

	type Props = {
		children: Snippet;
	};

	let { children }: Props = $props();

	onMount(() => {
		handleResize();
		backHandler.init();
	});

	// Handle window resize to update layout
	const handleResize = () => {
		if (window.innerWidth >= 1024) {
			$isDesktop = true;
		}
	};
</script>

<ViewTransition />

<div class="relative z-100 h-full w-full">
	{@render children?.()}
</div>

<Toaster richColors />
