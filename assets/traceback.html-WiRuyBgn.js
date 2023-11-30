import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as e,e as a}from"./app-0JgdiRQ-.js";const t={},o=a(`<h1 id="traceback" tabindex="-1"><a class="header-anchor" href="#traceback" aria-hidden="true">#</a> traceback</h1><p><code>python</code>会在抛出<code>exceptions</code>时打印<code>traceback</code>, 来帮助你查找出错的地方.</p><p>创建以下代码, 可以看到形参是<code>someone</code>, 而在函数里面, 我们写成了<code>someon</code>, 所以在调用的时候会报错.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">greet</span><span class="token punctuation">(</span>someone<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Hello, &#39;</span> <span class="token operator">+</span> someon<span class="token punctuation">)</span>

greet<span class="token punctuation">(</span><span class="token string">&#39;Chad&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ python example.py
Traceback <span class="token punctuation">(</span>most recent call last<span class="token punctuation">)</span>:
  File <span class="token string">&quot;/path/to/example.py&quot;</span>, line <span class="token number">4</span>, <span class="token keyword">in</span> <span class="token operator">&lt;</span>module<span class="token operator">&gt;</span>
    greet<span class="token punctuation">(</span><span class="token string">&#39;Chad&#39;</span><span class="token punctuation">)</span>
  File <span class="token string">&quot;/path/to/example.py&quot;</span>, line <span class="token number">2</span>, <span class="token keyword">in</span> greet
    print<span class="token punctuation">(</span><span class="token string">&#39;Hello, &#39;</span> + someon<span class="token punctuation">)</span>
NameError: name <span class="token string">&#39;someon&#39;</span> is not defined
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们要从下往上阅读<code>traceback</code>, 最后一行是错误信息, 往上以<code>File</code>为分组, 最下面的是最栈中最低(最内层的)的方法调用:</p><ol><li><code>NameError</code>: 是<code>exception</code>的类型, <code>name &#39;someon&#39; is not defined</code>, 是<code>exception</code>的具体内容</li><li><code>File &quot;/path/to/example.py&quot;, line 2, in greet</code>, 告诉我们出错的文件和行等, <code>print(&#39;Hello, &#39; + someon)</code>告诉我们哪一行的具体是什么</li></ol><p>当我们在使用<code>try\`\`except</code>时, 如果<code>except</code>中再遇到<code>Exception</code>就会出现<code>During handling of the above exception, another exception occurred</code></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        <span class="token number">1</span><span class="token operator">/</span><span class="token number">0</span>
    <span class="token keyword">except</span> Exception<span class="token punctuation">:</span>
        <span class="token number">1</span><span class="token operator">/</span><span class="token number">0</span>

test<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token comment">## Traceback (most recent call last):</span>
<span class="token comment">##   File &quot;&lt;stdin&gt;&quot;, line 3, in test</span>
<span class="token comment">## ZeroDivisionError: division by zero</span>
<span class="token comment">## </span>
<span class="token comment">## During handling of the above exception, another exception occurred:</span>
<span class="token comment">## </span>
<span class="token comment">## Traceback (most recent call last):</span>
<span class="token comment">##   File &quot;&lt;stdin&gt;&quot;, line 1, in &lt;module&gt;</span>
<span class="token comment">##   File &quot;&lt;stdin&gt;&quot;, line 5, in test</span>
<span class="token comment">## ZeroDivisionError: division by zero</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="common-tracebacks-in-python" tabindex="-1"><a class="header-anchor" href="#common-tracebacks-in-python" aria-hidden="true">#</a> Common Tracebacks in Python?</h2><h3 id="attributeerror" tabindex="-1"><a class="header-anchor" href="#attributeerror" aria-hidden="true">#</a> AttributeError</h3><p>当调用对象没有的属性时, 抛出. 如下代码, <code>int</code>对象没有<code>an_attribute</code>这个属性.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>an_int <span class="token operator">=</span> <span class="token number">1</span>
an_int<span class="token punctuation">.</span>an_attribute
<span class="token comment">## Traceback (most recent call last):</span>
<span class="token comment">##   File &quot;&lt;stdin&gt;&quot;, line 1, in &lt;module&gt;</span>
<span class="token comment">## AttributeError: &#39;int&#39; object has no attribute &#39;an_attribute&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另外, 我们还会遇到<code>AttributeError: &#39;NoneType&#39; object has no attribute &#39;append&#39;.</code>这个时候就要看函数是否返回了None.</p><h3 id="importerror" tabindex="-1"><a class="header-anchor" href="#importerror" aria-hidden="true">#</a> ImportError</h3><p>在使用<code>import</code>模块时, 遇到的.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">## 1. 没有这个模块</span>
<span class="token keyword">import</span> asdf 
<span class="token comment">## Traceback (most recent call last):</span>
<span class="token comment">##   File &quot;&lt;stdin&gt;&quot;, line 1, in &lt;module&gt;</span>
<span class="token comment">## ModuleNotFoundError: No module named &#39;asdf&#39;</span>
<span class="token comment">## 2. 模块中没有子模块, 子方法或子包</span>
<span class="token keyword">from</span> collections <span class="token keyword">import</span> asdf
<span class="token comment">## Traceback (most recent call last):</span>
<span class="token comment">##   File &quot;&lt;stdin&gt;&quot;, line 1, in &lt;module&gt;</span>
<span class="token comment">## ImportError: cannot import name &#39;asdf&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="indexerror" tabindex="-1"><a class="header-anchor" href="#indexerror" aria-hidden="true">#</a> IndexError</h3><p>在索引<code>sequence</code>对象(比如<code>list</code>,<code>tuple</code>等)时, 超出了下表范围时</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>a_list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">]</span>
a_list<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span>
<span class="token comment">## Traceback (most recent call last):</span>
<span class="token comment">##   File &quot;&lt;stdin&gt;&quot;, line 1, in &lt;module&gt;</span>
<span class="token comment">## IndexError: list index out of range</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="keyerror" tabindex="-1"><a class="header-anchor" href="#keyerror" aria-hidden="true">#</a> KeyError</h3><p>在<code>map</code>对象(比如<code>dict</code>时)中索引不存在的key</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>a_dict<span class="token punctuation">[</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">]</span>
<span class="token comment">## Traceback (most recent call last):</span>
<span class="token comment">##   File &quot;&lt;stdin&gt;&quot;, line 1, in &lt;module&gt;</span>
<span class="token comment">## KeyError: &#39;b&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="nameerror" tabindex="-1"><a class="header-anchor" href="#nameerror" aria-hidden="true">#</a> NameError</h3><p>是引用不存在的<code>variable</code>, <code>module</code>, <code>class</code>, <code>function</code>的名称时抛出.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">greet</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;Hello, </span><span class="token interpolation"><span class="token punctuation">{</span>persn<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>
greet<span class="token punctuation">(</span><span class="token string">&#39;World&#39;</span><span class="token punctuation">)</span>
<span class="token comment">## Traceback (most recent call last):</span>
<span class="token comment">##   File &quot;&lt;stdin&gt;&quot;, line 1, in &lt;module&gt;</span>
<span class="token comment">##   File &quot;&lt;stdin&gt;&quot;, line 2, in greet</span>
<span class="token comment">## NameError: name &#39;persn&#39; is not defined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="syntaxerror" tabindex="-1"><a class="header-anchor" href="#syntaxerror" aria-hidden="true">#</a> SyntaxError</h3><p>当遇到语法错误时抛出. 注意<code>SyntaxError</code>不会有<code>Traceback (most recent call last)</code>, 因为此时<code>python</code>的代码还没有执行, 仅仅是检查语法.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">greet</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span>
<span class="token comment">##   File &quot;&lt;stdin&gt;&quot;, line 1</span>
<span class="token comment">##     def greet(person)</span>
<span class="token comment">##                     ^</span>
<span class="token comment">## SyntaxError: invalid syntax</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="typeerror" tabindex="-1"><a class="header-anchor" href="#typeerror" aria-hidden="true">#</a> TypeError</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token number">1</span> <span class="token operator">+</span> <span class="token string">&#39;1&#39;</span>
<span class="token comment">## Traceback (most recent call last):</span>
<span class="token comment">##   File &quot;&lt;stdin&gt;&quot;, line 1, in &lt;module&gt;</span>
<span class="token comment">## TypeError: unsupported operand type(s) for +: &#39;int&#39; and &#39;str&#39;</span>
<span class="token string">&#39;1&#39;</span> <span class="token operator">+</span> <span class="token number">1</span>
<span class="token comment">## Traceback (most recent call last):</span>
<span class="token comment">##   File &quot;&lt;stdin&gt;&quot;, line 1, in &lt;module&gt;</span>
<span class="token comment">## TypeError: must be str, not int</span>
<span class="token builtin">len</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token comment">## Traceback (most recent call last):</span>
<span class="token comment">##   File &quot;&lt;stdin&gt;&quot;, line 1, in &lt;module&gt;</span>
<span class="token comment">## TypeError: object of type &#39;int&#39; has no len()</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="valueerror" tabindex="-1"><a class="header-anchor" href="#valueerror" aria-hidden="true">#</a> ValueError</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span>
<span class="token comment">## Traceback (most recent call last):</span>
<span class="token comment">##   File &quot;&lt;stdin&gt;&quot;, line 1, in &lt;module&gt;</span>
<span class="token comment">## ValueError: not enough values to unpack (expected 3, got 2)</span>
a<span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
<span class="token comment">## Traceback (most recent call last):</span>
<span class="token comment">##   File &quot;&lt;stdin&gt;&quot;, line 1, in &lt;module&gt;</span>
<span class="token comment">## ValueError: too many values to unpack (expected 2)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考: https://realpython.com/python-traceback/</p>`,34),c=[o];function i(l,p){return s(),e("div",null,c)}const u=n(t,[["render",i],["__file","traceback.html.vue"]]);export{u as default};
