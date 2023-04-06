<script>
	import Bouton from '../components/Button.svelte';
	import { LightSwitch } from '@skeletonlabs/skeleton';
	let isOpen = false;
	function toggleMenu() {
		isOpen = !isOpen;
	}
</script>

<nav class="navbar navbar-expand-md navbar-light bg-light">
	<a class="navbar-brand" href="/">
		<img src="/logo-white.png" alt="M2i, Lead the change" style="height: var(--logo-height); max-width: 163px; object-fit: contain; aspect-ratio: 163 / 71;">
	</a>
	<button class="navbar-toggler" type="button" on:click={toggleMenu}>
		<span class="navbar-toggler-icon"></span>
	</button>
	<div class="collapse navbar-collapse" class:show={isOpen}>
		<ul class="navbar-nav mr-auto">
			<li class="nav-item"><a class="nav-link" href="/">Home</a></li>
			<li class="nav-item"><a class="nav-link" href="/about">About</a></li>
			<li class="nav-item"><a class="nav-link" href="/news">Biocontrol</a></li>
			<li class="nav-item"><a class="nav-link" href="/contact">Contact</a></li>
		</ul>
		<LightSwitch class="ml-auto" />
		<Bouton content={'contact'} />
	</div>
</nav>

<style>
	@media (max-width: 767px) {
		.navbar-nav {
			flex-direction: column;
			background-color: #f8f9fa;
			position: absolute;
			top: 56px;
			left: 0;
			right: 0;
			padding: 10px;
			border-radius: 0 0 5px 5px;
			box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
			transform: translateY(-100%);
			transition: transform 0.3s ease-in-out;
			z-index: 999;
		}
		.navbar-nav.show {
			transform: translateY(0%);
		}
		.nav-link {
			color: red;
		}
	}
</style>
