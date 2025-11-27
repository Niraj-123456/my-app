import { tick } from 'svelte';

export const scrollToBottom = async (
	el?: HTMLElement | undefined,
	behavior: ScrollBehavior = 'instant'
) => {
	const chatContainer = document.querySelector('#chat-container') ?? el;
	if (!chatContainer) return;
	await tick();

	console.log('scroll top', chatContainer?.scrollTop);

	requestAnimationFrame(() => {
		chatContainer.scrollTo({
			top: 0,
			behavior
		});
	});
};
