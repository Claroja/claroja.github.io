# eventBus
使用不同组件的方法.


1. `main.js`中使用`config.globalProperties`注册`emitter`

  ```js
  import { createApp } from 'vue'
  import App from './App.vue'
  import mitt from 'mitt';
  const emitter = mitt();
  const app = createApp(App);
  app.config.globalProperties.emitter = emitter;
  app.mount('#app');
  ```

2. `a.vue`使用emitter来调用
  ```html
  <template>
    <header>
      <button @click="aFunc"/>click</button>
    </header>
  </template>
  <script >
  export default { 
    data() {
      return {
      };
    },
    methods: {
      aFunc() {
        this.emitter.emit("bFunc");
      }
    }
  };
  </script>
  ```

3. `b.vue`注册一个方法

  ```html
  <template>
  </template>
  <script>
  export default {
    data() {
      return {
      };
    },
    mounted() { 
      this.emitter.on("bFunc", () => {
        console.log("Func in b")
      });
    }
  };
  </script>
  ```
