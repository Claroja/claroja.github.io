import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as t}from"./app-7knaTE3M.js";const p={},o=t(`<ol><li>函数运行结束后会销毁在它内部定义的局部数据,包含形参</li><li>这里所谓的销毁并不是将局部数据所占用的内存全部抹掉，而是程序放弃对它的使用权限，弃之不理，后面的代码可以随意使用这块内存</li><li>函数的返回指针尽量不要指向这些数据</li><li>返回变量值的时候，直接将局部变量的值传给了了寄存器eax，也就是说，函数返回以后，虽然局部变量已被释放，但是eax里面的还有一个值的拷贝。在函数结束返回时，将局部变量值拷贝给一个临时变量，然后将这个临时变量返回给调用函数。因此，即使局部变量在返回时已经释放内存，也不影响返回的变量值。</li></ol><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">pragma</span> <span class="token expression"><span class="token function">warning</span><span class="token punctuation">(</span>disable<span class="token operator">:</span><span class="token number">4996</span><span class="token punctuation">)</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">int</span><span class="token operator">*</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;形参地址:%x,值:%d\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>a<span class="token punctuation">,</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//形参地址 : 10ff820, 值 : 10</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>a<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token operator">*</span>argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;实参地址:%x,值:%d\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>a<span class="token punctuation">,</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//实参地址:10ff900, 值 : 10</span>
	<span class="token keyword">int</span><span class="token operator">*</span> p <span class="token operator">=</span> <span class="token function">test</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;返回地址:%x,值:%d\\n&quot;</span><span class="token punctuation">,</span> p<span class="token punctuation">,</span> <span class="token operator">*</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//返回地址 : 10ff820, 值 : 10</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;改变函数栈内申请的变量a的值\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;返回地址:%x,值:%d\\n&quot;</span><span class="token punctuation">,</span> p<span class="token punctuation">,</span> <span class="token operator">*</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//返回地址 : 10ff820, 值 : 5668392</span>
	<span class="token function">system</span><span class="token punctuation">(</span><span class="token string">&quot;pause&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考: https://www.cnblogs.com/xbook-ben/archive/2019/05/22/10902299.html http://c.biancheng.net/view/2015.html</p>`,3),e=[o];function c(i,l){return s(),a("div",null,e)}const r=n(p,[["render",c],["__file","4函数返回值.html.vue"]]);export{r as default};
