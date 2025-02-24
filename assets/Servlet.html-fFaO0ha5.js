const e=JSON.parse('{"key":"v-e210f6d2","path":"/7%E5%90%8E%E7%AB%AF%E5%BC%80%E5%8F%91/2spring/JavaWeb%E5%9F%BA%E7%A1%80/Servlet.html","title":"audio","lang":"zh-CN","frontmatter":{"description":"audio JavaWeb三大组件分别是：Servlet 程序、Filter 过滤器、Listener 监听器。 Servlet 是运行在服务器(Tomcat)上的一个 java 小程序，它可以接收客户端发送过来的请求，并响应数据给客户端。 Servlet接口实现 简单实现 编写一个类去实现 Servlet 接口, 重写service方法 public class HelloServlet implements Servlet { @Override public void service(ServletRequest servletRequest, ServletResponse servletResponse) throws ServletException, IOException { System.out.println(\\"Hello Servlet\\"); } }","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/7%E5%90%8E%E7%AB%AF%E5%BC%80%E5%8F%91/2spring/JavaWeb%E5%9F%BA%E7%A1%80/Servlet.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"audio"}],["meta",{"property":"og:description","content":"audio JavaWeb三大组件分别是：Servlet 程序、Filter 过滤器、Listener 监听器。 Servlet 是运行在服务器(Tomcat)上的一个 java 小程序，它可以接收客户端发送过来的请求，并响应数据给客户端。 Servlet接口实现 简单实现 编写一个类去实现 Servlet 接口, 重写service方法 public class HelloServlet implements Servlet { @Override public void service(ServletRequest servletRequest, ServletResponse servletResponse) throws ServletException, IOException { System.out.println(\\"Hello Servlet\\"); } }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-24T12:46:58.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-24T12:46:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"audio\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-24T12:46:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":3,"title":"Servlet接口实现","slug":"servlet接口实现","link":"#servlet接口实现","children":[]},{"level":3,"title":"HttpServlet","slug":"httpservlet","link":"#httpservlet","children":[]},{"level":3,"title":"ServletConfig类","slug":"servletconfig类","link":"#servletconfig类","children":[]},{"level":3,"title":"ServletContext","slug":"servletcontext","link":"#servletcontext","children":[]},{"level":3,"title":"HttpServletRequest","slug":"httpservletrequest","link":"#httpservletrequest","children":[]},{"level":3,"title":"HttpServletResponse","slug":"httpservletresponse","link":"#httpservletresponse","children":[]}],"git":{"createdTime":1740401218000,"updatedTime":1740401218000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":3.79,"words":1137},"filePathRelative":"7后端开发/2spring/JavaWeb基础/Servlet.md","localizedDate":"2025年2月24日","excerpt":"<h1> audio</h1>\\n<p>JavaWeb三大组件分别是：Servlet 程序、Filter 过滤器、Listener 监听器。\\nServlet 是运行在服务器(Tomcat)上的一个 java 小程序，它可以接收客户端发送过来的请求，并响应数据给客户端。</p>\\n<!--more-->\\n<h3> <code>Servlet</code>接口实现</h3>\\n<h4> 简单实现</h4>\\n<ol>\\n<li>编写一个类去实现 Servlet 接口, 重写<code>service</code>方法</li>\\n</ol>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">HelloServlet</span> <span class=\\"token keyword\\">implements</span> <span class=\\"token class-name\\">Servlet</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token annotation punctuation\\">@Override</span>\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">service</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">ServletRequest</span> servletRequest<span class=\\"token punctuation\\">,</span> <span class=\\"token class-name\\">ServletResponse</span> servletResponse<span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">throws</span> <span class=\\"token class-name\\">ServletException</span><span class=\\"token punctuation\\">,</span> <span class=\\"token class-name\\">IOException</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token class-name\\">System</span><span class=\\"token punctuation\\">.</span>out<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">println</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"Hello Servlet\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}');export{e as data};
