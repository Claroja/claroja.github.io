import{_ as c}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o,c as p,a as n,b as s,d as i,e as a}from"./app-A10JnHE0.js";const l="/assets/1--U10mep5.png",d={},u=a(`<p>动态库</p><h1 id="动态库编译例子" tabindex="-1"><a class="header-anchor" href="#动态库编译例子" aria-hidden="true">#</a> 动态库编译例子</h1><h2 id="代码准备" tabindex="-1"><a class="header-anchor" href="#代码准备" aria-hidden="true">#</a> 代码准备</h2><div class="language-l line-numbers-mode" data-ext="l"><pre class="language-l"><code>|-- fn
|   |-- add.c
|   \`-- sub.c
|-- h
|   \`-- head.h
|-- lib
\`-- test.c
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>add.c内容</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span><span class="token keyword">int</span> b<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> a<span class="token operator">+</span>b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>sub.c内容</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">sub</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span><span class="token keyword">int</span> b<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> a<span class="token operator">-</span>b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>test.c内容</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;head.h&quot;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
        <span class="token keyword">int</span> a <span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span><span class="token function">add</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span><span class="token function">sub</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>head.h内容</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span><span class="token keyword">int</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">sub</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span><span class="token keyword">int</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),r=n("li",null,[n("p",null,[s("编译函数库(前三部),相较于静态库,"),n("code",null,"-fpic"),s("参数,声明这个库是与内存里的位置无关的 "),n("code",null,"gcc -fpic -c ./fn/*.c -I ./h/")])],-1),k=n("code",null,"-share",-1),b=n("code",null,"gcc -shared -o ./lib/lib输出库名.so 要编译链接的库名",-1),v=n("strong",null,"动态库的命名必须以lib开头以.so结尾",-1),h={href:"https://blog.csdn.net/zhanglianpin/article/details/50491958",target:"_blank",rel:"noopener noreferrer"},m=n("code",null,"gcc -shared -o ./lib/libcalc.so *.o",-1),_=n("li",null,[n("p",null,[s("编译整个工程文件 默认gcc会找标准库,自己的库需要指明,-L指定库的目录,-l指定库的名称.库名会省略掉lib和.a "),n("code",null,"gcc test.c -o test -I h/ -L lib/ -l calc")])],-1),g=a('<h1 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h1><p>在执行的时候会 <code>./test: error while loading shared libraries: libcalc.so: cannot open shared object file: No such file or directory</code><code>ldd</code>用来查看链接 会发现动态库找不到目录 这时因为没有找到动态库的路径,有三种方法解决:</p><p>1.放在系统默认库 1)1)找到动态库所在路径: <code>sudo find / -name [动态库]</code> 2)系统里<code>/lib</code>和<code>/usr/lib</code>是存放库的目录,可以建立一个软连接放进去 <code>sudo ln -s $PWD/lib/libcalc.so /lib/libcalc.so</code></p><p>2.设置环境变量 <code>LD_LIBRARY_PATH</code></p><p>1)找到动态库所在路径: <code>sudo find / -name [动态库]</code> 2)打开<code>.bashrc</code>或者<code>~/.bash_profile</code>文件 3)<code>export LD_LIBRARY_PATH=xxx:$LD_LIBRARY_PATH</code>//一次设置有效,永久有效放在<code>.bashrc</code></p><p>3.设置LD加载文件 <code>/etc/ld.so.conf</code>文件记录了程序加载运行期间查找动态库连接时的路径 1)找到动态库所在路径: <code>sudo find / -name [动态库]</code> 2)<code>sudo vi /etc/ld.so.conf</code> 3)在最后一行添加动态库的绝对路径 4)重新加载配置文件:<code>sudo ldconfig -v</code></p><p>参考: http://www.360doc.com/content/19/0503/16/99071_833102506.shtml</p><figure><img src="'+l+'" alt="alt text" tabindex="0" loading="lazy"><figcaption>alt text</figcaption></figure>',8);function f(w,y){const e=t("ExternalLinkIcon");return o(),p("div",null,[u,n("ol",null,[r,n("li",null,[n("p",null,[s("编译动态库,使用"),k,s("参数,"),b,v,s("("),n("a",h,[s("动态库命名规则"),i(e)]),s(") "),m])]),_]),g])}const I=c(d,[["render",f],["__file","linux动态库.html.vue"]]);export{I as default};
