<script lang="ts">
	import { Circle } from 'svelte-circle';

	let size = 200;
	let lineWidth = 30;
	let bgColor = '#F5DFD9';
	let color = '#DA7E70';
	let textColor = '#323232';
	let percent = 10;
	let rounded = true;
	let responsive = true;
	let animation = true;
</script>

<div class="main">
	<section class="container">
		<ul class="form">
			<li class="range">
				<p>Percentage</p>
				<input type="range" bind:value={percent} />
			</li>

			<li>
				<p>Size</p>
				<input type="number" bind:value={size} />
			</li>

			<li>
				<p>Line Width</p>
				<input type="number" bind:value={lineWidth} />
			</li>

			<li>
				<p>Progress Color</p>
				<input type="text" bind:value={color} />
			</li>

			<li>
				<p>Background Color</p>
				<input type="text" bind:value={bgColor} />
			</li>

			<li>
				<p>Text Color</p>
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
				<label>
					<input type="checkbox" bind:checked={animation} />
					Animation
				</label>
			</li>
		</ul>
		<div class="stage">
			<Circle
				{rounded}
				{size}
				{lineWidth}
				{bgColor}
				{color}
				{textColor}
				{percent}
				{responsive}
				{animation}
			/>
		</div>
	</section>
</div>

<style>
	.main {
		--color-accent: hsla(257, 10%, 27%, 1);
		--color-container-bg: hsla(17, 78%, 98%, 1);
		--padding: 20px;

		width: min(90vw, 80ch);
		min-height: calc(100vh - 64px);
		padding-block: var(--padding);
		margin-inline: auto;
		accent-color: var(--color-accent);

		display: grid;
		place-items: center;
	}

	.container {
		background: var(--color-container-bg);
		width: 100%;
		padding: var(--padding);
		border-radius: 12px;

		display: grid;
		grid-template-columns: 1fr;
		gap: 20px;
	}

	.form {
		margin: 0;
		padding: 0;

		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 8px 20px;
	}

	.range,
	.check-group {
		grid-column: span 2;
	}

	.stage {
		display: grid;
		place-items: center;
	}

	@media (min-width: 768px) {
		.main {
			--padding: 40px;
		}

		.container {
			grid-template-columns: 2fr 3fr;
		}

		.form {
			grid-template-columns: 1fr;
		}

		.stage {
			padding: var(--padding);
		}

		.range,
		.check-group {
			grid-column: span 1;
		}
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
