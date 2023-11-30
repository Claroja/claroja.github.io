import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e}from"./app-0JgdiRQ-.js";const t={},p=e(`<h1 id="interface" tabindex="-1"><a class="header-anchor" href="#interface" aria-hidden="true">#</a> interface</h1><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">## 接口,所有方法都是抽象方法的抽象类</span>
<span class="token keyword">from</span> abc <span class="token keyword">import</span> abstractmethod<span class="token punctuation">,</span> ABCMeta
<span class="token keyword">class</span> <span class="token class-name">Person</span><span class="token punctuation">(</span>metaclass <span class="token operator">=</span> ABCMeta<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token decorator annotation punctuation">@abstractmethod</span>
    <span class="token keyword">def</span> <span class="token function">say</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">pass</span>
    <span class="token decorator annotation punctuation">@abstractmethod</span>
    <span class="token keyword">def</span> <span class="token function">eat</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">pass</span>
    <span class="token decorator annotation punctuation">@property</span>  <span class="token comment"># 定义接口属性</span>
    <span class="token decorator annotation punctuation">@abstractmethod</span>
    <span class="token keyword">def</span> <span class="token function">age</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">pass</span>


<span class="token keyword">class</span> <span class="token class-name">Teacher</span><span class="token punctuation">(</span>Person<span class="token punctuation">)</span><span class="token punctuation">:</span>
    age <span class="token operator">=</span> <span class="token number">18</span>
    <span class="token keyword">def</span> <span class="token function">say</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;teacher&quot;</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">eat</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;shitang&quot;</span><span class="token punctuation">)</span>

teacher <span class="token operator">=</span> Teacher<span class="token punctuation">(</span><span class="token punctuation">)</span>
teacher<span class="token punctuation">.</span>say<span class="token punctuation">(</span><span class="token punctuation">)</span>
teacher<span class="token punctuation">.</span>eat<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>teacher<span class="token punctuation">.</span>age<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),c=[p];function o(i,l){return s(),a("div",null,c)}const d=n(t,[["render",o],["__file","interface.html.vue"]]);export{d as default};
