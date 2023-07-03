<script>
  import { getAssetURL } from '$lib/utils.js';
  import Button from '$lib/components/Button.svelte';
  import { directusClient } from '$lib/directus';

  let articles = [];

  directusClient
    .items('Articles')
    .readByQuery({
      limit: 3, // Limite le nombre d'articles à 3
      filter: {
        status: {
          _eq: 'Published'
        }
      }
    })
    .then(response => {
      articles = response.data;
    })
    .catch(error => {
      console.error('Une erreur s\'est produite dans le chargement des articles', error);
    });

 
</script>

<div class="flex flex-col md:flex-row x w-full" style="height: fit-content;">
    <!-- Actualité à la une -->
    

  <div class="other-articles-container">
    <!-- Autres actualités -->
    {#each articles as item, i}
        <article class="other-article gap-4">
          <!-- Contenu des autres articles -->
          <div>
            <header>
              <div class="imgcontainer">
                <img src="{item.Image}" alt={item.title} loading="lazy" class="object-cover" />
              </div>

              
            </header>
          </div>

          <footer class="flex flex-col gap-4">
            <div class="flex flex-col gap-4">
              <div class="text-lg font-semibold">{item.title}</div>
              <div>{item.texte}</div>
            </div>
            <a href="{item.lien}"><Button content={"Lire l'article"}/></a>
              
              
          </footer>
        </article>
      
    {/each}
  </div>
</div>

<style>
  /* Styles existants */

  

  .x {
    
    gap: 16px;
    height: fit-content;
  }

  img {
    width: 100%;
  }

  .imgcontainer {
    overflow: hidden;
    max-height: 220px;
  }

  .imgcontainerbis {
    overflow: hidden;
    max-height: 200px;
  }

  

  .articles-container {
    display: flex;
    flex-direction: row;
  }

  .other-articles-container {
    display: flex;
    justify-content:sspace-between;
    height: 100%;
    gap:32px;
  }

  article {
    display: flex;
    flex-direction: column;
    flex-basis: calc(100% / 3); /* Divise la ligne en 3 parts égales */
  box-sizing: border-box; /* Inclut les bordures et les marges dans la largeur */
    
  }
</style>

  