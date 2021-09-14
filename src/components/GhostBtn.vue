<template>
        <button>{{ text }}</button>
</template>

<script>

export default {
    name: 'GhostBtn',
props: {
    text: String,
}
}
</script>

<style scoped>
    button {
        padding: 1em;
        font-size: 1.5em;
        background-color: rgba(255, 255, 255, 0);
        border: .4em solid white;
        border-radius: .3em;
        font-weight: bold;
        color: white;
    }
    button:hover{
        transform: scale(1.03);
    }
</style>
