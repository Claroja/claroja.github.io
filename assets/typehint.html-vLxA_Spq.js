import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as s,e}from"./app-O0xqlHfm.js";const t={},p=e(`<h1 id="typehint" tabindex="-1"><a class="header-anchor" href="#typehint" aria-hidden="true">#</a> typehint</h1><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd
df <span class="token operator">=</span> pd<span class="token punctuation">.</span>read_csv<span class="token punctuation">(</span><span class="token string">&quot;./test.csv&quot;</span><span class="token punctuation">)</span>
df<span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>python是动态强类型语言，IDE无法判断<code>df.</code>的返回值类型，无法根据参数类型自动补全。</p><h2 id="类型注解" tabindex="-1"><a class="header-anchor" href="#类型注解" aria-hidden="true">#</a> 类型注解</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd
df <span class="token operator">=</span> pd<span class="token punctuation">.</span>read_csv<span class="token punctuation">(</span><span class="token string">&quot;./test.csv&quot;</span><span class="token punctuation">)</span> <span class="token comment"># type: pd.DataFrame</span>
df<span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="指定参数类型" tabindex="-1"><a class="header-anchor" href="#指定参数类型" aria-hidden="true">#</a> 指定参数类型</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">func</span><span class="token punctuation">(</span>param<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    param<span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="指定返回类型" tabindex="-1"><a class="header-anchor" href="#指定返回类型" aria-hidden="true">#</a> 指定返回类型</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">str</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>

f <span class="token operator">=</span> func<span class="token punctuation">(</span><span class="token punctuation">)</span>
f<span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="指定局部变量的类型" tabindex="-1"><a class="header-anchor" href="#指定局部变量的类型" aria-hidden="true">#</a> 指定局部变量的类型</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>df <span class="token operator">=</span> pd<span class="token punctuation">.</span>read_csv<span class="token punctuation">(</span><span class="token string">&quot;./test.csv&quot;</span><span class="token punctuation">)</span> <span class="token comment"># type: pd.DataFrame</span>
df<span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>参考: https://www.cnblogs.com/Jimc/p/9602987.html</p>`,12),i=[p];function c(o,d){return a(),s("div",null,i)}const u=n(t,[["render",c],["__file","typehint.html.vue"]]);export{u as default};
