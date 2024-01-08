import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o,c as a,f as d,a as t,b as c,e as r}from"./app-YE2Hltoy.js";const s="/assets/1-Cl69BPvP.png",i="/assets/2-J1SNcKgV.png",l="/assets/3-fzzURAWA.png",n="/assets/4-SrpZTl4j.png",h="/assets/5-nQO6buOP.png",p={},m=t("h1",{id:"dec",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#dec","aria-hidden":"true"},"#"),c(" dec")],-1),u=t("p",null,"Tomcat：由 Apache 组织提供的一种 Web 服务器，提供对 jsp 和 Servlet 的支持。",-1),b=r('<h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><p>解压即可</p><table><thead><tr><th>目录</th><th>说明</th></tr></thead><tbody><tr><td>bin</td><td>服务器的可执行程序. 比如启动程序<code>startup.bat</code>,和终止程序<code>shutdown.bat</code></td></tr><tr><td>conf</td><td>服务器的配置文件. 比如配置端口号</td></tr><tr><td>lib</td><td>服务器自己的jar包</td></tr><tr><td>logs</td><td>服务器运行时输出的日记信息</td></tr><tr><td>temp</td><td>服务器运行运行时产生的临时数据</td></tr><tr><td>webapps</td><td>存放部署的 Web 工程。</td></tr><tr><td>work</td><td>运行时jsp翻译为Servlet的源码，和Session钝化的目录。</td></tr></tbody></table><h3 id="启动和终止" tabindex="-1"><a class="header-anchor" href="#启动和终止" aria-hidden="true">#</a> 启动和终止</h3><p>bin目录下的<code>startup.bat</code>双击即可启动, 可访问<code>localhost:8080</code>, 默认访问的的是<code>\\apache-tomcat-8.0.50\\webapps\\ROOT</code></p><h3 id="部署工程" tabindex="-1"><a class="header-anchor" href="#部署工程" aria-hidden="true">#</a> 部署工程</h3><p>把<code>web工程</code>的目录拷贝到Tomcat的<code>webapps</code>目录下, 访问路径是<code>http://ip:port/web工程/资源名</code></p><h3 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h3><ul><li><p>工程目录配置 Tomcat的<code>\\conf\\Catalina\\localhost</code>目录, 创建一个<code>xml</code>文件, 写入<code>&lt;Context path=&quot;/abc&quot; docBase=&quot;E:\\book&quot; /&gt;</code>.</p><ul><li>path 表示工程的访问路径:/abc</li><li>docBase 表示你的工程目录在哪里</li></ul></li><li><p>端口号配置 Tomcat的<code>\\conf\\</code>的<code>server.xml</code>文件, 修改<code>&lt;Connector port=&quot;8080&quot; protocol=&quot;HTTP/1.1&quot; connectionTimeout=&quot;20000&quot; redirectPort=&quot;8443&quot; /&gt;</code></p></li></ul><h3 id="整合idea" tabindex="-1"><a class="header-anchor" href="#整合idea" aria-hidden="true">#</a> 整合idea</h3><ol><li>添加Tomcat容器 <img src="'+s+'" alt="" loading="lazy"><img src="'+i+'" alt="" loading="lazy"></li><li>新建工程 <img src="'+l+'" alt="" loading="lazy"><img src="'+n+'" alt="" loading="lazy"><img src="'+h+'" alt="" loading="lazy"></li></ol>',11);function _(f,g){return o(),a("div",null,[m,u,d("more"),b])}const q=e(p,[["render",_],["__file","Tomcat.html.vue"]]);export{q as default};
