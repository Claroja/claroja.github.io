# 响应式ref

应用:
- 不使用`ref()`来处理响应式对象, 而是使用底层的`reactive()`
- 建议使用`ref()`仅用来处理基础数据, 或者将基础数据放在对象里, 用`reactive()`来处理
作用: 定义一个响应式的数据
语法: `const xxx = ref(initValue)`
- 创建一个包含响应式数据的引用对象(reference对象，简称ref对象)。
- JS中操作数据: `xxx.value`
- 模板中读取数据: 不需要.value，直接：`<div>{{xxx}}</div>`
备注：
- 接收的数据可以是：基本类型、也可以是对象类型。
- 基本类型的数据: 响应式依然是靠`Object.defineProperty()`的`get`与`set`完成的。
- 对象类型的数据: 内部 “ 求助 ”了Vue3.0中的一个新函数`reactive`函数, 底层是ES6的proxy
拓展:
- shallowRef：只处理基本数据类型的响应式, 不进行对象的响应式处理。如果有一个对象数据，后续功能不会修改该对象中的属性，而是生新的对象来替换 ===> shallowRef。






实践:

- 案例1:

    ```html
    <script setup>
    import { ref } from 'vue'

    const count = ref(0)

    function increment() {
    count.value++
    }
    </script>

    <template>
    <button @click="increment">
        {{ count }}
    </button>
    </template>
    ```





# 参考:
[响应式基础](https://cn.vuejs.org/guide/essentials/reactivity-fundamentals.html)