import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e}from"./app-YE2Hltoy.js";const p={},t=e(`<h1 id="new" tabindex="-1"><a class="header-anchor" href="#new" aria-hidden="true">#</a> new</h1><p>当我们调用<code>__init__()</code>方法来来初始化对象时:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> age<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>age <span class="token operator">=</span> age
a <span class="token operator">=</span> Person<span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>
a<span class="token punctuation">.</span>age <span class="token comment"># 100</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其实已经隐含了调用<code>__new__()</code>方法, 完整的写法是这样</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__new__</span><span class="token punctuation">(</span>cls<span class="token punctuation">,</span> <span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>__new__<span class="token punctuation">(</span>cls<span class="token punctuation">)</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> age<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>age <span class="token operator">=</span> age
a <span class="token operator">=</span> Person<span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>
a<span class="token punctuation">.</span>age <span class="token comment"># 100</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>__new__()</code>方法的作用是, 构造实例对象. 它的第一个参数<code>cls</code>是我们定义的类, 剩下的参数<code>*args</code>是我们创建实例传入的参数. 在创建对象时首先执行<code>__new__()</code>方法, 创建对象, 然后再执行<code>__init__()</code>.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 构造方法</span>
    <span class="token keyword">def</span> <span class="token function">__new__</span><span class="token punctuation">(</span>cls<span class="token punctuation">,</span> <span class="token operator">*</span>args<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;调用__new__(构造方法)&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># 1.先调用__new__方法构造对象</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>cls<span class="token punctuation">)</span>  <span class="token comment"># &lt;class &#39;__main__.Person&#39;&gt;  # 我们传入的类</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span>  <span class="token comment"># (&#39;wang&#39;, 13), 我们传入的参数</span>
        <span class="token keyword">return</span> <span class="token builtin">object</span><span class="token punctuation">.</span>__new__<span class="token punctuation">(</span>cls<span class="token punctuation">)</span>  <span class="token comment"># 使用父类的__new__方法返回一个实例, 如果不返回(可以注释掉实验)则不会调用__init__方法, 也不会有对象创建, Persion()的返回结果None</span>
        <span class="token comment"># return super().__new__(cls)  # super() 等价 object, 都是父类</span>
    <span class="token comment"># 初始化方法</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> age<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;调用__init__(初始化方法)&quot;</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>age <span class="token operator">=</span> age

wang <span class="token operator">=</span> Person<span class="token punctuation">(</span><span class="token number">13</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>wang<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>为什么<code>__new__</code>的第一个参数是<code>cls</code>而不是<code>self</code>。因为调用<code>__new__</code>的时候，实例对象还没有被创建, <code>__new__</code>是一个静态方法。第一个参数cls表示当前的class, 既用当前的定义的类, 来创建对象.</li><li>python已经帮我们实现：使用父类的<code>__new__()</code>方法来创建对象并返回. 所以除了特殊情况下, 不需要关系<code>__new__()</code></li><li><code>__new__()</code>与<code>__init__()</code>的参数关系 <code>__new__</code>方法如果返回cls的对象<code>return super().__new__(cls)</code>，则对象的<code>__init__</code>方法将自动被调用，相同的参数<code>*args</code>和<code>**kwargs</code>将被传入<code>__init__()</code>方法。也既是说<code>__new__()</code>和<code>__init__()</code>方法共享的参数，除了第一个从<code>cls</code>变成了<code>self</code>。如果__new__没有返回实例对象，则__init__方法不会被调用。</li></ol><h1 id="应用" tabindex="-1"><a class="header-anchor" href="#应用" aria-hidden="true">#</a> 应用</h1><ol><li>单例模式</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">A</span><span class="token punctuation">:</span>
	__flag <span class="token operator">=</span> <span class="token boolean">False</span>  <span class="token comment"># 私有变量,表明该类是否被实例化过</span>
	<span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">:</span>
		self<span class="token punctuation">.</span>name <span class="token operator">=</span> name

	<span class="token keyword">def</span> <span class="token function">__new__</span><span class="token punctuation">(</span>cls<span class="token punctuation">,</span> <span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
		<span class="token keyword">if</span> cls<span class="token punctuation">.</span>__flag<span class="token punctuation">:</span>  <span class="token comment"># 如果被实例化了</span>
			<span class="token keyword">return</span> cls<span class="token punctuation">.</span>__flag  <span class="token comment"># 返回实例化对象</span>
		cls<span class="token punctuation">.</span>__flag <span class="token operator">=</span> <span class="token builtin">object</span><span class="token punctuation">.</span>__new__<span class="token punctuation">(</span>cls<span class="token punctuation">)</span>  <span class="token comment"># 否则实例化</span>
		<span class="token keyword">return</span> cls<span class="token punctuation">.</span>__flag  <span class="token comment"># 返回实例化的对象</span>

<span class="token comment"># 实例化三个对象</span>
a <span class="token operator">=</span> A<span class="token punctuation">(</span><span class="token string">&#39;wang&#39;</span><span class="token punctuation">)</span>
b <span class="token operator">=</span> A<span class="token punctuation">(</span><span class="token string">&#39;wei&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># 打印三个对象的地址，结果都是一个地址</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>  <span class="token comment"># &lt;__main__.A object at 0x7fbfd0aec6d8&gt;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>  <span class="token comment"># &lt;__main__.A object at 0x7fbfd0aec6d8&gt;</span>

<span class="token comment"># 改变 a 对象的 name 属性，查看 b , c 的 name 属性</span>
a<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;zhao&#39;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>name<span class="token punctuation">)</span>  <span class="token comment"># zhao</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>b<span class="token punctuation">.</span>name<span class="token punctuation">)</span>  <span class="token comment"># zhao</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>在创建实例前, 判断条件 而放在<code>__init__</code>也可以实现相同的效果, 但是已经创建了实例(执行了<code>__new__()</code>), 浪费了一定的资源</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__new__</span><span class="token punctuation">(</span>cls<span class="token punctuation">,</span> age<span class="token punctuation">)</span><span class="token punctuation">:</span> 
        <span class="token keyword">if</span> age<span class="token operator">&gt;</span><span class="token number">100</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token string">&quot;年龄age需小于100,对象未创建&quot;</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>__new__<span class="token punctuation">(</span>cls<span class="token punctuation">)</span> 
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> age<span class="token punctuation">)</span><span class="token punctuation">:</span> 
        self<span class="token punctuation">.</span>age <span class="token operator">=</span> age

Person<span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span>
<span class="token string">&#39;年龄age需小于100,年龄age需小于200,对象未创建&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>返回其他实例(不常用)</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Foo</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__new__</span><span class="token punctuation">(</span>cls<span class="token punctuation">,</span><span class="token operator">*</span>args<span class="token punctuation">,</span><span class="token operator">**</span>kwagrs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token builtin">object</span><span class="token punctuation">.</span>__new__<span class="token punctuation">(</span>cls<span class="token punctuation">,</span><span class="token operator">*</span>args<span class="token punctuation">,</span><span class="token operator">**</span>kwagrs<span class="token punctuation">)</span>
    
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>name<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>name <span class="token operator">=</span> name

<span class="token keyword">class</span> <span class="token class-name">Bar</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__new__</span><span class="token punctuation">(</span>cls<span class="token punctuation">,</span><span class="token operator">*</span>agrs<span class="token punctuation">,</span><span class="token operator">**</span>kwagrs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token builtin">object</span><span class="token punctuation">.</span>__new__<span class="token punctuation">(</span>Foo<span class="token punctuation">,</span><span class="token operator">*</span>agrs<span class="token punctuation">,</span><span class="token operator">**</span>kwagrs<span class="token punctuation">)</span>
    
bar <span class="token operator">=</span> Bar<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>bar<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">#foo其实是Stranger类的实例。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考: https://www.codevoila.com/post/68/new-and-init-in-python</p>`,16),o=[t];function c(l,i){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","new.html.vue"]]);export{k as default};
