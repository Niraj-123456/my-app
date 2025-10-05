import { messagesStore, type MessageObjectType } from '../store/chatRoomStore';
import { get } from '../utils/cache';

export const fetchMessages = async () => {
	try {
		const messages = await get('messages');
		console.log('messages', messages);
		const parsedMessages = JSON.parse(messages as string);
		if (!parsedMessages) return;
		console.log('messages', parsedMessages);
		messagesStore.set(parsedMessages as MessageObjectType[]);
	} catch (err) {
		console.log('fetch messages error', err);
	}
};
