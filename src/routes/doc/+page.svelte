<script lang="ts">
</script>

<section class="container">
	<h2>Install</h2>
	<code>pnpm add svelte-circle -D</code>
	<br />
	<code>npm install svelte-circle -D</code>

	<br />
	<h2>Useage</h2>
	<pre class="code"><span>{'<'}</span><span>script</span><span>{'>'}</span>
  import {'{ '}Circle{' }'} from 'svelte-circle'
<span>{'</'}</span><span>script</span><span>{'>'}</span>

<span>{'<Circle />'}</span></pre>

	<h2>Props</h2>
	<code>
		<span>percent: number</span>
		<br />
		<span>width: number</span>
		<br />
		<span>lineWidth: number</span>
		<br />
		<span>bgColor: string</span>
		<br />
		<span>color: string</span>
		<br />
		<span>textColor: string</span>
		<br />
		<span>responsive: boolean</span>
		<br />
		<span>rounded: boolean</span>
		<br />
		<span>animation: boolead</span>
	</code>
</section>

<style>
	.container {
		padding-top: 80px;
		max-width: 65ch;
		margin: 0 auto;
		padding-inline: 20px;
	}

	h2 {
		font-size: 24px;
		font-weight: 500;
	}
</style>
