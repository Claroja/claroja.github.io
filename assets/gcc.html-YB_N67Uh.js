import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e}from"./app-jdLxCr9I.js";const t={},c=e(`<p>GNU编译套件(GNU Compiler Collection),GPL许可发行的自由软件.大多数Unix操作系统采纳为标准编译器,同时也适用于Win</p><p>gcc -E 得.i 调用cpp 预处理(头文件展开,宏替换)</p><p>gcc -S 得.s 调用gcc本身 汇编语言</p><p>gcc -c 得到.o 调用as 编译成二进制文件</p><p>gcc -o得到.o 调用ld(链接libc) 这一步是链接</p><p>gcc后用<code>file</code>查看</p><table><thead><tr><th>gcc参数</th><th>描述</th></tr></thead><tbody><tr><td><code>-I</code></td><td>编译时所包含的<mark>头</mark>文件路径(其实改c文件中include的路径也行)</td></tr><tr><td><code>-L</code></td><td>包含库的路径</td></tr><tr><td><code>-l</code></td><td>指定库名,比如<code>xx.so</code>或<code>xx.a</code></td></tr><tr><td><code>-o</code></td><td>指定生成的文件名</td></tr><tr><td><code>-D</code></td><td>相当于<code>defn</code>,指定宏编译</td></tr><tr><td><code>-g</code></td><td>gdb模式,可以调试</td></tr><tr><td><code>-lstdc++</code></td><td>编译c++代码,一般使用<code>g++</code></td></tr><tr><td><code>Wall</code></td><td>显示更多的警告</td></tr><tr><td><code>-O</code></td><td>优化等级(1,2,3),就是内联函数</td></tr><tr><td><code>-E</code></td><td>头文件展开,宏替换</td></tr><tr><td><code>-S</code></td><td>编译成汇编</td></tr></tbody></table><h1 id="编译c" tabindex="-1"><a class="header-anchor" href="#编译c" aria-hidden="true">#</a> 编译C</h1><p>例子: 假设有以下的文件</p><div class="language-linux line-numbers-mode" data-ext="linux"><pre class="language-linux"><code>|-- fn
|   \`-- add.c
|-- h
|   \`-- head.h
\`-- test.c
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>test.c文件内容</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;head.h&quot;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">DEBUG</span> <span class="token expression"><span class="token number">0</span> </span><span class="token comment">//为了下面写宏的展示</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
        <span class="token keyword">int</span> a <span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> c<span class="token punctuation">;</span><span class="token comment">//使用-Wall参数会警告该参数没有初始化</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">ifdef</span> <span class="token expression">DEBUG  </span><span class="token comment">//如果定义了DEBUG则会执行以下的</span></span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;hello C\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span></span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span><span class="token function">add</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>add.c 内容</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span><span class="token keyword">int</span> b<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> a<span class="token operator">+</span>b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>head.h内容</p><div class="language-h line-numbers-mode" data-ext="h"><pre class="language-h"><code>
#include &lt;stdio.h&gt;
extern int add(int a,int b);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用以下命令进行编译</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>claroja@claroja:~/gcc$ gcc test.c ./fn/add.c <span class="token parameter variable">-I</span> ./h <span class="token parameter variable">-Wall</span> <span class="token parameter variable">-o</span> <span class="token builtin class-name">test</span>
test.c: In <span class="token keyword">function</span> ‘main’:
test.c:6:6: warning: unused variable ‘c’ <span class="token punctuation">[</span>-Wunused-variable<span class="token punctuation">]</span>
  int c<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1.test.c和fn目录下add.c一起编译(因为test.c调用了add.c,注意add.c要加路径) 2.<code>-I</code>参数指明了头文件的路径</p><h1 id="编译c-1" tabindex="-1"><a class="header-anchor" href="#编译c-1" aria-hidden="true">#</a> 编译C++</h1><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
using namespace std<span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Hello C++&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>g++ test.cpp -o testcpp</code></p><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>-fPIC</td><td>产生使用相对位置的代码(position-independent code),生成动态链接</td></tr><tr><td>--shared</td><td>生成共享库(需要指定fPIC参数)</td></tr><tr><td>-o</td><td>(output) 指定输出的位置</td></tr><tr><td>-x</td><td>(language)指定要编译的语言类型,<code>c</code>,<code>c++</code>等,如果不指定会通过后缀识别</td></tr><tr><td>-std=</td><td>选择语言标准<code>c90</code>,<code>c98</code>,<code>c99</code></td></tr><tr><td>-I</td><td>指定所包含的头文件的目录,在swig编译python的时候要指定python.h所在的路径</td></tr></tbody></table><p>位置无关:使用相对位置,代码可以被加载到内存任意位置,共享库在加载时位置就是相对的</p>`,25),d=[c];function p(o,i){return s(),a("div",null,d)}const u=n(t,[["render",p],["__file","gcc.html.vue"]]);export{u as default};
