<script>
	import Bouton from '$lib/components/Button.svelte';
	import Boutonbis from '$lib/components/Buttonbis.svelte';

	import Map from '$lib/components/Mapbox.svelte';

</script>

<section id="hero" class="gap-4 relative grid-section">

	<video autoplay loop muted class="absolute top-0 w-full h-full object-cover">
		<source src="/hero.mp4" type="video/mp4" />
	</video>

<div class="card relative z-3 space-y-8 p-8 flex flex-col shadow-lg blabla col max-w-md m-3 sm:m-0">
	<div class=" text-4xl bg-neutral-700 bg-clip-text">
		M2i Group - Des solutions de biocontrôle pour une agriculture durable
	</div>

<span class="text-4x1 bg-neutral-700 bg-clip-text">Notre entreprise s'engage pour la protection de l'environnement et la santé des cultures</span>

<div class="flex space-x-4">
	<Bouton content={'en savoir plus'}/>
	<Boutonbis content={'nos produits'}/>
</div>
</div>
<div class="col"></div>

</section>

<section class="flex justify-center items-center align-center autoGrid m-auto my-4 ">

	<div class="flex w-full justify-end ">
    	<img src="./abeille.jpg" alt="produit de biocontrole " class="card  w-96 relative left-0 sm:left-12" >
    </div>

	<div class="bg-success-200 m-3 sm:m-0  p-4 space-y-4 card z-10">
		<div class="text-4xl font-semibold">
			Solutions pour la protection des cultures .
		</div>
		<div>
			Nous concevons des produits de biocontrole naturels certifiés pour une utilisation en agriculture biologique et respectueux de l'environnement. Nos solutions écologiques sont adaptées à tous les types de cultures. Protégez vos cultures tout en préservant la biodiversité avec nos produits de biocontrôle.
		</div>
	    <div class="flex space-x-4">
		<Bouton content={'en savoir plus'}/>
		<Boutonbis content={'nos produits'}/>
</div>

	</div>

</section>

<section class="m-auto flex justify-center items-center align-center autoGrid my-12 w-screen">
	<div class="flex w-full justify-end ">
	<div class="bg-success-200  p-4 space-y-4 card z-10">
		<div class="text-5xl font-semibold">
			Sous tire 2.
		</div>
		<div>
			Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
		</div>
		<Bouton content={'découvrir'}/>
	</div>
	</div>
	
		<img src="./carotte.png" alt="produits pharmaceutiques" class="card  w-96 relative right-0 md:right-12" >
	

</section>

<Map/>




<style>
	#hero{
		position:relative;
		height:90vh;
		justify-content:center;

	}

</style>