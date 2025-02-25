import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as o}from"./app-nD1Z-e8V.js";const t={},e=o(`<h1 id="任务" tabindex="-1"><a class="header-anchor" href="#任务" aria-hidden="true">#</a> 任务</h1><h2 id="最佳实践" tabindex="-1"><a class="header-anchor" href="#最佳实践" aria-hidden="true">#</a> 最佳实践</h2><p>使用task, 简化pandoc命令操作:</p><ol><li>简化前, 每次md转docx都需要手动输入命令, 复制文件名</li><li>简化后, 只需选中md文件, 使用快捷键alt+shift+r执行如下的task即可</li></ol><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>快捷键配置:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;shift+alt+r&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;workbench.action.tasks.runTask&quot;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>✨Markdown Preview Enhanced的pandoc插件很难用, 需要在文章front-matte里指定输出的文章类型, 不够优雅</p><h2 id="用途说明" tabindex="-1"><a class="header-anchor" href="#用途说明" aria-hidden="true">#</a> 用途说明</h2><p>允许你定义任务，比如编译、构建、测试、运行相关脚本等。</p><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>定义命令行任务, 可以链接多个任务顺序执行, 比如编译, git等</p><ol><li><code>label</code>: <code>task</code>的名称</li><li><code>type</code>: 使用什么运行命令, <code>shell</code>(cmd, bash, powershell), <code>process</code>, 不太清楚两者的区别</li><li><code>command</code>: 命令的路径, 比如git.exe</li><li><code>args</code>: ✨带变量的参数要分开写, 比如<code>[&quot;--fps&quot;,&quot;10&quot;]</code>, 不能写成<code>[&quot;--fps 10&quot;]</code></li><li><code>group</code>: <ul><li><code>kind</code>: <code>build</code>, 编译好的配置文件, 以直接使用<code>alt+b</code>来运行(首先用要编译, 可以使用<code>alt+b</code>来配置)</li><li><code>isDefault</code>: 默认运行</li></ul></li><li><code>presentation</code>: 信息展示的行驶 <ul><li><code>reveal</code>: <code>silent</code> 是否查看task的输出, <code>silent</code>不查看</li><li><code>revealProblems</code>: <code>onProblem</code></li><li><code>close</code>: <code>true</code> 自动关闭</li></ul></li></ol><h2 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h2><p>在根目录创建<code>task.json</code></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token comment">// See https://go.microsoft.com/fwlink/?LinkId=733558</span>
    <span class="token comment">// for the documentation about the tasks.json format</span>
    <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2.0.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;tasks&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;manim&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;shell&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;manim&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;args&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token string">&quot;\${file}&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;-ql&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;--format&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;gif&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;--fps&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;5&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;CodeFromString&quot;</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;problemMatcher&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;group&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;kind&quot;</span><span class="token operator">:</span> <span class="token string">&quot;build&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;isDefault&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;presentation&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token comment">// &quot;reveal&quot;: &quot;silent&quot;,</span>
                <span class="token property">&quot;revealProblems&quot;</span><span class="token operator">:</span> <span class="token string">&quot;onProblem&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;close&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考: https://code.visualstudio.com/docs/editor/tasks https://stackoverflow.com/questions/47946868/how-to-get-rid-of-terminal-will-be-reused-by-tasks-press-any-key-to-close-it</p>`,17),p=[e];function i(l,c){return s(),a("div",null,p)}const d=n(t,[["render",i],["__file","任务task.html.vue"]]);export{d as default};
