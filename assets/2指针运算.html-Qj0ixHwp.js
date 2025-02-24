import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as p}from"./app-A10JnHE0.js";const t={},e=p(`<h2 id="赋值运算" tabindex="-1"><a class="header-anchor" href="#赋值运算" aria-hidden="true">#</a> 赋值运算</h2><p>p=&amp;a; //将变量地址赋值给指针 p=array; //将数组地址赋值给指针 p=&amp;array[i]; //将数组元素赋值给指针 p1=p2; // 将指针地址赋值给指针</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span> <span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span><span class="token comment">//引用函数库</span></span>
<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span><span class="token comment">//变量赋值，此时a变量的地址是&amp;a</span>
	<span class="token keyword">int</span> <span class="token operator">*</span>p1 <span class="token operator">=</span> <span class="token operator">&amp;</span>a<span class="token punctuation">;</span><span class="token comment">//将a变量的地址赋值给p1</span>
	<span class="token keyword">int</span> <span class="token operator">*</span>p2 <span class="token operator">=</span> p1<span class="token punctuation">;</span><span class="token comment">//将p1的值赋值给p2</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%x %x %x&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>a<span class="token punctuation">,</span>p1<span class="token punctuation">,</span>p2<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\n%d %d %d&quot;</span><span class="token punctuation">,</span>a<span class="token punctuation">,</span><span class="token operator">*</span>p1<span class="token punctuation">,</span><span class="token operator">*</span>p2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

f0889414 f0889414 f0889414
<span class="token number">10</span> <span class="token number">10</span> <span class="token number">10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>*(p+1)</code>和<code>*p++</code>意义不相同,前者没有改变p的地址,而后者改变了p的地址</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token operator">*</span>argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
<span class="token comment">//数组名是数组的首地址,是一个常量,它就是一个指针</span>
	<span class="token keyword">int</span> arr<span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span><span class="token operator">*</span> p <span class="token operator">=</span> arr<span class="token punctuation">;</span>
	<span class="token comment">//指向数组的指针,当操作指针的时候,间接操作</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span> p<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token function">system</span><span class="token punctuation">(</span><span class="token string">&quot;pause&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数组中的指针运算" tabindex="-1"><a class="header-anchor" href="#数组中的指针运算" aria-hidden="true">#</a> 数组中的指针运算</h2><p>指针的自增和自减运算只有在数组中才有意义，因为数组中的元素类型是一定的，就是指针的+1前进的长度是一定的。 这也解释了为什么数组的类型是要求一致的 指针++就是按照一个指针类型的大小，前进一个类型的大小，如果是int就前进四个字节</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span> <span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span><span class="token comment">//引用函数库</span></span>
<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">int</span> a<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%x\\n&quot;</span><span class="token punctuation">,</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//打印数组的首地址</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token number">5</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//下标循环</span>
		<span class="token comment">//打印数组元素的值</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d,%d\\n&quot;</span><span class="token punctuation">,</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token operator">*</span><span class="token punctuation">(</span>a<span class="token operator">+</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//a是一个地址值，a+1表示地址值前进一个该类型大小的字节</span>
		<span class="token comment">//打印数组元素的地址</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%x,%x\\n&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span>a<span class="token operator">+</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span>p <span class="token operator">=</span>a<span class="token punctuation">;</span>p<span class="token operator">&lt;</span>a<span class="token operator">+</span><span class="token number">5</span><span class="token punctuation">;</span>p<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//指针循环</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\n%d,%x&quot;</span><span class="token punctuation">,</span> <span class="token operator">*</span>p<span class="token punctuation">,</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>指针降级操作,就是值的操作</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token operator">*</span>p<span class="token operator">=</span><span class="token number">100</span><span class="token punctuation">;</span>
<span class="token operator">*</span><span class="token punctuation">(</span>p<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token number">200</span><span class="token punctuation">;</span>
p<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">300</span><span class="token punctuation">;</span>
<span class="token operator">*</span><span class="token punctuation">(</span>p<span class="token operator">+</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token number">300</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(t,[["render",c],["__file","2指针运算.html.vue"]]);export{k as default};
