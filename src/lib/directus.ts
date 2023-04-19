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