# 祖孙组件通信provide&inject
实现祖孙组件间通信, 父组件有一个 `provide` 选项来提供数据，后代组件有一个 `inject` 选项来开始使用这些数据

```js
// 祖组件中：
setup(){
......
let car = reactive({name:'奔驰',price:'40万'})
provide('car',car)
......
}
```

```js
//后代组件中：
setup(props,context){
......
    const car = inject('car')
    return {car}
......
}
```