<script lang="ts">
	import { page } from '$app/state';
	import { onMount } from 'svelte';
	import { fetchPostById, type Post } from '../../../services/post';
	import Button from '$lib/components/ui/button/button.svelte';
	import { Trash, SquarePen } from '@lucide/svelte';
	import * as Drawer from '$lib/components/ui/drawer/index';
	import Textarea from '$lib/components/ui/textarea/textarea.svelte';
	import Input from '$lib/components/ui/input/input.svelte';
	import Spinner from '$lib/components/Loading/Spinner.svelte';
	import ScrollArea from '$lib/components/ui/scroll-area/scroll-area.svelte';

	let postId = page.params?.id;
	let loading = $state(true);
	let post = $state<Post>();
	let openEditDrawer = $state(false);
	const dialogContentRef: HTMLElement | null = null;

	const getPostDetail = async () => {
		loading = true;
		try {
			const res = await fetchPostById(postId);
			console.log('res', res);
			post = res;
		} catch (err) {
			console.log('error', err);
		} finally {
			loading = false;
		}
	};

	onMount(() => getPostDetail());
</script>

<div class="flex min-h-screen items-center justify-center">
	{#if loading}
		<Spinner thickness={4} />
	{:else}
		<div class="flex flex-col items-center justify-center gap-2 text-center">
			<h3 class="text-xl font-semibold">{post?.title}</h3>
			<p class="text-sm">{post?.body}</p>

			<div class="mt-4 space-x-2">
				<Button onclick={() => (openEditDrawer = true)}>Edit <SquarePen /></Button>
				<Button variant="destructive"
					>Delete
					<Trash />
				</Button>
			</div>
		</div>
	{/if}
</div>

<Drawer.Root bind:open={openEditDrawer}>
	<Drawer.Content class="h-[95dvh] max-h-[95dvh]">
		<Drawer.Header class="text-center">
			<Drawer.Title>Edit Post</Drawer.Title>
		</Drawer.Header>

		<ScrollArea class="h-full overflow-y-auto px-4 pb-4">
			<div class="overflow-y-auto">
				<form class="space-y-4">
					<div class="flex flex-col gap-1">
						<label for="postId" class="text-sm text-gray-600">Post ID</label>
						<Input name="postId" id="postId" value={post?.id} disabled />
					</div>
					<div class="flex flex-col gap-1">
						<label for="title" class="text-sm text-gray-600">Title</label>
						<Input name="title" id="title" value={post?.title} />
					</div>
					<div class="flex flex-col gap-1">
						<label for="body" class="text-sm text-gray-600">Description</label>
						<Textarea rows={4} name="body" id="body" value={post?.body} />
					</div>

					<div>
						<Drawer.NestedRoot shouldScaleBackground={false}>
							<Drawer.Trigger>Open Nested Drawer</Drawer.Trigger>
							<Drawer.Content class="h-[93dvh] max-h-[93dvh]">
								<div>this is nested drawer</div>
							</Drawer.Content>
						</Drawer.NestedRoot>
					</div>

					<Drawer.Footer class="flex-row px-0">
						<Drawer.Close class="w-1/2">
							<Button type="button" variant="outline" class="w-full">Cancel</Button>
						</Drawer.Close>
						<Button type="submit" class="w-1/2">Submit</Button>
					</Drawer.Footer>
				</form>
			</div>
		</ScrollArea>
	</Drawer.Content>
</Drawer.Root>
