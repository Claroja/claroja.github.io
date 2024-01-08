import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as p}from"./app-YE2Hltoy.js";const e="/assets/1-nAaYwP_6.png",t={},c=p(`<h1 id="pywin32api" tabindex="-1"><a class="header-anchor" href="#pywin32api" aria-hidden="true">#</a> pywin32api</h1><p>win32api模块主要用来控制:</p><ol><li>鼠标</li><li>键盘</li></ol><h2 id="鼠标" tabindex="-1"><a class="header-anchor" href="#鼠标" aria-hidden="true">#</a> 鼠标</h2><p>鼠标的控制分为两个:</p><ol><li>移动, 使用<code>SetCursorPos</code>方法</li><li>点击, 使用<code>mouse_event</code>, 然后在第一个参数输入按键值</li></ol><h3 id="移动鼠标" tabindex="-1"><a class="header-anchor" href="#移动鼠标" aria-hidden="true">#</a> 移动鼠标</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> win32api<span class="token punctuation">,</span>win32con
<span class="token comment">## 将鼠标移动到坐标处</span>
win32api<span class="token punctuation">.</span>SetCursorPos<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="点击鼠标" tabindex="-1"><a class="header-anchor" href="#点击鼠标" aria-hidden="true">#</a> 点击鼠标</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#给光标定位的位置进行单击操作</span>
win32api<span class="token punctuation">.</span>mouse_event<span class="token punctuation">(</span>win32con<span class="token punctuation">.</span>MOUSEEVENTF_LEFTUP <span class="token operator">|</span> win32con<span class="token punctuation">.</span>MOUSEEVENTF_LEFTDOWN<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
<span class="token comment">#给光标定位的位置进行右击操作</span>
win32api<span class="token punctuation">.</span>mouse_event<span class="token punctuation">(</span>win32con<span class="token punctuation">.</span>MOUSEEVENTF_RIGHTUP <span class="token operator">|</span> win32con<span class="token punctuation">.</span>MOUSEEVENTF_RIGHTDOWN<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另一种写法</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">## 鼠标左键按下-放开</span>
win32api<span class="token punctuation">.</span>mouse_event<span class="token punctuation">(</span>win32con<span class="token punctuation">.</span>MOUSEEVENTF_LEFTDOWN<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
win32api<span class="token punctuation">.</span>mouse_event<span class="token punctuation">(</span>win32con<span class="token punctuation">.</span>MOUSEEVENTF_LEFTUP<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
<span class="token comment">## 鼠标右键按下-放开</span>
win32api<span class="token punctuation">.</span>mouse_event<span class="token punctuation">(</span>win32con<span class="token punctuation">.</span>MOUSEEVENTF_LEFTDOWN<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
win32api<span class="token punctuation">.</span>mouse_event<span class="token punctuation">(</span>win32con<span class="token punctuation">.</span>MOUSEEVENTF_LEFTUP<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="鼠标值常量" tabindex="-1"><a class="header-anchor" href="#鼠标值常量" aria-hidden="true">#</a> 鼠标值常量</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>MOUSEEVENTF_MOVE <span class="token operator">=</span> <span class="token number">1</span>
MOUSEEVENTF_LEFTDOWN <span class="token operator">=</span> <span class="token number">2</span>
MOUSEEVENTF_LEFTUP <span class="token operator">=</span> <span class="token number">4</span>
MOUSEEVENTF_RIGHTDOWN <span class="token operator">=</span> <span class="token number">8</span>
MOUSEEVENTF_RIGHTUP <span class="token operator">=</span> <span class="token number">16</span>
MOUSEEVENTF_MIDDLEDOWN <span class="token operator">=</span> <span class="token number">32</span>
MOUSEEVENTF_MIDDLEUP <span class="token operator">=</span> <span class="token number">64</span>
MOUSEEVENTF_XDOWN <span class="token operator">=</span> <span class="token number">128</span>
MOUSEEVENTF_XUP <span class="token operator">=</span> <span class="token number">256</span>
MOUSEEVENTF_WHEEL <span class="token operator">=</span> <span class="token number">2048</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="键盘" tabindex="-1"><a class="header-anchor" href="#键盘" aria-hidden="true">#</a> 键盘</h2><p>键盘控制有两个要点:</p><ol><li><p>按哪个按键, 第一个参数<code>bVk</code>控制</p></li><li><p>动作是按下还是抬起, 第三个参数<code>dwFlags</code>控制</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>KEYEVENTF_EXTENDEDKEY <span class="token operator">=</span> <span class="token number">1</span>
KEYEVENTF_KEYUP <span class="token operator">=</span> <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><p>控制按键的方法:</p><p><code>keybd_event(bVk, bScan, dwFlags, dwExtraInfo)</code></p><ul><li><code>bVk</code>: 虚拟键码（键盘键码对照表见附录）；</li><li><code>bScan</code>: 硬件扫描码，一般设置为0即可；</li><li><code>dwFlags</code>: 如果值为<code>KEYEVENTF_EXTENDEDKEY</code>(对应值1)则该键被按下，如果值为<code>KEYEVENTF_KEYUP</code>(对应值2)则该按键被释放；</li><li><code>dwExtraInfo</code>: 定义与击键相关的附加的32位值，一般设置为0即可。</li></ul><h3 id="单一按键" tabindex="-1"><a class="header-anchor" href="#单一按键" aria-hidden="true">#</a> 单一按键</h3><ol><li>查询keycode</li><li>按下时<code>dwFlags</code>设为1, 抬起时<code>dwFlags</code>设为2</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>win32api<span class="token punctuation">.</span>keybd_event<span class="token punctuation">(</span>keycode<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span>  <span class="token comment"># 按下</span>
win32api<span class="token punctuation">.</span>keybd_event<span class="token punctuation">(</span>keycode<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span>  <span class="token comment"># 抬起</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>例如点击<code>Enter</code></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>win32api<span class="token punctuation">.</span>keybd_event<span class="token punctuation">(</span><span class="token number">13</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span>
win32api<span class="token punctuation">.</span>keybd_event<span class="token punctuation">(</span><span class="token number">13</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="组合按键" tabindex="-1"><a class="header-anchor" href="#组合按键" aria-hidden="true">#</a> 组合按键</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>win32api<span class="token punctuation">.</span>keybd_event<span class="token punctuation">(</span><span class="token number">18</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>  <span class="token comment"># 按下Alt</span>
win32api<span class="token punctuation">.</span>keybd_event<span class="token punctuation">(</span><span class="token number">70</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>  <span class="token comment"># 按下F</span>
win32api<span class="token punctuation">.</span>keybd_event<span class="token punctuation">(</span><span class="token number">70</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>  <span class="token comment"># 释放F</span>
win32api<span class="token punctuation">.</span>keybd_event<span class="token punctuation">(</span><span class="token number">18</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>  <span class="token comment"># 释放Alt</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="按键和键值对应表" tabindex="-1"><a class="header-anchor" href="#按键和键值对应表" aria-hidden="true">#</a> 按键和键值对应表</h2><h3 id="图片形式" tabindex="-1"><a class="header-anchor" href="#图片形式" aria-hidden="true">#</a> 图片形式</h3><figure><img src="`+e+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="python字典形式" tabindex="-1"><a class="header-anchor" href="#python字典形式" aria-hidden="true">#</a> python字典形式</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>VK_CODE <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&#39;backspace&#39;</span><span class="token punctuation">:</span> <span class="token number">0x08</span><span class="token punctuation">,</span>
    <span class="token string">&#39;tab&#39;</span><span class="token punctuation">:</span> <span class="token number">0x09</span><span class="token punctuation">,</span>
    <span class="token string">&#39;clear&#39;</span><span class="token punctuation">:</span> <span class="token number">0x0C</span><span class="token punctuation">,</span>
    <span class="token string">&#39;enter&#39;</span><span class="token punctuation">:</span> <span class="token number">0x0D</span><span class="token punctuation">,</span>
    <span class="token string">&#39;shift&#39;</span><span class="token punctuation">:</span> <span class="token number">0x10</span><span class="token punctuation">,</span>
    <span class="token string">&#39;ctrl&#39;</span><span class="token punctuation">:</span> <span class="token number">0x11</span><span class="token punctuation">,</span>
    <span class="token string">&#39;alt&#39;</span><span class="token punctuation">:</span> <span class="token number">0x12</span><span class="token punctuation">,</span>
    <span class="token string">&#39;pause&#39;</span><span class="token punctuation">:</span> <span class="token number">0x13</span><span class="token punctuation">,</span>
    <span class="token string">&#39;caps_lock&#39;</span><span class="token punctuation">:</span> <span class="token number">0x14</span><span class="token punctuation">,</span>
    <span class="token string">&#39;esc&#39;</span><span class="token punctuation">:</span> <span class="token number">0x1B</span><span class="token punctuation">,</span>
    <span class="token string">&#39;spacebar&#39;</span><span class="token punctuation">:</span> <span class="token number">0x20</span><span class="token punctuation">,</span>
    <span class="token string">&#39;page_up&#39;</span><span class="token punctuation">:</span> <span class="token number">0x21</span><span class="token punctuation">,</span>
    <span class="token string">&#39;page_down&#39;</span><span class="token punctuation">:</span> <span class="token number">0x22</span><span class="token punctuation">,</span>
    <span class="token string">&#39;end&#39;</span><span class="token punctuation">:</span> <span class="token number">0x23</span><span class="token punctuation">,</span>
    <span class="token string">&#39;home&#39;</span><span class="token punctuation">:</span> <span class="token number">0x24</span><span class="token punctuation">,</span>
    <span class="token string">&#39;left_arrow&#39;</span><span class="token punctuation">:</span> <span class="token number">0x25</span><span class="token punctuation">,</span>
    <span class="token string">&#39;up_arrow&#39;</span><span class="token punctuation">:</span> <span class="token number">0x26</span><span class="token punctuation">,</span>
    <span class="token string">&#39;right_arrow&#39;</span><span class="token punctuation">:</span> <span class="token number">0x27</span><span class="token punctuation">,</span>
    <span class="token string">&#39;down_arrow&#39;</span><span class="token punctuation">:</span> <span class="token number">0x28</span><span class="token punctuation">,</span>
    <span class="token string">&#39;select&#39;</span><span class="token punctuation">:</span> <span class="token number">0x29</span><span class="token punctuation">,</span>
    <span class="token string">&#39;print&#39;</span><span class="token punctuation">:</span> <span class="token number">0x2A</span><span class="token punctuation">,</span>
    <span class="token string">&#39;execute&#39;</span><span class="token punctuation">:</span> <span class="token number">0x2B</span><span class="token punctuation">,</span>
    <span class="token string">&#39;print_screen&#39;</span><span class="token punctuation">:</span> <span class="token number">0x2C</span><span class="token punctuation">,</span>
    <span class="token string">&#39;ins&#39;</span><span class="token punctuation">:</span> <span class="token number">0x2D</span><span class="token punctuation">,</span>
    <span class="token string">&#39;del&#39;</span><span class="token punctuation">:</span> <span class="token number">0x2E</span><span class="token punctuation">,</span>
    <span class="token string">&#39;help&#39;</span><span class="token punctuation">:</span> <span class="token number">0x2F</span><span class="token punctuation">,</span>
    <span class="token string">&#39;0&#39;</span><span class="token punctuation">:</span> <span class="token number">0x30</span><span class="token punctuation">,</span>
    <span class="token string">&#39;1&#39;</span><span class="token punctuation">:</span> <span class="token number">0x31</span><span class="token punctuation">,</span>
    <span class="token string">&#39;2&#39;</span><span class="token punctuation">:</span> <span class="token number">0x32</span><span class="token punctuation">,</span>
    <span class="token string">&#39;3&#39;</span><span class="token punctuation">:</span> <span class="token number">0x33</span><span class="token punctuation">,</span>
    <span class="token string">&#39;4&#39;</span><span class="token punctuation">:</span> <span class="token number">0x34</span><span class="token punctuation">,</span>
    <span class="token string">&#39;5&#39;</span><span class="token punctuation">:</span> <span class="token number">0x35</span><span class="token punctuation">,</span>
    <span class="token string">&#39;6&#39;</span><span class="token punctuation">:</span> <span class="token number">0x36</span><span class="token punctuation">,</span>
    <span class="token string">&#39;7&#39;</span><span class="token punctuation">:</span> <span class="token number">0x37</span><span class="token punctuation">,</span>
    <span class="token string">&#39;8&#39;</span><span class="token punctuation">:</span> <span class="token number">0x38</span><span class="token punctuation">,</span>
    <span class="token string">&#39;9&#39;</span><span class="token punctuation">:</span> <span class="token number">0x39</span><span class="token punctuation">,</span>
    <span class="token string">&#39;a&#39;</span><span class="token punctuation">:</span> <span class="token number">0x41</span><span class="token punctuation">,</span>
    <span class="token string">&#39;b&#39;</span><span class="token punctuation">:</span> <span class="token number">0x42</span><span class="token punctuation">,</span>
    <span class="token string">&#39;c&#39;</span><span class="token punctuation">:</span> <span class="token number">0x43</span><span class="token punctuation">,</span>
    <span class="token string">&#39;d&#39;</span><span class="token punctuation">:</span> <span class="token number">0x44</span><span class="token punctuation">,</span>
    <span class="token string">&#39;e&#39;</span><span class="token punctuation">:</span> <span class="token number">0x45</span><span class="token punctuation">,</span>
    <span class="token string">&#39;f&#39;</span><span class="token punctuation">:</span> <span class="token number">0x46</span><span class="token punctuation">,</span>
    <span class="token string">&#39;g&#39;</span><span class="token punctuation">:</span> <span class="token number">0x47</span><span class="token punctuation">,</span>
    <span class="token string">&#39;h&#39;</span><span class="token punctuation">:</span> <span class="token number">0x48</span><span class="token punctuation">,</span>
    <span class="token string">&#39;i&#39;</span><span class="token punctuation">:</span> <span class="token number">0x49</span><span class="token punctuation">,</span>
    <span class="token string">&#39;j&#39;</span><span class="token punctuation">:</span> <span class="token number">0x4A</span><span class="token punctuation">,</span>
    <span class="token string">&#39;k&#39;</span><span class="token punctuation">:</span> <span class="token number">0x4B</span><span class="token punctuation">,</span>
    <span class="token string">&#39;l&#39;</span><span class="token punctuation">:</span> <span class="token number">0x4C</span><span class="token punctuation">,</span>
    <span class="token string">&#39;m&#39;</span><span class="token punctuation">:</span> <span class="token number">0x4D</span><span class="token punctuation">,</span>
    <span class="token string">&#39;n&#39;</span><span class="token punctuation">:</span> <span class="token number">0x4E</span><span class="token punctuation">,</span>
    <span class="token string">&#39;o&#39;</span><span class="token punctuation">:</span> <span class="token number">0x4F</span><span class="token punctuation">,</span>
    <span class="token string">&#39;p&#39;</span><span class="token punctuation">:</span> <span class="token number">0x50</span><span class="token punctuation">,</span>
    <span class="token string">&#39;q&#39;</span><span class="token punctuation">:</span> <span class="token number">0x51</span><span class="token punctuation">,</span>
    <span class="token string">&#39;r&#39;</span><span class="token punctuation">:</span> <span class="token number">0x52</span><span class="token punctuation">,</span>
    <span class="token string">&#39;s&#39;</span><span class="token punctuation">:</span> <span class="token number">0x53</span><span class="token punctuation">,</span>
    <span class="token string">&#39;t&#39;</span><span class="token punctuation">:</span> <span class="token number">0x54</span><span class="token punctuation">,</span>
    <span class="token string">&#39;u&#39;</span><span class="token punctuation">:</span> <span class="token number">0x55</span><span class="token punctuation">,</span>
    <span class="token string">&#39;v&#39;</span><span class="token punctuation">:</span> <span class="token number">0x56</span><span class="token punctuation">,</span>
    <span class="token string">&#39;w&#39;</span><span class="token punctuation">:</span> <span class="token number">0x57</span><span class="token punctuation">,</span>
    <span class="token string">&#39;x&#39;</span><span class="token punctuation">:</span> <span class="token number">0x58</span><span class="token punctuation">,</span>
    <span class="token string">&#39;y&#39;</span><span class="token punctuation">:</span> <span class="token number">0x59</span><span class="token punctuation">,</span>
    <span class="token string">&#39;z&#39;</span><span class="token punctuation">:</span> <span class="token number">0x5A</span><span class="token punctuation">,</span>
    <span class="token string">&#39;numpad_0&#39;</span><span class="token punctuation">:</span> <span class="token number">0x60</span><span class="token punctuation">,</span>
    <span class="token string">&#39;numpad_1&#39;</span><span class="token punctuation">:</span> <span class="token number">0x61</span><span class="token punctuation">,</span>
    <span class="token string">&#39;numpad_2&#39;</span><span class="token punctuation">:</span> <span class="token number">0x62</span><span class="token punctuation">,</span>
    <span class="token string">&#39;numpad_3&#39;</span><span class="token punctuation">:</span> <span class="token number">0x63</span><span class="token punctuation">,</span>
    <span class="token string">&#39;numpad_4&#39;</span><span class="token punctuation">:</span> <span class="token number">0x64</span><span class="token punctuation">,</span>
    <span class="token string">&#39;numpad_5&#39;</span><span class="token punctuation">:</span> <span class="token number">0x65</span><span class="token punctuation">,</span>
    <span class="token string">&#39;numpad_6&#39;</span><span class="token punctuation">:</span> <span class="token number">0x66</span><span class="token punctuation">,</span>
    <span class="token string">&#39;numpad_7&#39;</span><span class="token punctuation">:</span> <span class="token number">0x67</span><span class="token punctuation">,</span>
    <span class="token string">&#39;numpad_8&#39;</span><span class="token punctuation">:</span> <span class="token number">0x68</span><span class="token punctuation">,</span>
    <span class="token string">&#39;numpad_9&#39;</span><span class="token punctuation">:</span> <span class="token number">0x69</span><span class="token punctuation">,</span>
    <span class="token string">&#39;multiply_key&#39;</span><span class="token punctuation">:</span> <span class="token number">0x6A</span><span class="token punctuation">,</span>
    <span class="token string">&#39;add_key&#39;</span><span class="token punctuation">:</span> <span class="token number">0x6B</span><span class="token punctuation">,</span>
    <span class="token string">&#39;separator_key&#39;</span><span class="token punctuation">:</span> <span class="token number">0x6C</span><span class="token punctuation">,</span>
    <span class="token string">&#39;subtract_key&#39;</span><span class="token punctuation">:</span> <span class="token number">0x6D</span><span class="token punctuation">,</span>
    <span class="token string">&#39;decimal_key&#39;</span><span class="token punctuation">:</span> <span class="token number">0x6E</span><span class="token punctuation">,</span>
    <span class="token string">&#39;divide_key&#39;</span><span class="token punctuation">:</span> <span class="token number">0x6F</span><span class="token punctuation">,</span>
    <span class="token string">&#39;F1&#39;</span><span class="token punctuation">:</span> <span class="token number">0x70</span><span class="token punctuation">,</span>
    <span class="token string">&#39;F2&#39;</span><span class="token punctuation">:</span> <span class="token number">0x71</span><span class="token punctuation">,</span>
    <span class="token string">&#39;F3&#39;</span><span class="token punctuation">:</span> <span class="token number">0x72</span><span class="token punctuation">,</span>
    <span class="token string">&#39;F4&#39;</span><span class="token punctuation">:</span> <span class="token number">0x73</span><span class="token punctuation">,</span>
    <span class="token string">&#39;F5&#39;</span><span class="token punctuation">:</span> <span class="token number">0x74</span><span class="token punctuation">,</span>
    <span class="token string">&#39;F6&#39;</span><span class="token punctuation">:</span> <span class="token number">0x75</span><span class="token punctuation">,</span>
    <span class="token string">&#39;F7&#39;</span><span class="token punctuation">:</span> <span class="token number">0x76</span><span class="token punctuation">,</span>
    <span class="token string">&#39;F8&#39;</span><span class="token punctuation">:</span> <span class="token number">0x77</span><span class="token punctuation">,</span>
    <span class="token string">&#39;F9&#39;</span><span class="token punctuation">:</span> <span class="token number">0x78</span><span class="token punctuation">,</span>
    <span class="token string">&#39;F10&#39;</span><span class="token punctuation">:</span> <span class="token number">0x79</span><span class="token punctuation">,</span>
    <span class="token string">&#39;F11&#39;</span><span class="token punctuation">:</span> <span class="token number">0x7A</span><span class="token punctuation">,</span>
    <span class="token string">&#39;F12&#39;</span><span class="token punctuation">:</span> <span class="token number">0x7B</span><span class="token punctuation">,</span>
    <span class="token string">&#39;F13&#39;</span><span class="token punctuation">:</span> <span class="token number">0x7C</span><span class="token punctuation">,</span>
    <span class="token string">&#39;F14&#39;</span><span class="token punctuation">:</span> <span class="token number">0x7D</span><span class="token punctuation">,</span>
    <span class="token string">&#39;F15&#39;</span><span class="token punctuation">:</span> <span class="token number">0x7E</span><span class="token punctuation">,</span>
    <span class="token string">&#39;F16&#39;</span><span class="token punctuation">:</span> <span class="token number">0x7F</span><span class="token punctuation">,</span>
    <span class="token string">&#39;F17&#39;</span><span class="token punctuation">:</span> <span class="token number">0x80</span><span class="token punctuation">,</span>
    <span class="token string">&#39;F18&#39;</span><span class="token punctuation">:</span> <span class="token number">0x81</span><span class="token punctuation">,</span>
    <span class="token string">&#39;F19&#39;</span><span class="token punctuation">:</span> <span class="token number">0x82</span><span class="token punctuation">,</span>
    <span class="token string">&#39;F20&#39;</span><span class="token punctuation">:</span> <span class="token number">0x83</span><span class="token punctuation">,</span>
    <span class="token string">&#39;F21&#39;</span><span class="token punctuation">:</span> <span class="token number">0x84</span><span class="token punctuation">,</span>
    <span class="token string">&#39;F22&#39;</span><span class="token punctuation">:</span> <span class="token number">0x85</span><span class="token punctuation">,</span>
    <span class="token string">&#39;F23&#39;</span><span class="token punctuation">:</span> <span class="token number">0x86</span><span class="token punctuation">,</span>
    <span class="token string">&#39;F24&#39;</span><span class="token punctuation">:</span> <span class="token number">0x87</span><span class="token punctuation">,</span>
    <span class="token string">&#39;num_lock&#39;</span><span class="token punctuation">:</span> <span class="token number">0x90</span><span class="token punctuation">,</span>
    <span class="token string">&#39;scroll_lock&#39;</span><span class="token punctuation">:</span> <span class="token number">0x91</span><span class="token punctuation">,</span>
    <span class="token string">&#39;left_shift&#39;</span><span class="token punctuation">:</span> <span class="token number">0xA0</span><span class="token punctuation">,</span>
    <span class="token string">&#39;right_shift &#39;</span><span class="token punctuation">:</span> <span class="token number">0xA1</span><span class="token punctuation">,</span>
    <span class="token string">&#39;left_control&#39;</span><span class="token punctuation">:</span> <span class="token number">0xA2</span><span class="token punctuation">,</span>
    <span class="token string">&#39;right_control&#39;</span><span class="token punctuation">:</span> <span class="token number">0xA3</span><span class="token punctuation">,</span>
    <span class="token string">&#39;left_menu&#39;</span><span class="token punctuation">:</span> <span class="token number">0xA4</span><span class="token punctuation">,</span>
    <span class="token string">&#39;right_menu&#39;</span><span class="token punctuation">:</span> <span class="token number">0xA5</span><span class="token punctuation">,</span>
    <span class="token string">&#39;browser_back&#39;</span><span class="token punctuation">:</span> <span class="token number">0xA6</span><span class="token punctuation">,</span>
    <span class="token string">&#39;browser_forward&#39;</span><span class="token punctuation">:</span> <span class="token number">0xA7</span><span class="token punctuation">,</span>
    <span class="token string">&#39;browser_refresh&#39;</span><span class="token punctuation">:</span> <span class="token number">0xA8</span><span class="token punctuation">,</span>
    <span class="token string">&#39;browser_stop&#39;</span><span class="token punctuation">:</span> <span class="token number">0xA9</span><span class="token punctuation">,</span>
    <span class="token string">&#39;browser_search&#39;</span><span class="token punctuation">:</span> <span class="token number">0xAA</span><span class="token punctuation">,</span>
    <span class="token string">&#39;browser_favorites&#39;</span><span class="token punctuation">:</span> <span class="token number">0xAB</span><span class="token punctuation">,</span>
    <span class="token string">&#39;browser_start_and_home&#39;</span><span class="token punctuation">:</span> <span class="token number">0xAC</span><span class="token punctuation">,</span>
    <span class="token string">&#39;volume_mute&#39;</span><span class="token punctuation">:</span> <span class="token number">0xAD</span><span class="token punctuation">,</span>
    <span class="token string">&#39;volume_Down&#39;</span><span class="token punctuation">:</span> <span class="token number">0xAE</span><span class="token punctuation">,</span>
    <span class="token string">&#39;volume_up&#39;</span><span class="token punctuation">:</span> <span class="token number">0xAF</span><span class="token punctuation">,</span>
    <span class="token string">&#39;next_track&#39;</span><span class="token punctuation">:</span> <span class="token number">0xB0</span><span class="token punctuation">,</span>
    <span class="token string">&#39;previous_track&#39;</span><span class="token punctuation">:</span> <span class="token number">0xB1</span><span class="token punctuation">,</span>
    <span class="token string">&#39;stop_media&#39;</span><span class="token punctuation">:</span> <span class="token number">0xB2</span><span class="token punctuation">,</span>
    <span class="token string">&#39;play/pause_media&#39;</span><span class="token punctuation">:</span> <span class="token number">0xB3</span><span class="token punctuation">,</span>
    <span class="token string">&#39;start_mail&#39;</span><span class="token punctuation">:</span> <span class="token number">0xB4</span><span class="token punctuation">,</span>
    <span class="token string">&#39;select_media&#39;</span><span class="token punctuation">:</span> <span class="token number">0xB5</span><span class="token punctuation">,</span>
    <span class="token string">&#39;start_application_1&#39;</span><span class="token punctuation">:</span> <span class="token number">0xB6</span><span class="token punctuation">,</span>
    <span class="token string">&#39;start_application_2&#39;</span><span class="token punctuation">:</span> <span class="token number">0xB7</span><span class="token punctuation">,</span>
    <span class="token string">&#39;attn_key&#39;</span><span class="token punctuation">:</span> <span class="token number">0xF6</span><span class="token punctuation">,</span>
    <span class="token string">&#39;crsel_key&#39;</span><span class="token punctuation">:</span> <span class="token number">0xF7</span><span class="token punctuation">,</span>
    <span class="token string">&#39;exsel_key&#39;</span><span class="token punctuation">:</span> <span class="token number">0xF8</span><span class="token punctuation">,</span>
    <span class="token string">&#39;play_key&#39;</span><span class="token punctuation">:</span> <span class="token number">0xFA</span><span class="token punctuation">,</span>
    <span class="token string">&#39;zoom_key&#39;</span><span class="token punctuation">:</span> <span class="token number">0xFB</span><span class="token punctuation">,</span>
    <span class="token string">&#39;clear_key&#39;</span><span class="token punctuation">:</span> <span class="token number">0xFE</span><span class="token punctuation">,</span>
    <span class="token string">&#39;+&#39;</span><span class="token punctuation">:</span> <span class="token number">0xBB</span><span class="token punctuation">,</span>
    <span class="token string">&#39;,&#39;</span><span class="token punctuation">:</span> <span class="token number">0xBC</span><span class="token punctuation">,</span>
    <span class="token string">&#39;-&#39;</span><span class="token punctuation">:</span> <span class="token number">0xBD</span><span class="token punctuation">,</span>
    <span class="token string">&#39;.&#39;</span><span class="token punctuation">:</span> <span class="token number">0xBE</span><span class="token punctuation">,</span>
    <span class="token string">&#39;/&#39;</span><span class="token punctuation">:</span> <span class="token number">0xBF</span><span class="token punctuation">,</span>
    <span class="token string">&#39;\`&#39;</span><span class="token punctuation">:</span> <span class="token number">0xC0</span><span class="token punctuation">,</span>
    <span class="token string">&#39;;&#39;</span><span class="token punctuation">:</span> <span class="token number">0xBA</span><span class="token punctuation">,</span>
    <span class="token string">&#39;[&#39;</span><span class="token punctuation">:</span> <span class="token number">0xDB</span><span class="token punctuation">,</span>
    <span class="token string">&#39;\\\\&#39;</span><span class="token punctuation">:</span> <span class="token number">0xDC</span><span class="token punctuation">,</span>
    <span class="token string">&#39;]&#39;</span><span class="token punctuation">:</span> <span class="token number">0xDD</span><span class="token punctuation">,</span>
    <span class="token string">&quot;&#39;&quot;</span><span class="token punctuation">:</span> <span class="token number">0xDE</span><span class="token punctuation">,</span>
    <span class="token string">&#39;\`&#39;</span><span class="token punctuation">:</span> <span class="token number">0xC0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="win32con" tabindex="-1"><a class="header-anchor" href="#win32con" aria-hidden="true">#</a> win32con</h3><p>在<code>win32con.py</code>中定义的常量</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>VK_LBUTTON <span class="token operator">=</span> <span class="token number">1</span>
VK_RBUTTON <span class="token operator">=</span> <span class="token number">2</span>
VK_CANCEL <span class="token operator">=</span> <span class="token number">3</span>
VK_MBUTTON <span class="token operator">=</span> <span class="token number">4</span>
VK_BACK <span class="token operator">=</span> <span class="token number">8</span>
VK_TAB <span class="token operator">=</span> <span class="token number">9</span>
VK_CLEAR <span class="token operator">=</span> <span class="token number">12</span>
VK_RETURN <span class="token operator">=</span> <span class="token number">13</span>
VK_SHIFT <span class="token operator">=</span> <span class="token number">16</span>
VK_CONTROL <span class="token operator">=</span> <span class="token number">17</span>
VK_MENU <span class="token operator">=</span> <span class="token number">18</span>
VK_PAUSE <span class="token operator">=</span> <span class="token number">19</span>
VK_CAPITAL <span class="token operator">=</span> <span class="token number">20</span>
VK_KANA <span class="token operator">=</span> <span class="token number">21</span>
VK_HANGEUL <span class="token operator">=</span> <span class="token number">21</span>  <span class="token comment"># old name - should be here for compatibility</span>
VK_HANGUL <span class="token operator">=</span> <span class="token number">21</span>
VK_JUNJA <span class="token operator">=</span> <span class="token number">23</span>
VK_FINAL <span class="token operator">=</span> <span class="token number">24</span>
VK_HANJA <span class="token operator">=</span> <span class="token number">25</span>
VK_KANJI <span class="token operator">=</span> <span class="token number">25</span>
VK_ESCAPE <span class="token operator">=</span> <span class="token number">27</span>
VK_CONVERT <span class="token operator">=</span> <span class="token number">28</span>
VK_NONCONVERT <span class="token operator">=</span> <span class="token number">29</span>
VK_ACCEPT <span class="token operator">=</span> <span class="token number">30</span>
VK_MODECHANGE <span class="token operator">=</span> <span class="token number">31</span>
VK_SPACE <span class="token operator">=</span> <span class="token number">32</span>
VK_PRIOR <span class="token operator">=</span> <span class="token number">33</span>
VK_NEXT <span class="token operator">=</span> <span class="token number">34</span>
VK_END <span class="token operator">=</span> <span class="token number">35</span>
VK_HOME <span class="token operator">=</span> <span class="token number">36</span>
VK_LEFT <span class="token operator">=</span> <span class="token number">37</span>
VK_UP <span class="token operator">=</span> <span class="token number">38</span>
VK_RIGHT <span class="token operator">=</span> <span class="token number">39</span>
VK_DOWN <span class="token operator">=</span> <span class="token number">40</span>
VK_SELECT <span class="token operator">=</span> <span class="token number">41</span>
VK_PRINT <span class="token operator">=</span> <span class="token number">42</span>
VK_EXECUTE <span class="token operator">=</span> <span class="token number">43</span>
VK_SNAPSHOT <span class="token operator">=</span> <span class="token number">44</span>
VK_INSERT <span class="token operator">=</span> <span class="token number">45</span>
VK_DELETE <span class="token operator">=</span> <span class="token number">46</span>
VK_HELP <span class="token operator">=</span> <span class="token number">47</span>
VK_LWIN <span class="token operator">=</span> <span class="token number">91</span>
VK_RWIN <span class="token operator">=</span> <span class="token number">92</span>
VK_APPS <span class="token operator">=</span> <span class="token number">93</span>
VK_NUMPAD0 <span class="token operator">=</span> <span class="token number">96</span>
VK_NUMPAD1 <span class="token operator">=</span> <span class="token number">97</span>
VK_NUMPAD2 <span class="token operator">=</span> <span class="token number">98</span>
VK_NUMPAD3 <span class="token operator">=</span> <span class="token number">99</span>
VK_NUMPAD4 <span class="token operator">=</span> <span class="token number">100</span>
VK_NUMPAD5 <span class="token operator">=</span> <span class="token number">101</span>
VK_NUMPAD6 <span class="token operator">=</span> <span class="token number">102</span>
VK_NUMPAD7 <span class="token operator">=</span> <span class="token number">103</span>
VK_NUMPAD8 <span class="token operator">=</span> <span class="token number">104</span>
VK_NUMPAD9 <span class="token operator">=</span> <span class="token number">105</span>
VK_MULTIPLY <span class="token operator">=</span> <span class="token number">106</span>
VK_ADD <span class="token operator">=</span> <span class="token number">107</span>
VK_SEPARATOR <span class="token operator">=</span> <span class="token number">108</span>
VK_SUBTRACT <span class="token operator">=</span> <span class="token number">109</span>
VK_DECIMAL <span class="token operator">=</span> <span class="token number">110</span>
VK_DIVIDE <span class="token operator">=</span> <span class="token number">111</span>
VK_F1 <span class="token operator">=</span> <span class="token number">112</span>
VK_F2 <span class="token operator">=</span> <span class="token number">113</span>
VK_F3 <span class="token operator">=</span> <span class="token number">114</span>
VK_F4 <span class="token operator">=</span> <span class="token number">115</span>
VK_F5 <span class="token operator">=</span> <span class="token number">116</span>
VK_F6 <span class="token operator">=</span> <span class="token number">117</span>
VK_F7 <span class="token operator">=</span> <span class="token number">118</span>
VK_F8 <span class="token operator">=</span> <span class="token number">119</span>
VK_F9 <span class="token operator">=</span> <span class="token number">120</span>
VK_F10 <span class="token operator">=</span> <span class="token number">121</span>
VK_F11 <span class="token operator">=</span> <span class="token number">122</span>
VK_F12 <span class="token operator">=</span> <span class="token number">123</span>
VK_F13 <span class="token operator">=</span> <span class="token number">124</span>
VK_F14 <span class="token operator">=</span> <span class="token number">125</span>
VK_F15 <span class="token operator">=</span> <span class="token number">126</span>
VK_F16 <span class="token operator">=</span> <span class="token number">127</span>
VK_F17 <span class="token operator">=</span> <span class="token number">128</span>
VK_F18 <span class="token operator">=</span> <span class="token number">129</span>
VK_F19 <span class="token operator">=</span> <span class="token number">130</span>
VK_F20 <span class="token operator">=</span> <span class="token number">131</span>
VK_F21 <span class="token operator">=</span> <span class="token number">132</span>
VK_F22 <span class="token operator">=</span> <span class="token number">133</span>
VK_F23 <span class="token operator">=</span> <span class="token number">134</span>
VK_F24 <span class="token operator">=</span> <span class="token number">135</span>
VK_NUMLOCK <span class="token operator">=</span> <span class="token number">144</span>
VK_SCROLL <span class="token operator">=</span> <span class="token number">145</span>
VK_LSHIFT <span class="token operator">=</span> <span class="token number">160</span>
VK_RSHIFT <span class="token operator">=</span> <span class="token number">161</span>
VK_LCONTROL <span class="token operator">=</span> <span class="token number">162</span>
VK_RCONTROL <span class="token operator">=</span> <span class="token number">163</span>
VK_LMENU <span class="token operator">=</span> <span class="token number">164</span>
VK_RMENU <span class="token operator">=</span> <span class="token number">165</span>
VK_PROCESSKEY <span class="token operator">=</span> <span class="token number">229</span>
VK_ATTN <span class="token operator">=</span> <span class="token number">246</span>
VK_CRSEL <span class="token operator">=</span> <span class="token number">247</span>
VK_EXSEL <span class="token operator">=</span> <span class="token number">248</span>
VK_EREOF <span class="token operator">=</span> <span class="token number">249</span>
VK_PLAY <span class="token operator">=</span> <span class="token number">250</span>
VK_ZOOM <span class="token operator">=</span> <span class="token number">251</span>
VK_NONAME <span class="token operator">=</span> <span class="token number">252</span>
VK_PA1 <span class="token operator">=</span> <span class="token number">253</span>
VK_OEM_CLEAR <span class="token operator">=</span> <span class="token number">254</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考: https://blog.csdn.net/afgasdg/article/details/85795883</p>`,36),o=[c];function l(i,u){return s(),a("div",null,o)}const d=n(t,[["render",l],["__file","pywin32api.html.vue"]]);export{d as default};
