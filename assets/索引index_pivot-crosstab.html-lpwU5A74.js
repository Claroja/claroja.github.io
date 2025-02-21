import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-jdLxCr9I.js";const p="/assets/1-PpyugQbF.png",e={},o=t('<h1 id="索引index-pivot" tabindex="-1"><a class="header-anchor" href="#索引index-pivot" aria-hidden="true">#</a> 索引index_pivot</h1><p>数据透视表类似于分组操作.</p><figure><img src="'+p+`" alt="alt text" tabindex="0" loading="lazy"><figcaption>alt text</figcaption></figure><p>他们3个的区别是:</p><ol><li>pivot_table, crosstab相较于pivot方法多了聚合的方法.</li><li>pivot_table可以直接使用列名, crosstab只能接收Series</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd

df <span class="token operator">=</span> pd<span class="token punctuation">.</span>DataFrame<span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token string">&#39;1&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;A&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;B&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;A&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;B&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string">&#39;2&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;C&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;D&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;D&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;C&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string">&#39;3&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;E&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;F&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;E&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;F&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string">&#39;4&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

df<span class="token punctuation">.</span>pivot<span class="token punctuation">(</span>index<span class="token operator">=</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span> columns<span class="token operator">=</span><span class="token string">&#39;2&#39;</span><span class="token punctuation">,</span> values<span class="token operator">=</span><span class="token string">&#39;4&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># 类似分组</span>

<span class="token comment"># 2  C  D</span>
<span class="token comment"># 1      </span>
<span class="token comment"># A  1  3</span>
<span class="token comment"># B  4  2</span>

df<span class="token punctuation">.</span>pivot<span class="token punctuation">(</span>index<span class="token operator">=</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span> columns<span class="token operator">=</span><span class="token string">&#39;3&#39;</span><span class="token punctuation">,</span> values<span class="token operator">=</span><span class="token string">&#39;4&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># 报错, 因为pivot没有聚合功能</span>

pd<span class="token punctuation">.</span>pivot_table<span class="token punctuation">(</span>df<span class="token punctuation">,</span> index<span class="token operator">=</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span> columns<span class="token operator">=</span><span class="token string">&#39;3&#39;</span><span class="token punctuation">,</span> values<span class="token operator">=</span><span class="token string">&#39;4&#39;</span><span class="token punctuation">,</span> aggfunc<span class="token operator">=</span><span class="token string">&#39;sum&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># 3    E    F</span>
<span class="token comment"># 1          </span>
<span class="token comment"># A  4.0  NaN</span>
<span class="token comment"># B  NaN  6.0</span>


pd<span class="token punctuation">.</span>crosstab<span class="token punctuation">(</span>index<span class="token operator">=</span>df<span class="token punctuation">[</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> columns<span class="token operator">=</span>df<span class="token punctuation">[</span><span class="token string">&#39;3&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> values<span class="token operator">=</span>df<span class="token punctuation">[</span><span class="token string">&#39;4&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> aggfunc<span class="token operator">=</span><span class="token builtin">sum</span><span class="token punctuation">)</span>

<span class="token comment"># 3    E    F</span>
<span class="token comment"># 1          </span>
<span class="token comment"># A  4.0  NaN</span>
<span class="token comment"># B  NaN  6.0</span>

pd<span class="token punctuation">.</span>pivot_table<span class="token punctuation">(</span>df<span class="token punctuation">,</span> index<span class="token operator">=</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span> columns<span class="token operator">=</span><span class="token string">&#39;2&#39;</span><span class="token punctuation">,</span> values<span class="token operator">=</span><span class="token string">&#39;4&#39;</span><span class="token punctuation">,</span> aggfunc<span class="token operator">=</span><span class="token string">&#39;sum&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># 2  C  D</span>
<span class="token comment"># 1      </span>
<span class="token comment"># A  1  3</span>
<span class="token comment"># B  4  2</span>

pd<span class="token punctuation">.</span>crosstab<span class="token punctuation">(</span>index<span class="token operator">=</span>df<span class="token punctuation">[</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> columns<span class="token operator">=</span>df<span class="token punctuation">[</span><span class="token string">&#39;2&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> values<span class="token operator">=</span>df<span class="token punctuation">[</span><span class="token string">&#39;4&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> aggfunc<span class="token operator">=</span><span class="token builtin">sum</span><span class="token punctuation">)</span>

<span class="token comment"># 2  C  D</span>
<span class="token comment"># 1      </span>
<span class="token comment"># A  1  3</span>
<span class="token comment"># B  4  2</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><h3 id="pivot" tabindex="-1"><a class="header-anchor" href="#pivot" aria-hidden="true">#</a> pivot</h3><ol><li><p>参数</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>pandas<span class="token punctuation">.</span>pivot<span class="token punctuation">(</span>
    data<span class="token punctuation">,</span>                   <span class="token comment"># DataFrame</span>
    <span class="token operator">*</span><span class="token punctuation">,</span> 
    columns<span class="token punctuation">,</span>                <span class="token comment"># str or object or a list of str, 哪一列的值作为列名</span>
    index<span class="token operator">=</span><span class="token operator">&lt;</span>no_default<span class="token operator">&gt;</span><span class="token punctuation">,</span>     <span class="token comment"># str or object or a list of str, optional, 哪一列的值作为索引, 不指定则使用原索引</span>
    values<span class="token operator">=</span><span class="token operator">&lt;</span>no_default<span class="token operator">&gt;</span>     <span class="token comment"># str, object or a list of the previous, optional, 那一列的值作为值. 如果不指定, 则所有剩余的列都会使用</span>
<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>返回</p><p>DataFrame</p></li></ol><h3 id="pivot-table" tabindex="-1"><a class="header-anchor" href="#pivot-table" aria-hidden="true">#</a> pivot_table</h3><h3 id="crosstab" tabindex="-1"><a class="header-anchor" href="#crosstab" aria-hidden="true">#</a> crosstab</h3><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2><ol><li>https://pandas.pydata.org/docs/user_guide/reshaping.html</li><li>https://pandas.pydata.org/docs/reference/api/pandas.pivot_table.html#pandas.pivot_table</li><li>https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.pivot.html#pandas.DataFrame.pivot</li></ol>`,13),c=[o];function i(l,u){return s(),a("div",null,c)}const k=n(e,[["render",i],["__file","索引index_pivot-crosstab.html.vue"]]);export{k as default};
