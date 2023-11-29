import{_ as l}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o as r,c,a as e,b as n,d as a,e as o}from"./app-M6UUlHgF.js";const d={},p=o(`<h1 id="图片" tabindex="-1"><a class="header-anchor" href="#图片" aria-hidden="true">#</a> 图片</h1><p>在vscode编写hexo时, 既想在markdown中正常显示图片, 又想在最终渲染的html中正常显示图片.</p><h2 id="最佳实践" tabindex="-1"><a class="header-anchor" href="#最佳实践" aria-hidden="true">#</a> 最佳实践</h2><p>进行如下配置</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">post_asset_folder</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>  <span class="token comment"># 开始同名文件夹, hexo g时, 会将source中文档同名文件夹下的图片复制到public同名文件夹下</span>
<span class="token key atrule">marked</span><span class="token punctuation">:</span>
  <span class="token key atrule">prependRoot</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>  
  <span class="token key atrule">postAsset</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>  <span class="token comment"># 给图片路径前加上文档名称路径</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用写法:<code>![](./图片/hello-world/banner.jpg)</code>, 在</p><ul><li>markdown正常显示</li><li>hexo中可正常显示, 连接为<code>&lt;img src=&quot;/hello-world/banner.jpg&quot;</code></li></ul><h2 id="创建文件时-自动创建同名资源文件夹" tabindex="-1"><a class="header-anchor" href="#创建文件时-自动创建同名资源文件夹" aria-hidden="true">#</a> 创建文件时, 自动创建同名资源文件夹</h2><p>配置文章中的静态资源,一个文章对应一个静态文件夹,以及</p>`,9),i=e("p",null,[e("code",null,"post_asset_folder: true")],-1),u=e("code",null,"_config.yml",-1),h={href:"https://hexo.io/zh-cn/docs/asset-folders",target:"_blank",rel:"noopener noreferrer"},m=e("br",null,null,-1),_=e("code",null,"hexo new",-1),k=e("p",null,[e("code",null,"prependRoot"),n(": 在路径上加上前缀, 这里前缀是配置文件中的"),e("code",null,"root"),n("选项")],-1),b=e("code",null,"hexo-renderer-marked",-1),g=e("code",null,"_config.yml",-1),v={href:"https://github.com/hexojs/hexo-renderer-marked",target:"_blank",rel:"noopener noreferrer"},x=e("br",null,null,-1),f=e("code",null,"root: /blog/",-1),y=e("code",null,"![](./图片//path/to/image.jpg)",-1),j=e("code",null,'<img src="/blog/path/to/image.jpg" alt="text">',-1),w=e("code",null,"/blog/",-1),q=e("p",null,[e("code",null,"postAsset"),n(": 在路径上加上前缀, 这里前缀是同名文件夹"),e("code",null,"post_asset_folder")],-1),R=e("code",null,"hexo-renderer-marked",-1),A=e("code",null,"_config.yml",-1),N={href:"https://github.com/hexojs/hexo-renderer-marked",target:"_blank",rel:"noopener noreferrer"},V=e("br",null,null,-1),B=e("code",null,"prependRoot",-1),E=e("p",null,[n('"image.jpg" 在 "/2020/01/02/foo/" 文件夹下, 整体路径为 "/2020/01/02/foo/image.jpg". '),e("code",null,"![](./图片/image.jpg)"),n("的写法会自动加上文件夹路径变成"),e("code",null,'<img src="/2020/01/02/foo/image.jpg">'),n(". 相比"),e("code",null,"prependRoot"),n("添加固定的路径, "),e("code",null,"postAsset"),n("是添加对应文件夹名称.")],-1),I=o(`<h2 id="试验1" tabindex="-1"><a class="header-anchor" href="#试验1" aria-hidden="true">#</a> 试验1</h2><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">post_asset_folder</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>  <span class="token comment"># 开始同名文件夹, hexo g时, 会将source中文档同名文件夹下的图片复制到public同名文件夹下</span>
<span class="token key atrule">marked</span><span class="token punctuation">:</span>
  <span class="token key atrule">prependRoot</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>  
  <span class="token key atrule">postAsset</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>  <span class="token comment"># 给图片路径前加上文档名称路径</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>写法1: <code>![](./图片/hello-world/banner.jpg)</code></p><ul><li>markdown正常显示</li><li>hexo中可正常显示, 连接为<code>&lt;img src=&quot;/hello-world/banner.jpg&quot;</code></li></ul></li><li><p>写法2: <code>![](./图片/banner.jpg)</code></p><ul><li>markdown中不能显示</li><li>hexo中正常显示, 链接为<code>&lt;img src=&quot;/hello-world/banner.jpg&quot;</code></li></ul></li></ul><h2 id="试验2" tabindex="-1"><a class="header-anchor" href="#试验2" aria-hidden="true">#</a> 试验2</h2><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">root</span><span class="token punctuation">:</span> /  <span class="token comment"># 自动在图片链接上加上前缀\`/\`</span>
<span class="token key atrule">post_asset_folder</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>  <span class="token comment"># 开始同名文件夹, hexo g时, 会将source中文档同名文件夹下的图片复制到public同名文件夹下</span>
<span class="token key atrule">marked</span><span class="token punctuation">:</span>
  <span class="token key atrule">prependRoot</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>  <span class="token comment"># 加上前缀\`/\`</span>
  <span class="token key atrule">postAsset</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>写法: <code>![](./图片/hello-world/banner.jpg)</code><ul><li>markdown正常显示</li><li>hexo正常显示, <code>&lt;img src=&quot;/hello-world/banner.jpg&quot;</code></li></ul></li></ul>`,6);function L(z,C){const s=t("ExternalLinkIcon");return r(),c("div",null,[p,e("ul",null,[e("li",null,[i,e("p",null,[n("hexo原始的配置项, 在"),u,n("中, 详细参考"),e("a",h,[n("hexo官网"),a(s)]),n("."),m,n(" 在使用"),_,n("时自动创建同名文件夹. 当然可以不开启, 手动创建. hexo g时, 会将source中文档同名文件夹下的图片复制到public同名文件夹下.")])]),e("li",null,[k,e("p",null,[b,n("插件的配置, 也在"),g,n("中, 详细参考"),e("a",v,[n("hexo-renderer-marked官网"),a(s)]),x,n(" 当"),f,n("后, markdown中的"),y,n("写法会变成"),j,n(", 即在书写路径前加了"),w])]),e("li",null,[q,e("p",null,[R,n("插件的配置, 也在"),A,n("中, 详细参考"),e("a",N,[n("hexo-renderer-marked官网"),a(s)]),V,n(" 需要开启"),B]),E])]),I])}const D=l(d,[["render",L],["__file","图片.html.vue"]]);export{D as default};
