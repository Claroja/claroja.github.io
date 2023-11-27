import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-O0xqlHfm.js";const e={},p=t(`<h1 id="typecheck" tabindex="-1"><a class="header-anchor" href="#typecheck" aria-hidden="true">#</a> typeCheck</h1><p>通常, python解释器会灵活(flexible)隐式(implicit)的来处理变量的类型, 而最新版本的python可以让我们显式(explicit)指定变量的类型.</p><h3 id="动态类型-dynamic-typing" tabindex="-1"><a class="header-anchor" href="#动态类型-dynamic-typing" aria-hidden="true">#</a> 动态类型(dynamic typing)</h3><p>python是动态类型语言, python解释器在运行之前不会编译(比如检查变量的类型), 而且在运行时可以随意更改变量的类型</p><ol><li>运行前不会检查编译</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">## 1. \`if False\`不会执行, 所以即使1/0会报错</span>
<span class="token keyword">if</span> <span class="token boolean">False</span><span class="token punctuation">:</span>
    <span class="token number">1</span><span class="token operator">/</span><span class="token number">0</span> 
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token number">1</span> <span class="token operator">+</span> <span class="token number">2</span> <span class="token comment"># 3</span>


<span class="token comment">## 2. 直接执行1/0, 报错</span>
<span class="token number">1</span><span class="token operator">/</span><span class="token number">0</span>  <span class="token comment"># ZeroDivisionError: division by zero</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>运行时可以任意改变变量类型</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">## 1. thing的类型是str</span>
thing <span class="token operator">=</span> <span class="token string">&quot;Hello&quot;</span>
<span class="token builtin">type</span><span class="token punctuation">(</span>thing<span class="token punctuation">)</span>  <span class="token comment"># &lt;class &#39;str&#39;&gt;</span>

<span class="token comment">## 2. thing的类型改变成了float</span>
thing <span class="token operator">=</span> <span class="token number">28.1</span>
<span class="token builtin">type</span><span class="token punctuation">(</span>thing<span class="token punctuation">)</span>  <span class="token comment"># &lt;class &#39;float&#39;&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="静态类型-static-typing" tabindex="-1"><a class="header-anchor" href="#静态类型-static-typing" aria-hidden="true">#</a> 静态类型(static typing)</h3><p>比如C和Java, 不仅运行前会编译(提前发现if False: 1/0的错误), 而且在定义变量之后, 就不能改变变量的类型.</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token number">1</span><span class="token operator">/</span><span class="token number">0</span> <span class="token comment">//编译不会通过</span>
<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
    <span class="token number">1</span> <span class="token operator">+</span> <span class="token number">2</span> # <span class="token number">3</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> thing<span class="token punctuation">;</span>
thing <span class="token operator">=</span> <span class="token string">&quot;Hello&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="鸭子类型-duck-typing" tabindex="-1"><a class="header-anchor" href="#鸭子类型-duck-typing" aria-hidden="true">#</a> 鸭子类型(Duck Typing)</h3><p>https://realpython.com/python-type-checking/#duck-typing</p><h2 id="hello-types" tabindex="-1"><a class="header-anchor" href="#hello-types" aria-hidden="true">#</a> Hello Types</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">headline</span><span class="token punctuation">(</span>text<span class="token punctuation">,</span> align<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> align<span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>text<span class="token punctuation">.</span>title<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token string-interpolation"><span class="token string">f&quot; </span><span class="token interpolation"><span class="token punctuation">{</span>text<span class="token punctuation">.</span>title<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token string"> &quot;</span></span><span class="token punctuation">.</span>center<span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">,</span> <span class="token string">&quot;o&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>headline<span class="token punctuation">(</span><span class="token string">&quot;python type checking&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># Python Type Checking</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>headline<span class="token punctuation">(</span><span class="token string">&quot;python type checking&quot;</span><span class="token punctuation">,</span> align<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># oooooooooooooo Python Type Checking oooooooooooooo</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以对<code>def headline</code>方法, 加一些类型限制:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">headline</span><span class="token punctuation">(</span>text<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">,</span> align<span class="token punctuation">:</span> <span class="token builtin">bool</span> <span class="token operator">=</span> <span class="token boolean">True</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">str</span><span class="token punctuation">:</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>text: str</code>: 指定<code>text</code>参数必须是字符串<code>str</code><code>align: bool=True</code>: 指定<code>align</code>参数必须是布尔<code>bool</code>, 并且默认值是<code>True</code><code>-&gt; str</code>: 指定<code>headline()</code>方法的返回值类型必须是字符串<code>str</code></p><p>添加类型指定(type hints)在运行时(runtime)并没有任何效果, 即使输入错误的类型. 如下例中, <code>align</code>是<code>bool</code>类型, 但是我们传入了<code>str</code>类型, 程序仍然可以正常类型. 如果想对静态类型进行检查, 则需要安装<code>mypy</code>包. 但是添加类型指定仍然有两个好处:</p><ol><li>方便阅读代码, 而且在进行注释的时候, 也会自动填入类型</li><li>ide(pycharm, vscode)提示的会更详细</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span>headline<span class="token punctuation">(</span><span class="token string">&quot;python type checking&quot;</span><span class="token punctuation">,</span> align<span class="token operator">=</span><span class="token string">&quot;left&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># Python Type Checking </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="annotations" tabindex="-1"><a class="header-anchor" href="#annotations" aria-hidden="true">#</a> annotations</h2><p>在python3.0之后加入了annotations, annotations可以方便查看类型指定.</p><h3 id="function-annotations" tabindex="-1"><a class="header-anchor" href="#function-annotations" aria-hidden="true">#</a> Function Annotations</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> math
<span class="token keyword">def</span> <span class="token function">circumference</span><span class="token punctuation">(</span>radius<span class="token punctuation">:</span> <span class="token builtin">float</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">float</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token number">2</span> <span class="token operator">*</span> math<span class="token punctuation">.</span>pi <span class="token operator">*</span> radius

circumference<span class="token punctuation">.</span>__annotations__   <span class="token comment"># {&#39;radius&#39;: &lt;class &#39;float&#39;&gt;, &#39;return&#39;: &lt;class &#39;float&#39;&gt;}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="variable-annotations" tabindex="-1"><a class="header-anchor" href="#variable-annotations" aria-hidden="true">#</a> Variable Annotations</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>pi<span class="token punctuation">:</span> <span class="token builtin">float</span> <span class="token operator">=</span> <span class="token number">3.142</span>
__annotations__  <span class="token comment"># {&#39;pi&#39;: &lt;class &#39;float&#39;&gt;}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">## 基础元素类型</span>
name<span class="token punctuation">:</span> <span class="token builtin">str</span> <span class="token operator">=</span> <span class="token string">&quot;Guido&quot;</span>
pi<span class="token punctuation">:</span> <span class="token builtin">float</span> <span class="token operator">=</span> <span class="token number">3.142</span>
centered<span class="token punctuation">:</span> <span class="token builtin">bool</span> <span class="token operator">=</span> <span class="token boolean">False</span>
<span class="token comment">## 基础集合类型</span>
names<span class="token punctuation">:</span> <span class="token builtin">list</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;Guido&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Jukka&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Ivan&quot;</span><span class="token punctuation">]</span>
version<span class="token punctuation">:</span> <span class="token builtin">tuple</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
options<span class="token punctuation">:</span> <span class="token builtin">dict</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;centered&quot;</span><span class="token punctuation">:</span> <span class="token boolean">False</span><span class="token punctuation">,</span> <span class="token string">&quot;capitalize&quot;</span><span class="token punctuation">:</span> <span class="token boolean">True</span><span class="token punctuation">}</span>

