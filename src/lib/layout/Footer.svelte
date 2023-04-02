<script>
	import Icon from '@iconify/svelte';

</script>

<footer class="container">
	<nav>
		<ul>
			<li><a href="/">
				<iconify-icon icon="uil:facebook-f"></iconify-icon>
			</a></li>
			<li><a href="/">
				<iconify-icon icon="uil:instagram"></iconify-icon>
			</a></li>
			<li><a href="/">
				<iconify-icon icon="uil:twitter"></iconify-icon>
			</a></li>
			<li><a href="/">
				<iconify-icon icon="uil:youtube"></iconify-icon>
			</a></li>
		</ul>

		<ul>
			<li><a href="/">Cookies</a></li>
			<li><a href="/">Work</a></li>

		</ul>
	</nav>
</footer>

<style>
	footer {
		margin-top: auto;
		padding-block: 1rem;
	}
	nav,
	ul {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	ul {
		gap: 1em;
    }



	a	{
		color: var(--primrary-inverse);
	}

</style>
