import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as s,e}from"./app-0JgdiRQ-.js";const t={},p=e(`<h1 id="pywin32gui" tabindex="-1"><a class="header-anchor" href="#pywin32gui" aria-hidden="true">#</a> pywin32gui</h1><p>gui(graph user interface)图形用户接口, 就是操作图形界面的API.</p><h2 id="获得窗口" tabindex="-1"><a class="header-anchor" href="#获得窗口" aria-hidden="true">#</a> 获得窗口</h2><h3 id="获得桌面上的窗口句柄" tabindex="-1"><a class="header-anchor" href="#获得桌面上的窗口句柄" aria-hidden="true">#</a> 获得桌面上的窗口句柄</h3><p><code>PyHANDLE = FindWindow(ClassName, WindowName )</code> 参数:</p><ul><li><code>ClassName</code>: 对应inspect中的<code>ClassName</code></li><li><code>WindowName</code>: 对应inspect中的<code>name</code> 返回: 窗体的句柄</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> win32gui
hld <span class="token operator">=</span> win32gui<span class="token punctuation">.</span>FindWindow<span class="token punctuation">(</span><span class="token boolean">None</span><span class="token punctuation">,</span><span class="token string">&quot;Adobe Acrobat&quot;</span><span class="token punctuation">)</span> <span class="token comment">#返回窗口标题为Adobe Acrobat的句柄</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="获得子窗口的句柄" tabindex="-1"><a class="header-anchor" href="#获得子窗口的句柄" aria-hidden="true">#</a> 获得子窗口的句柄</h3><p><code>PyHANDLE = FindWindowEx(Parent, ChildAfter , ClassName , WindowName )</code> 参数:</p><ul><li><code>Parent</code>: 父窗口的句柄, 如果是0, 则默认是桌面窗口</li><li><code>ChildAfter</code>: 子窗口的句柄, 在某个子窗口后搜索, 如果是0, 则搜索全部子窗口</li><li><code>ClassName </code>: 字符串, 对应inspect中的<code>ClassName</code></li><li><code>WindowName</code>: 字符串, 对应inspect中的<code>name</code></li></ul><h3 id="获得激活句柄窗口" tabindex="-1"><a class="header-anchor" href="#获得激活句柄窗口" aria-hidden="true">#</a> 获得激活句柄窗口</h3><p><code>handle = win32gui.GetForegroundWindow()</code></p><h3 id="通过坐标获取窗口句柄" tabindex="-1"><a class="header-anchor" href="#通过坐标获取窗口句柄" aria-hidden="true">#</a> 通过坐标获取窗口句柄</h3><p><code>handle = win32gui.WindowFromPoint(win32api.GetCursorPos()) # (259, 185)</code></p><h3 id="遍历子窗口" tabindex="-1"><a class="header-anchor" href="#遍历子窗口" aria-hidden="true">#</a> 遍历子窗口</h3><p><code>EnumChildWindows(hwnd, callback, extra)</code> 参数:</p><ul><li><code>hwnd</code>: 父窗口的句柄,(handle window)</li><li><code>callback</code> : 回调函数, 固定写法</li><li><code>extra</code> : 列表, 用来存放子窗口</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>hwndChildList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
win32gui<span class="token punctuation">.</span>EnumChildWindows<span class="token punctuation">(</span>parentHandle<span class="token punctuation">,</span> <span class="token keyword">lambda</span> hwnd<span class="token punctuation">,</span> param<span class="token punctuation">:</span> param<span class="token punctuation">.</span>append<span class="token punctuation">(</span>hwnd<span class="token punctuation">)</span><span class="token punctuation">,</span>  hwndChildList<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="等待窗口开启" tabindex="-1"><a class="header-anchor" href="#等待窗口开启" aria-hidden="true">#</a> 等待窗口开启</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
    win <span class="token operator">=</span> win32gui<span class="token punctuation">.</span>FindWindow<span class="token punctuation">(</span><span class="token string">&#39;Notepad&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>     <span class="token comment"># 来个循环，等待窗口的开启。</span>
    <span class="token keyword">if</span> win <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">:</span>                         <span class="token comment"># 如果开启win 就是这个窗口的句柄了。</span>
        win32api<span class="token punctuation">.</span>Sleep<span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;启动成功&#39;</span><span class="token punctuation">,</span>win<span class="token punctuation">)</span>
        <span class="token keyword">break</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="获得窗口属性" tabindex="-1"><a class="header-anchor" href="#获得窗口属性" aria-hidden="true">#</a> 获得窗口属性</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> win32gui
hwnd <span class="token operator">=</span> win32gui<span class="token punctuation">.</span>FindWindow<span class="token punctuation">(</span><span class="token boolean">None</span><span class="token punctuation">,</span><span class="token string">&quot;Adobe Acrobat&quot;</span><span class="token punctuation">)</span> <span class="token comment">#返回窗口标题为Adobe Acrobat的句柄</span>

title <span class="token operator">=</span> win32gui<span class="token punctuation">.</span>GetWindowText<span class="token punctuation">(</span>hwnd<span class="token punctuation">)</span>  <span class="token comment"># 对应inspect中的\`name\`</span>
clsname <span class="token operator">=</span> win32gui<span class="token punctuation">.</span>GetClassName<span class="token punctuation">(</span>hwnd<span class="token punctuation">)</span>  <span class="token comment"># 对应inspect中的\`ClassName\`</span>
left<span class="token punctuation">,</span> top<span class="token punctuation">,</span> right<span class="token punctuation">,</span> bottom <span class="token operator">=</span> win32gui<span class="token punctuation">.</span>GetWindowRect<span class="token punctuation">(</span>jbid<span class="token punctuation">)</span>  <span class="token comment"># 获取窗口的位置</span>
POS <span class="token operator">=</span>win32gui<span class="token punctuation">.</span>GetCursorPos<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 获取当前鼠标点击的窗口元素的坐标</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="操作窗口" tabindex="-1"><a class="header-anchor" href="#操作窗口" aria-hidden="true">#</a> 操作窗口</h2><h3 id="聚焦窗口" tabindex="-1"><a class="header-anchor" href="#聚焦窗口" aria-hidden="true">#</a> 聚焦窗口</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>win32gui<span class="token punctuation">.</span>SetForegroundWindow<span class="token punctuation">(</span>hwnd<span class="token punctuation">)</span> <span class="token comment"># 将窗口放在最前</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="窗口大小" tabindex="-1"><a class="header-anchor" href="#窗口大小" aria-hidden="true">#</a> 窗口大小</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> win32gui
<span class="token keyword">import</span> win32con

hwnd <span class="token operator">=</span> win32gui<span class="token punctuation">.</span>FindWindow<span class="token punctuation">(</span><span class="token boolean">None</span><span class="token punctuation">,</span><span class="token string">&quot;Adobe Acrobat&quot;</span><span class="token punctuation">)</span> <span class="token comment">#返回窗口标题为Adobe Acrobat的句柄</span>

win32gui<span class="token punctuation">.</span>ShowWindow<span class="token punctuation">(</span>hwnd<span class="token punctuation">,</span> win32con<span class="token punctuation">.</span>SW_FORCEMINIMIZE<span class="token punctuation">)</span> <span class="token comment"># 最小化, 即使拥有窗口的线程被挂起也会最小化。</span>
win32gui<span class="token punctuation">.</span>ShowWindow<span class="token punctuation">(</span>hwnd<span class="token punctuation">,</span> win32con<span class="token punctuation">.</span>SW_HIDE<span class="token punctuation">)</span> <span class="token comment"># 隐藏窗口，大小不变，激活状态不变</span>
win32gui<span class="token punctuation">.</span>ShowWindow<span class="token punctuation">(</span>hwnd<span class="token punctuation">,</span> win32con<span class="token punctuation">.</span>SW_MAXIMIZE<span class="token punctuation">)</span>  <span class="token comment"># 最大化窗口，显示状态不变，激活状态不变</span>
win32gui<span class="token punctuation">.</span>ShowWindow<span class="token punctuation">(</span>hwnd<span class="token punctuation">,</span> win32con<span class="token punctuation">.</span>SW_MINIMIZE<span class="token punctuation">)</span>  <span class="token comment"># 最小化指定的窗口并且激活在Z序中的下一个顶层窗口</span>
win32gui<span class="token punctuation">.</span>ShowWindow<span class="token punctuation">(</span>hwnd<span class="token punctuation">,</span> win32con<span class="token punctuation">.</span>SW_RESTORE<span class="token punctuation">)</span>  <span class="token comment"># 恢复窗口, 激活并显示窗口</span>
win32gui<span class="token punctuation">.</span>ShowWindow<span class="token punctuation">(</span>hwnd<span class="token punctuation">,</span> win32con<span class="token punctuation">.</span>SW_SHOWMAXIMIZED<span class="token punctuation">)</span>  <span class="token comment"># 显示并激活窗口，以最大化显示</span>
win32gui<span class="token punctuation">.</span>ShowWindow<span class="token punctuation">(</span>hwnd<span class="token punctuation">,</span> win32con<span class="token punctuation">.</span>SW_SHOWMINIMIZED<span class="token punctuation">)</span>  <span class="token comment"># 显示并激活窗口，以最小化显示</span>
win32gui<span class="token punctuation">.</span>ShowWindow<span class="token punctuation">(</span>hwnd<span class="token punctuation">,</span> win32con<span class="token punctuation">.</span>SW_SHOWMINNOACTIVE<span class="token punctuation">)</span>  <span class="token comment"># 显示窗口并最小化，激活窗口仍然维持激活状态</span>
win32gui<span class="token punctuation">.</span>ShowWindow<span class="token punctuation">(</span>hwnd<span class="token punctuation">,</span> win32con<span class="token punctuation">.</span>SW_SHOWNA<span class="token punctuation">)</span>  <span class="token comment"># 以窗口原来的状态显示窗口。激活窗口仍然维持激活状态</span>
win32gui<span class="token punctuation">.</span>ShowWindow<span class="token punctuation">(</span>hwnd<span class="token punctuation">,</span> win32con<span class="token punctuation">.</span>SW_SHOWNOACTIVATE<span class="token punctuation">)</span>  <span class="token comment"># 以窗口最近一次的大小和状态显示窗口。激活窗口仍然维持激活状态</span>
win32gui<span class="token punctuation">.</span>ShowWindow<span class="token punctuation">(</span>hwnd<span class="token punctuation">,</span> win32con<span class="token punctuation">.</span>SW_SHOWDEFAULT<span class="token punctuation">)</span>  <span class="token comment"># 默认尺寸?</span>
win32gui<span class="token punctuation">.</span>ShowWindow<span class="token punctuation">(</span>hwnd<span class="token punctuation">,</span> win32con<span class="token punctuation">.</span>SW_SHOWNORMAL<span class="token punctuation">)</span>  <span class="token comment"># 激活并显示一个窗口。如果窗口被最小化或最大化，系统将其恢复到原来的尺寸和大小。</span>
win32gui<span class="token punctuation">.</span>ShowWindow<span class="token punctuation">(</span>hwnd<span class="token punctuation">,</span> win32con<span class="token punctuation">.</span>SW_SHOW<span class="token punctuation">)</span>  <span class="token comment"># 	在窗口原来的位置以原来的尺寸激活和显示窗口</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="窗口位置" tabindex="-1"><a class="header-anchor" href="#窗口位置" aria-hidden="true">#</a> 窗口位置</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">## 移动某窗口hld到指定位置。</span>
<span class="token comment">## x,y指与屏幕左上角距离，nWidth, nHeight 指长和高</span>
<span class="token comment">## bRepaint ：是否重绘</span>
win32gui<span class="token punctuation">.</span>MoveWindow<span class="token punctuation">(</span>hld<span class="token punctuation">,</span> <span class="token builtin">int</span> X<span class="token punctuation">,</span> <span class="token builtin">int</span> Y<span class="token punctuation">,</span> <span class="token builtin">int</span> nWidth<span class="token punctuation">,</span> <span class="token builtin">int</span> nHeight<span class="token punctuation">,</span> BOOL bRepaint <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="关闭窗口" tabindex="-1"><a class="header-anchor" href="#关闭窗口" aria-hidden="true">#</a> 关闭窗口</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>win32gui<span class="token punctuation">.</span>SendMessage<span class="token punctuation">(</span>window_handle<span class="token punctuation">,</span> win32con<span class="token punctuation">.</span>WM_CLOSE<span class="token punctuation">)</span>  <span class="token comment"># 关闭窗口</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,31),o=[p];function i(c,u){return a(),s("div",null,o)}const r=n(t,[["render",i],["__file","pywin32gui.html.vue"]]);export{r as default};
