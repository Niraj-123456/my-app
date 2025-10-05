<script>
	import { Ellipsis, Home, UserRound, UsersRound } from '@lucide/svelte';
	import { page } from '$app/state';
	import { cn } from '$lib/utils';

	const items = [
		{ label: 'Home', path: '/', icon: Home },
		{ label: 'Friends', path: '/friends', icon: UsersRound },
		{ label: 'Profile', path: '/profile', icon: UserRound },
		{ label: 'More', path: '/more', icon: Ellipsis }
	];

	const currentRoute = $derived(page.url.pathname);
</script>

<div id="bottom-navigation" class="w-full border-t border-gray-100 bg-white">
	<div class="flex w-full justify-between px-6 py-4">
		{#each items as item}
			{@const Icon = item.icon}
			<a href={`${item.path}`}>
				<div
					class={cn(
						'flex flex-col items-center justify-center gap-1 transition-all duration-150 ease-in-out',
						currentRoute === item.path
							? ' scale-[1.05] font-semibold text-gray-700'
							: 'scale-100 text-gray-500'
					)}
				>
					<Icon class="h-5 w-5" />
					<span class="text-xs">
						{item.label}
					</span>
				</div>
			</a>
		{/each}
	</div>
</div>

<style lang="postcss">
	#bottom-navigation {
		view-transition-name: bottom-navigation;
	}
</style>
