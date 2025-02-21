const n=JSON.parse('{"key":"v-b94226d4","path":"/2%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/4java/log/JavaSpringBootLog.html","title":"figure","lang":"zh-CN","frontmatter":{"description":"figure 默认就是使用SLF4J作为日志接口，logback作为日志实现来记录日志。 使用 // 声明日志记录器对象 public static final Logger LOGGER = LoggerFactory.getLogger(SpringbootLogApplicationTests.class); @Test public void contextLoads() { // 打印日志信息 LOGGER.error(\\"error\\"); LOGGER.warn(\\"warn\\"); LOGGER.info(\\"info\\"); // 默认日志级别 LOGGER.debug(\\"debug\\"); LOGGER.trace(\\"trace\\"); }","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/2%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/4java/log/JavaSpringBootLog.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"figure"}],["meta",{"property":"og:description","content":"figure 默认就是使用SLF4J作为日志接口，logback作为日志实现来记录日志。 使用 // 声明日志记录器对象 public static final Logger LOGGER = LoggerFactory.getLogger(SpringbootLogApplicationTests.class); @Test public void contextLoads() { // 打印日志信息 LOGGER.error(\\"error\\"); LOGGER.warn(\\"warn\\"); LOGGER.info(\\"info\\"); // 默认日志级别 LOGGER.debug(\\"debug\\"); LOGGER.trace(\\"trace\\"); }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-21T12:59:55.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-21T12:59:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"figure\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-21T12:59:55.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"使用","slug":"使用","link":"#使用","children":[]},{"level":2,"title":"默认配置文件","slug":"默认配置文件","link":"#默认配置文件","children":[]},{"level":2,"title":"自定义配置文件","slug":"自定义配置文件","link":"#自定义配置文件","children":[{"level":3,"title":"使用logback控制","slug":"使用logback控制","link":"#使用logback控制","children":[]},{"level":3,"title":"切换log4j2","slug":"切换log4j2","link":"#切换log4j2","children":[]}]}],"git":{"createdTime":1740142795000,"updatedTime":1740142795000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":1.47,"words":442},"filePathRelative":"2编程语言/4java/log/JavaSpringBootLog.md","localizedDate":"2025年2月21日","excerpt":"<h1> figure</h1>\\n<p>默认就是使用SLF4J作为日志接口，logback作为日志实现来记录日志。</p>\\n<h2> 使用</h2>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token comment\\">// 声明日志记录器对象</span>\\n<span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">static</span> <span class=\\"token keyword\\">final</span> <span class=\\"token class-name\\">Logger</span> <span class=\\"token constant\\">LOGGER</span> <span class=\\"token operator\\">=</span> <span class=\\"token class-name\\">LoggerFactory</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">getLogger</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">SpringbootLogApplicationTests</span><span class=\\"token punctuation\\">.</span><span class=\\"token keyword\\">class</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token annotation punctuation\\">@Test</span>\\n<span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">contextLoads</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token comment\\">// 打印日志信息</span>\\n    <span class=\\"token constant\\">LOGGER</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">error</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"error\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token constant\\">LOGGER</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">warn</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"warn\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token constant\\">LOGGER</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">info</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"info\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// 默认日志级别</span>\\n    <span class=\\"token constant\\">LOGGER</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">debug</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"debug\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token constant\\">LOGGER</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">trace</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"trace\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}');export{n as data};
