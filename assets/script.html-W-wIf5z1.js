import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as l,c as e,a as t,b as a,d as s}from"./app-9tftCahk.js";const r={},i=t(`<h1 id="script" tabindex="-1"><a class="header-anchor" href="#script" aria-hidden="true">#</a> script</h1><h2 id="bin-bash" tabindex="-1"><a class="header-anchor" href="#bin-bash" aria-hidden="true">#</a> <code>#!/bin/bash</code></h2><p>第一行,声明解释器 <code>#!/bin/bash</code></p><p>#！符号能够被内核识别成是一个脚本的开始，这一行必须位于脚本的首行，/bin/bash是bash程序的绝对路径，在这里表示后续的内容将通过bash程序解释执行。</p><h2 id="shell脚本的执行" tabindex="-1"><a class="header-anchor" href="#shell脚本的执行" aria-hidden="true">#</a> Shell脚本的执行</h2><h3 id="输入脚本的绝对路径或相对路径" tabindex="-1"><a class="header-anchor" href="#输入脚本的绝对路径或相对路径" aria-hidden="true">#</a> 输入脚本的绝对路径或相对路径</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>/root/helloWorld.sh
./helloWorld.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="bash或sh-脚本" tabindex="-1"><a class="header-anchor" href="#bash或sh-脚本" aria-hidden="true">#</a> bash或sh +脚本</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">bash</span> /root/helloWorld.sh
<span class="token function">sh</span> helloWorld.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在脚本的路径前再加-或source" tabindex="-1"><a class="header-anchor" href="#在脚本的路径前再加-或source" aria-hidden="true">#</a> 在脚本的路径前再加&quot;. &quot; 或source</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">source</span> /root/helloWorld.sh
<span class="token builtin class-name">.</span> ./helloWorld.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>区别：第一种和第二种会新开一个bash，不同bash中的变量无法共享 但是使用. ./脚本.sh 这种方式是在同一个shell里面执行的。</p><h2 id="script-parameter" tabindex="-1"><a class="header-anchor" href="#script-parameter" aria-hidden="true">#</a> script parameter</h2><p>位置参数变量：主要用来向脚本中传递参数或数据，变量名不能自定义，变量作用固定。</p>`,14),h=a("table",null,[a("thead",null,[a("tr",null,[a("th",null,"变量"),a("th",null,"描述")])]),a("tbody",null,[a("tr",null,[a("td",null,"$n"),a("td",null,"n为数字，$0代表命令本身，$1-$9代表第一到第9个参数,十以上的参数需要用大括号包含，如${10}。")]),a("tr",null,[a("td",null,"$*"),a("td",null,'代表命令行中所有的参数，把所有的参数看成一个整体。以"$1 $2 … $n"的形式输出所有参数')]),a("tr",null,[a("td",null,"$@"),a("td",null,[s('代表命令行中的所有参数，把每个参数区分对待。以"$1" "'),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mn",null,"2"),a("mi",{mathvariant:"normal"},'"'),a("mo",null,"…"),a("mi",{mathvariant:"normal"},'"')]),a("annotation",{encoding:"application/x-tex"},'2" … "')])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6944em"}}),a("span",{class:"mord"},'2"'),a("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),a("span",{class:"minner"},"…"),a("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),a("span",{class:"mord"},'"')])])]),s('n" 的形式输出所有参数')])]),a("tr",null,[a("td",null,"$#"),a("td",null,"代表命令行中所有参数的个数。添加到shell的参数个数")])])],-1),c=a("p",null,"在脚本中可以输入shift: shift指令：参数左移，每执行一次，参数序列顺次左移一个位置，$# 的值减1，用于分别处理每个参数，移出去的参数不再可用",-1),m=a("p",null,[s("$* 和 "),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",{mathvariant:"normal"},"@"),a("mtext",null,"的区别")]),a("annotation",{encoding:"application/x-tex"},"@的区别 ")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6944em"}}),a("span",{class:"mord"},"@"),a("span",{class:"mord cjk_fallback"},"的区别")])])]),s('* 和 $@ 都表示传递给函数或脚本的所有参数，不被双引号" "包含时，都以"$1" "'),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mn",null,"2"),a("mi",{mathvariant:"normal"},'"'),a("mo",null,"…"),a("mi",{mathvariant:"normal"},'"')]),a("annotation",{encoding:"application/x-tex"},'2" … "')])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6944em"}}),a("span",{class:"mord"},'2"'),a("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),a("span",{class:"minner"},"…"),a("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),a("span",{class:"mord"},'"')])])]),s('n" 的形式输出所有参数 当它们被双引号" "包含时，"$*" 会将所有的参数作为一个整体，以"$1 $2 … '),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"n"),a("mi",{mathvariant:"normal"},'"'),a("mtext",null,"的形式输出所有参数；"),a("mi",{mathvariant:"normal"},'"')]),a("annotation",{encoding:"application/x-tex"},'n"的形式输出所有参数；"')])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6944em"}}),a("span",{class:"mord mathnormal"},"n"),a("span",{class:"mord"},'"'),a("span",{class:"mord cjk_fallback"},"的形式输出所有参数；"),a("span",{class:"mord"},'"')])])]),s('@" 会将各个参数分开，以"$1" "'),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mn",null,"2"),a("mi",{mathvariant:"normal"},'"'),a("mo",null,"…"),a("mi",{mathvariant:"normal"},'"')]),a("annotation",{encoding:"application/x-tex"},'2" … "')])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6944em"}}),a("span",{class:"mord"},'2"'),a("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),a("span",{class:"minner"},"…"),a("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),a("span",{class:"mord"},'"')])])]),s('n" 的形式输出所有参数')],-1),d=[i,h,c,m];function o(p,u){return l(),e("div",null,d)}const g=n(r,[["render",o],["__file","script.html.vue"]]);export{g as default};
