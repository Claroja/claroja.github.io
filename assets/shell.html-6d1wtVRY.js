import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as n,f as l,a as e,b as o,e as c}from"./app-M6UUlHgF.js";const d={},i=e("h1",{id:"localstorage-sessionstorage",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#localstorage-sessionstorage","aria-hidden":"true"},"#"),o(" localStorage-sessionStorage")],-1),t=e("p",null,"shell使用",-1),r=c('<h3 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量$()</h3><ul><li>定义变量 变量＝值 (两侧不能有空格)</li><li>调用变量 <code>$变量</code> 全写形式是<code>${变量}</code></li><li><code>${}</code>还能执行命令 <code>${ls}</code></li></ul><p>name=wang echo name # name 这是输出字符串 echo $name # wang 输出变量 echo $name: # wang: 输出变量并拼贴<code>:</code> echo $namew # 空 因为没有<code>namew</code>这个变量, 注意<code>:</code>等符号不会认为是变量 echo ${name}w # wangw 这样就可以避免上述的情况 echo ${ls} # 输出ls的内容</p><h3 id="多命令执行-和" tabindex="-1"><a class="header-anchor" href="#多命令执行-和" aria-hidden="true">#</a> 多命令执行 <code>&amp;&amp;</code>和<code>\\</code></h3><p>一行可以执行多个命令, 一般配合<code>\\</code>换行来使用</p><h3 id="export" tabindex="-1"><a class="header-anchor" href="#export" aria-hidden="true">#</a> export</h3><p>用户登录到Linux系统后, 系统将启动一个用户shell. 当再次运行以个shell程序时, 则会创建一个子shell. 当子shell运行完后, 会返回到用户shell. 在每个shell中定义的变量只在该shell内有效. 使用<code>export</code>关键字, 可以让变量在所有shell中生效. 1.sh</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">test</span><span class="token operator">=</span>hello\n<span class="token builtin class-name">export</span> <span class="token builtin class-name">test</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>2.sh</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token variable">$test</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>',10);function h(p,m){return s(),n("div",null,[i,t,l("more"),r])}const g=a(d,[["render",h],["__file","shell.html.vue"]]);export{g as default};
