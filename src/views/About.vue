<template>
        <div id="mainContainerAbout">
        <Nav/>
        <div class="container1">
          <div class="container2">
            <h1>IT'S REALLY<br>SIMPLE</h1>
            <div class="container3">
            <p>We care about style. We want to give people the option to find what they want, when they want it. Have a look in mind? Look no further!</p>
            <br>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia eius, ex dolorem saepe quaerat vitae, inventore delectus voluptate, architecto consequatur hic officiis nesciunt explicabo voluptatem ratione necessitatibus rerum impedit quo!</p>
            </div>
          </div>
          <div class="container5">
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti at totam accusantium ad dolorem facilis alias? Hic ad pariatur ratione.</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ad beatae veritatis. Consequatur sed provident veniam fugit laboriosam rem eius, nostrum tempora incidunt perspiciatis reiciendis harum aliquid nemo necessitatibus iusto facere nulla, ratione delectus expedita.</p>
          </div>
          <div class="container4">
            <GhostBtn text="SHOP NOW" />
          </div>
        </div>
        </div>
        <Footer/>
</template>

<script>
import Nav from '../components/Nav.vue'
import GhostBtn from '../components/GhostBtn.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'About',
components: {
    Nav,
    GhostBtn,
    Footer,
},
}
</script>

<style scoped>
    #mainContainerAbout {
        background-image: url('.././assets/about.jpg');
        background-repeat: no-repeat;
        background-position-y: -95em;
        background-size: cover;
        min-height: 130vh;
        max-width: 100%;
        color: #fff;
        display: flex;
        flex-direction: column;
    }
    .container1 {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: column;
      flex-grow: 1;
    }
    .container2 {
        margin: 7em 0 0 0;
        display: flex;
        flex-direction: row;
        background-color: #00000040;
        transition: 0.3s;
        min-height: 30em;
        width: 100%;
        text-align: center;
        align-items: center;
        justify-content: center;
    }
    .container2 p {
      font-size: 1.5em;
      max-width: 46.5ch;
      text-shadow: .2em .2em #00000005;
      line-height: 1.3em;
      margin: 0 1.86em 0 0;
      pointer-events: none;
    }
    .container2 h1 {
      font-weight: bold;
      text-shadow: .2em .2em #00000005;
      font-size: 7em;
      max-width: 46.5ch;
      margin: 0 1em 0 .186em;
      pointer-events: none;
    }
    .container4 {
      justify-content: flex-end;
      margin-bottom: 5em;
    }
    .container5 {
        margin: 7em 0 0 0;
        display: flex;
        flex-direction: column;
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
        background-color: #00000040;
        transition: 0.3s;
        min-height: 30em;
        width: 100%;
        text-align: center;
        align-items: center;
        justify-content: center;
    }
    .container5 h3{
      font-size: 2.5em;
      font-weight: bold;
      margin: 0 .31em .5em .31em;
      max-width: 93ch;
      text-shadow: .2em .2em #00000005;
      max-width: 55ch;
      pointer-events: none;
    }
    .container5 p{
      font-size: 1.5em;
      max-width: 93ch;
      text-shadow: .2em .2em #00000005;
      line-height: 1.3em;
      margin: 0 1.86em 0 1.86em;
      pointer-events: none;
    }
    .container2:hover, .container5:hover {
      background-color: black;
    }
    @media only screen and (max-width: 1500px) {
        #mainContainerAbout {
        background-position-y: center;
    }
    }
    @media only screen and (max-width: 1000px) {
        .container2 h1{
          margin: 0 .186em 0 .186em;
        }
    }
</style>