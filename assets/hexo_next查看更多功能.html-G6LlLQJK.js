import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as l,c as i,a as n,e as s,b as c,d as a}from"./app-j3zK2x6_.js";const p={},r=a(`<h1 id="next查看更多功能" tabindex="-1"><a class="header-anchor" href="#next查看更多功能" aria-hidden="true">#</a> next查看更多功能</h1><h2 id="打开read-more-btn" tabindex="-1"><a class="header-anchor" href="#打开read-more-btn" aria-hidden="true">#</a> 打开read_more_btn</h2><p>用来控制当使用<code>&lt;--more--&gt;</code>生成摘要时显示的<strong>read more</strong>按钮是否显示</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">read_more_btn</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a href="./hexo_next%E6%9F%A5%E7%9C%8B%E6%9B%B4%E5%A4%9A%E5%8A%9F%E8%83%BD/1.png"></a></p><h2 id="配置custom-file-path" tabindex="-1"><a class="header-anchor" href="#配置custom-file-path" aria-hidden="true">#</a> 配置custom_file_path</h2>`,6),d={href:"https://theme-next.js.org/docs/advanced-settings/custom-files.html",target:"_blank",rel:"noopener noreferrer"},u=a(`<div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>custom_file_path<span class="token operator">:</span>
  #head<span class="token operator">:</span> source/_data/head.njk
  #header<span class="token operator">:</span> source/_data/header.njk
  #sidebar<span class="token operator">:</span> source/_data/sidebar.njk
  #postMeta<span class="token operator">:</span> source/_data/post-meta.njk
  #postBodyEnd<span class="token operator">:</span> source/_data/post-body-end.njk
  #footer<span class="token operator">:</span> source/_data/footer.njk
  #bodyEnd<span class="token operator">:</span> source/_data/body-end.njk
  #variable<span class="token operator">:</span> source/_data/variables.styl
  #mixin<span class="token operator">:</span> source/_data/mixins.styl
  #style<span class="token operator">:</span> source/_data/styles.styl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>开启自定义配置文件, 在<code>next/_config.yml</code>中开启自定义配置</li></ol><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">custom_file_path</span><span class="token punctuation">:</span>
  <span class="token key atrule">style</span><span class="token punctuation">:</span> source/_data/styles.styl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>编辑自定义样式, 在<code>hexo/source/_data/styles.styl</code>中编辑</li></ol><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.posts-expand .post-meta</span> <span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 3px 0 3px 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.post-block</span> <span class="token punctuation">{</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">p</span> <span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0 0 0 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.post-body</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">body</span> <span class="token punctuation">{</span>
    <span class="token property">line-height</span><span class="token punctuation">:</span> 1.5<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="最终效果" tabindex="-1"><a class="header-anchor" href="#最终效果" aria-hidden="true">#</a> 最终效果</h2><p>这种样式配合<code>&lt;--more--&gt;</code>摘要,可以将首页文章展示做小,而不是展示文章所有内容.</p><p><a href="./hexo_next%E6%9F%A5%E7%9C%8B%E6%9B%B4%E5%A4%9A%E5%8A%9F%E8%83%BD/2.png"></a></p>`,8);function m(v,k){const e=o("ExternalLinkIcon");return l(),i("div",null,[r,n("p",null,[s("用来配置自定义的js和样式等,详细参考"),n("a",d,[s("官网"),c(e)])]),u])}const _=t(p,[["render",m],["__file","hexo_next查看更多功能.html.vue"]]);export{_ as default};
