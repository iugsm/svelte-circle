<script lang="ts">
	export let width = 200;
	export let lineWidth = 30;
	export let bgColor = 'hsla(13, 58%, 91%, 1)';
	export let color = 'hsla(8, 59%, 65%, 1)';
	export let textColor = 'hsla(0, 0%, 20%, 1)';
	export let responsive = false;
	export let percent = 10;
	export let rounded = false;
	export let animation = true;

	let svgWidth: number | string = '';

	$: if (responsive) {
		svgWidth = '100%';
	} else {
		svgWidth = width;
	}

	$: offset = 1100 * (1 - percent / 100);
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={svgWidth}
	height={svgWidth}
	viewBox="-25 -25 400 400"
>
	<circle stroke={bgColor} cx="175" cy="175" r="175" stroke-width={lineWidth} fill="none" />
	<circle
		stroke={color}
		transform="rotate(-90 175 175)"
		cx="175"
		cy="175"
		r="175"
		stroke-dasharray="1100"
		stroke-width={lineWidth}
		stroke-dashoffset={offset}
		stroke-linecap={rounded ? 'round' : 'butt'}
		fill="none"
		style="transition: {animation ? 'stroke-dashoffset 0.5s ease-out' : 'none'}"
	/>
	<text
		style="font: bold 5rem Helvetica, Arial, sans-serif;"
		fill={textColor}
		x="50%"
		y="50%"
		dx="-25"
		text-anchor="middle"
	>
		{percent}
		<tspan dx="10">%</tspan>
	</text>
</svg>
