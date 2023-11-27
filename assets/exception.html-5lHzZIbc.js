import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e}from"./app-O0xqlHfm.js";const t={},i=e(`<h1 id="exception" tabindex="-1"><a class="header-anchor" href="#exception" aria-hidden="true">#</a> exception</h1><h2 id="raising-an-exception" tabindex="-1"><a class="header-anchor" href="#raising-an-exception" aria-hidden="true">#</a> Raising an Exception</h2><p>使用<code>raise</code>来抛出一个<code>Exception</code></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>x <span class="token operator">=</span> <span class="token number">10</span>
<span class="token keyword">if</span> x <span class="token operator">&gt;</span> <span class="token number">5</span><span class="token punctuation">:</span>
    <span class="token keyword">raise</span> Exception<span class="token punctuation">(</span><span class="token string">&#39;x should not exceed 5. The value of x was: {}&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token comment">## Traceback (most recent call last):</span>
<span class="token comment">##   File &quot;&lt;input&gt;&quot;, line 4, in &lt;module&gt;</span>
<span class="token comment">## Exception: x should not exceed 5. The value of x was: 10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="the-assertionerror-exception" tabindex="-1"><a class="header-anchor" href="#the-assertionerror-exception" aria-hidden="true">#</a> The AssertionError Exception</h2><p>如果<code>assert</code>后面是<code>True</code>, 则程序会继续运行. 如果是<code>False</code> 则会抛出<code>AssertionError</code></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> sys
<span class="token keyword">assert</span> <span class="token punctuation">(</span><span class="token string">&#39;linux&#39;</span> <span class="token keyword">in</span> sys<span class="token punctuation">.</span>platform<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;This code runs on Linux only.&quot;</span> <span class="token comment"># 如果在linux会正常运行, 如果在windows上会报错</span>

<span class="token comment">## Traceback (most recent call last):</span>
<span class="token comment">##   File &quot;&lt;input&gt;&quot;, line 2, in &lt;module&gt;</span>
<span class="token comment">## AssertionError: This code runs on Linux only.</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="the-try-and-except-block-handling-exceptions" tabindex="-1"><a class="header-anchor" href="#the-try-and-except-block-handling-exceptions" aria-hidden="true">#</a> The try and except Block: Handling Exceptions</h2><p><code>try</code>和<code>except</code>是用来捕获和操作<code>Exception</code></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">linux_interaction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">assert</span> <span class="token punctuation">(</span><span class="token string">&#39;linux&#39;</span> <span class="token keyword">in</span> sys<span class="token punctuation">.</span>platform<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;Function can only run on Linux systems.&quot;</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Doing something.&#39;</span><span class="token punctuation">)</span>


<span class="token comment">## 捕获方法异常</span>
<span class="token keyword">try</span><span class="token punctuation">:</span>
    linux_interaction<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">except</span> AssertionError <span class="token keyword">as</span> error<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;The linux_interaction() function was not executed&#39;</span><span class="token punctuation">)</span>

<span class="token comment">## 如果在windows上运行, 会得到如下的信息</span>
<span class="token comment">## Function can only run on Linux systems.  # assert 输出</span>
<span class="token comment">## The linux_interaction() function was not executed  # except 输出</span>

<span class="token comment">## 捕获多个异常</span>
<span class="token keyword">try</span><span class="token punctuation">:</span>  
    linux_interaction<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;file.log&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token builtin">file</span><span class="token punctuation">:</span>
        read_data <span class="token operator">=</span> <span class="token builtin">file</span><span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">except</span> FileNotFoundError <span class="token keyword">as</span> fnf_error<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>fnf_error<span class="token punctuation">)</span>
<span class="token keyword">except</span> AssertionError <span class="token keyword">as</span> error<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Linux linux_interaction() function was not executed&#39;</span><span class="token punctuation">)</span>

<span class="token comment">## 如果在windows上运行, 会得到和\`捕获方法异常\`一样的记过</span>
<span class="token comment">## 如果在linux上运行, 则会得到\`[Errno 2] No such file or directory: &#39;file.log&#39;\`</span>
<span class="token comment">## 1. try里面的代码, 会在遇到第一个exception时停止</span>
<span class="token comment">## 2. 在except中, 决定如果处理try中遇到的exception</span>
<span class="token comment">## 3. 不建议使用\`except Exception as error\`, 可在https://docs.python.org/3/library/exceptions.html查看具体的exception</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="the-else-clause" tabindex="-1"><a class="header-anchor" href="#the-else-clause" aria-hidden="true">#</a> The else Clause</h2><p><code>else</code>是在<code>except</code>没有执行的话时, 执行</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">linux_interaction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">assert</span> <span class="token punctuation">(</span><span class="token string">&#39;linux&#39;</span> <span class="token keyword">in</span> sys<span class="token punctuation">.</span>platform<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;Function can only run on Linux systems.&quot;</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Doing something.&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">try</span><span class="token punctuation">:</span>
    linux_interaction<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">except</span> AssertionError <span class="token keyword">as</span> error<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Executing the else clause.&#39;</span><span class="token punctuation">)</span>

<span class="token comment">## 如果在linux上运行会得到</span>
<span class="token comment">## Doing something.</span>
<span class="token comment">## Executing the else clause.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="cleaning-up-after-using-finally" tabindex="-1"><a class="header-anchor" href="#cleaning-up-after-using-finally" aria-hidden="true">#</a> Cleaning Up After Using finally</h2><p><code>finally</code>是无论如何都会执行的</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">try</span><span class="token punctuation">:</span>
    linux_interaction<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">except</span> AssertionError <span class="token keyword">as</span> error<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;file.log&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token builtin">file</span><span class="token punctuation">:</span>
            read_data <span class="token operator">=</span> <span class="token builtin">file</span><span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">except</span> FileNotFoundError <span class="token keyword">as</span> fnf_error<span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>fnf_error<span class="token punctuation">)</span>
<span class="token keyword">finally</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Cleaning up, irrespective of any exceptions.&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">try</span><span class="token punctuation">:</span>
    <span class="token string">&quot;run this code&quot;</span>
<span class="token keyword">except</span><span class="token punctuation">:</span>
    <span class="token string">&quot;Execute this code when there is an exception&quot;</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token string">&quot;No exceptions? Run this code&quot;</span>
<span class="token keyword">finally</span><span class="token punctuation">:</span>
    <span class="token string">&quot;Always run this code.&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考: https://realpython.com/python-exceptions/</p>`,19),o=[i];function p(c,l){return s(),a("div",null,o)}const d=n(t,[["render",p],["__file","exception.html.vue"]]);export{d as default};
