<script>
  import { getAssetURL } from '$lib/utils.js';
  import Button from '$lib/components/Button.svelte';
  import { directusClient } from '$lib/directus';

  let articles = [];
  let error = null;

  async function loadArticles() {
    try {
      const response = await directusClient.items('Articles').readByQuery({
        limit: 3,
        filter: {
          status: {
            _eq: 'Published'
          }
        }
      });
      articles = response.data;
      error = null;
    } catch (err) {
      console.error('Une erreur s\'est produite dans le chargement des articles', err);
      error = 'Impossible de charger les articles. Veuillez réessayer plus tard.';
      articles = [];
    }
  }

  loadArticles();
</script>

<div class="flex flex-col md:flex-row x w-full" style="height: fit-content;">
    {#if error}
      <div class="error-message">
        {error}
      </div>
    {/if}

    <div class="other-articles-container">
      {#each articles as item, i}
        <article class="other-article gap-4">
          <div>
            <header>
              <div class="imgcontainer">
                <img src={getAssetURL(item.Image)} alt={item.title} loading="lazy" class="object-cover" />
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

  .other-articles-container {
    display: flex;
    justify-content: space-between;
    height: 100%;
    gap: 32px;
  }

  article {
    display: flex;
    flex-direction: column;
    flex-basis: calc(100% / 3);
    box-sizing: border-box;
  }

  .error-message {
    color: red;
    padding: 1rem;
    text-align: center;
    width: 100%;
  }
</style>