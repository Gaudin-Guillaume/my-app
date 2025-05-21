import { Directus } from '@directus/sdk';

// Use VITE_ prefix for all environment variables to ensure they're exposed to the client
const directus = new Directus(import.meta.env.VITE_DIRECTUS_URL || 'http://109.106.244.56:8055');

const MAIL = import.meta.env.VITE_DIRECTUS_EMAIL;
const PASS = import.meta.env.VITE_DIRECTUS_PASSWORD;
const TOKEN = import.meta.env.VITE_DIRECTUS_TOKEN;

async function getDirectusClient() {
    // Don't check for existing token as it might be expired or invalid
    try {
        if (TOKEN) {
            await directus.auth.static(TOKEN);
        } else if (MAIL && PASS) {
            await directus.auth.login({
                email: MAIL,
                password: PASS
            });
        } else {
            console.log('No authentication credentials provided, falling back to public access');
            return directus;
        }
    } catch (error) {
        console.error('Directus authentication error:', error);
        // Return directus instance for public access
        return directus;
    }

    return directus;
}

const directusClient = await getDirectusClient();

export { directusClient };