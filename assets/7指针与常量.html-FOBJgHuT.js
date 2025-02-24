const n=JSON.parse('{"key":"v-55064e41","path":"/4%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/2c%E8%AF%AD%E8%A8%80/3%E6%8C%87%E9%92%88/7%E6%8C%87%E9%92%88%E4%B8%8E%E5%B8%B8%E9%87%8F.html","title":"","lang":"zh-CN","frontmatter":{"description":"#include &lt;stdio.h&gt; #define b 10 //define不可被指针修改,所以是安全的 int main(int argc, char *argv[]) { \\tconst int a = 10;//const常量可以通过指针来修改所以是不安全的 \\tprintf(\\"%d\\\\n\\", a); \\tint* p = &amp;a; \\t*p = 100; \\tprintf(\\"%d\\\\n\\", a); \\tprintf(\\"%d\\\\n\\", *p); \\tsystem(\\"pause\\"); \\treturn 0; }","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/4%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/2c%E8%AF%AD%E8%A8%80/3%E6%8C%87%E9%92%88/7%E6%8C%87%E9%92%88%E4%B8%8E%E5%B8%B8%E9%87%8F.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:description","content":"#include &lt;stdio.h&gt; #define b 10 //define不可被指针修改,所以是安全的 int main(int argc, char *argv[]) { \\tconst int a = 10;//const常量可以通过指针来修改所以是不安全的 \\tprintf(\\"%d\\\\n\\", a); \\tint* p = &amp;a; \\t*p = 100; \\tprintf(\\"%d\\\\n\\", a); \\tprintf(\\"%d\\\\n\\", *p); \\tsystem(\\"pause\\"); \\treturn 0; }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-24T12:46:58.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-24T12:46:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-24T12:46:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[],"git":{"createdTime":1740401218000,"updatedTime":1740401218000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":0.9,"words":269},"filePathRelative":"4编程语言/2c语言/3指针/7指针与常量.md","localizedDate":"2025年2月24日","excerpt":"<div class=\\"language-c line-numbers-mode\\" data-ext=\\"c\\"><pre class=\\"language-c\\"><code><span class=\\"token macro property\\"><span class=\\"token directive-hash\\">#</span><span class=\\"token directive keyword\\">include</span> <span class=\\"token string\\">&lt;stdio.h&gt;</span></span>\\n<span class=\\"token macro property\\"><span class=\\"token directive-hash\\">#</span><span class=\\"token directive keyword\\">define</span> <span class=\\"token macro-name\\">b</span> <span class=\\"token expression\\"><span class=\\"token number\\">10</span> </span><span class=\\"token comment\\">//define不可被指针修改,所以是安全的</span></span>\\n<span class=\\"token keyword\\">int</span> <span class=\\"token function\\">main</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span> argc<span class=\\"token punctuation\\">,</span> <span class=\\"token keyword\\">char</span> <span class=\\"token operator\\">*</span>argv<span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">{</span>\\n\\t<span class=\\"token keyword\\">const</span> <span class=\\"token keyword\\">int</span> a <span class=\\"token operator\\">=</span> <span class=\\"token number\\">10</span><span class=\\"token punctuation\\">;</span><span class=\\"token comment\\">//const常量可以通过指针来修改所以是不安全的</span>\\n\\t<span class=\\"token function\\">printf</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"%d\\\\n\\"</span><span class=\\"token punctuation\\">,</span> a<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t<span class=\\"token keyword\\">int</span><span class=\\"token operator\\">*</span> p <span class=\\"token operator\\">=</span> <span class=\\"token operator\\">&amp;</span>a<span class=\\"token punctuation\\">;</span>\\n\\t<span class=\\"token operator\\">*</span>p <span class=\\"token operator\\">=</span> <span class=\\"token number\\">100</span><span class=\\"token punctuation\\">;</span>\\n\\t<span class=\\"token function\\">printf</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"%d\\\\n\\"</span><span class=\\"token punctuation\\">,</span> a<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t<span class=\\"token function\\">printf</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"%d\\\\n\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token operator\\">*</span>p<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t<span class=\\"token function\\">system</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"pause\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t<span class=\\"token keyword\\">return</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}');export{n as data};
