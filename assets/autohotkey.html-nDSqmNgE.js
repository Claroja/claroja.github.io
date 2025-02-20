import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o as n,c as r,b as e,d as s,e as o,a as t}from"./app-9tftCahk.js";const l={},u=t(`<h2 id="输入" tabindex="-1"><a class="header-anchor" href="#输入" aria-hidden="true">#</a> 输入</h2><h3 id="热键" tabindex="-1"><a class="header-anchor" href="#热键" aria-hidden="true">#</a> 热键</h3><table><thead><tr><th>符号</th><th>含义</th></tr></thead><tbody><tr><td><code>#</code></td><td>Win(Windows 徽标键)</td></tr><tr><td><code>!</code></td><td>Alt</td></tr><tr><td><code>^</code></td><td>Ctrl</td></tr><tr><td><code>+</code></td><td>Shift</td></tr></tbody></table><p>🍐<code>^j</code>等价于<code>Ctrl &amp; j</code>:</p><div class="language-ahk line-numbers-mode" data-ext="ahk"><pre class="language-ahk"><code>#Requires AutoHotkey v2.0
; ^j::MsgBox &quot;My First Script&quot;
Ctrl &amp; j::MsgBox &quot;My First Script&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="热子串" tabindex="-1"><a class="header-anchor" href="#热子串" aria-hidden="true">#</a> 热子串</h3><p>需要再输入法中一起输入</p><div class="language-ahk line-numbers-mode" data-ext="ahk"><pre class="language-ahk"><code>#Requires AutoHotkey v2.0
::btw::
{
    MsgBox &quot;You typed btw.&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="输出" tabindex="-1"><a class="header-anchor" href="#输出" aria-hidden="true">#</a> 输出</h2>`,9),c={href:"https://wyagd001.github.io/v2/docs/lib/Send.htm#keynames",target:"_blank",rel:"noopener noreferrer"},h=t(`<div class="language-ahk line-numbers-mode" data-ext="ahk"><pre class="language-ahk"><code>#Requires AutoHotkey v2.0
LCtrl::
{
    Send &quot;{Ctrl down}s{Ctrl up}&quot;  ; 表示发送 CTRL+S
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要注意特殊符号:</p><table><thead><tr><th>符号</th><th>描述</th></tr></thead><tbody><tr><td><code>!</code></td><td>发送 Alt 键. 例如, Send &quot;This is text!a&quot; 将发送按键序列 &quot;This is text&quot; 并接着按下 Alt+A. 注意: !A 在某些程序中产生的效果与 !a 不同. 这是因为 !A 表示按下 Alt+Shift+A 而 !a 表示按下 Alt+A. 如果不确定, 请使用小写字母.</td></tr><tr><td><code>+</code></td><td>发送 Shift 键. 例如, Send &quot;+abC&quot; 会发送文本 &quot;AbC&quot;, 而 Send &quot;!+a&quot; 会按下 Alt+Shift+A.</td></tr><tr><td><code>^</code></td><td>发送 Ctrl(Ctrl) 键. 例如, Send &quot;^!a&quot; 会按下 Ctrl+Alt+A, 而 Send &quot;^{Home}&quot; 则发送 Ctrl+Home. 注意: ^A 在某些程序中产生与 ^a 不同的效果. 这是因为 ^A 表示按下 Ctrl+Shift+A 而 ^a 表示按下 Ctrl+A. 如果不确定, 请使用小写字母.</td></tr><tr><td><code>#</code></td><td>发送 Win 键(带有 Windows logo 的按键), 因此 Send &quot;#e&quot; 会在按住 Win 键时按下字母 &quot;e&quot;.</td></tr></tbody></table><div class="language-ahk line-numbers-mode" data-ext="ahk"><pre class="language-ahk"><code>#Requires AutoHotkey v2.0
LCtrl::
{
    Send &quot;{Ctrl down}s{Ctrl up}&quot;  ; 表示发送 CTRL+S
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-ahk line-numbers-mode" data-ext="ahk"><pre class="language-ahk"><code>#Requires AutoHotkey v2.0

Alt &amp; h::Send &quot;{Left}&quot;
Alt &amp; l::Send &quot;{Right}&quot;
Alt &amp; k::Send &quot;{Up}&quot;
Alt &amp; j::Send &quot;{Down}&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2><ul><li>https://wyagd001.github.io/v2/docs/index.htm</li><li>https://github.com/spyoungtech/ahk</li></ul>`,7);function v(m,b){const d=i("ExternalLinkIcon");return n(),r("div",null,[u,e("p",null,[e("a",c,[s("所有的key列表"),o(d)])]),h])}const g=a(l,[["render",v],["__file","autohotkey.html.vue"]]);export{g as default};
