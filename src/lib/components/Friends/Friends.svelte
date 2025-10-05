<script>
	import AvatarFallback from '../ui/avatar/avatar-fallback.svelte';
	import AvatarImage from '../ui/avatar/avatar-image.svelte';
	import Avatar from '../ui/avatar/avatar.svelte';

	const friends = [
		{
			id: 1,
			name: 'Alice Johnson',
			image: 'https://i.pravatar.cc/150?img=1',
			email: 'alice.johnson@example.com',
			status: 'online',
			lastSeen: '2025-09-27T10:05:00Z'
		},
		{
			id: 2,
			name: 'Bob Smith',
			image: 'https://i.pravatar.cc/150?img=2',
			email: 'bob.smith@example.com',
			status: 'offline',
			lastSeen: '2025-09-26T21:30:00Z'
		},
		{
			id: 3,
			name: 'Charlie Davis',
			image: 'https://i.pravatar.cc/150?img=3',
			email: 'charlie.davis@example.com',
			status: 'away',
			lastSeen: '2025-09-27T09:20:00Z'
		},
		{
			id: 4,
			name: 'Diana Lopez',
			image: 'https://i.pravatar.cc/150?img=4',
			email: 'diana.lopez@example.com',
			status: 'online',
			lastSeen: '2025-09-27T11:15:00Z'
		},
		{
			id: 5,
			name: 'Ethan Brown',
			image: 'https://i.pravatar.cc/150?img=5',
			email: 'ethan.brown@example.com',
			status: 'busy',
			lastSeen: '2025-09-27T08:55:00Z'
		},
		{
			id: 6,
			name: 'Zoe Carter',
			image: 'https://i.pravatar.cc/150?img=6',
			email: 'zoe.carter@example.com',
			status: 'offline',
			lastSeen: '2025-09-25T17:40:00Z'
		},
		{
			id: 7,
			name: 'Alice Johnson',
			image: 'https://i.pravatar.cc/150?img=7',
			email: 'alice.johnson@example.com',
			status: 'online',
			lastSeen: '2025-09-27T10:05:00Z'
		},
		{
			id: 8,
			name: 'Bob Smith',
			image: 'https://i.pravatar.cc/150?img=8',
			email: 'bob.smith@example.com',
			status: 'offline',
			lastSeen: '2025-09-26T21:30:00Z'
		},
		{
			id: 9,
			name: 'Charlie Davis',
			image: 'https://i.pravatar.cc/150?img=9',
			email: 'charlie.davis@example.com',
			status: 'away',
			lastSeen: '2025-09-27T09:20:00Z'
		},
		{
			id: 10,
			name: 'Diana Lopez',
			image: 'https://i.pravatar.cc/150?img=10',
			email: 'diana.lopez@example.com',
			status: 'online',
			lastSeen: '2025-09-27T11:15:00Z'
		},
		{
			id: 11,
			name: 'Ethan Brown',
			image: 'https://i.pravatar.cc/150?img=11',
			email: 'ethan.brown@example.com',
			status: 'busy',
			lastSeen: '2025-09-27T08:55:00Z'
		},
		{
			id: 12,
			name: 'Zoe Carter',
			image: 'https://i.pravatar.cc/150?img=12',
			email: 'zoe.carter@example.com',
			status: 'offline',
			lastSeen: '2025-09-25T17:40:00Z'
		},
		{
			id: 13,
			name: 'Zoe Carter',
			image: 'https://i.pravatar.cc/150?img=13',
			email: 'zoe.carter@example.com',
			status: 'offline',
			lastSeen: '2025-09-25T17:40:00Z'
		},
		{
			id: 14,
			name: 'Alice Johnson',
			image: 'https://i.pravatar.cc/150?img=14',
			email: 'alice.johnson@example.com',
			status: 'online',
			lastSeen: '2025-09-27T10:05:00Z'
		},
		{
			id: 15,
			name: 'Bob Smith',
			image: 'https://i.pravatar.cc/150?img=15',
			email: 'bob.smith@example.com',
			status: 'offline',
			lastSeen: '2025-09-26T21:30:00Z'
		},
		{
			id: 16,
			name: 'Charlie Davis',
			image: 'https://i.pravatar.cc/150?img=16',
			email: 'charlie.davis@example.com',
			status: 'away',
			lastSeen: '2025-09-27T09:20:00Z'
		},
		{
			id: 17,
			name: 'Diana Lopez',
			image: 'https://i.pravatar.cc/150?img=17',
			email: 'diana.lopez@example.com',
			status: 'online',
			lastSeen: '2025-09-27T11:15:00Z'
		},
		{
			id: 18,
			name: 'Ethan Brown',
			image: 'https://i.pravatar.cc/150?img=18',
			email: 'ethan.brown@example.com',
			status: 'busy',
			lastSeen: '2025-09-27T08:55:00Z'
		},
		{
			id: 19,
			name: 'Zoe Carter',
			image: 'https://i.pravatar.cc/150?img=19',
			email: 'zoe.carter@example.com',
			status: 'offline',
			lastSeen: '2025-09-25T17:40:00Z'
		}
	];
</script>

<div class="h-full w-full py-2">
	<div class="h-full w-full space-y-4 overflow-y-auto px-4">
		{#each friends as friend}
			<div class="flex items-center gap-2">
				<div class="relative">
					<Avatar class="h-12 w-12">
						<AvatarImage src={friend.image} />
						<AvatarFallback class="bg-blue-200 text-lg"
							>{friend?.name?.substring(0, 1)}</AvatarFallback
						>
					</Avatar>
					{#if friend.status === 'online'}
						<div class="absolute right-0 bottom-0 h-3 w-3 rounded-full bg-green-400"></div>
						<div
							class="absolute right-0 bottom-0 h-3 w-3 animate-ping rounded-full bg-green-400"
						></div>
					{/if}
				</div>

				<div>
					<p>{friend.name}</p>
					<p class="text-[10px] text-gray-500">{friend.email}</p>
				</div>
			</div>
		{/each}
	</div>
</div>
