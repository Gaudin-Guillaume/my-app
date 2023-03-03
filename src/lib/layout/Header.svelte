<script>
	import Button from '../components/Button.svelte';
	import { LightSwitch } from '@skeletonlabs/skeleton';
</script>

<nav class="px-4 flex justify-between items-center gap-8">
	<ul class=" flex gap-4">
		<li><a href="./">Home</a></li>
		<li><a href="about">about</a></li>
		<li><a href="news">Biocontrol</a></li>
		<li><a href="./">contact</a></li>
	</ul>

	<LightSwitch class="ml-auto" />
	<Button content={'contact'} />
</nav>

<style>
	nav {
		width: 100vw;
		height: 100px;
		position: sticky;
		top: 0;
		margin: 0 !important;
	}
</style>
