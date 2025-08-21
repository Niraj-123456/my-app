<script lang="ts">
	type SpinnerProps = {
		width: string;
		height: string;
		color: string;
		thickness: number;
	};
	let { width = '3.25', height = '3.25', color = 'hsl(214, 97%, 59%)', thickness = 2 } = $props();
</script>

<svg viewBox="25 25 50 50" class="loader" style={`width:${width}em;height:${height}em;`}>
	<circle r="20" cy="50" cx="50" style={`stroke:${color};stroke-width:${thickness}`}></circle>
</svg>

<style lang="postcss">
	.loader {
		transform-origin: center;
		animation: rotate4 2s linear infinite;
	}

	.loader circle {
		fill: none;
		stroke-dasharray: 1, 200;
		stroke-dashoffset: 0;
		stroke-linecap: round;
		animation: dash4 1.5s ease-in-out infinite;
	}

	@keyframes rotate4 {
		100% {
			transform: rotate(360deg);
		}
	}

	@keyframes dash4 {
		0% {
			stroke-dasharray: 1, 200;
			stroke-dashoffset: 0;
		}

		50% {
			stroke-dasharray: 90, 200;
			stroke-dashoffset: -35px;
		}

		100% {
			stroke-dashoffset: -125px;
		}
	}
</style>
