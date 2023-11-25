在写博客时, 实现热更新, 实时看到写作的最终效果. hexo server不能热更新,替换为live-server实现热更新.

1. 根目录中运行`hexo g --watch`来监听`.md`文件改动, 实时生成静态文件
2. `public`目录中运行 `live-server`来监听静态文件,实时展示在浏览器中(`live-server`是通过`npm install live-server -g`来安装的)

![](./hexo_热更新/1.png)
