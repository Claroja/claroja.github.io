import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o,c as p,a as c,b as s,d as l,w as i,e as a}from"./app-0JgdiRQ-.js";const d={},r=a(`<h1 id="features" tabindex="-1"><a class="header-anchor" href="#features" aria-hidden="true">#</a> features</h1><h2 id="what" tabindex="-1"><a class="header-anchor" href="#what" aria-hidden="true">#</a> what</h2><p>Features defines the internal structure of a dataset. It is used to specify the underlying serialization format. The Features format is simple: <code>dict[column_name, column_type]</code></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> datasets <span class="token keyword">import</span> load_dataset
dataset <span class="token operator">=</span> load_dataset<span class="token punctuation">(</span><span class="token string">&#39;glue&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;mrpc&#39;</span><span class="token punctuation">,</span> split<span class="token operator">=</span><span class="token string">&#39;train&#39;</span><span class="token punctuation">)</span>
dataset<span class="token punctuation">.</span>features
<span class="token comment">## {&#39;idx&#39;: Value(dtype=&#39;int32&#39;, id=None),</span>
<span class="token comment">##  &#39;label&#39;: ClassLabel(num_classes=2, names=[&#39;not_equivalent&#39;, &#39;equivalent&#39;], names_file=None, id=None),</span>
<span class="token comment">##  &#39;sentence1&#39;: Value(dtype=&#39;string&#39;, id=None),</span>
<span class="token comment">##  &#39;sentence2&#39;: Value(dtype=&#39;string&#39;, id=None),</span>
<span class="token comment">## }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Value</code> feature tells:</p><ul><li>The idx data type is int32.</li><li>The sentence1 and sentence2 data types are string.</li></ul><p><code>ClassLabel</code> feature tells: Datasets the label column contains two classes. The classes are labeled <code>not_equivalent</code> and <code>equivalent</code>. Labels are stored as integers in the dataset. When you retrieve the labels, <code>ClassLabel.int2str()</code> and <code>ClassLabel.str2int()</code> carries out the conversion from integer value to label name, and vice versa.</p><h2 id="create-features" tabindex="-1"><a class="header-anchor" href="#create-features" aria-hidden="true">#</a> create features</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> datasets <span class="token keyword">import</span> ClassLabel<span class="token punctuation">,</span> Value
new_features <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;label&quot;</span><span class="token punctuation">:</span>ClassLabel<span class="token punctuation">(</span>names<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&#39;negative&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;positive&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string">&quot;idx&quot;</span><span class="token punctuation">:</span>Value<span class="token punctuation">(</span><span class="token string">&#39;int64&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="cast" tabindex="-1"><a class="header-anchor" href="#cast" aria-hidden="true">#</a> cast</h2><ol><li><code>cast(Features)</code> 整体转换Features, 再进行转换</li><li><code>cast_column(name,newtype)</code> 转换指定的某一个column</li></ol><p>注意: 不要使用 <code>dataset[&#39;column_name&#39;]=ClassLabel(names=[&quot;negative&quot;, &quot;positive&quot;]) </code>这种写法</p>`,12),u=a(`<h2 id="classlabel" tabindex="-1"><a class="header-anchor" href="#classlabel" aria-hidden="true">#</a> ClassLabel</h2><p>handle string lable and int label</p><p><code>create</code></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>ClassLabel<span class="token punctuation">(</span>names<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&#39;bad&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;ok&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;good&#39;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>int2str</code></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> datasets <span class="token keyword">import</span> load_dataset
ds <span class="token operator">=</span> load_dataset<span class="token punctuation">(</span><span class="token string">&quot;rotten_tomatoes&quot;</span><span class="token punctuation">,</span> split<span class="token operator">=</span><span class="token string">&quot;train&quot;</span><span class="token punctuation">)</span>
ds<span class="token punctuation">.</span>features<span class="token punctuation">[</span><span class="token string">&quot;label&quot;</span><span class="token punctuation">]</span><span class="token punctuation">.</span>int2str<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token string">&#39;neg&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>str2int</code></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> datasets <span class="token keyword">import</span> load_dataset
ds <span class="token operator">=</span> load_dataset<span class="token punctuation">(</span><span class="token string">&quot;rotten_tomatoes&quot;</span><span class="token punctuation">,</span> split<span class="token operator">=</span><span class="token string">&quot;train&quot;</span><span class="token punctuation">)</span>
ds<span class="token punctuation">.</span>features<span class="token punctuation">[</span><span class="token string">&quot;label&quot;</span><span class="token punctuation">]</span><span class="token punctuation">.</span>str2int<span class="token punctuation">(</span><span class="token string">&#39;neg&#39;</span><span class="token punctuation">)</span>
<span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>refs: https://huggingface.co/docs/datasets/about_dataset_features https://huggingface.co/docs/datasets/v2.3.2/en/package_reference/main_classes#datasets.Features https://huggingface.co/docs/datasets/v2.3.2/en/package_reference/main_classes#datasets.ClassLabel</p>`,9);function k(m,v){const n=t("RouterLink");return o(),p("div",null,[r,c("p",null,[s("refs "),l(n,{to:"/transformers_datasets_process/"},{default:i(()=>[s("transformers_datasets_process")]),_:1})]),u])}const g=e(d,[["render",k],["__file","features.html.vue"]]);export{g as default};
