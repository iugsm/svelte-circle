<script lang="ts">
	import Header from './Header.svelte';
	import '../app.css';
</script>

<svelte:head>
	<title>svelte-circle</title>
</svelte:head>

<Header />
<main>
	<slot />
</main>
