import{_ as o}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o as p,c,b as s,d as a,e,a as l}from"./app-7knaTE3M.js";const i={},r=l(`<h1 id="sftp" tabindex="-1"><a class="header-anchor" href="#sftp" aria-hidden="true">#</a> sftp</h1><h2 id="ignore" tabindex="-1"><a class="header-anchor" href="#ignore" aria-hidden="true">#</a> ignore</h2><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">&quot;ignore&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;/.vscode&quot;</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>&quot;/.vscode&quot;</code>: 忽略根目录下的<code>.vscode</code>目录, 且目录本身不会同步 <code>&quot;/.vscode&quot;</code>: 忽略根目录下的<code>.vscode</code>目录下的文件, 但目录本身会同步, 即同步空空目录</p><h2 id="syncoption" tabindex="-1"><a class="header-anchor" href="#syncoption" aria-hidden="true">#</a> syncOption</h2><p><code>syncOption</code>设置同步参数, 默认为空<code>{}</code></p><ul><li><p><code>delete</code>：服务器较本地多余的文件将被删除.</p><blockquote><p>风险是可能会误删文件(可以通过本地<code>.history</code>找回), 优点是在本地移动文件到一个文件夹, 服务器会同步, 否则会在新文件夹创建新文件, 造成冗余</p></blockquote></li><li><p><code>skipCreate</code>：服务器没有的文件夹和文件会是否跳过.</p></li><li><p><code>ignoreExisting</code>：服务器已经有的文件是否跳过</p></li><li><p><code>update</code>：只有本地文件有更新才上传到服务器</p></li></ul><h2 id="watcher" tabindex="-1"><a class="header-anchor" href="#watcher" aria-hidden="true">#</a> watcher</h2><ul><li><code>files</code>：需要监听的文件，因为要监听dist文件夹的所有文件，所以可设为<code>**/*.*</code>。另外，<code>uploadOnSave</code>一定要设为false</li><li><code>autoUpload</code>：当然true</li><li><code>autoDelete</code>：当然false</li></ul><h2 id="实践" tabindex="-1"><a class="header-anchor" href="#实践" aria-hidden="true">#</a> 实践</h2><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;blog&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;host&quot;</span><span class="token operator">:</span> <span class="token string">&quot;121.37.191.55&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;sftp&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">22</span><span class="token punctuation">,</span>
    <span class="token property">&quot;username&quot;</span><span class="token operator">:</span> <span class="token string">&quot;root&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;privateKeyPath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;~/.ssh/id_rsa&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;remotePath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/root/blog&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;uploadOnSave&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;useTempFile&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;openSsh&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;syncOption&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;delete&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;skipCreate&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;ignoreExisting&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;update&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ignore&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;/.history&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;/.git&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;/node_modules/&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;/src/.vuepress/.cache&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;/src/.vuepress/.temp&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;/src/.vuepress/dist&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;/package-lock.json&quot;</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>`,12),u={href:"https://marketplace.visualstudio.com/items?itemName=liximomo.sftp",target:"_blank",rel:"noopener noreferrer"},d={href:"https://github.com/liximomo/vscode-sftp/wiki/config",target:"_blank",rel:"noopener noreferrer"};function k(v,m){const n=t("ExternalLinkIcon");return p(),c("div",null,[r,s("ul",null,[s("li",null,[s("a",u,[a("sftp sync extension for VS Code"),e(n)])]),s("li",null,[s("a",d,[a("vscode-sftp"),e(n)])])])])}const b=o(i,[["render",k],["__file","sftp.html.vue"]]);export{b as default};
