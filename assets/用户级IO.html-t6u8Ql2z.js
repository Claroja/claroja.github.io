const e=JSON.parse('{"key":"v-0b0e26fb","path":"/%E7%BC%96%E7%A8%8B%E5%9F%BA%E7%A1%80/%E9%80%9A%E7%94%A8%E7%9F%A5%E8%AF%86/io/%E7%94%A8%E6%88%B7%E7%BA%A7IO.html","title":"用户级IO","lang":"zh-CN","frontmatter":{"description":"用户级IO 用户级IO对系统级IO的API进行高级的封装. 内核缓冲区:流 流是open,socket,pipe等操作的内核对象,内核缓冲区就是这样的流 read:从流中读数据 write:向流中写入数据 假设有一个管道,进程A为管道的写入方,B为管道的读出方 1.内核缓冲区空 B作为读出方,阻塞 2.内核缓冲区非空 当A写入数据,内核缓冲区给B发信号,唤醒B,B就可以读了 3.内核缓冲区满 假设B未开启,A一直往内核缓冲区写,写满后A.内核缓冲区发信号给A,A阻塞 B读数据,内核缓冲区变为非空状态,内核缓冲区向A发送信号,A继续写","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E7%BC%96%E7%A8%8B%E5%9F%BA%E7%A1%80/%E9%80%9A%E7%94%A8%E7%9F%A5%E8%AF%86/io/%E7%94%A8%E6%88%B7%E7%BA%A7IO.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"用户级IO"}],["meta",{"property":"og:description","content":"用户级IO 用户级IO对系统级IO的API进行高级的封装. 内核缓冲区:流 流是open,socket,pipe等操作的内核对象,内核缓冲区就是这样的流 read:从流中读数据 write:向流中写入数据 假设有一个管道,进程A为管道的写入方,B为管道的读出方 1.内核缓冲区空 B作为读出方,阻塞 2.内核缓冲区非空 当A写入数据,内核缓冲区给B发信号,唤醒B,B就可以读了 3.内核缓冲区满 假设B未开启,A一直往内核缓冲区写,写满后A.内核缓冲区发信号给A,A阻塞 B读数据,内核缓冲区变为非空状态,内核缓冲区向A发送信号,A继续写"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://claroja.github.io/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-27T13:31:52.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"用户级IO"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2023-11-27T13:31:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"用户级IO\\",\\"image\\":[\\"https://claroja.github.io/\\"],\\"dateModified\\":\\"2023-11-27T13:31:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"内核缓冲区:流","slug":"内核缓冲区-流","link":"#内核缓冲区-流","children":[]},{"level":2,"title":"缓冲类型","slug":"缓冲类型","link":"#缓冲类型","children":[]},{"level":2,"title":"open","slug":"open","link":"#open","children":[]},{"level":2,"title":"pipe/fifo/mmap","slug":"pipe-fifo-mmap","link":"#pipe-fifo-mmap","children":[]},{"level":2,"title":"socket","slug":"socket","link":"#socket","children":[]},{"level":2,"title":"多文件描述符操作","slug":"多文件描述符操作","link":"#多文件描述符操作","children":[{"level":3,"title":"忙轮询","slug":"忙轮询","link":"#忙轮询","children":[]},{"level":3,"title":"无差别轮询 select/poll","slug":"无差别轮询-select-poll","link":"#无差别轮询-select-poll","children":[]},{"level":3,"title":"回调 epoll","slug":"回调-epoll","link":"#回调-epoll","children":[]}]},{"level":2,"title":"C语言","slug":"c语言","link":"#c语言","children":[{"level":3,"title":"打开和关闭文件","slug":"打开和关闭文件","link":"#打开和关闭文件","children":[]},{"level":3,"title":"操作文件内容","slug":"操作文件内容","link":"#操作文件内容","children":[]},{"level":3,"title":"fwrite","slug":"fwrite","link":"#fwrite","children":[]}]},{"level":2,"title":"int 类型读写","slug":"int-类型读写","link":"#int-类型读写","children":[{"level":3,"title":"结构体读写","slug":"结构体读写","link":"#结构体读写","children":[]},{"level":3,"title":"buffer","slug":"buffer","link":"#buffer","children":[]},{"level":3,"title":"scan&printf","slug":"scan-printf","link":"#scan-printf","children":[]}]},{"level":2,"title":"python","slug":"python","link":"#python","children":[{"level":3,"title":"打开和关闭文件","slug":"打开和关闭文件-1","link":"#打开和关闭文件-1","children":[]},{"level":3,"title":"操作文件内容","slug":"操作文件内容-1","link":"#操作文件内容-1","children":[]},{"level":3,"title":"BytesIO","slug":"bytesio","link":"#bytesio","children":[]},{"level":3,"title":"应用","slug":"应用","link":"#应用","children":[]},{"level":3,"title":"StringIO","slug":"stringio","link":"#stringio","children":[]}]},{"level":2,"title":"应用","slug":"应用-1","link":"#应用-1","children":[]}],"git":{"createdTime":1701091021000,"updatedTime":1701091912000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":2}]},"readingTime":{"minutes":13.44,"words":4031},"filePathRelative":"编程基础/通用知识/io/用户级IO.md","localizedDate":"2023年11月27日","excerpt":"<h1> 用户级IO</h1>\\n<p>用户级IO对系统级IO的API进行高级的封装.</p>\\n<h2> 内核缓冲区:流</h2>\\n<p>流是<code>open</code>,<code>socket</code>,<code>pipe</code>等操作的内核对象,内核缓冲区就是这样的流\\nread:从流中读数据\\nwrite:向流中写入数据</p>\\n<p>假设有一个管道,进程A为管道的写入方,B为管道的读出方\\n1.内核缓冲区空\\nB作为读出方,阻塞</p>\\n<p>2.内核缓冲区非空\\n当A写入数据,内核缓冲区给B发信号,唤醒B,B就可以读了</p>\\n<p>3.内核缓冲区满\\n假设B未开启,A一直往内核缓冲区写,写满后A.内核缓冲区发信号给A,A阻塞\\nB读数据,内核缓冲区变为非空状态,内核缓冲区向A发送信号,A继续写</p>","copyright":{"author":"王新宇"},"autoDesc":true}');export{e as data};
