<script lang="ts">
	import { siGithub } from 'simple-icons';
	import { page } from '$app/stores';

	const pathname = $derived($page.url.pathname);
</script>

<header class="h-12 flex items-center justify-center">
	<nav class="flex items-center gap-4">
		<a href="/" class={pathname === '/' ? 'underline' : ''}>Example</a>
		<a href="/doc" class={pathname === '/doc' ? 'underline' : ''}>Docs</a>
		<a
			class="w-4 h-4"
			href="https://github.com/9t5c/svelte-circle"
			target="_blank"
			rel="noreferrer"
		>
			{@html siGithub.svg}
		</a>
	</nav>
</header>
