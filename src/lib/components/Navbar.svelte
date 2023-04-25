<script>
    import Button from "$lib/components/Button.svelte"
    import { LightSwitch } from '@skeletonlabs/skeleton';
    let isMenuOpen = false;

    function toggleMenu(){
        isMenuOpen = !isMenuOpen;
    }

let current=0;
</script>

<div class="navbar z-50 bg-transparent">
    
    <a href="/"><img src="/logo-white.png" alt="M2i, Lead the change" style="height:64px;" /></a>
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
    <LightSwitch />
    <buton class="burger rounded-lg mr-4 flex justify-center items-center" on:click={toggleMenu}>
            <div class="bar-1"></div>
            <div class="bar-2"></div>
            <div class="bar-3"></div>
    </buton>
</div>

<style>

    .navbar{
        display:flex;
        justify-content:space-between;
        align-items:center;
        position:relative;
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
        background-color:white;
    }

    nav.open{
        display:block;
        position:absolute;
        top:100%;
        left:0;
        width:100%;
        background-color:#ebebeb;

    }

    ul{
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        align-items: center;
        gap:5vh;
        margin-top:2vh;
        margin-bottom:2vh;
     }

    .burger{
        height:28px;
        aspect-ratio:1;
        border: 2px solid white;
        
    }

    .burger > div {
        height:2px;
        width:14px;
        background-color:white;
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
    }

    
</style>