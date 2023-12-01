import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as o}from"./app-MTzDpLgJ.js";const e={},t=o(`<h1 id="任务" tabindex="-1"><a class="header-anchor" href="#任务" aria-hidden="true">#</a> 任务</h1><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>定义命令行任务, 可以链接多个任务顺序执行, 比如编译,git等</p><ol><li><code>label</code>: <code>task</code>的名称</li><li><code>type</code>: 使用什么运行命令, <code>shell</code>(cmd, bash, powershell), <code>process</code>, 不太清楚两者的区别</li><li><code>command</code>: 要执行的命名</li><li><code>args</code>: 带变量的参数要分开写, 比如<code>[&quot;--fps&quot;,&quot;10&quot;]</code>, 不能写成<code>[&quot;--fps 10&quot;]</code></li><li><code>group</code>: <ul><li><code>kind</code>: <code>build</code>, 编译好的配置文件, 以直接使用<code>alt+b</code>来运行(首先用要编译, 可以使用<code>alt+b</code>来配置)</li><li><code>isDefault</code>: 默认运行</li></ul></li><li><code>presentation</code>: 信息展示的行驶 <ul><li><code>reveal</code>: <code>silent</code> 是否查看task的输出, <code>silent</code>不查看</li><li><code>revealProblems</code>: <code>onProblem</code></li><li><code>close</code>: <code>true</code> 自动关闭</li></ul></li></ol><h2 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h2><p>在根目录创建<code>task.json</code></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="快捷键配置" tabindex="-1"><a class="header-anchor" href="#快捷键配置" aria-hidden="true">#</a> 快捷键配置</h2><p><code>alt + b</code>自动运行<code>task</code></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>    <span class="token punctuation">{</span> 
        <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;alt+b&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;workbench.action.tasks.build&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">// &quot;when&quot;: &quot;taskCommandsRegistered&quot;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考: https://code.visualstudio.com/docs/editor/tasks https://stackoverflow.com/questions/47946868/how-to-get-rid-of-terminal-will-be-reused-by-tasks-press-any-key-to-close-it</p>`,11),p=[t];function c(l,i){return s(),a("div",null,p)}const d=n(e,[["render",c],["__file","任务.html.vue"]]);export{d as default};
