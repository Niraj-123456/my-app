<script lang="ts">
	import { Toaster } from 'svelte-sonner';
	import '../app.css';
	import ViewTransition from '$lib/components/ViewTransition/ViewTransition.svelte';
	import { onMount } from 'svelte';
	import { backHandler } from '../utils/backHandler';

	let { children } = $props();

	onMount(() => {
		backHandler.init();
	});
</script>

<ViewTransition />
{@render children()}

<Toaster richColors />
