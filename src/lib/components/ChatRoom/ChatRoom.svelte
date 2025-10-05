<script lang="ts">
	import { onMount, tick } from 'svelte';
	import { cn } from '$lib/utils';
	import { messagesStore } from '../../../store/chatRoomStore';
	import { scrollToBottom } from '../../../utils/chatHelper';
	import { fetchMessages } from '../../../services/messages';

	let chatViewport: HTMLElement | null = $state(null);
	let chatMessages = $derived([...$messagesStore]);
	let lastClientHeight = $state(0);
	let lastScrollTop = $state(0);

	$effect(() => console.log('chat messages store', $messagesStore));

	onMount(async () => {
		await fetchMessages();
		scrollToBottom();
	});

	const handleScroll = () => {
		if (!chatViewport) return;
	};

	onMount(() => {
		const chatFooter = document.querySelector<HTMLElement>('#chatInputFooter');
		const layoutViewport = document.getElementById('layoutViewport');
		const visualViewport = window.visualViewport;

		if (!visualViewport || !chatFooter || !layoutViewport || !chatViewport) return;

		// Initialize scroll state
		lastClientHeight = chatViewport.clientHeight;
		lastScrollTop = chatViewport.scrollHeight;

		console.log('last scroll top', lastScrollTop);

		chatViewport?.scrollTo(0, chatViewport?.scrollHeight);

		async function viewportHandler() {
			const offsetLeft = visualViewport?.offsetLeft;
			const offsetTop =
				visualViewport!.height -
				layoutViewport!.getBoundingClientRect().height +
				visualViewport!.offsetTop;

			await tick();
			chatFooter!.style.transform = `translate(${offsetLeft}px, ${offsetTop}px) scale(${1 / visualViewport!.scale})`;

			await tick();
			syncScroll(visualViewport!.height);
		}

		function syncScroll(newHeight: number) {
			if (!chatViewport) return;
			console.log('new height', newHeight);
			console.log('last client height', lastClientHeight);

			const heightDiff = newHeight - lastClientHeight;
			lastScrollTop -= heightDiff;

			console.log('height diff', heightDiff);
			console.log('last scroll top', lastScrollTop);

			if (heightDiff !== 0) {
				// Keep chat pinned to bottom
				console.log('line 81', lastScrollTop);
				chatViewport.scrollTo({ top: lastScrollTop });
			}

			lastClientHeight = newHeight;
		}

		visualViewport.addEventListener('resize', viewportHandler);
		visualViewport.addEventListener('scroll', viewportHandler);

		return () => {
			visualViewport.removeEventListener('resize', viewportHandler);
			visualViewport.removeEventListener('scroll', viewportHandler);
		};
	});
</script>

<div
	id="chat-container"
	bind:this={chatViewport}
	onscroll={handleScroll}
	class={cn('flex h-full w-full flex-col gap-3 overflow-y-auto py-4 *:px-4')}
>
	<!-- <div class="grow"></div> -->
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
