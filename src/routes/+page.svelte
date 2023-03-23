<script>
	import Bouton from '$lib/components/Button.svelte';

</script>

<section id="hero" class="gap-4">
<h1>
	<span class=" text-5xl bg-neutral-700 bg-clip-text text-transparent box-decoration-clone title">
		Lead the change.
	</span>
</h1>
<p><span class="text-4x1 bg-neutral-700 bg-clip-text">Fournisseur de solution verte pour vos cultures</span></p>

<Bouton content={'en savoir plus'}  />

</section>

<section class="flex autoGrid bg-success-600">
	<div class="flex">
        <img src="./favicon.png">
	</div>
	<div>
		<h2 class="text-6x1">
			Sous tire 1.
		</h2>
		<p>
			Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
		</p>
	
<Bouton content={'en svoir plus'}/>
</div>

</section>

<section class="flex autoGrid">
	<div class="flex">
        <img src="./carotte.png">
	</div>
	<div class="flex:column gap-8">
		<h2 class="text-7x1 bg-neutral-700 bg-clip-text text-transparent box-decoration-clone">
			Sous tire 2.
		</h2>
		<p>
			Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
		</p>
		<Bouton content={'découvrir'}/>
	</div>


</section>




<style>
	#hero{
		display:flex;
		flex-direction:column;
		height:90vh;
		justify-content:center;

	}
</style>