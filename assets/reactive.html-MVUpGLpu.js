import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as c,c as l,a as n,b as s,d as t,e as p}from"./app-O0xqlHfm.js";const i={},u=n("h1",{id:"reactive",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#reactive","aria-hidden":"true"},"#"),s(" reactive")],-1),r=n("h2",{id:"基本使用",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#基本使用","aria-hidden":"true"},"#"),s(" 基本使用")],-1),k={href:"https://v3.cn.vuejs.org/guide/reactivity-fundamentals.html",target:"_blank",rel:"noopener noreferrer"},d=n("code",null,"reactive",-1),v=p(`<ol><li>该响应式转换是“深度转换”——它会影响传递对象的所有嵌套property</li><li>响应式状态改变时视图会自动更新</li></ol><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>reactive<span class="token punctuation">,</span> toRefs<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span>
<span class="token keyword">import</span> _ <span class="token keyword">from</span> <span class="token string">&quot;lodash&quot;</span>
<span class="token keyword">let</span> test <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">bb</span><span class="token operator">:</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;c&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;c&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">/// 1. reactive中，当key对应的value是基本类型时， 直接变量赋值或解包都会失去响应式</span>
<span class="token comment">// let a = test.a</span>
<span class="token keyword">let</span> <span class="token punctuation">{</span>a<span class="token punctuation">}</span> <span class="token operator">=</span> test <span class="token comment">//此时a是字符串，不再是响应式</span>
<span class="token comment">// let {a} = toRefs(test) //此时a是RefImpl是响应式</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> test<span class="token punctuation">.</span>a<span class="token punctuation">,</span> a <span class="token operator">===</span> test<span class="token punctuation">.</span>a<span class="token punctuation">)</span>
a <span class="token operator">=</span> <span class="token string">&quot;aa&quot;</span>

<span class="token comment">/// 2. reactive中，当key对应的value是对象时，变量赋值和解包都不会失去响应式</span>
<span class="token comment">/// 2.1 字典{}</span>
<span class="token comment">// let b = test.b</span>
<span class="token keyword">let</span> <span class="token punctuation">{</span>b<span class="token punctuation">}</span> <span class="token operator">=</span> test <span class="token comment">// 和上一行是等价的</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span> test<span class="token punctuation">.</span>b<span class="token punctuation">,</span> b <span class="token operator">===</span> test<span class="token punctuation">.</span>b<span class="token punctuation">)</span> <span class="token comment">// 地址引用, 所以b仍然是响应式</span>
b<span class="token punctuation">.</span>bb <span class="token operator">=</span> <span class="token string">&quot;bb&quot;</span> <span class="token comment">// 当改变b.bb的值时，也就是更改了test.b.bb</span>

<span class="token comment">/// 2.2 列表[]</span>
<span class="token comment">// let c = test.c</span>
<span class="token keyword">let</span> <span class="token punctuation">{</span>c<span class="token punctuation">}</span> <span class="token operator">=</span> test
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> test<span class="token punctuation">.</span>c<span class="token punctuation">,</span> c <span class="token operator">===</span> test<span class="token punctuation">.</span>c<span class="token punctuation">)</span>
c<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&quot;c&quot;</span><span class="token punctuation">)</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    a <span class="token operator">=</span> <span class="token string">&quot;aaa&quot;</span>
    b<span class="token punctuation">.</span>bb <span class="token operator">=</span> <span class="token string">&quot;bbb&quot;</span>
    c<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&quot;c&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    b <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">bbbb</span><span class="token operator">:</span> <span class="token string">&quot;bbbb&quot;</span><span class="token punctuation">}</span> <span class="token comment">//直接赋值，普通对象，没有响应式</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    {{ test.a }}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span>
    {{ test.b }}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span>
    {{ c }}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ref和reactive转换" tabindex="-1"><a class="header-anchor" href="#ref和reactive转换" aria-hidden="true">#</a> ref和reactive转换</h2>`,3),m={href:"https://vuejs.org/api/reactivity-core.html#reactive",target:"_blank",rel:"noopener noreferrer"},b=p(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span> count <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// ref will be unwrapped</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>count <span class="token operator">===</span> count<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token comment">// true</span>

<span class="token comment">// it will update \`obj.count\`</span>
count<span class="token punctuation">.</span>value<span class="token operator">++</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>count<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token comment">// 2</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>count<span class="token punctuation">)</span> <span class="token comment">// 2</span>

<span class="token comment">// it will also update \`count\` ref</span>
obj<span class="token punctuation">.</span>count<span class="token operator">++</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>count<span class="token punctuation">)</span> <span class="token comment">// 3</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>count<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token comment">// 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="lodash-结合" tabindex="-1"><a class="header-anchor" href="#lodash-结合" aria-hidden="true">#</a> lodash 结合</h2><p>lodash的\`cloneDeep·可以用在watch里面</p><p>现在还没搞清楚这些赋值操作之间的区别。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>reactive<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span>
<span class="token keyword">import</span> _ <span class="token keyword">from</span> <span class="token string">&quot;lodash&quot;</span>
<span class="token keyword">let</span> test <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token string">&quot;c&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>test<span class="token punctuation">,</span> test<span class="token punctuation">.</span>a<span class="token punctuation">,</span> test<span class="token punctuation">.</span>b<span class="token punctuation">)</span>
<span class="token keyword">let</span> test2 <span class="token operator">=</span> _<span class="token punctuation">.</span><span class="token function">cloneDeep</span><span class="token punctuation">(</span>test<span class="token punctuation">)</span>
<span class="token keyword">let</span> a2 <span class="token operator">=</span> _<span class="token punctuation">.</span><span class="token function">cloneDeep</span><span class="token punctuation">(</span>test<span class="token punctuation">.</span>a<span class="token punctuation">)</span>
<span class="token keyword">let</span> b2 <span class="token operator">=</span> _<span class="token punctuation">.</span><span class="token function">cloneDeep</span><span class="token punctuation">(</span>test<span class="token punctuation">.</span>b<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>test2<span class="token punctuation">,</span> a2<span class="token punctuation">,</span> b2<span class="token punctuation">)</span>

