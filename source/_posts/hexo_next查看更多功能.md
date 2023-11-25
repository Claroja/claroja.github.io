
# 打开read_more_btn
用来控制当使用`<!--more-->`生成摘要时显示的**read more**按钮是否显示

```yml
read_more_btn: false
```

![1](1.png)


# 配置custom_file_path
用来配置自定义的js和样式等,详细参考[官网](https://theme-next.js.org/docs/advanced-settings/custom-files.html)
```json
custom_file_path:
  #head: source/_data/head.njk
  #header: source/_data/header.njk
  #sidebar: source/_data/sidebar.njk
  #postMeta: source/_data/post-meta.njk
  #postBodyEnd: source/_data/post-body-end.njk
  #footer: source/_data/footer.njk
  #bodyEnd: source/_data/body-end.njk
  #variable: source/_data/variables.styl
  #mixin: source/_data/mixins.styl
  #style: source/_data/styles.styl
```

1. 开启自定义配置文件, 在`next/_config.yml`中开启自定义配置

  ```yml
  custom_file_path:
    style: source/_data/styles.styl
  ```

2. 编辑自定义样式, 在`hexo/source/_data/styles.styl`中编辑

  ```css
  .posts-expand .post-meta {
      margin: 3px 0 3px 0;
  }
  .post-block {
      padding: 20px;
  }
  p {
      margin: 0 0 0 0;
  }
  .post-body {
      font-size: 1em;
  }
  body {
      line-height: 1.5;
  }
  ```

# 最终效果
这种样式配合`<!--more-->`摘要,可以将首页文章展示做小,而不是展示文章所有内容.

![2](2.png)

