const e=JSON.parse('{"key":"v-1a1d0095","path":"/%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/java/Concurrency/javaConcurrency.html","title":"singlabelClassification","lang":"zh-CN","frontmatter":{"description":"singlabelClassification 进程和线程 线程存在于进程内，是进程的一个子集 进程拥有共享的资源(资源分配最小单位)，如内存空间等，供其内部的线程(资源调度最小单位)共享 通信 同一台计算机的进程通信称为 IPC（Inter-process communication）, 不同计算机之间的进程通信，需要通过网络，并遵守共同的协议，例如 HTTP 多个线程可以访问同一个共享变量 线程更轻量，线程上下文切换成本一般上要比进程上下文切换低 并行与并发","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/java/Concurrency/javaConcurrency.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"singlabelClassification"}],["meta",{"property":"og:description","content":"singlabelClassification 进程和线程 线程存在于进程内，是进程的一个子集 进程拥有共享的资源(资源分配最小单位)，如内存空间等，供其内部的线程(资源调度最小单位)共享 通信 同一台计算机的进程通信称为 IPC（Inter-process communication）, 不同计算机之间的进程通信，需要通过网络，并遵守共同的协议，例如 HTTP 多个线程可以访问同一个共享变量 线程更轻量，线程上下文切换成本一般上要比进程上下文切换低 并行与并发"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-25T13:46:58.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2023-11-25T13:46:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"singlabelClassification\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-25T13:46:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"进程和线程","slug":"进程和线程","link":"#进程和线程","children":[]},{"level":2,"title":"并行与并发","slug":"并行与并发","link":"#并行与并发","children":[]},{"level":2,"title":"同步与异步","slug":"同步与异步","link":"#同步与异步","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]},{"level":2,"title":"同步和异步","slug":"同步和异步","link":"#同步和异步","children":[]},{"level":2,"title":"操作系统的五中状态","slug":"操作系统的五中状态","link":"#操作系统的五中状态","children":[]},{"level":2,"title":"Java Thread 六种状态","slug":"java-thread-六种状态","link":"#java-thread-六种状态","children":[{"level":3,"title":"NEW --> RUNNABLE","slug":"new-runnable","link":"#new-runnable","children":[]},{"level":3,"title":"RUNNABLE <--> WAITING","slug":"runnable-waiting","link":"#runnable-waiting","children":[]},{"level":3,"title":"RUNNABLE <--> TIMED_WAITING","slug":"runnable-timed-waiting","link":"#runnable-timed-waiting","children":[]},{"level":3,"title":"RUNNABLE <--> BLOCKED","slug":"runnable-blocked","link":"#runnable-blocked","children":[]},{"level":3,"title":"RUNNABLE <--> TERMINATED","slug":"runnable-terminated","link":"#runnable-terminated","children":[]}]}],"git":{"createdTime":1700920018000,"updatedTime":1700920018000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":3.37,"words":1010},"filePathRelative":"编程语言/java/Concurrency/javaConcurrency.md","localizedDate":"2023年11月25日","excerpt":"<h1> singlabelClassification</h1>\\n<h2> 进程和线程</h2>\\n<ul>\\n<li>线程存在于进程内，是进程的一个子集</li>\\n<li>进程拥有共享的资源(资源分配最小单位)，如内存空间等，供其内部的线程(资源调度最小单位)共享</li>\\n<li>通信\\n同一台计算机的进程通信称为 IPC（Inter-process communication）, 不同计算机之间的进程通信，需要通过网络，并遵守共同的协议，例如 HTTP\\n多个线程可以访问同一个共享变量</li>\\n<li>线程更轻量，线程上下文切换成本一般上要比进程上下文切换低</li>\\n</ul>\\n<h2> 并行与并发</h2>","copyright":{"author":"王新宇"},"autoDesc":true}');export{e as data};
