import{_ as c}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o as d,c as a,a as e,b as l,d as r,e as h}from"./app-M6UUlHgF.js";const t={},n=h('<h1 id="环境变量" tabindex="-1"><a class="header-anchor" href="#环境变量" aria-hidden="true">#</a> 环境变量</h1><h2 id="export-path" tabindex="-1"><a class="header-anchor" href="#export-path" aria-hidden="true">#</a> export PATH</h2><ul><li>修改办法：<code>export PATH=$PATH:/home/test/bin</code></li><li>生效操作：立即生效</li><li>生效期限：<code>当前终端</code>有效，窗口关闭后无效</li><li>生效范围：仅对<code>当前用户</code>有效</li><li>所属级别：用户级别</li></ul><h2 id="vim-bashrc" tabindex="-1"><a class="header-anchor" href="#vim-bashrc" aria-hidden="true">#</a> vim ~/.bashrc</h2><ul><li>修改办法：修改 <code>~/.bashrc</code>，在最后一行加上：<code>export PATH=$PATH:/home/test/bin</code></li><li>生效操作：使<code>相同的用户</code>打开新的终端时<code>生效，或者手动</code>source ~/.bashrc`生效</li><li>生效期限：<code>永久有效</code></li><li>生效范围：仅对<code>当前用户</code>有效</li><li>所属级别：用户级别</li></ul><h2 id="vim-bash-profile" tabindex="-1"><a class="header-anchor" href="#vim-bash-profile" aria-hidden="true">#</a> vim ~/.bash_profile</h2><ul><li>修改办法：修改 <code>~/.bash_profile</code>，在最后一行加上：<code>export PATH=$PATH:/home/test/bin</code></li><li>生效操作：使用相同的用户<code>打开新的终端时</code>生效，或者手动<code>source ~/.bash_profile</code>生效</li><li>生效期限：<code>永久有效</code></li><li>生效范围：仅对<code>当前用户</code>有效</li><li>所属级别：用户级别</li></ul><h2 id="vim-etc-bashrc" tabindex="-1"><a class="header-anchor" href="#vim-etc-bashrc" aria-hidden="true">#</a> vim /etc/bashrc</h2><ul><li>修改办法：修改<code>/etc/bashrc</code>，在最后一行加上：<code>export PATH=$PATH:/home/test/bin</code></li><li>生效操作：<code>新开终端</code>生效，或者手动<code>source /etc/bashrc</code>生效</li><li>生效期限：<code>永久有效</code></li><li>生效范围：对<code>所有用户</code>有效</li><li>所属级别：系统级别</li></ul><h2 id="vim-etc-profile" tabindex="-1"><a class="header-anchor" href="#vim-etc-profile" aria-hidden="true">#</a> vim /etc/profile</h2><ul><li>修改办法：修改<code>/etc/profile</code>，在最后一行加上：<code>export PATH=$PATH:/home/test/bin</code></li><li>生效操作：<code>新开终端</code>生效，或者手动<code>source /etc/profile</code>生效</li><li>生效期限：<code>永久有效</code></li><li>生效范围：对<code>所有用户</code>有效</li><li>所属级别：系统级别</li></ul><h2 id="vim-etc-environment" tabindex="-1"><a class="header-anchor" href="#vim-etc-environment" aria-hidden="true">#</a> vim /etc/environment</h2><ul><li>修改办法：修改<code>/etc/environment</code>，在最后一行加上：<code>export PATH=$PATH:/home/test/bin</code></li><li>生效操作：<code>新开终端</code>生效，或者手动<code>source /etc/environment</code>生效</li><li>生效期限：<code>永久有效</code></li><li>生效范围：对<code>所有用户</code>有效</li><li>所属级别：系统级别</li></ul><blockquote><p>用户级别环境变量定义文件：<code>~/.bashrc</code>、 <code>~/.profile</code>（部分系统为：<code>~/.bash_profile</code>） 系统级别环境变量定义文件：<code>/etc/bashrc</code>、 <code>/etc/profile</code>(部分系统为：<code>/etc/bash_profile</code>)、 <code>/etc/environment</code></p></blockquote><h2 id="加载顺序" tabindex="-1"><a class="header-anchor" href="#加载顺序" aria-hidden="true">#</a> 加载顺序</h2><ol><li><code>/etc/environment</code></li><li><code>/etc/profile</code>(部分系统为：<code>/etc/bash_profile</code>)</li><li><code>/etc/bashrc</code></li><li><code>/etc/profile.d/xxx.sh</code></li><li><code>~/.profile</code>（部分系统为：~/.bash_profile）</li><li><code>~/.bashrc</code></li></ol><h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2><h3 id="系统环境变量" tabindex="-1"><a class="header-anchor" href="#系统环境变量" aria-hidden="true">#</a> 系统环境变量</h3><p>系统环境变量对全部的用户生效，设置系统环境变量有三种方法。</p><ol><li>系统环境变量<code>/etc/profile</code>, 用户登录时<code>/etc/profile</code>文件. 或者手动执行<code>source /etc/profile</code>. 不推荐.</li><li>在<code>/etc/profile.d</code>目录中增加环境变量脚本文件，这是Linux推荐的方法。<code>/etc/profile</code>在每次启动时会执行<code>/etc/profile.d</code>下全部的脚本文件。</li><li>在<code>/etc/bashrc</code>文件中设置环境变量。用户使用的<code>bash shell</code>时调用, 不建议.</li></ol><h3 id="用户环境变量" tabindex="-1"><a class="header-anchor" href="#用户环境变量" aria-hidden="true">#</a> 用户环境变量</h3><p>用户环境变量只对当前用户生效，设置用户环境变量也有多种方法。</p><ol><li><code>.bash_profile</code>（推荐首选）当用户登录时执行</li><li><code>.bashrc</code> 每次打开终端时执行</li><li><code>.bash_logout</code> 退出终端时执行</li><li><code>.bash_history</code> 保存了当前用户使用过的历史命令</li></ol><h3 id="环境变量脚本执行顺序" tabindex="-1"><a class="header-anchor" href="#环境变量脚本执行顺序" aria-hidden="true">#</a> 环境变量脚本执行顺序</h3><p><code>/etc/profile-&gt;/etc/profile.d-&gt;/etc/bashrc-&gt;用户的.bash_profile-&gt;用户的.bashrc</code></p><h2 id="path变量" tabindex="-1"><a class="header-anchor" href="#path变量" aria-hidden="true">#</a> PATH变量</h2><p>可执行程序的搜索目录，可执行程序包括Linux系统命令和用户的应用程序。PATH环境变量存放的是目录列表，目录之间用冒号:分隔，最后的圆点.表示当前目录。PATH缺省包含了Linux系统命令所在的目录（/usr/local/bin:/usr/bin:/usr/local/sbin:/usr/sbin）</p><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考:</h2>',28),s={href:"https://zhuanlan.zhihu.com/p/578816049",target:"_blank",rel:"noopener noreferrer"};function p(b,f){const o=i("ExternalLinkIcon");return d(),a("div",null,[n,e("p",null,[e("a",s,[l("Linux最全环境配置"),r(o)])])])}const x=c(t,[["render",p],["__file","环境变量.html.vue"]]);export{x as default};
