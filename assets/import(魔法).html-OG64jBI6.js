import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as o}from"./app-jdLxCr9I.js";const t={},p=o(`<h1 id="import" tabindex="-1"><a class="header-anchor" href="#import" aria-hidden="true">#</a> <strong>import</strong></h1><p><code>__import__(name, globals=None, locals=None, fromlist=(), level=0)</code></p><ol><li>该函数会导入 name 模块</li><li>有可能使用给定的 globals 和 locals 来确定如何在包的上下文中解读名称。标准实现完全不使用其 locals 参数，而仅使用 globals 参数来确定import语句的包上下文。</li><li>fromlist 给出了应该从由 name 指定的模块导入对象或子模块的名称。当 name 变量的形式为 package.module 时，通常将会返回最高层级的包（第一个点号之前的名称），而 不是 以 name 命名的模块。 但是，当给出了非空的 fromlist 参数时，则将返回以 name 命名的模块。</li><li>level 指定是使用绝对还是相对导入。 0 (默认值) 意味着仅执行绝对导入。 level 为正数值表示相对于模块调用__import__()的目录，</li></ol><p><code>__import__(module)</code>相当于import module <code>__import__(package.module)</code>相当于<code>from package import name</code>，如果<code>fromlist</code>不传入值，则返回<code>package</code>对应的模块，如果<code>fromlist</code>传入值，则返回<code>package.module</code>对应的模块。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> a
<span class="token comment">## 等价于</span>
a <span class="token operator">=</span> <span class="token builtin">__import__</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token builtin">globals</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token builtin">locals</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>globals()</code>和<code>locals()</code>看起来很奇怪, 在上面的例子中是不需要的, 但是在实现<code>import</code>关键字的时候是传入的, 所以我们这么做.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> a<span class="token punctuation">.</span>b
<span class="token comment">## 不等价</span>
a <span class="token operator">=</span> <span class="token builtin">__import__</span><span class="token punctuation">(</span><span class="token string">&quot;a.b&quot;</span><span class="token punctuation">,</span> <span class="token builtin">globals</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token builtin">locals</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们在使用关键字<code>import</code>导入的是<code>a.b</code>, 而使用<code>__import__()</code>方法时仍然是赋值给<code>a</code>, 因为<code>__import__()</code>确认<code>a.b</code>存在后, 让然返回的是<code>a</code></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> a<span class="token punctuation">.</span>b <span class="token keyword">import</span> c
<span class="token comment">## 等价于</span>
c <span class="token operator">=</span> <span class="token builtin">__import__</span><span class="token punctuation">(</span><span class="token string">&#39;a.b&#39;</span><span class="token punctuation">,</span> <span class="token builtin">globals</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token builtin">locals</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;c&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span>c
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>参数中, 多了<code>[&#39;c&#39;]</code>, 这仅仅表示<code>__import__()</code>确认<code>a.b</code>中是否包含了<code>c</code></li><li><code>__import__()</code>返回的是<code>a.b</code>(这次返回的不是<code>a</code>)</li><li>因为返回的是<code>a.b</code>所以我们要加上<code>.c</code>才能真正访问到<code>a.b.c</code></li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> <span class="token punctuation">.</span><span class="token punctuation">.</span>a <span class="token keyword">import</span> b
<span class="token comment">## 等价于</span>
b <span class="token operator">=</span> <span class="token builtin">__import__</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token builtin">globals</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token builtin">locals</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span>b
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>..a</code>中前两个<code>..</code>作为了<code>__import__()</code>的最后一个参数(这里是2)</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> a <span class="token keyword">as</span> b
<span class="token comment">## 等价于</span>
b <span class="token operator">=</span> <span class="token builtin">__import__</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token builtin">globals</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token builtin">locals</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> a<span class="token punctuation">.</span>b <span class="token keyword">import</span> c <span class="token keyword">as</span> d
<span class="token comment">## 等价于</span>
d <span class="token operator">=</span> <span class="token builtin">__import__</span><span class="token punctuation">(</span><span class="token string">&#39;a.b&#39;</span><span class="token punctuation">,</span> <span class="token builtin">globals</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token builtin">locals</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;c&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span>c
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考: https://snarky.ca/unravelling-the-import-statement/ https://alltodev.com/how-to-use-the-<strong>import</strong>-function-to-import-a-name-from-a-submodule</p>`,15),e=[p];function c(l,i){return s(),a("div",null,e)}const r=n(t,[["render",c],["__file","import(魔法).html.vue"]]);export{r as default};
