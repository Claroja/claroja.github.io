import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as p}from"./app-A10JnHE0.js";const e={},t=p(`<h1 id="inherit" tabindex="-1"><a class="header-anchor" href="#inherit" aria-hidden="true">#</a> inherit</h1><p>继承就是子类可以引用父类的成员属性和方法</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Animal</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>name<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>name<span class="token operator">=</span>name
    <span class="token keyword">def</span> <span class="token function">speak</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;animal&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">class</span> <span class="token class-name">Cat</span><span class="token punctuation">(</span>Animal<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>

tom<span class="token operator">=</span>Cat<span class="token punctuation">(</span><span class="token string">&quot;tom&quot;</span><span class="token punctuation">)</span>
tom<span class="token punctuation">.</span>name  <span class="token comment"># &#39;tom&#39;</span>
tom<span class="token punctuation">.</span>speak<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># animal</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>私有方法和属性，不能被子类继承和访问</li><li>子类和各个父类中如果有相同方法，优先调用自己，然后向上寻找最近父类(如果父类有平行类，则按继承顺序从左至右继承，可以用<code>__mro__</code>来查看继承顺序）, “覆盖”一词用的并不好，并没有“覆盖”掉，只是调用的顺序不同。</li><li>调用被重写父类的方法有两种<code>super().func()</code> 或 <code>name.func(self)</code></li><li>调用父类同名方法的一个应用就是私有方法和属性不会被继承,但可以通过父类中调用私有方法的方法来调用父类的私有方法</li></ol><h2 id="父类的-init" tabindex="-1"><a class="header-anchor" href="#父类的-init" aria-hidden="true">#</a> 父类的__init__</h2><ol><li>子类的<code>__init__</code>会覆盖父类的<code>__init__</code>导致父类无法初始化</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">A</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        A <span class="token operator">=</span> <span class="token string">&#39;A&#39;</span>
        self<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token string">&#39;a&#39;</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;init A&#39;</span><span class="token punctuation">)</span>
        
<span class="token keyword">class</span> <span class="token class-name">B</span><span class="token punctuation">(</span>A<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>b <span class="token operator">=</span> <span class="token string">&#39;b&#39;</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;init B&#39;</span><span class="token punctuation">)</span>

b <span class="token operator">=</span> B<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>b<span class="token punctuation">.</span>A<span class="token punctuation">)</span> <span class="token comment"># 由于B中的\`__ini__()\`方法覆盖了父类A中的,所以A没有被初始化</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>b<span class="token punctuation">.</span>a<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>使用父类的<code>__init__</code>来初始化父类</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">B</span><span class="token punctuation">(</span>A<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        A<span class="token punctuation">.</span>__init__<span class="token punctuation">(</span>self<span class="token punctuation">)</span> <span class="token comment"># 在子类中的\`__init__\`来手动初始化父类,但是写父类的名称还不够智能,可以使用super()来代替</span>
        self<span class="token punctuation">.</span>b <span class="token operator">=</span> <span class="token string">&#39;b&#39;</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;init B&#39;</span><span class="token punctuation">)</span>
b <span class="token operator">=</span> B<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>b<span class="token punctuation">.</span>A<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>b<span class="token punctuation">.</span>a<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.最终版,使用<code>super()</code></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">B</span><span class="token punctuation">(</span>A<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        A<span class="token punctuation">.</span>__init__<span class="token punctuation">(</span>self<span class="token punctuation">)</span> <span class="token comment"># 可以使用super()来代替,而不需要关系父类的名称是什么</span>
        self<span class="token punctuation">.</span>b <span class="token operator">=</span> <span class="token string">&#39;b&#39;</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;init B&#39;</span><span class="token punctuation">)</span>

b <span class="token operator">=</span> B<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>b<span class="token punctuation">.</span>A<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>b<span class="token punctuation">.</span>a<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mixin" tabindex="-1"><a class="header-anchor" href="#mixin" aria-hidden="true">#</a> Mixin</h2><p>java语言中通过 <code>interface</code>接口类, 来实现多重继承 python中本身就支持, 可以使用<code>mixin</code>来标明</p><p>下例中, 交通工具类<code>vehicle</code>只有陆地跑的功能, <code>car</code>和<code>airplane</code>继承后, 可以获得<code>dirve</code>的功能. 但是<code>airplane</code>还需要飞的功能, 那么就可以再继承一个会飞的父类<code>FlyTool</code>即可.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">vehicle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>  <span class="token comment"># 交通工具</span>
    <span class="token keyword">def</span> <span class="token function">drive</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;陆地上跑&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">class</span> <span class="token class-name">FlyTool</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">fly</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;天上飞&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">class</span> <span class="token class-name">car</span><span class="token punctuation">(</span>vehicle<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>

<span class="token keyword">class</span> <span class="token class-name">airplane</span><span class="token punctuation">(</span>vehicle<span class="token punctuation">,</span> FlyTool<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),c=[t];function o(i,l){return s(),a("div",null,c)}const k=n(e,[["render",o],["__file","inherit.html.vue"]]);export{k as default};
