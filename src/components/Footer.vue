<template>
        <div class="footer" >
            <img class=firstIcon src=".././assets/facebook.png" >
            <img src=".././assets/reddit.png" >
            <img src=".././assets/twitter.png" >
        </div>
</template>

<script>

export default {
    name: 'Footer',
}
</script>

<style scoped>

    .footer {
        background-color: black;
        min-height: 6vh;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        text-align: center;
    }
    img {
        width: 4em;
        padding: 2%;
    }
</style>