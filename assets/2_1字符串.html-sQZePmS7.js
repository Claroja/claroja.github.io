const n=JSON.parse(`{"key":"v-39dbbc4b","path":"/2%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/2c/2%E5%A4%8D%E5%90%88%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B/2_1%E5%AD%97%E7%AC%A6%E4%B8%B2.html","title":"基础","lang":"zh-CN","frontmatter":{"description":"基础 在printf时,遇到\\\\0会停止打印 字符串字面量\\"\\"在输入数组时会自动在末尾加入'\\\\0'也就是说,字符串字面量在内存的长度是多一个字节的 #include &lt;stdio.h&gt; #include &lt;stdlib.h&gt; int main(void) { \\tchar arr[10] = { 'h','e','l','l','o' }; \\t//%s遇到'\\\\0'就会停止打印,而在ascii中'\\\\0'就是数字0(数组未初始化的值都是0) \\tprintf(\\"%s\\\\n\\", arr); \\tchar arr1[]= { 'h','e','l','l','o' };//这里只输入了5个字符'h' 'e' 'l' 'l' 'o' \\tchar arr2[] = \\"hello\\";//这里输入了六个字符\\"hello\\"和\\"\\\\0\\" \\tprintf(\\"%d\\\\t%d\\\\n\\", sizeof(arr1),sizeof(arr2)); \\tprintf(\\"%s\\\\n\\", arr1);//因为arr1数组里没有'\\\\0'所以会继续打印一直到有'\\\\0'为止 \\tsystem(\\"pause\\"); \\treturn 0; }","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/2%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/2c/2%E5%A4%8D%E5%90%88%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B/2_1%E5%AD%97%E7%AC%A6%E4%B8%B2.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"基础"}],["meta",{"property":"og:description","content":"基础 在printf时,遇到\\\\0会停止打印 字符串字面量\\"\\"在输入数组时会自动在末尾加入'\\\\0'也就是说,字符串字面量在内存的长度是多一个字节的 #include &lt;stdio.h&gt; #include &lt;stdlib.h&gt; int main(void) { \\tchar arr[10] = { 'h','e','l','l','o' }; \\t//%s遇到'\\\\0'就会停止打印,而在ascii中'\\\\0'就是数字0(数组未初始化的值都是0) \\tprintf(\\"%s\\\\n\\", arr); \\tchar arr1[]= { 'h','e','l','l','o' };//这里只输入了5个字符'h' 'e' 'l' 'l' 'o' \\tchar arr2[] = \\"hello\\";//这里输入了六个字符\\"hello\\"和\\"\\\\0\\" \\tprintf(\\"%d\\\\t%d\\\\n\\", sizeof(arr1),sizeof(arr2)); \\tprintf(\\"%s\\\\n\\", arr1);//因为arr1数组里没有'\\\\0'所以会继续打印一直到有'\\\\0'为止 \\tsystem(\\"pause\\"); \\treturn 0; }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-21T12:59:55.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-21T12:59:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"基础\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-21T12:59:55.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"字符串初始化","slug":"字符串初始化","link":"#字符串初始化","children":[]},{"level":2,"title":"字符串输入","slug":"字符串输入","link":"#字符串输入","children":[]},{"level":2,"title":"其他","slug":"其他","link":"#其他","children":[]}],"git":{"createdTime":1740142795000,"updatedTime":1740142795000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":4.45,"words":1336},"filePathRelative":"2编程语言/2c/2复合数据类型/2_1字符串.md","localizedDate":"2025年2月21日","excerpt":"<h1> 基础</h1>\\n<ol>\\n<li>在<code>printf</code>时,遇到<code>\\\\0</code>会停止打印</li>\\n<li>字符串字面量\\"\\"在输入数组时会自动在末尾加入'\\\\0'也就是说,字符串字面量在内存的长度是多一个字节的</li>\\n</ol>\\n<div class=\\"language-c line-numbers-mode\\" data-ext=\\"c\\"><pre class=\\"language-c\\"><code><span class=\\"token macro property\\"><span class=\\"token directive-hash\\">#</span><span class=\\"token directive keyword\\">include</span> <span class=\\"token string\\">&lt;stdio.h&gt;</span></span>\\n<span class=\\"token macro property\\"><span class=\\"token directive-hash\\">#</span><span class=\\"token directive keyword\\">include</span> <span class=\\"token string\\">&lt;stdlib.h&gt;</span></span>\\n<span class=\\"token keyword\\">int</span> <span class=\\"token function\\">main</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">void</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">{</span>\\n\\t<span class=\\"token keyword\\">char</span> arr<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">10</span><span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span> <span class=\\"token char\\">'h'</span><span class=\\"token punctuation\\">,</span><span class=\\"token char\\">'e'</span><span class=\\"token punctuation\\">,</span><span class=\\"token char\\">'l'</span><span class=\\"token punctuation\\">,</span><span class=\\"token char\\">'l'</span><span class=\\"token punctuation\\">,</span><span class=\\"token char\\">'o'</span> <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n\\n\\t<span class=\\"token comment\\">//%s遇到'\\\\0'就会停止打印,而在ascii中'\\\\0'就是数字0(数组未初始化的值都是0)</span>\\n\\t<span class=\\"token function\\">printf</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"%s\\\\n\\"</span><span class=\\"token punctuation\\">,</span> arr<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t<span class=\\"token keyword\\">char</span> arr1<span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span><span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span> <span class=\\"token char\\">'h'</span><span class=\\"token punctuation\\">,</span><span class=\\"token char\\">'e'</span><span class=\\"token punctuation\\">,</span><span class=\\"token char\\">'l'</span><span class=\\"token punctuation\\">,</span><span class=\\"token char\\">'l'</span><span class=\\"token punctuation\\">,</span><span class=\\"token char\\">'o'</span> <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span><span class=\\"token comment\\">//这里只输入了5个字符'h' 'e' 'l' 'l' 'o'</span>\\n\\t<span class=\\"token keyword\\">char</span> arr2<span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"hello\\"</span><span class=\\"token punctuation\\">;</span><span class=\\"token comment\\">//这里输入了六个字符\\"hello\\"和\\"\\\\0\\"</span>\\n\\t<span class=\\"token function\\">printf</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"%d\\\\t%d\\\\n\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token keyword\\">sizeof</span><span class=\\"token punctuation\\">(</span>arr1<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span><span class=\\"token keyword\\">sizeof</span><span class=\\"token punctuation\\">(</span>arr2<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t<span class=\\"token function\\">printf</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"%s\\\\n\\"</span><span class=\\"token punctuation\\">,</span> arr1<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span><span class=\\"token comment\\">//因为arr1数组里没有'\\\\0'所以会继续打印一直到有'\\\\0'为止</span>\\n\\t<span class=\\"token function\\">system</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"pause\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t<span class=\\"token keyword\\">return</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}`);export{n as data};
