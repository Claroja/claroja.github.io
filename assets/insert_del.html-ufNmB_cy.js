import{_ as p}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as e,o,c,a as n,b as a,d as u,w as l,e as s}from"./app-A10JnHE0.js";const i={},r=s(`<h1 id="insert-del" tabindex="-1"><a class="header-anchor" href="#insert-del" aria-hidden="true">#</a> insert&amp;del</h1><h2 id="准备数据" tabindex="-1"><a class="header-anchor" href="#准备数据" aria-hidden="true">#</a> 准备数据</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd
df <span class="token operator">=</span> pd<span class="token punctuation">.</span>DataFrame<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token string">&#39;c&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;B&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;C&quot;</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>df<span class="token punctuation">)</span>
   a  b  c
<span class="token number">0</span>  <span class="token number">1</span>  a  A
<span class="token number">1</span>  <span class="token number">2</span>  b  B
<span class="token number">2</span>  <span class="token number">3</span>  c  C
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="行操作" tabindex="-1"><a class="header-anchor" href="#行操作" aria-hidden="true">#</a> 行操作</h2><h3 id="索引" tabindex="-1"><a class="header-anchor" href="#索引" aria-hidden="true">#</a> 索引</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>df <span class="token operator">=</span> pd<span class="token punctuation">.</span>DataFrame<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&quot;B&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
df <span class="token operator">=</span> df<span class="token punctuation">.</span>rename<span class="token punctuation">(</span>index<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">:</span><span class="token number">5</span><span class="token punctuation">}</span><span class="token punctuation">,</span> columns<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;C&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;c&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment"># 修改索引名</span>

df <span class="token operator">=</span> df<span class="token punctuation">.</span>set_index<span class="token punctuation">(</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">)</span> <span class="token comment"># 将A列做为索引</span>
df <span class="token operator">=</span> df<span class="token punctuation">.</span>reset_index<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">#将索引删除，作为普通列，并从新使用[0,1,2...n]作为索引 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="插入行" tabindex="-1"><a class="header-anchor" href="#插入行" aria-hidden="true">#</a> 插入行</h3>`,7),k=s(`<li><p>在中间插入</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd
line <span class="token operator">=</span> pd<span class="token punctuation">.</span>DataFrame<span class="token punctuation">(</span><span class="token punctuation">{</span>df<span class="token punctuation">.</span>columns<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">:</span><span class="token string">&quot;--&quot;</span><span class="token punctuation">,</span>df<span class="token punctuation">.</span>columns<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">:</span><span class="token string">&quot;--&quot;</span><span class="token punctuation">,</span>df<span class="token punctuation">.</span>columns<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">:</span><span class="token string">&quot;--&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>index<span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
df <span class="token operator">=</span> pd<span class="token punctuation">.</span>concat<span class="token punctuation">(</span><span class="token punctuation">[</span>df<span class="token punctuation">.</span>loc<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>line<span class="token punctuation">,</span>df<span class="token punctuation">.</span>loc<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span>reset_index<span class="token punctuation">(</span>drop<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span><span class="token comment">#df.loc[:0]这里不能写成df.loc[0]，因为df.loc[0]返回的是series</span>
    a  b  c
<span class="token number">0</span>  <span class="token number">1.0</span>  a  A
<span class="token number">1</span>  <span class="token operator">-</span><span class="token operator">-</span>  <span class="token operator">-</span><span class="token operator">-</span> <span class="token operator">-</span><span class="token operator">-</span>
<span class="token number">2</span>  <span class="token number">2.0</span>  b  B
<span class="token number">3</span>  <span class="token number">3.0</span>  c  C
<span class="token number">4</span>  <span class="token number">4.0</span>  <span class="token number">4</span>  <span class="token number">4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,1),d=s(`<h3 id="删除行" tabindex="-1"><a class="header-anchor" href="#删除行" aria-hidden="true">#</a> 删除行</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>df<span class="token punctuation">.</span>drop<span class="token punctuation">(</span>index<span class="token operator">=</span>labels<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="列操作" tabindex="-1"><a class="header-anchor" href="#列操作" aria-hidden="true">#</a> 列操作</h2><h3 id="columns" tabindex="-1"><a class="header-anchor" href="#columns" aria-hidden="true">#</a> columns</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>df <span class="token operator">=</span> pd<span class="token punctuation">.</span>DataFrame<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&quot;B&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
df<span class="token punctuation">.</span>rename<span class="token punctuation">(</span>index<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">:</span><span class="token number">5</span><span class="token punctuation">}</span><span class="token punctuation">,</span> columns<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;C&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;c&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
df<span class="token punctuation">.</span>columns <span class="token operator">=</span> df<span class="token punctuation">.</span>columns<span class="token punctuation">.</span><span class="token builtin">str</span><span class="token punctuation">.</span>strip<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># 把columns当成series看待</span>
df<span class="token punctuation">.</span>columns <span class="token operator">=</span> df<span class="token punctuation">.</span>columns<span class="token punctuation">.</span><span class="token builtin">map</span><span class="token punctuation">(</span><span class="token keyword">lambda</span> x<span class="token punctuation">:</span>x<span class="token punctuation">)</span> <span class="token comment"># 使用map函数</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="增加列" tabindex="-1"><a class="header-anchor" href="#增加列" aria-hidden="true">#</a> 增加列</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>df<span class="token punctuation">[</span><span class="token string">&quot;new&quot;</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="删除列" tabindex="-1"><a class="header-anchor" href="#删除列" aria-hidden="true">#</a> 删除列</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>df<span class="token punctuation">.</span>drop<span class="token punctuation">(</span>solumns<span class="token operator">=</span>labels<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,9);function m(b,h){const t=e("RouterLink");return o(),c("div",null,[r,n("ol",null,[k,n("li",null,[n("p",null,[a("在末尾插入 参考"),u(t,{to:"/pandas_concate/"},{default:l(()=>[a("pandas_concate")]),_:1})])])]),d])}const f=p(i,[["render",m],["__file","insert_del.html.vue"]]);export{f as default};
