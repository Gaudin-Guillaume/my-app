<script>
    import Bouton from '$lib/components/Button.svelte';
	import Boutonbis from '$lib/components/Buttonbis.svelte';

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
  
  <section  class="flex items-center justify-center gap-8 py-8">
    <div class="sized flex gap-4">
      <div class="size flex flex-col gap-4 sticky top-0">
        <div class="text-4xl boul text-right">Quelques chiffres à propos de notre activités.</div>
        <div class="boul text-xl text-right">Retrouver toutes les données chiffrées clé de M2i sur le marché pharmaceutique, chimie fine, biocontrol et nos engagement RSE</div>
        <div class=" text-right">Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.</div>
        <Bouton content={'découvrir tout nos chiffres'}/>
		<Boutonbis content={'nos produits'}/>
    </div>
      <div style="height:100vh; width:2px; background-color:white;"></div>
      <div class="flex h-fit self-end">
        
        <ul class="flex flex-col gap-4">
            <li class="flex">
                <div style="width:10px; height:10px; border:solid 1px; background-color:#103332;" class="rounded-lg relative  -left-5"></div>
          <div class="boul card gap-4">
            <svg width="48" height="48" style="min-width:max-content;" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <mask id="mask0_309_28" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="48" height="48">
                <rect width="48" height="48" fill="url(#pattern0)"/>
                </mask>
                <g mask="url(#mask0_309_28)">
                <rect width="48" height="48" fill="white"/>
                </g>
                <defs>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#image0_309_28" transform="scale(0.0078125)"/>
                </pattern>
                <image id="image0_309_28" width="128" height="128" xlink:href="data:image/png;base64,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"/>
                </defs>
                </svg>
                
                <div class="flex flex-col gap-4">
                    <div>
                <div class="text-3xl font-semibold">
                22.000
                </div >
                <div class="text-2xl font-light">Pesticides conventionnels évitées</div>
            </div>
                <div>M2i Group a évité plus de 22000 pesticides conventionnels en 2021 ce qui représente l'équivalence d'un pays comme le portugal ou la pologne</div>
            </div>
        </div>
    </li>
            <li class="flex">
                <div style="width:10px; height:10px; border:solid 1px; background-color:#103332;" class="rounded-lg relative  -left-5"></div>
          <div class="boul card gap-4">
            <svg width="48" height="48" style="min-width:max-content;" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <mask id="mask0_309_28" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="48" height="48">
                <rect width="48" height="48" fill="url(#pattern0)"/>
                </mask>
                <g mask="url(#mask0_309_28)">
                <rect width="48" height="48" fill="white"/>
                </g>
                <defs>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#image0_309_28" transform="scale(0.0078125)"/>
                </pattern>
                <image id="image0_309_28" width="128" height="128" xlink:href="data:image/png;base64,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"/>
                </defs>
                </svg>
                
                <div class="flex flex-col gap-4">
                    <div>
                <div class="text-3xl font-semibold">
                22.000
                </div >
                <div class="text-2xl font-light">Pesticides conventionnels évitées</div>
            </div>
                <div>M2i Group a évité plus de 22000 pesticides conventionnels en 2021 ce qui représente l'équivalence d'un pays comme le portugal ou la pologne</div>
            </div>
        </div>
    </li>
            <li class="flex">
                <div style="width:10px; height:10px; border:solid 1px; background-color:#103332;" class="rounded-lg relative  -left-5"></div>
          <div class="boul card gap-4">
            <svg width="48" height="48" style="min-width:max-content;" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <mask id="mask0_309_28" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="48" height="48">
                <rect width="48" height="48" fill="url(#pattern0)"/>
                </mask>
                <g mask="url(#mask0_309_28)">
                <rect width="48" height="48" fill="white"/>
                </g>
                <defs>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#image0_309_28" transform="scale(0.0078125)"/>
                </pattern>
                <image id="image0_309_28" width="128" height="128" xlink:href="data:image/png;base64,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"/>
                </defs>
                </svg>
                
                <div class="flex flex-col gap-4">
                    <div>
                <div class="text-3xl font-semibold">
                22.000
                </div >
                <div class="text-2xl font-light">Pesticides conventionnels évitées</div>
            </div>
                <div>M2i Group a évité plus de 22000 pesticides conventionnels en 2021 ce qui représente l'équivalence d'un pays comme le portugal ou la pologne</div>
            </div>
        </div>
    </li>
        
          
      </div>
    </div>
  </section>
  
  <style>
    .size {
      max-width: 475px;
      width: 100vw;
    }
  
    .card {
      padding: 16px 8px;
      background-color: #103332;
      border: solid 1px;
      display:flex;
      align-items:center;

    }
  
    section {
      background-color: #103332;
      color: white;
    }
  
    .sized {
      max-width: 1440px;
      width: 100vw;
      padding-left: 72px;
      padding-right: 72px;
    }
  
    .boul {
      filter: blur(1000px);
      transition:2s ease-in-out;
    }
  </style>
  