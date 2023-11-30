import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e}from"./app-0JgdiRQ-.js";const i={},p=e(`<h1 id="importlib" tabindex="-1"><a class="header-anchor" href="#importlib" aria-hidden="true">#</a> importlib</h1><p><code>import_module(name, package=None)</code>函数，和<code>__import__()</code>有一些不同</p><p>这两个函数之间最重要的不同点在于<code>import_module()</code>返回指定的包或模块 (例如 <code>pkg.mod</code>)，而<code>__import__()</code>返回最高层级的包或模块 (例如 <code>pkg</code>)。如果您只想按名称导入模块(可能在包中)，请使用 <code>import_module(name, package=None)</code></p><h2 id="应用" tabindex="-1"><a class="header-anchor" href="#应用" aria-hidden="true">#</a> 应用</h2><ol><li>动态创建对象</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> importlib

module <span class="token operator">=</span> importlib<span class="token punctuation">.</span>import_module<span class="token punctuation">(</span><span class="token string">&#39;my_package.my_module&#39;</span><span class="token punctuation">)</span>
my_class <span class="token operator">=</span> <span class="token builtin">getattr</span><span class="token punctuation">(</span>module<span class="token punctuation">,</span> <span class="token string">&#39;MyClass&#39;</span><span class="token punctuation">)</span>
my_instance <span class="token operator">=</span> my_class<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>向a模块中导入c.py 中的对象</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>a <span class="token comment">#文件夹</span>
 │a.py
 │__init__.py
b <span class="token comment">#文件夹</span>
 │b.py
 │__init__.py
 ├─c<span class="token comment">#文件夹</span>
 │c.py
 │__init__.py

<span class="token comment">## c.py 中内容</span>
class C:
 
 def c<span class="token punctuation">(</span>self<span class="token punctuation">)</span>:
  pass
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> importlib

params <span class="token operator">=</span> importlib<span class="token punctuation">.</span>import_module<span class="token punctuation">(</span><span class="token string">&#39;b.c.c&#39;</span><span class="token punctuation">)</span> <span class="token comment">#绝对导入</span>
params_ <span class="token operator">=</span> importlib<span class="token punctuation">.</span>import_module<span class="token punctuation">(</span><span class="token string">&#39;.c.c&#39;</span><span class="token punctuation">,</span>package<span class="token operator">=</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">)</span> <span class="token comment">#相对导入</span>

<span class="token comment">## 对象中取出需要的对象</span>
params<span class="token punctuation">.</span>C <span class="token comment">#取出class C</span>
params<span class="token punctuation">.</span>C<span class="token punctuation">.</span>c <span class="token comment">#取出class C 中的c 方法</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),c=[p];function t(o,l){return s(),a("div",null,c)}const m=n(i,[["render",t],["__file","importlib.html.vue"]]);export{m as default};
