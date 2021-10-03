<template>
        <div class="mainContainer">
            <div class="container1">
                <nav>
                    <router-link style="text-decoration: none;" to="/login"><li>Log In</li></router-link>
                    <router-link style="text-decoration: none;" to="/register"><li>Sign Up</li></router-link>
                </nav>
                <router-link to="/"><img class="cart" src=".././assets/cart.png"></router-link>
            </div>
            <div class="container2">
            <router-link to="/"><img class="logo" src=".././assets/logo.png"></router-link>
            <nav>
                <router-link style="text-decoration: none;" to="/trending"><li>Trending</li></router-link>
                <router-link style="text-decoration: none;" to="/contact"><li>Contact</li></router-link>
                <router-link style="text-decoration: none;" to="/about"><li>About</li></router-link>
            </nav>
            </div>
        </div>
</template>

<script>
export default {
  name: 'Nav',
}
</script>

<style scoped>
    .mainContainer{
        background: linear-gradient(180deg, rgba(0,0,0,.5) 0%, rgba(255,255,255,0) 100%);
    }
    .container1{
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin-top: 5em;
    }
    .cart{
        margin-right: 6em;
    }
    .container2 {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: -3em;
    }
    .logo {
        max-width: 18em;
        margin-top: -4em;
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
    
    .container2 li, .container1 li {
        text-decoration: none;
        color: white;
        list-style-type: none;
    }
    .container1 li{
        margin: 0 4em 0 0;
    }
    .container2 li{
        margin: 0em 4em 0 0;
    }
    nav li:hover,
    nav li.router-link-active,
    nav li.router-link-exact-active,
    nav li:visited, .logo:hover, .cart:hover{
        cursor: pointer;
        transform: scale(1.03);
        text-decoration: none;
    }
    @media only screen and (max-width: 1200px) {
        li {
            margin-right: 2.5em;
        }
    }
</style>