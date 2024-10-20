<script lang="ts">
	import type { Snippet } from 'svelte';

	import '../app.css';

	import Header from './header.svelte';

	const { children }: { children: Snippet } = $props();
</script>

<svelte:head>
	<title>svelte-circle</title>
</svelte:head>

<div class="min-h-dvh bg-gradient-to-r from-amber-400 to-orange-400">
	<Header />
	<main class="p-4 lg:p-6">
		{@render children()}
	</main>
</div>
