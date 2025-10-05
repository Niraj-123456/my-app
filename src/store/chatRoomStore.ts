import { writable } from 'svelte/store';

export type MessageStatus = 'sending' | 'sent' | 'retry';

export const SERVICE_FUNCTION = {
	HAMRO_PAY_ASK_MONEY_ASKED: 'HAMRO_PAY_ASK_MONEY_ASKED',
	HAMRO_PAY_ASK_MONEY_ACCEPTED: 'HAMRO_PAY_ASK_MONEY_ACCEPTED',
	HAMRO_PAY_ASK_MONEY_COMPLETED: 'HAMRO_PAY_ASK_MONEY_COMPLETED',
	HAMRO_PAY_SEND_MONEY: 'HAMRO_PAY_SEND_MONEY',
	HAMRO_PAY_ASK_MONEY_REJECTED: 'HAMRO_PAY_ASK_MONEY_REJECTED',
	HAMRO_PAY_ASK_MONEY_SETTLED: 'HAMRO_PAY_ASK_MONEY_SETTLED'
} as const;

export type MessageStatusType = 'PENDING' | 'SUCCESS' | 'FAILED' | 'CANCELLED' | 'SETTLED';

export enum CommandType {
	UNKNOWN = 'UNKNOWN',
	AUDIO_CALL = 'AUDIO_CALL',
	VIDEO_CALL = 'VIDEO_CALL',
	MESSAGE = 'MESSAGE',
	CALL = 'CALL',
	MESSAGE_DELETED = 'MESSAGE_DELETED',
	MESSAGE_EDITED = 'MESSAGE_EDITED',
	REACTION_ADDED = 'REACTION_ADDED',
	REACTION_UPDATED = 'REACTION_UPDATED',
	REACTION_REMOVED = 'REACTION_REMOVED',
	HAMROPAY_TRANSACTION = ' HAMROPAY_TRANSACTION',
	// below enums are published in centrifuge only
	MESSAGE_SEEN_UPDATE = 'MESSAGE_SEEN_UPDATE',
	MESSAGE_SENT_UPDATE = 'MESSAGE_SENT_UPDATE',
	TYPING_START = 'TYPING_START',
	TYPING_STOP = 'TYPING_STOP'
}

export const commandEnumToIndexMapper = {
	[CommandType.UNKNOWN]: 0,
	[CommandType.AUDIO_CALL]: 1,
	[CommandType.VIDEO_CALL]: 2,
	[CommandType.MESSAGE]: 3,
	[CommandType.MESSAGE_DELETED]: 4,
	[CommandType.MESSAGE_EDITED]: 5,
	[CommandType.MESSAGE_SEEN_UPDATE]: 6,
	[CommandType.MESSAGE_SENT_UPDATE]: 7,
	[CommandType.REACTION_ADDED]: 8,
	[CommandType.REACTION_UPDATED]: 9,
	[CommandType.REACTION_REMOVED]: 10,
	[CommandType.CALL]: 11,
	[CommandType.HAMROPAY_TRANSACTION]: 12,
	[CommandType.TYPING_START]: 13,
	[CommandType.TYPING_STOP]: 14
};

export type Media = {
	url: string;
	width: number;
	height: number;
	aspectRatio: string;
	thumbnailUrl: string;
};

export enum MessageModificationState {
	DEFAULT = 0,
	EDITED = 1,
	DELETED = 2
}

export type ProfileDetail = {
	name: string;
	imageUrl: string;
	phoneNumber: string;
};

export enum MessageType {
	MESSAGE_TYPE_UNKNOWN = 0,
	MESSAGE_TYPE_TEXT = 1,
	MESSAGE_TYPE_IMAGE = 2,
	MESSAGE_TYPE_VIDEO = 3,
	MESSAGE_TYPE_HAMROPAY_TRANSACTION = 4,
	MESSAGE_TYPE_RICH_CONTENT = 5,
	MESSAGE_TYPE_CALL = 6,
	MESSAGE_TYPE_LINK = 7,
	MESSAGE_TYPE_AUDIO_CALL = 8,
	MESSAGE_TYPE_VIDEO_CALL = 9
}

export type Message = {
	messageId: string;
	senderId: string;
	timestamp: number;
	messageVersion: number;
	message: string;
	channelId: string;
	messageModificationState: MessageModificationState;
	profileDetail?: ProfileDetail;
	metadata: {
		[key: string]: string;
	};
	messageType: MessageType;
	summaryText: string;
	idempotentKey: string;
	commandType: number;
	replyToMessage: string;
	reactionCountMap: {
		[key: string]: number;
	};
};

export type MessageDataType = {
	title: string;
	subtitle: string;
	metadata?: Record<string, string>;
	fields: {
		Amount: string;
		TransactionId: string;
		Status?: MessageStatusType;
	};
	service_function: (typeof SERVICE_FUNCTION)[keyof typeof SERVICE_FUNCTION];
	modifies_existing_message: boolean;
	media: Media[];
	commandType?: number;
};

