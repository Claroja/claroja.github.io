import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e}from"./app-A10JnHE0.js";const t={},o=e(`<h1 id="class" tabindex="-1"><a class="header-anchor" href="#class" aria-hidden="true">#</a> class</h1><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Name</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token comment"># 大驼峰命名方法</span>
	class_prop<span class="token operator">=</span> <span class="token comment">#类属性</span>
	__private_class_prop<span class="token operator">=</span> <span class="token comment">#类私有属性</span>
	<span class="token keyword">def</span> <span class="token function">__int__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>arg1<span class="token punctuation">,</span>arg2<span class="token punctuation">)</span><span class="token punctuation">:</span><span class="token comment">#初始化实例对象</span>
		self<span class="token punctuation">.</span>instance_prop<span class="token operator">=</span> arg1<span class="token comment">#实例对象属性</span>
		self<span class="token punctuation">.</span>__private_instance_prop<span class="token operator">=</span> arg2 <span class="token comment">#实例对象私有属性</span>
	<span class="token keyword">def</span> <span class="token function">instance_func</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token comment">#实例独享方法</span>
	<span class="token keyword">def</span> <span class="token function">__private_instance_func</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token comment">#实例对象私有方法</span>
	<span class="token decorator annotation punctuation">@classmethod</span>
	<span class="token keyword">def</span> <span class="token function">func</span><span class="token punctuation">(</span>cls<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token comment">#类对象方法</span>
	<span class="token decorator annotation punctuation">@staticmethod</span>
    <span class="token keyword">def</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>类属性<code>class_prop</code></li></ol><ul><li>被所有实例所共有, 在内存中只有一个地址</li><li>如果如果实例，添加了类相同的属性名，则会优先调用实例的属性。</li></ul><ol start="2"><li>实例属性<code>instance_prop</code></li></ol><ul><li>每个实例各自拥有</li><li>在 <code>__init__()</code>方法里初始化</li></ul><ol start="3"><li>实例方法<code>instance_func</code></li></ol><ul><li>每个实例各自拥有</li></ul><ol start="4"><li><p>类方法<code>@classmethod</code> 类方法，所有的类的对象和实例所共有，第一个参数必须是类对象，一般用&quot;cls&quot;来表示.</p></li><li><p>静态方法 <code>@staticmethod</code> 静态方法和类与实例没有任何联系, 不需要指定第一个参数为<code>self</code>或<code>cls</code>, 就像普通的方法一样. 在python中用处比较少</p></li><li><p>下划线的作用 <code>name</code>:公有 <code>_name</code>:模块私有,import * <code>__name</code>:类私有,模块私有,import *;(其实可以用变成了_class__name) <code>__name__</code>:Python系统方法 <code>name_</code>:避免冲突</p></li></ol>`,9),c=[o];function p(l,i){return s(),a("div",null,c)}const r=n(t,[["render",p],["__file","class.html.vue"]]);export{r as default};
