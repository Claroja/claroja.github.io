# next安装

注意next有很多重名的仓库, 注意辨识[官网](https://github.com/next-theme)

## 安装
1. [安装next](https://theme-next.js.org/docs/getting-started/#Hexo-Installation)
2. [数学公式](https://theme-next.js.org/docs/third-party-services/math-equations.html)

## next主题的目录结构
```
├── .github                #github信息
├── languages              #多语言
|   ├── _en.yml            #默认语言
|   └── zh-CN.yml          #简体中文
|   └── zh-TW.yml          #繁体中文
├── layout                 #布局，根目录下的*.swig文件是对主页，分页，存档等的控制
|   ├── _custom            #可以自定义的模板，覆盖原有模板
|   |   ├── head.swig      #文首样式
|   |   ├── header.swig    #头部样式
|   |   ├── sidebar.swig   #侧边栏样式
|   ├── _macro             #可以自定义的模板，覆盖原有模板
|   |   ├── post.swig      #文章模板
|   |   ├── reward.swig    #打赏模板
|   |   ├── sidebar.swig   #侧边栏模板
|   ├── _partial           #局部的布局
|   |   ├── head           #头部模板
|   |   ├── search         #搜索模板
|   |   ├── share          #分享模板
|   ├── _script            #局部的布局
|   ├── _third-party       #第三方模板
|   ├── _layout.swig       #主页面模板
|   ├── index.swig         #主页面模板
|   ├── page               #页面模板
|   └── tag.swig           #tag模板
├── scripts                #script源码
|   ├── tags               #tags的script源码
|   ├── marge.js           #页面模板
├── source                 #源码
|   ├── css                #css源码
|   |   ├── _common        #*.styl基础css
|   |   ├── _custom        #*.styl自定义局部css
|   |   └── _mixins        #mixins的css
|   ├── fonts              #字体
|   ├── images             #图片
|   ├── js                 #javascript源代码
|   └── lib                #引用库
├── _config.yml            #主题配置文件
└── README.md              #说明文件
```



`_config.next.yml`文件中配置自定义的主题
```
custom_file_path:
  #head: source/_data/head.swig
  #header: source/_data/header.swig
  #sidebar: source/_data/sidebar.swig
  #postMeta: source/_data/post-meta.swig
  #postBodyEnd: source/_data/post-body-end.swig
  #footer: source/_data/footer.swig
  #bodyEnd: source/_data/body-end.swig
  #variable: source/_data/variables.styl
  #mixin: source/_data/mixins.styl
  #style: source/_data/styles.styl
```

## 配置NexT主题

在根目录下创建 **_config.next.yml**文件

```yml
scheme: Gemini # 主题

toc:
  enable: true
  number: true
  wrap: false
  expand_all: true # 强制展开所有列表
  max_depth: 6

codeblock:
  # Available values: normal | night | night eighties | night blue | night bright | solarized | solarized dark | galactic
  highlight_theme: solarized
  copy_button:
    enable: false
    show_result: false
    style:

back2top:
  enable: true
  sidebar: true # 在sidebar上
  scrollpercent: true # 显示百分比

reading_progress:
  enable: true # 阅读进度条
  position: top
  color: "#37c6c0"
  height: 3px

motion:
  enable: false # 关闭载入动画
```

在更改 **_config.yml**(hexo)或者 **_config.next.yml**(next)的配置时,`hexo g --watch`因为缓存的原因不会立即更新,需要手动 **先删除public文件夹** 再次运行命令才能看到效果

### 参考
- [15wylu的博客](https://blog.csdn.net/qq_32767041/category_8927471.html)

http://blog.bill.moe/hexo-theme-next-config-optimization/
https://segmentfault.com/a/1190000009544924