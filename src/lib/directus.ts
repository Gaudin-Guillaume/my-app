import { Directus } from '@directus/sdk';

const directus = new Directus(import.meta.env.PUBLIC_DIRECTUS_URL || 'http://109.106.244.56:8055');

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
        } else {
            // Fallback to public access if no credentials are provided
            return directus;
        }
    } catch (error) {
        console.error('Directus authentication error:', error);
        // Return directus instance even if authentication fails
        // This will allow public access to public collections
        return directus;
    }

    return directus;
}

const directusClient = await getDirectusClient();

export { directusClient };