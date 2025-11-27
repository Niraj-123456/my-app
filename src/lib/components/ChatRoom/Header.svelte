<script>
	import { ChevronLeft } from '@lucide/svelte';
	import * as Avatar from '../ui/avatar/index';
	import { page } from '$app/state';

	const chId = page.params.id;
</script>

<div id="chat-header" class="border-b border-gray-100 p-4">
	<div class="flex items-center gap-2">
		<button class="block sm:hidden" onclick={() => history.back()}>
			<ChevronLeft />
		</button>
		<a href={`/chat/${chId}/profile`} class="flex items-center gap-2 p-0.5">
			<Avatar.Root class="h-10 w-10">
				<Avatar.AvatarImage />
				<Avatar.AvatarFallback class="bg-green-400/40">N</Avatar.AvatarFallback>
			</Avatar.Root>

			<div>
				<h3 class="font-medium">Test User {page.params?.id}</h3>
				<p class="text-[10px] text-gray-500">online</p>
			</div>
		</a>
	</div>
</div>

<style lang="postcss">
	#chat-header {
		view-transition-name: chat-header;
		-webkit-backface-visibility: hidden;
	}
</style>
