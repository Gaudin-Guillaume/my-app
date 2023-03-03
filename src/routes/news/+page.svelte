<script>
import { Directus } from '@directus/sdk';

const directus = new Directus('https://iomc1bh1.directus.app/')

const articles = directus.items('articles').readByQuery({
  filter: {
		status: {
			_eq: 'published',
		},
	},
});

</script>

<h1>Articles</h1>


{#await articles}
  <p>Chargement des articles...</p>

{:then value}
  {#each value.data as item}
      <!-- <pre>{JSON.stringify(item, undefined, 2)}</pre> -->
      <article>
        <h2>{item.title}</h2>
      </article>
  {/each}

{:catch error}
  <p>Une erreur s'est produite dans le chargement des articles</p>
  <code>{error}</code>
{/await}


