# v-pre

不对指令, 如`{{}}`进行编译

```html
<span v-pre>{{ this will not be compiled }}</span>   显示的是{{ this will not be compiled }}
```

## 样例
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>v-pre指令</title>
		<script src="https://cdn.bootcss.com/vue/2.6.10/vue.js"></script>
	</head>
	<body>
		<div id="root">
			<h2 v-pre>Vue其实很简单</h2>
			<h2 v-pre>当前的n值是:{{n}}</h2>
		</div>
	</body>

	<script type="text/javascript">
		new Vue({
			el:'#root',
			data:{
				n:1
			}
		})
	</script>
</html>
```