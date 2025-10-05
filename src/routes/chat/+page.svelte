<script>
	import ChatRoom from '$lib/components/ChatRoom/ChatRoom.svelte';
	import Header from '$lib/components/ChatRoom/Header.svelte';
	import SendMessageField from '$lib/components/ChatRoom/SendMessageField.svelte';
</script>

<div class="relative flex h-[100vh] w-full flex-col overflow-hidden">
	<div class="sticky top-0"><Header /></div>
	<ChatRoom />
	<div class="sticky bottom-0 w-full bg-white">
		
		<SendMessageField />
	</div>
</div>
