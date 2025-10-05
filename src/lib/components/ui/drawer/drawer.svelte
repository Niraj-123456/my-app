<script lang="ts">
	import { Drawer as DrawerPrimitive } from 'vaul-svelte';
	import { drawerStore } from '../../../../store/drawerStore';
	import { onDestroy } from 'svelte';

	type DrawerExternalProps = {
		drawerId: string;
		shouldHandleBack?: boolean;
		onOpenChange?: (val: boolean) => void;
	};

	let {
		drawerId = '',
		shouldHandleBack = true,
		shouldScaleBackground = true,
		open = $bindable(false),
		activeSnapPoint = $bindable(null),
		onOpenChange,
		...restProps
	}: DrawerPrimitive.RootProps & DrawerExternalProps = $props();

	let isInternallyOpen = $derived(open);

	const handleProgrammaticClose = (): void => {
		isInternallyOpen = false;
		if (onOpenChange) {
			onOpenChange(false);
		}
	};

	$effect(() => {
		if (open && shouldHandleBack) {
			drawerStore.open(drawerId, {}, handleProgrammaticClose);
		} else {
			drawerStore.closeById(drawerId);
			open = false;
		}
	});

	const handleOpenChange = (newOpen: boolean) => {
		isInternallyOpen = newOpen;

		if (!newOpen && shouldHandleBack) {
			drawerStore.closeById(drawerId);
			open = newOpen;
		}

		if (onOpenChange) {
			onOpenChange(newOpen);
		}
	};

	onDestroy(() => {
		if (shouldHandleBack) {
			drawerStore.closeById(drawerId);
		}
	});
</script>

<DrawerPrimitive.Root
	{shouldScaleBackground}
	onOpenChange={(val) => {
		handleOpenChange(val);
	}}
	bind:open={isInternallyOpen}
	bind:activeSnapPoint
	{...restProps}
/>