export type CallMessageDataType = {
	call_duration: number;
	call_type: 'VIDEO' | 'AUDIO';
	channel_id: string;
	host_id: string;
	meeting_id: string;
	missed_call: boolean;
};

export type MessageObjectType = Message & {
	messageData: object | null;
	type?: 'text' | 'service';
	status?: MessageStatus | undefined;
	idempotentKey?: string;
	replyToMessageId?: string;
};

export const messagesStore = writable<string[]>([
	'Alex: Hey, you up?',
	'Sam: Yeah, couldn’t sleep. What’s up?',
	'Alex: Same here, my brain won’t shut off.',
	'Sam: Thinking about work again?',
	'Alex: Yep, tomorrow’s presentation 😩',
	'Sam: You’ll crush it, don’t stress.',
	'Alex: Easy for you to say 😂',
	'Sam: Want me to distract you?',
	'Alex: Sure, hit me.',
	'Sam: Pineapple on pizza: yay or nay?',
	'Alex: Nay. Hard nay.',
	'Sam: Blasphemy.',
	'Alex: You’re disgusting.',
	'Sam: And yet you love me.',
	'Alex: Sadly true.',
	'Sam: What’s your go-to comfort food?',
	'Alex: Ramen, always.',
	'Sam: Thought so. Extra spicy?',
	'Alex: You know me too well.',
	'Sam: When’s the last time we had ramen together?',
	'Alex: Months ago, dude. We need to fix that.',
	'Sam: Saturday?',
	'Alex: Done.',
	'Sam: Bring your Switch.',
	'Alex: You just want to beat me again.',
	'Sam: Exactly.',
	'Alex: Evil.',
	'Sam: Honest.',
	'Alex: Fine, I’ll bring it.',
	'Sam: Best friend award goes to you.',
	'Alex: Finally some recognition.',
	'Sam: Don’t get cocky.',
	'Alex: Too late.',
	'Sam: lol.',
	'Alex: Hey, random question.',
	'Sam: Shoot.',
	'Alex: If you could live anywhere, where would you go?',
	'Sam: Japan. Easy.',
	'Alex: Thought so.',
	'Sam: You?',
	'Alex: New Zealand.',
	'Sam: Why?',
	'Alex: The scenery looks unreal.',
	'Sam: Okay fair.',
	'Alex: We should do a trip someday.',
	'Sam: Bucket list vibes.',
	'Alex: Exactly.',
	'Sam: Speaking of lists…',
	'Alex: Uh oh.',
	'Sam: I found our old “band names” list from high school.',
	'Alex: NO WAY 😂',
	'Sam: Yup. “The Angry Tacos”?',
	'Alex: Absolute classic.',
	'Sam: Or “Banana Revolution.”',
	'Alex: Iconic.',
	'Sam: We were geniuses.',
	'Alex: Or idiots.',
	'Sam: Both.',
	'Alex: lol true.',
	'Sam: Remember when we actually tried to record a song?',
	'Alex: Don’t remind me 😭',
	'Sam: I still have the file.',
	'Alex: DELETE IT.',
	'Sam: Never.',
	'Alex: Traitor.',
	'Sam: Archivist.',
	'Alex: Whatever.',
	'Sam: Okay but seriously, how’s your family?',
	'Alex: Doing good, thanks. Yours?',
	'Sam: Mom’s fine, Dad’s back to gardening.',
	'Alex: Nice.',
	'Sam: He planted too many tomatoes again.',
	'Alex: Classic.',
	'Sam: You’ll get free salsa soon.',
	'Alex: Worth it.',
	'Sam: Speaking of food, what’s breakfast tomorrow?',
	'Alex: Probably cereal, I’m lazy.',
	'Sam: Same.',
	'Alex: Coffee is mandatory though.',
	'Sam: Always.',
	'Alex: Black or with milk?',
	'Sam: Black. You?',
	'Alex: With milk.',
	'Sam: Weak.',
	'Alex: I like flavor, okay?!',
	'Sam: Excuses.',
	'Alex: Fight me.',
	'Sam: Saturday, Smash Bros.',
	'Alex: It’s on.',
	'Sam: You’re going down.',
	'Alex: We’ll see.',
	'Sam: You’re smiling right now, aren’t you?',
	'Alex: Maybe.',
	'Sam: I know you too well.',
	'Alex: That’s what makes this dangerous.',
	'Sam: Dangerous friendship is the best kind.',
	'Alex: True.',
	'Sam: Okay, I should sleep.',
	'Alex: Same, big day tomorrow.',
	'Sam: Goodnight, loser.',
	'Alex: Night, nerd.'
]);
