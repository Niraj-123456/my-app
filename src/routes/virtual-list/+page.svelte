<script>
	import VirtualList from '$lib/components/VirtualList/VirtualList.svelte';
	import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';

	const queryClient = new QueryClient();
</script>

<QueryClientProvider client={queryClient}>
	<VirtualList />
</QueryClientProvider>
