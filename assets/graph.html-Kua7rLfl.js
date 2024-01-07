import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-SnI5rGHA.js";const e={},p=t(`<h1 id="graph" tabindex="-1"><a class="header-anchor" href="#graph" aria-hidden="true">#</a> graph</h1><p>retain_graph (bool, optional) – If False, the graph used to compute the grad will be freed. Note that in nearly all cases setting this option to True is not needed and often can be worked around in a much more efficient way. Defaults to the value of create_graph.</p><p>如果设置为False, graph会被释放.在多数情况下不需要设置为true, 因为有更高效的方式. 创建一个graph: input: x y = x**2 z = y*4 output1: z.mean() output2: z.sum()</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> torch
x <span class="token operator">=</span> torch<span class="token punctuation">.</span>randn<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">,</span>dtype<span class="token operator">=</span>torch<span class="token punctuation">.</span>float32<span class="token punctuation">,</span>requires_grad<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
y <span class="token operator">=</span> x <span class="token operator">**</span> <span class="token number">2</span>
z <span class="token operator">=</span> y <span class="token operator">*</span> <span class="token number">4</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>z<span class="token punctuation">)</span>
loss1 <span class="token operator">=</span> z<span class="token punctuation">.</span>mean<span class="token punctuation">(</span><span class="token punctuation">)</span>
loss2 <span class="token operator">=</span> z<span class="token punctuation">.</span><span class="token builtin">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>loss1<span class="token punctuation">,</span>loss2<span class="token punctuation">)</span>
loss1<span class="token punctuation">.</span>backward<span class="token punctuation">(</span><span class="token punctuation">)</span>    <span class="token comment"># 这个代码执行正常，执行完中间变量都free了，所以下一个出现了问题</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>loss1<span class="token punctuation">,</span>loss2<span class="token punctuation">)</span>
loss2<span class="token punctuation">.</span>backward<span class="token punctuation">(</span><span class="token punctuation">)</span>    <span class="token comment"># 这时会引发错误</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>程序正常执行到第12行，所有的变量正常保存。但是在第13行报错： RuntimeError: Trying to backward through the graph a second time, but the buffers have already been freed. Specify retain_graph=True when calling backward the first time. 因为第一个<code>backward()</code>计算完后, graph已经被释放了.</p><p>参考: https://blog.csdn.net/qq_39861441/article/details/104129368</p>`,6),o=[p];function c(l,i){return s(),a("div",null,o)}const d=n(e,[["render",c],["__file","graph.html.vue"]]);export{d as default};
