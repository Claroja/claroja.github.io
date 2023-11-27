import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as t,c as s,e as a}from"./app-O0xqlHfm.js";const e={},o=a(`<h1 id="terminal" tabindex="-1"><a class="header-anchor" href="#terminal" aria-hidden="true">#</a> terminal</h1><h2 id="两种形式" tabindex="-1"><a class="header-anchor" href="#两种形式" aria-hidden="true">#</a> 两种形式</h2><p>主要是使用的是命令行模式</p><ol><li>传统命令行模式: 在vscode的底端</li><li>编辑器命令行模式: 使用编辑器打开</li></ol><h2 id="快捷键" tabindex="-1"><a class="header-anchor" href="#快捷键" aria-hidden="true">#</a> 快捷键</h2><p>控制台英文名是<code>terminal</code>, 所以先导快捷键以<code>t</code>开头</p><table><thead><tr><th>快捷键</th><th>描述</th></tr></thead><tbody><tr><td><code>Ctrl + t Ctrl + t</code></td><td>开关控制台</td></tr><tr><td><code>Ctrl + t Enter</code></td><td>定焦到控制台</td></tr><tr><td><code>Ctrl + t s</code></td><td>分割并创建控制台</td></tr><tr><td><code>Ctrl + t l</code></td><td>移动到右边的控制台</td></tr><tr><td><code>Ctrl + t h</code></td><td>移动到左边的控制台</td></tr><tr><td><code>Ctrl + t k</code></td><td>杀死当前控制台</td></tr><tr><td><code>Ctrl + t c</code></td><td>清空控制台</td></tr><tr><td><code>alt + h</code></td><td>控制台光标左移</td></tr><tr><td><code>alt + l</code></td><td>控制台光标右移</td></tr><tr><td><code>alt + 6</code></td><td>控制台光标左移到端</td></tr><tr><td><code>alt + 4</code></td><td>控制台光标右移到端</td></tr><tr><td><code>alt + d</code></td><td>清空当前命令行内容</td></tr><tr><td><code>ctrl + f</code></td><td>在命令行中搜索</td></tr><tr><td><code>ctrl + r</code></td><td>搜索历史命令</td></tr></tbody></table><p>只有<code>Ctrl+h</code>和<code>Ctrl+l</code>需要先定位到控制台才能执行</p><h2 id="配置不同的终端" tabindex="-1"><a class="header-anchor" href="#配置不同的终端" aria-hidden="true">#</a> 配置不同的终端</h2><p>默认情况下<code>vscode</code>配置了三个终端<code>PowerShell</code>, <code>Command Prompt</code>(<code>CMD</code>), <code>GIT Bash</code>, 这里我们额外添加了<code>cmder</code>. 参数描述: <code>Key</code>: 每个字典的Key表示该终端的名称, 可以在<code>terminal.integrated.defaultProfile.windows</code>中根据名称设置默认的终端 <code>source</code>: 终端可执行路径, 如果配置了环境变量直接输如命令, 如果没有则需要填写完整路径 <code>aregs</code>: 终端启动时的参数 <code>overrideName</code>:布尔类型, 是否用当前运行的程序替换终端的静态名称 <code>env</code>: 终端启动时的环境变量, 可以通过<code>terminal.integrated.env.&lt;platform&gt;</code>来统一配置 <code>icon</code>: 终端的图标 <code>color</code>: icon的颜色</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;terminal.integrated.profiles.windows&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;PowerShell&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;source&quot;</span><span class="token operator">:</span> <span class="token string">&quot;PowerShell&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;terminal-powershell&quot;</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token property">&quot;Command Prompt&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
				<span class="token string">&quot;\${env:windir}\\\\Sysnative\\\\cmd.exe&quot;</span><span class="token punctuation">,</span>
				<span class="token string">&quot;\${env:windir}\\\\System32\\\\cmd.exe&quot;</span>
			<span class="token punctuation">]</span><span class="token punctuation">,</span>
			<span class="token property">&quot;args&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
			<span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;terminal-cmd&quot;</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token property">&quot;Git Bash&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;source&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Git Bash&quot;</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;cmder&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;C:\\\\WINDOWS\\\\System32\\\\cmd.exe&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;args&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;/K&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;D:\\\\cmder\\\\vendor\\\\bin\\\\vscode_init.cmd&quot;</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;terminal.integrated.defaultProfile.windows&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cmder&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="快捷键配置" tabindex="-1"><a class="header-anchor" href="#快捷键配置" aria-hidden="true">#</a> 快捷键配置</h2><ol><li><code>key</code>: 快捷键组合</li><li><code>command</code>: 调用的命令, <code>workbench.action.terminal.sendSequence</code>意思是向Terminal发送一系列的字符</li><li><code>args</code>: 发送的字符, 需要是<code>unicode ascii</code>常用的是<code>ansiEscapeCode</code></li><li><code>when</code>: 触发的时机 <ul><li><code>terminalFocus</code>聚焦到命令行窗口时才触发</li><li><code>terminalEditorFocus</code>聚焦到命令行编辑窗口时才触发</li></ul></li></ol><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;alt+d&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;workbench.action.terminal.sendSequence&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;args&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\\u007f\\u007f\\u007f\\u007f\\u007f\\u007f\\u007f\\u007f\\u007f\\u007f&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;when&quot;</span><span class="token operator">:</span><span class="token string">&quot;terminalFocus&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考: https://code.visualstudio.com/docs/terminal/basics</p>`,15),c=[o];function d(p,r){return t(),s("div",null,c)}const u=n(e,[["render",d],["__file","terminal.html.vue"]]);export{u as default};
