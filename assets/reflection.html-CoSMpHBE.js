import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as e}from"./app-9tftCahk.js";const t={},p=e(`<h1 id="reflection" tabindex="-1"><a class="header-anchor" href="#reflection" aria-hidden="true">#</a> reflection</h1><h2 id="get-instance-object" tabindex="-1"><a class="header-anchor" href="#get-instance-object" aria-hidden="true">#</a> get instance object</h2><p>in definition, we can get instance object by <code>self</code></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">test</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="get-class-object" tabindex="-1"><a class="header-anchor" href="#get-class-object" aria-hidden="true">#</a> get class object</h2><p>commonly, we can get instance&#39;s class object by <code>__class__</code> in <code>@classmethod</code>, we cat get it by <code>cls</code>. and <code>cls</code> equals <code>__class__</code></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">test</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>__class__<span class="token punctuation">)</span>

    <span class="token decorator annotation punctuation">@classmethod</span>
    <span class="token keyword">def</span> <span class="token function">func</span><span class="token punctuation">(</span>cls<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>cls<span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>__class__<span class="token punctuation">)</span>
a <span class="token operator">=</span> test<span class="token punctuation">(</span><span class="token punctuation">)</span>
a<span class="token punctuation">.</span>__class__
a<span class="token punctuation">.</span>func<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过字符串操作对象的属性或方法(注意模块也是对象,所以也可以通过字符串操作模块)</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Teacher</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>name<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>name <span class="token operator">=</span> name


teacher <span class="token operator">=</span> Teacher<span class="token punctuation">(</span><span class="token string">&#39;wang&#39;</span><span class="token punctuation">)</span>

<span class="token comment">## hasattr(object,&#39;attrName&#39;) 判断instance中是否包含某个属性</span>
<span class="token builtin">hasattr</span><span class="token punctuation">(</span>teacher<span class="token punctuation">,</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">)</span>

<span class="token comment">## getattr(object,&#39;attrName&#39;,default=None) 获得实例中的属性</span>
<span class="token builtin">getattr</span><span class="token punctuation">(</span>teacher<span class="token punctuation">,</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span><span class="token boolean">None</span><span class="token punctuation">)</span>

<span class="token comment">## setattr(object,&#39;attrName&#39;,value) 给实例设置属性</span>
<span class="token builtin">setattr</span><span class="token punctuation">(</span>teacher<span class="token punctuation">,</span><span class="token string">&#39;age&#39;</span><span class="token punctuation">,</span><span class="token number">18</span><span class="token punctuation">)</span>

<span class="token comment">## delattr(object,&#39;attrName&#39;) 删除实例的属性</span>
<span class="token builtin">delattr</span><span class="token punctuation">(</span>teacher<span class="token punctuation">,</span><span class="token string">&#39;age&#39;</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>应用:</p><ol><li><p><code>flask</code>中通过传入<code>url</code>来调取具体的方法,就是用的反射</p></li><li><p>add or delete the method, according to the init parameters.</p></li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">test</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>a<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> a <span class="token operator">==</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
            <span class="token comment"># delattr(self.class, &quot;a&quot;)</span>
            <span class="token keyword">del</span> self<span class="token punctuation">.</span>a

    <span class="token keyword">def</span> <span class="token function">a</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span>

x <span class="token operator">=</span> test<span class="token punctuation">(</span>a<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span>
<span class="token builtin">hasattr</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span>
<span class="token builtin">delattr</span><span class="token punctuation">(</span>x<span class="token punctuation">.</span>__class__<span class="token punctuation">,</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),c=[p];function o(i,l){return s(),a("div",null,c)}const r=n(t,[["render",o],["__file","reflection.html.vue"]]);export{r as default};
