import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o,c,e as d}from"./app-SnI5rGHA.js";const a={},n=d(`<h1 id="svg" tabindex="-1"><a class="header-anchor" href="#svg" aria-hidden="true">#</a> svg</h1><p>ansiEscapeCode</p><p>主要是对终端命令行进行操控, 比如移动终端的光标的位置, 改变终端输出的字体颜色等.</p><p><code>ansi escape code</code>始终以<code>\\x1b</code>开头，这两个的作用一样的：它们只是将ACSII序号27插入这里的不同方法。如果你看一个ASCII表，<code>0x1b</code>的字面意思是ESC，这就是为什么叫做<code>ansi escape code</code>. <code>\\x1b</code>的含义，再加上一个左中括号: <code>[</code>，他们一起组成的部分通常被称为<code>CSI (Control Sequence Introducer)</code></p><h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法:</h2><p><code>0x1B[</code> + <code>zero or more numbers, separated by &quot;;&quot;</code> + <code>a letter</code>.</p><ol><li><code>0x1B</code>是ansi escape code开始的标准</li><li><code>[</code>是CSI (Control Sequence Introducer)</li><li><code>zero or more numbers, separated by &quot;;&quot;</code> 由0个或者多个数字组成，是函数的参数，多个参数之间由分号进行分割。</li><li><code>a letter</code> 是一个字母，是ansi escape code需要调用的函数名</li></ol><p>例子:</p><div class="language-PowerShell line-numbers-mode" data-ext="PowerShell"><pre class="language-PowerShell"><code>\\x1b[  # call a CSI function
0;1;34 # function arguments (0, 1, 34)
m      # function name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面这句话可以理解为<code>m(0, 1, 34)</code>; 同样，<code>\\x1b[A</code> 可以理解为: <code>A()</code></p><p>参考: https://blog.csdn.net/u013391094/article/details/127143727 https://handwiki.org/wiki/ANSI_escape_code https://solarianprogrammer.com/2019/04/08/c-programming-ansi-escape-codes-windows-macos-linux-terminals/</p>`,11),s=[n];function i(r,t){return o(),c("div",null,s)}const u=e(a,[["render",i],["__file","ansiEscapeCode.html.vue"]]);export{u as default};
