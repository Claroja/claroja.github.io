import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as t,c as n,a,b as e,e as l}from"./app-MTzDpLgJ.js";const r={},i=a("h1",{id:"linear",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#linear","aria-hidden":"true"},"#"),e(" linear")],-1),p=a("p",null,[a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"y"),a("mo",null,"="),a("mi",null,"x"),a("msup",null,[a("mi",null,"A"),a("mi",null,"T")]),a("mo",null,"+"),a("mi",null,"b")]),a("annotation",{encoding:"application/x-tex"},"y=xA^T+b")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.625em","vertical-align":"-0.1944em"}}),a("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),a("span",{class:"mrel"},"="),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.9247em","vertical-align":"-0.0833em"}}),a("span",{class:"mord mathnormal"},"x"),a("span",{class:"mord"},[a("span",{class:"mord mathnormal"},"A"),a("span",{class:"msupsub"},[a("span",{class:"vlist-t"},[a("span",{class:"vlist-r"},[a("span",{class:"vlist",style:{height:"0.8413em"}},[a("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[a("span",{class:"pstrut",style:{height:"2.7em"}}),a("span",{class:"sizing reset-size6 size3 mtight"},[a("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.13889em"}},"T")])])])])])])]),a("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),a("span",{class:"mbin"},"+"),a("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6944em"}}),a("span",{class:"mord mathnormal"},"b")])])])],-1),c=l(`<h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>in_features</td><td>输入特征的大小</td></tr><tr><td>out_features</td><td>输出特征的大小</td></tr><tr><td>bias</td><td>默认为True, 添加偏置</td></tr></tbody></table><h2 id="输入" tabindex="-1"><a class="header-anchor" href="#输入" aria-hidden="true">#</a> 输入</h2><table><thead><tr><th>输入</th><th>描述</th></tr></thead><tbody><tr><td>Input</td><td>shape为(batch_size,in_features)</td></tr></tbody></table><h2 id="输出" tabindex="-1"><a class="header-anchor" href="#输出" aria-hidden="true">#</a> 输出</h2><table><thead><tr><th>输出</th><th>描述</th></tr></thead><tbody><tr><td>output</td><td>shape为(batch_size,out_features)</td></tr></tbody></table><h2 id="样例" tabindex="-1"><a class="header-anchor" href="#样例" aria-hidden="true">#</a> 样例</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>m <span class="token operator">=</span> nn<span class="token punctuation">.</span>Linear<span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span>
<span class="token builtin">input</span> <span class="token operator">=</span> torch<span class="token punctuation">.</span>randn<span class="token punctuation">(</span><span class="token number">128</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span>
output <span class="token operator">=</span> m<span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>output<span class="token punctuation">.</span>size<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">## torch.Size([128, 30])</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考: https://pytorch.org/docs/stable/generated/torch.nn.Linear.html?highlight=linear#torch.nn.Linear</p>`,9),o=[i,p,c];function h(d,u){return t(),n("div",null,o)}const g=s(r,[["render",h],["__file","linear.html.vue"]]);export{g as default};
