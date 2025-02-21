const t=JSON.parse('{"key":"v-06a4712e","path":"/2%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/3python/10%E7%BA%BF%E7%A8%8B/thread.html","title":"thread","lang":"zh-CN","frontmatter":{"description":"thread 线程（英语：thread）是操作系统能够进行运算调度的最小单位。同一进程中的多条线程将共享该进程中的全部系统资源，如虚拟地址空间，文件描述符和信号处理等等。但同一进程中的多个线程有各自的调用栈（call stack），自己的寄存器环境（register context），自己的线程本地存储（thread-local storage） 由于Global Interpreter Lock的原因, 只有一个thread可以执行python的代码.如果想让python充分的利用computational resources of multi-core machines, 建议使用multiprocessing. 然而threading对multiple I/O-bound 任务仍然有效, 比如读写文件, 网络请求等.","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/2%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/3python/10%E7%BA%BF%E7%A8%8B/thread.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"thread"}],["meta",{"property":"og:description","content":"thread 线程（英语：thread）是操作系统能够进行运算调度的最小单位。同一进程中的多条线程将共享该进程中的全部系统资源，如虚拟地址空间，文件描述符和信号处理等等。但同一进程中的多个线程有各自的调用栈（call stack），自己的寄存器环境（register context），自己的线程本地存储（thread-local storage） 由于Global Interpreter Lock的原因, 只有一个thread可以执行python的代码.如果想让python充分的利用computational resources of multi-core machines, 建议使用multiprocessing. 然而threading对multiple I/O-bound 任务仍然有效, 比如读写文件, 网络请求等."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-21T12:59:55.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-21T12:59:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"thread\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-21T12:59:55.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[],"git":{"createdTime":1740142795000,"updatedTime":1740142795000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":2.61,"words":783},"filePathRelative":"2编程语言/3python/10线程/thread.md","localizedDate":"2025年2月21日","excerpt":"<h1> thread</h1>\\n<p>线程（英语：thread）是操作系统能够进行运算调度的最小单位。同一进程中的多条线程将共享该进程中的全部系统资源，如虚拟地址空间，文件描述符和信号处理等等。但同一进程中的多个线程有各自的调用栈（call stack），自己的寄存器环境（register context），自己的线程本地存储（thread-local storage）</p>\\n<p>由于<a href=\\"https://docs.python.org/3/glossary.html#term-global-interpreter-lock\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Global Interpreter Lock</a>的原因, 只有一个thread可以执行python的代码.如果想让python充分的利用computational resources of multi-core machines, 建议使用<a href=\\"https://docs.python.org/3/library/multiprocessing.html#module-multiprocessing\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">multiprocessing</a>. 然而threading对multiple I/O-bound 任务仍然有效, 比如读写文件, 网络请求等.</p>","copyright":{"author":"王新宇"},"autoDesc":true}');export{t as data};
