import { page } from '$app/state';
import { drawerStore } from '../store/drawerStore';

interface CustomHistoryState {
	__isCustom?: boolean;
	drawerHandled?: boolean;
	initial?: boolean;
}

class BackHandler {
	private isInitialized: boolean = false;

	private isHandlingDrawerClose: boolean = false;

	constructor() {
		this.isInitialized = false;
	}

	init(): void {
		if (this.isInitialized) return;

		this.isInitialized = true;

		// Add popstate listener
		window.addEventListener('popstate', this.handlePopState.bind(this));

		// Add beforeunload to clean up
		window.addEventListener('beforeunload', this.cleanup.bind(this));
	}

	private handlePopState(event: PopStateEvent): void {
		// Check if this is a custom state we should handle

		if (this.isHandlingDrawerClose) return;

		const state = event.state as CustomHistoryState;
		if (state?.drawerHandled) {
			return;
		}

		// If there are open drawers, close the top one and prevent default navigation

		const currentDrawerCount = drawerStore.getCount();
		console.log('current drawer count', currentDrawerCount);

		if (currentDrawerCount > 0) {
			event.stopImmediatePropagation();
			event.stopPropagation();

			// Add a history entry to maintain position

			this.isHandlingDrawerClose = true;

			console.log('current location', page.url.href);
			history.pushState({ ...history.state, drawerCount: currentDrawerCount }, '', page.url.href);

			// Close the top drawer
			drawerStore.close();

			const newDrawerCount = drawerStore.getCount();
			console.log(`After close: ${newDrawerCount} drawers open`);

			// Restore the current history state without changing the URL
			// setTimeout(() => {
			// 	if (newDrawerCount > 0) {
			// 		console.log('line 66');
			// 		history.pushState({ ...history.state, drawerCount: newDrawerCount }, '', page.url.href);
			// 	} else {
			// 		// If this was the last drawer, replace state to clean up
			// 		console.log('line 70');
			// 		// history.replaceState({ ...history.state, drawerCount: 0 }, '', location.href);
			// 	}

			// 	this.isHandlingDrawerClose = false;
			// }, 10);

			return;
		} else {
			console.log('line 80');
			// Allow normal navigation if no drawers are open
			// history.replaceState({ ...history.state, drawerHandled: false }, '', window.location.href);
		}
	}

	cleanup(): void {
		window.removeEventListener('popstate', this.handlePopState.bind(this));
	}
}

export const backHandler = new BackHandler();
