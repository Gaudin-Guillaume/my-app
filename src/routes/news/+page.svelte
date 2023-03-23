<script>
import { API_URL } from '$lib/config.js';
import {getAssetURL} from '$lib/utils.js'
import { Directus } from '@directus/sdk';
import Button from '$lib/components/Button.svelte';


const directus = new Directus(API_URL)

const articles = directus.items('articles').readByQuery({
  filter: {
		status: {
			_eq: 'published',
		},
	},
});

</script>

<div class="flex flex-col justify-center items-center w-screen">
<div class="my-12 text-5xl font-semibold">Articles.</div>

<div class="grid grid-cols-3 gap-4 w-fit">
{#await articles}
  <p>Chargement des articles...</p>

{:then value}
  {#each value.data as item}
      <!-- <pre>{JSON.stringify(item, undefined, 2)}</pre> -->
  
      <article class="card card-hover block w-60 flex flex-col justify-between bg-success-200 overflow-hidden"> 
      <div>
      <header class="card-header h-56 p-0 overflow-hidden m-0">
        <img src={getAssetURL(item.Image)} alt={item.title} loading="lazy" class="h-56"/>
      </header>

      <div class="card-body ml-4">
        <div class="text-lg mr-2 font-semibold my-2">{item.title}</div>
        <div class="text-sm font-normal">{item.texte}</div>
        
      </div>
      <span class="divider"></span>
      </div>
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
<style>

  .card{
    height:550px;
  }
  
  
</style>
