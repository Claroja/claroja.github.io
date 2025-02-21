import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as n,e}from"./app-jdLxCr9I.js";const t={},l=e(`<h1 id="install" tabindex="-1"><a class="header-anchor" href="#install" aria-hidden="true">#</a> install</h1><h2 id="docker" tabindex="-1"><a class="header-anchor" href="#docker" aria-hidden="true">#</a> docker</h2><p>1.下载镜像<code>docker pull mysql</code> 2.启动容器<code>docker run --name mysql -e MYSQL_ROOT_PASSWORD=123456 -p 3306:3306 -d mysql</code> 默认用户名是root，<code>-e MYSQL_ROOT_PASSWORD</code>来设置密码 3.进入容器<code>docker exec -it mysql /bin/bash</code> 4.链接mysql<code>mysql -uroot -p123456</code> 5.更改加密规则，以便远程连接 mysql8 之前的版本中加密规则是mysql_native_password,而在mysql8之后,加密规则是caching_sha2_password,所以把加密规则改回来。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>ALTER USER <span class="token string">&#39;root&#39;</span>@<span class="token string">&#39;%&#39;</span> IDENTIFIED BY <span class="token string">&#39;123456&#39;</span> PASSWORD EXPIRE NEVER<span class="token punctuation">;</span> <span class="token comment">#修改加密规则 ，&#39;password&#39;改成你的密码</span>
ALTER USER <span class="token string">&#39;root&#39;</span>@<span class="token string">&#39;%&#39;</span> IDENTIFIED WITH mysql_native_password BY <span class="token string">&#39;123456&#39;</span><span class="token punctuation">;</span> <span class="token comment">#更新一下用户的密码 ，&#39;password&#39;是你的密码</span>
FLUSH PRIVILEGES<span class="token punctuation">;</span> <span class="token comment">#刷新权限</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2><p>1.可以建立卷，将mysql的数据和日志同步到宿主</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>duso <span class="token function">docker</span> run <span class="token parameter variable">-p</span> <span class="token number">3306</span>:3306 <span class="token parameter variable">--name</span> mysql <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /usr/local/docker/mysql/conf:/etc/mysql <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /usr/local/docker/mysql/logs:/var/log/mysql <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /usr/local/docker/mysql/data:/var/lib/mysql <span class="token punctuation">\\</span>
<span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span><span class="token number">123456</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-d</span> mysql:5.7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考： https://www.cnblogs.com/sablier/p/11605606.html https://hub.docker.com/_/mysql/</p><h2 id="centos" tabindex="-1"><a class="header-anchor" href="#centos" aria-hidden="true">#</a> centos</h2><h2 id="清空之前的安装" tabindex="-1"><a class="header-anchor" href="#清空之前的安装" aria-hidden="true">#</a> 清空之前的安装</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>## 卸载包
rpm -qa | grep -i mysql
rpm -e –nodeps 包名
## 卸载文件
find / -name mysql
rm -rf /var/lib/mysql
## 卸载配置文件
/etc/my.cnf

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><p>1.添加yum源 <code>https://dev.mysql.com/downloads/repo/yum/</code> 选择合适的rmp包,用来添加源 <code>sudo yum localinstall mysql80-community-release-el7-3.noarch.rpm</code> 添加yum源 <code>yum repolist enabled | grep &quot;mysql.*-community.*&quot;</code> 查看是否添加成功</p><p>2.安装mysql服务端 <code>sudo yum install mysql-community-server</code></p><p>3.启动服务 如果报错,可能要重启,安装两次才成功 <code>systemctl start mysqld.service</code><code>systemctl stop mysqld.service</code> 关闭服务</p><p><code>service mysqld start</code><code>service mysqld stop</code></p><p>4.更改密码 <code>grep &#39;temporary password&#39; /var/log/mysqld.log</code> 通过日志,查看默认密码 <code>cat /root/.mysql_secret</code> 默认密码保存位置 <code>mysql -uroot -p</code> 登录 <code>ALTER USER &#39;root&#39;@&#39;localhost&#39; IDENTIFIED BY &#39;MyNewPass4!&#39;;</code>通过表,修改密码</p><p>默认的密码策略是Medium,最好不要更改.</p><table><thead><tr><th>Policy</th><th>Tests Performed</th></tr></thead><tbody><tr><td>0 or LOW</td><td>默认长度为8</td></tr><tr><td>1 or MEDIUM</td><td>Length; numeric, lowercase/uppercase, and special characters,8位数字,大小写,特殊字符</td></tr><tr><td>2 or STRONG</td><td>Length; numeric, lowercase/uppercase, and special characters; dictionary file,8位数字,大小写,特殊字符,字典文件</td></tr></tbody></table><p>5.开放公网连接</p><p><code>use mysql</code> # 切换mysql数据库 <code>update user set host=&#39;%&#39; where user =&#39;root&#39;;</code> # 允许外部访问 <code>FLUSH PRIVILEGES;</code>将更改加载的内存 <code>GRANT ALL PRIVILEGES ON *.* TO &#39;root&#39;@&#39;%&#39;WITH GRANT OPTION;</code> 授权</p><p>参考: https://dev.mysql.com/doc/refman/8.0/en/linux-installation-yum-repo.html#yum-repo-installing-mysql https://blog.csdn.net/qq_39564555/article/details/98473590 https://www.cnblogs.com/hrvyzou/p/11061521.html</p><h2 id="win" tabindex="-1"><a class="header-anchor" href="#win" aria-hidden="true">#</a> win</h2><ol><li>初始化 在MySQ文件夹根目录下创建my.ini文件,内容如下：</li></ol><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">mysqld</span><span class="token punctuation">]</span></span>
<span class="token comment">## 设置3306端口</span>
<span class="token key attr-name">port</span><span class="token punctuation">=</span><span class="token value attr-value">3306</span>
<span class="token comment">## 设置mysql的安装目录</span>
<span class="token key attr-name">basedir</span><span class="token punctuation">=</span><span class="token value attr-value">D:\\program\\mysql-8.0.16-winx64</span>
<span class="token comment">## 设置mysql数据库的数据的存放目录,一般都设置在根目录下</span>
<span class="token key attr-name">datadir</span><span class="token punctuation">=</span><span class="token value attr-value">D:\\program\\mysql-8.0.16-winx64\\Data</span>
<span class="token comment">## 允许最大连接数</span>
<span class="token key attr-name">max_connections</span><span class="token punctuation">=</span><span class="token value attr-value">200</span>
<span class="token comment">## 允许连接失败的次数。</span>
<span class="token key attr-name">max_connect_errors</span><span class="token punctuation">=</span><span class="token value attr-value">10</span>
<span class="token comment">## 服务端使用的字符集默认为utf8mb4</span>
<span class="token key attr-name">character-set-server</span><span class="token punctuation">=</span><span class="token value attr-value">utf8mb4</span>
<span class="token comment">## 创建新表时将使用的默认存储引擎</span>
<span class="token key attr-name">default-storage-engine</span><span class="token punctuation">=</span><span class="token value attr-value">INNODB</span>
<span class="token comment">## 默认使用“mysql_native_password”插件认证</span>
<span class="token comment">#mysql_native_password</span>
<span class="token key attr-name">default_authentication_plugin</span><span class="token punctuation">=</span><span class="token value attr-value">mysql_native_password</span>
<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">mysql</span><span class="token punctuation">]</span></span>
<span class="token comment">## 设置mysql客户端默认字符集</span>
<span class="token key attr-name">default-character-set</span><span class="token punctuation">=</span><span class="token value attr-value">utf8mb4</span>
<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">client</span><span class="token punctuation">]</span></span>
<span class="token comment">## 设置mysql客户端连接服务端时默认使用的端口</span>
<span class="token key attr-name">port</span><span class="token punctuation">=</span><span class="token value attr-value">3306</span>
<span class="token key attr-name">default-character-set</span><span class="token punctuation">=</span><span class="token value attr-value">utf8mb4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>注册服务 以管理员身份打开cmd,以win10为例 <img src="https://img-blog.csdnimg.cn/20190626094316781.png" alt="" loading="lazy"></li><li><code>mysqld --initialize --console</code> 初始化mysql,注意将密码记下</li><li><code>mysqld --install</code> 注册mysql服务</li><li><code>net start mysql</code>启动mysql服务</li></ol><h2 id="重置密码" tabindex="-1"><a class="header-anchor" href="#重置密码" aria-hidden="true">#</a> 重置密码</h2><p><code>mysql -uroot -p --port=3306</code><code>ALTER USER &#39;root&#39;@&#39;localhost&#39; IDENTIFIED WITH mysql_native_password BY &#39;newpassword&#39;;</code></p><p>参考文献: https://blog.csdn.net/qq_37350706/article/details/81707862 https://blog.csdn.net/lxlong89940101/article/details/80246675 https://www.baidu.com/s?wd=mysql+8+%E6%9B%B4%E6%94%B9%E5%AF%86%E7%A0%81&amp;tn=98012088_5_dg&amp;ch=11</p>`,29),c=[l];function o(i,d){return a(),n("div",null,c)}const m=s(t,[["render",o],["__file","install.html.vue"]]);export{m as default};
