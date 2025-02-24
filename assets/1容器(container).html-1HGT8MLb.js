import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e}from"./app-A10JnHE0.js";const t={},p=e(`<h1 id="容器-container" tabindex="-1"><a class="header-anchor" href="#容器-container" aria-hidden="true">#</a> 容器(container)</h1><ol><li><p>SVG.Svg:</p><ol><li>SVG(): <code>var draw = SVG().addTo(&#39;#drawing&#39;) # 创建svg元素</code></li><li>nested(): <code>var nested = draw.nested() # 在svg中创建嵌套svg元素</code></li></ol></li><li><p>SVG.G</p><p>可以将元素加入到一个组(group)内一起控制. 注意组没有<code>x</code>, <code>y</code>等属性, 如果需要控制<code>x</code>, <code>y</code>属性可以使用<code>nested()</code>方法.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> group <span class="token operator">=</span> draw<span class="token punctuation">.</span><span class="token function">group</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
group<span class="token punctuation">.</span><span class="token function">path</span><span class="token punctuation">(</span><span class="token string">&#39;M10,20L30,40&#39;</span><span class="token punctuation">)</span>  # 在组里创建一个元素
group<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>rect<span class="token punctuation">)</span>  # 添加一个元素进组
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>SVG.Symbol</p><p>创建Symbol分组, 和g不同的是, symbol只有在使用时才显示.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> symbol <span class="token operator">=</span> draw<span class="token punctuation">.</span><span class="token function">symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
symbol<span class="token punctuation">.</span><span class="token function">rect</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token string">&#39;#f09&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">var</span> use  <span class="token operator">=</span> draw<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>symbol<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">move</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>SVG.Defs</p><p><code>var defs = draw.defs()</code></p></li><li><p>SVG.A</p><p>创建一个超链接</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> link <span class="token operator">=</span> draw<span class="token punctuation">.</span><span class="token function">link</span><span class="token punctuation">(</span><span class="token string">&#39;http://svgdotjs.github.io/&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> rect <span class="token operator">=</span> link<span class="token punctuation">.</span><span class="token function">rect</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2><ol><li>https://svgjs.dev/docs/3.0/container-elements</li></ol>`,4),o=[p];function c(i,l){return s(),a("div",null,o)}const d=n(t,[["render",c],["__file","1容器(container).html.vue"]]);export{d as default};
