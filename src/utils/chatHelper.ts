import { tick } from 'svelte';

export const scrollToBottom = async (
	el?: HTMLElement | undefined,
	behavior: ScrollBehavior = 'instant'
) => {
	const chatContainer = document.querySelector('#chat-container') ?? el;
	if (!chatContainer) return;
	await tick();

	chatContainer.scrollTo({
		top: chatContainer?.scrollHeight,
		behavior
	});
};
