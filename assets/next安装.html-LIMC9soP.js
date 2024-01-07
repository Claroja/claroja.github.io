import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o as l,c,a as n,b as s,d as a,e as o}from"./app-SnI5rGHA.js";const r={},d=n("h1",{id:"next安装",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#next安装","aria-hidden":"true"},"#"),s(" next安装")],-1),p={href:"https://github.com/next-theme",target:"_blank",rel:"noopener noreferrer"},u=n("h2",{id:"安装",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#安装","aria-hidden":"true"},"#"),s(" 安装")],-1),v={href:"https://theme-next.js.org/docs/getting-started/#Hexo-Installation",target:"_blank",rel:"noopener noreferrer"},m={href:"https://theme-next.js.org/docs/third-party-services/math-equations.html",target:"_blank",rel:"noopener noreferrer"},b=o(`<h2 id="next主题的目录结构" tabindex="-1"><a class="header-anchor" href="#next主题的目录结构" aria-hidden="true">#</a> next主题的目录结构</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>├── .github                #github信息
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>_config.next.yml</code>文件中配置自定义的主题</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>custom_file_path:
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置next主题" tabindex="-1"><a class="header-anchor" href="#配置next主题" aria-hidden="true">#</a> 配置NexT主题</h2><p>在根目录下创建 <strong>_config.next.yml</strong>文件</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">scheme</span><span class="token punctuation">:</span> Gemini <span class="token comment"># 主题</span>

<span class="token key atrule">toc</span><span class="token punctuation">:</span>
  <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">number</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">wrap</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">expand_all</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> <span class="token comment"># 强制展开所有列表</span>
  <span class="token key atrule">max_depth</span><span class="token punctuation">:</span> <span class="token number">6</span>

<span class="token key atrule">codeblock</span><span class="token punctuation">:</span>
  <span class="token comment"># Available values: normal | night | night eighties | night blue | night bright | solarized | solarized dark | galactic</span>
  <span class="token key atrule">highlight_theme</span><span class="token punctuation">:</span> solarized
  <span class="token key atrule">copy_button</span><span class="token punctuation">:</span>
    <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
    <span class="token key atrule">show_result</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
    <span class="token key atrule">style</span><span class="token punctuation">:</span>

<span class="token key atrule">back2top</span><span class="token punctuation">:</span>
  <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">sidebar</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> <span class="token comment"># 在sidebar上</span>
  <span class="token key atrule">scrollpercent</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> <span class="token comment"># 显示百分比</span>

<span class="token key atrule">reading_progress</span><span class="token punctuation">:</span>
  <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> <span class="token comment"># 阅读进度条</span>
  <span class="token key atrule">position</span><span class="token punctuation">:</span> top
  <span class="token key atrule">color</span><span class="token punctuation">:</span> <span class="token string">&quot;#37c6c0&quot;</span>
  <span class="token key atrule">height</span><span class="token punctuation">:</span> 3px

<span class="token key atrule">motion</span><span class="token punctuation">:</span>
  <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">false</span> <span class="token comment"># 关闭载入动画</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在更改 <strong>_config.yml</strong>(hexo)或者 <strong>_config.next.yml</strong>(next)的配置时,<code>hexo g --watch</code>因为缓存的原因不会立即更新,需要手动 <strong>先删除public文件夹</strong> 再次运行命令才能看到效果</p><h3 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h3>`,9),k={href:"https://blog.csdn.net/qq_32767041/category_8927471.html",target:"_blank",rel:"noopener noreferrer"},h=n("p",null,"http://blog.bill.moe/hexo-theme-next-config-optimization/ https://segmentfault.com/a/1190000009544924",-1);function g(_,y){const e=t("ExternalLinkIcon");return l(),c("div",null,[d,n("p",null,[s("注意next有很多重名的仓库, 注意辨识"),n("a",p,[s("官网"),a(e)])]),u,n("ol",null,[n("li",null,[n("a",v,[s("安装next"),a(e)])]),n("li",null,[n("a",m,[s("数学公式"),a(e)])])]),b,n("ul",null,[n("li",null,[n("a",k,[s("15wylu的博客"),a(e)])])]),h])}const w=i(r,[["render",g],["__file","next安装.html.vue"]]);export{w as default};
