<script lang="ts">
	import { page } from '$app/stores';

	import Header from './Header.svelte';
	import '../app.css';

	$: pathname = $page.url.pathname;
</script>

<svelte:head>
	<title>svelte-circle</title>
</svelte:head>

<main class="main" class:bg={pathname === '/'}>
	<Header />
	<slot />
</main>

<style>
	.main {
		--color-bg: linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);
	}

	.bg {
		background-image: var(--color-bg);
	}
</style>
