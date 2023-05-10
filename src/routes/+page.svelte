<script>
	import Bouton from '$lib/components/Button.svelte';
	import Boutonbis from '$lib/components/Buttonbis.svelte';
	import Par from '$lib/components/parralax.svelte';
	

	import Map from '$lib/components/Mapbox.svelte';

</script>


<section id="hero" class="flex pt-32 md:pt-12 flex-col justify-center gap-8 md:flex-row items-center overflow-visible px-4 md:px-32">

	<div class="gap-4 flex flex-col w-full" style="min-width:344px;" >
		<div class=" text-2xl md:text-4xl font-semibold leading-normal">
			M2i Group - Des solutions de <span class="head">biocontrôle</span> pour une <span class="head">agriculture durable</span>
		</div>
	
	<span class="text-4x1 bg-clip-text">Notre entreprise s'engage pour la protection de l'environnement et la santé des cultures</span>
	
	<div class="flex space-x-4">
		<Bouton content={'en savoir plus'}/>
		<Boutonbis content={'nos produits'}/>
	</div>
	</div>
	
	<video autoplay loop muted class=" w-11/12 md:w-3/6 object-cover relative top-6 md:top-0 h-screen md:h-screen ">
		<source src="/hero(bis).mp4" type="video/mp4" />
	</video>

</section>

<Par />



<section class=" flex flex-col justify-center items-center align-center  w-screen p-4 h-fit md:h-screen gap-8" style="background-color:rgb(23, 89, 87);">
	<div class="flex flex-col gap-8">
	<div class="flex flex-col gap-4 justify-start" style="color:white;">
		<div class="text-4xl font-semibold text-left "><span class="head">Quelques chiffres</span> à propos de notre activités.</div>
		<div class="w-96 text-left">
		Retrouver toutes les données chiffrées clé de M2i sur le marché pharmaceutique, chimie fine, biocontrol et nos engagement RSE.
		</div>
		<div class="flex space-x-4">
			<Bouton content={'en savoir plus'}/>
			<Boutonbis content={'nos produits'}/>
		</div>
	</div>
<div class="flex flex-col md:flex-row gap-8">
	<div class="card flex:col p-4 space-y-4 w-96">
		<div class="w-fit rounded-lg p-2 bg-secondary-500 shadow-lg ">
			<img src="./feuille.png" alt="icone feuille d'arbre">
		</div>
		<div class="font-thin text-6xl">22k</div>
		<span class="text-xl font-thin" style="color:#15514F">pesticides conventionnels évitées</span>
		<div>M2i Group a évité plus de 22000 pesticides conventionnels en 2021 ce qui représente l'équivalence d'un pays comme le portugal ou la pologne</div>
		<Bouton content={'découvir'}/>
	</div>

	<div class="card flex:col p-4 space-y-4 w-96">
		<div class="w-fit rounded-lg p-2 bg-secondary-500 shadow-lg ">
			<img src="./feuille.png" alt="icone feuille d'arbre">
		</div>
		<div class="font-thin text-6xl">200</div>
		<span class="text-xl font-thin" style="color:#15514F">Collaborateurs</span>
		<div>M2i a multiplié par 5 ces effectifs en 7 ans pour comprendre à ce jour 200 collaborateurs</div>
		<Bouton content={'découvir'}/>
	</div>

	<div class="flex:col p-4 space-y-4 w-96" style="border:solid 1px #15514F; background-color:white;">
		<div class="w-fit rounded-lg p-2 bg-secondary-500 shadow-lg ">
			<img src="./feuille.png" alt="icone feuille d'arbre">
		</div>
		<div class="font-thin text-6xl">80</div>
		<span class="text-xl font-thin" style="color:#15514F">Cultures protégées</span>
		<div>M2i compte plus de 80 cultures protégées dans différents domaines : 
			Maraichages, espaces verts, grandes cultures, arboriculture</div>
		<Bouton content={'découvir'}/>
	</div>
	
</div>
</div>
</section>


<Map/>

<section class="h-screen">
	<div>ok</div>
</section>




<style>
	#hero{
		height:90vh;
		background-color:#103332;
		color:white;
		z-index:70 !important;

	}

	

	

</style>