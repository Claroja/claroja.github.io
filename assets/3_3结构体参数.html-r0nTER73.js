const n=JSON.parse(`{"key":"v-813c3714","path":"/4%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/2c%E8%AF%AD%E8%A8%80/4%E5%87%BD%E6%95%B0/3_3%E7%BB%93%E6%9E%84%E4%BD%93%E5%8F%82%E6%95%B0.html","title":"","lang":"zh-CN","frontmatter":{"description":"结构体是值专递,形参会复制,开销很大 直接调结构体变量是没有意义的,区别于数组变量是代表了数组的首元素地址 #pragma warning(disable:4996) # include &lt;stdio.h&gt; # include &lt;stdlib.h&gt; struct s { \\tchar name; \\tint age; }; void test(struct s a) { \\tprintf(\\"%x\\\\n\\", &amp;a); } void main() { \\tstruct s a = { 'w',18 }; \\tprintf(\\"%x\\\\n\\", &amp;a); \\ttest(a); \\tsystem(\\"pause\\"); }","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/4%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/2c%E8%AF%AD%E8%A8%80/4%E5%87%BD%E6%95%B0/3_3%E7%BB%93%E6%9E%84%E4%BD%93%E5%8F%82%E6%95%B0.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:description","content":"结构体是值专递,形参会复制,开销很大 直接调结构体变量是没有意义的,区别于数组变量是代表了数组的首元素地址 #pragma warning(disable:4996) # include &lt;stdio.h&gt; # include &lt;stdlib.h&gt; struct s { \\tchar name; \\tint age; }; void test(struct s a) { \\tprintf(\\"%x\\\\n\\", &amp;a); } void main() { \\tstruct s a = { 'w',18 }; \\tprintf(\\"%x\\\\n\\", &amp;a); \\ttest(a); \\tsystem(\\"pause\\"); }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-24T12:46:58.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-24T12:46:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-24T12:46:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[],"git":{"createdTime":1740401218000,"updatedTime":1740401218000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":0.49,"words":147},"filePathRelative":"4编程语言/2c语言/4函数/3_3结构体参数.md","localizedDate":"2025年2月24日","excerpt":"<ol>\\n<li>结构体是值专递,形参会复制,开销很大</li>\\n<li>直接调结构体变量是没有意义的,区别于数组变量是代表了数组的首元素地址</li>\\n</ol>\\n<div class=\\"language-c line-numbers-mode\\" data-ext=\\"c\\"><pre class=\\"language-c\\"><code><span class=\\"token macro property\\"><span class=\\"token directive-hash\\">#</span><span class=\\"token directive keyword\\">pragma</span> <span class=\\"token expression\\"><span class=\\"token function\\">warning</span><span class=\\"token punctuation\\">(</span>disable<span class=\\"token operator\\">:</span><span class=\\"token number\\">4996</span><span class=\\"token punctuation\\">)</span></span></span>\\n<span class=\\"token macro property\\"><span class=\\"token directive-hash\\">#</span> <span class=\\"token directive keyword\\">include</span> <span class=\\"token string\\">&lt;stdio.h&gt;</span></span>\\n<span class=\\"token macro property\\"><span class=\\"token directive-hash\\">#</span> <span class=\\"token directive keyword\\">include</span> <span class=\\"token string\\">&lt;stdlib.h&gt;</span></span>\\n\\n<span class=\\"token keyword\\">struct</span> <span class=\\"token class-name\\">s</span> <span class=\\"token punctuation\\">{</span>\\n\\t<span class=\\"token keyword\\">char</span> name<span class=\\"token punctuation\\">;</span>\\n\\t<span class=\\"token keyword\\">int</span> age<span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">void</span> <span class=\\"token function\\">test</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">struct</span> <span class=\\"token class-name\\">s</span> a<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n\\t<span class=\\"token function\\">printf</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"%x\\\\n\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token operator\\">&amp;</span>a<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">void</span> <span class=\\"token function\\">main</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n\\t<span class=\\"token keyword\\">struct</span> <span class=\\"token class-name\\">s</span> a <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span> <span class=\\"token char\\">'w'</span><span class=\\"token punctuation\\">,</span><span class=\\"token number\\">18</span> <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n\\t<span class=\\"token function\\">printf</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"%x\\\\n\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token operator\\">&amp;</span>a<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t<span class=\\"token function\\">test</span><span class=\\"token punctuation\\">(</span>a<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t<span class=\\"token function\\">system</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"pause\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}`);export{n as data};
