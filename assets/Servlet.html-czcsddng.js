import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as t,f as e,a as n,b as p,e as o}from"./app-SnI5rGHA.js";const l={},c=n("h1",{id:"audio",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#audio","aria-hidden":"true"},"#"),p(" audio")],-1),i=n("p",null,"JavaWeb三大组件分别是：Servlet 程序、Filter 过滤器、Listener 监听器。 Servlet 是运行在服务器(Tomcat)上的一个 java 小程序，它可以接收客户端发送过来的请求，并响应数据给客户端。",-1),u=o(`<h3 id="servlet接口实现" tabindex="-1"><a class="header-anchor" href="#servlet接口实现" aria-hidden="true">#</a> <code>Servlet</code>接口实现</h3><h4 id="简单实现" tabindex="-1"><a class="header-anchor" href="#简单实现" aria-hidden="true">#</a> 简单实现</h4><ol><li>编写一个类去实现 Servlet 接口, 重写<code>service</code>方法</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HelloServlet</span> <span class="token keyword">implements</span> <span class="token class-name">Servlet</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">service</span><span class="token punctuation">(</span><span class="token class-name">ServletRequest</span> servletRequest<span class="token punctuation">,</span> <span class="token class-name">ServletResponse</span> servletResponse<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Hello Servlet&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>到 web.xml 中去配置 servlet 程序的访问地址</li></ol><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet-name</span><span class="token punctuation">&gt;</span></span>HelloServlet<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet-name</span><span class="token punctuation">&gt;</span></span><span class="token comment">&lt;!--Servlet程序起一个别名 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet-class</span><span class="token punctuation">&gt;</span></span>claroja.HelloServlet<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet-class</span><span class="token punctuation">&gt;</span></span><span class="token comment">&lt;!--servlet-class是Servlet程序的全类名--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet-mapping</span><span class="token punctuation">&gt;</span></span><span class="token comment">&lt;!--servlet程序配置访问地址--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet-name</span><span class="token punctuation">&gt;</span></span>HelloServlet<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet-name</span><span class="token punctuation">&gt;</span></span><span class="token comment">&lt;!--url匹配的程序--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url-pattern</span><span class="token punctuation">&gt;</span></span>/hello<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url-pattern</span><span class="token punctuation">&gt;</span></span><span class="token comment">&lt;!--url-pattern标签配置访问地址   /hello 表示地址为：http://ip:port/工程路径/hello--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet-mapping</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>详细代码见 javaweb/demo1</p><p>Servlet 的生命周期:</p><ol><li>执行 Servlet 构造器方法, 第一次访问的时候创建 Servlet 程序会调用</li><li>执行 init 初始化方法, 第一次访问的时候创建 Servlet 程序会调用</li><li>执行 service 方法, 每次访问都会调用。</li><li>执行 destroy 销毁方法, 在 web 工程停止的时候调用</li></ol><h4 id="请求分发-get-post" tabindex="-1"><a class="header-anchor" href="#请求分发-get-post" aria-hidden="true">#</a> 请求分发(get&amp;post)</h4><p>同一个url可能是<code>post</code>请求, 也可能是<code>get</code>请求, 需要在<code>service</code>自行处理.</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">service</span><span class="token punctuation">(</span><span class="token class-name">ServletRequest</span> servletRequest<span class="token punctuation">,</span> <span class="token class-name">ServletResponse</span> servletResponse<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;3 service === Hello Servlet 被访问了&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">HttpServletRequest</span> httpServletRequest <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span><span class="token punctuation">)</span> servletRequest<span class="token punctuation">;</span>
        <span class="token comment">// 获取请求的方式</span>
        <span class="token class-name">String</span> method <span class="token operator">=</span> httpServletRequest<span class="token punctuation">.</span><span class="token function">getMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&quot;GET&quot;</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>method<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;get&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&quot;POST&quot;</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>method<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;post&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>详细代码见 javaweb/demo2</p><h3 id="httpservlet" tabindex="-1"><a class="header-anchor" href="#httpservlet" aria-hidden="true">#</a> <code>HttpServlet</code></h3><p>实际项目开发中，都是使用继承 <code>HttpServlet</code> 类的方式去实现 Servlet 程序。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">claroja</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span></span><span class="token class-name">ServletException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>http<span class="token punctuation">.</span></span><span class="token class-name">HttpServlet</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>http<span class="token punctuation">.</span></span><span class="token class-name">HttpServletRequest</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>http<span class="token punctuation">.</span></span><span class="token class-name">HttpServletResponse</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HelloServlet</span> <span class="token keyword">extends</span> <span class="token class-name">HttpServlet</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@OverrideE</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">doGet</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> req<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> resp<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;HelloServlet 的doGet方法&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">doPost</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> req<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> resp<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;HelloServlet 的doPost方法&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="servletconfig类" tabindex="-1"><a class="header-anchor" href="#servletconfig类" aria-hidden="true">#</a> <code>ServletConfig类</code></h3><p>Servlet 程序的配置信息类, 由 Tomcat 负责创建. Servlet 程序默认是第一次访问的时候创建，ServletConfig 是每个 Servlet 程序创建时，就创建一个对应的 ServletConfig 对 象. 三个重要作用:</p><ol><li>可以获取 Servlet 程序的别名 servlet-name 的值</li><li>获取初始化参数 init-param</li><li>获取 ServletContext 对象</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token class-name">ServletConfig</span> config<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;重写了init初始化方法,做了一些工作&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">doGet</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> req<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> resp<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;HelloServlet 的doGet方法&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ServletConfig</span> servletConfig <span class="token operator">=</span> <span class="token function">getServletConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>servletConfig<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;初始化参数username的值是;&quot;</span> <span class="token operator">+</span> servletConfig<span class="token punctuation">.</span><span class="token function">getInitParameter</span><span class="token punctuation">(</span><span class="token string">&quot;username&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;初始化参数url的值是;&quot;</span> <span class="token operator">+</span> servletConfig<span class="token punctuation">.</span><span class="token function">getInitParameter</span><span class="token punctuation">(</span><span class="token string">&quot;url&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet-name</span><span class="token punctuation">&gt;</span></span>HelloServlet<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet-name</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet-class</span><span class="token punctuation">&gt;</span></span>claroja.HelloServlet<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet-class</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>init-param</span><span class="token punctuation">&gt;</span></span><span class="token comment">&lt;!--init-param是初始化参数--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>param-name</span><span class="token punctuation">&gt;</span></span>username<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>param-name</span><span class="token punctuation">&gt;</span></span><span class="token comment">&lt;!--是参数名--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>param-value</span><span class="token punctuation">&gt;</span></span>root<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>param-value</span><span class="token punctuation">&gt;</span></span><span class="token comment">&lt;!--是参数值--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>init-param</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>init-param</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>param-name</span><span class="token punctuation">&gt;</span></span>url<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>param-name</span><span class="token punctuation">&gt;</span></span><span class="token comment">&lt;!--是参数名--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>param-value</span><span class="token punctuation">&gt;</span></span>jdbc:mysql://localhost:3306/test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>param-value</span><span class="token punctuation">&gt;</span></span><span class="token comment">&lt;!--是参数值--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>init-param</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet-mapping</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet-name</span><span class="token punctuation">&gt;</span></span>HelloServlet<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet-name</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url-pattern</span><span class="token punctuation">&gt;</span></span>/hello<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url-pattern</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet-mapping</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>详细代码见javaweb/demo4</p><h3 id="servletcontext" tabindex="-1"><a class="header-anchor" href="#servletcontext" aria-hidden="true">#</a> <code>ServletContext</code></h3><ul><li>Servlet上下文对象(全局对象), 一个 web 工程, 只有一个 ServletContext 对象实例。</li><li>ServletContext 是在 web 工程部署启动的时候创建。在 web 工程停止的时候销毁。 <code>ServletContext</code>的主要作用是:</li><li>获取 web.xml 中配置的上下文参数 context-param</li><li>获取当前的工程路径，格式: /工程路径</li><li>获取工程部署后在服务器硬盘上的绝对路径</li><li>像 Map 一样存取数据</li></ul><p>详细代码见javaweb/demo5</p><h3 id="httpservletrequest" tabindex="-1"><a class="header-anchor" href="#httpservletrequest" aria-hidden="true">#</a> <code>HttpServletRequest</code></h3><p>每次请求进入服务器，Tomcat就会把请求HTTP协议信息解析好封装到Request对象中, 然后传递到service方法（doGet 和 doPost）中。我们可以通过 <code>HttpServletRequest</code> 对象，获取到所有请求的信息。</p><table><thead><tr><th><code>HttpServletRequest</code>方法</th><th>描述</th></tr></thead><tbody><tr><td>getRequestURI()</td><td>获取请求的资源路径</td></tr><tr><td>getRequestURL()</td><td>获取请求的统一资源定位符（绝对路径）</td></tr><tr><td>igetRemoteHost()</td><td>获取客户端的 ip 地址</td></tr><tr><td>getHeader()</td><td>获取请求头</td></tr><tr><td>getParameter()</td><td>获取请求的参数</td></tr><tr><td>getParameterValues()</td><td>获取请求的参数（多个值的时候使用）</td></tr><tr><td>getMethod()</td><td>获取请求的方式 GET 或 POST</td></tr><tr><td>setAttribute(key, value)</td><td>设置全局域数据</td></tr><tr><td>getAttribute(key)</td><td>获取全局域数据</td></tr><tr><td>getRequestDispatcher()</td><td>获取请求转发对象, 再次调用其<code>forward</code>方法可以进行转发</td></tr></tbody></table><h3 id="httpservletresponse" tabindex="-1"><a class="header-anchor" href="#httpservletresponse" aria-hidden="true">#</a> <code>HttpServletResponse</code></h3><p>每次请求进来，Tomcat 服务器都会创建一个 Response 对象传递给 Servlet 程序去使用。通过 HttpServletResponse 对象来设置返回给客户端的信息</p><table><thead><tr><th><code>HttpServletResponse</code>方法</th><th>描述</th></tr></thead><tbody><tr><td>getWriter().write()</td><td>写入字符数据,与<code>getOutputStream</code>二选一</td></tr><tr><td>getOutputStream().write()</td><td>写入二进制数据</td></tr><tr><td>setCharacterEncoding(&quot;UTF-8&quot;)</td><td>设置字符集</td></tr><tr><td>setHeader(&quot;Content-Type&quot;, &quot;text/html; charset=UTF-8&quot;)</td><td>设置头</td></tr><tr><td>setContentType(&quot;text/html; charset=UTF-8&quot;)</td><td></td></tr><tr><td>setStatus()</td><td>设置状态码</td></tr><tr><td>sendRedirect(&quot;http://localhost:8080&quot;)</td><td>重定向</td></tr></tbody></table>`,31);function r(k,d){return a(),t("div",null,[c,i,e("more"),u])}const g=s(l,[["render",r],["__file","Servlet.html.vue"]]);export{g as default};
