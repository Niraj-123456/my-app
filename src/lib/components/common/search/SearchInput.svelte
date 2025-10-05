<script>
	import Input from '$lib/components/ui/input/input.svelte';
	import { SearchIcon } from '@lucide/svelte';
</script>

<div class="relative h-full w-full">
	<Input type="search" placeholder="Search..." class="h-11 pl-9" name="search" id="search" />
	<SearchIcon class="absolute top-1/2 left-3 w-5 -translate-y-1/2 text-gray-500" />
</div>
