<script>
	import Button from './components/Button.svelte';
</script>

<nav>
	<ul>
		<li><a href="./">Home</a></li>
		<li><a href="about">about</a></li>
		<li><a href="#">Biocontrol</a></li>
		<li><a href="#">contact</a></li>
	</ul>

	<Button />
</nav>

<style>
	nav {
		background-color: rgb(207, 207, 207);
		width: 100vw;
		height: 100px;
		color: #404040;
		font-weight: 600;
		position: sticky;
		top: 0;
		font-family: sans-serif;
		margin: 0 !important;
		opacity: 0.2;
	}

	ul {
		list-style-type: none;
	}

	nav ul li {
		display: inline;
	}
</style>
