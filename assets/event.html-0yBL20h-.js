const n=JSON.parse(`{"key":"v-7504f1fc","path":"/4%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/3python/9%E8%BF%9B%E7%A8%8B/event.html","title":"event","lang":"zh-CN","frontmatter":{"description":"event from multiprocessing import Process, Event import time def worker(name, event): while not event.is_set(): print('Process_%s is ready' % name) event.wait(1) print('Process_%s is running' % name) if __name__ == '__main__': event = Event() for i in range(0, 2): Process(target=worker, args=(i, event)).start() time.sleep(3) event.set()","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/4%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/3python/9%E8%BF%9B%E7%A8%8B/event.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"event"}],["meta",{"property":"og:description","content":"event from multiprocessing import Process, Event import time def worker(name, event): while not event.is_set(): print('Process_%s is ready' % name) event.wait(1) print('Process_%s is running' % name) if __name__ == '__main__': event = Event() for i in range(0, 2): Process(target=worker, args=(i, event)).start() time.sleep(3) event.set()"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-24T12:46:58.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-24T12:46:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"event\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-24T12:46:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[],"git":{"createdTime":1740401218000,"updatedTime":1740401218000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":0.17,"words":51},"filePathRelative":"4编程语言/3python/9进程/event.md","localizedDate":"2025年2月24日","excerpt":"<h1> event</h1>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token keyword\\">from</span> multiprocessing <span class=\\"token keyword\\">import</span> Process<span class=\\"token punctuation\\">,</span> Event\\n<span class=\\"token keyword\\">import</span> time\\n\\n<span class=\\"token keyword\\">def</span> <span class=\\"token function\\">worker</span><span class=\\"token punctuation\\">(</span>name<span class=\\"token punctuation\\">,</span> event<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n    <span class=\\"token keyword\\">while</span> <span class=\\"token keyword\\">not</span> event<span class=\\"token punctuation\\">.</span>is_set<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n        <span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'Process_%s is ready'</span> <span class=\\"token operator\\">%</span> name<span class=\\"token punctuation\\">)</span>\\n        event<span class=\\"token punctuation\\">.</span>wait<span class=\\"token punctuation\\">(</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'Process_%s is running'</span> <span class=\\"token operator\\">%</span> name<span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token keyword\\">if</span> __name__ <span class=\\"token operator\\">==</span> <span class=\\"token string\\">'__main__'</span><span class=\\"token punctuation\\">:</span>\\n    event <span class=\\"token operator\\">=</span> Event<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token keyword\\">for</span> i <span class=\\"token keyword\\">in</span> <span class=\\"token builtin\\">range</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">2</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n        Process<span class=\\"token punctuation\\">(</span>target<span class=\\"token operator\\">=</span>worker<span class=\\"token punctuation\\">,</span> args<span class=\\"token operator\\">=</span><span class=\\"token punctuation\\">(</span>i<span class=\\"token punctuation\\">,</span> event<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span>start<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n    time<span class=\\"token punctuation\\">.</span>sleep<span class=\\"token punctuation\\">(</span><span class=\\"token number\\">3</span><span class=\\"token punctuation\\">)</span>\\n    event<span class=\\"token punctuation\\">.</span><span class=\\"token builtin\\">set</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}`);export{n as data};
