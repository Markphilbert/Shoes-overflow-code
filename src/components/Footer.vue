<template>
        <nav>
            <router-link style="text-decoration: none;" to="/"><li>Home</li></router-link>
            <router-link style="text-decoration: none;" to="/trending"><li>Trending</li></router-link>
            <router-link style="text-decoration: none;" to="/contact"><li>Contact</li></router-link>
            <router-link style="text-decoration: none;" to="/about"><li>About</li></router-link>
        </nav>
        <div class="footer" >
            <div class="icons">
            <router-link to="/facebook" target="_blank"><img src=".././assets/facebook.png" ></router-link>
            <router-link to="/instagram" target="_blank"><img src=".././assets/insta.png" ></router-link>
            <router-link to="/twitter" target="_blank"><img src=".././assets/twitter.png" ></router-link>
            </div>
            <div class="container1">
            <h3>FIND YOUR LOOK</h3>
            <router-link to="/about" target="_blank"><YellowBtn text="LEARN MORE" /></router-link>
            </div>
            <div class="container2">
                <div class="container3">
                    <router-link style="text-decoration: none;" to="/"><li>Contribute</li></router-link>
                    <router-link style="text-decoration: none;" to="/"><li>Privacy Policy</li></router-link>
                </div>
                <p>Copyright &#169; 2021 All Rights Reserved by ShoesOverflow&trade;</p>
            </div>
        </div>
</template>

<script>
import YellowBtn from './YellowBtn.vue'

export default {
  components: { YellowBtn },
    name: 'Footer',
}
</script>

<style scoped>
    nav {
        background-color: black;
        min-height: 5vh;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        list-style-type: none;
    }
    nav li {
        font-size: 1.5em;
        margin: 1.5em 2em 0 2em;
        color:white;
    }
    nav li:hover,
    nav li.router-link-active,
    nav li.router-link-exact-active,
    nav li:visited, .container3 li:hover, .container3 li.router-link-active, .container3 li.router-link-exact-active, .container3 li:visited {
        cursor: pointer;
        transform: scale(1.03);
        text-decoration: none;
    }
    .footer {
        background-color: black;
        min-height: 35vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
    }
    .icons {
        display: flex;
        flex-direction: row;
    }
    .icons a {
        width: 4em;
        padding: 0 1.2em 0 1.2em;
    }
    .icons a:hover {
        transform: scale(1.03);
        cursor: pointer;
    }
    .container1 h3 {
        color: white;
        font-weight: bold;
        font-size: 2.5em;
        padding: 1em;
    }
    .container3 {
        display: flex;
        flex-direction: row;
    }
    .container2 {
        color: white;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        font-size: .8em;
    }
    .container3 li {
        list-style-type: none;
        margin: 2em 1em 2em 1em;
        font-size: 1.5em;
        text-decoration: none;
        color: white;
    }
</style>