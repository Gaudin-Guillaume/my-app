<script>
	import { Directus } from "directus-sdk-javascript";

	const directus = new Directus('https://iomc1bh1.directus.app/', {
		project: 'M2i',
		storage: window.localStorage
	});
	// Your selected Skeleton theme:
	
	// This contains the bulk of Skeletons required styles:
	import '@skeletonlabs/skeleton/styles/all.css';
	// Finally, your application's global stylesheet (sometimes labeled 'app.css')
	import '../app.postcss';

	import Header from '$lib/layout/Header.svelte';

	import { AppShell } from '@skeletonlabs/skeleton';

	

	
</script>

<!-- <Header /> -->

<AppShell>
	<svelte:fragment slot="header">
		<Header />
	</svelte:fragment>

	<div class="px-4">
		<slot />
	</div>

	<svelte:fragment slot="footer">Footer</svelte:fragment>
</AppShell>
