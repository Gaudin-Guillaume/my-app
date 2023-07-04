<script>
import {getAssetURL} from '$lib/utils.js'
import Button from '$lib/components/Button.svelte';
import { directusClient } from '$lib/directus';

const articles = directusClient.items('Articles').readByQuery({
		limit: -1,
		filter: {
			status: {
				_eq: 'published'
			}
		}
	});
</script>


<div class="flex flex-col justify-center items-center w-screen">
<div class="my-12 text-5xl font-semibold bg-primary-500 w-screen text-center">Articles.</div>
<div class="w-8/12">
<div class="autoGrid">
{#await articles}

<article class="card block w-60 flex flex-col justify-between bg-success-200 overflow-hidden"> 
  <div class="space-y-2">
  <header class="card-header h-56 p-0 overflow-hidden m-0">
    <div class="placeholder animate-pulse relative bottom-40" style="height:1000px;"></div>
  </header>

  <div class="px-2 space-y-2">
    <div class="placeholder animate-pulse"></div>
    <div class="placeholder animate-pulse"></div>
    <div class="placeholder animate-pulse"></div>
  </div>

  <div class="px-2 grid grid-cols-3 gap-2">
    <div class="placeholder animate-pulse h-4"></div>
    <div class="placeholder animate-pulse h-4"></div>
    <div class="placeholder animate-pulse h-4"></div>
    <div class="placeholder animate-pulse h-4"></div>
  </div>
 </div>
  
  <footer class="flex justify-center items-center content-center" >
    <div class="placeholder animate-pulse"></div>
  </footer>
  </article>

{:then value}
  {#each value.data as item}
      <!-- <pre>{JSON.stringify(item, undefined, 2)}</pre> -->
  
      <article class="card card-hover block w-60 flex flex-col justify-between bg-success-200 overflow-hidden"> 
      <div>
      <header class="card-header h-56 p-0 overflow-hidden m-0">
        <img src={getAssetURL(item.Image)} alt={item.title} loading="lazy" class="h-56 object-cover"/>
      </header>

      <div class="card-body ml-4">
        <div class="text-lg mr-2 font-semibold my-2">{item.title}</div>
        <div class="text-sm font-normal">{item.texte}</div>
        
      </div>
      
      </div>
      <span class="divider"></span>
      
      <footer class="card-footer border-success-900 flex justify-center items-center content-center p-4 border-double" >
        <a href="{item.lien}"><Button content={`voir l'article`}/></a>

      </footer>
      </article>
  {/each}


{:catch error}
  <p>Une erreur s'est produite dans le chargement des articles</p>
  <code>{error}</code>
{/await}
</div>
</div>

</div>
<style>

  .card{
    height:550px;
  }
  
  
</style>
