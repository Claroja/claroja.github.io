import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o,c as p,a as n,b as s,d as c,e as i}from"./app-0JgdiRQ-.js";const r={},l=i(`<h1 id="postprocessing" tabindex="-1"><a class="header-anchor" href="#postprocessing" aria-hidden="true">#</a> postprocessing</h1><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> transformers <span class="token keyword">import</span> AutoModelForSequenceClassification
checkpoint <span class="token operator">=</span> <span class="token string">&quot;distilbert-base-uncased-finetuned-sst-2-english&quot;</span>
model <span class="token operator">=</span> AutoModelForSequenceClassification<span class="token punctuation">.</span>from_pretrained<span class="token punctuation">(</span>checkpoint<span class="token punctuation">)</span>
outputs <span class="token operator">=</span> model<span class="token punctuation">(</span><span class="token operator">**</span>inputs<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>outputs<span class="token punctuation">.</span>logits<span class="token punctuation">)</span>
tensor<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1.5607</span><span class="token punctuation">,</span>  <span class="token number">1.6123</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span> <span class="token number">4.1692</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">3.3464</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span> grad_fn<span class="token operator">=</span><span class="token operator">&lt;</span>AddmmBackward<span class="token operator">&gt;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Our model predicted [-1.5607, 1.6123] for the first sentence and [ 4.1692, -3.3464] for the second one. Those are not <code>probabilities</code> but <code>logits</code>, the raw, unnormalized scores outputted by the last layer of the model. To be converted to probabilities, they need to go through a SoftMax layer.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> torch
predictions <span class="token operator">=</span> torch<span class="token punctuation">.</span>nn<span class="token punctuation">.</span>functional<span class="token punctuation">.</span>softmax<span class="token punctuation">(</span>outputs<span class="token punctuation">.</span>logits<span class="token punctuation">,</span> dim<span class="token operator">=</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>predictions<span class="token punctuation">)</span>
<span class="token comment">## tensor([[4.0195e-02, 9.5980e-01],</span>
<span class="token comment">##         [9.9946e-01, 5.4418e-04]], grad_fn=&lt;SoftmaxBackward&gt;)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now we can see that the model predicted [0.0402, 0.9598] for the first sentence and [0.9995, 0.0005] for the second one. These are recognizable probability scores. To get the labels corresponding to each position, we can inspect the <code>id2label</code> attribute of the model config</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>model<span class="token punctuation">.</span>config<span class="token punctuation">.</span>id2label
<span class="token comment">## {0: &#39;NEGATIVE&#39;, 1: &#39;POSITIVE&#39;}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,6),u={href:"https://huggingface.co/course/chapter2/2?fw=pt#postprocessing-the-output",target:"_blank",rel:"noopener noreferrer"};function d(k,m){const a=t("ExternalLinkIcon");return o(),p("div",null,[l,n("p",null,[s("refs: "),n("a",u,[s("Models"),c(a)])])])}const v=e(r,[["render",d],["__file","postprocessing.html.vue"]]);export{v as default};
