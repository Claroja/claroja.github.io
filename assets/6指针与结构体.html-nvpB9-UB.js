const t=JSON.parse('{"key":"v-2f47b068","path":"/4%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/2c%E8%AF%AD%E8%A8%80/3%E6%8C%87%E9%92%88/6%E6%8C%87%E9%92%88%E4%B8%8E%E7%BB%93%E6%9E%84%E4%BD%93.html","title":"结构体指针","lang":"zh-CN","frontmatter":{"description":"结构体指针 # include &lt;stdio.h&gt;//引用函数库 # include &lt;stdlib.h&gt; struct info{ \\tchar name[4]; \\tint age; }; void main(){ \\tstruct info student1; \\tstudent1.age = 19; \\tsprintf(student1.name,\\"li\\"); \\tprintf(\\"%d,%s\\\\n\\",student1.age,student1.name); \\tstruct info *p;//p存储地址，struct info决定内存长度 \\tp=&amp;student1; \\tprintf(\\"%d,%s\\\\n\\",(*p).age,(*p).name);//指针访问结构体第一种方法 \\tprintf(\\"%d,%s\\\\n\\",p-&gt;age,p-&gt;name);//指针访问结构体第二种方法 }","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/4%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/2c%E8%AF%AD%E8%A8%80/3%E6%8C%87%E9%92%88/6%E6%8C%87%E9%92%88%E4%B8%8E%E7%BB%93%E6%9E%84%E4%BD%93.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"结构体指针"}],["meta",{"property":"og:description","content":"结构体指针 # include &lt;stdio.h&gt;//引用函数库 # include &lt;stdlib.h&gt; struct info{ \\tchar name[4]; \\tint age; }; void main(){ \\tstruct info student1; \\tstudent1.age = 19; \\tsprintf(student1.name,\\"li\\"); \\tprintf(\\"%d,%s\\\\n\\",student1.age,student1.name); \\tstruct info *p;//p存储地址，struct info决定内存长度 \\tp=&amp;student1; \\tprintf(\\"%d,%s\\\\n\\",(*p).age,(*p).name);//指针访问结构体第一种方法 \\tprintf(\\"%d,%s\\\\n\\",p-&gt;age,p-&gt;name);//指针访问结构体第二种方法 }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-24T12:46:58.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-24T12:46:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"结构体指针\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-24T12:46:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[],"git":{"createdTime":1740401218000,"updatedTime":1740401218000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":1.31,"words":393},"filePathRelative":"4编程语言/2c语言/3指针/6指针与结构体.md","localizedDate":"2025年2月24日","excerpt":"<h1> 结构体指针</h1>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code># include &lt;stdio.h&gt;//引用函数库\\n# include &lt;stdlib.h&gt;\\nstruct info{\\n\\tchar name[4];\\n\\tint age;\\n};\\nvoid main(){\\n\\tstruct info student1;\\n\\tstudent1.age = 19;\\n\\tsprintf(student1.name,\\"li\\");\\n\\tprintf(\\"%d,%s\\\\n\\",student1.age,student1.name);\\n\\n\\tstruct info *p;//p存储地址，struct info决定内存长度\\n\\tp=&amp;student1;\\n\\tprintf(\\"%d,%s\\\\n\\",(*p).age,(*p).name);//指针访问结构体第一种方法\\n\\tprintf(\\"%d,%s\\\\n\\",p-&gt;age,p-&gt;name);//指针访问结构体第二种方法\\n}\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}');export{t as data};
