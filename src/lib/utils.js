import {API_URL} from '$lib/config.js'

export function getAssetURL(id) {
	if (!id) return null;
	return `${API_URL}assets/${id}`;
}

import { writable } from 'svelte/store';
export const markerContent = writable(`Découvrer toute l'activitées de M2i sur les différents continents du monde et les actions qui ont été mené afin de développer notre activité. Test, homologation, et partenariat avec les acteurs locaux.`);
export const markerTitle = writable(`Notre activité mondial.`);
export const markerdate = writable(``);
export const markercollabo = writable(``);