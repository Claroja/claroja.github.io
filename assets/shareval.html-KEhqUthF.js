import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-YE2Hltoy.js";const p={},e=t(`<h1 id="shareval" tabindex="-1"><a class="header-anchor" href="#shareval" aria-hidden="true">#</a> shareval</h1><h2 id="_1-共享数值型" tabindex="-1"><a class="header-anchor" href="#_1-共享数值型" aria-hidden="true">#</a> 1.共享数值型</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> multiprocessing <span class="token keyword">import</span> Process<span class="token punctuation">,</span> Value
<span class="token keyword">def</span>  <span class="token function">func</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">:</span>  
    num<span class="token punctuation">.</span>value<span class="token operator">=</span><span class="token number">11</span>  <span class="token comment">#子进程改变数值的值，主进程跟着改变  </span>
  
<span class="token keyword">if</span>  __name__<span class="token operator">==</span><span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>  
    num<span class="token operator">=</span>multiprocessing<span class="token punctuation">.</span>Value<span class="token punctuation">(</span><span class="token string">&quot;d&quot;</span><span class="token punctuation">,</span><span class="token number">10.0</span><span class="token punctuation">)</span> <span class="token comment">#在内存中开辟共享空间，所以要指定类型&quot;d&quot;</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>num<span class="token punctuation">.</span>value<span class="token punctuation">)</span>  
    p<span class="token operator">=</span>multiprocessing<span class="token punctuation">.</span>Process<span class="token punctuation">(</span>target<span class="token operator">=</span>func<span class="token punctuation">,</span>args<span class="token operator">=</span><span class="token punctuation">(</span>num<span class="token punctuation">,</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  
    p<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>  
    p<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span>  
    <span class="token keyword">print</span><span class="token punctuation">(</span>num<span class="token punctuation">.</span>value<span class="token punctuation">)</span>  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-共享数组型" tabindex="-1"><a class="header-anchor" href="#_2-共享数组型" aria-hidden="true">#</a> 2.共享数组型</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> multiprocessing  
  
<span class="token keyword">def</span>  <span class="token function">func</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">:</span>  
    num<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token keyword">if</span>  __name__<span class="token operator">==</span><span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>  
    num<span class="token operator">=</span>multiprocessing<span class="token punctuation">.</span>Array<span class="token punctuation">(</span><span class="token string">&quot;i&quot;</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>num<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  
    p<span class="token operator">=</span>multiprocessing<span class="token punctuation">.</span>Process<span class="token punctuation">(</span>target<span class="token operator">=</span>func<span class="token punctuation">,</span>args<span class="token operator">=</span><span class="token punctuation">(</span>num<span class="token punctuation">,</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  
    p<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>   
    p<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span>  
    <span class="token keyword">print</span><span class="token punctuation">(</span>num<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-共享字典" tabindex="-1"><a class="header-anchor" href="#_3-共享字典" aria-hidden="true">#</a> 3.共享字典</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> multiprocessing
  
<span class="token keyword">def</span> <span class="token function">func</span><span class="token punctuation">(</span>mydict<span class="token punctuation">)</span><span class="token punctuation">:</span>  
    mydict<span class="token punctuation">[</span><span class="token string">&quot;index1&quot;</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;aaaaaa&quot;</span>  

<span class="token keyword">if</span> __name__<span class="token operator">==</span><span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>  
    mydict<span class="token operator">=</span>multiprocessing<span class="token punctuation">.</span>Manager<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token builtin">dict</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
    p<span class="token operator">=</span>multiprocessing<span class="token punctuation">.</span>Process<span class="token punctuation">(</span>target<span class="token operator">=</span>func<span class="token punctuation">,</span>args<span class="token operator">=</span><span class="token punctuation">(</span>mydict<span class="token punctuation">,</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  
    p<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>  
    p<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span>  
    <span class="token keyword">print</span><span class="token punctuation">(</span>mydict<span class="token punctuation">)</span>  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),o=[e];function c(u,i){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","shareval.html.vue"]]);export{k as default};
