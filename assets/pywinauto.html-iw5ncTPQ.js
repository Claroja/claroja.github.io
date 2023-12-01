import{_ as c}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o as l,c as d,d as s,w as p,b as n,a,e as t}from"./app-MTzDpLgJ.js";const u="/assets/1-K8ey9iJe.png",r="/assets/2-D6rJ-xE9.png",m={},k=t(`<h1 id="pywinauto" tabindex="-1"><a class="header-anchor" href="#pywinauto" aria-hidden="true">#</a> pywinauto</h1><p>操作控件需要以下几个步骤： 第一步 实例化要操作的进程：得到的app是Application对象</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> pywinauto<span class="token punctuation">.</span>application <span class="token keyword">import</span> Application
app <span class="token operator">=</span> Application<span class="token punctuation">(</span>backend<span class="token operator">=</span><span class="token string">&quot;uia&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>connect<span class="token punctuation">(</span>process<span class="token operator">=</span><span class="token number">13296</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>第二步 选择窗口 ：<code>app.top_window()</code>或<code>app.window()</code> 得到的窗口是<code>WindowSpecification</code>对象</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>mainWindow <span class="token operator">=</span> app<span class="token punctuation">.</span>window<span class="token punctuation">(</span>class_name<span class="token operator">=</span><span class="token string">&quot;WeChatMainWndForPC&quot;</span><span class="token punctuation">)</span> <span class="token comment"># 用于窗口的查找</span>
mainWindow<span class="token punctuation">.</span>draw_outline<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>第三步：基于WindowSpecification对象使用其方法再往下查找，定位到具体的控件</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>chat <span class="token operator">=</span> mainWindow<span class="token punctuation">.</span>child_window<span class="token punctuation">(</span>title<span class="token operator">=</span><span class="token string">&quot;聊天&quot;</span><span class="token punctuation">)</span>
chat<span class="token punctuation">.</span>draw_outline<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>第四步：使用控件的方法属性执行我们需要的操作</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>chat<span class="token punctuation">.</span>click_input<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="第一步-创建application对象" tabindex="-1"><a class="header-anchor" href="#第一步-创建application对象" aria-hidden="true">#</a> 第一步, 创建Application对象</h2><h3 id="backend" tabindex="-1"><a class="header-anchor" href="#backend" aria-hidden="true">#</a> backend</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> pywinauto<span class="token punctuation">.</span>application <span class="token keyword">import</span> Application
app <span class="token operator">=</span> Application<span class="token punctuation">(</span>backend<span class="token operator">=</span><span class="token string">&#39;win32&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Windows 有两种访问技术： <code>Win32 API（backend=&quot;win32&quot;）</code>：默认的后端访问技术，适用于 MFC、VB6、简单的 WinForms 控件及大多数老旧的应用。 <code>MS UI Automation（backend=&quot;uia&quot;）</code>：适用于 WinForms、WPF、应用商店、Qt5、浏览器等。</p>`,13),v=t(`<h3 id="打开新程序并连接-start" tabindex="-1"><a class="header-anchor" href="#打开新程序并连接-start" aria-hidden="true">#</a> 打开新程序并连接: start()</h3><p><code>start()</code>方法可启动目标应用，并连接到其进程</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> pywinauto<span class="token punctuation">.</span>application <span class="token keyword">import</span> Application
app <span class="token operator">=</span> Application<span class="token punctuation">(</span>backend<span class="token operator">=</span><span class="token string">&#39;win32&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token string">&#39;notepad.exe&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>start(self, cmd_line, timeout=app_start_timeout)</code></p><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td><code>cmd_line</code></td><td><code>r&quot;c:\\path\\to\\your\\application --arguments&quot;</code></td></tr><tr><td><code>timeout</code></td><td>超时时间</td></tr></tbody></table><h3 id="连接已启动的窗口-connect" tabindex="-1"><a class="header-anchor" href="#连接已启动的窗口-connect" aria-hidden="true">#</a> 连接已启动的窗口: connect()</h3><p>connect() 方法则用于连接到已经启动的进程，可以向该方法传入应用的进程 ID（可在任务管理器中查看 PID）、应用的窗口句柄、可执行文件的路径，或者是各种窗口参数的任意组合。例如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">## 传入 PID</span>
app <span class="token operator">=</span> Application<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>connect<span class="token punctuation">(</span>process<span class="token operator">=</span><span class="token number">2341</span><span class="token punctuation">)</span>
<span class="token comment">## 传入句柄</span>
app <span class="token operator">=</span> Application<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>connect<span class="token punctuation">(</span>handle<span class="token operator">=</span><span class="token number">0x010f0c</span><span class="token punctuation">)</span>
<span class="token comment">## 传入可执行文件路径</span>
app <span class="token operator">=</span> Application<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>connect<span class="token punctuation">(</span>path<span class="token operator">=</span><span class="token string">r&quot;c:\\windows\\system32\\notepad.exe&quot;</span><span class="token punctuation">)</span>
<span class="token comment">## 参数组合，这些参数被传递给 pywinauto.findwindows.find_elements() 函数</span>
app <span class="token operator">=</span> Application<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>connect<span class="token punctuation">(</span>title_re<span class="token operator">=</span><span class="token string">&quot;.*Notepad&quot;</span><span class="token punctuation">,</span> class_name<span class="token operator">=</span><span class="token string">&quot;Notepad&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),h=a("code",null,"connect()",-1),b={id:"application对象-参考官网",tabindex:"-1"},_=a("a",{class:"header-anchor",href:"#application对象-参考官网","aria-hidden":"true"},"#",-1),g={href:"https://pywinauto.readthedocs.io/en/latest/code/pywinauto.application.html#pywinauto.application.Application",target:"_blank",rel:"noopener noreferrer"},w=t(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>app<span class="token punctuation">.</span>top_window<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">## 返回应用程序当前顶部窗口，是WindowSpecification对象，可以继续使用对象的方法往下继续查找控件</span>
<span class="token comment">## eg:如：app.top_window().child_window(title=&#39;地址和搜索栏&#39;, control_type=&#39;Edit&#39;)</span>
app<span class="token punctuation">.</span>window<span class="token punctuation">(</span><span class="token operator">**</span>kwargs<span class="token punctuation">)</span>
<span class="token comment">## 根据筛选条件，返回一个窗口， 是WindowSpecification对象，可以继续适用对象的方法往下继续查找控件</span>
<span class="token comment">## eg: 微信主界面 app.window(class_name=&#39;WeChatMainWndForPC&#39;)</span>
app<span class="token punctuation">.</span>windows<span class="token punctuation">(</span><span class="token operator">**</span>kwargs<span class="token punctuation">)</span>
<span class="token comment">## 根据筛选条件返回一个窗口列表，无条件默认全部，列表项为wrapped对象，可以使用wrapped对象的方法，注意不是WindowSpecification对象</span>
<span class="token comment">## eg：[&lt;uiawrapper.UIAWrapper - &#39;李渝的早报 - Google Chrome&#39;, Pane, -2064264099699444098&gt;]</span>
app<span class="token punctuation">.</span>kill<span class="token punctuation">(</span>soft<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span> <span class="token comment"># 强制关闭</span>
app<span class="token punctuation">.</span>cpu_usage<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># 返回指定秒数期间的CPU使用率百分比</span>
app<span class="token punctuation">.</span>wait_cpu_usage_lower<span class="token punctuation">(</span>threshold<span class="token operator">=</span><span class="token number">2.5</span><span class="token punctuation">,</span> timeout<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span> usage_interval<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span> <span class="token comment"># 等待进程CPU使用率百分比小于指定的阈值threshold</span>
app<span class="token punctuation">.</span>is64bit<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># 如果操作的进程是64-bit，返回True</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第二步-获得application窗口" tabindex="-1"><a class="header-anchor" href="#第二步-获得application窗口" aria-hidden="true">#</a> 第二步, 获得application窗口,</h2><ol><li>通过<code>app.top_window()</code>直接获取最顶层的窗口</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>winSp <span class="token operator">=</span> app<span class="token punctuation">.</span>top_window<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>通过<code>window()</code>获得主窗口</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>winSp <span class="token operator">=</span> app<span class="token punctuation">.</span>window<span class="token punctuation">(</span>class_name<span class="token operator">=</span><span class="token string">&#39;WeChatMainWndForPC&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="第三步-获得指定的窗口" tabindex="-1"><a class="header-anchor" href="#第三步-获得指定的窗口" aria-hidden="true">#</a> 第三步, 获得指定的窗口</h2><p>使用<code>child_window()</code>搜索子控件:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>chat <span class="token operator">=</span> mainWindow<span class="token punctuation">.</span>child_window<span class="token punctuation">(</span>title<span class="token operator">=</span><span class="token string">&quot;聊天&quot;</span><span class="token punctuation">)</span>
chat<span class="token punctuation">.</span>draw_outline<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>参数</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>child_window<span class="token punctuation">(</span>title<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>control_type<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>class_name<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span> <span class="token comment"># 可以不管层级的找后代中某个符合条件的元素，最常用</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>title=None</td><td>控件的标题文字，对应inspect中Name字段, 另外title_re=None, # 正则匹配文字</td></tr><tr><td>control_type=None</td><td>控件类型，inspect界面LocalizedControlType字段的英文名</td></tr><tr><td>class_name=None</td><td>类型名, 对应inspect中ClassName, 另外class_name_re=None, # 正则匹配类名</td></tr></tbody></table><p>一般使用<code>title</code>即可, 不行再一次辅助<code>control_type</code>和<code>class_name</code>来定位</p>`,13),y={start:"2"},q=a("p",null,"返回 WindowSpecification对象,",-1),f={href:"https://pywinauto.readthedocs.io/en/latest/code/pywinauto.application.html#pywinauto.application.WindowSpecification",target:"_blank",rel:"noopener noreferrer"},x=t("<table><thead><tr><th>方法</th><th>描述</th></tr></thead><tbody><tr><td><code>child_window(**criteria)</code></td><td>子窗口搜索</td></tr><tr><td><code>dump_tree(depth=None, filename=None)</code></td><td>打印子窗口的结构</td></tr><tr><td><code>exists(timeout=None, retry_interval=None)</code></td><td>查看窗口是否存在</td></tr><tr><td><code>print_control_identifiers(depth=None, filename=None)</code></td><td>打印子窗口</td></tr><tr><td><code>print_ctrl_ids(depth=None, filename=None)</code></td><td></td></tr><tr><td><code>wait(wait_for, timeout=None, retry_interval=None)</code></td><td>等待</td></tr><tr><td><code>wait_not(wait_for_not, timeout=None, retry_interval=None)</code></td><td></td></tr><tr><td><code>wrapper_object()</code></td><td>可以使用<code>HwndWrapper object</code>的方法</td></tr></tbody></table>",1),N={start:"2"},B={href:"https://pywinauto.readthedocs.io/en/latest/code/code.html#controls-reference",target:"_blank",rel:"noopener noreferrer"},S=t(`<h2 id="第四步-对控件进行操作" tabindex="-1"><a class="header-anchor" href="#第四步-对控件进行操作" aria-hidden="true">#</a> 第四步, 对控件进行操作</h2><h3 id="鼠标操作" tabindex="-1"><a class="header-anchor" href="#鼠标操作" aria-hidden="true">#</a> 鼠标操作</h3><ol><li>点击操作 使用<code>click_input()</code>方法, 来操作 <code>click_input(button=&#39;left&#39;, coords=(None, None), button_down=True, button_up=True, double=False, wheel_dist=0, use_log=True, pressed=&#39;&#39;, absolute=False, key_down=True, key_up=True)</code></li></ol><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>button</td><td>‘left’, ‘right’, ‘middle’(Default: ‘left’)</td></tr><tr><td>coords</td><td>点击的位置(Default: the center of the control)</td></tr><tr><td>double</td><td>是否双击 (Default: False)</td></tr><tr><td>wheel_dist</td><td>滚轮(default: 0)</td></tr></tbody></table><ol start="2"><li>拖拽操作 <ul><li>指定位置单击<code>press_mouse_input(coords = (None, None))</code></li><li>指定位置释放<code>release_mouse_input(coords = (None, None))</code></li><li>移动到指定位置<code>move_mouse_input(coords=(0, 0))</code></li><li>将ctrl拖动到dst,是press-move-release操作集合|<code>drag_mouse_input(dst=(0, 0))</code></li></ul></li><li>滚动</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>ctrl<span class="token punctuation">.</span>scroll<span class="token punctuation">(</span>direction<span class="token punctuation">,</span> amount<span class="token punctuation">,</span> count<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token punctuation">)</span> <span class="token comment"># 滚动</span>
    <span class="token comment"># direction ：&quot;up&quot;, &quot;down&quot;, &quot;left&quot;, &quot;right&quot;</span>
    <span class="token comment"># amount：&quot;line&quot; or &quot;page&quot;</span>
    <span class="token comment"># count：int 滚动次数</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文本输入" tabindex="-1"><a class="header-anchor" href="#文本输入" aria-hidden="true">#</a> 文本输入</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>ctrl<span class="token punctuation">.</span>type_keys<span class="token punctuation">(</span>keys<span class="token punctuation">,</span> pause <span class="token operator">=</span> <span class="token boolean">None</span><span class="token punctuation">,</span> with_spaces <span class="token operator">=</span> <span class="token boolean">False</span><span class="token punctuation">,</span><span class="token punctuation">)</span>
    <span class="token comment"># keys：要输入的文字内容</span>
    <span class="token comment"># pause：每输入一个字符后等待时间，默认0.01就行</span>
    <span class="token comment"># with_spaces：是否保留keys中的所有空格，默认去除0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="下拉菜单" tabindex="-1"><a class="header-anchor" href="#下拉菜单" aria-hidden="true">#</a> 下拉菜单</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> pywinauto<span class="token punctuation">.</span>application <span class="token keyword">import</span> Application
app <span class="token operator">=</span> Application<span class="token punctuation">(</span>backend<span class="token operator">=</span><span class="token string">&quot;uia&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token string">&quot;notepad.exe&quot;</span><span class="token punctuation">)</span>
mainwin <span class="token operator">=</span> app<span class="token punctuation">[</span><span class="token string">&#39;无标题 - 记事本&#39;</span><span class="token punctuation">]</span>
mainwin<span class="token punctuation">.</span>menu_select<span class="token punctuation">(</span><span class="token string">&#39;帮助 -&gt; 关于记事本&#39;</span><span class="token punctuation">)</span> <span class="token comment"># &quot;帮助&quot; 菜单中选择了&quot;关于记事本&quot;，打开了&quot;关于记事本&quot;对话框</span>
app<span class="token punctuation">[</span><span class="token string">&#39;Dialog&#39;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">&#39;确定&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 关闭&quot;关于记事本&quot;对话框</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),W=t(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">while</span> app<span class="token punctuation">[</span><span class="token string">&#39;关于记事本&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span>visible
   app<span class="token punctuation">[</span><span class="token string">&#39;关于记事本&#39;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">&#39;确定&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>测试中发现，同样用代码来打开和关闭 “编辑 | 替换” 对话框，则不存在这个问题。</p><h3 id="最大化最小化" tabindex="-1"><a class="header-anchor" href="#最大化最小化" aria-hidden="true">#</a> 最大化最小化</h3><p>只有空间是窗口模式的时候可以使用</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>dlg<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># 关闭界面</span>
dlg<span class="token punctuation">.</span>minimize<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># 最小化界面</span>
dlg<span class="token punctuation">.</span>maximize<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># 最大化界面</span>
dlg<span class="token punctuation">.</span>restore<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># 将窗口恢复为正常大小，比如最小化的让他正常显示在桌面</span>
dlg<span class="token punctuation">.</span>get_show_state<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># 正常0，最大化1，最小化2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="等待与确认" tabindex="-1"><a class="header-anchor" href="#等待与确认" aria-hidden="true">#</a> 等待与确认</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>exists<span class="token punctuation">(</span>timeout<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span> retry_interval<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span> <span class="token comment"># 判断是否存在</span>
<span class="token comment">#timeout：等待时间，一般默认5s</span>
<span class="token comment">#retry_interval：timeout内重试时间</span>
wait<span class="token punctuation">(</span>wait_for<span class="token punctuation">,</span> timeout<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span> retry_interval<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span> <span class="token comment"># 等待窗口处于特定状态</span>
wait_not<span class="token punctuation">(</span>wait_for_not<span class="token punctuation">,</span> timeout<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span> retry_interval<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span> <span class="token comment"># 等待窗口不处于特定状态，即等待消失</span>
<span class="token comment">## wait_for/wait_for_not:</span>
<span class="token comment">## * &#39;exists&#39; means that the window is a valid handle</span>
<span class="token comment">## * &#39;visible&#39; means that the window is not hidden</span>
<span class="token comment">## * &#39;enabled&#39; means that the window is not disabled</span>
<span class="token comment">## * &#39;ready&#39; means that the window is visible and enabled</span>
<span class="token comment">## * &#39;active&#39; means that the window is active</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="控件信息获取" tabindex="-1"><a class="header-anchor" href="#控件信息获取" aria-hidden="true">#</a> 控件信息获取</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>window_text<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># 控件的标题文字，对应inspect中Name字段, 等价ctrl.element_info.name</span>
class_name<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># 控件的类名，对应inspect中ClassName字段，有些控件没有类名, 等价ctrl.element_info.class_name</span>
element_info<span class="token punctuation">.</span>control_type <span class="token comment"># 控件类型，inspect界面LocalizedControlType字段的英文名</span>
legacy_properties<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;Value&#39;</span><span class="token punctuation">)</span> <span class="token comment"># 获得编辑器中已经输入的内容</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="控件位置获取" tabindex="-1"><a class="header-anchor" href="#控件位置获取" aria-hidden="true">#</a> 控件位置获取</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>ret <span class="token operator">=</span> ctrl<span class="token punctuation">.</span>rectangle<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># 控件上下左右坐标，(L430, T177, R1490, B941)，可.输出上下左右</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="控件辅助" tabindex="-1"><a class="header-anchor" href="#控件辅助" aria-hidden="true">#</a> 控件辅助</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>ctrl<span class="token punctuation">.</span>draw_outline<span class="token punctuation">(</span>colour<span class="token operator">=</span><span class="token string">&#39;green&#39;</span><span class="token punctuation">)</span> <span class="token comment"># 空间外围画框，便于查看，支持&#39;red&#39;, &#39;green&#39;, &#39;blue&#39;</span>
ctrl<span class="token punctuation">.</span>print_control_identifiers<span class="token punctuation">(</span>depth<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span> filename<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span> <span class="token comment"># 打印其包含的元素，详见打印元素</span>
ctrl<span class="token punctuation">.</span>capture_as_image<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># 返回控件的 PIL image对象，可继续使用其方法如下：ctrl.capture_as_image().save(img_path)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="print-control-identifiers" tabindex="-1"><a class="header-anchor" href="#print-control-identifiers" aria-hidden="true">#</a> print_control_identifiers</h4><p><code>print_control_identifiers()</code>来查看控件的identifier.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> pywinauto<span class="token punctuation">.</span>application <span class="token keyword">import</span> Application
app <span class="token operator">=</span> Application<span class="token punctuation">(</span>backend<span class="token operator">=</span><span class="token string">&quot;uia&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token string">&quot;notepad.exe&quot;</span><span class="token punctuation">)</span>
mainwin <span class="token operator">=</span> app<span class="token punctuation">[</span><span class="token string">&#39;无标题 - 记事本&#39;</span><span class="token punctuation">]</span>
mainwin<span class="token punctuation">.</span>print_control_identifiers<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
Dialog - &#39;无标题 - 记事本&#39;    (L2050, T110, R3490, B869)    
[&#39;Dialog&#39;, &#39;无标题 - 记事本&#39;, &#39;无标题 - 记事本Dialog&#39;]      
child_window(title=&quot;无标题 - 记事本&quot;, control_type=&quot;Window&quot;)
|
| Edit - &#39;文本编辑器&#39;    (L2058, T161, R3482, B839)
| [&#39;Edit&#39;]
| child_window(title=&quot;文本编辑器&quot;, auto_id=&quot;15&quot;, control_type=&quot;Edit&quot;)
|    |
|    | ScrollBar - &#39;垂直滚动条&#39;    (L3465, T161, R3482, B822)
|    | [&#39;ScrollBar&#39;, &#39;垂直滚动条ScrollBar&#39;, &#39;垂直滚动条&#39;, &#39;ScrollBar0&#39;, &#39;ScrollBar1&#39;]
|    | child_window(title=&quot;垂直滚动条&quot;, auto_id=&quot;NonClientVerticalScrollBar&quot;, control_type=&quot;ScrollBar&quot;)
|    |    |
|    |    | Button - &#39;上一行&#39;    (L3465, T161, R3482, B178)
|    |    | [&#39;上一行&#39;, &#39;上一行Button&#39;, &#39;Button&#39;, &#39;Button0&#39;, &#39;Button1&#39;]
|    |    | child_window(title=&quot;上一行&quot;, auto_id=&quot;UpButton&quot;, control_type=&quot;Button&quot;)
|    |    |
|    |    | Button - &#39;下一行&#39;    (L3465, T805, R3482, B822)
|    |    | [&#39;下一行&#39;, &#39;Button2&#39;, &#39;下一行Button&#39;]
|    |    | child_window(title=&quot;下一行&quot;, auto_id=&quot;DownButton&quot;, control_type=&quot;Button&quot;)
|    |
|    | ScrollBar - &#39;水平滚动条&#39;    (L2058, T822, R3465, B839)
|    | [&#39;ScrollBar2&#39;, &#39;水平滚动条&#39;, &#39;水平滚动条ScrollBar&#39;]
|    | child_window(title=&quot;水平滚动条&quot;, auto_id=&quot;NonClientHorizontalScrollBar&quot;, control_type=&quot;ScrollBar&quot;)       
|    |    |
|    |    | Button - &#39;左移一列&#39;    (L2058, T822, R2075, B839)
|    |    | [&#39;左移一列&#39;, &#39;左移一列Button&#39;, &#39;Button3&#39;]
|    |    | child_window(title=&quot;左移一列&quot;, auto_id=&quot;UpButton&quot;, control_type=&quot;Button&quot;)
|    |    |
|    |    | Button - &#39;右移一列&#39;    (L3448, T822, R3465, B839)
|    |    | [&#39;右移一列Button&#39;, &#39;Button4&#39;, &#39;右移一列&#39;]
|    |    | child_window(title=&quot;右移一列&quot;, auto_id=&quot;DownButton&quot;, control_type=&quot;Button&quot;)
|    |
|    | Thumb - &#39;&#39;    (L3465, T822, R3482, B839)
|    | [&#39;Thumb&#39;]
...
&quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="inspect" tabindex="-1"><a class="header-anchor" href="#inspect" aria-hidden="true">#</a> inspect</h4><p><code>C:\\Program Files (x86)\\Windows Kits\\10\\bin\\10.0.19041.0\\x64</code></p><figure><img src="'+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>参考: https://www.cnblogs.com/xp1315458571/p/13892205.html https://pywinauto.readthedocs.io/en/latest/getting_started.html https://dc1y.github.io/pywinauto-auto-your-gui/ https://www.cnblogs.com/baihuitestsoftware/articles/9317988.html https://www.cnblogs.com/xp1315458571/p/13892205.html https://www.cnblogs.com/Simple-Small/p/12035446.html</p>',21);function A(T,C){const e=i("font"),o=i("ExternalLinkIcon");return l(),d("div",null,[k,s(e,{style:{background:"hotpink"}},{default:p(()=>[n("注意")]),_:1}),n(":pywinauto 不支持 Java AWT/Swing、GTK + 及 Tkinter 等。Linux 上的 AT SPI 及 Apple Accessibility API 未来有支持计划。"),v,s(e,{style:{background:"hotpink"}},{default:p(()=>[n("注意")]),_:1}),n(":使用"),h,n("方法时，通常需要编写一个循环来等待应用完全完成启动。"),a("h3",b,[_,n(" application对象, "),a("a",g,[n("参考官网"),s(o)])]),w,a("ol",y,[a("li",null,[q,a("ol",null,[a("li",null,[n("WindowSpecification对象本身的一些方法, "),a("a",f,[n("参考官网"),s(o)])])]),x,a("ol",N,[a("li",null,[n("包装方法, "),a("a",B,[n("参考官网"),s(o)])])])])]),S,s(e,{style:{background:"hotpink"}},{default:p(()=>[n("注意")]),_:1}),n(": 若上面代码未能关闭 “关于记事本” 对话框，可再重复运行一次。若频繁出现这种现象，甚至需要数量不定的多次单击 “确定” 按钮，或许可考虑使用一个循环来解决问题.如下:"),W])}const D=c(m,[["render",A],["__file","pywinauto.html.vue"]]);export{D as default};
