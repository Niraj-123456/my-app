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

<div class="bottom-navigation">
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
	.bottom-navigation {
		position: relative;
		overflow: hidden;
		border-top: var(--theme-nav-border);
		z-index: 1;
		view-transition-name: bottom-navigation;
	}

	.bottom-navigation::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		background: linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(153, 153, 153, 0.1) 100%);
		backdrop-filter: blur(30px);
		-webkit-backdrop-filter: blur(30px);
		z-index: -1;
	}

	/* Optional overlay for a frosted look */
	.bottom-navigation::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		background: linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(153, 153, 153, 0.1) 100%);
		z-index: -1;
	}
</style>
