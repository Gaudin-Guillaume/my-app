<script>
    import Button from "$lib/components/Button.svelte"
    let isMenuOpen = false;

    function toggleMenu(){
        isMenuOpen = !isMenuOpen;
    }

let current=0;
</script>
<div class="flex items-center justify-center h-24 fixed top-0 w-screen z-50" style="background-color:white;">
<div class="navbar px-4 z-50 bg-transparent">
    
    <a href="/"><svg height="32" viewBox="0 0 399 129" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <rect width="399" height="129" fill="url(#pattern0)"/>
        <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use xlink:href="#image0_925_154" transform="scale(0.00250627 0.00775194)"/>
        </pattern>
        <image id="image0_925_154" width="399" height="129" xlink:href="data:image/png;base64,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"/>
        </defs>
        </svg>
    </a>  
    <nav class:open={isMenuOpen}>
        <ul>
            
		    <li on:click={()=>(isMenuOpen = false)}><a class:current={current===0} on:click={()=> (current = 0)} href="./">Home</a></li>
		    <li on:click={()=>(isMenuOpen = false)}><a class:current={current===1} on:click={()=> (current = 1)} href="about">Biocontrol</a></li>
		    <li on:click={()=>(isMenuOpen = false)}><a class:current={current===2} on:click={()=> (current = 2)} href="news">News</a></li>
		    <li on:click={()=>(isMenuOpen = false)}><a class:current={current===3} on:click={()=> (current = 3)} href="FDS">FDS-TDS</a></li>
		    <li on:click={()=>(isMenuOpen = false)}><a class:current={current===4} on:click={()=> (current = 4)} href="rh">Recrutement</a></li>
		    <li on:click={()=>(isMenuOpen = false)}><a class:current={current===5} on:click={()=> (current = 5)} href="test">test</a></li>
		    <li on:click={()=>(isMenuOpen = false)}><a on:click={()=> (current = 6)} href="./"><Button content={"nous contacter"}/></a></li>
        </ul>
        
    </nav>
  
    <buton class="burger rounded-lg flex justify-center items-center" on:click={toggleMenu}>
            <div class="bar-1"></div>
            <div class="bar-2"></div>
            <div class="bar-3"></div>
    </buton>
</div>
</div>

<style>

    .navbar{
        display:flex;
        justify-content:space-between;
        align-items:center;
        padding-left:16px;
        padding-right:16px;
        max-width:1440px;
        width:100vw;
        background-color:transparent;
        padding-top:24px;
        padding-bottom:24px;
        border-bottom:solid 0px grey;

    }
    .logo{
        margin-left:6vw;
    }

    nav{
        display:none;
    }
    .current{
        position:relative;
    }

    a.current::after{
        content:"";
        position:absolute;
        bottom:0;
        left:0;
        width:100%;
        height:2px;
    }

    nav.open{
        display:block;
        position:absolute;
        top:100%;
        left:0;
        width:100%;

    }

    ul{
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        align-items: center;
        font-family:"Poppins";
        font-size:16px;
        font-weight:500;
        gap:5vh;
        margin-top:2vh;
        margin-bottom:2vh;
     }

     a{
        text-decoration:none !important;
        color:black !important;
     }

    .burger{
        height:28px;
        aspect-ratio:1;
        border: 2px solid rgb(0, 0, 0);
        
    }

    .burger > div {
        height:2px;
        width:14px;
        position:absolute;
    }

    .bar-1{
        transform: translateY(-5px);
    }

    .bar-3{
        transform: translateY(5px);
    }

    @media only screen and (min-width:768px){
        .logo{
            margin-left:3vw;
        }

        .burger{
            display:none;
        }
        nav{
            display:block;
            position:relative;
        }
        ul{
            margin:0;
            flex-direction:row;
            gap:2vw;

        }
        .navbar{
            background-color:white;
            border-bottom:solid 0px grey;
            padding-left:72px;
        padding-right:72px;
        }
    }

    
</style>