import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as a,a as t}from"./app-9tftCahk.js";const e={},o=t(`<h1 id="slots" tabindex="-1"><a class="header-anchor" href="#slots" aria-hidden="true">#</a> slots</h1><p>限制类的属性,只能在<code>__slots__</code>中选择</p><p>slots可以限制class实例添加的属性，如果实例中添加了非slots中不含有的属性，会报错，这样就可以限制动态语言，修改代码的行为 动态语言：可以在运行的过程中，修改代码;静态语言：编译时已经确定好代码，运行过程中不能修改</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Animal</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    __slots__ <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span>
a<span class="token operator">=</span>Animal<span class="token punctuation">(</span><span class="token punctuation">)</span>
a<span class="token punctuation">.</span>name<span class="token operator">=</span><span class="token string">&quot;cat&quot;</span>
a<span class="token punctuation">.</span>age<span class="token operator">=</span><span class="token number">20</span>
AttributeError<span class="token punctuation">:</span> Animal instance has no attribute <span class="token string">&#39;name&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),p=[o];function c(l,i){return n(),a("div",null,p)}const d=s(e,[["render",c],["__file","slots.html.vue"]]);export{d as default};
