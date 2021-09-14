<template>
        <div id="mainContainer2">
            <div class="imgContainer">
            <img class="img1" src=".././assets/zachary-keimig-SpbemGtIg2M-unsplash.jpg" >
            <img class="img2" src=".././assets/maxim-hopman-8cT5ja0P_N4-unsplash.jpg" >
            <img class="img3" src=".././assets/smith-major-6LqvNoUjySI-unsplash.jpg" >
            </div>
            <div class="contentContainer">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nihil dicta, veniam obcaecati odio excepturi laudantium quasi earum quisquam ullam architecto voluptatibus sapiente laborum ratione labore enim distinctio dignissimos. Voluptate numquam harum, quidem illo voluptatibus maxime fuga temporibus vero iusto a adipisci sequi excepturi optio ipsam soluta necessitatibus aliquid consectetur perferendis mollitia ducimus. Nemo eum dicta eaque. Sint quibusdam, adipisci voluptas amet atque minima temporibus magni ab quidem, sit cupiditate repellendus non voluptate nemo at culpa officiis assumenda corrupti doloremque similique veritatis sapiente animi? Cumque in soluta accusamus necessitatibus quam sit autem nobis eaque voluptatibus, similique eos, voluptatem facere ab.</p>
            <YellowBtn text="LEARN MORE" />
            </div>
        </div>
</template>

<script>
import YellowBtn from './YellowBtn.vue';

export default {
    name: 'Second',
    components: { 
        YellowBtn,
},
}
</script>

<style scoped>
    #mainContainer2 {
        min-height: 100vh;
        max-width: 100%;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }
    .imgContainer {
        min-height: 100vh;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .img1, .img2, .img3 {
        min-width: 33.333%;
        height: 100vh;
        object-fit: cover;
    }
    .img1{
        object-position: right;
    }
    .img2{
        object-position: center;
    }
    .img3 {
        object-position:left;
    }
    .contentContainer {
        position: absolute;
        z-index: 1;
        display: flex;
        left: 7em; 
    }
    button {
        justify-self: flex-end;
        align-self: flex-end;
        margin: 0 0 -1em -9em;
    }
    p {
        font-size: 1.5em;
        color: white;
        max-width: 40ch;
        margin-bottom: 3em;
        line-height: 1.3em;
    }
    @media only screen and (max-width: 1600px) {
        .img1, .img2 {
            display: none;
        }
        .img3 {
            object-position: center;
            min-width: 100%;
        }
    }
    @media only screen and (max-width: 1200px) {
        .contentContainer {
            left: 5em;
        }
    }
</style>