<template>
        <button>{{ text }}</button>
</template>

<script>

export default {
    name: 'YellowBtn',
props: {
    text: String,
}
}
</script>

<style scoped>
    button {
        padding: 1em;
        font-size: 1.5em;
        background-color: rgb(219, 219, 61);
        border: thin solid rgba(0, 0, 0, 0);
        border-radius: .3em;
        font-weight: bold;
        outline: none;
    }
    button:hover{
        cursor: pointer;
        transform: scale(1.03);
    }
</style>
