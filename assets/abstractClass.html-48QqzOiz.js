import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-yeyEmHfz.js";const e={},c=t(`<h1 id="abstractclass" tabindex="-1"><a class="header-anchor" href="#abstractclass" aria-hidden="true">#</a> abstractClass</h1><p>通过<code>abc</code>模块来创建,类似于<code>java</code>中的<code>abstract class</code></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> abc
<span class="token keyword">class</span> <span class="token class-name">Animal</span><span class="token punctuation">(</span>metaclass<span class="token operator">=</span>abc<span class="token punctuation">.</span>ABCMeta<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token decorator annotation punctuation">@abc<span class="token punctuation">.</span>abstractmethod</span>
    <span class="token keyword">def</span> <span class="token function">say</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">pass</span>
    <span class="token keyword">def</span> <span class="token function">eat</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;eat food&quot;</span><span class="token punctuation">)</span>

<span class="token comment">## a = Animal() # 抽象类不能被实例化</span>

<span class="token keyword">class</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span>Animal<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">say</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;dog&quot;</span><span class="token punctuation">)</span>

dog <span class="token operator">=</span> Dog<span class="token punctuation">(</span><span class="token punctuation">)</span>
dog<span class="token punctuation">.</span>say<span class="token punctuation">(</span><span class="token punctuation">)</span>
dog<span class="token punctuation">.</span>eat<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),p=[c];function o(l,i){return s(),a("div",null,p)}const r=n(e,[["render",o],["__file","abstractClass.html.vue"]]);export{r as default};
