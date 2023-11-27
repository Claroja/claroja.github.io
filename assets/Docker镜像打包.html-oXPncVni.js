import{_ as o}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as n,f as c,a as e,b as a,e as t}from"./app-O0xqlHfm.js";const l={},d=e("h1",{id:"结构",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#结构","aria-hidden":"true"},"#"),a(" 结构")],-1),i=e("h3",{id:"镜像打包",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#镜像打包","aria-hidden":"true"},"#"),a(" 镜像打包")],-1),r=e("p",null,"Docker镜像打包主要有两种方式:",-1),u=e("ul",null,[e("li",null,[a("直接"),e("code",null,"commmit"),a("container")]),e("li",null,"使用DockerFile来build")],-1),p=t(`<h4 id="commit" tabindex="-1"><a class="header-anchor" href="#commit" aria-hidden="true">#</a> commit</h4><ol><li><p>拉取系统文件 <code>docker pull centos</code></p></li><li><p>运行镜像 <code>docker run ‐it ‐‐name=mycentos centos:latest</code></p></li><li><p>上传文件</p></li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">cp</span> apache‐tomcat‐7.0.47.tar.gz mycentos:/root/
<span class="token function">docker</span> <span class="token function">cp</span> jdk‐8u161‐linux‐x64.tar.gz mycentos:/root/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>在容器中安装jdk</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 解压,并配置\`/etc/profile\`文件：</span>
<span class="token function">tar</span> ‐zxvf jdk‐8u161‐linux‐x64.tar.gz ‐C /usr/local/
<span class="token assign-left variable">JAVA_HOME</span><span class="token operator">=</span>/usr/local/jdk1.8.0_161
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token variable">$JAVA_HOME</span>/bin:<span class="token environment constant">$PATH</span>
<span class="token comment">## 解压,并配置\`tomcat/bin/setclsspath.sh\`文件：</span>
<span class="token function">tar</span> ‐zxvf apache‐tomcat‐7.0.47.tar.gz ‐C /usr/local/
<span class="token builtin class-name">export</span> <span class="token assign-left variable">JAVA_HOME</span><span class="token operator">=</span>/usr/local/jdk1.8.0_161
<span class="token builtin class-name">export</span> <span class="token assign-left variable">JRE_HOME</span><span class="token operator">=</span>/usr/local/jdk1.8.0_161/jre
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li><p>将正在运行的容器提交为一个新的镜像 <code>docker commit mycentos mytomcat</code></p></li><li><p>测试镜像</p></li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run ‐itd ‐‐name<span class="token operator">=</span>t1 ‐p <span class="token number">8888</span>:8080 mytomcat /bin/bash
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> t1 /usr/local/apache‐tomcat‐7.0.47/bin/startup.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="7"><li>镜像打包</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> save ‐o /root/tomcat7.tar mytomcat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其他机器可以使用<code>docker load ‐i /root/tomcat7.tar</code>来载入镜像</p><h4 id="dsl" tabindex="-1"><a class="header-anchor" href="#dsl" aria-hidden="true">#</a> DSL</h4><h5 id="dockerfile语法" tabindex="-1"><a class="header-anchor" href="#dockerfile语法" aria-hidden="true">#</a> DockerFile语法</h5><ul><li>FROM 父镜像 语法:<code>FROM &lt;image&gt;:&lt;tag&gt;</code> 其中<code>tag</code>可以省略 列子:<code>FROM centos:last</code></li><li>MAINTAINER 镜像维护者 <code>MAINTAINER claroja&lt;63183535@qq.com&gt;</code></li><li>ENV 设置环境变量 <code>ENV mypath=/tmp</code> 设置<code>mypath</code>环境变量, 下面可以使用<code>$mypath</code>来引用</li><li>WORKDIR 终端默认登陆的进来工作目录 <code>WORKDIR $mypath</code> 登陆进入<code>mypath</code>路径</li><li>COPY和ADD <ul><li>COPY 拷贝文件和目录到镜像中 <code>COPY ./a.txt /root/b.txt</code> 将宿主机上的<code>./a.txt</code>拷贝到容器的<code>/root/b.txt</code></li><li>ADD 宿主机目录下的文件拷贝进镜像且ADD命令会自动处理URL和解压tar压缩包 <code>ADD a.tar.gz /usr/local/</code> 将宿主机上的<code>a.tar.gz</code>中的内容解压到<code>/usr/local/a</code></li></ul></li><li>RUN 容器<code>构建时</code>需要运行的命令 <code>RUN [&quot;executable&quot;,&quot;param1&quot;,&quot;param2&quot;]</code>等价于<code>RUN executable param1 param2</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>RUN yum <span class="token parameter variable">-y</span> <span class="token function">install</span> <span class="token function">vim</span> <span class="token comment"># 等价于RUN [&quot;yum&quot;,&quot;-y&quot;,&quot;install&quot;,&quot;vim&quot;]</span>
RUN yum <span class="token parameter variable">-y</span> <span class="token function">install</span> net-tools
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>CMD和ENTRYPOINT<code>启动时</code>运行命令 语法:<code>CMD [&quot;executable&quot;,&quot;param1&quot;,&quot;param2&quot;]</code> or <code>ENTRYPOINT [&quot;executable&quot;,&quot;param1&quot;,&quot;param2&quot;]</code> 等价语法: <code>CMD executable param1 param2]</code> 例子:<code>CMD [&quot;/bin/echo&quot;, &quot;test&quot;]</code> or <code>ENTRYPOINT [&quot;/bin/echo&quot;, &quot;test&quot;]</code><ul><li>CMD 容器<code>启动时</code>要运行的命令, 多个CMD指令, 但只有最后一个生效 <code>CMD [&quot;curl&quot;, &quot;-s&quot;, &quot;http://ip.cn&quot;]</code><code>docker run -it centos [外部命令]</code> 这时<code>外部命令</code>会<code>覆盖</code>dockerfile中的<code>CMD</code>那一行命令, 相当于只执行了<code>CMD [外部命令]</code></li><li>ENTRYPOINT 容器<code>启动时</code>要运行的命令 <code>docker run -it centos [外部命令]</code> 这时<code>外部命令</code>会<code>追加</code>到dockerfile中的<code>ENTRYPOINT</code>那一行命令,相当于执行了<code>CMD [&quot;curl&quot;, &quot;-s&quot;, &quot;http://ip.cn&quot;, &quot;外部命令&quot;]</code></li></ul></li><li>EXPOSE 暴露指定端口 <code>EXPOSE 80</code></li><li>VOLUME 容器数据卷(少使用,系统自动生成宿主机目录, 需要用<code>docker inspect</code>查询)</li><li>ONBUILD 父镜像在被子继承后, 父镜像的onbuild被触发 <code>ONBUILD RUN echo &quot;fatherimage run&quot;</code></li></ul><h5 id="构建" tabindex="-1"><a class="header-anchor" href="#构建" aria-hidden="true">#</a> 构建</h5><p><code>docker build -f ./dockerfile -t imagename:1.3 .</code><code>-f</code> 指定文件, 默认如果名称是<code>Dockerfile</code>,则不需要<code>-f</code> 最后的<code>.</code>是生成镜像的路径</p><h3 id="容器打包" tabindex="-1"><a class="header-anchor" href="#容器打包" aria-hidden="true">#</a> 容器打包</h3><p>容器也可以直接打包</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">export</span> ‐o /root/container.tar t1
<span class="token function">docker</span> <span class="token function">import</span> container.tar mytomcat:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,20);function m(h,b){return s(),n("div",null,[d,i,r,u,c("more"),p])}const q=o(l,[["render",m],["__file","Docker镜像打包.html.vue"]]);export{q as default};
