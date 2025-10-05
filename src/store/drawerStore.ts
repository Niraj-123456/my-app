import { writable, get, type Writable } from 'svelte/store';

export interface DrawerState {
	id: string;
	data?: Record<string, unknown>;
	onClose?: () => void; // Callback to actually close the drawer
	parentDrawerId?: string;
}

// Stack to track opened drawers
const drawerStack: Writable<DrawerState[]> = writable([]);

export const drawerStore = {
	subscribe: drawerStack.subscribe,

	// Open a drawer with close callback
	open: (
		drawerId: string,
		data: Record<string, unknown> = {},
		onClose?: () => void,
		parentDrawerId?: string
	): void => {
		drawerStack.update((stack) => {
			// Prevent duplicates
			if (stack.some((item) => item.id === drawerId)) {
				return stack;
			}

			return [...stack, { id: drawerId, data, onClose, parentDrawerId }];
		});
	},

	// Close the most recent drawer and trigger its callback
	close: (): void => {
		drawerStack.update((stack) => {
			if (stack.length === 0) return stack;

			const lastDrawer = stack[stack.length - 1];
			console.log('last drawer', lastDrawer);
			// Trigger the close callback if it exists
			if (lastDrawer.onClose) {
				lastDrawer.onClose();
			}

			return stack.slice(0, -1);
		});
	},

	// Close a specific drawer and trigger its callback
	closeById: (drawerId: string): void => {
		drawerStack.update((stack) => {
			const drawerToClose = stack.find((item) => item.id === drawerId);
			if (drawerToClose?.onClose) {
				drawerToClose.onClose();
			}
			return stack.filter((item) => item.id !== drawerId);
		});
	},

	// Close all drawers and trigger their callbacks
	closeAll: (): void => {
		drawerStack.update((stack) => {
			// Trigger all close callbacks
			stack.forEach((drawer) => {
				if (drawer.onClose) {
					drawer.onClose();
				}
			});
			return [];
		});
	},

	// Get current drawer
	getCurrent: (): DrawerState | null => {
		const stack = get(drawerStack);
		return stack.length > 0 ? stack[stack.length - 1] : null;
	},

	// Check if any drawer is open
	hasOpenDrawers: (): boolean => {
		return get(drawerStack).length > 0;
	},

	// Get drawer count
	getCount: (): number => {
		return get(drawerStack).length;
	}
};
