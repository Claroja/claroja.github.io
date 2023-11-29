import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as p,o,c as i,a as n,b as s,d,e as a}from"./app-M6UUlHgF.js";const c={},l=a(`<h1 id="pywin32sendmessage" tabindex="-1"><a class="header-anchor" href="#pywin32sendmessage" aria-hidden="true">#</a> pywin32sendMessage</h1><p>windows消息的处理机制:</p><ol><li>当<code>鼠标、键盘事件</code>被触发后，相应的鼠标或键盘<code>驱动程序</code>就会把这些事件转换成相应的消息，然后输送到<code>系统</code>消息队列</li><li>Windows系统则在适当的时机，从<code>系统消息队列</code>中取出一个消息，送往相应窗口线程的队列</li><li><code>线程</code>看到自己的消息队列中有消息，就从队列中取出来，通过操作系统发送到合适的窗口过程去处理</li></ol><p><code>win32gui.SendMessage int = SendMessage(hwnd, message, wparam, lparam)</code> 参数:</p><ul><li>hWnd：指定要接收消息的窗口的句柄。如果此参数为HWND_BROADCAST，则消息将被发送到系统中所有顶层窗口，包括无效或不可见的非自身拥有的窗口、被覆盖的窗口和弹出式窗口，但消息不被发送到子窗口。32位的窗口句柄。窗口可以是任何类型的屏幕对象，因为Win32能够维护大多数可视对象的句柄(窗口、对话框、按钮、编辑框等)</li><li>Msg：指定被发送的消息。这些常量可以是Windows单元中预定义的常量，也可以是自定义的常量。 消息详情点这里</li><li>wParam：指定附加的消息特定信息。通常是一个与消息有关的常量值，也可能是窗口或控件的句柄。</li><li>IParam：指定附加的消息特定信息。通常是一个指向内存中数据的指针。</li></ul><p>注意: SendMessage PostMessage GetCursorPos等win32api与win32gui均包含的函数，用法也相同。</p><p>例子:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> win32gui         <span class="token comment"># 先来小小的体验一下</span>
<span class="token keyword">import</span> win32con
win <span class="token operator">=</span> win32gui<span class="token punctuation">.</span>FindWindow<span class="token punctuation">(</span><span class="token string">&#39;Notepad&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;新建文本文档.txt - 记事本&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># 找到这个文件，里面的参数都是再spy++ 里面找的</span>
tid <span class="token operator">=</span> win32gui<span class="token punctuation">.</span>FindWindowEx<span class="token punctuation">(</span>win<span class="token punctuation">,</span><span class="token boolean">None</span><span class="token punctuation">,</span><span class="token string">&#39;Edit&#39;</span><span class="token punctuation">,</span><span class="token boolean">None</span><span class="token punctuation">)</span>  <span class="token comment"># 编辑框</span>
win32gui<span class="token punctuation">.</span>SendMessage<span class="token punctuation">(</span>tid<span class="token punctuation">,</span>win32con<span class="token punctuation">.</span>WM_SETTEXT<span class="token punctuation">,</span><span class="token boolean">None</span><span class="token punctuation">,</span><span class="token string">&#39;呐呐呐&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># 写入文字</span>
win32gui<span class="token punctuation">.</span>PostMessage<span class="token punctuation">(</span>tid<span class="token punctuation">,</span>win32con<span class="token punctuation">.</span>WM_KEYDOWN<span class="token punctuation">,</span>win32con<span class="token punctuation">.</span>VK_RETURN<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span>  <span class="token comment"># 插入一个回车</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="消息分类" tabindex="-1"><a class="header-anchor" href="#消息分类" aria-hidden="true">#</a> 消息分类</h2><table><thead><tr><th>前缀</th><th>代表英文</th><th>解释</th></tr></thead><tbody><tr><td>WM_</td><td>Window Message</td><td>窗口消息，一般用在SendMessage，PostMessage这样的消息函数中</td></tr><tr><td>SM_</td><td>Static Message</td><td>静态标签消息</td></tr><tr><td>SS_</td><td>Static Style</td><td>静态标签风格</td></tr><tr><td>BM_</td><td>Button Message</td><td>按钮消息</td></tr><tr><td>BS_</td><td>Button Style</td><td>按钮风格</td></tr><tr><td>BN_</td><td>Button Notify</td><td>按钮通知</td></tr><tr><td>EM_</td><td>Edit Message</td><td>编辑框消息</td></tr><tr><td>ES_</td><td>Edit Style</td><td>编辑框风格</td></tr><tr><td>CB_</td><td>ComboBox</td><td>组合框消息</td></tr><tr><td>CBN_</td><td>ComboBox Notify</td><td>组合框通知</td></tr><tr><td>LBM_</td><td>ListBox Message</td><td>列表框消息</td></tr><tr><td>LBS_</td><td>ListBox Style</td><td>列表框风格</td></tr><tr><td>LBN_</td><td>ListBox Notify</td><td>列表框通知</td></tr><tr><td>LVM_</td><td>ListView Message</td><td>超级列表框(列表视图)消息</td></tr><tr><td>LVS_</td><td>ListView Style</td><td>超级列表框(列表视图)风格</td></tr><tr><td>LVN_</td><td>ListView Notify</td><td>超级列表框(列表视图)通知</td></tr><tr><td>TVM_</td><td>TreeView Message</td><td>树型框(树型视图)消息</td></tr><tr><td>TVS_</td><td>TreeView Style</td><td>树型框(树型视图)风格</td></tr><tr><td>TVN_</td><td>TreeView Notify</td><td>树型框(树型视图)通知</td></tr><tr><td>VK_</td><td>Virtual Keyboard</td><td>虚拟键、键代码</td></tr></tbody></table><p>其实，windows中的消息虽然很多，但是种类并不繁杂，大体上有3种：窗口消息、命令消息和控件通知消息。</p><ol><li>窗口消息大概是系统中最为常见的消息，它是指由操作系统和控制其他窗口的窗口所使用的消息。例如CreateWindow、DestroyWindow和MoveWindow等都会激发窗口消息，还有我们在上面谈到的单击鼠标所产生的消息也是一种窗口消息。</li><li>命令消息，这是一种特殊的窗口消息，他用来处理从一个窗口发送到另一个窗口的用户请求，例如按下一个按钮，他就会向主窗口发送一个命令消息。</li><li>控件通知消息，是指这样一种消息，一个窗口内的子控件发生了一些事情，需要通知父窗口。通知消息只适用于标准的窗口控件如按钮、列表框、组合框、编辑框，以及Windows公共控件如树状视图、列表视图等。例如，单击或双击一个控件、在控件中选择部分文本、操作控件的滚动条都会产生通知消息。 她类似于命令消息，当用户与控件窗口交互时，那么控件通知消息就会从控件窗口发送到它的主窗口。但是这种消息的存在并不是为了处理用户命令，而是为了让主窗口能够改变控件，例如加载、显示数据。例如按下一个按钮，他向父窗口发送的消息也可以看作是一个控件通知消息；单击鼠标所产生的消息可以由主窗口直接处理，然后交给控件窗口处理。</li></ol><p>比较常用的有:</p>`,13),u={href:"http://blog.itpub.net/79126/viewspace-981421/",target:"_blank",rel:"noopener noreferrer"},r=n("li",null,[n("p",null,"按扭控件 BN_CLICKED 用户单击了按钮 BN_DISABLE 按钮被禁止 BN_DOUBLECLICKED 用户双击了按钮 BN_HILITE 用/户加亮了按钮 BN_PAINT 按钮应当重画 BN_UNHILITE 加亮应当去掉")],-1),k=n("li",null,[n("p",null,"组合框控件 CBN_CLOSEUP 组合框的列表框被关闭 CBN_DBLCLK 用户双击了一个字符串 CBN_DROPDOWN 组合框的列表框被拉出 CBN_EDITCHANGE 用户修改了编辑框中的文本 CBN_EDITUPDATE 编辑框内的文本即将更新 CBN_ERRSPACE 组合框内存不足 CBN_KILLFOCUS 组合框失去输入焦点 CBN_SELCHANGE 在组合框中选择了一项 CBN_SELENDCANCEL 用户的选择应当被取消 CBN_SELENDOK 用户的选择是合法的 CBN_SETFOCUS 组合框获得输入焦点")],-1),m=n("li",null,[n("p",null,"编辑框控件 EN_CHANGE 编辑框中的文本己更新 EN_ERRSPACE 编辑框内存不足 EN_HSCROLL 用户点击了水平滚动条 EN_KILLFOCUS 编辑框正在失去输入焦点 EN_MAXTEXT 插入的内容被截断 EN_SETFOCUS 编辑框获得输入焦点 EN_UPDATE 编辑框中的文本将要更新 EN_VSCROLL 用户点击了垂直滚动条消息含义")],-1),_=n("li",null,[n("p",null,"列表框控件 LBN_DBLCLK 用户双击了一项 LBN_ERRSPACE 列表框内存不够 LBN_KILLFOCUS 列表框正在失去输入焦点 LBN_SELCANCEL 选择被取消 LBN_SELCHANGE 选择了另一项 LBN_SETFOCUS 列表框获得输入焦点")],-1),g=a(`<h3 id="常用的message" tabindex="-1"><a class="header-anchor" href="#常用的message" aria-hidden="true">#</a> 常用的message</h3><p>在第三个参数<code>wparam</code>中输入键值即可</p><h4 id="键盘操作" tabindex="-1"><a class="header-anchor" href="#键盘操作" aria-hidden="true">#</a> 键盘操作</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>win32gui<span class="token punctuation">.</span>SendMessage<span class="token punctuation">(</span>hwnd<span class="token punctuation">,</span>win32con<span class="token punctuation">.</span>WM_KEYDOWN<span class="token punctuation">,</span><span class="token number">13</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span>  <span class="token comment"># 按下回车</span>
win32gui<span class="token punctuation">.</span>SendMessage<span class="token punctuation">(</span>hwnd<span class="token punctuation">,</span>win32con<span class="token punctuation">.</span>WM_KEYUP<span class="token punctuation">,</span><span class="token number">13</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span>  <span class="token comment"># 松开回车</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol><li><p>键盘常用操作<code>wparam</code></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>WM_KEYDOWN <span class="token operator">=</span> <span class="token number">256</span>
WM_KEYUP <span class="token operator">=</span> <span class="token number">257</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>键盘常用操作<code>lparam</code> 查键值表</p></li></ol><h4 id="鼠标操作" tabindex="-1"><a class="header-anchor" href="#鼠标操作" aria-hidden="true">#</a> 鼠标操作</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>win32gui<span class="token punctuation">.</span>SendMessage<span class="token punctuation">(</span>bu<span class="token punctuation">,</span> win32con<span class="token punctuation">.</span>WM_LBUTTONDOWN<span class="token punctuation">,</span> win32con<span class="token punctuation">.</span>MK_LBUTTON<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
win32gui<span class="token punctuation">.</span>SendMessage<span class="token punctuation">(</span>bu<span class="token punctuation">,</span> win32con<span class="token punctuation">.</span>WM_LBUTTONUP<span class="token punctuation">,</span> win32con<span class="token punctuation">.</span>MK_LBUTTON<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>鼠标常用操作<code>wparam</code><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>WM_MOUSEMOVE <span class="token operator">=</span> <span class="token number">512</span>
WM_LBUTTONDOWN <span class="token operator">=</span> <span class="token number">513</span>
WM_LBUTTONUP <span class="token operator">=</span> <span class="token number">514</span>
WM_LBUTTONDBLCLK <span class="token operator">=</span> <span class="token number">515</span>
WM_RBUTTONDOWN <span class="token operator">=</span> <span class="token number">516</span>
WM_RBUTTONUP <span class="token operator">=</span> <span class="token number">517</span>
WM_RBUTTONDBLCLK <span class="token operator">=</span> <span class="token number">518</span>
WM_MBUTTONDOWN <span class="token operator">=</span> <span class="token number">519</span>
WM_MBUTTONUP <span class="token operator">=</span> <span class="token number">520</span>
WM_MBUTTONDBLCLK <span class="token operator">=</span> <span class="token number">521</span>
WM_MOUSEWHEEL <span class="token operator">=</span> <span class="token number">522</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>鼠标常用操作<code>lparam</code><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>MK_LBUTTON <span class="token operator">=</span> <span class="token number">1</span>
MK_RBUTTON <span class="token operator">=</span> <span class="token number">2</span>
MK_MBUTTON <span class="token operator">=</span> <span class="token number">16</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="按键操作" tabindex="-1"><a class="header-anchor" href="#按键操作" aria-hidden="true">#</a> 按键操作</h3><p>BM_XXXXXX:Button按键对应的操作</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>win32gui<span class="token punctuation">.</span>SendMessage<span class="token punctuation">(</span>btn1<span class="token punctuation">,</span>win32con<span class="token punctuation">.</span>BM_CLICK<span class="token punctuation">,</span><span class="token boolean">None</span><span class="token punctuation">,</span><span class="token boolean">None</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="窗口操作" tabindex="-1"><a class="header-anchor" href="#窗口操作" aria-hidden="true">#</a> 窗口操作</h3><h4 id="关闭窗口" tabindex="-1"><a class="header-anchor" href="#关闭窗口" aria-hidden="true">#</a> 关闭窗口:</h4><p>WM_CLOSE：关闭应用程序窗口 WM_DESTROY：关闭应用程序 WM_QUIT：关闭消息循环</p><ol><li>窗口右上角的【x】会默认发送一个 【WM_CLOSE】 消息 <ol><li>当用户确认退出的时候，我们续集放行让 DefWindowProc(); 函数继续处理 【WM_CLOSE】</li><li>如果用户点击了【取消】不想退出，我们就直接 retrun; ，这时不能再让DefWindowProc() 去处理消息了</li></ol></li><li>当我们收到 【WM_CLOSE】消息并让 DefWindowProc(); 处理时，DefWindowProc会 调用一个 DestroyWindow(); 函数，这个函数会发送【WM_DESTROY】消息，当我们捕获到这个消息的时候，通常是释放各种资源，释放完后手动调用 PostQuitMessage(0); ，如果不调用这个函数，虽然窗口已经不存在了，但是进程不会结束。</li><li>PostQuitMessage(0) 会发送一个【WM_QUIT】给消息队列，GetMessage 得到WM_QUIT后就会返回FALSE，从而结束消息循环，不会走消息转换 TranslateMessage(&amp;msg); 和消息分发 DispatchMessage(&amp;msg);，所以我们在消息回调函数中是取不到 【WM_QUIT】消息的。</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>win32gui<span class="token punctuation">.</span>SendMessage<span class="token punctuation">(</span>win32gui<span class="token punctuation">.</span>FindWindow<span class="token punctuation">(</span><span class="token string">&#39;Notepad&#39;</span><span class="token punctuation">,</span> <span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">,</span> win32con<span class="token punctuation">.</span>WM_CLOSE<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="发送消息的三种方式" tabindex="-1"><a class="header-anchor" href="#发送消息的三种方式" aria-hidden="true">#</a> 发送消息的三种方式</h2><p>把一个消息发送到窗口有3种方式：发送、寄送和广播。</p><p>发送消息的函数有SendMessage、SendMessageCallback、SendNotifyMessage、SendMessageTimeout；寄送消息的函数主要有PostMessage、PostThreadMessage、PostQuitMessage；广播消息的函数我知道的只有BroadcastSystemMessage、BroadcastSystemMessageEx。</p><p>SendMessage的原型如下：LRESULT SendMessage(HWND hWnd,UINT Msg,WPARAM wParam,LPARAM lParam)，这个函数主要是向一个或多个窗口发送一条消息，一直等到消息被处理之后才会返回。不过需要注意的是，如果接收消息的窗口是同一个应用程序的一部分，那么这个窗口的窗口函数就被作为一个子程序马上被调用；如果接收消息的窗口是被另外的线程所创建的，那么窗口系统就切换到相应的线程并且调用相应的窗口函数，这条消息不会被放进目标应用程序队列中。函数的返回值是由接收消息的窗口的窗口函数返回，返回的值取决于被发送的消息。</p><p>PostMessage的原型如下：BOOL PostMessage(HWND hWnd,UINT Msg,WPARAM wParam,LPARAM lParam)，该函数把一条消息放置到创建hWnd窗口的线程的消息队列中，该函数不等消息被处理就马上将控制返回。需要注意的是，如果hWnd参数为HWND_BROADCAST，那么，消息将被寄送给系统中的所有的重叠窗口和弹出窗口，但是子窗口不会收到该消息；如果hWnd参数为NULL，则该函数类似于将dwThreadID参数设置成当前线程的标志来调用PostThreadMEssage函数。</p><p>从上面的这2个具有代表性的函数，我们可以看出消息的发送方式和寄送方式的区别所在：被发送的消息是否会被立即处理，函数是否立即返回。被发送的消息会被立即处理，处理完毕后函数才会返回；被寄送的消息不会被立即处理，他被放到一个先进先出的队列中，一直等到应用程序空线的时候才会被处理，不过函数放置消息后立即返回。</p><p>实际上，发送消息到一个窗口处理过程和直接调用窗口处理过程之间并没有太大的区别，他们直接的唯一区别就在于你可以要求操作系统截获所有被发送的消息，但是不能够截获对窗口处理过程的直接调用。</p><p>以寄送方式发送的消息通常是与用户输入事件相对应的，因为这些事件不是十分紧迫，可以进行缓慢的缓冲处理，例如鼠标、键盘消息会被寄送，而按钮等消息则会被发送。</p><p>广播消息用得比较少，BroadcastSystemMessage函数原型如下：</p><p>long BroadcastSystemMessage(DWORD dwFlags,LPDWORD lpdwRecipients,UINT uiMessage,WPARAM wParam,LPARAM lParam);</p><p>该函数可以向指定的接收者发送一条消息，这些接收者可以是应用程序、可安装的驱动程序、网络驱动程序、系统级别的设备驱动消息和他们的任意组合。需要注意的是，如果dwFlags参数是BSF_QUERY并且至少一个接收者返回了BROADCAST_QUERY_DENY，则返回值为０，如果没有指定BSF_QUERY，则函数将消息发送给所有接收者，并且忽略其返回值。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">## 输入文本</span>
win32gui<span class="token punctuation">.</span>SendMessage<span class="token punctuation">(</span>tid<span class="token punctuation">,</span> win32con<span class="token punctuation">.</span>WM_SETTEXT<span class="token punctuation">,</span> <span class="token boolean">None</span><span class="token punctuation">,</span> <span class="token string">&#39;你好hello word!&#39;</span><span class="token punctuation">)</span>
<span class="token comment">## 确定</span>
win32gui<span class="token punctuation">.</span>SendMessage<span class="token punctuation">(</span>handle<span class="token punctuation">,</span> win32con<span class="token punctuation">.</span>WM_COMMAND<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> btnhld<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考:</p><p>https://www.cnblogs.com/hb01846/p/10952036.html</p>`,30);function h(M,b){const t=p("ExternalLinkIcon");return o(),i("div",null,[l,n("ol",null,[n("li",null,[n("p",null,[s("窗口 "),n("a",u,[s("VM_类消息"),d(t)])])]),r,k,m,_]),g])}const w=e(c,[["render",h],["__file","pywin32sendMessage.html.vue"]]);export{w as default};
