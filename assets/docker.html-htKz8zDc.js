import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as n,e}from"./app-0JgdiRQ-.js";const o={},c=e(`<h1 id="docker" tabindex="-1"><a class="header-anchor" href="#docker" aria-hidden="true">#</a> docker</h1><p>1.下载镜像<code>docker pull mysql</code> 2.启动容器<code>docker run --name mysql -e MYSQL_ROOT_PASSWORD=123456 -p 3306:3306 -d mysql</code> 默认用户名是root，<code>-e MYSQL_ROOT_PASSWORD</code>来设置密码 3.进入容器<code>docker exec -it mysql /bin/bash</code> 4.链接mysql<code>mysql -uroot -p</code> 然后输入密码<code>123456</code> 5.更改加密规则，以便远程连接 mysql8 之前的版本中加密规则是mysql_native_password,而在mysql8之后,加密规则是caching_sha2_password,所以把加密规则改回来。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>ALTER USER <span class="token string">&#39;root&#39;</span>@<span class="token string">&#39;%&#39;</span> IDENTIFIED BY <span class="token string">&#39;123456&#39;</span> PASSWORD EXPIRE NEVER<span class="token punctuation">;</span> <span class="token comment">#修改加密规则 ，&#39;password&#39;改成你的密码</span>
ALTER USER <span class="token string">&#39;root&#39;</span>@<span class="token string">&#39;%&#39;</span> IDENTIFIED WITH mysql_native_password BY <span class="token string">&#39;123456&#39;</span><span class="token punctuation">;</span> <span class="token comment">#更新一下用户的密码 ，&#39;password&#39;是你的密码</span>
FLUSH PRIVILEGES<span class="token punctuation">;</span> <span class="token comment">#刷新权限</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2><p>1.可以建立卷，将mysql的数据和日志同步到宿主</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>duso <span class="token function">docker</span> run <span class="token parameter variable">-p</span> <span class="token number">3306</span>:3306 <span class="token parameter variable">--name</span> mysql <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /usr/local/docker/mysql/conf:/etc/mysql <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /usr/local/docker/mysql/logs:/var/log/mysql <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /usr/local/docker/mysql/data:/var/lib/mysql <span class="token punctuation">\\</span>
<span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span><span class="token number">123456</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-d</span> mysql:5.7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考： https://www.cnblogs.com/sablier/p/11605606.html https://hub.docker.com/_/mysql/</p>`,7),l=[c];function t(r,p){return a(),n("div",null,l)}const m=s(o,[["render",t],["__file","docker.html.vue"]]);export{m as default};
