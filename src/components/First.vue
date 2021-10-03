<template>
        <div id="mainContainer1">
        <Nav/>
        <div class="container2">
        <h1 class="content">SHOW OFF<br>WHAT MAKES <span>YOU, </span> YOU</h1>
        </div>
        <div class="container3">
        <router-link to="/shop"><GhostBtn text="SHOP NOW" /></router-link>
        </div>
        </div>
</template>

<script>
import GhostBtn from './GhostBtn.vue'
import Nav from './Nav.vue'

export default {
  name: 'First',
components: { 
    GhostBtn,
    Nav,
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
        pointer-events: none;
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
    }
</style>
