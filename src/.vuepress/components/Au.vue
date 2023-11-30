<template>

<span>
    {{ w }}
    <span ref="btn" v-on:click="run()">🔊</span>
    <audio ref="au" :src="url" display="none"></audio>
</span>

</template>

<script setup>
    import {ref} from "vue"
    let { w } = defineProps(["w"])
    let word = w.split('/')[0]
    let url = "http://dict.youdao.com/dictvoice?audio=" + word + "&type=2"

    const btn = ref()
    const au = ref()

    function run() {
        au.value.play()
    }

</script>


<style>

</style>