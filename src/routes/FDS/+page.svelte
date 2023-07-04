<script>
    import {getAssetURL} from '$lib/utils.js'
    import Button from '$lib/components/Button.svelte';
    import { directusClient } from '$lib/directus';
    import { Avatar } from '@skeletonlabs/skeleton';
    import Bouton from '$lib/components/Buttonw.svelte';
  import Actu from '$lib/components/actuhome.svelte';
    
    const articles = directusClient.items('articles').readByQuery({
            limit: -1,
            filter: {
                status: {
                    _eq: 'published'
                }
            }
        });

        let hoveredItems = [];
        let hovered = false;

        function handleMouseEnter(itemId) {
  hoveredItems[itemId] = true;
}

function handleMouseLeave(itemId) {
  hoveredItems[itemId] = false;
}

let selectedFilters = []; // Les filtres sélectionnés par l'utilisateur

function toggleFilter(filter) {
  if (selectedFilters.includes(filter)) {
    selectedFilters = selectedFilters.filter(f => f !== filter);
  } else {
    selectedFilters = [...selectedFilters, filter];
  }
}


       
    </script>



<section id="hero" class="flex flex-col pt-32 md:pt-12 flex-col justify-center md:flex-row items-end pb-16 overflow-visible px-4 md:px-32">
  
  <div class="flex flex-col justify-end size">
      <ol class="breadcrumb">
          <li class="crumb"><a class="anchor" href="/elements/breadcrumbs">Accueil</a></li>
          <li class="crumb-separator" aria-hidden>&rsaquo;</li>
          <li class="crumb"><a class="anchor" href="/elements/breadcrumbs">Biocontrole</a></li>
          <li class="crumb-separator" aria-hidden>&rsaquo;</li>
          <li>Breadcrumbs</li>
      </ol>
      <div class="gap-4 flex flex-col w-full self-start relative top-32" style="min-width:344px; max-width:800px; z-index:-5; padding:80px 60px; background-color:#103332;" >
          <div class="text-2xl md:text-4xl leading-normal">
             Fiche de sécurité produits.
          </div>
      
      <span class=" bg-clip-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tristique diam eu nulla sagittis sodales. Quisque auctor, ante id placerat luctus, nisl odio fermentum mi, vitae vulputate nisl lectus vel tellus.</span>
      
      <div class="flex space-x-4">
          <Bouton content={'en savoir plus'}/>
          
      </div>
      </div>
      <div class="flex w-full justify-between" style="padding-left:60px;">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 self-end mb-4"id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="M22.586,5.929l-9.879,9.879a1.021,1.021,0,0,1-1.414,0L1.42,5.934.006,7.348l9.873,9.874a3.075,3.075,0,0,0,4.243,0L24,7.343Z"/></svg>
      <div class="ok self-end ">    
      <img src="abeille.jpg" class="object-cover object-bottom">
  </div>
</div>
  </div>
  
  </section>

  <div class="filters py-16">
    <button class={selectedFilters.includes('culture') ? 'selected-filter' : ''} on:click={() => toggleFilter('culture')}>Culture</button>
    <button class={selectedFilters.includes('jardin') ? 'selected-filter' : ''} on:click={() => toggleFilter('jardin')}>Jardin</button>
    <button class={selectedFilters.includes('Lobesia') ? 'selected-filter' : ''} on:click={() => toggleFilter('Lobesia')}>Lobesia</button>
  </div>
  
<section class="w-screen flex items-center justify-center">
  <div class="flex w-screen justify-left gap-8" style="max-width:1100px; padding-left:80px; padding-right:80px;">
    
