<script lang="ts">
	import Header from '$component/Header.svelte';
	import '../app.css';
</script>

<Header />
<main class="main"><slot /></main>

<style>
	.main {
		padding-top: 80px;
		min-height: calc(100vh - 80px);
	}
</style>
