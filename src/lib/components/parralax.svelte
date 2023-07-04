<script>
	import { Parallax, ParallaxLayer} from 'svelte-parallax'
	

	 // Personnalisez la valeur 768 selon vos besoins pour déterminer le point de rupture mobile/desktop;
	let parallax;
	import Bouton from '$lib/components/Button.svelte';
	
</script>
<div class="relative" style="height:max-content">
	<div class="flex items-center w-screen justify-center" style="z-index:0;">
	<Parallax sections={2}  bind:this={parallax} style="overflow:visible; position:absolute;top:0; width:100vw; max-width:1440px;">
	
		<ParallaxLayer offset={1} rate={2.5} style="display: flex; justify-content: flex-end; z-index:-5;">
			<div style="background-color: #E38A70;" class="w-64 md:w-96 h-64 md:h-96"/>
		</ParallaxLayer>
		
		<ParallaxLayer offset={0} rate={2.5} style="display: flex; justify-content: flex-start; z-index:-5;">
			<div style="background-color: #15514F;" class="w-64 md:w-96 h-64 md:h-96"/>
		</ParallaxLayer>
	
	</Parallax>
</div>
<div  style="z-index:50;">
	<div class="w-screen flex items-center justify-center">
<section class=" max flex flex-col md:flex-row gap-4 md:gap-32 md:my-0 px-4  items-center align-center h-fit">

	<div class="flex flex-col md:flex-row justify-center items-center relative w-fit" style="width:400px;">
		<div class=" w-96 min-w-full h-96 top-12 right-12 relative" style="background-color:rgba(21, 81, 79, 0.3);"></div>
		<img src="./cocci.png" alt="produit de biocontrole" class="w-96 absolute" >
	</div>

	<div class="boxing flex flex-col self-end gap-4 px-4 mt-96">
		
		<div class="text-xl font-thin" style="color:#15514F;">Biocontrole</div>
		<div class="flex flex-col gap-4 ">
		<div class="text-3xl">
			Solutions pour la protection des cultures.
		</div>
		<div>
			Nous concevons des produits de biocontrole naturels certifiés pour une utilisation en agriculture biologique et respectueux de l'environnement. Nos solutions écologiques sont adaptées à tous les types de cultures. Protégez vos cultures tout en préservant la biodiversité avec nos produits de biocontrôle.
		</div>
		</div>
		<div class="flex space-x-4">
		<Bouton link="FDS" content={'en savoir plus sur nos produits'}/>
		
</div>


	</div>

</section>
</div>
<div class="w-screen flex items-center justify-center">
<section class=" max flex flex-col md:flex-row gap-4 md:gap-32 my-32 md:my-0 px-4 justify-center w-screen  items-center align-center h-fit" >
	<div class="gap-4 flex flex-col self-start p-4 mt-96">
		
		<div class="text-xl font-thin" style="color:#15514F;">Chimie & pharmaceutique</div>
		<div class="text-3xl">
			Innovations et recherche en chimie et pharmaceutique.
		</div>
		<div>
			Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
		</div>
		<Bouton link='FDS' content={'découvrir notre activitée pharma & chimie'}/>
	</div>
	
		<img src="./labo.png" alt="produits pharmaceutiques" class="w-96" >
	

</section>
</div>
</div>


</div>

<style>
	.max{
		width:100vw;
		max-width:1100px;
		padding-left:72px;
		padding-right:72px;
	}
</style>
