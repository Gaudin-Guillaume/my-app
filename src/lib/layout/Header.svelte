<script>
	import Bouton from '../components/Button.svelte';
	import { LightSwitch } from '@skeletonlabs/skeleton';
</script>

<nav class="px-4 flex justify-between items-center gap-16">
	<ul class=" flex gap-8">
		<li><a href="/"><img src="/logo-white.png" alt="M2i, Lead the change" /></a></li>
		<li><a href="./">Home</a></li>
		<li><a href="about">about</a></li>
		<li><a href="news">Biocontrol</a></li>
		<li><a href="./">contact</a></li>
	</ul>

	<LightSwitch class="ml-auto" />
	<span class="divider-vertical h-10" />
	<Bouton content={'contact'} />
</nav>

<style>

img {
		height: var(--logo-height);
		max-width: 163px;
		object-fit: contain;
		aspect-ratio: 163 / 71;
	}

	nav {
		width: 100vw;
		height: 100px;
		position: sticky;
		top: 0;
		margin: 0 !important;
	}
	li{
		margin:auto;
	}
</style>
