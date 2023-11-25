import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,d as t}from"./app-j3zK2x6_.js";const e={},p=t(`<h1 id="setattr" tabindex="-1"><a class="header-anchor" href="#setattr" aria-hidden="true">#</a> <strong>setattr</strong></h1><p>当给对象成员进行赋值时(包括添加和修改), 比如<code>__init__()</code>中赋值, <code>object.attr</code>赋值, 或直接调用<code>setattr()</code>方法 作用: 可以限制和管理成员的添加和修改操作 参数: 1. self 2. 设置的成员名 3.设置的成员值 返回值: 无 注意: 使用用父类<code>object</code>来调用<code>__setattr__()</code>,来避免死循环</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>name <span class="token operator">=</span> name

    <span class="token keyword">def</span> <span class="token function">__setattr__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;setting:{},  with:{}&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token builtin">object</span><span class="token punctuation">.</span>__setattr__<span class="token punctuation">(</span>self<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">)</span>  <span class="token comment"># 因为子类重写父类方法，所以要返回父类该方法完成在__dict__的注册，父类的__setattr__本质上是完成了·self.__dict__[key] = value·</span>

person <span class="token operator">=</span> Person<span class="token punctuation">(</span><span class="token string">&quot;wang&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># setting:name,  with:wang, 直接使用\`__init__()\`来赋值也会触发</span>
person<span class="token punctuation">.</span>__dict__  <span class="token comment"># {&#39;name&#39;: &#39;wang&#39;}</span>

person<span class="token punctuation">.</span>age<span class="token operator">=</span><span class="token number">13</span>  <span class="token comment"># setting:age,  with:13, 直接赋值也会触发</span>
person<span class="token punctuation">.</span>__dict__  <span class="token comment"># {&#39;name&#39;: &#39;wang&#39;, &#39;age&#39;: 13}</span>

<span class="token builtin">setattr</span><span class="token punctuation">(</span>person<span class="token punctuation">,</span><span class="token string">&quot;gender&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;man&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># setting:gender,  with:man, 使用setarrt方法也会触发</span>
person<span class="token punctuation">.</span>__dict__  <span class="token comment"># {&#39;name&#39;: &#39;wang&#39;, &#39;age&#39;: 13, &#39;gender&#39;: &#39;man&#39;}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>应用:</p><ol><li>将字典转为类属性</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Foo</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>values <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token string">&#39;x&#39;</span><span class="token punctuation">:</span><span class="token string">&#39;wang&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;y&#39;</span><span class="token punctuation">:</span><span class="token string">&#39;wei&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">for</span> k<span class="token punctuation">,</span>v <span class="token keyword">in</span> self<span class="token punctuation">.</span>values<span class="token punctuation">.</span>items<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token builtin">setattr</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>k<span class="token punctuation">,</span>v<span class="token punctuation">)</span>
obj <span class="token operator">=</span> Foo<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>x<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),o=[p];function c(i,l){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","python___setattr__.html.vue"]]);export{r as default};
