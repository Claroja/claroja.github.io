const n=JSON.parse(`{"key":"v-4da9955a","path":"/4%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/3python/9%E8%BF%9B%E7%A8%8B/pool.html","title":"pool","lang":"zh-CN","frontmatter":{"description":"pool 常规创建多个子进程的方式是通过循环, 但这种方式有个缺点是: 每次都要申请进程的资源, 比如内存空间 import multiprocessing import time from multiprocessing import Process def func(): print(\\"线程 %d执行\\" % multiprocessing.current_process().pid ) time.sleep(1) if __name__ == '__main__': t_lst = [] for i in range(10): t = Process(target=func) t.start() t_lst.append(t) print(\\"父线程结束\\")","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/4%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/3python/9%E8%BF%9B%E7%A8%8B/pool.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"pool"}],["meta",{"property":"og:description","content":"pool 常规创建多个子进程的方式是通过循环, 但这种方式有个缺点是: 每次都要申请进程的资源, 比如内存空间 import multiprocessing import time from multiprocessing import Process def func(): print(\\"线程 %d执行\\" % multiprocessing.current_process().pid ) time.sleep(1) if __name__ == '__main__': t_lst = [] for i in range(10): t = Process(target=func) t.start() t_lst.append(t) print(\\"父线程结束\\")"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-24T12:46:58.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-24T12:46:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"pool\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-24T12:46:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":3,"title":"apply与apply_async","slug":"apply与apply-async","link":"#apply与apply-async","children":[]},{"level":3,"title":"map 与 map_async","slug":"map-与-map-async","link":"#map-与-map-async","children":[]},{"level":3,"title":"接受子进程的返回结果","slug":"接受子进程的返回结果","link":"#接受子进程的返回结果","children":[]},{"level":3,"title":"回调函数","slug":"回调函数","link":"#回调函数","children":[]}],"git":{"createdTime":1740401218000,"updatedTime":1740401218000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":2,"words":600},"filePathRelative":"4编程语言/3python/9进程/pool.md","localizedDate":"2025年2月24日","excerpt":"<h1> pool</h1>\\n<p>常规创建多个子进程的方式是通过循环, 但这种方式有个缺点是: 每次都要申请进程的资源, 比如内存空间</p>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token keyword\\">import</span> multiprocessing\\n<span class=\\"token keyword\\">import</span> time\\n<span class=\\"token keyword\\">from</span> multiprocessing <span class=\\"token keyword\\">import</span> Process\\n\\n<span class=\\"token keyword\\">def</span> <span class=\\"token function\\">func</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n   <span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"线程 %d执行\\"</span> <span class=\\"token operator\\">%</span> multiprocessing<span class=\\"token punctuation\\">.</span>current_process<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span>pid <span class=\\"token punctuation\\">)</span>\\n   time<span class=\\"token punctuation\\">.</span>sleep<span class=\\"token punctuation\\">(</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token keyword\\">if</span> __name__ <span class=\\"token operator\\">==</span> <span class=\\"token string\\">'__main__'</span><span class=\\"token punctuation\\">:</span>\\n   t_lst <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span>\\n   <span class=\\"token keyword\\">for</span> i <span class=\\"token keyword\\">in</span> <span class=\\"token builtin\\">range</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">10</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n       t <span class=\\"token operator\\">=</span> Process<span class=\\"token punctuation\\">(</span>target<span class=\\"token operator\\">=</span>func<span class=\\"token punctuation\\">)</span>\\n       t<span class=\\"token punctuation\\">.</span>start<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n       t_lst<span class=\\"token punctuation\\">.</span>append<span class=\\"token punctuation\\">(</span>t<span class=\\"token punctuation\\">)</span>\\n   <span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"父线程结束\\"</span><span class=\\"token punctuation\\">)</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}`);export{n as data};
