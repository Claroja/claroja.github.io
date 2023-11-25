import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as e,o,c as p,a as n,e as s,b as i,d as c}from"./app-j3zK2x6_.js";const l={},u=n("h1",{id:"datasets",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#datasets","aria-hidden":"true"},"#"),s(" datasets")],-1),r=n("p",null,[s("transformers include two main data object: "),n("code",null,"Dictionary"),s(" and "),n("code",null,"Dataset"),s(".")],-1),d=n("h2",{id:"dictionary",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#dictionary","aria-hidden":"true"},"#"),s(" Dictionary")],-1),k={href:"https://huggingface.co/docs/datasets/v2.3.2/en/package_reference/main_classes#datasets.DatasetDict",target:"_blank",rel:"noopener noreferrer"},m=c(`<h3 id="get-from-hub" tabindex="-1"><a class="header-anchor" href="#get-from-hub" aria-hidden="true">#</a> get from hub</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> datasets <span class="token keyword">import</span> load_dataset
dataset_dict <span class="token operator">=</span> load_dataset<span class="token punctuation">(</span><span class="token string">&quot;rotten_tomatoes&quot;</span><span class="token punctuation">)</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
DatasetDict({
    train: Dataset({
        features: [&#39;text&#39;, &#39;label&#39;],
        num_rows: 8530
    })
    validation: Dataset({
        features: [&#39;text&#39;, &#39;label&#39;],
        num_rows: 1066
    })
    test: Dataset({
        features: [&#39;text&#39;, &#39;label&#39;],
        num_rows: 1066
    })
})
&quot;&quot;&quot;</span>
dataset <span class="token operator">=</span> load_dataset<span class="token punctuation">(</span><span class="token string">&quot;rotten_tomatoes&quot;</span><span class="token punctuation">,</span> split<span class="token operator">=</span><span class="token string">&quot;train&quot;</span><span class="token punctuation">)</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
Dataset({
    features: [&#39;text&#39;, &#39;label&#39;],
    num_rows: 8530
})
&quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="get-from-dataset" tabindex="-1"><a class="header-anchor" href="#get-from-dataset" aria-hidden="true">#</a> get from Dataset</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>dataset<span class="token punctuation">.</span>train_test_split<span class="token punctuation">(</span>test_size<span class="token operator">=</span><span class="token number">0.2</span><span class="token punctuation">,</span> stratify_by_column<span class="token operator">=</span><span class="token string">&quot;label&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="dataset" tabindex="-1"><a class="header-anchor" href="#dataset" aria-hidden="true">#</a> Dataset</h2><p>The base class Dataset implements a Dataset backed by an Apache Arrow table.</p><p>一个<code>Dataset</code>对象, 既可以看做是一个list, 也可以看做是dict</p><h3 id="list" tabindex="-1"><a class="header-anchor" href="#list" aria-hidden="true">#</a> list</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">## Get the first row in the dataset</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> dataset<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
<span class="token punctuation">{</span><span class="token string">&#39;label&#39;</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
 <span class="token string">&#39;text&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;the rock is destined to be the 21st century\\&#39;s ...&#39;</span><span class="token punctuation">}</span>
dataset<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">&quot;text&quot;</span><span class="token punctuation">]</span>
<span class="token string">&#39;the rock is destined to be the 21st century\\&#39;s ...&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>是使用<code>slice</code>方式取数时, 结果和普通list不同, 应该是重写了list的方法</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>dataset<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">:</span><span class="token number">6</span><span class="token punctuation">]</span>
<span class="token punctuation">{</span><span class="token string">&#39;label&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
 <span class="token string">&#39;text&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;if you sometimes like...&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;emerges as something rare , an...&quot;</span><span class="token punctuation">,</span>
  &#39;the film provides some great<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dict" tabindex="-1"><a class="header-anchor" href="#dict" aria-hidden="true">#</a> dict</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>dataset<span class="token punctuation">[</span><span class="token string">&quot;text&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token string">&#39;the rock is destined to be the 21st...&#39;</span><span class="token punctuation">,</span>
 <span class="token string">&#39;the gorgeously elaborate continuation...&#39;</span><span class="token punctuation">,</span>
 <span class="token string">&#39;effective but too-tepid biopic...&#39;</span><span class="token punctuation">,</span>
 <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">,</span>
 &#39;things really get weird <span class="token punctuation">,</span> though <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="二者对比" tabindex="-1"><a class="header-anchor" href="#二者对比" aria-hidden="true">#</a> 二者对比</h3><p>先按list取要比先按dict取效率高</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">with</span> Timer<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
   dataset<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">&#39;text&#39;</span><span class="token punctuation">]</span>
<span class="token comment">## Elapsed time: 0.0031 seconds</span>

<span class="token keyword">with</span> Timer<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
  dataset<span class="token punctuation">[</span><span class="token string">&quot;text&quot;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
<span class="token comment">## Elapsed time: 0.0094 seconds</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="tokenize" tabindex="-1"><a class="header-anchor" href="#tokenize" aria-hidden="true">#</a> tokenize</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> transformers <span class="token keyword">import</span> AutoTokenizer
<span class="token keyword">from</span> datasets <span class="token keyword">import</span> load_dataset

tokenizer <span class="token operator">=</span> AutoTokenizer<span class="token punctuation">.</span>from_pretrained<span class="token punctuation">(</span><span class="token string">&quot;bert-base-uncased&quot;</span><span class="token punctuation">)</span>
dataset <span class="token operator">=</span> load_dataset<span class="token punctuation">(</span><span class="token string">&quot;rotten_tomatoes&quot;</span><span class="token punctuation">,</span> split<span class="token operator">=</span><span class="token string">&quot;train&quot;</span><span class="token punctuation">)</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
Dataset({
    features: [&#39;text&#39;, &#39;label&#39;],
    num_rows: 8530
})
&quot;&quot;&quot;</span>

<span class="token comment">## tokenizer(dataset[0][&quot;text&quot;])  # 处理一个数据</span>
<span class="token comment">## {&#39;input_ids&#39;: [101, 1103, 2067, 1110, 17348...],</span>
<span class="token comment">##  &#39;token_type_ids&#39;: [0, 0, 0, 0, 0, 0...],</span>
<span class="token comment">##  &#39;attention_mask&#39;: [1, 1, 1, 1, 1, 1, 1...]}</span>

dataset <span class="token operator">=</span> dataset<span class="token punctuation">.</span><span class="token builtin">map</span><span class="token punctuation">(</span><span class="token keyword">lambda</span> example<span class="token punctuation">:</span> tokenizer<span class="token punctuation">(</span>example<span class="token punctuation">[</span><span class="token string">&quot;text&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> batched<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>  <span class="token comment"># 进行了特殊处理, 直接是增加了features, 而不是仅仅在&quot;text&quot;中替换</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
Dataset({
    features: [&#39;text&#39;, &#39;label&#39;, &#39;input_ids&#39;, &#39;token_type_ids&#39;, &#39;attention_mask&#39;],
    num_rows: 8530
})
&quot;&quot;&quot;</span>

dataset<span class="token punctuation">.</span>set_format<span class="token punctuation">(</span><span class="token builtin">type</span><span class="token operator">=</span><span class="token string">&quot;torch&quot;</span><span class="token punctuation">,</span> columns<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&quot;input_ids&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;token_type_ids&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;attention_mask&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;label&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment"># 将相应字段设置为tensor</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
Dataset({
    features: [&#39;text&#39;, &#39;label&#39;, &#39;input_ids&#39;, &#39;token_type_ids&#39;, &#39;attention_mask&#39;],
    num_rows: 8530
})
&quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="evaluate" tabindex="-1"><a class="header-anchor" href="#evaluate" aria-hidden="true">#</a> evaluate</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> datasets <span class="token keyword">import</span> list_metrics<span class="token punctuation">,</span> load_metric
metrics_list <span class="token operator">=</span> list_metrics<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">## [&#39;accuracy&#39;, &#39;bertscore&#39;, &#39;bleu&#39;, &#39;bleurt&#39;, &#39;cer&#39;]</span>
metric <span class="token operator">=</span> load_metric<span class="token punctuation">(</span><span class="token string">&#39;glue&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;mrpc&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>metric<span class="token punctuation">.</span>inputs_description<span class="token punctuation">)</span>  <span class="token comment"># 查看说明</span>
model_predictions <span class="token operator">=</span> model<span class="token punctuation">(</span>model_inputs<span class="token punctuation">)</span>
final_score <span class="token operator">=</span> metric<span class="token punctuation">.</span>compute<span class="token punctuation">(</span>predictions<span class="token operator">=</span>model_predictions<span class="token punctuation">,</span> references<span class="token operator">=</span>gold_references<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="pytorch" tabindex="-1"><a class="header-anchor" href="#pytorch" aria-hidden="true">#</a> pytorch</h2><p>Contrary to datasets.Dataset.set_format(), with_format returns a new Dataset object.</p><p>将PyTorch DataLoader 和 Hugging Face Dataset结合使用</p><p>datasets return regular python objects: integers, floats, strings, lists, etc.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> datasets <span class="token keyword">import</span> load_dataset
<span class="token keyword">from</span> transformers <span class="token keyword">import</span> AutoTokenizer
tokenizer <span class="token operator">=</span> AutoTokenizer<span class="token punctuation">.</span>from_pretrained<span class="token punctuation">(</span><span class="token string">&quot;bert-base-cased&quot;</span><span class="token punctuation">)</span>
ds <span class="token operator">=</span> ds<span class="token punctuation">.</span><span class="token builtin">map</span><span class="token punctuation">(</span><span class="token keyword">lambda</span> x<span class="token punctuation">:</span> tokenizer<span class="token punctuation">(</span>x<span class="token punctuation">[</span><span class="token string">&quot;text&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> truncation<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> padding<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span><span class="token punctuation">,</span> batched<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
ds<span class="token punctuation">.</span>set_format<span class="token punctuation">(</span><span class="token builtin">type</span><span class="token operator">=</span><span class="token string">&quot;numpy&quot;</span><span class="token punctuation">,</span> columns<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&#39;input_ids&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;token_type_ids&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;attention_mask&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;label&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
ds<span class="token punctuation">[</span><span class="token string">&quot;train&quot;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token builtin">format</span>
<span class="token comment">## {&#39;columns&#39;: [&#39;input_ids&#39;, &#39;token_type_ids&#39;, &#39;attention_mask&#39;, &#39;label&#39;],</span>
<span class="token comment">##  &#39;format_kwargs&#39;: {},</span>
<span class="token comment">##  &#39;output_all_columns&#39;: False,</span>
<span class="token comment">##  &#39;type&#39;: &#39;numpy&#39;}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> datasets <span class="token keyword">import</span> load_dataset
<span class="token keyword">from</span> transformers <span class="token keyword">import</span> AutoTokenizer
ds <span class="token operator">=</span> load_dataset<span class="token punctuation">(</span><span class="token string">&quot;rotten_tomatoes&quot;</span><span class="token punctuation">,</span> split<span class="token operator">=</span><span class="token string">&quot;validation&quot;</span><span class="token punctuation">)</span>
tokenizer <span class="token operator">=</span> AutoTokenizer<span class="token punctuation">.</span>from_pretrained<span class="token punctuation">(</span><span class="token string">&quot;bert-base-cased&quot;</span><span class="token punctuation">)</span>
ds <span class="token operator">=</span> ds<span class="token punctuation">.</span><span class="token builtin">map</span><span class="token punctuation">(</span><span class="token keyword">lambda</span> x<span class="token punctuation">:</span> tokenizer<span class="token punctuation">(</span>x<span class="token punctuation">[</span><span class="token string">&#39;text&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> truncation<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> padding<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span><span class="token punctuation">,</span> batched<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
ds<span class="token punctuation">.</span><span class="token builtin">format</span>
<span class="token comment">## {&#39;columns&#39;: [&#39;text&#39;, &#39;label&#39;, &#39;input_ids&#39;, &#39;token_type_ids&#39;, &#39;attention_mask&#39;],</span>
<span class="token comment">##  &#39;format_kwargs&#39;: {},</span>
<span class="token comment">##  &#39;output_all_columns&#39;: False,</span>
<span class="token comment">##  &#39;type&#39;: None}</span>
ds <span class="token operator">=</span> ds<span class="token punctuation">.</span>with_format<span class="token punctuation">(</span><span class="token builtin">type</span><span class="token operator">=</span><span class="token string">&#39;tensorflow&#39;</span><span class="token punctuation">,</span> columns<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&#39;input_ids&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;token_type_ids&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;attention_mask&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;label&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
ds<span class="token punctuation">.</span><span class="token builtin">format</span>
<span class="token comment">## {&#39;columns&#39;: [&#39;input_ids&#39;, &#39;token_type_ids&#39;, &#39;attention_mask&#39;, &#39;label&#39;],</span>
<span class="token comment">##  &#39;format_kwargs&#39;: {},</span>
<span class="token comment">##  &#39;output_all_columns&#39;: False,</span>
<span class="token comment">##  &#39;type&#39;: &#39;tensorflow&#39;}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考: https://huggingface.co/docs/datasets/index https://huggingface.co/docs/datasets/access https://huggingface.co/docs/datasets/use_dataset https://huggingface.co/docs/datasets/use_with_pytorch</p>`,27);function v(b,h){const a=e("ExternalLinkIcon");return o(),p("div",null,[u,r,d,n("p",null,[n("a",k,[s("Dictionary"),i(a)]),s(" with split names as keys (‘train’, ‘test’ for example), and Dataset objects as values.")]),m])}const y=t(l,[["render",v],["__file","transformers_datasets.html.vue"]]);export{y as default};
