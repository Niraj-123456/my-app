<script lang="ts">
	import { Toaster } from 'svelte-sonner';
	import '../app.css';
	import ViewTransition from '$lib/components/ViewTransition/ViewTransition.svelte';
	import { onMount } from 'svelte';
	import { backHandler } from '../utils/backHandler';
	import type { Snippet } from 'svelte';

	import { isDesktop } from '../store/responsiveStore';

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

<div class="fixed_background"></div>

<ViewTransition />
<div class="main_container">
	{@render children?.()}
</div>

<Toaster richColors />

<style lang="postcss">
	.main_container {
		position: relative;
		height: 100dvh;
		overflow: hidden;
		z-index: 1;
		view-transition-name: main;
	}

	.fixed_background {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 0;
		background-image:
			url('/bg_background.webp'),
			linear-gradient(0deg, rgba(243, 243, 243, 0) 0%, rgba(243, 243, 243, 0) 100%);
		background-repeat: no-repeat;
		background-position: center;
		background-color: rgba(243, 243, 243, 0.9);
		background-attachment: fixed;
		background-size: cover;

		-webkit-overflow-scrolling: touch;
		transform: translateZ(0);
	}

	.fixed_background::before {
		content: '';
		position: absolute;
		top: 0;
		width: 100%;
		height: 100%;
		background-blend-mode: normal, color, luminosity;
		-webkit-backdrop-filter: blur(37.520660400390625px);
		backdrop-filter: blur(37.520660400390625px);
		background: rgba(255, 255, 255, 0.88);
	}
</style>
