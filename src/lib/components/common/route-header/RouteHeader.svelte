<script lang="ts">
	import { page } from '$app/state';

	const getRouteHeader = () => {
		switch (page.url.pathname) {
			case '/friends':
				return 'Friends';
			case '/profile':
				return 'Profile';
			case '/more':
				return 'More';
			default:
				return '';
		}
	};
</script>

<div class="flex w-full bg-white/40 px-4 py-4">
	<h1 class="text-lg">{getRouteHeader()}</h1>
</div>
