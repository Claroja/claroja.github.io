import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-jdLxCr9I.js";const e={},p=t(`<h1 id="插值" tabindex="-1"><a class="header-anchor" href="#插值" aria-hidden="true">#</a> 插值</h1><p>vue最大优势就是将<code>&lt;script setup&gt;&lt;/script&gt;</code>中的变量, 直接应用到<code>&lt;template&gt;&lt;/template&gt;</code>的html中.</p><h2 id="按插值的位置" tabindex="-1"><a class="header-anchor" href="#按插值的位置" aria-hidden="true">#</a> 按插值的位置</h2><p>按插值的位置可以分为:</p><ol><li>文本插值, 既html中标签中的值, 如<code>&lt;span&gt; {{ 文本插值 }}&lt;/span&gt;</code>, ✨文本插值的值来源于<code>&lt;script&gt;</code></li><li>属性插值, 既html中标签的属性, 如<code>&lt;span v-bind:id=&quot;属性插值&quot;&gt;&lt;/span&gt;</code>, ✨属性插值的值来源于<code>&lt;script&gt;</code></li></ol><h2 id="插值的表达式" tabindex="-1"><a class="header-anchor" href="#插值的表达式" aria-hidden="true">#</a> 插值的表达式</h2><p>根据位置不同, 表达式也不相同:</p><ol><li><p>在文本插值中, 使用双括号:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token punctuation">{</span><span class="token punctuation">{</span> number <span class="token operator">+</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>

<span class="token punctuation">{</span><span class="token punctuation">{</span> ok ? <span class="token string">&#39;YES&#39;</span> <span class="token punctuation">:</span> <span class="token string">&#39;NO&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>

<span class="token punctuation">{</span><span class="token punctuation">{</span> message<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>reverse<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>在属性插值中, 使用双引号, 然后使用反引号</p><div class="language-htm line-numbers-mode" data-ext="htm"><pre class="language-htm"><code>&lt;div :id=&quot;\`list-\${id}\`&quot;&gt;&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol>`,8),c=[p];function o(i,l){return s(),a("div",null,c)}const r=n(e,[["render",o],["__file","1_4插值.html.vue"]]);export{r as default};
