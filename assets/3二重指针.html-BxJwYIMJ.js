import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as p}from"./app-nD1Z-e8V.js";const t={},e=p(`<h2 id="基础" tabindex="-1"><a class="header-anchor" href="#基础" aria-hidden="true">#</a> 基础</h2><ol><li>二重指针和一重指针本质没有区别(和普通变量也没有区别)</li><li>二重指针类型(**)只是规定了指向的变量必须是一重指针(编译器检查如果不匹配会报错)</li><li>二重指针,函数指针,数组指针,结构体指针的出现都是为了方便编译器帮助做静态类型检查</li></ol><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">pragma</span> <span class="token expression"><span class="token function">warning</span><span class="token punctuation">(</span>disable<span class="token operator">:</span><span class="token number">4996</span><span class="token punctuation">)</span></span></span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span> <span class="token operator">*</span>p1 <span class="token operator">=</span> <span class="token operator">&amp;</span>a<span class="token punctuation">;</span>
	<span class="token keyword">int</span> <span class="token operator">*</span><span class="token operator">*</span>p2 <span class="token operator">=</span> <span class="token operator">&amp;</span>p1<span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;a的地址%x,a的值%d\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>a<span class="token punctuation">,</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;p1的地址%x,p1的值%x\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>p1<span class="token punctuation">,</span> p1<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;p2的地址%x,p2的值%x\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>p2<span class="token punctuation">,</span> p2<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">system</span><span class="token punctuation">(</span><span class="token string">&quot;pause&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>



a的地址f6f9b4<span class="token punctuation">,</span>a的值<span class="token number">1</span>
p1的地址f6f99c<span class="token punctuation">,</span>p1的值f6f9b4
p2的地址f6f990<span class="token punctuation">,</span>p2的值f6f99c
请按任意键继续<span class="token punctuation">.</span> <span class="token punctuation">.</span> <span class="token punctuation">.</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://i-blog.csdnimg.cn/blog_migrate/164f9f8928b85d25493dd82292058877.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure><h2 id="二重指针的作用" tabindex="-1"><a class="header-anchor" href="#二重指针的作用" aria-hidden="true">#</a> 二重指针的作用</h2><ol><li>更改一重指针的指向</li></ol><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">pragma</span> <span class="token expression"><span class="token function">warning</span><span class="token punctuation">(</span>disable<span class="token operator">:</span><span class="token number">4996</span><span class="token punctuation">)</span></span></span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span> <span class="token operator">*</span>p1 <span class="token operator">=</span> <span class="token operator">&amp;</span>a<span class="token punctuation">;</span>
	<span class="token keyword">int</span> <span class="token operator">*</span><span class="token operator">*</span>p2 <span class="token operator">=</span> <span class="token operator">&amp;</span>p1<span class="token punctuation">;</span>

	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;a的地址%x,a的值%d\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>a<span class="token punctuation">,</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;b的地址%x,b的值%d\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>b<span class="token punctuation">,</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;p1的地址%x,p1的值%x\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>p1<span class="token punctuation">,</span> p1<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;p2的地址%x,p2的值%x\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>p2<span class="token punctuation">,</span> p2<span class="token punctuation">)</span><span class="token punctuation">;</span>

	
	<span class="token operator">*</span>p2 <span class="token operator">=</span> <span class="token operator">&amp;</span>b<span class="token punctuation">;</span><span class="token comment">// 等价于p1 = &amp;b;</span>

	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;a的地址%x,a的值%d\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>a<span class="token punctuation">,</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;b的地址%x,b的值%d\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>b<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;p1的地址%x,p1的值%x\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>p1<span class="token punctuation">,</span> p1<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;p2的地址%x,p2的值%x\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>p2<span class="token punctuation">,</span> p2<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token function">system</span><span class="token punctuation">(</span><span class="token string">&quot;pause&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>确实通过改变指针本身指向<code>(1p1 = &amp;b)</code>也可以完成二重指针的作用(<code>*p2 = &amp;b</code>),但是在函数中就必须要用到二重指针</li></ol><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">pragma</span> <span class="token expression"><span class="token function">warning</span><span class="token punctuation">(</span>disable<span class="token operator">:</span><span class="token number">4996</span><span class="token punctuation">)</span></span></span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>

<span class="token keyword">void</span> <span class="token function">change</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span>p<span class="token punctuation">,</span> <span class="token keyword">int</span> <span class="token operator">*</span>b<span class="token punctuation">)</span>
<span class="token punctuation">{</span><span class="token comment">//函数change创建了p的新的副本,函数结束后销毁,所以并没有改变函数外原指针的指向</span>
	p <span class="token operator">=</span> <span class="token operator">&amp;</span>b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span> <span class="token operator">*</span>p1 <span class="token operator">=</span> <span class="token operator">&amp;</span>a<span class="token punctuation">;</span>

	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;a的地址%x,a的值%d\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>a<span class="token punctuation">,</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;b的地址%x,b的值%d\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>b<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;p1的地址%x,p1的值%x\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>p1<span class="token punctuation">,</span> p1<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token function">change</span><span class="token punctuation">(</span>p1<span class="token punctuation">,</span> <span class="token operator">&amp;</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//p1指针并没有改变</span>

	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;p1的地址%x,p1的值%x\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>p1<span class="token punctuation">,</span> p1<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">system</span><span class="token punctuation">(</span><span class="token string">&quot;pause&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>



a的地址<span class="token number">8ff</span>b6c<span class="token punctuation">,</span>a的值<span class="token number">1</span>
b的地址<span class="token number">8ff</span>b60<span class="token punctuation">,</span>b的值<span class="token number">2</span>
p1的地址<span class="token number">8ff</span>b54<span class="token punctuation">,</span>p1的值<span class="token number">8ff</span>b6c
p1的地址<span class="token number">8ff</span>b54<span class="token punctuation">,</span>p1的值<span class="token number">8ff</span>b6c
请按任意键继续<span class="token punctuation">.</span> <span class="token punctuation">.</span> <span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">pragma</span> <span class="token expression"><span class="token function">warning</span><span class="token punctuation">(</span>disable<span class="token operator">:</span><span class="token number">4996</span><span class="token punctuation">)</span></span></span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>

<span class="token keyword">void</span> <span class="token function">change</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span>p<span class="token punctuation">,</span> <span class="token keyword">int</span> <span class="token operator">*</span>b<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token operator">*</span>p <span class="token operator">=</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span> <span class="token operator">*</span>p1 <span class="token operator">=</span> <span class="token operator">&amp;</span>a<span class="token punctuation">;</span>


	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;a的地址%x,a的值%d\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>a<span class="token punctuation">,</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;b的地址%x,b的值%d\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>b<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;p1的地址%x,p1的值%x\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>p1<span class="token punctuation">,</span> p1<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">int</span> <span class="token operator">*</span><span class="token operator">*</span>p2 <span class="token operator">=</span> <span class="token operator">&amp;</span>p1<span class="token punctuation">;</span><span class="token comment">//创建二级指针,二级指针的值是一级指针的地址,进入函数后,会创建二级指针副本(二级指针本身地址发生变化,但是他的值,既一级指针的地址不会发生变化)</span>
	<span class="token function">change</span><span class="token punctuation">(</span>p2<span class="token punctuation">,</span> <span class="token operator">&amp;</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;p1的地址%x,p1的值%x\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>p1<span class="token punctuation">,</span> p1<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">system</span><span class="token punctuation">(</span><span class="token string">&quot;pause&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


a的地址fefddc<span class="token punctuation">,</span>a的值<span class="token number">1</span>
b的地址fefdd0<span class="token punctuation">,</span>b的值<span class="token number">2</span>
p1的地址fefdc4<span class="token punctuation">,</span>p1的值fefddc
p1的地址fefdc4<span class="token punctuation">,</span>p1的值fefdd0
请按任意键继续<span class="token punctuation">.</span> <span class="token punctuation">.</span> <span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>cuda中的cudaMalloc也是传递的二重指针 参考: https://www.jianshu.com/p/48f36691c76c</li></ol>`,11),o=[e];function c(i,l){return s(),a("div",null,o)}const k=n(t,[["render",c],["__file","3二重指针.html.vue"]]);export{k as default};
