<script>
	import Bouton from '$lib/layout/Bouton.svelte';
</script>

<section id="hero" class="gap-4" >

<h1>
	<span class=" text-7xl bg-neutral-700 bg-clip-text text-transparent box-decoration-clone">
		Lead the change.
	</span>
</h1>
<h2><span class="text-4x1 bg-neutral-700 bg-clip-text">Fournisseur de solution verte pour vos cultures</span></h2>

<Bouton content={'en savoir plus'}  />

</section>




<style>
	#hero{
		display:flex;
		flex-direction:column;
		background-color:rgb(179, 179, 179);
		height:90vh;
		justify-content:center;

	}
</style>