# 部署


`hexo deploy`用来对静态文件进行部署. 会在工作目录下生成`.deploy_git`文件夹, 里面是一个`git`仓库, 包含了所有生成的静态文件.


- 命令: `hexo d`
- 参数: 在hexo中的`_config.yml`文件中配置部署的目标网站

  ```yml
  # You can use this:
  deploy:
    type: git
    repo: <repository url>
    branch: [branch]
    message: [message]
    name: [git user]
    email: [git email]
    extend_dirs: [extend directory]
  ```

  如:
  ```yml
  deploy:
    type: git
    repo: git@github.com:Claroja/claroja.github.io.git
    branch: main
    name: claroja
    email: 63183535@qq.com
  ```

  如果不生效,可以修改`/hexo/.deploy_git/.git/config`文件中的email；

  因为`hexo d`是将生成的`html`文件上传, 而`.md`源码文件并没有上传, 所以可以将hexo工程文件新创建一个`source`分支进行保存.

参考:
- https://github.com/hexojs/hexo/issues/2125
