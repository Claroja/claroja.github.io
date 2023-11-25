# 单个文章配置

1. 在markdown文件开头处引入css文件：
    `<link rel="stylesheet" type="text/css" href="你的css文件名.css">` 

2. 在markdown文件里面定义css样式。在文件开头输入 css相关 设置，语法和html中一样 用`<style></style>`标签包含起来

    ```css
    <style>
    .heading1 {
        color: red;
        font-weight:700;
        font-size: 35px;
    }
    .heading2 {
        color: blue;
        font-weight:700;
        font-size: 30px;
    }
    </style>
    ```
    ```md
    # Markdown heading styles {#identifier .heading1}
    ## Markdown heading styles {#identifier .heading2}
    ```


# 整体网站配置
1. 如果有主题, 如next, 就先修改主题样式, 主题的样式优先级高于hexo本身样式的优先级
2. 没有主题, 则直接修改hexo的样式

## 主题样式修改
1. 在主题中开启样式配置文件, 以next为例: 打开`_config.next.yml`文件, 配置

```yml
custom_file_path:
  style: source/_data/styles.styl
```

2. 修改`source/_data/styles.styl`文件
```css
.post-block:first-of-type {
  padding-top: 0px;
}

.posts-expand .post-header {
    // display: none;
    margin-bottom: 0px;
}

body {
    line-height: 1.8;
}

p {
    margin: 0px;
    text-indent: 2em;
}

.main {
    width: 90%;
}

.main-inner {
    padding-top: 0px;
}


.post-body {
    font-size: 1em;
}

caption, th, td {
    padding: 0px;
}

h1 {
    font-size: 1.5em;
}

h2 {
    font-size: 1.3em;
}

h3 {
    font-size: 1.1em;
}


h1, h2, h3, h4, h5, h6 {
    margin: 5px 0 5px;
    color: blue;
}

.post-block {
    .post-body {counter-reset: h1}
            h1 {counter-reset: h2}
            h2 {counter-reset: h3}
            h3 {counter-reset: h4}
            h4 {counter-reset: h5}
            h5 {counter-reset: h6}
}
.post-body {
    h1:before {counter-increment: h1; content: counter(h1) ". "}
    h2:before {counter-increment: h2; content: counter(h1) "." counter(h2) ". "}
    h3:before {counter-increment: h3; content: counter(h1) "." counter(h2) "." counter(h3) ". "}
    h4:before {counter-increment: h4; content: counter(h1) "." counter(h2) "." counter(h3) "." counter(h4) ". "}
    h5:before {counter-increment: h5; content: counter(h1) "." counter(h2) "." counter(h3) "." counter(h4) "." counter(h5) ". "}
    h6:before {counter-increment: h6; content: counter(h1) "." counter(h2) "." counter(h3) "." counter(h4) "." counter(h5) "." counter(h6) ". "}
}



audio::-webkit-media-controls-panel {
    background-color: #ffffff;
}
audio::-webkit-media-controls-current-time-display {
    display: none;
}
audio::-webkit-media-controls-time-remaining-display {
    display: none;
}
audio::-webkit-media-controls-timeline {
    display: none;
}
audio::-webkit-media-controls-mute-button {
    display: none;
}


::marker {
    color: blue;
    font-weight: bold;
}

code {
    border-radius: 3px;
    font-size: 1em;
    padding: 0px 1px;
    overflow-wrap: break-word;
    font-weight: bold;
    background: rgb(255 255 255 / 0%);
    color: #ff6700;
}

```


## hexo样式修改

1. 在浏览器中查看样式选择器, 在vscode中全工程搜索样式选择器, 定位文件为`/public/css/`
2. 在`/public/css/`直接修改看效果
3. 将`/public/css/`复制到`/source/css/`下


# 具体样式修改




## 列表样式

```css
::marker {
    color: blue;
    font-weight: bold;
}
```

## 标题样式

```css
h1, h2, h3, h4, h5, h6 {
    color: blue;
}
```


参考:
[::marker](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::marker)


