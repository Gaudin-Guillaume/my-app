<script>
    import Bouton from '$lib/components/Button.svelte';
	import Boutonbis from '$lib/components/Buttonbis.svelte';

</script>


<section class="h-96">
<img src="./abeille.jpg" alt="ok" class="h-28 w-screen">
<div id="bg" class="px-8 h-48 flex flex-col justify-center gap-4">

    <div  class="text-3xl md:text-4xl font-semibold">Notre Activitée Biocontrole</div>

    <div class="text-1xl">Découvrer l'intégralité de notre activitée biocontrole dans cette pages</div>
</div>
</section>

<section class="flex flex-col md:flex-row justify-center align-center items-center gap-8 h-screen">
    <div class="flex justify-center align-center items-center ">
        <img src="carotte.png" alt="carotte bio" class="card">
    </div>
        <div class="flex justify-center align-center items-center flex-col gap-4 ">
            <div class="text-3xl md:text-4xl font-semibold w-96">Titre 1.</div>
            <div class="w-96">
			Nous concevons des produits de biocontrole naturels certifiés pour une utilisation en agriculture biologique et respectueux de l'environnement. Nos solutions écologiques sont adaptées à tous les types de cultures. Protégez vos cultures tout en préservant la biodiversité avec nos produits de biocontrôle.
		    </div>
            <div class="flex gap-4 w-96">
            <Bouton content={'FDS/TDS'}/>
            <Boutonbis content={'acheter'}/>

            </div>
        
        </div>
</section>

<section class="flex flex-col md:flex-row justify-center align-center items-center gap-8 h-screen">
    
    <div class="flex justify-center align-center items-center flex-col gap-4 ">
        <div class="text-3xl md:text-4xl font-semibold w-96">Titre 2.</div>
        <div class="w-96">
			Nous concevons des produits de biocontrole naturels certifiés pour une utilisation en agriculture biologique et respectueux de l'environnement. Nos solutions écologiques sont adaptées à tous les types de cultures. Protégez vos cultures tout en préservant la biodiversité avec nos produits de biocontrôle.
		</div>
        <div class="flex gap-4 w-96">
            <Bouton content={'FDS/TDS'}/>
            <Boutonbis content={'acheter'}/>

        </div>
        
    </div>
    <div class="flex justify-center align-center items-center ">
        <img src="carotte.png" alt="carotte bio" class="card">
    </div>
</section>

<section class="flex flex-col md:flex-row justify-center align-center items-center gap-8 h-screen" style="background-color:#15514F;">
    
    <div class="flex justify-center align-center items-center flex-col gap-8 " >
        <div class="text-3xl md:text-4xl font-semibold w-96 text-center">Titre 2.</div>
        <div class="w-96 text-center">
			Nous concevons des produits de biocontrole naturels certifiés pour une utilisation en agriculture biologique et respectueux de l'environnement. Nos solutions écologiques sont adaptées à tous les types de cultures. Protégez vos cultures tout en préservant la biodiversité avec nos produits de biocontrôle.
		</div>
        <div class="flex gap-4 w-96 justify-center">
            <Bouton content={'FDS/TDS'}/>
            <Boutonbis content={'acheter'}/>
        </div>
        
    </div>
    
</section>


<style>
    #bg{
        background-color:#15514F;
        color:white;
    }
</style>