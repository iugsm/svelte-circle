<script lang="ts">
	import { page } from '$app/stores';

	$: pathname = $page.url.pathname;
</script>

<header class="header {pathname !== '/' ? 'border-b' : ''}">
	<nav class="nav">
		<a href="/" class={pathname === '/' ? 'active' : ''}>Example</a>
		<a href="/doc" class={pathname === '/doc' ? 'active' : ''}>Docs</a>
		<a class="github" href="https://github.com/9t5c/svelte-circle" target="_blank" rel="noreferrer">
			<img class="icon icon-normal" src="/github.svg" alt="GitHub" />
			<img class="icon icon-original" src="/github-original.svg" alt="GitHub" />
		</a>
	</nav>
</header>

<style>
	.header {
		width: 100%;
		height: 64px;
		display: flex;
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

	.active {
		text-decoration: underline;
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
