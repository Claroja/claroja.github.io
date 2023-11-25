import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as s,d as e}from"./app-j3zK2x6_.js";const t="/assets/1-tAaWcS-0.png",i="/assets/2-oCpkLCcB.png",l="/assets/3-DB3rv1O9.png",c="/assets/4-4dncyYCt.png",o="/assets/5-4cKvPIPu.png",p="/assets/6-SvsOc530.png",r={},d=e('<h1 id="win" tabindex="-1"><a class="header-anchor" href="#win" aria-hidden="true">#</a> win</h1><h2 id="_1-下载mysql8" tabindex="-1"><a class="header-anchor" href="#_1-下载mysql8" aria-hidden="true">#</a> 1.下载MySQL8</h2><figure><img src="'+t+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+i+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_2-配置环境变量" tabindex="-1"><a class="header-anchor" href="#_2-配置环境变量" aria-hidden="true">#</a> 2.配置环境变量</h2><p>将压缩包解压，并配置环境变量</p><figure><img src="'+o+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_3-初始化" tabindex="-1"><a class="header-anchor" href="#_3-初始化" aria-hidden="true">#</a> 3.初始化</h2><p>在MySQ文件夹根目录下创建my.ini文件,内容如下：</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">mysqld</span><span class="token punctuation">]</span></span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-注册服务" tabindex="-1"><a class="header-anchor" href="#_4-注册服务" aria-hidden="true">#</a> 4.注册服务</h2><p>以管理员身份打开cmd,以win10为例 <img src="`+p+'" alt="" loading="lazy"></p><ol><li><code>mysqld --initialize --console</code> 初始化mysql,注意将密码记下</li><li><code>mysqld --install</code> 注册mysql服务</li><li><code>net start mysql</code>启动mysql服务</li></ol><h2 id="重置密码" tabindex="-1"><a class="header-anchor" href="#重置密码" aria-hidden="true">#</a> 重置密码</h2><p><code>mysql -uroot -p --port=3306</code><code>ALTER USER &#39;root&#39;@&#39;localhost&#39; IDENTIFIED WITH mysql_native_password BY &#39;newpassword&#39;;</code></p><p>参考文献: https://blog.csdn.net/qq_37350706/article/details/81707862 https://blog.csdn.net/lxlong89940101/article/details/80246675 https://www.baidu.com/s?wd=mysql+8+%E6%9B%B4%E6%94%B9%E5%AF%86%E7%A0%81&amp;tn=98012088_5_dg&amp;ch=11</p>',18),m=[d];function u(v,k){return n(),s("div",null,m)}const h=a(r,[["render",u],["__file","mysql_win.html.vue"]]);export{h as default};
