# 安装
3. 安装`git`, `yum install git`
4. 下载`claroja.github.io`文档
2. 下载`node.js`, [官网](https://nodejs.org/dist/v14.15.1/), 并配置环境变量
1. 安装`hexo-cli`类似于一个可执行文件, [官网](https://hexo.io/zh-cn/index.html)看. `工程中package.json中的hexo只是指定了版本, 实际调用的还是hexo-cli`
5. 修改`npm`镜像源, 安装`claroja.github.io`下的`package.json`
6. 全局安装`live-server`


# hexo的目录结构
```
.
├── .deploy          #部署文件夹
├── public           #html源码，hexo g生成
├── scaffolds        #模板
├── scripts          #扩展脚本
├── source           #文章源码
|   ├── _drafts      #草稿
|   └── _posts       #文章
├── themes           #主题
|   ├── next         #NexT主题
├── _config.yml      #博客配置
└── package.json     #应用程序数据
```