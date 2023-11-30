import{_ as c}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as a,o as i,c as u,d as t,w as l,b as n,a as s,e as o}from"./app-0JgdiRQ-.js";const r={},k=s("h1",{id:"path",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#path","aria-hidden":"true"},"#"),n(" path")],-1),d=s("h2",{id:"特别注意",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#特别注意","aria-hidden":"true"},"#"),n(" 特别注意")],-1),q=s("code",null,"pywin32",-1),v=o(`<p>另外, 如果使用vscode, 也需要将vscode设置为&quot;以管理员身份运行此程序&quot;, 否则无法打开管理员身份的python.exe</p><h2 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h2><p>直接拷贝<code>setting.json</code>配置文件</p><ul><li>全局默认的设置 <code>&gt;Preferences: Open Default Settings (JSON)</code>(优先级最低)</li><li>用户全局设置 <code>&gt;Preferences: Open Settings (JSON)</code>(优先级终) 文件保存在<code>C:\\Users\\USERNAME\\AppData\\Roaming\\Code\\User\\settings.json</code></li><li>Workerspace配置<code>&gt;Preferences: Open WorkSpace Settings (JSON)</code>(优先级最高) 文件保存在<code>PROJECT_HOME\\.vscode\\settings.json</code></li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;editor.fontSize&quot;</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
    <span class="token property">&quot;editor.fontWeight&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bold&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;editor.tabCompletion&quot;</span><span class="token operator">:</span> <span class="token string">&quot;on&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;editor.formatOnType&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;editor.suggestSelection&quot;</span><span class="token operator">:</span> <span class="token string">&quot;first&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;editor.suggest.showWords&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;editor.snippetSuggestions&quot;</span><span class="token operator">:</span> <span class="token string">&quot;top&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;editor.minimap.enabled&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;workbench.startupEditor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;newUntitledFile&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;debug.toolBarLocation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;docked&quot;</span><span class="token punctuation">,</span> <span class="token comment">//将debug控制条放在debug pane里</span>
    <span class="token property">&quot;security.workspace.trust.untrustedFiles&quot;</span><span class="token operator">:</span> <span class="token string">&quot;open&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;files.autoSave&quot;</span><span class="token operator">:</span> <span class="token string">&quot;onFocusChange&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;[markdown]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;editor.unicodeHighlight.ambiguousCharacters&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;editor.wordWrap&quot;</span><span class="token operator">:</span> <span class="token string">&quot;on&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;editor.quickSuggestions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;other&quot;</span><span class="token operator">:</span> <span class="token string">&quot;on&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;comments&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;strings&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;terminal.integrated.cursorBlinking&quot;</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;terminal.integrated.fontSize&quot;</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
    <span class="token property">&quot;terminal.integrated.defaultProfile.windows&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cmder&quot;</span><span class="token punctuation">,</span>
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
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="快捷键配置" tabindex="-1"><a class="header-anchor" href="#快捷键配置" aria-hidden="true">#</a> 快捷键配置</h2><p>直接拷贝<code>keybindings.json</code>中的文件</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ctrl+w&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;-workbench.action.closeActiveEditor&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ctrl+e&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;-workbench.action.quickOpen&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ctrl+e Enter&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;workbench.action.focusActiveEditorGroup&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ctrl+e l&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;workbench.action.nextEditorInGroup&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ctrl+e h&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;workbench.action.previousEditorInGroup&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ctrl+e s&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;workbench.action.splitEditor&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ctrl+e ctrl+h&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;workbench.action.focusLeftGroup&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ctrl+e ctrl+l&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;workbench.action.focusRightGroup&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ctrl+b&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;-workbench.action.toggleSidebarVisibility&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ctrl+b ctrl+b&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;workbench.action.toggleSidebarVisibility&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ctrl+b Enter&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;workbench.action.focusSideBar&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ctrl+b e&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;workbench.view.explorer&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;when&quot;</span><span class="token operator">:</span> <span class="token string">&quot;viewContainer.workbench.view.explorer.enabled&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ctrl+b g&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;workbench.view.scm&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;when&quot;</span><span class="token operator">:</span> <span class="token string">&quot;workbench.scm.active&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ctrl+b d&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;workbench.view.debug&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;when&quot;</span><span class="token operator">:</span> <span class="token string">&quot;viewContainer.workbench.view.debug.enabled&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ctrl+t&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;-workbench.action.showAllSymbols&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ctrl+t h&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;workbench.action.terminal.focusPreviousPane&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;when&quot;</span><span class="token operator">:</span> <span class="token string">&quot;terminalFocus &amp;&amp; terminalHasBeenCreated || terminalFocus &amp;&amp; terminalProcessSupported&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ctrl+t l&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;workbench.action.terminal.focusNextPane&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;when&quot;</span><span class="token operator">:</span> <span class="token string">&quot;terminalFocus &amp;&amp; terminalHasBeenCreated || terminalFocus &amp;&amp; terminalProcessSupported&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ctrl+t Enter&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;workbench.action.terminal.focus&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ctrl+t k&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;workbench.action.terminal.kill&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ctrl+t ctrl+t&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;workbench.action.terminal.toggleTerminal&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;when&quot;</span><span class="token operator">:</span> <span class="token string">&quot;terminal.active&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ctrl+t c&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;workbench.action.terminal.clear&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ctrl+t s&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;workbench.action.terminal.splitInActiveWorkspace&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> 
    <span class="token punctuation">{</span>
        <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ctrl+d&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;-editor.action.addSelectionToNextFindMatch&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;when&quot;</span><span class="token operator">:</span> <span class="token string">&quot;editorFocus&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ctrl+d ctrl+b&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;editor.debug.action.conditionalBreakpoint&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ctrl+d b&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;editor.debug.action.toggleBreakpoint&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;when&quot;</span><span class="token operator">:</span> <span class="token string">&quot;debuggersAvailable &amp;&amp; editorTextFocus&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ctrl+d d&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;workbench.debug.viewlet.action.disableAllBreakpoints&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ctrl+d r&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;workbench.debug.viewlet.action.removeAllBreakpoints&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ctrl+d w&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;editor.debug.action.selectionToWatch&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ctrl+d n&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;editor.debug.action.goToNextBreakpoint&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ctrl+d p&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;editor.debug.action.goToPreviousBreakpoint&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ctrl+d t&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;workbench.debug.action.focusRepl&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ctrl+d e&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;editor.debug.action.selectionToRepl&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    
    <span class="token punctuation">{</span>
        <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ctrl+d a&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;workbench.debug.viewlet.action.enableAllBreakpoints&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;f6&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;workbench.action.debug.restart&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;when&quot;</span><span class="token operator">:</span> <span class="token string">&quot;inDebugMode&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;f6&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;-workbench.action.debug.pause&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;when&quot;</span><span class="token operator">:</span> <span class="token string">&quot;debugState == &#39;running&#39;&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;f7&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;workbench.action.debug.stepOver&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;when&quot;</span><span class="token operator">:</span> <span class="token string">&quot;debugState == &#39;stopped&#39;&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;f8&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;workbench.action.debug.stepInto&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;when&quot;</span><span class="token operator">:</span> <span class="token string">&quot;debugState != &#39;inactive&#39;&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;shift+f8&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;workbench.action.debug.stepOut&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;when&quot;</span><span class="token operator">:</span> <span class="token string">&quot;debugState == &#39;stopped&#39;&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;alt+h&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;-gitlens.showQuickFileHistory&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;when&quot;</span><span class="token operator">:</span> <span class="token string">&quot;!gitlens:disabled &amp;&amp; config.gitlens.keymap == &#39;alternate&#39;&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;alt+h&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;-testing.toggleTestingPeekHistory&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;when&quot;</span><span class="token operator">:</span> <span class="token string">&quot;testing.isPeekVisible&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;alt+h&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cursorLeft&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;when&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textInputFocus&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;alt+h&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;workbench.action.terminal.sendSequence&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;args&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\\u001b[D&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;when&quot;</span><span class="token operator">:</span><span class="token string">&quot;terminalFocus&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token punctuation">{</span>
        <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;shift+alt+h&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cursorLeftSelect&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;when&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textInputFocus&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;alt+l&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cursorRight&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;when&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textInputFocus&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;alt+l&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;workbench.action.terminal.sendSequence&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;args&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\\u001b[C&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;when&quot;</span><span class="token operator">:</span><span class="token string">&quot;terminalFocus&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;shift+alt+l&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cursorRightSelect&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;when&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textInputFocus&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;alt+k&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cursorUp&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;when&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textInputFocus&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;alt+k&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;workbench.action.terminal.sendSequence&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;args&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\\u001b[A&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;when&quot;</span><span class="token operator">:</span><span class="token string">&quot;terminalFocus&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;alt+k&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;selectNextSuggestion&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;when&quot;</span><span class="token operator">:</span> <span class="token string">&quot;suggestWidgetMultipleSuggestions &amp;&amp; suggestWidgetVisible &amp;&amp; textInputFocus&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;alt+k&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;workbench.action.quickOpenSelectPrevious&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;when&quot;</span><span class="token operator">:</span><span class="token string">&quot;inQuickOpen&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;shift+alt+k&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cursorUpSelect&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;when&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textInputFocus&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;alt+j&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cursorDown&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;when&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textInputFocus&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;alt+j&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;workbench.action.terminal.sendSequence&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;args&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\\u001b[B&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;when&quot;</span><span class="token operator">:</span><span class="token string">&quot;terminalFocus&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;alt+j&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;workbench.action.quickOpenSelectNext&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;when&quot;</span><span class="token operator">:</span><span class="token string">&quot;inQuickOpen&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;alt+j&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;selectNextSuggestion&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;when&quot;</span><span class="token operator">:</span> <span class="token string">&quot;suggestWidgetMultipleSuggestions &amp;&amp; suggestWidgetVisible &amp;&amp; textInputFocus&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;shift+alt+j&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cursorDownSelect&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;when&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textInputFocus&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;alt+4&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cursorLineEnd&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;alt+4&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;workbench.action.terminal.sendSequence&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;args&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\\u001b[1;5C&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;when&quot;</span><span class="token operator">:</span><span class="token string">&quot;terminalFocus&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;alt+6&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cursorLineStart&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;alt+6&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;workbench.action.terminal.sendSequence&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;args&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\\u001b[1;5D&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;when&quot;</span><span class="token operator">:</span><span class="token string">&quot;terminalFocus&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ctrl+shift+alt+j&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cursorColumnSelectDown&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;when&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textInputFocus&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ctrl+shift+alt+k&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cursorColumnSelectUp&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;when&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textInputFocus&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;shift+alt+4&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cursorLineEndSelect&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;shift+alt+6&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cursorLineStartSelect&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ctrl+r&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;-workbench.action.openRecent&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;alt+d&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;python.debugInTerminal&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;shift+alt+e&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;python.execSelectionInTerminal&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;when&quot;</span><span class="token operator">:</span> <span class="token string">&quot;editorTextFocus &amp;&amp; !findInputFocussed &amp;&amp; !jupyter.ownsSelection &amp;&amp; !notebookEditorFocused &amp;&amp; !replaceInputFocussed &amp;&amp; editorLangId == &#39;python&#39;&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;shift+enter&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;-python.execSelectionInTerminal&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;when&quot;</span><span class="token operator">:</span> <span class="token string">&quot;editorTextFocus &amp;&amp; !findInputFocussed &amp;&amp; !jupyter.ownsSelection &amp;&amp; !notebookEditorFocused &amp;&amp; !replaceInputFocussed &amp;&amp; editorLangId == &#39;python&#39;&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;alt+e&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;python.execInTerminal&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ctrl+q&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;-workbench.action.quickOpenView&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ctrl+q&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;workbench.action.closeActiveEditor&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ctrl+f4&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;-workbench.action.closeActiveEditor&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;alt+d&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;workbench.action.terminal.sendSequence&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;args&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\\u007f\\u007f\\u007f\\u007f\\u007f\\u007f\\u007f\\u007f\\u007f\\u007f&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;when&quot;</span><span class="token operator">:</span><span class="token string">&quot;terminalFocus&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="extension" tabindex="-1"><a class="header-anchor" href="#extension" aria-hidden="true">#</a> extension</h2>`,9),m={href:"https://www.panyanbin.com/article/47d1c4a4.html",target:"_blank",rel:"noopener noreferrer"},b=o(`<h3 id="导出extensions" tabindex="-1"><a class="header-anchor" href="#导出extensions" aria-hidden="true">#</a> 导出extensions</h3><p>shell(bash,cmder): <code>code --list-extensions | xargs -L 1 echo code --install-extension &gt; extensions.sh</code> powershell: <code>code --list-extensions | % {&quot;code --install-extension $_&quot; } &gt; extensions.ps1</code></p><h3 id="导入extensions" tabindex="-1"><a class="header-anchor" href="#导入extensions" aria-hidden="true">#</a> 导入extensions</h3><p>shell(bash,cmder): <code>sh extensions.sh</code> powershell: <code>extensions.ps1</code></p><div class="language-s line-numbers-mode" data-ext="s"><pre class="language-s"><code>code --install-extension christian-kohler.path-intellisense
code --install-extension DavidAnson.vscode-markdownlint
code --install-extension donjayamanne.python-environment-manager
code --install-extension eamodio.gitlens
code --install-extension mhutchie.git-graph
code --install-extension ms-python.python
code --install-extension ms-python.vscode-pylance
code --install-extension ms-toolsai.jupyter
code --install-extension ms-toolsai.jupyter-keymap
code --install-extension ms-toolsai.jupyter-renderers
code --install-extension ms-toolsai.vscode-jupyter-cell-tags
code --install-extension ms-toolsai.vscode-jupyter-slideshow
code --install-extension ms-vscode-remote.remote-ssh
code --install-extension ms-vscode-remote.remote-ssh-edit
code --install-extension mtxr.sqltools
code --install-extension mtxr.sqltools-driver-mysql
code --install-extension oderwat.indent-rainbow
code --install-extension streetsidesoftware.code-spell-checker
code --install-extension vscode-icons-team.vscode-icons
code --install-extension xyz.local-history
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function g(y,h){const p=a("font"),e=a("ExternalLinkIcon");return i(),u("div",null,[k,d,t(p,{style:{background:"hotpink"}},{default:l(()=>[n('注意设置在"属性"中设置"以管理员身份运行此程序"')]),_:1}),n("否则有些程序, 如"),q,n("某些功能, 如鼠标点击时间, 将无效."),v,s("p",null,[s("a",m,[n("VSCode与npm同名插件区别"),t(e)]),n(" 以eslint为例, vscode安装的eslint插件是只是做可视化的展示, 展示的内容扔依赖于npm安装的eslint包. 也既是说, 如果vscode不安装eslint插件, 那么eslint的检查结果, 只能使用npm安装的eslint包,通过命令行的形式输出.")]),b])}const f=c(r,[["render",g],["__file","vscode.html.vue"]]);export{f as default};
