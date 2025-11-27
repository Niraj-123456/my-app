<script lang="ts">
	import { messagesStore } from '../../../store/chatRoomStore';
	import * as Drawer from '$lib/components/ui/drawer/index';
	import Button, { buttonVariants } from '../ui/button/button.svelte';
	import { Plus, Send } from '@lucide/svelte';
	import { scrollToBottom } from '../../../utils/chatHelper';
	import Textarea from '../ui/textarea/textarea.svelte';
	import { cn } from '$lib/utils';
	import { tick } from 'svelte';

	let message = $state('');
	let open = $state(false);
	let openNested = $state(false);

	const handleSendMessage = async () => {
		if (message === '') return;

		const previousMessages = [...$messagesStore];

		const updatedMessages = [...previousMessages, message];
		messagesStore.set(updatedMessages);
		message = '';

		scrollToBottom(undefined, 'smooth');
	};
</script>

<div id="chatInputFooter" class="flex h-auto border-t border-gray-100 bg-white px-6 py-3">
	<div class="flex w-full items-end gap-2">
		<div class="flex w-full items-end gap-1 rounded-3xl border pt-1 pl-2">
			<Button class="mb-2 h-7 w-7 rounded-full" onclick={() => (open = !open)}>
				<Plus class="h-7 w-7" />
			</Button>
			<Textarea
				id="message-input"
				name="message-input"
				bind:value={message}
				placeholder="Type message here..."
				onkeydown={(e) => {
					if (e.key === 'Enter') {
						if (e.shiftKey) {
							return;
						}
						handleSendMessage();
						e.preventDefault();
					}
				}}
				rows={1}
				class="max-h-28 min-h-10 resize-none rounded-3xl border-none bg-white shadow-none focus-visible:border-none focus-visible:ring-0"
			/>
		</div>
		<Button class="mb-2 h-7 w-7 rounded-full" onclick={handleSendMessage}>
			<Send class="h-6 w-6" />
		</Button>
	</div>
</div>

<Drawer.Root bind:open drawerId={'test-drawer'} onOpenChange={(val) => (open = val)}>
	<Drawer.Content class="h-[80vh]">
		<Drawer.Header class="text-center">
			<Drawer.Title>This is a test drawer</Drawer.Title>
		</Drawer.Header>
		<div class="px-4">
			<div>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, eius. Quo voluptas
					eligendi quasi sunt necessitatibus qui ullam rem tempore. Numquam quis recusandae porro,
					fuga nulla veniam error facere quasi?
				</p>

				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, eius. Quo voluptas
					eligendi quasi sunt necessitatibus qui ullam rem tempore. Numquam quis recusandae porro,
					fuga nulla veniam error facere quasi?
				</p>

				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, eius. Quo voluptas
					eligendi quasi sunt necessitatibus qui ullam rem tempore. Numquam quis recusandae porro,
					fuga nulla veniam error facere quasi?
				</p>

				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, eius. Quo voluptas
					eligendi quasi sunt necessitatibus qui ullam rem tempore. Numquam quis recusandae porro,
					fuga nulla veniam error facere quasi?
				</p>
			</div>
			<div class="mt-4">
				<Button onclick={() => (openNested = !openNested)}>Open Nested Drawer</Button>
				<Drawer.Close class={cn('w-full !rounded-full', buttonVariants({ variant: 'outline' }))}
					>Close</Drawer.Close
				>
			</div>
		</div>

		<Drawer.NestedRoot
			shouldScaleBackground={false}
			bind:open={openNested}
			drawerId={'nested-test-drawer'}
			onOpenChange={(val) => (openNested = val)}
		>
			<Drawer.Content>
				<Drawer.Header>
					<Drawer.Title>This is a nested drawer</Drawer.Title>
				</Drawer.Header>

				<div>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, accusamus esse labore saepe
					laudantium perferendis assumenda velit quibusdam corporis dolorem, ratione vitae, optio
					ullam id atque ipsa debitis. Perspiciatis, maxime.
				</div>
			</Drawer.Content>
		</Drawer.NestedRoot>
	</Drawer.Content>
</Drawer.Root>
