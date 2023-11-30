# createApp

## vue3-cli
- `main.js`

    ```js
    //引入的不再是Vue构造函数了，引入的是一个名为createApp的工厂函数
    import { createApp } from 'vue'
    import App from './App.vue'
    //创建应用实例对象——app(类似于之前Vue2中的vm，但app比vm更“轻”)
    const app = createApp(App)
    //挂载
    app.mount('#app')
    ```

- `App.vue`

    ```vue
    <template>
        <p>{{ msg }}</p>
        <button @click="test">test</button>
    </template>

    <script>
        export default {
            name: 'App',
            //此处只是测试一下setup，暂时不考虑响应式的问题。
            setup(){
                let msg = 'hello world'
                function test(){
                    console.log("helo")
                    alert(`${msg}`)
                }
                return {
                    msg,
                    test,
                }
            }
        }
    </script>
    ```

## vue3-html

1. 导入vue包
`<script src="https://cdn.bootcdn.net/ajax/libs/vue/3.2.26/vue.global.min.js"></script>`
2. 配置vue的选项`options`, 在`setup`中定义变量和方法并返回
3. 创建vue对象并挂载`Vue.createApp(options).mount('#hello')`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Document</title>
    <script src="https://cdn.bootcdn.net/ajax/libs/vue/3.2.26/vue.global.prod.min.js"></script>
</head>

<body>
    <div id="hello">
        <p>{{ msg }}</p>
        <button @click="test">test</button>
    </div>

    <script>
        const demo = {
            setup(){
                let msg = 'hello world'
                function test(){
                    console.log("helo")
                    alert(`${msg}`)
                }
                return {
                    msg,
                    test,
                }
            }
        }
        Vue.createApp(demo).mount('#hello')
    </script>
</body>
</html>
```