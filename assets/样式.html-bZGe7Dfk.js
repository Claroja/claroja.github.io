import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as p,o as e,c as o,a as n,b as s,d as c,e as i}from"./app-qxiCM96p.js";const l={},u=i(`<h1 id="样式" tabindex="-1"><a class="header-anchor" href="#样式" aria-hidden="true">#</a> 样式</h1><h2 id="单个文章配置" tabindex="-1"><a class="header-anchor" href="#单个文章配置" aria-hidden="true">#</a> 单个文章配置</h2><ol><li><p>在markdown文件开头处引入css文件： <code>&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;你的css文件名.css&quot;&gt;</code></p></li><li><p>在markdown文件里面定义css样式。在文件开头输入 css相关 设置，语法和html中一样 用<code>&lt;style&gt;&lt;/style&gt;</code>标签包含起来</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">&lt;style&gt;
.heading1</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token property">font-weight</span><span class="token punctuation">:</span>700<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 35px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.heading2</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
    <span class="token property">font-weight</span><span class="token punctuation">:</span>700<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">#</span> Markdown heading styles {#identifier .heading1}</span>
<span class="token title important"><span class="token punctuation">##</span> Markdown heading styles {#identifier .heading2}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="整体网站配置" tabindex="-1"><a class="header-anchor" href="#整体网站配置" aria-hidden="true">#</a> 整体网站配置</h2><ol><li>如果有主题, 如next, 就先修改主题样式, 主题的样式优先级高于hexo本身样式的优先级</li><li>没有主题, 则直接修改hexo的样式</li></ol><h3 id="主题样式修改" tabindex="-1"><a class="header-anchor" href="#主题样式修改" aria-hidden="true">#</a> 主题样式修改</h3><ol><li>在主题中开启样式配置文件, 以next为例: 打开<code>_config.next.yml</code>文件, 配置</li></ol><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">custom_file_path</span><span class="token punctuation">:</span>
  <span class="token key atrule">style</span><span class="token punctuation">:</span> source/_data/styles.styl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>修改<code>source/_data/styles.styl</code>文件</li></ol><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.post-block:first-of-type</span> <span class="token punctuation">{</span>
  <span class="token property">padding-top</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.posts-expand .post-header</span> <span class="token punctuation">{</span>
    // <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">body</span> <span class="token punctuation">{</span>
    <span class="token property">line-height</span><span class="token punctuation">:</span> 1.8<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">p</span> <span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>
    <span class="token property">text-indent</span><span class="token punctuation">:</span> 2em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.main</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 90%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.main-inner</span> <span class="token punctuation">{</span>
    <span class="token property">padding-top</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token selector">.post-body</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">caption, th, td</span> <span class="token punctuation">{</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">h1</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 1.5em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">h2</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 1.3em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">h3</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 1.1em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token selector">h1, h2, h3, h4, h5, h6</span> <span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 5px 0 5px<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.post-block</span> <span class="token punctuation">{</span>
    <span class="token selector">.post-body</span> <span class="token punctuation">{</span><span class="token property">counter-reset</span><span class="token punctuation">:</span> h1<span class="token punctuation">}</span>
            <span class="token selector">h1</span> <span class="token punctuation">{</span><span class="token property">counter-reset</span><span class="token punctuation">:</span> h2<span class="token punctuation">}</span>
            <span class="token selector">h2</span> <span class="token punctuation">{</span><span class="token property">counter-reset</span><span class="token punctuation">:</span> h3<span class="token punctuation">}</span>
            <span class="token selector">h3</span> <span class="token punctuation">{</span><span class="token property">counter-reset</span><span class="token punctuation">:</span> h4<span class="token punctuation">}</span>
            <span class="token selector">h4</span> <span class="token punctuation">{</span><span class="token property">counter-reset</span><span class="token punctuation">:</span> h5<span class="token punctuation">}</span>
            <span class="token selector">h5</span> <span class="token punctuation">{</span><span class="token property">counter-reset</span><span class="token punctuation">:</span> h6<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token selector">.post-body</span> <span class="token punctuation">{</span>
    <span class="token selector">h1:before</span> <span class="token punctuation">{</span><span class="token property">counter-increment</span><span class="token punctuation">:</span> h1<span class="token punctuation">;</span> <span class="token property">content</span><span class="token punctuation">:</span> <span class="token function">counter</span><span class="token punctuation">(</span>h1<span class="token punctuation">)</span> <span class="token string">&quot;. &quot;</span><span class="token punctuation">}</span>
    <span class="token selector">h2:before</span> <span class="token punctuation">{</span><span class="token property">counter-increment</span><span class="token punctuation">:</span> h2<span class="token punctuation">;</span> <span class="token property">content</span><span class="token punctuation">:</span> <span class="token function">counter</span><span class="token punctuation">(</span>h1<span class="token punctuation">)</span> <span class="token string">&quot;.&quot;</span> <span class="token function">counter</span><span class="token punctuation">(</span>h2<span class="token punctuation">)</span> <span class="token string">&quot;. &quot;</span><span class="token punctuation">}</span>
    <span class="token selector">h3:before</span> <span class="token punctuation">{</span><span class="token property">counter-increment</span><span class="token punctuation">:</span> h3<span class="token punctuation">;</span> <span class="token property">content</span><span class="token punctuation">:</span> <span class="token function">counter</span><span class="token punctuation">(</span>h1<span class="token punctuation">)</span> <span class="token string">&quot;.&quot;</span> <span class="token function">counter</span><span class="token punctuation">(</span>h2<span class="token punctuation">)</span> <span class="token string">&quot;.&quot;</span> <span class="token function">counter</span><span class="token punctuation">(</span>h3<span class="token punctuation">)</span> <span class="token string">&quot;. &quot;</span><span class="token punctuation">}</span>
    <span class="token selector">h4:before</span> <span class="token punctuation">{</span><span class="token property">counter-increment</span><span class="token punctuation">:</span> h4<span class="token punctuation">;</span> <span class="token property">content</span><span class="token punctuation">:</span> <span class="token function">counter</span><span class="token punctuation">(</span>h1<span class="token punctuation">)</span> <span class="token string">&quot;.&quot;</span> <span class="token function">counter</span><span class="token punctuation">(</span>h2<span class="token punctuation">)</span> <span class="token string">&quot;.&quot;</span> <span class="token function">counter</span><span class="token punctuation">(</span>h3<span class="token punctuation">)</span> <span class="token string">&quot;.&quot;</span> <span class="token function">counter</span><span class="token punctuation">(</span>h4<span class="token punctuation">)</span> <span class="token string">&quot;. &quot;</span><span class="token punctuation">}</span>
    <span class="token selector">h5:before</span> <span class="token punctuation">{</span><span class="token property">counter-increment</span><span class="token punctuation">:</span> h5<span class="token punctuation">;</span> <span class="token property">content</span><span class="token punctuation">:</span> <span class="token function">counter</span><span class="token punctuation">(</span>h1<span class="token punctuation">)</span> <span class="token string">&quot;.&quot;</span> <span class="token function">counter</span><span class="token punctuation">(</span>h2<span class="token punctuation">)</span> <span class="token string">&quot;.&quot;</span> <span class="token function">counter</span><span class="token punctuation">(</span>h3<span class="token punctuation">)</span> <span class="token string">&quot;.&quot;</span> <span class="token function">counter</span><span class="token punctuation">(</span>h4<span class="token punctuation">)</span> <span class="token string">&quot;.&quot;</span> <span class="token function">counter</span><span class="token punctuation">(</span>h5<span class="token punctuation">)</span> <span class="token string">&quot;. &quot;</span><span class="token punctuation">}</span>
    <span class="token selector">h6:before</span> <span class="token punctuation">{</span><span class="token property">counter-increment</span><span class="token punctuation">:</span> h6<span class="token punctuation">;</span> <span class="token property">content</span><span class="token punctuation">:</span> <span class="token function">counter</span><span class="token punctuation">(</span>h1<span class="token punctuation">)</span> <span class="token string">&quot;.&quot;</span> <span class="token function">counter</span><span class="token punctuation">(</span>h2<span class="token punctuation">)</span> <span class="token string">&quot;.&quot;</span> <span class="token function">counter</span><span class="token punctuation">(</span>h3<span class="token punctuation">)</span> <span class="token string">&quot;.&quot;</span> <span class="token function">counter</span><span class="token punctuation">(</span>h4<span class="token punctuation">)</span> <span class="token string">&quot;.&quot;</span> <span class="token function">counter</span><span class="token punctuation">(</span>h5<span class="token punctuation">)</span> <span class="token string">&quot;.&quot;</span> <span class="token function">counter</span><span class="token punctuation">(</span>h6<span class="token punctuation">)</span> <span class="token string">&quot;. &quot;</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>



<span class="token selector">audio::-webkit-media-controls-panel</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #ffffff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">audio::-webkit-media-controls-current-time-display</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">audio::-webkit-media-controls-time-remaining-display</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">audio::-webkit-media-controls-timeline</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">audio::-webkit-media-controls-mute-button</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token selector">::marker</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
    <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">code</span> <span class="token punctuation">{</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 0px 1px<span class="token punctuation">;</span>
    <span class="token property">overflow-wrap</span><span class="token punctuation">:</span> break-word<span class="token punctuation">;</span>
    <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>255 255 255 / 0%<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #ff6700<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="hexo样式修改" tabindex="-1"><a class="header-anchor" href="#hexo样式修改" aria-hidden="true">#</a> hexo样式修改</h3><ol><li>在浏览器中查看样式选择器, 在vscode中全工程搜索样式选择器, 定位文件为<code>/public/css/</code></li><li>在<code>/public/css/</code>直接修改看效果</li><li>将<code>/public/css/</code>复制到<code>/source/css/</code>下</li></ol><h2 id="具体样式修改" tabindex="-1"><a class="header-anchor" href="#具体样式修改" aria-hidden="true">#</a> 具体样式修改</h2><h3 id="列表样式" tabindex="-1"><a class="header-anchor" href="#列表样式" aria-hidden="true">#</a> 列表样式</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">::marker</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
    <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="标题样式" tabindex="-1"><a class="header-anchor" href="#标题样式" aria-hidden="true">#</a> 标题样式</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">h1, h2, h3, h4, h5, h6</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),r={href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/::marker",target:"_blank",rel:"noopener noreferrer"};function d(k,v){const a=p("ExternalLinkIcon");return e(),o("div",null,[u,n("p",null,[s("参考: "),n("a",r,[s("::marker"),c(a)])])])}const h=t(l,[["render",d],["__file","样式.html.vue"]]);export{h as default};
