<template>

    <span>
        {{ word }}
        <span v-on:click="runE()">/{{ phonicE }}/🔊</span>
        <span v-on:click="runA()">/{{ phonicA }}/🔊</span>
        <audio ref="auE" :src="urlE" display="none"></audio>
        <audio ref="auA" :src="urlA" display="none"></audio>
    </span>
    
    </template>
    
    <script setup>
        import {ref} from "vue"
        let { w } = defineProps(["w"])
        let word = w.split('/')[0]
        let phonicE = w.split('/')[1]
        let phonicA = w.split('/')[3]
        // console.log(phonicA)
        
        let urlE = "http://dict.youdao.com/dictvoice?audio=" + word + "&type=1"
        let urlA = "http://dict.youdao.com/dictvoice?audio=" + word + "&type=2"
    
        const auE = ref()
        const auA = ref()
        function runE() {
            auE.value.play()
        }
        function runA() {
            auA.value.play()
        }
    </script>
    
    
    <style>
    
    </style>