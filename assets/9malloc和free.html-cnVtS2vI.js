import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-A10JnHE0.js";const e={},i=t(`<h2 id="基础" tabindex="-1"><a class="header-anchor" href="#基础" aria-hidden="true">#</a> 基础</h2><ol><li>头文件<code>#include &lt;stdlib.h&gt;</code>,原型<code>void* malloc (size_t size);</code></li><li>size 为需要分配的内存空间的大小，以字节（Byte）计</li><li>分配指定大小的空间,未初始化,值是未知的,如果希望初始化使用<code>calloc</code></li><li>返回类型<code>void *</code>,并非是没有返回值或返回空指针,而是返回指针类型未知.所以需要将void指针转换成我们希望的类型.<code>char *p = (char *)malloc(10);//申请10个字节字符空间</code></li><li>成功返回地址,失败返回NULL</li><li>申请可能成功,也可能不成功,所以要自行判断是否成功</li><li>free释放指针说的是本程序失去所有权,而不是将内存重置为初始值(内存仍保留本程序更改过的值,只不过现在别的程序可以访问)</li></ol><p>动态分配内存应用——动态数组</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span> <span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span><span class="token comment">//引用函数库</span></span>
<span class="token macro property"><span class="token directive-hash">#</span> <span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>
<span class="token keyword">void</span> <span class="token function">array</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">int</span> <span class="token operator">*</span>p <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span><span class="token punctuation">)</span> <span class="token function">malloc</span><span class="token punctuation">(</span>x<span class="token operator">*</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//动态分配数组，右边是一个指针，内存已经切割</span>
<span class="token comment">//	int *p = (void *) malloc(x*sizeof(int));//右边是一个地址和总长度，内存未切割</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i <span class="token operator">&lt;</span> x<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//下标遍历数组</span>
		p<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">=</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\n%d,%x&quot;</span><span class="token punctuation">,</span>p<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>p<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token comment">//	for (int *px =p,i=0;px&lt;p+x;px++,i++){//指针遍历数组</span>
<span class="token comment">//		*px = i+1;</span>
<span class="token comment">//		printf(&quot;\\n%d,%x&quot;,*px,px);</span>
<span class="token comment">//	}</span>
<span class="token punctuation">}</span>
<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token function">array</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="函数说明" tabindex="-1"><a class="header-anchor" href="#函数说明" aria-hidden="true">#</a> 函数说明</h2><table><thead><tr><th>函数</th><th>描述</th><th>参数</th><th>返回</th></tr></thead><tbody><tr><td>void *malloc(size_t size);</td><td>在内存的动态存储区(堆区)中分配一块长度为size字节的连续区域，用来存放类型说明符指定的类型。分配的内存空间内容不确定，一般使用memset初始化。</td><td></td><td></td></tr><tr><td>void free(void *ptr);</td><td>释放ptr所指向的一块内存空间，ptr是一个任意类型的指针变量，指向被释放区域的首地址。对同一内存空间多次释放会出错</td><td></td><td></td></tr></tbody></table><p>按字节来重置,所以只能重置为0(不能按类型大小重置,char是1个字节是可以的) memset可以重置栈内存里的数组</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#include&lt;stdio.h&gt;
#include&lt;string.h&gt;
#include&lt;stdlib.h&gt;

int main()
{
	int* p = (int*)malloc(sizeof(int) * 10);//按字节来申请
	memset(p, 1, 40);//按字节来重置,所以只能重置为0(不能按类型大小重置)
	for (int i = 0; i &lt; 10; i++) {
		printf(&quot;%d\\n&quot;, p[i]);
	}
	free(p);
	system(&quot;pause&quot;);
	return EXIT_SUCCESS;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),p=[i];function o(c,l){return s(),a("div",null,p)}const u=n(e,[["render",o],["__file","9malloc和free.html.vue"]]);export{u as default};
