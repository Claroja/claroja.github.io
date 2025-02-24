import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-A10JnHE0.js";const e={},p=t(`<h1 id="基础" tabindex="-1"><a class="header-anchor" href="#基础" aria-hidden="true">#</a> 基础</h1><ol><li>这些函数都在表头文件 #include&lt;stdlib.h&gt;中</li></ol><h1 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h1><p>atof（将字符串转换成浮点型数）<br> double atof(const char *nptr) 将字符串转换为浮点数</p><p>strtod（将字符串转换成浮点数） 定义函数 double strtod(const char *nptr,char **endptr);</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;stdlib.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">char</span> <span class="token operator">*</span>a <span class="token operator">=</span> <span class="token string">&quot; 100.23&quot;</span><span class="token punctuation">;</span>
	<span class="token keyword">float</span> b <span class="token operator">=</span> <span class="token function">atof</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;a = %.2f\\n&quot;</span><span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">system</span><span class="token punctuation">(</span><span class="token string">&quot;pause&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>atoi将字符串转换成整型数 定义函数 int atoi(const char *nptr);</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;stdlib.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">char</span> a<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot; - 100&quot;</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span> c <span class="token operator">=</span> <span class="token function">atoi</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;c = %d\\n&quot;</span><span class="token punctuation">,</span> c<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">system</span><span class="token punctuation">(</span><span class="token string">&quot;pause&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>atol（将字符串转换成长整型数）<br> 定义函数 long atol(const char *nptr); strtol（将字符串转换成长整型数）<br> 定义函数 long int strtol(const char *nptr,char **endptr,int base); strtoul（将字符串转换成无符号长整型数） 定义函数 unsigned long int strtoul(const char *nptr,char **endptr,int base);</p><p>ltoa 把一长整形转换为字符串 用 法:char *ltoa(long value, char *string, int radix); ultoa:把一无符号长整形转换为字符串 用 法:char *ultoa(unsigned long value, char *string, int radix);</p><p>gcvt（将浮点型数转换为字符串，取四舍五入）<br> 表头文件 #include&lt;stdlib.h&gt;</p><p>ecvt将双精度浮点型数转换为字符串，转换结果中不包括十进制小数点 char *ecvt(double value, int ndigit, int *decpt, int *sign);</p><p>fcvt指定位数为转换精度，其余同ecvt 用 法：char *fcvt(double value, int ndigit, int *decpt, int *sign);</p><p>toascii（将整型数转换成合法的ASCII 码字符） 定义函数 int toascii(int c)</p><p>参考: https://blog.csdn.net/weixin_33919941/article/details/86053673</p>`,15),c=[p];function o(i,l){return s(),a("div",null,c)}const d=n(e,[["render",o],["__file","2_3字符串转化.html.vue"]]);export{d as default};
