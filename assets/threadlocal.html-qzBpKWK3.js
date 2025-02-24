const n=JSON.parse('{"key":"v-579e1340","path":"/4%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/3python/10%E7%BA%BF%E7%A8%8B/threadlocal.html","title":"threadlocal","lang":"zh-CN","frontmatter":{"description":"threadlocal 多线程环境下，每一个线程均可以使用所属进程的全局变量。如果一个线程对全局变量进行了修改，将会影响到其他所有的线程对全局变量的计算作，从而出现数据混乱，即为脏数据。为了避免逗哥线程同时对变量进行修改，引入了线程同步机制，通过互斥锁、条件变量或者读写锁来控制对全局变量的访问。 import threading global_num = 0 def thread_cal(): global global_num for i in range(100000): global_num += 1 threads = [] for i in range(10): threads.append(threading.Thread(target=thread_cal)) threads[i].start() for i in range(10): # 必须在全部start之后再join,不然每启动一个线程,主线程都会被阻塞,既10个线程依次进行 threads[i].join() print(global_num) # 值不确定","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/4%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/3python/10%E7%BA%BF%E7%A8%8B/threadlocal.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"threadlocal"}],["meta",{"property":"og:description","content":"threadlocal 多线程环境下，每一个线程均可以使用所属进程的全局变量。如果一个线程对全局变量进行了修改，将会影响到其他所有的线程对全局变量的计算作，从而出现数据混乱，即为脏数据。为了避免逗哥线程同时对变量进行修改，引入了线程同步机制，通过互斥锁、条件变量或者读写锁来控制对全局变量的访问。 import threading global_num = 0 def thread_cal(): global global_num for i in range(100000): global_num += 1 threads = [] for i in range(10): threads.append(threading.Thread(target=thread_cal)) threads[i].start() for i in range(10): # 必须在全部start之后再join,不然每启动一个线程,主线程都会被阻塞,既10个线程依次进行 threads[i].join() print(global_num) # 值不确定"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-24T12:46:58.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-24T12:46:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"threadlocal\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-24T12:46:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"应用","slug":"应用","link":"#应用","children":[]}],"git":{"createdTime":1740401218000,"updatedTime":1740401218000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":3.3,"words":991},"filePathRelative":"4编程语言/3python/10线程/threadlocal.md","localizedDate":"2025年2月24日","excerpt":"<h1> threadlocal</h1>\\n<p>多线程环境下，每一个线程均可以使用所属进程的全局变量。如果一个线程对全局变量进行了修改，将会影响到其他所有的线程对全局变量的计算作，从而出现数据混乱，即为脏数据。为了避免逗哥线程同时对变量进行修改，引入了线程同步机制，通过互斥锁、条件变量或者读写锁来控制对全局变量的访问。</p>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token keyword\\">import</span> threading\\nglobal_num <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span>\\n\\n<span class=\\"token keyword\\">def</span> <span class=\\"token function\\">thread_cal</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n    <span class=\\"token keyword\\">global</span> global_num\\n    <span class=\\"token keyword\\">for</span> i <span class=\\"token keyword\\">in</span> <span class=\\"token builtin\\">range</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">100000</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n        global_num <span class=\\"token operator\\">+=</span> <span class=\\"token number\\">1</span>\\n\\nthreads <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span>\\n<span class=\\"token keyword\\">for</span> i <span class=\\"token keyword\\">in</span> <span class=\\"token builtin\\">range</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">10</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n    threads<span class=\\"token punctuation\\">.</span>append<span class=\\"token punctuation\\">(</span>threading<span class=\\"token punctuation\\">.</span>Thread<span class=\\"token punctuation\\">(</span>target<span class=\\"token operator\\">=</span>thread_cal<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n    threads<span class=\\"token punctuation\\">[</span>i<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">.</span>start<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token keyword\\">for</span> i <span class=\\"token keyword\\">in</span> <span class=\\"token builtin\\">range</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">10</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span> <span class=\\"token comment\\"># 必须在全部start之后再join,不然每启动一个线程,主线程都会被阻塞,既10个线程依次进行</span>\\n    threads<span class=\\"token punctuation\\">[</span>i<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">.</span>join<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span>global_num<span class=\\"token punctuation\\">)</span> <span class=\\"token comment\\"># 值不确定</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}');export{n as data};
