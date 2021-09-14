<template>
    <header>
        <div id="mainContainer1">
        <div class="container1">
        <img class="logo" src=".././assets/logo.png">
        <nav>
            <a href="#">Trending</a>
            <a href="#">Contact</a>
            <a href="#">About</a>
        </nav>
        </div>
        <div class="container2">
        <h1 class="content">SHOW OFF<br>WHAT MAKES <span>YOU, </span> YOU</h1>
        </div>
        <div class="container3">
        <GhostBtn text="SHOP NOW" />
        </div>
        </div>
    </header>
</template>

<script>
import GhostBtn from './GhostBtn.vue'

export default {
  name: 'Header',
components: { 
    GhostBtn,
},
}
</script>

<style scoped>
    #mainContainer1 {
        background-image: url('.././assets/joseph-barrientos-4qSb_FWhHKs-unsplash.jpg');
        background-repeat: no-repeat;
        background-position-y: center;
        background-size: cover;
        min-height: 100vh;
        max-width: 100%;
        color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .container1 {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .logo {
        max-width: 18em;
        margin-top: -.2em;
        justify-self: flex-start;
        padding-left: 4em;
        flex-grow: 1;
    }
    nav {
        display: flex;
        justify-content: flex-end;
        font-size: 1.5em;
        flex-grow: 1;
    }
    
    a {
        margin: .1em 4em 0 0;
        text-decoration: none;
        color: white;
    }
    a:hover{
        transform: scale(1.03);
    }
    a:visited {
        color: white;
    }
    a:hover {
        color: white;
    }
    a:active {
        color: white;
    }
    .container2 {
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
    }
    span{
        font-weight: bold;
    }
    .content {
        margin: 0 .5em 0 0;
        font-size: 7em;
        text-shadow: .2em .2em #00000005;
        max-width: 11ch;
        line-height: 1em;
    }
    .container3 {
        display: flex;
        align-items: flex-end;
        justify-content: center;
        margin-bottom: 5em;
    }
    @media only screen and (max-width: 1200px) {
        #mainContainer1 {
            background-position: center;
        }
        .content {
            margin-right: 0;
        }
        a {
            margin-right: 2.5em;
        }
    }
</style>
