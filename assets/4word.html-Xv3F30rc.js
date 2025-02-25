import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as e}from"./app-7knaTE3M.js";const o="/assets/word样式修改-Qio7s_6P.png",t={},i=e(`<h1 id="pandoc模板" tabindex="-1"><a class="header-anchor" href="#pandoc模板" aria-hidden="true">#</a> pandoc模板</h1><h2 id="最佳实践" tabindex="-1"><a class="header-anchor" href="#最佳实践" aria-hidden="true">#</a> 最佳实践</h2><ol><li><p>在<code>vscode</code>根目录的<code>.vscode</code>文件夹下, 创建<code>tasks.json</code></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token comment">// See https://go.microsoft.com/fwlink/?LinkId=733558</span>
    <span class="token comment">// for the documentation about the tasks.json format</span>
    <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2.0.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;tasks&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pandoc&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;shell&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pandoc.exe&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;args&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token string">&quot;\${file}&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;-o&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;\${fileDirname}\\\\\${fileBasenameNoExtension}.docx&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;-d&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;option.yml&quot;</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>在<code>C:\\Users\\UserName\\AppData\\Roaming\\pandoc\\defaults</code>路径下下创建<code>option.yml</code>配置文件</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">reference-doc</span><span class="token punctuation">:</span> custom.docx  <span class="token comment"># 指定模板的文件名</span>
<span class="token key atrule">resource-path</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;C:\\Users\\UserName\\AppData\\Roaming\\pandoc&#39;</span><span class="token punctuation">]</span> <span class="token comment"># 指定reference-doc(模板文件)的路径</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>在<code>C:\\Users\\UserName\\AppData\\Roaming\\pandoc</code>路径下下创建<code>custom.docx</code>模板文件</p></li></ol><h2 id="模板下载地址" tabindex="-1"><a class="header-anchor" href="#模板下载地址" aria-hidden="true">#</a> 模板下载地址</h2><p>https://github.com/Achuan-2/pandoc_word_template/tree/main?tab=readme-ov-file使用这个模板</p><h2 id="官方模版样式制作" tabindex="-1"><a class="header-anchor" href="#官方模版样式制作" aria-hidden="true">#</a> 官方模版样式制作</h2><ol><li><p>随便写一个<code>.md</code>文档</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">#</span> 这个是标题</span>

<span class="token title important"><span class="token punctuation">##</span> 第1段</span>

<span class="token title important"><span class="token punctuation">###</span> 第1.1.段</span>

<span class="token title important"><span class="token punctuation">###</span> 第1.2.段</span>

看<span class="token code-snippet code keyword">\`resource code\`</span>

看<span class="token bold"><span class="token punctuation">**</span><span class="token content">粗体</span><span class="token punctuation">**</span></span>

看==高亮==
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>生成word文档, 获得<code>.docx</code>文件, 并修改相应的样式</p><figure><img src="`+o+`" alt="word" tabindex="0" loading="lazy"><figcaption>word</figcaption></figure></li><li><p>将该文档放在<code>C:\\Users\\name\\AppData\\Roaming\\pandoc</code>中, 并在<code>option.yml</code>中配置:</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">reference-doc</span><span class="token punctuation">:</span> custom.docx
<span class="token key atrule">resource-path</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;C:\\Users\\Xinyu\\AppData\\Roaming\\pandoc&#39;</span><span class="token punctuation">]</span> <span class="token comment"># 指定reference-doc(模板文件)的路径</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>执行命令<code>pandoc test.md -o test.docx -d option.yml</code></p></li></ol><p>✨注意:</p><ol><li>设置了首行缩进后, 发现表格里的正文内容也变成了首行缩进, 通过样式很难修改, 可以直接在word里的<code>布局</code>中, 反向调节缩进.</li></ol><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2><ul><li>https://blog.csdn.net/fengdu78/article/details/103907960</li><li>https://ld246.com/article/1702570646974</li></ul>`,11),c=[i];function p(l,d){return s(),a("div",null,c)}const m=n(t,[["render",p],["__file","4word.html.vue"]]);export{m as default};
