import {API_URL} from '$lib/config.js'

export function getAssetURL(id) {
	if (!id) return null;
	return `${API_URL}assets/${id}`;
}