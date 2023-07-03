<script>
	export let content ='';
</script>

<button class="flex gap-4"><a href="./" class="-translate-x-6 hover:translate-x-0"><svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
	<path d="m23.542,10.892l-4.717-4.717-.707.707,4.618,4.618H0v1h22.734l-4.617,4.617.707.707,4.718-4.718c.61-.61.61-1.604,0-2.214Z" style="fill: white;"/>
  </svg><div style="color:white;">{content}</div></a>
</button>

<style>
	button {
		
		display:flex;
		align-items:center;
		overflow:hidden;
        
		
		font-size:1em;
		padding-left:16px;
		padding-right:16px;
		padding-top:8px;
		padding-bottom:8px;
		width:fit-content;
		height:fit-content;
		font-weight:100;
		font-family: 'poppins';
		transition:0.2s ease-in-out;
	}

	a{
		display:flex;
		text-decoration:none !important;
		gap:16px;
        color:white;
		transition:0.2s ease-in-out;

	}
</style>
