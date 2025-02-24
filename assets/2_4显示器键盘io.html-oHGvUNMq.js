import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as e,e as d}from"./app-A10JnHE0.js";const n={},i=d(`<p><code>include &lt;stdio.h&gt;</code></p><table><thead><tr><th>函数</th><th>描述</th><th>参数</th><th>返回</th></tr></thead><tbody><tr><td>char *gets(char *s);</td><td>从标准输入读入字符，并保存到s指定的内存空间，直到出现换行符或读到文件结尾为止</td><td>s：字符串首地址</td><td>成功：读入的字符串,失败：NULL</td></tr><tr><td>char *fgets(char *s, int size, FILE *stream);</td><td>从stream指定的文件内读入字符，保存到s所指定的内存空间，直到出现换行字符、读到文件结尾或是已读了size - 1个字符为止，最后会自动加上字符 &#39;\\0&#39; 作为字符串结束。</td><td>s：字符串size：指定最大读取字符串的长度（size - 1）stream：文件指针，如果读键盘输入的字符串，固定写为stdin</td><td>成功：成功读取的字符串；读到文件尾或出错： NULL</td></tr><tr><td>int puts(const char *s);</td><td>标准设备输出s字符串，在输出完成后自动输出一个&#39;\\n&#39;。</td><td>s：字符串首地址</td><td>成功：非负数；失败：-1</td></tr><tr><td>int fputs(const char * str, FILE * stream);</td><td>将str所指定的字符串写入到stream指定的文件中， 字符串结束符 &#39;\\0&#39; 不写入文件。</td><td>str：字符串stream：文件指针，如果把字符串输出到屏幕，固定写为stdout</td><td>成功：0 失败：-1</td></tr></tbody></table><p>gets(str)与scanf(“%s”,str)的区别： gets(str)允许输入的字符串含有空格 scanf(“%s”,str)不允许含有空格</p><p>注意：由于scanf()和gets()无法知道字符串s大小，必须遇到换行符或读到文件结尾为止才接收输入，因此容易导致字符数组越界(缓冲区溢出)的情况。</p><p>fgets()在读取一个用户通过键盘输入的字符串的时候，同时把用户输入的回车也做为字符串的一部分。通过scanf和gets输入一个字符串的时候，不包含结尾的“\\n”，但通过fgets结尾多了“\\n”。fgets()函数是安全的，不存在缓冲区溢出的问题。</p><p>fputs()是puts()的文件操作版本，但fputs()不会自动输出一个&#39;\\n&#39;。</p><h1 id="scanf" tabindex="-1"><a class="header-anchor" href="#scanf" aria-hidden="true">#</a> scanf</h1><p><code>scanf</code>遇到<code>空格</code>会停止输入,所以需要设置<code>$[^n]</code>,该符号的含义是非换行符都被读入</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#define _CRT_SECURE_NO_WARNINGS
#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;
int main(void)
{
	char arr[100];
	scanf(&quot;%s&quot;, arr);
	printf(&quot;%s\\n&quot;, arr);
	system(&quot;pause&quot;);
	char arr1[100];
	scanf(&quot;%[^\\n]&quot;, arr1);
	printf(&quot;%s\\n&quot;, arr1);
	system(&quot;pause&quot;);
	return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),r=[i];function a(c,l){return s(),e("div",null,r)}const v=t(n,[["render",a],["__file","2_4显示器键盘io.html.vue"]]);export{v as default};
