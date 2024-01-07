import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-SnI5rGHA.js";const e={},p=t(`<h1 id="delattr" tabindex="-1"><a class="header-anchor" href="#delattr" aria-hidden="true">#</a> delattr</h1><p>当对象成员删除时触发 作用: 可以限制成员对象的删除, 还可以删除不存在成员时, 防止误报 注意: <code>__delattr__()</code>方法中, 不能直接删除对象, 会触发递归</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>name <span class="token operator">=</span> name

    <span class="token keyword">def</span> <span class="token function">__delattr__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;del:{}&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span>


person <span class="token operator">=</span> Person<span class="token punctuation">(</span><span class="token string">&quot;wang&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">del</span> person<span class="token punctuation">.</span>name  <span class="token comment"># del:name</span>
<span class="token builtin">delattr</span><span class="token punctuation">(</span>person<span class="token punctuation">,</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># del:name</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),o=[p];function c(l,i){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","delattr.html.vue"]]);export{r as default};
