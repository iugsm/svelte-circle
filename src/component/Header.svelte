<script lang="ts">
	import { page } from '$app/stores';

	$: pathname = $page.url.pathname;
</script>

<header class="header {pathname !== '/' ? 'border-b' : ''}">
	<nav class="nav">
		<a href="/">Example</a>
		<a href="/doc">Docs</a>
		<a class="github" href="https://github.com/9t5c/svelte-circle" target="_blank">
			<img class="icon icon-normal" src="/github.svg" alt="GitHub" />
			<img class="icon icon-original" src="/github-original.svg" alt="GitHub" />
		</a>
	</nav>
</header>

<style>
	.header {
		width: 100%;
		height: 80px;
		display: flex;
		position: fixed;
		top: 0;
		left: 0;
	}

	.border-b {
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
		background: #fff;
	}

	.nav {
		margin: 0 auto;
		height: 100%;
		display: flex;
		align-items: center;
	}

	.nav a {
		margin: 0 12px;
		color: black;
		font-size: 16px;
		font-weight: 500;
	}

	.github .icon-original {
		display: none;
	}
	.github:hover .icon-original {
		display: inline-block;
	}

	.github .icon-normal {
		display: inline-block;
	}
	.github:hover .icon-normal {
		display: none;
	}

	.icon {
		width: 24px;
	}
</style>
