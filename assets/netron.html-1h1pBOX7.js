import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-YE2Hltoy.js";const e={},o=t(`<h1 id="netron" tabindex="-1"><a class="header-anchor" href="#netron" aria-hidden="true">#</a> netron</h1><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> torchvision<span class="token punctuation">.</span>models
<span class="token keyword">import</span> torch<span class="token punctuation">.</span>onnx
<span class="token keyword">import</span> netron

model <span class="token operator">=</span> torchvision<span class="token punctuation">.</span>models<span class="token punctuation">.</span>__dict__<span class="token punctuation">[</span><span class="token string">&quot;resnet101&quot;</span><span class="token punctuation">]</span><span class="token punctuation">(</span>pretrained<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>  <span class="token comment"># 获得预训练的resnet101</span>
x <span class="token operator">=</span> torch<span class="token punctuation">.</span>randn<span class="token punctuation">(</span><span class="token number">64</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">224</span><span class="token punctuation">,</span> <span class="token number">224</span><span class="token punctuation">,</span> requires_grad<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
<span class="token comment">## Export the model</span>
torch<span class="token punctuation">.</span>onnx<span class="token punctuation">.</span>export<span class="token punctuation">(</span>model<span class="token punctuation">,</span>               <span class="token comment"># model being run</span>
                  x<span class="token punctuation">,</span>                         <span class="token comment"># model input (or a tuple for multiple inputs)</span>
                  <span class="token string">&quot;super_resolution.onnx&quot;</span><span class="token punctuation">,</span>   <span class="token comment"># where to save the model (can be a file or file-like object)</span>
                  export_params<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span>        <span class="token comment"># store the trained parameter weights inside the model file</span>
                  opset_version<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">,</span>          <span class="token comment"># the ONNX version to export the model to</span>
                  do_constant_folding<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span>  <span class="token comment"># whether to execute constant folding for optimization</span>
                  input_names <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;input&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>   <span class="token comment"># the model&#39;s input names</span>
                  output_names <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;output&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment"># the model&#39;s output names</span>
                  dynamic_axes<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&#39;input&#39;</span> <span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token number">0</span> <span class="token punctuation">:</span> <span class="token string">&#39;batch_size&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>    <span class="token comment"># variable length axes</span>
                                <span class="token string">&#39;output&#39;</span> <span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token number">0</span> <span class="token punctuation">:</span> <span class="token string">&#39;batch_size&#39;</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

netron<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token string">&quot;./super_resolution.onnx&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>https://github.com/lutzroeder/netron</p>`,3),p=[o];function c(l,i){return s(),a("div",null,p)}const k=n(e,[["render",c],["__file","netron.html.vue"]]);export{k as default};
