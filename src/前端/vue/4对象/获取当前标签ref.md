# 获取当前标签ref
ref属性是vue用来获得相应元素的设置的,替代`getElementById`方法. [官网](https://cn.vuejs.org/api/built-in-special-attributes.html#ref)

- 案例1:

    ```html
    <script setup>
        import { ref } from 'vue'

        const p = ref()
        p.value //🔴注意p是ref对象, p.value才是DOM

    </script>

    <template>
        <p ref="p">hello</p>
    </template>

    ```


- 案例2: 

    首先在`setup()`中定义一个`ref`类型的变量`root`, 然后`return`出去, 会自动匹配`<template>`中的`ref`属性的值.
    注意`root.value`是`element object`, 如果想获得其中的值，需要`root.value.text`
    ```html
    <script setup>
        import {onMounted, ref} from "vue"
        const el = ref()
        onMounted(() => {
            console.log(el.value)
        })
    </script>
    <template>
        <!-- 注意这里的ref是不需要v-bind的 -->
        <button ref="el">{{ el }}</button>
    </template>
    ```

- 案例2: 另一种写法
    ```html
    <script setup>
        import {onMounted} from "vue"

        const state = {
            el: null,
        }

        onMounted(() => {
            console.log(state.el)
        })
    </script>
    <template>
        <!-- 注意这里的ref是不需要v-bind的 -->
        <button
            :ref="
                (el) => {
                    state.el = el
                }
            "
        ></button>
    </template>

    ```

参考:
https://v3.vuejs.org/guide/composition-api-template-refs.html#usage-with-jsx
