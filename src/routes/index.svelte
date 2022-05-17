<script lang="ts">
	import { Circle } from '$lib/index';

	let width = 200;
	let lineWidth = 30;
	let bgColor = '#F5DFD9';
	let color = '#DA7E70';
	let textColor = '#323232';
	let percent = 10;
	let rounded = true;
	let responsive = true;
</script>

<main class="main">
	<section class="container">
		<ul class="create">
			<li>
				<p>Percentage</p>
				<input type="range" bind:value={percent} />
			</li>

			<li>
				<p>width</p>
				<input type="number" bind:value={width} />
			</li>

			<li>
				<p>line width</p>
				<input type="number" bind:value={lineWidth} />
			</li>

			<li>
				<p>progress color</p>
				<input type="text" bind:value={color} />
			</li>

			<li>
				<p>background color</p>
				<input type="text" bind:value={bgColor} />
			</li>

			<li>
				<p>text color</p>
				<input type="text" bind:value={textColor} />
			</li>

			<li class="check-group">
				<label>
					<input type="checkbox" bind:checked={rounded} />
					Rounded stroke
				</label>
				<label>
					<input type="checkbox" bind:checked={responsive} />
					Responsive
				</label>
			</li>
		</ul>
		<div class="stage">
			<Circle {rounded} {width} {lineWidth} {bgColor} {color} {textColor} {percent} {responsive} />
		</div>
	</section>
</main>

<style>
	.main {
		min-height: 100vh;
		display: grid;
		place-items: center;

		accent-color: hsla(257, 10%, 27%, 1);
	}

	.container {
		max-width: 90vw;
		max-height: 80vh;
		width: 100%;
		height: 100%;
		background: hsla(17, 78%, 98%, 1);
		border-radius: 12px;
		display: grid;
		grid-template-columns: repeat(12, 1fr);
	}

	.create {
		border-right: 1px solid rgba(0, 0, 0, 0.1);
		grid-column: 1 / 4;
		padding: 48px;
		display: grid;
		grid-template-columns: repeat(1, 1fr);
	}

	.stage {
		grid-column: 4 / -1;
		display: grid;
		place-items: center;
		overflow: hidden;
		padding: 60px;
	}

	input[type='range'],
	input[type='number'],
	input[type='text'] {
		width: 100%;
	}

	input[type='number'],
	input[type='text'] {
		padding-left: 4px;
		padding-right: 4px;
		height: 36px;
	}

	.check-group label {
		display: block;
	}
</style>