<span class="token comment">## 使用typing的类型, 可以指定元素</span>
<span class="token keyword">from</span> typing <span class="token keyword">import</span> Dict<span class="token punctuation">,</span> List<span class="token punctuation">,</span> Tuple
names<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">str</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;Guido&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Jukka&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Ivan&quot;</span><span class="token punctuation">]</span>
version<span class="token punctuation">:</span> Tuple<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
options<span class="token punctuation">:</span> Dict<span class="token punctuation">[</span><span class="token builtin">str</span><span class="token punctuation">,</span> <span class="token builtin">bool</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;centered&quot;</span><span class="token punctuation">:</span> <span class="token boolean">False</span><span class="token punctuation">,</span> <span class="token string">&quot;capitalize&quot;</span><span class="token punctuation">:</span> <span class="token boolean">True</span><span class="token punctuation">}</span>

<span class="token comment">## 当不知道是list还是tuple时可以使用Sequence</span>
<span class="token keyword">from</span> typing <span class="token keyword">import</span> List<span class="token punctuation">,</span> Sequence
<span class="token keyword">def</span> <span class="token function">square</span><span class="token punctuation">(</span>elems<span class="token punctuation">:</span> Sequence<span class="token punctuation">[</span><span class="token builtin">float</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> List<span class="token punctuation">[</span><span class="token builtin">float</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>x<span class="token operator">**</span><span class="token number">2</span> <span class="token keyword">for</span> x <span class="token keyword">in</span> elems<span class="token punctuation">]</span>

<span class="token comment">## 当方法没有返回时, None</span>
<span class="token keyword">def</span> <span class="token function">play</span><span class="token punctuation">(</span>player_name<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>player_name<span class="token punctuation">}</span></span><span class="token string"> plays&quot;</span></span><span class="token punctuation">)</span>

ret_val <span class="token operator">=</span> play<span class="token punctuation">(</span><span class="token string">&quot;Filip&quot;</span><span class="token punctuation">)</span>

<span class="token comment">## 当不知道什么类型时, any</span>
<span class="token keyword">import</span> random
<span class="token keyword">from</span> typing <span class="token keyword">import</span> Any<span class="token punctuation">,</span> Sequence

<span class="token keyword">def</span> <span class="token function">choose</span><span class="token punctuation">(</span>items<span class="token punctuation">:</span> Sequence<span class="token punctuation">[</span>Any<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> Any<span class="token punctuation">:</span>
    <span class="token keyword">return</span> random<span class="token punctuation">.</span>choice<span class="token punctuation">(</span>items<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考: https://realpython.com/python-type-checking/</p>`,30),o=[p];function c(i,l){return s(),a("div",null,o)}const d=n(e,[["render",c],["__file","typeCheck.html.vue"]]);export{d as default};
