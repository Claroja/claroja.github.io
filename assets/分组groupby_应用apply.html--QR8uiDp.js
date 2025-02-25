import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as t}from"./app-nD1Z-e8V.js";const e={},p=t(`<h2 id="测试数据" tabindex="-1"><a class="header-anchor" href="#测试数据" aria-hidden="true">#</a> 测试数据</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd
df <span class="token operator">=</span> pd<span class="token punctuation">.</span>DataFrame<span class="token punctuation">(</span><span class="token punctuation">{</span>
                <span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;wang&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;wei&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;zhao&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;li&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;wu&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token string">&quot;gender&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;boy&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;girl&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;girl&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;boy&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;girl&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token string">&quot;score&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">56</span><span class="token punctuation">,</span><span class="token number">67</span><span class="token punctuation">,</span><span class="token number">47</span><span class="token punctuation">,</span><span class="token number">87</span><span class="token punctuation">,</span><span class="token boolean">None</span><span class="token punctuation">]</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token triple-quoted-string string">&quot;&quot;&quot;

name	gender	score
0	wang	boy	56.0
1	wei	girl	67.0
2	zhao	girl	47.0
3	li	boy	87.0
4	wu	girl	Na
&quot;&quot;&quot;</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="apply" tabindex="-1"><a class="header-anchor" href="#apply" aria-hidden="true">#</a> apply</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>df<span class="token punctuation">.</span>groupby<span class="token punctuation">(</span><span class="token string">&#39;gender&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token builtin">apply</span><span class="token punctuation">(</span><span class="token keyword">lambda</span> x<span class="token punctuation">:</span> x<span class="token punctuation">.</span>sort_values<span class="token punctuation">(</span><span class="token string">&#39;score&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>reset_index<span class="token punctuation">(</span>drop<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>

<span class="token triple-quoted-string string">&quot;&quot;&quot;
	name	gender	score
0	wang	boy	56.0
1	li	boy	87.0
2	zhao	girl	47.0
3	wei	girl	67.0
4	wu	girl	NaN
&quot;&quot;&quot;</span>



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),o=[p];function i(u,l){return s(),a("div",null,o)}const d=n(e,[["render",i],["__file","分组groupby_应用apply.html.vue"]]);export{d as default};
