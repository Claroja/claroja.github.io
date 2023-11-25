const a=JSON.parse('{"key":"v-227ae53d","path":"/%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/python/%E6%8A%BD%E8%B1%A1%E4%B8%8E%E6%8E%A5%E5%8F%A3/python_abstractClass.html","title":"abstractClass","lang":"zh-CN","frontmatter":{"description":"abstractClass 通过abc模块来创建,类似于java中的abstract class import abc class Animal(metaclass=abc.ABCMeta): @abc.abstractmethod def say(self): pass def eat(self): print(\\"eat food\\") ## a = Animal() # 抽象类不能被实例化 class Dog(Animal): def say(self): print(\\"dog\\") dog = Dog() dog.say() dog.eat()","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/python/%E6%8A%BD%E8%B1%A1%E4%B8%8E%E6%8E%A5%E5%8F%A3/python_abstractClass.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"abstractClass"}],["meta",{"property":"og:description","content":"abstractClass 通过abc模块来创建,类似于java中的abstract class import abc class Animal(metaclass=abc.ABCMeta): @abc.abstractmethod def say(self): pass def eat(self): print(\\"eat food\\") ## a = Animal() # 抽象类不能被实例化 class Dog(Animal): def say(self): print(\\"dog\\") dog = Dog() dog.say() dog.eat()"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-25T13:46:58.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2023-11-25T13:46:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"abstractClass\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-25T13:46:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[],"git":{"createdTime":1700920018000,"updatedTime":1700920018000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":0.19,"words":58},"filePathRelative":"编程语言/python/抽象与接口/python_abstractClass.md","localizedDate":"2023年11月25日","excerpt":"<h1> abstractClass</h1>\\n<p>通过<code>abc</code>模块来创建,类似于<code>java</code>中的<code>abstract class</code></p>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token keyword\\">import</span> abc\\n<span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">Animal</span><span class=\\"token punctuation\\">(</span>metaclass<span class=\\"token operator\\">=</span>abc<span class=\\"token punctuation\\">.</span>ABCMeta<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n    <span class=\\"token decorator annotation punctuation\\">@abc<span class=\\"token punctuation\\">.</span>abstractmethod</span>\\n    <span class=\\"token keyword\\">def</span> <span class=\\"token function\\">say</span><span class=\\"token punctuation\\">(</span>self<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n        <span class=\\"token keyword\\">pass</span>\\n    <span class=\\"token keyword\\">def</span> <span class=\\"token function\\">eat</span><span class=\\"token punctuation\\">(</span>self<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n        <span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"eat food\\"</span><span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token comment\\">## a = Animal() # 抽象类不能被实例化</span>\\n\\n<span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">Dog</span><span class=\\"token punctuation\\">(</span>Animal<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n    <span class=\\"token keyword\\">def</span> <span class=\\"token function\\">say</span><span class=\\"token punctuation\\">(</span>self<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n        <span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"dog\\"</span><span class=\\"token punctuation\\">)</span>\\n\\ndog <span class=\\"token operator\\">=</span> Dog<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\ndog<span class=\\"token punctuation\\">.</span>say<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\ndog<span class=\\"token punctuation\\">.</span>eat<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}');export{a as data};
