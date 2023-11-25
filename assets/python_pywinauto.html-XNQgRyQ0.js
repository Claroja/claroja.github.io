const t=JSON.parse('{"key":"v-7faae18a","path":"/%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/python/%E5%B0%9A%E6%9C%AA%E5%BD%92%E7%B1%BB/python_pywinauto.html","title":"pywinauto","lang":"zh-CN","frontmatter":{"description":"pywinauto 操作控件需要以下几个步骤： 第一步 实例化要操作的进程：得到的app是Application对象 from pywinauto.application import Application app = Application(backend=\\"uia\\").connect(process=13296)","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/python/%E5%B0%9A%E6%9C%AA%E5%BD%92%E7%B1%BB/python_pywinauto.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"pywinauto"}],["meta",{"property":"og:description","content":"pywinauto 操作控件需要以下几个步骤： 第一步 实例化要操作的进程：得到的app是Application对象 from pywinauto.application import Application app = Application(backend=\\"uia\\").connect(process=13296)"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://claroja.github.io/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-25T13:46:58.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"pywinauto"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2023-11-25T13:46:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"pywinauto\\",\\"image\\":[\\"https://claroja.github.io/\\"],\\"dateModified\\":\\"2023-11-25T13:46:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"第一步, 创建Application对象","slug":"第一步-创建application对象","link":"#第一步-创建application对象","children":[{"level":3,"title":"backend","slug":"backend","link":"#backend","children":[]},{"level":3,"title":"打开新程序并连接: start()","slug":"打开新程序并连接-start","link":"#打开新程序并连接-start","children":[]},{"level":3,"title":"连接已启动的窗口: connect()","slug":"连接已启动的窗口-connect","link":"#连接已启动的窗口-connect","children":[]},{"level":3,"title":"application对象, 参考官网","slug":"application对象-参考官网","link":"#application对象-参考官网","children":[]}]},{"level":2,"title":"第二步, 获得application窗口,","slug":"第二步-获得application窗口","link":"#第二步-获得application窗口","children":[]},{"level":2,"title":"第三步, 获得指定的窗口","slug":"第三步-获得指定的窗口","link":"#第三步-获得指定的窗口","children":[]},{"level":2,"title":"第四步, 对控件进行操作","slug":"第四步-对控件进行操作","link":"#第四步-对控件进行操作","children":[{"level":3,"title":"鼠标操作","slug":"鼠标操作","link":"#鼠标操作","children":[]},{"level":3,"title":"文本输入","slug":"文本输入","link":"#文本输入","children":[]},{"level":3,"title":"下拉菜单","slug":"下拉菜单","link":"#下拉菜单","children":[]},{"level":3,"title":"最大化最小化","slug":"最大化最小化","link":"#最大化最小化","children":[]},{"level":3,"title":"等待与确认","slug":"等待与确认","link":"#等待与确认","children":[]},{"level":3,"title":"控件信息获取","slug":"控件信息获取","link":"#控件信息获取","children":[]},{"level":3,"title":"控件位置获取","slug":"控件位置获取","link":"#控件位置获取","children":[]},{"level":3,"title":"控件辅助","slug":"控件辅助","link":"#控件辅助","children":[]}]}],"git":{"createdTime":1700920018000,"updatedTime":1700920018000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":6.95,"words":2085},"filePathRelative":"编程语言/python/尚未归类/python_pywinauto.md","localizedDate":"2023年11月25日","excerpt":"<h1> pywinauto</h1>\\n<p>操作控件需要以下几个步骤：\\n第一步 实例化要操作的进程：得到的app是Application对象</p>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token keyword\\">from</span> pywinauto<span class=\\"token punctuation\\">.</span>application <span class=\\"token keyword\\">import</span> Application\\napp <span class=\\"token operator\\">=</span> Application<span class=\\"token punctuation\\">(</span>backend<span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"uia\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span>connect<span class=\\"token punctuation\\">(</span>process<span class=\\"token operator\\">=</span><span class=\\"token number\\">13296</span><span class=\\"token punctuation\\">)</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}');export{t as data};
