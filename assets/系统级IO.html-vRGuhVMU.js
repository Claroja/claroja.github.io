const e=JSON.parse('{"key":"v-3e69da6f","path":"/2%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/1%E9%80%9A%E7%94%A8%E7%9F%A5%E8%AF%86/io/%E7%B3%BB%E7%BB%9F%E7%BA%A7IO.html","title":"系统级IO","lang":"zh-CN","frontmatter":{"description":"系统级IO 基础概念 系统级IO是相较于用户级IO的概念, 系统级IO更底层. Linux中会将所有的设备都当做文件来处理,每个文件对应一个文件描述符(file descriptor).所有的I/O操作都会调用文件描述符.比如 文件描述符0对应的是标准输入,就是我们的键盘. 文件描述符1对应的是标准输出,就是我们的console. 系统为每一个进程维护了一个文件描述符表,表默认是0~1023. 如果新打开一个文件描述符(包含socket),是从最小的文件描述符开始占用. 文件描述符总共有1024个(0stdin,1stdout,2stderr),可以关掉(0,1,2)文件描述符","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/2%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/1%E9%80%9A%E7%94%A8%E7%9F%A5%E8%AF%86/io/%E7%B3%BB%E7%BB%9F%E7%BA%A7IO.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"系统级IO"}],["meta",{"property":"og:description","content":"系统级IO 基础概念 系统级IO是相较于用户级IO的概念, 系统级IO更底层. Linux中会将所有的设备都当做文件来处理,每个文件对应一个文件描述符(file descriptor).所有的I/O操作都会调用文件描述符.比如 文件描述符0对应的是标准输入,就是我们的键盘. 文件描述符1对应的是标准输出,就是我们的console. 系统为每一个进程维护了一个文件描述符表,表默认是0~1023. 如果新打开一个文件描述符(包含socket),是从最小的文件描述符开始占用. 文件描述符总共有1024个(0stdin,1stdout,2stderr),可以关掉(0,1,2)文件描述符"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://claroja.github.io/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-21T12:59:55.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"系统级IO"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-21T12:59:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"系统级IO\\",\\"image\\":[\\"https://claroja.github.io/\\"],\\"dateModified\\":\\"2025-02-21T12:59:55.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"基础概念","slug":"基础概念","link":"#基础概念","children":[]},{"level":2,"title":"c","slug":"c","link":"#c","children":[{"level":3,"title":"打开和关闭文件描述符","slug":"打开和关闭文件描述符","link":"#打开和关闭文件描述符","children":[]},{"level":3,"title":"操作文件内容","slug":"操作文件内容","link":"#操作文件内容","children":[]},{"level":3,"title":"dup","slug":"dup","link":"#dup","children":[]},{"level":3,"title":"fseek","slug":"fseek","link":"#fseek","children":[]}]},{"level":2,"title":"python","slug":"python","link":"#python","children":[{"level":3,"title":"打开和关闭文件描述符","slug":"打开和关闭文件描述符-1","link":"#打开和关闭文件描述符-1","children":[]},{"level":3,"title":"操作文件内容","slug":"操作文件内容-1","link":"#操作文件内容-1","children":[]},{"level":3,"title":"dup","slug":"dup-1","link":"#dup-1","children":[]}]},{"level":2,"title":"shell","slug":"shell","link":"#shell","children":[{"level":3,"title":"文件描述符的数量设置","slug":"文件描述符的数量设置","link":"#文件描述符的数量设置","children":[]}]}],"git":{"createdTime":1740142795000,"updatedTime":1740142795000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":6.56,"words":1967},"filePathRelative":"2编程语言/1通用知识/io/系统级IO.md","localizedDate":"2025年2月21日","excerpt":"<h1> 系统级IO</h1>\\n<h2> 基础概念</h2>\\n<ol>\\n<li>系统级IO是相较于用户级IO的概念, 系统级IO更底层.</li>\\n<li>Linux中会将所有的设备都当做文件来处理,每个文件对应一个文件描述符(file descriptor).所有的I/O操作都会调用文件描述符.比如\\n<ol>\\n<li>文件描述符0对应的是标准输入,就是我们的键盘.</li>\\n<li>文件描述符1对应的是标准输出,就是我们的console.</li>\\n</ol>\\n</li>\\n<li>系统为每一个进程维护了一个文件描述符表,表默认是0~1023. 如果新打开一个文件描述符(包含socket),是从最小的文件描述符开始占用. 文件描述符总共有1024个(0stdin,1stdout,2stderr),可以关掉(0,1,2)文件描述符</li>\\n</ol>","copyright":{"author":"王新宇"},"autoDesc":true}');export{e as data};
