<script>
    import {getAssetURL} from '$lib/utils.js'
    import Button from '$lib/components/Button.svelte';
    import { directusClient } from '$lib/directus';
    
    const articles = directusClient.items('').readByQuery({
            limit: -1,
            filter: {
                status: {
                    _eq: 'published'
                }
            }
        });
    </script>


<section class="h-96">
    <img src="./abeille.jpg" alt="ok" class="h-28 w-screen">
    <div id="bg" class="px-8 h-48 flex flex-col justify-center gap-4">
    
        <div  class="text-3xl md:text-4xl font-semibold">Nos Fiches de Sécuritées.</div>
    
        <div class="text-1xl">L'intégralité des fiches et renseignements sur les ravageurs que nosu traitons et sur lesquels nous avons des produits breveté</div>
    </div>
    </section>

    <style>
        #bg{
            background-color:#15514F;
            color:white;
        }
    </style>