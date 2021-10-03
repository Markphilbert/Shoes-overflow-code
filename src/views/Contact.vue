<template>
        <div id="mainContainer1">
        <Nav/>
        <div class="container2">
            <h1>NEEDS A FORM</h1>
        </div>
        </div>
        <Footer/>
</template>

<script>
import Nav from '../components/Nav.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Contact',
components: {
    Nav,
    Footer,
},
}
</script>

<style scoped>
    #mainContainer1 {
        background-image: url('.././assets/contact.jpg');
        background-repeat: no-repeat;
        background-position-y: -100em;
        background-size: cover;
        min-height: 130vh;
        max-width: 100%;
        color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .container2 {
        justify-content: center;
        align-items: center;
        flex-grow: 1;
        display: flex;
        font-size: 20em;
    }
    @media only screen and (max-width: 1700px) {
        #mainContainer1 {
            background-position: center;
    }
    }
</style>
