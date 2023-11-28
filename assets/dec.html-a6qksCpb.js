import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-yeyEmHfz.js";const e={},p=t(`<h1 id="dec" tabindex="-1"><a class="header-anchor" href="#dec" aria-hidden="true">#</a> dec</h1><h2 id="_1-基础知识" tabindex="-1"><a class="header-anchor" href="#_1-基础知识" aria-hidden="true">#</a> 1.基础知识</h2><p>想理解装饰器，就得知道以下两点： 1.1 闭包特性（内函数能捕捉到外函数的环境变量）</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">line</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token comment"># 生成了一个确定了ab的线性函数，结果只需要给x值就可以判断y值</span>
    <span class="token keyword">def</span> <span class="token function">line</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> a<span class="token operator">*</span>x <span class="token operator">+</span> b
    <span class="token keyword">return</span> line <span class="token comment"># 返回值为闭包，就是内层函数</span>
line1 <span class="token operator">=</span> line<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment"># 用line1接受a=1，b=1的闭包函数</span>
line2 <span class="token operator">=</span> line<span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment"># 用line2接收a=1，b=-1的闭包函数</span>

line1<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>  <span class="token comment"># 2</span>
line2<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>  <span class="token comment"># 0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1.2 return一个函数,相当于调用了它</p><h2 id="原理" tabindex="-1"><a class="header-anchor" href="#原理" aria-hidden="true">#</a> @原理</h2><p>@装饰符号的作用是将被装饰的函数当成参数传入装饰器函数 <code>wrap()</code>就是装饰器函数 <code>dec()</code>的作用主要是整合所有的操作</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">wrap</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span><span class="token punctuation">:</span>  <span class="token comment"># 修饰符的函数名,该函数内只包含修饰函数,其他不要操作,参数是函数引用</span>
    <span class="token keyword">def</span> <span class="token function">dec</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token comment"># 修饰函数,可以传参,函数内部写对原函数的修饰逻辑,然后返回</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;在dec函数中添加操作&quot;</span><span class="token punctuation">)</span>
        func<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> dec

<span class="token keyword">def</span> <span class="token function">test1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;我没使用@, 直接当成参数传入&quot;</span><span class="token punctuation">)</span>

wrap<span class="token punctuation">(</span>test1<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> 在dec函数中添加操作
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> 我没使用@<span class="token punctuation">,</span> 直接当成参数传入

<span class="token decorator annotation punctuation">@wrap</span> <span class="token comment"># 对应wrap函数</span>
<span class="token keyword">def</span> <span class="token function">test2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;我使用了@&quot;</span><span class="token punctuation">)</span> <span class="token comment"># 等价于wrap(test2)()</span>
test2<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> 在dec函数中添加操作
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> 我使用了@

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="return" tabindex="-1"><a class="header-anchor" href="#return" aria-hidden="true">#</a> return</h2><p>@原理中的例子中被装饰函数<code>func</code>没有返回值，所以在<code>dec</code>中是可以直接调用，而不需要<code>return</code>的。 但当<code>func</code>有返回值的时候是需要用<code>return func()</code>来调用的，注意这里<code>return</code>的是<code>func()</code>的调用，而不是<code>func</code>本身。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">wrap</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span><span class="token punctuation">:</span>  <span class="token comment"># 修饰符的函数名,该函数内只包含修饰函数,其他不要操作,参数是函数引用</span>
    <span class="token keyword">def</span> <span class="token function">dec</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token comment"># 修饰函数,可以传参,函数内部写对原函数的修饰逻辑,然后返回</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;在dec函数中添加一下操作&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> func<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> dec
    
<span class="token decorator annotation punctuation">@wrap</span> <span class="token comment"># 对应wrap函数</span>
<span class="token keyword">def</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token string">&quot;返回值&quot;</span>

a <span class="token operator">=</span> test<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 在dec函数中添加一下操作</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>  <span class="token comment"># 返回值</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="给被装饰函数传参" tabindex="-1"><a class="header-anchor" href="#给被装饰函数传参" aria-hidden="true">#</a> 给被装饰函数传参</h2><p>在<code>dec()</code>就需要传入参数了, 这个比较难理解, 直接记住就行</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">wrap</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">dec</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span><span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>  <span class="token comment"># 调用test()时,是从这里开始执行, 所以要传入</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;装饰开始&#39;</span><span class="token punctuation">)</span>
        func2 <span class="token operator">=</span> func<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span><span class="token operator">**</span>kwargs<span class="token punctuation">)</span>  <span class="token comment"># decorater的参数传给被修饰函数func</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;装饰结束&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> func2
    <span class="token keyword">return</span> dec

<span class="token decorator annotation punctuation">@wrap</span>
<span class="token keyword">def</span> <span class="token function">test</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;我是被装饰的函数&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> num<span class="token operator">+</span><span class="token number">1</span>

a <span class="token operator">=</span> test<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token comment">## 装饰开始</span>
<span class="token comment">## 我是被装饰的函数</span>
<span class="token comment">## 装饰结束</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>  <span class="token comment"># 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="装饰器传入参数" tabindex="-1"><a class="header-anchor" href="#装饰器传入参数" aria-hidden="true">#</a> 装饰器传入参数</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">warpp</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>  <span class="token comment"># </span>
    <span class="token keyword">def</span> <span class="token function">wrap</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">def</span> <span class="token function">dec</span><span class="token punctuation">(</span><span class="token operator">*</span>argsdec<span class="token punctuation">,</span> <span class="token operator">**</span>kwargsdec<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;装饰器参数&quot;</span><span class="token punctuation">,</span>args<span class="token punctuation">,</span> kwargs<span class="token punctuation">)</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;被装饰参数&quot;</span><span class="token punctuation">,</span>argsdec<span class="token punctuation">,</span>kwargsdec<span class="token punctuation">)</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;现在开始装饰&#39;</span><span class="token punctuation">)</span>
            func<span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;现在结束装饰&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> dec
    <span class="token keyword">return</span> wrap


<span class="token decorator annotation punctuation">@warpp</span><span class="token punctuation">(</span><span class="token string">&#39;index.html/&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;我是被装饰的函数&#39;</span><span class="token punctuation">)</span>

test<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token punctuation">(</span><span class="token string">&#39;index.html/&#39;</span><span class="token punctuation">,</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> 现在开始装饰
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> 我是被装饰的函数
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> 现在结束装饰
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="多层装饰器" tabindex="-1"><a class="header-anchor" href="#多层装饰器" aria-hidden="true">#</a> 多层装饰器</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">wrap1</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">decorater</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> fn<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;1&#39;</span>
    <span class="token keyword">return</span> decorater
    
<span class="token keyword">def</span> <span class="token function">wrap2</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">decorater</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;2&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> fn<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;2&#39;</span>
    <span class="token keyword">return</span> decorater
<span class="token decorator annotation punctuation">@wrap1</span>
<span class="token decorator annotation punctuation">@wrap2</span>
<span class="token keyword">def</span> <span class="token function">test3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token string">&quot;hello&quot;</span>
test3<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>装饰器: 先装饰(从下往上),后调用(从上往下) 简单的来讲，就是被装饰的函数会被转换为装饰函数闭包的函数。</p><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h2>`,20),o=[p];function c(i,l){return s(),a("div",null,o)}const d=n(e,[["render",c],["__file","dec.html.vue"]]);export{d as default};
