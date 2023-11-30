# props

通过子组件的属性进行传值

## 父向子传值

- x是直接传值，所有的都认为是string
- y是bind绑定，此时传值是number
- z是bind绑定，此时传值是string

```html
# Parent.vue
<script setup>
	import Child from "./Child.vue"
</script>
<template>
    <Child x="10" :y="10" :z="'10'"></Child>
</template>
```


```html
# Child.vue
<script setup>
	let props = defineProps(["x", "y", "z"])

	console.log(typeof props.x) // string
	console.log(typeof props.y) // number
	console.log(typeof props.z) // string
</script>
```

## 子向父传值
子组件调用父组件的方法(父组件通过props将它的方法传入给子组件), 来让父组件的方法, 使用子组件的值.

```html
# App.vue
<template>
		<!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
		<Demo :getDemoValue="getDemoValue"/>
</template>

<script>
	import Demo from './components/Demo'
	export default {
		name: 'App',
		components:{Demo},
		setup(){
			function getDemoValue(name){
				console.log('App受到子组件的传值: ', name)
			}
			return {
				getDemoValue
			}
		}
	}
</script>
```



```html
# Demo.vue

<template>
	<button @click="test">Demo组件的test方法, 该方法调用了父组件</button>
</template>

<script>
	export default {
		name:'School',
		props:['getDemoValue'],
		setup(props, context){
			let demo="demo"
			function test(){ //f
				props.getDemoValue(demo)
			}
			//返回一个对象（常用）
			return {
				test
			}
		}
	}
</script>
```