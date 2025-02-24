const n=JSON.parse('{"key":"v-531b8808","path":"/4%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/2c%E8%AF%AD%E8%A8%80/4%E5%87%BD%E6%95%B0/4%E5%87%BD%E6%95%B0%E8%BF%94%E5%9B%9E%E5%80%BC.html","title":"","lang":"zh-CN","frontmatter":{"description":"函数运行结束后会销毁在它内部定义的局部数据,包含形参 这里所谓的销毁并不是将局部数据所占用的内存全部抹掉，而是程序放弃对它的使用权限，弃之不理，后面的代码可以随意使用这块内存 函数的返回指针尽量不要指向这些数据 返回变量值的时候，直接将局部变量的值传给了了寄存器eax，也就是说，函数返回以后，虽然局部变量已被释放，但是eax里面的还有一个值的拷贝。在函数结束返回时，将局部变量值拷贝给一个临时变量，然后将这个临时变量返回给调用函数。因此，即使局部变量在返回时已经释放内存，也不影响返回的变量值。 #pragma warning(disable:4996) #include &lt;stdio.h&gt; int* test(int a) { \\tprintf(\\"形参地址:%x,值:%d\\\\n\\", &amp;a, a);//形参地址 : 10ff820, 值 : 10 \\treturn &amp;a; } int main(int argc, char *argv[]) { \\tint a = 10; \\tprintf(\\"实参地址:%x,值:%d\\\\n\\", &amp;a, a);//实参地址:10ff900, 值 : 10 \\tint* p = test(a); \\tprintf(\\"返回地址:%x,值:%d\\\\n\\", p, *p);//返回地址 : 10ff820, 值 : 10 \\tprintf(\\"改变函数栈内申请的变量a的值\\\\n\\"); \\tprintf(\\"返回地址:%x,值:%d\\\\n\\", p, *p);//返回地址 : 10ff820, 值 : 5668392 \\tsystem(\\"pause\\"); \\treturn 0; }","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/4%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/2c%E8%AF%AD%E8%A8%80/4%E5%87%BD%E6%95%B0/4%E5%87%BD%E6%95%B0%E8%BF%94%E5%9B%9E%E5%80%BC.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:description","content":"函数运行结束后会销毁在它内部定义的局部数据,包含形参 这里所谓的销毁并不是将局部数据所占用的内存全部抹掉，而是程序放弃对它的使用权限，弃之不理，后面的代码可以随意使用这块内存 函数的返回指针尽量不要指向这些数据 返回变量值的时候，直接将局部变量的值传给了了寄存器eax，也就是说，函数返回以后，虽然局部变量已被释放，但是eax里面的还有一个值的拷贝。在函数结束返回时，将局部变量值拷贝给一个临时变量，然后将这个临时变量返回给调用函数。因此，即使局部变量在返回时已经释放内存，也不影响返回的变量值。 #pragma warning(disable:4996) #include &lt;stdio.h&gt; int* test(int a) { \\tprintf(\\"形参地址:%x,值:%d\\\\n\\", &amp;a, a);//形参地址 : 10ff820, 值 : 10 \\treturn &amp;a; } int main(int argc, char *argv[]) { \\tint a = 10; \\tprintf(\\"实参地址:%x,值:%d\\\\n\\", &amp;a, a);//实参地址:10ff900, 值 : 10 \\tint* p = test(a); \\tprintf(\\"返回地址:%x,值:%d\\\\n\\", p, *p);//返回地址 : 10ff820, 值 : 10 \\tprintf(\\"改变函数栈内申请的变量a的值\\\\n\\"); \\tprintf(\\"返回地址:%x,值:%d\\\\n\\", p, *p);//返回地址 : 10ff820, 值 : 5668392 \\tsystem(\\"pause\\"); \\treturn 0; }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-24T12:46:58.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-24T12:46:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-24T12:46:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[],"git":{"createdTime":1740401218000,"updatedTime":1740401218000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":1.19,"words":358},"filePathRelative":"4编程语言/2c语言/4函数/4函数返回值.md","localizedDate":"2025年2月24日","excerpt":"<ol>\\n<li>函数运行结束后会销毁在它内部定义的局部数据,包含形参</li>\\n<li>这里所谓的销毁并不是将局部数据所占用的内存全部抹掉，而是程序放弃对它的使用权限，弃之不理，后面的代码可以随意使用这块内存</li>\\n<li>函数的返回指针尽量不要指向这些数据</li>\\n<li>返回变量值的时候，直接将局部变量的值传给了了寄存器eax，也就是说，函数返回以后，虽然局部变量已被释放，但是eax里面的还有一个值的拷贝。在函数结束返回时，将局部变量值拷贝给一个临时变量，然后将这个临时变量返回给调用函数。因此，即使局部变量在返回时已经释放内存，也不影响返回的变量值。</li>\\n</ol>\\n<div class=\\"language-c line-numbers-mode\\" data-ext=\\"c\\"><pre class=\\"language-c\\"><code><span class=\\"token macro property\\"><span class=\\"token directive-hash\\">#</span><span class=\\"token directive keyword\\">pragma</span> <span class=\\"token expression\\"><span class=\\"token function\\">warning</span><span class=\\"token punctuation\\">(</span>disable<span class=\\"token operator\\">:</span><span class=\\"token number\\">4996</span><span class=\\"token punctuation\\">)</span></span></span>\\n<span class=\\"token macro property\\"><span class=\\"token directive-hash\\">#</span><span class=\\"token directive keyword\\">include</span> <span class=\\"token string\\">&lt;stdio.h&gt;</span></span>\\n<span class=\\"token keyword\\">int</span><span class=\\"token operator\\">*</span> <span class=\\"token function\\">test</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span> a<span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">{</span>\\n\\t<span class=\\"token function\\">printf</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"形参地址:%x,值:%d\\\\n\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token operator\\">&amp;</span>a<span class=\\"token punctuation\\">,</span> a<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span><span class=\\"token comment\\">//形参地址 : 10ff820, 值 : 10</span>\\n\\t<span class=\\"token keyword\\">return</span> <span class=\\"token operator\\">&amp;</span>a<span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">int</span> <span class=\\"token function\\">main</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span> argc<span class=\\"token punctuation\\">,</span> <span class=\\"token keyword\\">char</span> <span class=\\"token operator\\">*</span>argv<span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">{</span>\\n\\t<span class=\\"token keyword\\">int</span> a <span class=\\"token operator\\">=</span> <span class=\\"token number\\">10</span><span class=\\"token punctuation\\">;</span>\\n\\t<span class=\\"token function\\">printf</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"实参地址:%x,值:%d\\\\n\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token operator\\">&amp;</span>a<span class=\\"token punctuation\\">,</span> a<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span><span class=\\"token comment\\">//实参地址:10ff900, 值 : 10</span>\\n\\t<span class=\\"token keyword\\">int</span><span class=\\"token operator\\">*</span> p <span class=\\"token operator\\">=</span> <span class=\\"token function\\">test</span><span class=\\"token punctuation\\">(</span>a<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t<span class=\\"token function\\">printf</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"返回地址:%x,值:%d\\\\n\\"</span><span class=\\"token punctuation\\">,</span> p<span class=\\"token punctuation\\">,</span> <span class=\\"token operator\\">*</span>p<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span><span class=\\"token comment\\">//返回地址 : 10ff820, 值 : 10</span>\\n\\t<span class=\\"token function\\">printf</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"改变函数栈内申请的变量a的值\\\\n\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> \\n\\t<span class=\\"token function\\">printf</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"返回地址:%x,值:%d\\\\n\\"</span><span class=\\"token punctuation\\">,</span> p<span class=\\"token punctuation\\">,</span> <span class=\\"token operator\\">*</span>p<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span><span class=\\"token comment\\">//返回地址 : 10ff820, 值 : 5668392</span>\\n\\t<span class=\\"token function\\">system</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"pause\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t<span class=\\"token keyword\\">return</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}');export{n as data};