<div class="flex flex-col gap-4">
    {#await articles}

{:then value}
<div class="flex justify-between w-full h-fit relative" style="flex-wrap:wrap; overflow:hidden;">
  {#each value.data as item}
  {#if selectedFilters.length === 0 || selectedFilters.some(filter => item.title.includes(filter))}
      <!-- <pre>{JSON.stringify(item, undefined, 2)}</pre> -->
  
  


  
  <article data-id={item.id} class="flex relative  flex-col justify-between overflow-hidden gap-4 m-1 {hovered ? 'hovered' : ''}" style='height:300px; width:300px;' on:mouseenter={handleMouseEnter} on:mouseleave={handleMouseLeave} > 
    <div class="absolute" style="z-index:-1;">
      <img src="abeille.jpg" class="{hoveredItems[item.id] ? 'scale-100 hover:scale-150' : 'scale-100'}" style="transition:0.5s ease-in-out; background-image: linear-gradient(rgba(0, 0, 255, 0.5), rgba(255, 255, 0, 0.5));">
      <div class="gradient-overlay absolute"></div>
    </div>
    <div class="flex flex-col p-4 justify-between h-full">
    <footer class="flex gap-4 self-end" >
      <a href="{item.lien}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><g id="_01_align_center" data-name="01 align center"><path d="M12.032,19a2.991,2.991,0,0,0,2.122-.878L18.073,14.2,16.659,12.79l-3.633,3.634L13,0,11,0l.026,16.408-3.62-3.62L5.992,14.2l3.919,3.919A2.992,2.992,0,0,0,12.032,19Z"/><path d="M22,16v5a1,1,0,0,1-1,1H3a1,1,0,0,1-1-1V16H0v5a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V16Z"/></g></svg></a>
      <a href="{item.lien}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><g id="_01_align_center" data-name="01 align center"><path d="M23.821,11.181v0C22.943,9.261,19.5,3,12,3S1.057,9.261.179,11.181a1.969,1.969,0,0,0,0,1.64C1.057,14.739,4.5,21,12,21s10.943-6.261,11.821-8.181A1.968,1.968,0,0,0,23.821,11.181ZM12,19c-6.307,0-9.25-5.366-10-6.989C2.75,10.366,5.693,5,12,5c6.292,0,9.236,5.343,10,7C21.236,13.657,18.292,19,12,19Z"/><path d="M12,7a5,5,0,1,0,5,5A5.006,5.006,0,0,0,12,7Zm0,8a3,3,0,1,1,3-3A3,3,0,0,1,12,15Z"/></g></svg></a>
    </footer>
      

      <div class="card-body">
        <div>
          <span class="chip variant-filled">Vigne</span>
          <span class="chip variant-filled">Verger</span>
        </div>
        <div class="text-lg mr-2 font-semibold my-2">{item.title}</div>
        
      </div>
    </div>
      
      
      
      
      </article>
      {/if}
  {/each}
  </div>


{:catch error}
  <p>Une erreur s'est produite dans le chargement des articles</p>
  <code>{error}</code>
{/await}


</div>
</div>


</section>


    <style>
        #bg{
            background-color:#15514F;
            color:white;
        }

        .filtre{
          border-right:solid 1px rgb(199, 199, 199);
          min-width:300px;
          display:none;
        }

        .image-container {
  z-index: -1;
  transition: transform 0.5s ease-in-out;
}

.hovered .image-container {
  transform: scale(1.1);
}
        
    #bg{
        background-color:#15514F;
        color:white;
    }

    #hero{
		color:white;
		z-index:70 !important;
        height:100vh;

	}

    .link{
        text-decoration:none !important;
        border-bottom:solid 1px rgb(217, 217, 217);
        padding:16px 8px;
    }

    .ok{
        width:100vw;
        max-width:500px;
        height:100vh;
        max-height:300px;
        overflow:hidden;
    }

    .size{
        max-width:1100px;
        width:100vw;
        padding-left:80px;
        padding-right:80px;
        
    }

    .filters>button{
      padding:8px 16px;
      border:solid 1px #15514F;
      color:#15514F;
      border-radius:100px;
      transition:0.2s ease-in-out;

    }

    .selected-filter {
    background-color: #15514F;
    color: white !important;
  }
  .gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to top, rgb(255, 255, 255),rgb(117, 117, 117));
  opacity: 0.5; /* ajustez l'opacité selon vos préférences */
}

    .filters{
      display:flex;
      gap:8px;
      max-width:1100px;
      padding-left:80px;
      padding-right:80px;
      margin:auto;
    }

    </style>