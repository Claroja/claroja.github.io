

使用client系列的相关属性来获取元素可视区的相关信息。通过client系列的相关属性可以动态的得到该元素的边框大小、元素大小等。
client系列属性|作用
--|--
element.clientTop|返回元素上边框的大小
element.clientLeft|返回元素左边框的大小
element.clientWidth|返回自身包括padding、内容区的宽度，不含边框，返回数值不带单位
element.clientHeight|返回自身包括padding、内容区的高度，不含边框，返回数值不带单位

```html
<head>
    <style>
        div {
            width: 200px;
            height: 200px;
            background-color: pink;
            border: 10px solid red;
            padding: 10px;
        }
    </style>
</head>

<body>
    <div></div>
    <script>
        // client宽度和我们offsetWidth 最大的区别就是 不包含边框
        var div = document.querySelector('div');
        console.log(div.clientWidth);
    </script>
</body>
```

三大系列大小对比|作用
--|--
element.offsetWidth|返回自身包括padding、边框、内容区的宽度，返回数值不带单位
element.clientWidth|返回自身包括padding、内容区的宽度， 不含边框，返回数值不带单位
element.scrollWidth|返回自身实际的宽度，不含边框，返回数值不带单位


[1.png](1.png)

他们主要用法:
1.offset系列 经常用于获得元素位置offsetLeft offsetTop
2. client 经常用于获取元素大小clientWidth clientHeight
3. scroll经常用于获取滚动距离scrollTop scrolleft
4.注意页面滚动的距离通过window. pagexoffset获得