import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as p,c,a as s,b as n,d as l,w as i,e as a}from"./app-0JgdiRQ-.js";const u={},d=a(`<h1 id="load" tabindex="-1"><a class="header-anchor" href="#load" aria-hidden="true">#</a> load</h1><p>ways for loading data:</p><ol><li>The Hub without a dataset loading script</li><li>Local loading script</li><li>Local files</li><li>In-memory data</li><li>Offline</li><li>A specific slice of a split</li></ol><p>in practice, loading in-memory data, eg: pandas, dict is common</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> datasets <span class="token keyword">import</span> Dataset
my_dict <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">}</span>
dataset <span class="token operator">=</span> Dataset<span class="token punctuation">.</span>from_dict<span class="token punctuation">(</span>my_dict<span class="token punctuation">)</span>

<span class="token comment">## Dataset({</span>
<span class="token comment">##     features: [&#39;a&#39;],</span>
<span class="token comment">##     num_rows: 3</span>
<span class="token comment">## })</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> datasets <span class="token keyword">import</span> Dataset
<span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd
df <span class="token operator">=</span> pd<span class="token punctuation">.</span>DataFrame<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
dataset <span class="token operator">=</span> Dataset<span class="token punctuation">.</span>from_pandas<span class="token punctuation">(</span>df<span class="token punctuation">)</span>

<span class="token comment">## Dataset({</span>
<span class="token comment">##     features: [&#39;a&#39;],</span>
<span class="token comment">##     num_rows: 3</span>
<span class="token comment">## })</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),r=s("code",null,"castColumn",-1),m=s("code",null,"cast",-1),k=a(`<p><code>castColumn</code><code>dataset = dataset.cast_column(labels_column_name, self.classLabel)</code></p><p><code>cast</code></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> datasets <span class="token keyword">import</span> ClassLabel<span class="token punctuation">,</span> Value
new_features <span class="token operator">=</span> dataset<span class="token punctuation">.</span>features<span class="token punctuation">.</span>copy<span class="token punctuation">(</span><span class="token punctuation">)</span>
new_features<span class="token punctuation">[</span><span class="token string">&quot;label&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> ClassLabel<span class="token punctuation">(</span>names<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&quot;negative&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;positive&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
new_features<span class="token punctuation">[</span><span class="token string">&quot;idx&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> Value<span class="token punctuation">(</span><span class="token string">&quot;int64&quot;</span><span class="token punctuation">)</span>
dataset <span class="token operator">=</span> dataset<span class="token punctuation">.</span>cast<span class="token punctuation">(</span>new_features<span class="token punctuation">)</span>
<span class="token comment">## dataset.features</span>
<span class="token comment">## {&#39;sentence1&#39;: Value(dtype=&#39;string&#39;, id=None),</span>
<span class="token comment">## &#39;sentence2&#39;: Value(dtype=&#39;string&#39;, id=None),</span>
<span class="token comment">## &#39;label&#39;: ClassLabel(num_classes=2, names=[&#39;negative&#39;, &#39;positive&#39;], names_file=None, id=None),</span>
<span class="token comment">## &#39;idx&#39;: Value(dtype=&#39;int64&#39;, id=None)}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>refs: https://huggingface.co/docs/datasets/loading</p>`,4);function v(b,_){const e=o("RouterLink");return p(),c("div",null,[d,s("p",null,[n("notices: transformers cant't auto recognize class column, so we should define it by "),r,n(" or "),m,n("."),l(e,{to:"/transformers_tokenizer_NLP/"},{default:i(()=>[n("参考")]),_:1})]),k])}const h=t(u,[["render",v],["__file","load.html.vue"]]);export{h as default};
