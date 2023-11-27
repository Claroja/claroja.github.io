# provide&inject



## vue3-cli
- 作用：实现祖孙组件间通信
- 套路：父组件有一个 `provide` 选项来提供数据，后代组件有一个 `inject` 选项来开始使用这些数据
- 具体写法：
1. 祖组件中：
```js
setup(){
......
    let car = reactive({name:'奔驰',price:'40万'})
    provide('car',car)
    ......
}
```
2. 后代组件中：
    ```js
    setup(props,context){
    ......
        const car = inject('car')
        return {car}
    ......
    }
    ```