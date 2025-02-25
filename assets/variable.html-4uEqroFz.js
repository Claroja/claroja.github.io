import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as t,c as e,a as l,b as a,d as s}from"./app-7knaTE3M.js";const r={},i=l(`<h1 id="variable" tabindex="-1"><a class="header-anchor" href="#variable" aria-hidden="true">#</a> variable</h1><h2 id="shell脚本变量" tabindex="-1"><a class="header-anchor" href="#shell脚本变量" aria-hidden="true">#</a> shell脚本变量</h2><p>1)定义变量 <code>变量＝值</code> (两侧不能有空格) 2)调用变量 <code>$变量</code> 全写形式是<code>\${变量}</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">a</span><span class="token operator">=</span>hello <span class="token comment"># 定义变量，hello是字符串，等号两边不能有空格</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$a</span> <span class="token comment"># 使用变量，要加$符号</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>3)使用变量接收命令返回值 A=$(ls -la) 等价于反引号 4)字符串拼贴</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>a=4+5
echo \${a}123 # 不能写为$a123,这样系统会把a123当成变量
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="环境变量" tabindex="-1"><a class="header-anchor" href="#环境变量" aria-hidden="true">#</a> 环境变量</h2>`,7),m=a("p",null,[s("系统变量：保存和系统操作环境相关的数据。"),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"H"),a("mi",null,"O"),a("mi",null,"M"),a("mi",null,"E"),a("mtext",null,"、")]),a("annotation",{encoding:"application/x-tex"},"HOME、")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6833em"}}),a("span",{class:"mord mathnormal",style:{"margin-right":"0.08125em"}},"H"),a("span",{class:"mord mathnormal",style:{"margin-right":"0.05764em"}},"OME"),a("span",{class:"mord cjk_fallback"},"、")])])]),s("PWD、"),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"S"),a("mi",null,"H"),a("mi",null,"E"),a("mi",null,"L"),a("mi",null,"L"),a("mtext",null,"、")]),a("annotation",{encoding:"application/x-tex"},"SHELL、")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6833em"}}),a("span",{class:"mord mathnormal",style:{"margin-right":"0.05764em"}},"S"),a("span",{class:"mord mathnormal",style:{"margin-right":"0.08125em"}},"H"),a("span",{class:"mord mathnormal",style:{"margin-right":"0.05764em"}},"E"),a("span",{class:"mord mathnormal"},"LL"),a("span",{class:"mord cjk_fallback"},"、")])])]),s("USER等等 1.使用"),a("code",null,"set"),s("命令可以查看所有环境变量，如"),a("code",null,"$HOME、$PWD、$SHELL、$USER"),s(" 2.使用"),a("code",null,"unset"),s("可以删除环境变量 2.shell 脚本中可以直接使用"),a("code",null,"$HOME、$PWD、$SHELL、$USER"),s("这些变量 3.shell 脚本可以定义环境变量，这样其他的shell脚本就可以使用 "),a("code",null," export 变量名=变量值")],-1),c=a("h2",{id:"_3-传参变量",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_3-传参变量","aria-hidden":"true"},"#"),s(" 3.传参变量")],-1),o=a("p",null,"位置参数变量：主要用来向脚本中传递参数或数据，变量名不能自定义，变量作用固定。",-1),h=a("table",null,[a("thead",null,[a("tr",null,[a("th",null,"变量"),a("th",null,"描述")])]),a("tbody",null,[a("tr",null,[a("td",null,"$n"),a("td",null,"n为数字，$0代表命令本身，$1-$9代表第一到第9个参数,十以上的参数需要用大括号包含，如${10}。")]),a("tr",null,[a("td",null,"$*"),a("td",null,'代表命令行中所有的参数，把所有的参数看成一个整体。以"$1 $2 … $n"的形式输出所有参数')]),a("tr",null,[a("td",null,"$@"),a("td",null,[s('代表命令行中的所有参数，把每个参数区分对待。以"$1" "'),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mn",null,"2"),a("mi",{mathvariant:"normal"},'"'),a("mo",null,"…"),a("mi",{mathvariant:"normal"},'"')]),a("annotation",{encoding:"application/x-tex"},'2" … "')])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6944em"}}),a("span",{class:"mord"},'2"'),a("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),a("span",{class:"minner"},"…"),a("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),a("span",{class:"mord"},'"')])])]),s('n" 的形式输出所有参数')])]),a("tr",null,[a("td",null,"$#"),a("td",null,"代表命令行中所有参数的个数。添加到shell的参数个数")])])],-1),d=a("p",null,[a("code",null,"$*"),s(" 和 "),a("code",null,"$@"),s("的区别: "),a("code",null,"$*"),s(" 和 "),a("code",null,"$@"),s("都表示传递给函数或脚本的所有参数：")],-1),p=a("ol",null,[a("li",null,[s('不被双引号" "包含时，都以"$1" "'),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mn",null,"2"),a("mi",{mathvariant:"normal"},'"'),a("mo",null,"…"),a("mi",{mathvariant:"normal"},'"')]),a("annotation",{encoding:"application/x-tex"},'2" … "')])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6944em"}}),a("span",{class:"mord"},'2"'),a("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),a("span",{class:"minner"},"…"),a("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),a("span",{class:"mord"},'"')])])]),s('n" 的形式输出所有参数')]),a("li",null,[s('被双引号" "包含时，"$*" 会将所有的参数作为一个整体，以"$1 $2 … '),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"n"),a("mi",{mathvariant:"normal"},'"'),a("mtext",null,"的形式输出所有参数；"),a("mi",{mathvariant:"normal"},'"')]),a("annotation",{encoding:"application/x-tex"},'n"的形式输出所有参数；"')])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6944em"}}),a("span",{class:"mord mathnormal"},"n"),a("span",{class:"mord"},'"'),a("span",{class:"mord cjk_fallback"},"的形式输出所有参数；"),a("span",{class:"mord"},'"')])])]),s('@" 会将各个参数分开，以"$1" "'),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mn",null,"2"),a("mi",{mathvariant:"normal"},'"'),a("mo",null,"…"),a("mi",{mathvariant:"normal"},'"')]),a("annotation",{encoding:"application/x-tex"},'2" … "')])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6944em"}}),a("span",{class:"mord"},'2"'),a("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),a("span",{class:"minner"},"…"),a("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),a("span",{class:"mord"},'"')])])]),s('n" 的形式输出所有参数')])],-1),u=l('<h2 id="预定义变量" tabindex="-1"><a class="header-anchor" href="#预定义变量" aria-hidden="true">#</a> 预定义变量</h2><p>预定义变量：是Bash中已经定义好的变量，变量名不能自定义，变量作用也是固定的。</p><table><thead><tr><th>变量</th><th>描述</th></tr></thead><tbody><tr><td>$?</td><td>执行上一个命令的返回值 执行成功，返回0，执行失败，返回非0（具体数字由命令决定）</td></tr></tbody></table><p class="katex-block"><span class="katex-error" title="ParseError: KaTeX parse error: Can&#39;t use function &#39;$&#39; in math mode at position 32: …即当前脚本执行时生成的进程号\n$̲!|后台运行的最后一个进程的进…" style="color:#cc0000;"> |当前进程的进程号（PID），即当前脚本执行时生成的进程号 $!|后台运行的最后一个进程的进程号（PID），最近一个被放入后台执行的进程 &amp; 退出状态码 $? |状态码|描述| |--|--| |0|命令成功结束| |1|一般性未知错误| |2|不适合的shell命令| |126|命令不可执行| |127|没找到命令| |128|无效的退出参数| |128+x|与Linux信号x相关的严重错误| |130|通过Ctrl+C终止的命令| |255|正常范围之外的退出状态码| eg: aa=$((4+5)) bb=`expr 4 + 5 ` </span></p>',4),x=[i,m,c,o,h,d,p,u];function g(b,$){return t(),e("div",null,x)}const v=n(r,[["render",g],["__file","variable.html.vue"]]);export{v as default};
