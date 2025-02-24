import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as p,o,c,a as n,b as a,d as e,e as u}from"./app-A10JnHE0.js";const i={},l=n("h1",{id:"evaluate",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#evaluate","aria-hidden":"true"},"#"),a(" evaluate")],-1),r={href:"https://huggingface.co/docs/datasets/how_to_metrics",target:"_blank",rel:"noopener noreferrer"},d={href:"https://huggingface.co/docs/evaluate/a_quick_tour",target:"_blank",rel:"noopener noreferrer"},k=u(`<h2 id="evalution" tabindex="-1"><a class="header-anchor" href="#evalution" aria-hidden="true">#</a> evalution</h2><p>All evalution modules come with a range of useful attributes that help to use a module stored in a <code>EvaluationModuleInfo</code> object.</p><table><thead><tr><th>Attribute</th><th>Description</th></tr></thead><tbody><tr><td>description</td><td>A short description of the evaluation module.</td></tr><tr><td>citation</td><td>A BibTex string for citation when available.</td></tr><tr><td>features</td><td>A Features object defining the input format.</td></tr><tr><td>inputs_description</td><td>This is equivalent to the modules docstring.</td></tr><tr><td>homepage</td><td>The homepage of the module.</td></tr><tr><td>license</td><td>The license of the module.</td></tr><tr><td>codebase_urls</td><td>Link to the code behind the module.</td></tr><tr><td>reference_urls</td><td>Additional reference URLs.</td></tr></tbody></table><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>accuracy <span class="token operator">=</span> evaluate<span class="token punctuation">.</span>load<span class="token punctuation">(</span><span class="token string">&quot;accuracy&quot;</span><span class="token punctuation">)</span>
accuracy<span class="token punctuation">.</span>description
<span class="token comment">## Accuracy is the proportion of correct predictions among the total number of cases processed. It can be computed with:</span>
<span class="token comment">## Accuracy = (TP + TN) / (TP + TN + FP + FN)</span>
<span class="token comment">##  Where:</span>
<span class="token comment">## TP: True positive</span>
<span class="token comment">## TN: True negative</span>
<span class="token comment">## FP: False positive</span>
<span class="token comment">## FN: False negative</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Before we can apply a metric or other evaluation module to a use-case, we need to know what the <code>input format</code> of the metric is:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>accuracy<span class="token punctuation">.</span>features
<span class="token punctuation">{</span>
    <span class="token string">&#39;predictions&#39;</span><span class="token punctuation">:</span> Value<span class="token punctuation">(</span>dtype<span class="token operator">=</span><span class="token string">&#39;int32&#39;</span><span class="token punctuation">,</span> <span class="token builtin">id</span><span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string">&#39;references&#39;</span><span class="token punctuation">:</span> Value<span class="token punctuation">(</span>dtype<span class="token operator">=</span><span class="token string">&#39;int32&#39;</span><span class="token punctuation">,</span> <span class="token builtin">id</span><span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="compute" tabindex="-1"><a class="header-anchor" href="#compute" aria-hidden="true">#</a> compute()</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>accuracy<span class="token punctuation">.</span>compute<span class="token punctuation">(</span>references<span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> predictions<span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">## {&#39;accuracy&#39;: 0.5}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="add" tabindex="-1"><a class="header-anchor" href="#add" aria-hidden="true">#</a> add()</h2><p>when for-loop, you could store the predictions in a list and at the end pass them to compute()</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">for</span> ref<span class="token punctuation">,</span> pred <span class="token keyword">in</span> <span class="token builtin">zip</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    accuracy<span class="token punctuation">.</span>add<span class="token punctuation">(</span>references<span class="token operator">=</span>ref<span class="token punctuation">,</span> predictions<span class="token operator">=</span>pred<span class="token punctuation">)</span>
accuracy<span class="token punctuation">.</span>compute<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">## {&#39;accuracy&#39;: 0.5}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="add-batch" tabindex="-1"><a class="header-anchor" href="#add-batch" aria-hidden="true">#</a> add_batch()</h2><p>When getting predictions and references in batches you can use <code>add_batch()</code></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">for</span> refs<span class="token punctuation">,</span> preds <span class="token keyword">in</span> <span class="token builtin">zip</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    accuracy<span class="token punctuation">.</span>add_batch<span class="token punctuation">(</span>references<span class="token operator">=</span>refs<span class="token punctuation">,</span> predictions<span class="token operator">=</span>preds<span class="token punctuation">)</span>
accuracy<span class="token punctuation">.</span>compute<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span><span class="token string">&#39;accuracy&#39;</span><span class="token punctuation">:</span> <span class="token number">0.5</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>refs: https://huggingface.co/evaluate-metric https://huggingface.co/docs/evaluate/a_quick_tour https://huggingface.co/docs/evaluate/index</p>`,15);function m(h,v){const s=p("ExternalLinkIcon");return o(),c("div",null,[l,n("p",null,[n("a",r,[a("metrics"),e(s)]),a(" is de")]),n("p",null,[n("a",d,[a("evaluate"),e(s)]),a(" need tensorflow dependencies and GPU")]),k])}const g=t(i,[["render",m],["__file","evaluate.html.vue"]]);export{g as default};
