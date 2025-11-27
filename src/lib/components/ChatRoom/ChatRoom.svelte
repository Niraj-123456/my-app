<script lang="ts">
	import { onMount, tick } from 'svelte';
	import { cn } from '$lib/utils';
	import { messagesStore } from '../../../store/chatRoomStore';
	import { scrollToBottom } from '../../../utils/chatHelper';
	import { fetchMessages } from '../../../services/messages';
	import ScrollArea from '../ui/scroll-area/scroll-area.svelte';
	import { slide } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	let chatViewport: HTMLElement | null = $state(null);
	let chatMessages = $derived([...$messagesStore]);
	let lastClientHeight = $state(0);
	let lastScrollTop = $state(0);
	let messageRefs: { [key: number]: HTMLElement } = $state({});
	let previousMessageCount = $state(0);

	$effect(() => console.log('message refs', messageRefs));

	onMount(() => {
		if (!chatViewport) return;
		fetchMessages();
		previousMessageCount = chatMessages.length;
	});

	const handleScroll = () => {
		console.log('I am triggered');
		if (!chatViewport) return;
		console.log('chat viewport scrollHeight', chatViewport?.scrollHeight);
		console.log('chat viewport scroll top', chatViewport?.scrollTop);
	};

	// onMount(() => {
	// 	const chatFooter = document.querySelector<HTMLElement>('#chatInputFooter');
	// 	const layoutViewport = document.getElementById('layout-viewport');
	// 	const visualViewport = window.visualViewport;

	// 	if (!visualViewport || !chatFooter || !layoutViewport || !chatViewport) return;

	// 	// Initialize scroll state
	// 	// lastClientHeight = chatViewport.clientHeight;
	// 	// lastScrollTop = chatViewport.scrollHeight;

	// 	// chatViewport?.scrollTo(0, chatViewport?.scrollHeight);

	// 	async function viewportHandler() {
	// 		const offsetLeft = visualViewport?.offsetLeft;
	// 		const offsetTop =
	// 			visualViewport!.height -
	// 			layoutViewport!.getBoundingClientRect().height +
	// 			visualViewport!.offsetTop;

	// 		await tick();
	// 		chatFooter!.style.transform = `translate(${offsetLeft}px, ${offsetTop}px) scale(${1 / visualViewport!.scale})`;

	// 		await tick();
	// 		syncScroll(visualViewport!.height);
	// 	}

	// 	function syncScroll(newHeight: number) {
	// 		if (!chatViewport) return;
	// 		console.log('new height', newHeight);
	// 		console.log('last client height', lastClientHeight);

	// 		const heightDiff = newHeight - lastClientHeight;
	// 		lastScrollTop -= heightDiff;

	// 		console.log('height diff', heightDiff);
	// 		console.log('last scroll top', lastScrollTop);

	// 		if (heightDiff !== 0) {
	// 			// Keep chat pinned to bottom
	// 			console.log('line 81', lastScrollTop);
	// 			// chatViewport.scrollTo({ top: lastScrollTop });
	// 		}

	// 		lastClientHeight = newHeight;
	// 	}

	// 	visualViewport.addEventListener('resize', viewportHandler);
	// 	visualViewport.addEventListener('scroll', viewportHandler);

	// 	return () => {
	// 		visualViewport.removeEventListener('resize', viewportHandler);
	// 		visualViewport.removeEventListener('scroll', viewportHandler);
	// 	};
	// });
</script>

<div
	id="chat-container"
	bind:this={chatViewport}
	onscroll={handleScroll}
	class={cn('flex h-[inherit] w-full flex-col-reverse overflow-y-auto')}
>
	<div class="grow"></div>
	<div class="h-auto space-y-4 pt-2 pb-4 *:px-4">
		{#each chatMessages as message, index}
			<div class={cn('flex w-full', index % 2 === 0 ? 'justify-start' : 'justify-end')}>
				<div
					class={cn(
						'max-w-[300px] overflow-hidden border border-gray-300 p-2 text-sm',
						index % 2 === 0
							? 'rounded-tr-2xl rounded-b-2xl bg-white/60 px-3 py-2 text-black'
							: 'rounded-tl-2xl rounded-b-2xl bg-blue-600 px-3 py-2 text-white'
					)}
				>
					<p class="overflow-hidden [overflow-wrap:anywhere] whitespace-pre-line">
						{message}
					</p>
				</div>
			</div>
		{/each}
		<!-- <div id="load more" class="h-2 border border-black"></div> -->
	</div>
</div>

<style>
	/* Smooth animation for new messages */
	.message-wrapper {
		display: grid;
		grid-template-rows: 0fr;
		opacity: 0;
		transform: translateY(20px) scale(0.95);
		transition:
			grid-template-rows 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),
			opacity 0.3s ease-out,
			transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}

	.message-wrapper.open {
		grid-template-rows: 1fr;
		opacity: 1;
		transform: translateY(0) scale(1);
	}

	.message-wrapper.instant {
		grid-template-rows: 1fr;
		opacity: 1;
		transform: translateY(0) scale(1);
		transition: none;
	}

	.message-inner {
		overflow: hidden;
		min-height: 0;
	}

	/* Hide scrollbar but keep functionality */
	#chat-container::-webkit-scrollbar {
		display: none;
	}

	#chat-container {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}
</style>
