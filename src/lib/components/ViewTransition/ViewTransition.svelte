<script lang="ts">
	import { onNavigate } from '$app/navigation';

	const routeOrder = ['/', '/friends', '/profile', '/more'];

	function getRouteIndex(path: string) {
		return routeOrder.indexOf(path.split('?')[0]); // ignore query params
	}

	function isSiblingRoute(path: string) {
		return routeOrder.includes(path);
	}

	onNavigate((navigation) => {
		if (!document.startViewTransition || navigation.from?.route.id === navigation.to?.route.id) {
			return;
		}

		const fromPath = navigation.from?.url.pathname ?? '/';
		const toPath = navigation.to?.url.pathname ?? '/';

		// Very naive heuristic: deeper path = forward, shallower = backward
		const fromDepth = fromPath?.split('/').filter(Boolean).length ?? 0;
		const toDepth = toPath?.split('/').filter(Boolean).length ?? 0;

		let direction: 'forwards' | 'backwards';
		if (toDepth !== fromDepth) {
			// Use depth comparison for parent/child navigation
			direction = toDepth > fromDepth ? 'forwards' : 'backwards';
		} else {
			// Fallback to sibling order map
			const fromIndex = getRouteIndex(fromPath);
			const toIndex = getRouteIndex(toPath);

			direction = toIndex > fromIndex ? 'forwards' : 'backwards';
		}
		const disableHeaderTransition = isSiblingRoute(fromPath) && isSiblingRoute(toPath);
		console.log('disable header transition', disableHeaderTransition);

		// Temporarily disable the header's transition
		// const header = document.querySelector(
		// 	'[data-view-transition-name="root-header"]'
		// ) as HTMLElement;

		// if (!disableHeaderTransition && header) {
		// 	header.style.viewTransitionName = 'none';
		// }

		return new Promise((resolve) => {
			document.startViewTransition({
				update: () => {
					resolve();
					// if (header) {
					// 	requestAnimationFrame(() => {
					// 		header.style.viewTransitionName = 'root-header';
					// 	});
					// }
				},
				types: [direction]
			});
		});
	});
</script>
