<script>
    import {getAssetURL} from '$lib/utils.js'
    import Button from '$lib/components/Button.svelte';
    import { directusClient } from '$lib/directus';
    import { Avatar } from '@skeletonlabs/skeleton';
    
    const articles = directusClient.items('articles').readByQuery({
            limit: -1,
            filter: {
                status: {
                    _eq: 'published'
                }
            }
        });
    </script>


<section class="h-screen">
    <div class="overflow-hidden h-3/6 flex justify-center items-center">
        <img src="./rh.jpg" alt="ok" class="object-cover blur-lg">
    </div>
    <div id="bg" class="px-8 flex flex-col h-64 justify-center gap-4">
        <div class="flex items-center">
            <div  class=" min-w-max text-2xl md:text-4xl font-semibold">Nos Fiches de Sécuritées.</div>
            <hr class="border-success-900 ml-4 w-full ">
        </div>
        <div class="text-1xl">L'intégralité des fiches et renseignements sur les ravageurs que nosu traitons et sur lesquels nous avons des produits breveté</div>
    </div>
    </section>

    <section class="flex flex-col gap-8 h-fit my-32">
    <div class="flex flex-col md:flex-row justify-center gap-8">
        <div class="flex justify-center align-center items-center ">
            <img src="carotte.png" alt="carotte bio" class="card">
        </div>
            <div class="flex justify-center align-center items-center flex-col gap-4 ">
                <div class="text-3xl md:text-4xl font-semibold w-96">Titre 1.</div>
                <div class="w-96">
                Nous concevons des produits de biocontrole naturels certifiés pour une utilisation en agriculture biologique et respectueux de l'environnement. Nos solutions écologiques sont adaptées à tous les types de cultures. Protégez vos cultures tout en préservant la biodiversité avec nos produits de biocontrôle.
                </div>
            
            </div>
        </div>

        <div class="flex flex-col md:flex-row justify-center gap-8">
            
                <div class="flex justify-center align-center items-center flex-col gap-4 ">
                    <div class="text-3xl md:text-4xl font-semibold w-96">Titre 1.</div>
                    <div class="w-96">
                    Nous concevons des produits de biocontrole naturels certifiés pour une utilisation en agriculture biologique et respectueux de l'environnement. Nos solutions écologiques sont adaptées à tous les types de cultures. Protégez vos cultures tout en préservant la biodiversité avec nos produits de biocontrôle.
                    </div>
                
                </div>

                <div class="flex justify-center align-center items-center ">
                    <img src="carotte.png" alt="carotte bio" class="card">
                </div>
            </div>

            <div class="flex flex-col md:flex-row justify-center gap-8">
                <div class="flex justify-center align-center items-center ">
                    <img src="carotte.png" alt="carotte bio" class="card">
                </div>
                    <div class="flex justify-center align-center items-center flex-col gap-4 ">
                        <div class="text-3xl md:text-4xl font-semibold w-96">Titre 1.</div>
                        <div class="w-96">
                        Nous concevons des produits de biocontrole naturels certifiés pour une utilisation en agriculture biologique et respectueux de l'environnement. Nos solutions écologiques sont adaptées à tous les types de cultures. Protégez vos cultures tout en préservant la biodiversité avec nos produits de biocontrôle.
                        </div>
                    
                    </div>
                </div>
 </section>
<section class="flex w-screen h-screen justify-center gap-8">
    <div class="flex flex-col gap-4 w-96 card p-4">
        <div class="text-2xl font-semibold">filtrer votre recherche.</div>
        <select class="select w-full">
          <option value="1">Ravageur</option>
          <option value="2">Papillon</option>
          <option value="3">Cafard</option>
          <option value="4">Franck</option>
          <option value="5">Gabriela</option>
        </select>
        <div class="space-y-2">
          <label class="flex items-center space-x-2">
            <input class="checkbox" type="checkbox" checked />
            <p>Option 1</p>
          </label>
          <label class="flex items-center space-x-2">
            <input class="checkbox" type="checkbox" />
            <p>Option 2</p>
          </label>
          <label class="flex items-center space-x-2">
            <input class="checkbox" type="checkbox" />
            <p>Option 3</p>
          </label>
        </div>
    </div>
<div class="flex flex-col gap-4">
    {#await articles}

<article class="card block w-60 flex flex-col justify-between bg-success-200 overflow-hidden"> 
  <div class="space-y-2">
  <header class="card-header h-56 p-0 overflow-hidden m-0">
    <div class="placeholder animate-pulse relative bottom-40" style="height:1000px;"></div>
  </header>

  <div class="px-2 space-y-2">
    <div class="placeholder animate-pulse"></div>
    <div class="placeholder animate-pulse"></div>
    <div class="placeholder animate-pulse"></div>
  </div>

  <div class="px-2 grid grid-cols-3 gap-2">
    <div class="placeholder animate-pulse h-4"></div>
    <div class="placeholder animate-pulse h-4"></div>
    <div class="placeholder animate-pulse h-4"></div>
    <div class="placeholder animate-pulse h-4"></div>
  </div>
 </div>
  
  <footer class="flex justify-center items-center content-center" >
    <div class="placeholder animate-pulse"></div>
  </footer>
  </article>

{:then value}
  {#each value.data as item}
      <!-- <pre>{JSON.stringify(item, undefined, 2)}</pre> -->
  
      <article class="card card-hover block w-screen h-fit max-w-5xl flex items-center justify-between bg-success-200 overflow-hidden p-8 gap-4"> 
      <div class="flex items-center gap-8">
      <div class="overflow-hidden">
        <Avatar initials="JD" background="bg-primary-500" />
      </div>

      <div class="card-body ml-4">
        <div>
          <span class="chip variant-filled">Vigne</span>
          <span class="chip variant-filled">Verger</span>
        </div>
        <div class="text-lg mr-2 font-semibold my-2">{item.title}</div>
        <div class="text-sm font-normal max-w-lg ">{item.texte}</div>
        
      </div>
      
      </div>
      <span class="divider"></span>
      
      <footer class="card-footer border-success-900 flex justify-center items-center content-center p-4 border-double" >
        <a href="{item.lien}"><Button content={`voir l'article`}/></a>

      </footer>
      </article>
  {/each}


{:catch error}
  <p>Une erreur s'est produite dans le chargement des articles</p>
  <code>{error}</code>
{/await}

</div>


</section>


    <style>
        #bg{
            background-color:#15514F;
            color:white;
        }
    </style>