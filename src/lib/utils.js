import {API_URL} from '$lib/config.js'

export function getAssetURL(id) {
	if (!id) return null;
	return `${API_URL}assets/${id}`;
}

import { writable } from 'svelte/store';
export const markerContent = writable(`Découvrer toute l'activitées de M2i sur les différents continents`);
export const markerTitle = writable(`Découvrir notre activité sur la planète`);
export const markerdate = writable(``);
export const markercollabo = writable(``);