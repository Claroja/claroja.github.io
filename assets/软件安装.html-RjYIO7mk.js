import{_ as l}from"./plugin-vue_export-helper-x3n3nnut.js";import{r,o as d,c as o,b as e,d as a,e as i,a as n}from"./app-7knaTE3M.js";const t={},c=n('<h1 id="软件安装" tabindex="-1"><a class="header-anchor" href="#软件安装" aria-hidden="true">#</a> 软件安装</h1><h2 id="源代码形式" tabindex="-1"><a class="header-anchor" href="#源代码形式" aria-hidden="true">#</a> 源代码形式</h2><ul><li>绝大多数开源软件都是直接以原码形式发布的</li><li>源代码一般会被打成.tar.gz的归档压缩文件</li><li>源代码需要编译成为二进制形式之后才能够运行使用</li><li>源代码基本编译流程： <ol><li>.configure 检查编译环境；</li><li>make对源代码进行编译；</li><li>make insall 将生成的可执行文件安装到当前计算机中</li></ol></li></ul><h2 id="rpm" tabindex="-1"><a class="header-anchor" href="#rpm" aria-hidden="true">#</a> RPM</h2><p>源代码形式的特点：操作复杂、编译时间长、极易出现问题、依赖关系复杂. RPM通过将代码基于特定平台系统编译为可执行文件，并保存依赖关系，来简化开源软件的安装管理。针对不同的系统设定不同的包</p><p>RPM(Redhat Linux Packet Manager)，Red Hat公司随Redhat Linux推出了一个软件包管理器, 后缀是rpm。</p><ul><li>安装软件：执行rpm -ivh rpm包名，如：rpm -ivh apache-1.3.6.i386.rpm</li><li>升级软件：执行rpm -Uvh rpm包名。</li><li>反安装：执行rpm -e rpm包名。</li><li>查询软件包的详细信息：执行rpm -qpi rpm包名</li><li>查询某个文件是属于那个rpm包的：执行rpm -qf rpm包名</li><li>查该软件包会向系统里面写入哪些文件：执行 rpm -qpl rpm包名</li></ul><h2 id="yum" tabindex="-1"><a class="header-anchor" href="#yum" aria-hidden="true">#</a> YUM</h2><p>rpm软件包形式的管理虽然方便，但是需要手工解决软件包的依赖关系。很多时候安装一个软件安装一个软件需要安装1个或者多个其他软件，手动解决时，很复杂，yum解决这些问题。Yum是rpm的前端程序，主要目的是设计用来自动解决rpm的依赖关系. Yum和RPM的关系就如同apt（前端）和dpkg（后端）</p><p>Yum (Yellow dog Updater, Modified)能够从指定的服务器自动下载 RPM 包并且安装，可以自动解决处理包依赖性关系，并且一次安装所有依赖的软件包</p><h2 id="yum源" tabindex="-1"><a class="header-anchor" href="#yum源" aria-hidden="true">#</a> yum源</h2><p>yum仓库（也称yum源）用于存放各种rpm的软件包以及软件包之间的依赖关系（repodata目录）</p><ul><li>本地yum源, yum仓库在本地，一般是本地系统光盘或镜像文件。</li><li>yum仓库在远程（不在本地），需要联网才能安装 <ul><li>国内较知名的网络源（aliyun源，163源，sohu源，知名大学开源镜像等）</li><li>国外较知名的网络源（centos源、redhat源、红帽扩展epel源等）</li><li>特定软件相关的网络源（Nginx、MySQL、Zabbix等）</li></ul></li></ul><h3 id="网络源配置" tabindex="-1"><a class="header-anchor" href="#网络源配置" aria-hidden="true">#</a> 网络源配置</h3>',14),p=n(`<li><p>查看本地的镜像源</p><p>yum的配置文件在<code>/etc/yum.repos.d</code>路径下, 每一个<code>.repo</code>结尾的文件就是一个仓库.</p><p>查看目前的仓库配置文件:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ls</span> <span class="token operator">|</span> <span class="token function">grep</span> repo$

CentOS-Linux-Base-ali.repo
epel-modular.repo
epel.repo
epel-testing-modular.repo
epel-testing.repo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看yum中对应的仓库, 可以看到是一一对应的:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum repolist

repo <span class="token function">id</span>                                                             repo name
AppStream                                                           CentOS-8.5.2111 - AppStream - mirrors.aliyun.com
base                                                                CentOS-8.5.2111 - Base - mirrors.aliyun.com
epel                                                                Extra Packages <span class="token keyword">for</span> Enterprise Linux <span class="token number">8</span> - x86_64
epel-modular                                                        Extra Packages <span class="token keyword">for</span> Enterprise Linux Modular <span class="token number">8</span> - x86_64
extras                                                              CentOS-8.5.2111 - Extras - mirrors.aliyun.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,1),u=e("p",null,"添加镜像仓库配置文件",-1),m=n(`<li><p>查看系统版本</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> /etc/redhat-release <span class="token comment"># CentOS Linux release 8.5.2111</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>`,1),h={href:"https://repo.huaweicloud.com/repository/conf/",target:"_blank",rel:"noopener noreferrer"},v=e("code",null,".repo",-1),b=e("code",null,"/etc/yum.repos.d/",-1),_=n(`<li><p>更新仓库</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum clean all <span class="token comment"># 清除系统所有的yum缓存</span>
yum makeacache <span class="token comment"># 生成新的yum缓存</span>
yum repolist
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,1),g=n(`<p>以上步骤也可以手动完成:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mv</span> /etc/yum.repos.d/* *.bak
<span class="token builtin class-name">echo</span> <span class="token string">&quot;[base]
name=CentOS7
baseurl=&quot;</span>https://repo.huaweicloud.com/centos/<span class="token punctuation">\\</span><span class="token variable">$releasever</span>/os/<span class="token punctuation">\\</span><span class="token variable">$basearch</span>/<span class="token string">&quot;
enabled=1
gpgcheck=0&quot;</span> <span class="token operator">&gt;</span> local.repo
yum clean all
yum makecache
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),k=e("h2",{id:"参考",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#参考","aria-hidden":"true"},"#"),a(" 参考")],-1),y={href:"https://www.cnblogs.com/ryanzheng/p/11322375.html",target:"_blank",rel:"noopener noreferrer"},f={href:"https://blog.csdn.net/qq_43475285/article/details/129479198",target:"_blank",rel:"noopener noreferrer"};function x(M,S){const s=r("ExternalLinkIcon");return d(),o("div",null,[c,e("ol",null,[p,e("li",null,[u,e("ol",null,[m,e("li",null,[e("p",null,[a("下载对应的镜像仓库, 这里以"),e("a",h,[a("华为"),i(s)]),a("为例, 找到对应的"),v,a("文件, 放在"),b,a("路径下")])]),_]),g])]),k,e("p",null,[e("a",y,[i(s)]),e("a",f,[a("yum源配置"),i(s)])])])}const w=l(t,[["render",x],["__file","软件安装.html.vue"]]);export{w as default};
