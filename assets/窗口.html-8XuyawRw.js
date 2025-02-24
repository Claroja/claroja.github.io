import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as s,e}from"./app-A10JnHE0.js";const p={},o=e(`<h1 id="窗口" tabindex="-1"><a class="header-anchor" href="#窗口" aria-hidden="true">#</a> 窗口</h1><h2 id="窗口打开-关闭和停止" tabindex="-1"><a class="header-anchor" href="#窗口打开-关闭和停止" aria-hidden="true">#</a> 窗口打开, 关闭和停止</h2><h3 id="window-open" tabindex="-1"><a class="header-anchor" href="#window-open" aria-hidden="true">#</a> window.open()</h3><p>window.open方法用于新建另一个浏览器窗口，类似于浏览器菜单的新建窗口选项。它会返回新窗口的引用，如果无法新建窗口，则返回null。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> popup <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&#39;somefile.html&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面代码会让浏览器弹出一个新建窗口，网址是当前域名下的somefile.html。</p><p>open方法一共可以接受三个参数。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> windowName<span class="token punctuation">,</span> <span class="token punctuation">[</span>windowFeatures<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>url：字符串，表示新窗口的网址。如果省略，默认网址就是about:blank。</li><li>windowName：字符串，表示新窗口的名字。如果该名字的窗口已经存在，则占用该窗口，不再新建窗口。如果省略，就默认使用_blank，表示新建一个没有名字的窗口。另外还有几个预设值，_self表示当前窗口，_top表示顶层窗口，_parent表示上一层窗口。</li><li>windowFeatures：字符串，内容为逗号分隔的键值对（详见下文），表示新窗口的参数，比如有没有提示栏、工具条等等。如果省略，则默认打开一个完整 UI 的新窗口。如果新建的是一个已经存在的窗口，则该参数不起作用，浏览器沿用以前窗口的参数。 <ul><li>left：新窗口距离屏幕最左边的距离（单位像素）。注意，新窗口必须是可见的，不能设置在屏幕以外的位置。</li><li>top：新窗口距离屏幕最顶部的距离（单位像素）。</li><li>height：新窗口内容区域的高度（单位像素），不得小于100。</li><li>width：新窗口内容区域的宽度（单位像素），不得小于100。</li><li>outerHeight：整个浏览器窗口的高度（单位像素），不得小于100。</li><li>outerWidth：整个浏览器窗口的宽度（单位像素），不得小于100。</li><li>menubar：是否显示菜单栏。</li><li>toolbar：是否显示工具栏。</li><li>location：是否显示地址栏。</li><li>personalbar：是否显示用户自己安装的工具栏。</li><li>status：是否显示状态栏。</li><li>dependent：是否依赖父窗口。如果依赖，那么父窗口最小化，该窗口也最小化；父窗口关闭，该窗口也关闭。</li><li>minimizable：是否有最小化按钮，前提是dialog=yes。</li><li>noopener：新窗口将与父窗口切断联系，即新窗口的window.opener属性返回null，父窗口的window.open()方法也返回null。</li><li>resizable：新窗口是否可以调节大小。</li><li>scrollbars：是否允许新窗口出现滚动条。</li><li>dialog：新窗口标题栏是否出现最大化、最小化、恢复原始大小的控件。</li><li>titlebar：新窗口是否显示标题栏。</li><li>alwaysRaised：是否显示在所有窗口的顶部。</li><li>alwaysLowered：是否显示在父窗口的底下。</li><li>close：新窗口是否显示关闭按钮。</li></ul></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> popup <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span>
  <span class="token string">&#39;somepage.html&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;DefinitionsWindows&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;height=200,width=200,location=no,status=yes,resizable=yes,scrollbars=yes&#39;</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="window-close" tabindex="-1"><a class="header-anchor" href="#window-close" aria-hidden="true">#</a> window.close()</h3><p><code>window.close</code>方法用于关闭当前窗口，一般只用来关闭<code>window.open</code>方法新建的窗口。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>popup<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>该方法只对顶层窗口有效，iframe框架之中的窗口使用该方法无效。</p><h3 id="window-stop" tabindex="-1"><a class="header-anchor" href="#window-stop" aria-hidden="true">#</a> window.stop()</h3><p><code>window.stop()</code>方法完全等同于单击浏览器的停止按钮，会停止加载图像、视频等正在或等待加载的对象。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>window<span class="token punctuation">.</span>closed <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>window.closed</code>检查当前窗口是否关闭。这种检查意义不大，因为只要能运行代码，当前窗口肯定没有关闭。这个属性一般用来检查，使用脚本打开的新窗口是否关闭。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> popup <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>popup <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>popup<span class="token punctuation">.</span>closed<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 窗口仍然打开着</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>window.opener</code>属性表示打开当前窗口的父窗口。如果当前窗口没有父窗口（即直接在地址栏输入打开），则返回null。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>opener <span class="token operator">===</span> window <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面表达式会打开一个新窗口，然后返回true。</p><p>通过opener属性，可以获得父窗口的全局属性和方法，但只限于两个窗口同源的情况，且其中一个窗口由另一个打开。<code>&lt;a&gt;</code>元素添加<code>rel=&quot;noopener&quot;</code>属性，可以防止新打开的窗口获取父窗口，减轻被恶意网站修改父窗口 URL 的风险。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">&quot;https://an.evil.site&quot;</span> target<span class="token operator">=</span><span class="token string">&quot;_blank&quot;</span> rel<span class="token operator">=</span><span class="token string">&quot;noopener&quot;</span><span class="token operator">&gt;</span>
恶意网站
<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="focus-blur" tabindex="-1"><a class="header-anchor" href="#focus-blur" aria-hidden="true">#</a> focus blur</h2><p><code>window.focus()</code>方法会激活窗口，使其获得焦点，出现在其他窗口的前面。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> popup <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&#39;popup.html&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Popup Window&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>popup <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>popup<span class="token punctuation">.</span>closed<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  popup<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>  <span class="token comment">//上面代码先检查popup窗口是否依然存在，确认后激活该窗口。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>window.blur()</code>方法将焦点从窗口移除。 当前窗口获得焦点时，会触发focus事件；当前窗口失去焦点时，会触发blur事件。</p>`,29),t=[o];function i(l,c){return a(),s("div",null,t)}const r=n(p,[["render",i],["__file","窗口.html.vue"]]);export{r as default};
