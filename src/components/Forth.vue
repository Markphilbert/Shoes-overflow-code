<template>
        <div id="mainContainer4" >
            <h1>Lorem ipsum dolor.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nihil dicta, veniam obcaecati odio excepturi laudantium quasi earum quisquam ullam architecto voluptatibus sapiente laborum ratione labore enim distinctio dignissimos. Voluptate numquam harum, quidem illo voluptatibus maxime fuga temporibus vero iusto a adipisci sequi excepturi optio ipsam soluta necessitatibus aliquid consectetur perferendis mollitia ducimus. Nemo eum dicta eaque. Sint quibusdam, adipisci voluptas amet atque minima temporibus magni ab quidem, sit cupiditate repellendus non voluptate nemo at culpa officiis assumenda corrupti doloremque similique veritatis sapiente animi? Cumque in soluta accusamus necessitatibus quam sit autem nobis eaque voluptatibus, similique eos, voluptatem facere ab.</p>
        </div>
</template>

<script>

export default {
    name: 'Forth',
}
</script>

<style scoped>

    #mainContainer4 {
        background-image: url('.././assets/fachry-zella-devandra-bNSdIkCBJOs-unsplash.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: right;
        min-height: 100vh;
        max-width: 100%;
        color: #fff;
        flex-direction: column;
        display: flex;
        align-items: flex-end;
        justify-content: center;
    }
    h1 {
        font-size: 7em;
        max-width: 11ch;
        margin-right: .5em;
        line-height: 1em;
        text-transform: uppercase;
    }
    p {
        font-size: 1.5em;
        color: white;
        max-width: 46.5ch;
        margin: .5em 5em 0 0;
        line-height: 1.3em;
    }
    button {
        position: relative;
        margin-top: 25%;
    }
    @media only screen and (max-width: 1200px) {
        h1 {
            margin-right: .05em;
        }
        p {
            margin-right: 3em;
        }
    }
    @media only screen and (max-width: 840px) {
        #mainContainer4{
            background-position: center;
        }
    }
</style>