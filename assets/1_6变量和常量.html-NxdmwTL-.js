import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-jdLxCr9I.js";const e={},p=t(`<h2 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h2><ol><li>变量在编译时为其分配相应的内存空间</li><li>可以通过其名字和地址访问相应内存</li><li>声明和定义区别 声明变量不需要建立存储空间，如：extern int a; 定义变量需要建立存储空间，如：int b;</li></ol><h2 id="常量-define" tabindex="-1"><a class="header-anchor" href="#常量-define" aria-hidden="true">#</a> 常量 define</h2><p>1.通过<code>#define</code>定义的常量是自动匹配数据类型的,在编译预处理阶段是宏展开,直接将该值赋给c,也就是说在预处理时变成了<code>float c = 3.1415926</code></p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">PI</span> <span class="token expression"><span class="token number">3.1415926</span></span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> <span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
	<span class="token keyword">float</span> c <span class="token operator">=</span> PI<span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%f\\n&quot;</span><span class="token punctuation">,</span> c<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">getchar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常量const" tabindex="-1"><a class="header-anchor" href="#常量const" aria-hidden="true">#</a> 常量const</h2><ol><li>const的常量不能被直接赋值,但是可以通过指针来修改,所以是不安全的</li></ol>`,7),o=[p];function c(i,l){return s(),a("div",null,o)}const d=n(e,[["render",c],["__file","1_6变量和常量.html.vue"]]);export{d as default};
