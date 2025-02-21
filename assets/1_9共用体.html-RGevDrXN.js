import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-jdLxCr9I.js";const p={},e=t(`<ol><li>几个不同各类型的变量共占一段内存，他们是重叠的关系</li><li>共用体和结构体一样都是值传递,在作为函数参数的时候最好用指针,不然形参申请内存很浪费空间</li></ol><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span> <span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span><span class="token comment">//引用函数库</span></span>
<span class="token macro property"><span class="token directive-hash">#</span> <span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>
<span class="token keyword">union</span> info<span class="token punctuation">{</span>
	<span class="token keyword">char</span> name<span class="token punctuation">[</span><span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">double</span> age<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token comment">//共用体大小必须大于最大成员类型，且一定是最小类型的整数倍</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">union</span> info<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">union</span> info student<span class="token punctuation">;</span><span class="token comment">//大括号只能初始化第一个变量</span>
	student<span class="token punctuation">.</span>age<span class="token operator">=</span><span class="token number">1.1</span><span class="token punctuation">;</span>
	<span class="token function">sprintf</span><span class="token punctuation">(</span>student<span class="token punctuation">.</span>name<span class="token punctuation">,</span><span class="token string">&quot;li&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//共用体只保存最后一个赋值的成员</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%s\\n%d&quot;</span><span class="token punctuation">,</span>student<span class="token punctuation">.</span>name<span class="token punctuation">,</span>student<span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[e];function c(i,l){return s(),a("div",null,o)}const d=n(p,[["render",c],["__file","1_9共用体.html.vue"]]);export{d as default};
