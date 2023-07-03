<script>
	import "carbon-components-svelte/css/g10.css";

	
// Your custom Skeleton theme:

// This contains the bulk of Skeletons required styles:
import '@skeletonlabs/skeleton/styles/all.css';

// Finally, your application's global stylesheet (sometimes labeled 'app.css')
import '../app.postcss';
						

	import Header from '$lib/components/Navbar.svelte';
	import Footer from '$lib/layout/Footer.svelte'


	

	
</script>

<!-- <Header /> -->
<Header/>

<slot />

<Footer/>