<span class="token keyword">let</span> test3 <span class="token operator">=</span> test
<span class="token keyword">let</span> a3 <span class="token operator">=</span> test<span class="token punctuation">.</span>a
<span class="token keyword">let</span> b3 <span class="token operator">=</span> test<span class="token punctuation">.</span>b
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>test3<span class="token punctuation">,</span> a3<span class="token punctuation">,</span> b3<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="易错点" tabindex="-1"><a class="header-anchor" href="#易错点" aria-hidden="true">#</a> 易错点</h2><p>基本常识：reactive中的最后一层，既基本类型，不是<code>reactive</code>对象 下例中:</p><ol><li><code>changeOne</code>方法证明，<code>reactive</code>中的成员作为参数传入仍然是<code>reactive</code>。</li><li><code>changTwo</code>方法证明，<code>reactive</code>中的成员作为参数，仅更改其成员（不改变结构），则会继承响应式</li><li><code>changeTwo</code>方法证明，如果改变<code>reactive</code>对象结构，比如直接赋值<code>{}</code>，则会失去响应式</li><li><code>changeThree</code>方法证明，如果改变<code>reactive</code>成员的对象结构（直接赋值普通的object），比如直接赋值<code>[]</code>，不会失去响应式 总结起来：</li><li>对<code>reactive</code>对象对应的变量直接赋值普通对象(非响应式对象)，则会失去响应式</li><li>对<code>reactive</code>对象的成员变量直接赋值普通对象(非响应式对象)或做更改，不会失去响应式</li></ol><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>reactive<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span>
<span class="token keyword">let</span> test <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">cc</span><span class="token operator">:</span> <span class="token string">&quot;cc&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>test<span class="token punctuation">)</span> <span class="token comment">//Proxy {a: &#39;a&#39;}</span>

<span class="token keyword">function</span> <span class="token function">changeOne</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token comment">// Proxy {0: &#39;b&#39;, 1: &#39;b&#39;}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">changeTwo</span><span class="token punctuation">(</span><span class="token parameter">m</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    m<span class="token punctuation">.</span>b<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&quot;b&quot;</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span> <span class="token comment">// Proxy {a: &#39;a&#39;, b: Array(3), c: {…}}</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>test<span class="token punctuation">)</span> <span class="token comment">// Proxy {a: &#39;a&#39;, b: Array(3), c: {…}}</span>

    m<span class="token punctuation">.</span>c <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">ccc</span><span class="token operator">:</span> <span class="token string">&quot;cccc&quot;</span><span class="token punctuation">}</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span> <span class="token comment">// Proxy {a: &#39;a&#39;, b: Array(3), c: {…}}</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>test<span class="token punctuation">)</span> <span class="token comment">// Proxy {a: &#39;a&#39;, b: Array(3), c: {…}}</span>

    m <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span> <span class="token comment">// {a: &#39;b&#39;}</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>test<span class="token punctuation">)</span> <span class="token comment">// Proxy {a: &#39;a&#39;}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">changeThree</span><span class="token punctuation">(</span><span class="token parameter">m</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    m<span class="token punctuation">.</span>c <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;dddd&quot;</span><span class="token punctuation">]</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span> <span class="token comment">// Proxy {a: &#39;a&#39;, b: Array(3), c: {…}}</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>m<span class="token punctuation">.</span>c<span class="token punctuation">)</span> <span class="token comment">//Proxy {0: &#39;dddd&#39;}</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>test<span class="token punctuation">)</span> <span class="token comment">// Proxy {a: &#39;a&#39;, b: Array(3), c: {…}}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>changeOne(test.b)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>TestOne<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>changeTwo(test)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>TestTwo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>changeThree(test)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>TestThree<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    {{ test }}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="reactive与props" tabindex="-1"><a class="header-anchor" href="#reactive与props" aria-hidden="true">#</a> reactive与props</h2><ol><li>props向子组件传递<code>reactive</code>对象的成员是引用传递。</li><li>下例中使用<code>push</code>更改<code>list</code>, Vue Devtools不会自动更新，需要自己手动点击强制更新按钮</li></ol><p>Parent.vue</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>reactive<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span>
<span class="token keyword">import</span> Child <span class="token keyword">from</span> <span class="token string">&quot;./Child.vue&quot;</span>

<span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">bb</span><span class="token operator">:</span> <span class="token string">&quot;bb&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;c&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;c&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Child</span> <span class="token attr-name">:parentProp</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>data.c<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Child</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Child.vue</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">let</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;parentProp&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>props.parentProp.push(&#39;c&#39;)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Child<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15);function g(y,h){const a=o("ExternalLinkIcon");return c(),l("div",null,[u,r,n("p",null,[n("a",k,[s("参考原文"),t(a)]),d,s("返回一个响应式的对象状态，")]),v,n("p",null,[n("a",m,[s("参考原文"),t(a)])]),b])}const w=e(i,[["render",g],["__file","reactive.html.vue"]]);export{w as default};
