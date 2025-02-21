import{_ as c}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as l,o as s,c as n,a as e,b as i,d,e as a}from"./app-jdLxCr9I.js";const r={},u=a(`<h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> <code>/</code></h1><p><code>tree -L 1 /</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>/
├── bin -<span class="token operator">&gt;</span> usr/bin  <span class="token comment"># binary缩写, 存放常见的命令, 软连接到/usr/bin</span>
├── boot  <span class="token comment"># 启动时用到的文件</span>
├── dev  <span class="token comment"># dev是Device的缩写，该目录下存放的是Linux的外部设备</span>
├── etc  <span class="token comment"># 所有的系统管理所需要的配置文件</span>
├── home  <span class="token comment"># 用户的主目录，每个用户都有一个自己的目录，一般该目录名是以用户的账号命名</span>
├── lib -<span class="token operator">&gt;</span> usr/lib  <span class="token comment"># 系统最基本的动态连接共享库，几乎所有的应用程序都需要用到这些共享库[软链接到usr/1ib]</span>
├── lib64 -<span class="token operator">&gt;</span> usr/lib64  <span class="token comment"># 与/1ib目录相同，但是是64位的库文件所在目录[软链接到usr/1ib64]</span>
├── media  <span class="token comment"># 会把识别的设备例如U盒，光驱挂载到此目录</span>
├── mnt  <span class="token comment"># 让用户临时挂载别的文件系统的</span>
├── opt  <span class="token comment"># 给主机额外安装软件所摆放的目录</span>
├── proc  <span class="token comment"># 一个虚拟的目录，它是系统内存的映射，访问这个目录来获取系统信息</span>
├── root  <span class="token comment"># 系统管理员，也称作超级权限者的用户主目录</span>
├── run  <span class="token comment"># 存放用户软件运行时数据的地方，例如日志，进程id等</span>
├── sbin -<span class="token operator">&gt;</span> usr/sbin  <span class="token comment"># s就是Systeml的意思，这里存放的是系统管理员使用的系统才能执行的程序</span>
├── srv  <span class="token comment"># 些服务后动之后需要提取的数据</span>
├── sys  <span class="token comment"># 虚拟的文件系统</span>
├── tmp  <span class="token comment"># 临时文件的</span>
├── usr  <span class="token comment"># usr是Unix Software Resourcel, 用户的很多应用程序和文件都放在这个目录下</span>
└── var  <span class="token comment"># 程序的日志就被记录到这个目录下</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="usr" tabindex="-1"><a class="header-anchor" href="#usr" aria-hidden="true">#</a> <code>/usr/</code></h1><ul><li><code>usr/bin</code>, 一般用户能够使用的指令都放在这里, 可以在任何目录下调用, 目录下不会存在目录，都是能够使用的命令. 使用链接文件的方式将<code>/bin</code>也链接至此, /<code>usr/bin</code>与<code>/bin</code>是一模一样</li><li><code>/usr/etc</code>, 用户所需要的配置文件和子目录</li><li><code>/usr/games</code>, 游戏相关的数据放置处</li><li><code>/usr/include</code>, <code>c/c++</code>等程序语言的头文件<code>header</code></li><li><code>/usr/lib/</code>, 与<code>/lib</code>功能相同, <code>/lib</code>也是链接到此目录的</li><li><code>/usr/lib64/</code>, 放的是64位的</li><li><code>/usr/libexec/</code>, 一般使用者惯用的可执行文件或脚本（script）, 例如大部分的 X 窗口下面的操作指令</li><li><code>/usr/sbin/</code>, 系统正常运行所需要的系统指令, 基本功能与 <code>/sbin</code> 也差不多， 因此 <code>/sbin</code> 也是链接到此目录中</li><li><code>/usr/share/</code>, 只读架构的数据文件 <ul><li><code>/usr/share/man</code>：线上说明文档</li><li><code>/usr/share/doc</code>：软件杂项的文件说明</li><li><code>/usr/share/zoneinfo</code>：与时区有关的时区文件</li></ul></li><li><code>/usr/src/</code>, source的意思, 源代码建议放置到这里</li><li><code>/usr/local/</code>: 系统管理员在本机自行安装自己下载的软件建议安装到此目录, 该目录下也是具有bin, etc, include, lib的次目录. 如，你的distribution提供的软件较旧，想安装较新的软件但又不想移除旧版此时你可以将新版软件安装于/usr/local/目录下你可以自行到/usr/local去看看，</li></ul><h1 id="usr-local" tabindex="-1"><a class="header-anchor" href="#usr-local" aria-hidden="true">#</a> <code>/usr/local/</code></h1><ul><li><code>/usr/local/bin</code>, 存放着用户安装的可执行程序 <blockquote><ul><li><code>/bin</code>直接连接到<code>/usr/bin</code>, 可视为一个目录, 历史问题保留了<code>/bin</code></li><li><code>/usr/bin</code>, 存放着系统的命令</li></ul></blockquote></li><li><code>/usr/local/sbin</code>: 用户安装的软件，系统才能执行的程序 <blockquote><ul><li><code>/sbin</code>: 直接连接到<code>/usr/sbin</code>, 可视为一个目录, 历史问题保留了<code>/bin</code></li><li><code>/usr/sbin</code>: 系统安装的软件, 系统才能执行的, 直接连接到</li></ul></blockquote></li><li><code>/usr/local/etc</code>: 存放用户安装软件的配置 <blockquote><ul><li><code>/etc</code>: 系统管理所需要的配置文件和子目录</li><li><code>/usr/etc</code>: 存放系统软件的配置文件</li></ul></blockquote></li><li><code>/usr/local/games</code>: 用户安装游戏相关数据 <blockquote><ul><li><code>/usr/games</code>: 用户游戏的数据</li><li><code>/usr/games</code>: 系统游戏的数据</li></ul></blockquote></li><li><code>/usr/local/include</code>: 自己写的c/c++头文件，自己使用的 <blockquote><ul><li><code>/usr/include</code>: 系统c/c++用到的头文件</li><li>管理员没有</li></ul></blockquote></li><li><code>/usr/local/lib(64)</code>: 用户安装软件时的动态库 <blockquote><ul><li><code>/usr/lib(64)</code>: 系统默认的动态库，静态库</li><li><code>/lib(64)</code>: 直接连接到/usr/lib</li></ul></blockquote></li><li><code>/usr/local/libexec</code>: 用户某些不被一般使用者惯用的可执行文件或脚本 <blockquote><ul><li><code>/usr/libexec</code>: 系统某些不被一般使用者惯用的可执行文件或脚本</li><li>管理员没有</li></ul></blockquote></li><li><code>/usr/local/man</code>: 用户安装软件的帮助手册 <blockquote><ul><li><code>/usr/share/man</code>: 系统软件的帮助手册</li><li>管理员没有</li></ul></blockquote></li><li><code>/usr/local/share</code>: 用户的只读架构的数据文件，也包括共享文件 <blockquote><ul><li><code>/usr/share</code>: 系统的只读架构的数据文件，也包括共享文件</li><li>管理员没有</li></ul></blockquote></li><li><code>/usr/local/src</code>: 用户下载的软件源码 <blockquote><ul><li><code>/usr/src</code>: 系统软件的源码</li><li>管理员无</li></ul></blockquote></li></ul><h2 id="实践" tabindex="-1"><a class="header-anchor" href="#实践" aria-hidden="true">#</a> 实践</h2><h3 id="创建快捷方式" tabindex="-1"><a class="header-anchor" href="#创建快捷方式" aria-hidden="true">#</a> 创建快捷方式</h3><p>比如<code>root</code>用户在<code>/root/</code>目录下, 下载了<code>node-v14.15.1-linux-x64</code>, 可以将运行程序软连接到<code>/usr/local/bin/</code>下. 这样就可以直接在任何目录下执行<code>node</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ln</span> <span class="token parameter variable">-s</span> /root/node-v14.15.1-linux-x64/bin/node /usr/local/bin/node
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>不需要时直接删除<code>/usr/local/bin/node</code>软连接即可.</p><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>`,13),t={href:"https://www.zhihu.com/question/21265424",target:"_blank",rel:"noopener noreferrer"};function b(m,p){const o=l("ExternalLinkIcon");return s(),n("div",null,[u,e("p",null,[e("a",t,[i("linux文件系统"),d(o)])])])}const k=c(r,[["render",b],["__file","目录结构.html.vue"]]);export{k as default};
