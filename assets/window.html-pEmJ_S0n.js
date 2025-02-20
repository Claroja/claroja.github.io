import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as e}from"./app-9tftCahk.js";const t={},p=e(`<h1 id="window" tabindex="-1"><a class="header-anchor" href="#window" aria-hidden="true">#</a> window</h1><p>selenium不区分tab和window, 本质都是tab.</p><h2 id="创建新window-tab-并跳转" tabindex="-1"><a class="header-anchor" href="#创建新window-tab-并跳转" aria-hidden="true">#</a> 创建新window(tab)并跳转</h2><p>一个<code>driver</code>可以对应多个<code>window</code>, 可以通过<code>current_window_handle</code>来获得当前window对象, 以便区别操作</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>original_window <span class="token operator">=</span> driver<span class="token punctuation">.</span>current_window_handle
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>通过<code>window_handles</code>可以获得当前<code>driver</code>对应的窗口的数量</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>driver<span class="token punctuation">.</span>window_handles
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>driver<span class="token punctuation">.</span>switch_to<span class="token punctuation">.</span>new_window<span class="token punctuation">(</span><span class="token string">&#39;tab&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># 会在当前窗口打开tab</span>
driver<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
driver<span class="token punctuation">.</span>switch_to<span class="token punctuation">.</span>window<span class="token punctuation">(</span>driver<span class="token punctuation">.</span>window_handles<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment"># 关闭之后 driver要重新和window_handle绑定</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建window并跳转" tabindex="-1"><a class="header-anchor" href="#创建window并跳转" aria-hidden="true">#</a> 创建window并跳转</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">## 保存当前window的对象</span>
original_window <span class="token operator">=</span> driver<span class="token punctuation">.</span>current_window_handle
<span class="token comment">## Opens a new window and switches to new window</span>
driver<span class="token punctuation">.</span>switch_to<span class="token punctuation">.</span>new_window<span class="token punctuation">(</span><span class="token string">&#39;window&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># 会创建新窗口, 本质还是tab</span>
driver<span class="token punctuation">.</span>switch_to<span class="token punctuation">.</span>new_window<span class="token punctuation">(</span><span class="token string">&#39;tab&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># 会在当前窗口打开tab</span>
<span class="token comment">## 获得新window的对象</span>
window1 <span class="token operator">=</span> driver<span class="token punctuation">.</span>window_handles
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过js打开, 并跳转</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>driver<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;https://www.baidu.com&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>driver<span class="token punctuation">.</span>current_window_handles<span class="token punctuation">)</span> <span class="token comment"># CDwindow-BF39F0A6A262522BA4A72EA1B9244D65</span>
driver<span class="token punctuation">.</span>execute_script<span class="token punctuation">(</span><span class="token string">&#39;window.open(&quot;http://news.baidu.com/&quot;)&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>driver<span class="token punctuation">.</span>current_window_handles<span class="token punctuation">)</span> <span class="token comment"># CDwindow-BF39F0A6A262522BA4A72EA1B9244D65</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;*&quot;</span> <span class="token operator">*</span> <span class="token number">30</span><span class="token punctuation">)</span> <span class="token comment"># *号隔开加以区分</span>
driver<span class="token punctuation">.</span>switch_to<span class="token punctuation">.</span>window<span class="token punctuation">(</span>driver<span class="token punctuation">.</span>window_handles<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>driver<span class="token punctuation">.</span>current_window_handle<span class="token punctuation">)</span> <span class="token comment"># CDwindow-34D81646E7A6EED9E8528EAEE5E8D117</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过遍历的方式</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">## Loop through until we find a new window handle</span>
<span class="token keyword">for</span> window_handle <span class="token keyword">in</span> driver<span class="token punctuation">.</span>window_handles<span class="token punctuation">:</span>
    <span class="token keyword">if</span> window_handle <span class="token operator">!=</span> original_window<span class="token punctuation">:</span>
        driver<span class="token punctuation">.</span>switch_to<span class="token punctuation">.</span>window<span class="token punctuation">(</span>window_handle<span class="token punctuation">)</span>
        <span class="token keyword">break</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="退出" tabindex="-1"><a class="header-anchor" href="#退出" aria-hidden="true">#</a> 退出</h3><h4 id="close关闭" tabindex="-1"><a class="header-anchor" href="#close关闭" aria-hidden="true">#</a> close关闭</h4><p>当不再需要新的页面后我们就将其关闭，driver.close()即可，关闭后，window_handle也就少了一个句柄。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#Close the tab or window</span>
driver<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>关闭窗口后, 跳转到之前的窗口, 否则可能会触发<code>No Such Window Exception</code></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">## Switch back to the old tab or window</span>
driver<span class="token punctuation">.</span>switch_to<span class="token punctuation">.</span>window<span class="token punctuation">(</span>original_window<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="quit退出" tabindex="-1"><a class="header-anchor" href="#quit退出" aria-hidden="true">#</a> quit退出</h4><p>quit的作用:</p><ol><li>关闭driver关联的所有window</li><li>关闭browser的进程</li><li>关闭dirver后台进程</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>driver<span class="token punctuation">.</span>quit<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="应用" tabindex="-1"><a class="header-anchor" href="#应用" aria-hidden="true">#</a> 应用</h3><p>可以分析数据接口, 这接输入数据接口, 可以直接返回数据, 而不需要点击之类的操作.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> selenium <span class="token keyword">import</span> webdriver
<span class="token keyword">from</span> selenium<span class="token punctuation">.</span>webdriver<span class="token punctuation">.</span>common<span class="token punctuation">.</span>action_chains <span class="token keyword">import</span> ActionChains
<span class="token keyword">import</span> time
<span class="token keyword">from</span> selenium<span class="token punctuation">.</span>webdriver<span class="token punctuation">.</span>common<span class="token punctuation">.</span>keys <span class="token keyword">import</span> Keys

<span class="token keyword">def</span> <span class="token function">setUp</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># self.driver = webdriver.Firefox()</span>
    self<span class="token punctuation">.</span>driver <span class="token operator">=</span> webdriver<span class="token punctuation">.</span>Chrome<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">test_switch_tab</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        driver <span class="token operator">=</span> self<span class="token punctuation">.</span>driver
        driver<span class="token punctuation">.</span>maximize_window<span class="token punctuation">(</span><span class="token punctuation">)</span>

driver<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;https://www.lambdatest.com/&#39;</span><span class="token punctuation">)</span>
time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>

first_tab_handle <span class="token operator">=</span> driver<span class="token punctuation">.</span>current_window_handle
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;first_tab_handle : &quot;</span><span class="token operator">+</span><span class="token builtin">str</span><span class="token punctuation">(</span>first_tab_handle<span class="token punctuation">)</span><span class="token punctuation">)</span>

new_tab_link <span class="token operator">=</span> driver<span class="token punctuation">.</span>find_element_by_xpath<span class="token punctuation">(</span><span class="token string">&#39;//a[contains(@class,&quot;nav-link&quot;) and contains(@href,&quot;selenium-automation&quot;)]&#39;</span><span class="token punctuation">)</span>
action <span class="token operator">=</span> ActionChains<span class="token punctuation">(</span>driver<span class="token punctuation">)</span>        
action<span class="token punctuation">.</span>key_down<span class="token punctuation">(</span>Keys<span class="token punctuation">.</span>CONTROL<span class="token punctuation">)</span><span class="token punctuation">.</span>click<span class="token punctuation">(</span>new_tab_link<span class="token punctuation">)</span><span class="token punctuation">.</span>key_up<span class="token punctuation">(</span>Keys<span class="token punctuation">.</span>CONTROL<span class="token punctuation">)</span><span class="token punctuation">.</span>perform<span class="token punctuation">(</span><span class="token punctuation">)</span> 

driver<span class="token punctuation">.</span>switch_to<span class="token punctuation">.</span>window<span class="token punctuation">(</span>driver<span class="token punctuation">.</span>window_handles<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
ctrl_click_tab <span class="token operator">=</span> driver<span class="token punctuation">.</span>current_window_handle

driver<span class="token punctuation">.</span>execute_script<span class="token punctuation">(</span><span class="token triple-quoted-string string">&#39;&#39;&#39;window.open(&quot;&quot;, &quot;_blank&quot;);&#39;&#39;&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">for</span> handle <span class="token keyword">in</span> driver<span class="token punctuation">.</span>window_handles<span class="token punctuation">:</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>handle <span class="token operator">==</span> first_tab_handle<span class="token punctuation">)</span> <span class="token keyword">or</span> <span class="token punctuation">(</span>handle <span class="token operator">==</span> ctrl_click_tab<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span>handle<span class="token punctuation">)</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
            js_tab_handle <span class="token operator">=</span> handle
driver<span class="token punctuation">.</span>switch_to<span class="token punctuation">.</span>window<span class="token punctuation">(</span>js_tab_handle<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="window基础操作" tabindex="-1"><a class="header-anchor" href="#window基础操作" aria-hidden="true">#</a> window基础操作</h2><p>获得和设置宽度和高度</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>width <span class="token operator">=</span> driver<span class="token punctuation">.</span>get_window_size<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;width&quot;</span><span class="token punctuation">)</span>
height <span class="token operator">=</span> driver<span class="token punctuation">.</span>get_window_size<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;height&quot;</span><span class="token punctuation">)</span>
driver<span class="token punctuation">.</span>set_window_size<span class="token punctuation">(</span><span class="token number">1024</span><span class="token punctuation">,</span> <span class="token number">768</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>获得和设置位置</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>x <span class="token operator">=</span> driver<span class="token punctuation">.</span>get_window_position<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;x&#39;</span><span class="token punctuation">)</span>
y <span class="token operator">=</span> driver<span class="token punctuation">.</span>get_window_position<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;y&#39;</span><span class="token punctuation">)</span>
driver<span class="token punctuation">.</span>set_window_position<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最大化,最小化和全屏</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>driver<span class="token punctuation">.</span>maximize_window<span class="token punctuation">(</span><span class="token punctuation">)</span>
driver<span class="token punctuation">.</span>minimize_window<span class="token punctuation">(</span><span class="token punctuation">)</span>
driver<span class="token punctuation">.</span>fullscreen_window<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="截屏" tabindex="-1"><a class="header-anchor" href="#截屏" aria-hidden="true">#</a> 截屏</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">## 窗口截屏</span>
driver<span class="token punctuation">.</span>save_screenshot<span class="token punctuation">(</span><span class="token string">&#39;./image.png&#39;</span><span class="token punctuation">)</span>
<span class="token comment">## 元素截屏</span>
ele <span class="token operator">=</span> driver<span class="token punctuation">.</span>find_element<span class="token punctuation">(</span>By<span class="token punctuation">.</span>CSS_SELECTOR<span class="token punctuation">,</span> <span class="token string">&#39;h1&#39;</span><span class="token punctuation">)</span>
<span class="token comment">## Returns and base64 encoded string into image</span>
ele<span class="token punctuation">.</span>screenshot<span class="token punctuation">(</span><span class="token string">&#39;./image.png&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>refs: https://www.selenium.dev/documentation/webdriver/interactions/windows/ https://www.lambdatest.com/blog/python-selenium-switch-tabs/</p>`,37),i=[p];function o(c,l){return s(),a("div",null,i)}const r=n(t,[["render",o],["__file","window.html.vue"]]);export{r as default};
