<script>
	import { Parallax, ParallaxLayer} from 'svelte-parallax'
	import { onMount } from 'svelte';
	
	let isMobile = false;

	onMount(() => {
  isMobile = window.innerWidth <= 768; // Personnalisez la valeur 768 selon vos besoins pour déterminer le point de rupture mobile/desktop
});
	let parallax;
	import Bouton from '$lib/components/Button.svelte';
	import Boutonbis from '$lib/components/Buttonbis.svelte';
	
</script>
<div class="relative">
<div class="absolute" style="z-index:50;">
<section class="flex flex-col md:flex-row gap-4 md:gap-32 my-32 md:my-0 px-4 w-screen md justify-center items-center align-center h-screen" style="border-bottom:solid 1px #E2E2E2;">

	<div class="flex flex-col md:flex-row justify-center relative w-fit" style="width:400px;">
		<div class=" w-96 min-w-full h-96 top-12 right-12 relative" style="background-color:rgba(21, 81, 79, 0.3);"></div>
		<img src="./cocci.png" alt="produit de biocontrole" class="w-96 absolute" >
	</div>

	<div class="flex flex-col gap-4 w-96 px-4 ">
		<div class=" w-fit rounded-lg p-2 bg-secondary-500 shadow-lg ">
			<img src="./feuille.png" alt="icone feuille d'arbre">
		</div>
		<div class="text-xl font-thin" style="color:#15514F;">Biocontrole</div>
		<div class="text-2xl font-semibold">
			Solutions pour la <span class="headbis">protection</span> des cultures .
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
<section class=" flex flex-col md:flex-row gap-4 md:gap-32 my-32 md:my-0 px-4 justify-center w-screen  items-center align-center h-fit md:h-screen" >
	<div class="w-96 gap-4 flex flex-col p-4">
		<div class=" w-fit rounded-lg p-2 bg-secondary-500 shadow-lg ">
			<img src="./chimie-pharma.png" alt="icone feuille d'arbre">
		</div>
		<div class="text-xl font-thin" style="color:#15514F;">Chimie & pharmaceutique</div>
		<div class="text-2xl font-semibold">
			<pan class="headbis">Innovations</pan> et recherche en chimie et pharmaceutique.
		</div>
		<div>
			Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
		</div>
		<Bouton content={'découvrir'}/>
	</div>
	
		<img src="./labo.png" alt="produits pharmaceutiques" class="w-96" >
	

</section>
</div>

<Parallax sections={2}  bind:this={parallax} style="overflow:visible;" class="my-32 absolute">
	
	<ParallaxLayer offset={1} rate={2.5} style="display: flex; justify-content: flex-end;">
		<div style="background-color: #E38A70;" class="w-64 md:w-96 h-64 md:h-96"/>
	</ParallaxLayer>
	
	<ParallaxLayer offset={0.1} rate={2.5} style="display: flex; justify-content: flex-start;">
		<div style="background-color: #15514F;" class="w-64 md:w-96 h-64 md:h-96"/>
	</ParallaxLayer>

</Parallax>
</div>
