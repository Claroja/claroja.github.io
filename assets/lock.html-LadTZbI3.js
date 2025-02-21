const n=JSON.parse(`{"key":"v-18bbe429","path":"/2%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/3python/9%E8%BF%9B%E7%A8%8B/lock.html","title":"lock","lang":"zh-CN","frontmatter":{"description":"lock 未上锁，异步执行 import os import time import random from multiprocessing import Process def work(n): print('%s: %s is running' %(n,os.getpid())) time.sleep(random.random()) print('%s:%s is done' %(n,os.getpid())) if __name__ == '__main__': for i in range(5): p=Process(target=work,args=(i,)) p.start()","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/2%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/3python/9%E8%BF%9B%E7%A8%8B/lock.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"lock"}],["meta",{"property":"og:description","content":"lock 未上锁，异步执行 import os import time import random from multiprocessing import Process def work(n): print('%s: %s is running' %(n,os.getpid())) time.sleep(random.random()) print('%s:%s is done' %(n,os.getpid())) if __name__ == '__main__': for i in range(5): p=Process(target=work,args=(i,)) p.start()"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-21T12:59:55.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-21T12:59:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"lock\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-21T12:59:55.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[],"git":{"createdTime":1740142795000,"updatedTime":1740142795000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":0.37,"words":111},"filePathRelative":"2编程语言/3python/9进程/lock.md","localizedDate":"2025年2月21日","excerpt":"<h1> lock</h1>\\n<ol>\\n<li>未上锁，异步执行</li>\\n</ol>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token keyword\\">import</span> os\\n<span class=\\"token keyword\\">import</span> time\\n<span class=\\"token keyword\\">import</span> random\\n<span class=\\"token keyword\\">from</span> multiprocessing <span class=\\"token keyword\\">import</span> Process\\n\\n<span class=\\"token keyword\\">def</span> <span class=\\"token function\\">work</span><span class=\\"token punctuation\\">(</span>n<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n    <span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'%s: %s is running'</span> <span class=\\"token operator\\">%</span><span class=\\"token punctuation\\">(</span>n<span class=\\"token punctuation\\">,</span>os<span class=\\"token punctuation\\">.</span>getpid<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n    time<span class=\\"token punctuation\\">.</span>sleep<span class=\\"token punctuation\\">(</span>random<span class=\\"token punctuation\\">.</span>random<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'%s:%s is done'</span> <span class=\\"token operator\\">%</span><span class=\\"token punctuation\\">(</span>n<span class=\\"token punctuation\\">,</span>os<span class=\\"token punctuation\\">.</span>getpid<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token keyword\\">if</span> __name__ <span class=\\"token operator\\">==</span> <span class=\\"token string\\">'__main__'</span><span class=\\"token punctuation\\">:</span>\\n    <span class=\\"token keyword\\">for</span> i <span class=\\"token keyword\\">in</span> <span class=\\"token builtin\\">range</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">5</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n        p<span class=\\"token operator\\">=</span>Process<span class=\\"token punctuation\\">(</span>target<span class=\\"token operator\\">=</span>work<span class=\\"token punctuation\\">,</span>args<span class=\\"token operator\\">=</span><span class=\\"token punctuation\\">(</span>i<span class=\\"token punctuation\\">,</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n        p<span class=\\"token punctuation\\">.</span>start<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}`);export{n as data};
