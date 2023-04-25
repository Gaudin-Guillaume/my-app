<script>
	import { Parallax, ParallaxLayer } from 'svelte-parallax'
	
	let parallax;
	let fancy = 'RECHERCHE & EXPERIMENTATION'.split('');
	
</script>


<Parallax sections={3} bind:this={parallax}>
	{#each fancy as char, index (index)}
	  <ParallaxLayer
			rate={(index + 1) / (fancy.length - 5)}
      offset={1}
		  style="
			  margin-left: {(index*3.7)}%; 
				display: flex; 
				justify-content: flex-start; 
				align-items: center;
                text-align:center;
		  "
		>
			<p class="fancy">
				{char}
			</p>
	  </ParallaxLayer>
	{/each}
	<ParallaxLayer offset={1} rate={-2.5} style="display: flex; justify-content: flex-end;">
		<div style="background-color: #123ADD; opacity: 0.5; width: 50%; height: 100%;"/>
	</ParallaxLayer>
	
	<ParallaxLayer offset={1} rate={2.5} style="display: flex; justify-content: flex-start;">
		<div style="background-color: #000000; opacity: 0.5; width: 50%; height: 100%;"/>
	</ParallaxLayer>
	
  <ParallaxLayer 
	  rate=1 
		style="
		  background-color: #F2F2F2; 
			display: flex; 
			justify-content: center; 
			align-items: center; 
			flex-direction: column;
		"
	>
    <h1>Et si nous travaillons ensemble ?</h1>
  </ParallaxLayer>
	
	<ParallaxLayer 
	  offset=2 
		rate=2 
		style="
		  background-color: white; 
			display: flex; 
			justify-content: center; 
			align-items: center;
		"
	>
	<div class="flex flex-col gap-32">
	<div class="p-4 md:px-32 flex flex-col gap-4">
		<div>Mes derniers projets</div>
		<ul class="flex text-2xl md:text-3xl items-center gap-8">
			
			<li class="">M2I LIFE SCIENCE - UX-UI DEVELOPEMENT DESIGN</li>
		</ul>
		<ul class="flex text-2xl md:text-3xl items-center gap-8">
			
			<li class="">BIODIVETO - UX-UI DEVELOPEMENT</li>
		</ul>
	</div>
	<div class="flex flex-col md:flex-row gap-8 justify-between w-screen px-4 md:px-32">
		<ul class="flex text-2xl md:text-3xl flex-col gap-4 ">
			<li>+33 6.51.75.13.93</li>
			<li>gaudin.guillaume@yahoo.com</li>
			<hr>
			<li>GAUDIN Guillaume<br></li>
			<li>ECV DIGITAL PARIS</li>
		</ul>
		<ul class="flex text-2xl md:text-3xl flex-col gap-4 ">
			<li>Linkedin</li>
			<li>Instagram</li>
		</ul>
	</div>
</div>
  </ParallaxLayer>
</Parallax>

<style>
	:global(body) {
		padding: 0;
    background-color: #ffffff;
    color: #313131;

  }

  div{
	font-family: "helvetica";
	font-size:2rem;
	color:#123ADD;
  }
	
  h1 {
    font-size: 2rem;
	font-family: "helvetica";
  }
	
.fancy {
		font-size: 2rem !important;
        font-family: "helvetica";
	}

</style>