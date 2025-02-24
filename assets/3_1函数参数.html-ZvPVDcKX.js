const n=JSON.parse('{"key":"v-a6e9326e","path":"/4%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/2c%E8%AF%AD%E8%A8%80/4%E5%87%BD%E6%95%B0/3_1%E5%87%BD%E6%95%B0%E5%8F%82%E6%95%B0.html","title":"函数参数","lang":"zh-CN","frontmatter":{"description":"函数参数 基础 函数的形参都是原数据的“副本”，在函数自己栈中申请内存 函数中参数都是传值，传指针本质上也是传值 如果想要改变入参内容，则需要传该入参的地址（指针和引用(c++)都是类似的作用） 形参与实参 普通变量参数 函数内部用的参数是形参,传入函数的参数是实参 形参会在函数栈空间再开辟内存,复制实参的内容 函数结束后,栈空间,形参也随之消失 #pragma warning(disable:4996) #include &lt;stdio.h&gt; void test(int a) { \\tprintf(\\"形参地址:%x,值:%d\\\\n\\",&amp;a,a);//形参地址:4ffc70,值:10 \\treturn; } int main(int argc, char *argv[]) { \\tint a = 10; \\tprintf(\\"实参地址:%x,值:%d\\\\n\\", &amp;a,a);//实参地址:4ffb9c,值:10 \\ttest(a); \\tsystem(\\"pause\\"); \\treturn 0; }","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/4%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/2c%E8%AF%AD%E8%A8%80/4%E5%87%BD%E6%95%B0/3_1%E5%87%BD%E6%95%B0%E5%8F%82%E6%95%B0.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"函数参数"}],["meta",{"property":"og:description","content":"函数参数 基础 函数的形参都是原数据的“副本”，在函数自己栈中申请内存 函数中参数都是传值，传指针本质上也是传值 如果想要改变入参内容，则需要传该入参的地址（指针和引用(c++)都是类似的作用） 形参与实参 普通变量参数 函数内部用的参数是形参,传入函数的参数是实参 形参会在函数栈空间再开辟内存,复制实参的内容 函数结束后,栈空间,形参也随之消失 #pragma warning(disable:4996) #include &lt;stdio.h&gt; void test(int a) { \\tprintf(\\"形参地址:%x,值:%d\\\\n\\",&amp;a,a);//形参地址:4ffc70,值:10 \\treturn; } int main(int argc, char *argv[]) { \\tint a = 10; \\tprintf(\\"实参地址:%x,值:%d\\\\n\\", &amp;a,a);//实参地址:4ffb9c,值:10 \\ttest(a); \\tsystem(\\"pause\\"); \\treturn 0; }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-24T12:46:58.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-24T12:46:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"函数参数\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-24T12:46:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"基础","slug":"基础","link":"#基础","children":[]},{"level":2,"title":"形参与实参","slug":"形参与实参","link":"#形参与实参","children":[{"level":3,"title":"普通变量参数","slug":"普通变量参数","link":"#普通变量参数","children":[]},{"level":3,"title":"指针作为参数","slug":"指针作为参数","link":"#指针作为参数","children":[]}]},{"level":2,"title":"返回","slug":"返回","link":"#返回","children":[]}],"git":{"createdTime":1740401218000,"updatedTime":1740401218000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":2.39,"words":716},"filePathRelative":"4编程语言/2c语言/4函数/3_1函数参数.md","localizedDate":"2025年2月24日","excerpt":"<h1> 函数参数</h1>\\n<h2> 基础</h2>\\n<ol>\\n<li>函数的形参都是原数据的“副本”，在函数自己栈中申请内存</li>\\n<li>函数中参数都是传值，传指针本质上也是传值</li>\\n<li>如果想要改变入参内容，则需要传该入参的地址（指针和引用(c++)都是类似的作用）</li>\\n</ol>\\n<h2> 形参与实参</h2>\\n<h3> 普通变量参数</h3>\\n<ol>\\n<li>函数内部用的参数是形参,传入函数的参数是实参</li>\\n<li>形参会在函数栈空间再开辟内存,复制实参的内容</li>\\n<li>函数结束后,栈空间,形参也随之消失</li>\\n</ol>\\n<div class=\\"language-c line-numbers-mode\\" data-ext=\\"c\\"><pre class=\\"language-c\\"><code><span class=\\"token macro property\\"><span class=\\"token directive-hash\\">#</span><span class=\\"token directive keyword\\">pragma</span> <span class=\\"token expression\\"><span class=\\"token function\\">warning</span><span class=\\"token punctuation\\">(</span>disable<span class=\\"token operator\\">:</span><span class=\\"token number\\">4996</span><span class=\\"token punctuation\\">)</span></span></span>\\n<span class=\\"token macro property\\"><span class=\\"token directive-hash\\">#</span><span class=\\"token directive keyword\\">include</span> <span class=\\"token string\\">&lt;stdio.h&gt;</span></span>\\n<span class=\\"token keyword\\">void</span> <span class=\\"token function\\">test</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span> a<span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">{</span>\\n\\t<span class=\\"token function\\">printf</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"形参地址:%x,值:%d\\\\n\\"</span><span class=\\"token punctuation\\">,</span><span class=\\"token operator\\">&amp;</span>a<span class=\\"token punctuation\\">,</span>a<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span><span class=\\"token comment\\">//形参地址:4ffc70,值:10</span>\\n\\t<span class=\\"token keyword\\">return</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">int</span> <span class=\\"token function\\">main</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span> argc<span class=\\"token punctuation\\">,</span> <span class=\\"token keyword\\">char</span> <span class=\\"token operator\\">*</span>argv<span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">{</span>\\n\\t<span class=\\"token keyword\\">int</span> a <span class=\\"token operator\\">=</span> <span class=\\"token number\\">10</span><span class=\\"token punctuation\\">;</span>\\n\\t<span class=\\"token function\\">printf</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"实参地址:%x,值:%d\\\\n\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token operator\\">&amp;</span>a<span class=\\"token punctuation\\">,</span>a<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span><span class=\\"token comment\\">//实参地址:4ffb9c,值:10</span>\\n\\t<span class=\\"token function\\">test</span><span class=\\"token punctuation\\">(</span>a<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t<span class=\\"token function\\">system</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"pause\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t<span class=\\"token keyword\\">return</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}');export{n as data};
