import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as s,d as t}from"./app-j3zK2x6_.js";const p={},e=t(`<h1 id="max" tabindex="-1"><a class="header-anchor" href="#max" aria-hidden="true">#</a> max</h1><h2 id="torch-max" tabindex="-1"><a class="header-anchor" href="#torch-max" aria-hidden="true">#</a> torch.max()</h2><p>在分类问题中, 通常需要使用<code>torch.max()</code>函数对<code>softmax()</code>函数的输出值进行操作, 求出预测值的索引, 然后与标签进行比对.</p><h3 id="输入" tabindex="-1"><a class="header-anchor" href="#输入" aria-hidden="true">#</a> 输入</h3><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>input</td><td>softmax函数输出的一个tensor</td></tr><tr><td>dim</td><td>是max函数索引的维度: 0是每列的最大值，1是每行的最大值</td></tr></tbody></table><h3 id="输出" tabindex="-1"><a class="header-anchor" href="#输出" aria-hidden="true">#</a> 输出</h3><p>函数返回两个tensor, 第一个tensor是每行的最大值, 第二个tensor是每行最大值的索引. 在多分类任务中, 我们不需要知道各个类别的预测概率, 所以返回值的第一个tensor没有太大意义.我们关心的是第二个tensor.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> torch
a <span class="token operator">=</span> torch<span class="token punctuation">.</span>tensor<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
torch<span class="token punctuation">.</span><span class="token builtin">max</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>  <span class="token comment"># 按列取最大值</span>
torch<span class="token punctuation">.</span><span class="token builtin">max</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>  <span class="token comment"># 按行取最大值</span>
torch<span class="token punctuation">.</span><span class="token builtin">max</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>numpy<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 取每行最终的预测结果</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="应用" tabindex="-1"><a class="header-anchor" href="#应用" aria-hidden="true">#</a> 应用</h3><p>计算准确率</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>pred_y <span class="token operator">=</span> torch<span class="token punctuation">.</span><span class="token builtin">max</span><span class="token punctuation">(</span>predict<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>numpy<span class="token punctuation">(</span><span class="token punctuation">)</span>
label_y <span class="token operator">=</span> torch<span class="token punctuation">.</span><span class="token builtin">max</span><span class="token punctuation">(</span>label<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>numpy<span class="token punctuation">(</span><span class="token punctuation">)</span>
accuracy <span class="token operator">=</span> <span class="token punctuation">(</span>pred_y <span class="token operator">==</span> label_y<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token builtin">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token builtin">len</span><span class="token punctuation">(</span>label_y<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),o=[e];function c(u,l){return a(),s("div",null,o)}const k=n(p,[["render",c],["__file","torch_max.html.vue"]]);export{k as default};
