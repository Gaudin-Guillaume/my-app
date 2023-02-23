<script>
	// Your selected Skeleton theme:
	import '@skeletonlabs/skeleton/themes/theme-crimson.css';
	// This contains the bulk of Skeletons required styles:
	import '@skeletonlabs/skeleton/styles/all.css';
	// Finally, your application's global stylesheet (sometimes labeled 'app.css')
	import '../app.postcss';

	import Header from '$lib/Header.svelte';

	import { AppShell } from '@skeletonlabs/skeleton';
</script>

<!-- <Header /> -->

<AppShell>
	<svelte:fragment slot="header">
		<Header />
	</svelte:fragment>

	<svelte:fragment slot="sidebarLeft">
		<div id="sidebar-left" class="hidden lg:block">Sidebar</div>
	</svelte:fragment>

	<div class="px-4">
		<slot />
	</div>

	<svelte:fragment slot="footer">Footer</svelte:fragment>
</AppShell>
