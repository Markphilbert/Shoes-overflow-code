<template>
<Nav/>
  <div class="about">
    <h1>This is the trending page</h1>
  </div>
  <Footer/>
</template>

<script>
import Nav from '../components/Nav.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'About',
components: {
    Nav,
    Footer,
},
}
</script>