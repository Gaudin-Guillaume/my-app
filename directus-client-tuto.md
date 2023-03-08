# Directus client setup

In your main root folder, create a file name `.env` based on this example :

```bash
PUBLIC_DIRECTUS_URL=https://example.directus.app

VITE_DIRECTUS_EMAIL=admin@example.com
VITE_DIRECTUS_PASSWORD=d1r3ctu5
VITE_DIRECTUS_API_TOKEN=
```

> Make sure to exclude it from yout `.gitignore`, to prevent leaking your credentials.

---

In `./src/lib` folder, create a file name `directus.ts` :

```ts
import { Directus } from '@directus/sdk';
import { PUBLIC_DIRECTUS_URL } from '$env/static/public';

const directus = new Directus(PUBLIC_DIRECTUS_URL);

const MAIL = import.meta.env.VITE_DIRECTUS_EMAIL;
const PASS = import.meta.env.VITE_DIRECTUS_PASSWORD;
const TOKEN = import.meta.env.VITE_DIRECTUS_TOKEN;

async function getDirectusClient() {
	if (await directus.auth.token) return directus;

	try {
		if (MAIL && PASS) {
			await directus.auth.login({
				email: MAIL,
				password: PASS
			});
		} else if (TOKEN) {
			await directus.auth.static(TOKEN);
		}
	} catch (error) {
		if (error.parent.code === 'ECONNREFUSED') {
			console.error(
				'Unable to connect to the Directus instance. Make sure the .env file is present and the PUBLIC_DIRECTUS_URL variable is pointing the correct URL.'
			);
		}
	}

	return directus;
}

const directusClient = await getDirectusClient();

export { directusClient };
```

---

In any `.svelte` page or `.js` endpoint, you can import the initiated directus client, and query your collections and items as per
[SDK guidelines](https://docs.directus.io/reference/sdk.html) :

```html
<script>
	import { directusClient } from '$lib/directus';

	const articles = directusClient.items('articles').readByQuery({
		limit: -1,
		filter: {
			status: {
				_eq: 'published'
			}
		}
	});
</script>

{#await articles}
<!-- Manage your loading state here -->
{:then value}
<!-- Upon resolved requesr, {value.data} is accesible here -->
{:catch error}
<!-- If request has failed, {error} is accessible here -->
{/await}
```
