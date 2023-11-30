import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e}from"./app-0JgdiRQ-.js";const c={},o=e(`<h1 id="namespace" tabindex="-1"><a class="header-anchor" href="#namespace" aria-hidden="true">#</a> namespace</h1><h2 id="namespace-1" tabindex="-1"><a class="header-anchor" href="#namespace-1" aria-hidden="true">#</a> namespace</h2><p>可以把<code>namespace</code>当成一个<code>dict</code>, <code>key</code>是<code>object</code>的名称, <code>value</code>是<code>object</code>本身.</p><p><code>python</code>总共有4种<code>namespace</code>:</p><ol><li>Built-In</li><li>Global</li><li>Enclosing</li><li>Local</li></ol><h3 id="built-in-namespace" tabindex="-1"><a class="header-anchor" href="#built-in-namespace" aria-hidden="true">#</a> built-in namespace</h3><p><code>built-in namespace</code>包含了<code>python</code>所有内置的<code>object</code>.这些<code>variable</code>可以在<code>python</code>运行时的任何地方调用.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token builtin">dir</span><span class="token punctuation">(</span>__builtins__<span class="token punctuation">)</span>  <span class="token comment"># 查看所有built-in对象</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="global-namespace" tabindex="-1"><a class="header-anchor" href="#global-namespace" aria-hidden="true">#</a> global namespace</h3><p><code>global namespace</code>包含了所有在<code>main</code>程序里的<code>variable</code>. 在<code>main</code>程序执行时创建, 结束时销毁. 严格的来讲当我们使用<code>import</code>导入<code>module</code>时,<code>interpreter</code>也会给<code>module</code>创建<code>namespace</code>.</p><h3 id="local-and-enclosing-namespaces" tabindex="-1"><a class="header-anchor" href="#local-and-enclosing-namespaces" aria-hidden="true">#</a> Local and Enclosing Namespaces</h3><p><code>interpreter</code>在<code>function</code>执行时, 会为其创建<code>namespace</code>. 在方法执行时撞见, 方法执行完销毁. 在下面的代码中, 给<code>g()\`\`function</code>创建的称为<code>local namespace</code>, 给<code>f()\`\`function</code>创建的称为<code>enclosing namespace</code>.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code> <span class="token keyword">def</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Start f()&#39;</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">g</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Start g()&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;End g()&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span>

    g<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;End f()&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span>


f<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">## Start f()</span>
<span class="token comment">## Start g()</span>
<span class="token comment">## End g()</span>
<span class="token comment">## End f()</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="variable-scope" tabindex="-1"><a class="header-anchor" href="#variable-scope" aria-hidden="true">#</a> Variable Scope</h2><p><code>namespace</code>的主要作用就是管理<code>variable</code>, 即使有重名的<code>variable</code>, 如果是在不同的<code>namespace</code>中, 也是可以共存的.</p><p>假设你想引用名称为<code>x</code>的<code>variable</code>, <code>interpreter</code>按顺序在一下的<code>namespace</code>中寻找:</p><ol><li><p><code>local</code> 如果<code>x</code>在一个<code>function</code>中, <code>interpreter</code>会在最小的<code>function</code>的<code>scope</code>中引用</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>x <span class="token operator">=</span> <span class="token string">&#39;global&#39;</span>

<span class="token keyword">def</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    x <span class="token operator">=</span> <span class="token string">&#39;enclosing&#39;</span>
    <span class="token keyword">def</span> <span class="token function">g</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        x <span class="token operator">=</span> <span class="token string">&#39;local&#39;</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>
    g<span class="token punctuation">(</span><span class="token punctuation">)</span>

f<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># local</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>enclose</code> 如果<code>x</code>是在外层的<code>function</code>中, <code>interpreter</code>会在<code>ecclosing function&#39;s scope</code>中引用</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>x <span class="token operator">=</span> <span class="token string">&#39;global&#39;</span>

<span class="token keyword">def</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    x <span class="token operator">=</span> <span class="token string">&#39;enclosing&#39;</span>
    <span class="token keyword">def</span> <span class="token function">g</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>
    g<span class="token punctuation">(</span><span class="token punctuation">)</span>
    
f<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># enclosing</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>如果在<code>local</code>和<code>enclose</code>中都找不到, 则会在<code>global</code>中引用</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>x <span class="token operator">=</span> <span class="token string">&#39;global&#39;</span>
<span class="token keyword">def</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">g</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>

    g<span class="token punctuation">(</span><span class="token punctuation">)</span>

f<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># &#39;global&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>如果以上都找不到, 则会在<code>built-in</code>中引用.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">g</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>

    g<span class="token punctuation">(</span><span class="token punctuation">)</span>

f<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># Traceback (most recent call last):</span>
<span class="token comment">#   File &quot;&lt;stdin&gt;&quot;, line 1, in &lt;module&gt;</span>
<span class="token comment">#   File &quot;&lt;stdin&gt;&quot;, line 6, in f</span>
<span class="token comment">#   File &quot;&lt;stdin&gt;&quot;, line 4, in g</span>
<span class="token comment"># NameError: name &#39;x&#39; is not defined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="python-namespace-dictionaries" tabindex="-1"><a class="header-anchor" href="#python-namespace-dictionaries" aria-hidden="true">#</a> Python Namespace Dictionaries</h2><p><code>python</code>提供了<code>globals()</code>和<code>locals()</code>两个<code>builit-in funtions</code>来获得<code>namespace dict</code>.</p><h3 id="the-globals-function" tabindex="-1"><a class="header-anchor" href="#the-globals-function" aria-hidden="true">#</a> The globals() function</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>x <span class="token operator">=</span> <span class="token string">&#39;foo&#39;</span>

<span class="token builtin">globals</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">## {&#39;__name__&#39;: &#39;__main__&#39;, &#39;__doc__&#39;: None, &#39;__package__&#39;: None,</span>
<span class="token comment">## &#39;__loader__&#39;: &lt;class &#39;_frozen_importlib.BuiltinImporter&#39;&gt;, &#39;__spec__&#39;: None,</span>
<span class="token comment">## &#39;__annotations__&#39;: {}, &#39;__builtins__&#39;: &lt;module &#39;builtins&#39; (built-in)&gt;,</span>
<span class="token comment">## &#39;x&#39;: &#39;foo&#39;}</span>

x  <span class="token comment"># &#39;foo&#39;</span>
<span class="token builtin">globals</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">&#39;x&#39;</span><span class="token punctuation">]</span>  <span class="token comment"># &#39;foo&#39;</span>
x <span class="token keyword">is</span> <span class="token builtin">globals</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">&#39;x&#39;</span><span class="token punctuation">]</span>  <span class="token comment"># True</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="the-locals-function" tabindex="-1"><a class="header-anchor" href="#the-locals-function" aria-hidden="true">#</a> The locals() function</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">f</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">:</span>
    s <span class="token operator">=</span> <span class="token string">&#39;foo&#39;</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">locals</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

f<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">0.5</span><span class="token punctuation">)</span>
<span class="token comment">## {&#39;s&#39;: &#39;foo&#39;, &#39;y&#39;: 0.5, &#39;x&#39;: 10}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="modify-variables-out-of-scope" tabindex="-1"><a class="header-anchor" href="#modify-variables-out-of-scope" aria-hidden="true">#</a> Modify Variables Out of Scope</h2><p><code>global</code>关键字, 可以当<code>local variable</code>变成<code>global variable</code></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>x <span class="token operator">=</span> <span class="token number">20</span>
<span class="token keyword">def</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">global</span> x
    x <span class="token operator">=</span> <span class="token number">40</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>

f<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># 40</span>
x <span class="token comment"># 40</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>global</code>关键字, 不能改变<code>enclosing variable</code></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    x <span class="token operator">=</span> <span class="token number">20</span>
    <span class="token keyword">def</span> <span class="token function">g</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">global</span> x
        x <span class="token operator">=</span> <span class="token number">40</span>
    g<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>

f<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># 20</span>
x <span class="token comment"># 40</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>nonlocal</code>关键字, 可以改变<code>enclosing variable</code></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    x <span class="token operator">=</span> <span class="token number">20</span>
    <span class="token keyword">def</span> <span class="token function">g</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">nonlocal</span> x
        x <span class="token operator">=</span> <span class="token number">40</span>
    g<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>

f<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># 40</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考: https://realpython.com/python-namespaces-scope/</p>`,31),p=[o];function t(i,l){return s(),a("div",null,p)}const r=n(c,[["render",t],["__file","namespace.html.vue"]]);export{r as default};
