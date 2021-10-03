<template>
<First/>
<Second/>
<Third/>
<Forth/>
<Footer/>
</template>

<script>
import First from '../components/First'
import Second from '../components/Second'
import Third from '../components/Third'
import Forth from '../components/Forth'
import Footer from '../components/Footer'

export default {
  name: 'Home',
  components: {
    First,
    Second,
    Third,
    Forth,
    Footer
  }
}
</script>

