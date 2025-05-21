<script>
	import Bouton from '$lib/components/Button.svelte';
	import Boutonw from '$lib/components/Buttonw.svelte';
	
	import Par from '$lib/components/parralax.svelte';
	import Actu from '$lib/components/actuhome.svelte';
	import Newsletter from '$lib/components/Newsletter.svelte';
	import Contact from '$lib/components/Contact.svelte';

	

	import Map from '$lib/components/Mapbox.svelte';

	import { onMount } from 'svelte';
  
    onMount(() => {
      // Récupérer tous les éléments avec la classe "boul"
      const boulElements = document.querySelectorAll('.boul');
  
      // Fonction pour gérer l'événement de défilement
      function handleScroll() {
        // Parcourir tous les éléments "boul"
        boulElements.forEach(boulElement => {
          // Calculer la position de chaque élément par rapport à la position de défilement
          const elementOffset = boulElement.offsetTop;
          const scrollPosition = window.scrollY + window.innerHeight;
  
          // Si l'élément atteint la moitié de l'écran
          if (scrollPosition > elementOffset + boulElement.offsetHeight / 2) {
            // Supprimer le flou en définissant la valeur à 0px
            boulElement.style.filter = 'blur(0px)';
          } else {
            // Appliquer le flou en définissant une valeur de flou (64px dans votre cas)
            boulElement.style.filter = 'blur(64px)';
          }
        });
      }
  
      // Ajouter l'événement de défilement à la fenêtre
      window.addEventListener('scroll', handleScroll);
  
      // Appeler handleScroll au chargement initial pour gérer le flou initial
      handleScroll();
  
      // Nettoyer l'écouteur d'événement lors de la destruction du composant
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    });

</script>


<section id="hero" class="flex pt-32 md:pt-12 flex-col justify-center gap-8 md:flex-row items-center overflow-visible px-4 md:px-32">
<div class="flex size">
	<div class="gap-4 flex flex-col w-full" style="min-width:344px; max-width:400px;" >
		<div class=" boul text-2xl md:text-4xl leading-normal">
			M2i Group<br>Des solutions de biocontrôle pour une agriculture durable.
		</div>
	
	<span class="textsize bg-clip-text boul">Notre entreprise s'engage pour la protection de l'environnement et la santé des cultures</span>
	
	<div class="flex space-x-4">
		<Boutonw content={'en savoir plus'}/>
		
	</div>
	</div>
	
	<video autoplay loop muted class=" w-11/12 md:w-3/6 object-cover relative top-6 md:top-0 h-screen md:h-screen ">
		<source src="/hero(bis).mp4" type="video/mp4" />
	</video>
</div>

</section>

<Par />



<section class=" flex flex-col justify-center items-center align-center  w-screen p-4 h-fit md:h-screen gap-8">
	<div class="sizedbis">
		<div class="flex flex-col gap-8">
	<div class="flex flex-col gap-4 justify-start" style="color:white;">
		<div class="text-3xl font-regular text-left ">Quelques chiffres.</div>
		<div class="flex space-x-4">
			<Bouton link="https://chat.openai.com/?model=text-davinci-002-render-sha" content={'en savoir plus sur nos produits'}/>
			
		</div>
	</div>
<div class="flex flex-col md:flex-row gap-8">
	
	<div class="flex-col scroll cardo p-4 space-y-4 w-96" style="border:solid 1px #15514F; background-color:white;">
		
		<div class="font-thin text-4xl">22 000</div>
		<span class="text-xl font-thin" style="color:#15514F">pesticides conventionnels évitées</span>
		<div>M2i Group a évité plus de 22000 pesticides conventionnels en 2021 ce qui représente l'équivalence d'un pays comme le portugal ou la pologne</div>
		
	</div>

	<div class="flex-col cardo p-4 space-y-4 w-96" style="border:solid 1px #15514F; background-color:white;">
		
		<div class="font-thin text-4xl">200</div>
		<span class="text-xl font-thin" style="color:#15514F">Colaborateurs</span>
		<div>M2i a multiplié par 5 ces effectifs en 7 ans pour comprendre à ce jour 200 collaborateurs</div>
		
	</div>

	<div class="flex-col cardo p-4 space-y-4 w-96" style="border:solid 1px #15514F; background-color:white;">
		
		<div class="font-thin text-4xl">80</div>
		<span class="text-xl font-thin" style="color:#15514F">Cultures protégées</span>
		<div>M2i compte plus de 80 cultures protégées dans différents domaines : 
			Maraichages, espaces verts, grandes cultures, arboriculture</div>
	</div>
	
</div>
</div>
</div>
</section>



<Map/>

<section class=" bg-success-200 relative flex items-center justify-center">
	<div class="size flex flex flex-col justify-center items-center gap-8 " style="z-index:2;">
		<div class="flex gap-4" style="justify-content:space-between; width:100%;">
			<div class="text-3xl">Nos dernières actualités.</div>
			<Bouton link="news" content={'toutes notre actualités'}/>
		</div>
		<Actu/>
	</div>

</section>




<Newsletter/>




<style>
	#hero{
		height:90vh;
		background-color:#103332;
		color:white;
		z-index:70 !important;

	}

	.size{
		max-width:1100px;
		padding-left:80px;
		padding-right:80px;
		width:100vw;
		justify-content:space-between;
		align-items:center;

	}


	.cardo{
		min-height:300px;
	}
	.sizedbis{
		display:flex;
		flex-direction:column;
		background-color:#103332;
		align-items: left;
		max-width:1100px;
		width:100vw;
		padding-right:80px;
		padding-left:80px;
		padding-bottom:64px;
		padding-top:64px;


	}

	.scroll{
		overflow-x: scroll;
	}

	

	

</style>