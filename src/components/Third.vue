<template>
        <div id="mainContainer3" >
            <div id=firstCard class=card>
            <img src=".././assets/1.png" >
            <div class=content >
            <h3>What's New?</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, cupiditate!</p>
            <YellowBtn text="LEARN MORE" />
            </div>
        </div>
        <div id=secondCard class=card>
            <img src=".././assets/2.png" >
            <div class=content >
            <h3>Classics</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, cupiditate!</p>
            <YellowBtn text="LEARN MORE" />
            </div>
        </div>
        <div id=thirdCard class=card>
            <img src=".././assets/3.png" >
            <div class=content >
            <h3>Outerwear</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, cupiditate!</p>
            <YellowBtn text="LEARN MORE" />
            </div>
        </div>
        <div id=forthCard class=card>
            <img src=".././assets/4.png" >
            <div class=content >
            <h3>Athletics</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, cupiditate!</p>
            <YellowBtn text="LEARN MORE" />
            </div>
        </div>
        </div>
</template>

<script>
import YellowBtn from './YellowBtn.vue';

export default {
    name: 'Third',
    components: { 
        YellowBtn,
},
}
</script>

<style scoped>

    #mainContainer3 {
        background-image: url('.././assets/hermes-rivera-OX_en7CXMj4-unsplash.jpg');
        background-repeat: no-repeat;
        background-position-y: center;
        background-size: cover;
        min-height: 100vh;
        max-width: 100%;
        color: #fff;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        text-align: center;
        margin: auto;
        flex-wrap: wrap;
    }
    .card {
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        min-height: 50em;
        max-width: 30em;
        background-color: #ffffff;
        border: 2px solid #00000000;
        border-radius: 4px;
    }
    #forthCard, #secondCard {
        margin-top: 12em;
    }
    #firstCard, #thirdCard {
        margin-top: -12em;
    }
    .card img {
        max-width: 10em;
        padding: 1em;
        border: thin solid #ffffff00;
        border-radius: 50%;
        background-color: rgb(219, 219, 61);
        margin-top: 25%;
    }
    .card img:hover, h3:hover {
        transform: scale(1.03);
        cursor: pointer;
    }
    .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
        background-color: #ffffff99;
    }
    .content {
        padding: .2em 1.6em;
        color: black;
        display: block;
    }
    p {
        font-size: 1.5em;
        margin-top: 25%;
        line-height: 1.3em;
        color: #00000099;
        pointer-events: none;
    }
    h3 {
        font-size: 1.6em;
        font-weight: 500;
        margin-top: 25%;
    }
    button {
        position: relative;
        margin-top: 25%;
        margin-bottom: 25%;
    }
    @media only screen and (max-width: 1250px) {
        #mainContainer3 {
            gap: 20em;
        }
    }
    @media only screen and (max-width: 900px) {
        #mainContainer3{
            gap: 0em;
        }
    }
    @media only screen and (max-width: 650px) {
        #mainContainer3{
            display: none;
        }
    }
</style>