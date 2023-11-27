# 图片

在vscode编写hexo时, 既想在markdown中正常显示图片, 又想在最终渲染的html中正常显示图片.




## 最佳实践
进行如下配置
```yml
post_asset_folder: true  # 开始同名文件夹, hexo g时, 会将source中文档同名文件夹下的图片复制到public同名文件夹下
marked:
  prependRoot: true  
  postAsset: true  # 给图片路径前加上文档名称路径
```
使用写法:`![](./hexo_图片/hello-world/banner.jpg)`, 在
- markdown正常显示
- hexo中可正常显示, 连接为`<img src="/hello-world/banner.jpg"`


## 创建文件时, 自动创建同名资源文件夹

配置文章中的静态资源,一个文章对应一个静态文件夹,以及

- `post_asset_folder: true`

    hexo原始的配置项, 在`_config.yml`中, 详细参考[hexo官网](https://hexo.io/zh-cn/docs/asset-folders).  
    在使用`hexo new`时自动创建同名文件夹. 当然可以不开启, 手动创建.
    hexo g时, 会将source中文档同名文件夹下的图片复制到public同名文件夹下.  

- `prependRoot`: 在路径上加上前缀, 这里前缀是配置文件中的`root`选项
 
    `hexo-renderer-marked`插件的配置, 也在`_config.yml`中, 详细参考[hexo-renderer-marked官网](https://github.com/hexojs/hexo-renderer-marked)  
    当`root: /blog/`后, markdown中的`![](./hexo_图片//path/to/image.jpg)`写法会变成`<img src="/blog/path/to/image.jpg" alt="text">`, 即在书写路径前加了`/blog/`



- `postAsset`: 在路径上加上前缀, 这里前缀是同名文件夹`post_asset_folder`
  
    `hexo-renderer-marked`插件的配置, 也在`_config.yml`中, 详细参考[hexo-renderer-marked官网](https://github.com/hexojs/hexo-renderer-marked)  
    需要开启`prependRoot`  

    "image.jpg" 在 "/2020/01/02/foo/" 文件夹下, 整体路径为 "/2020/01/02/foo/image.jpg". `![](./hexo_图片/image.jpg)`的写法会自动加上文件夹路径变成`<img src="/2020/01/02/foo/image.jpg">`. 相比`prependRoot`添加固定的路径, `postAsset`是添加对应文件夹名称.

## 试验1


```yml
post_asset_folder: true  # 开始同名文件夹, hexo g时, 会将source中文档同名文件夹下的图片复制到public同名文件夹下
marked:
  prependRoot: true  
  postAsset: true  # 给图片路径前加上文档名称路径
```
- 写法1: `![](./hexo_图片/hello-world/banner.jpg)`
  - markdown正常显示
  - hexo中可正常显示, 连接为`<img src="/hello-world/banner.jpg"`


- 写法2: `![](./hexo_图片/banner.jpg)`
  - markdown中不能显示
  - hexo中正常显示, 链接为`<img src="/hello-world/banner.jpg"`


## 试验2 

```yml
root: /  # 自动在图片链接上加上前缀`/`
post_asset_folder: true  # 开始同名文件夹, hexo g时, 会将source中文档同名文件夹下的图片复制到public同名文件夹下
marked:
  prependRoot: true  # 加上前缀`/`
  postAsset: false
```


- 写法: `![](./hexo_图片/hello-world/banner.jpg)`
  - markdown正常显示
  - hexo正常显示, `<img src="/hello-world/banner.jpg"`