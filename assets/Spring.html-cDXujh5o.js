const n=JSON.parse('{"key":"v-6e7b13e6","path":"/%E5%90%8E%E7%AB%AF/Spring/Spring/Spring.html","title":"process","lang":"zh-CN","frontmatter":{"description":"process IOC(Inversion of Control, 控制反转):把对象创建和对象之间的调用过程，交给 Spring 进行管理 IOC 底层原理 使用工厂模式, 进行: xml 解析 反射 放入容器 加载配置文件时候就会把在配置文件对象进行创建 class UserFactory{ Map container = new HashMap(); // 存放Bean的容器 public static UserDao getDao(){ String className = xml.get(name) String classID = xml.get(id) //1. xml解析, 获得类的ID和名称, &lt;bean id=\\"user\\" class=\\"com.demo.User\\"&gt;&lt;/bean&gt; Class cla = Class.forName(classname); // 2. 通过反射创建对象 container.put(classID, cla.newInstance()) // 3. 将对象放入容器中 } }","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E5%90%8E%E7%AB%AF/Spring/Spring/Spring.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"process"}],["meta",{"property":"og:description","content":"process IOC(Inversion of Control, 控制反转):把对象创建和对象之间的调用过程，交给 Spring 进行管理 IOC 底层原理 使用工厂模式, 进行: xml 解析 反射 放入容器 加载配置文件时候就会把在配置文件对象进行创建 class UserFactory{ Map container = new HashMap(); // 存放Bean的容器 public static UserDao getDao(){ String className = xml.get(name) String classID = xml.get(id) //1. xml解析, 获得类的ID和名称, &lt;bean id=\\"user\\" class=\\"com.demo.User\\"&gt;&lt;/bean&gt; Class cla = Class.forName(classname); // 2. 通过反射创建对象 container.put(classID, cla.newInstance()) // 3. 将对象放入容器中 } }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-27T13:15:51.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2023-11-27T13:15:51.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"process\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-27T13:15:51.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":3,"title":"IOC 底层原理","slug":"ioc-底层原理","link":"#ioc-底层原理","children":[]},{"level":3,"title":"Spring","slug":"spring","link":"#spring","children":[]}],"git":{"createdTime":1701090951000,"updatedTime":1701090951000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":8.01,"words":2404},"filePathRelative":"后端/Spring/Spring/Spring.md","localizedDate":"2023年11月27日","excerpt":"<h1> process</h1>\\n<p>IOC(Inversion of Control, 控制反转):把对象创建和对象之间的调用过程，交给 Spring 进行管理</p>\\n<!--more-->\\n<h3> IOC 底层原理</h3>\\n<p>使用工厂模式, 进行:</p>\\n<ol>\\n<li>xml 解析</li>\\n<li>反射</li>\\n<li>放入容器\\n加载配置文件时候就会把在配置文件对象进行创建</li>\\n</ol>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">UserFactory</span><span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token class-name\\">Map</span> container <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">HashMap</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// 存放Bean的容器</span>\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">static</span> <span class=\\"token class-name\\">UserDao</span> <span class=\\"token function\\">getDao</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token class-name\\">String</span> className <span class=\\"token operator\\">=</span> xml<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">get</span><span class=\\"token punctuation\\">(</span>name<span class=\\"token punctuation\\">)</span> \\n        <span class=\\"token class-name\\">String</span> classID <span class=\\"token operator\\">=</span> xml<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">get</span><span class=\\"token punctuation\\">(</span>id<span class=\\"token punctuation\\">)</span> <span class=\\"token comment\\">//1. xml解析, 获得类的ID和名称, &lt;bean id=\\"user\\" class=\\"com.demo.User\\"&gt;&lt;/bean&gt;</span>\\n        <span class=\\"token class-name\\">Class</span> cla <span class=\\"token operator\\">=</span> <span class=\\"token class-name\\">Class</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">forName</span><span class=\\"token punctuation\\">(</span>classname<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// 2. 通过反射创建对象</span>\\n        container<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">put</span><span class=\\"token punctuation\\">(</span>classID<span class=\\"token punctuation\\">,</span> cla<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">newInstance</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span> <span class=\\"token comment\\">// 3. 将对象放入容器中</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}');export{n as data};
