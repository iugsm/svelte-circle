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

<div class="grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-4xl mx-auto bg-white rounded-lg p-5">
	<form onsubmit={(e) => e.preventDefault()} class="flex flex-col gap-4">
		<fieldset class="flex flex-col gap-1">
			<label for="percent">Percentage</label>
			<input
				id="percent"
				class="range range-sm max-w-xs"
				type="range"
				name="percent"
				bind:value={percent}
			/>
		</fieldset>

		<fieldset class="flex flex-col gap-1">
			<label for="size">Size</label>
			<input
				id="size"
				class="input input-sm input-bordered w-full max-w-xs"
				type="number"
				bind:value={size}
			/>
		</fieldset>

		<fieldset class="flex flex-col gap-1">
			<label for="lineWidth">Line Width</label>
			<input
				id="lineWidth"
				class="input input-sm input-bordered w-full max-w-xs"
				type="number"
				bind:value={lineWidth}
			/>
		</fieldset>

		<fieldset class="flex flex-col gap-1">
			<label for="color">Progress Color</label>
			<input
				id="color"
				class="input input-sm input-bordered w-full max-w-xs"
				type="text"
				bind:value={color}
			/>
		</fieldset>

		<fieldset class="flex flex-col gap-1">
			<label for="bgColor">Background Color</label>
			<input
				id="bgColor"
				class="input input-sm input-bordered w-full max-w-xs"
				type="text"
				bind:value={bgColor}
			/>
		</fieldset>

		<fieldset class="flex flex-col gap-1">
			<label for="textColor">Text Color</label>
			<input
				id="textColor"
				class="input input-sm input-bordered w-full max-w-xs"
				type="text"
				bind:value={textColor}
			/>
		</fieldset>

		<fieldset class="grid grid-cols-1 gap-2">
			<label class="flex items-center gap-2">
				<input type="checkbox" bind:checked={rounded} class="checkbox checkbox-sm rounded" />
				Rounded stroke
			</label>
			<label class="flex items-center gap-2">
				<input type="checkbox" bind:checked={responsive} class="checkbox checkbox-sm rounded" />
				Responsive
			</label>
			<label class="flex items-center gap-2">
				<input type="checkbox" bind:checked={animation} class="checkbox checkbox-sm rounded" />
				Animation
			</label>
		</fieldset>
	</form>

	<div class="grid place-items-center">
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
</div>
