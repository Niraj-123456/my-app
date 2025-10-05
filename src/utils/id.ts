const PUSH_CHARS = '-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz';

let lastPushTime = 0;
let lastRandChars: number[] = [];

/**
 * Generates a Firebase-like Push ID (20 chars).
 * - Time ordered
 * - Unique (even when multiple IDs generated in same ms)
 */
export function generatePushID(): string {
	let now: number = new Date().getTime();
	const duplicateTime: boolean = now === lastPushTime;
	lastPushTime = now;

	// Timestamp encoded into 8 chars
	const timeStampChars: string[] = new Array(8);
	for (let i = 7; i >= 0; i--) {
		timeStampChars[i] = PUSH_CHARS.charAt(now % 64);
		now = Math.floor(now / 64);
	}
	if (now !== 0) {
		throw new Error('Timestamp conversion error.');
	}

	let id: string = timeStampChars.join('');

	if (!duplicateTime) {
		// New random sequence
		lastRandChars = [];
		for (let i = 0; i < 12; i++) {
			lastRandChars[i] = Math.floor(Math.random() * 64);
		}
	} else {
		// If same ms, increment random chars
		let i = 11;
		for (; i >= 0 && lastRandChars[i] === 63; i--) {
			lastRandChars[i] = 0;
		}
		lastRandChars[i]++;
	}

	for (let i = 0; i < 12; i++) {
		id += PUSH_CHARS.charAt(lastRandChars[i]);
	}

	if (id.length !== 20) {
		throw new Error('Push ID should be 20 characters.');
	}

	return id;
}
