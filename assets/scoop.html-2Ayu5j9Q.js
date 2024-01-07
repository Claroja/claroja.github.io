import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as p,c as u,a as n,b as s,d as i,e}from"./app-SnI5rGHA.js";const c={},l=n("h1",{id:"pywin32",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#pywin32","aria-hidden":"true"},"#"),s(" pywin32")],-1),r=n("p",null,[s("默认安装在"),n("code",null,"C:\\Users\\<YOUR USERNAME>\\scoop"),s(", 自定义安装路径需要在安装前设置环境变量"),n("code",null,"$env:SCOOP='D:\\Applications\\Scoop'")],-1),k={href:"https://scoop.sh/",target:"_blank",rel:"noopener noreferrer"},d=e(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Set-ExecutionPolicy RemoteSigned <span class="token parameter variable">-Scope</span> CurrentUser <span class="token comment"># Optional: Needed to run a remote script the first time</span>
irm get.scoop.sh <span class="token operator">|</span> iex
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="文件夹说明" tabindex="-1"><a class="header-anchor" href="#文件夹说明" aria-hidden="true">#</a> 文件夹说明</h2><table><thead><tr><th>路径</th><th>描述</th></tr></thead><tbody><tr><td>apps</td><td>所有通过scoop安装的软件都在里面。</td></tr><tr><td>buckets</td><td>管理软件的仓库，用于记录哪些软件可以安装、更新等信息，默认添加main仓库，可手动添加其他仓库或自建仓库</td></tr><tr><td>cache</td><td>软件下载后安装包暂存目录。</td></tr><tr><td>persit</td><td>用于储存一些用户数据，不会随软件更新而替换。</td></tr><tr><td>shims</td><td>和系统的<code>PATH</code>建立链接, 不需要我们自己再添加环境变量</td></tr></tbody></table><h2 id="配置代理或源" tabindex="-1"><a class="header-anchor" href="#配置代理或源" aria-hidden="true">#</a> 配置代理或源</h2><ol><li>设置Scoop代理。在命令行中输入（PowerShell或者CMD中都行）<code>scoop config proxy 127.0.0.1:7890</code>让scoop网络连接走代理，后面的ip地址和端口根据自己的代理设置。</li><li>使用Gitee镜像源。可能备份更新得不是那么勤快，以及实际下载软件包同样会有网络问题，所以不推荐。在命令行中输入<code>scoop config SCOOP_REPO https://gitee.com/squallliu/scoop</code>修改仓库源的地址。</li></ol><p>或者更直接点，找到Scoop配置文件，路径C:\\Users\\username.config\\scoop\\config.json，然后直接修改里面的配置</p><h2 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h2><p>Scoop的操作命令基本结构是<code>scoop + 动词 + 对象</code></p><table><thead><tr><th>命令</th><th>描述</th></tr></thead><tbody><tr><td>help</td><td>查询帮助</td></tr><tr><td>install</td><td>安装软件</td></tr><tr><td>uninstall</td><td>卸载软件</td></tr><tr><td>export</td><td>导出文件列表</td></tr><tr><td>import</td><td>导入文件俩表并安装</td></tr><tr><td>update</td><td>更新软件</td></tr><tr><td>hold</td><td>锁定软件阻止其更新。</td></tr><tr><td>info</td><td>查询软件简要信息。</td></tr></tbody></table><h2 id="仓库" tabindex="-1"><a class="header-anchor" href="#仓库" aria-hidden="true">#</a> 仓库</h2><p>默认安装Scoop后仅有main仓库，其中主要是面向程序员的工具，对于一般用户而言并不是那么实用。好在Scoop本身考虑到了这一点，添加了面向一般用户的软件仓库extras，其中收录大量好用的小软件，足够日常的使用。 Scoop添加软件仓库的命令是<code>scoop bucket add bucketname (+ url可选)</code>。如添加extras的命令是<code>scoop bucket add extras</code></p><h2 id="加速下载" tabindex="-1"><a class="header-anchor" href="#加速下载" aria-hidden="true">#</a> 加速下载</h2><p>在使用scoop安装aria2后，scoop会自动调用aria2进行多线程下载以加速下载, 下载完成后，记得打开16线程（aria2编译版本默认最高线程为16，需要更高的请自行编译）：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>scoop <span class="token function">install</span> aria2
scoop config aria2-max-connection-per-server <span class="token number">16</span>
scoop config aria2-split <span class="token number">16</span>
scoop config aria2-min-split-size 1M
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="自己使用的软件" tabindex="-1"><a class="header-anchor" href="#自己使用的软件" aria-hidden="true">#</a> 自己使用的软件</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token punctuation">{</span>
    <span class="token string">&quot;buckets&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token string">&quot;Name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;extras&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Source&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;https://github.com/ScoopInstaller/Extras&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Updated&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                <span class="token string">&quot;value&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;\\/Date(1699233369000)\\/&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;DisplayHint&quot;</span><span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                <span class="token string">&quot;DateTime&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;2023年11月6日 9:16:09&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Manifests&quot;</span><span class="token punctuation">:</span> <span class="token number">1888</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token string">&quot;Name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;main&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Source&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;https://github.com/ScoopInstaller/Main&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Updated&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                <span class="token string">&quot;value&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;\\/Date(1699215809000)\\/&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;DisplayHint&quot;</span><span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                <span class="token string">&quot;DateTime&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;2023年11月6日 4:23:29&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Manifests&quot;</span><span class="token punctuation">:</span> <span class="token number">1262</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string">&quot;apps&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token string">&quot;Info&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Source&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;main&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;7zip&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Version&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;22.01&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Updated&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;\\/Date(1666314387894)\\/&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token string">&quot;Info&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Source&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;extras&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;aria-ng-gui&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Version&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;3.1.2&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Updated&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;\\/Date(1677648569832)\\/&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token string">&quot;Info&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Source&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;main&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;aria2&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Version&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;1.36.0-1&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Updated&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;\\/Date(1666258791999)\\/&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token string">&quot;Info&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Source&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;extras&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;captura&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Version&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;8.0.0&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Updated&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;\\/Date(1666765774245)\\/&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token string">&quot;Info&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Source&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;extras&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;carnac&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Version&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;2.3.13&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Updated&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;\\/Date(1666573329681)\\/&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token string">&quot;Info&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Source&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;extras&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;ccleaner&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Version&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;6.16.10662&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Updated&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;\\/Date(1699238593968)\\/&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token string">&quot;Info&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Source&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;main&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;cmder-full&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Version&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;1.3.20&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Updated&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;\\/Date(1666344639698)\\/&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token string">&quot;Info&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Source&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;main&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;dark&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Version&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;3.11.2&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Updated&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;\\/Date(1666343805871)\\/&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token string">&quot;Info&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Install failed&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Source&quot;</span><span class="token punctuation">:</span> null<span class="token punctuation">,</span>
            <span class="token string">&quot;Name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;dbeaver&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Version&quot;</span><span class="token punctuation">:</span> null<span class="token punctuation">,</span>
            <span class="token string">&quot;Updated&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;\\/Date(1695200967721)\\/&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token string">&quot;Info&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Source&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;extras&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;dismplusplus&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Version&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;10.1.1002.1B&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Updated&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;\\/Date(1699238720205)\\/&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token string">&quot;Info&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Source&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;extras&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;draw.io&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Version&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;20.3.0&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Updated&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;\\/Date(1666343383950)\\/&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token string">&quot;Info&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Source&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;extras&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;everything&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Version&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;1.4.1.1022&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Updated&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;\\/Date(1666344705774)\\/&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token string">&quot;Info&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Install failed&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Source&quot;</span><span class="token punctuation">:</span> null<span class="token punctuation">,</span>
            <span class="token string">&quot;Name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Fadetop&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Version&quot;</span><span class="token punctuation">:</span> null<span class="token punctuation">,</span>
            <span class="token string">&quot;Updated&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;\\/Date(1666768338030)\\/&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token string">&quot;Info&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Source&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;main&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;ffmpeg&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Version&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;5.1.2&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Updated&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;\\/Date(1666314445969)\\/&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token string">&quot;Info&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Source&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;extras&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;geekuninstaller&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Version&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;1.5.1.162&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Updated&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;\\/Date(1666573157671)\\/&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token string">&quot;Info&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Source&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;main&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;git&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Version&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;2.38.1.windows.1&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Updated&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;\\/Date(1666342612702)\\/&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token string">&quot;Info&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Source&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;extras&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;googlechrome&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Version&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;106.0.5249.119&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Updated&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;\\/Date(1666341027131)\\/&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token string">&quot;Info&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Source&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;main&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;innounp&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Version&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;0.50&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Updated&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;\\/Date(1672636494144)\\/&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token string">&quot;Info&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Source&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;main&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;latex&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Version&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;22.10&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Updated&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;\\/Date(1666339945005)\\/&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token string">&quot;Info&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Source&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;extras&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;mobaxterm&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Version&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;23.0&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Updated&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;\\/Date(1691052250047)\\/&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token string">&quot;Info&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Source&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;extras&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;motrix&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Version&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;1.6.11&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Updated&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;\\/Date(1666765101335)\\/&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token string">&quot;Info&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Source&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;main&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;nodejs&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Version&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;19.0.0&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Updated&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;\\/Date(1667200733620)\\/&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token string">&quot;Info&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Install failed&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Source&quot;</span><span class="token punctuation">:</span> null<span class="token punctuation">,</span>
            <span class="token string">&quot;Name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;pageedit&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Version&quot;</span><span class="token punctuation">:</span> null<span class="token punctuation">,</span>
            <span class="token string">&quot;Updated&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;\\/Date(1672637045335)\\/&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token string">&quot;Info&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Install failed&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Source&quot;</span><span class="token punctuation">:</span> null<span class="token punctuation">,</span>
            <span class="token string">&quot;Name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;persepolis&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Version&quot;</span><span class="token punctuation">:</span> null<span class="token punctuation">,</span>
            <span class="token string">&quot;Updated&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;\\/Date(1691052946123)\\/&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token string">&quot;Info&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Source&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;extras&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;potplayer&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Version&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;220831&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Updated&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;\\/Date(1666343659606)\\/&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token string">&quot;Info&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Source&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;extras&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;powertoys&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Version&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;0.65.0&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Updated&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;\\/Date(1670926038888)\\/&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token string">&quot;Info&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Source&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;main&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;python&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Version&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;3.10.8&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Updated&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;\\/Date(1666343890454)\\/&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token string">&quot;Info&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Source&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;extras&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;q-dir&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Version&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;11.13&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Updated&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;\\/Date(1666344241172)\\/&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token string">&quot;Info&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Install failed&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Source&quot;</span><span class="token punctuation">:</span> null<span class="token punctuation">,</span>
            <span class="token string">&quot;Name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;sigil&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Version&quot;</span><span class="token punctuation">:</span> null<span class="token punctuation">,</span>
            <span class="token string">&quot;Updated&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;\\/Date(1672636960584)\\/&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token string">&quot;Info&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Source&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;extras&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;snipaste&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Version&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;1.16.2&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Updated&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;\\/Date(1666344803394)\\/&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token string">&quot;Info&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Source&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;extras&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;spacesniffer&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Version&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;1.3.0.2&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Updated&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;\\/Date(1699239014557)\\/&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token string">&quot;Info&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Source&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;extras&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;vscode&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Version&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;1.72.2&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Updated&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;\\/Date(1666344976205)\\/&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token string">&quot;Info&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Source&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;extras&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;wireshark&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Version&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;4.0.1&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Updated&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;\\/Date(1667280816786)\\/&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考: https://scoop.sh/ https://github.com/ScoopInstaller/Install#readme https://zhuanlan.zhihu.com/p/463284082 https://www.cnblogs.com/Edge-coordinates/p/15130184.html</p>`,17);function q(v,g){const a=o("ExternalLinkIcon");return p(),u("div",null,[l,r,n("p",null,[s("在"),n("a",k,[s("官网"),i(a)]),s("查看安装命令")]),d])}const h=t(c,[["render",q],["__file","scoop.html.vue"]]);export{h as default};
