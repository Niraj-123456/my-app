<script lang="ts">
	import { fly } from 'svelte/transition';
	import { onNavigate } from '$app/navigation';
	import Header from '$lib/components/ChatRoom/Header.svelte';
	import SendMessageField from '$lib/components/ChatRoom/SendMessageField.svelte';
	import { page } from '$app/state';

	let { children } = $props();
</script>

<div id="layoutViewport" class="relative flex h-full w-full flex-col overflow-hidden">
	<div class="absolute top-0 w-full"><Header /></div>
	<div class="absolute top-19 h-full max-h-[83vh] w-full">
		{@render children()}
	</div>
	<div class="fixed bottom-0 w-full"><SendMessageField /></div>
</div>
