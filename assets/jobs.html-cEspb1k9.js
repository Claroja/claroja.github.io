import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as n}from"./app-SnI5rGHA.js";const d={},t=n(`<h1 id="jobs" tabindex="-1"><a class="header-anchor" href="#jobs" aria-hidden="true">#</a> jobs</h1><p>jobs是终端的一个概念,一个终端开启一个进程,就生成了一个工作(job),这个工作只在这个终端里有效.</p><p>使用<code>Ctrl+Z</code>可以使作业暂停,而后可以选择是终止进程(kill命令),还是继续执行(发送SIGCONT信号)</p><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td></td><td>默认只查看作业号</td></tr><tr><td>-l</td><td>列出进程的PID以及作业号</td></tr><tr><td>-n</td><td>只列出上次shell发出的通知后改变了状态的作业</td></tr><tr><td>-p</td><td>只列出作业的PID</td></tr><tr><td>-r</td><td>只列出运行中的作业</td></tr><tr><td>-s</td><td>只列出已停止的作业</td></tr></tbody></table><h2 id="jobs-1" tabindex="-1"><a class="header-anchor" href="#jobs-1" aria-hidden="true">#</a> jobs</h2><p>1.添加三个作业,每次都添加后,都立刻使用<code>Ctrl+Z</code>暂停</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>@:~/code/test$ <span class="token function">sh</span> test.sh
@:~/code/test$ <span class="token function">sh</span> test.sh
@:~/code/test$ <span class="token function">sh</span> test.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.使用<code>jobs</code>查看 <code>[1]</code>是作业号,通过作业号来<code>bg</code>或者<code>fg</code>运行 <code>+</code>是默认作业,如果<code>bg</code>,<code>fg</code>没有指定作业号,则会执行此<code>job</code><code>-</code>是当<code>+</code>默认作业执行完,<code>-</code>号就会成为默认作业 <code>+</code>和<code>-</code>各自只会存在一个</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>@:~/code/test$ <span class="token function">jobs</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>   Stopped                 <span class="token function">sh</span> test.sh
<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>-  Stopped                 <span class="token function">sh</span> test.sh
<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span>+  Stopped                 <span class="token function">sh</span> test.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="fg" tabindex="-1"><a class="header-anchor" href="#fg" aria-hidden="true">#</a> fg</h2><p><code>fg</code>可以将暂停的工作,放在前台继续运行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">fg</span> 工作号
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="bg" tabindex="-1"><a class="header-anchor" href="#bg" aria-hidden="true">#</a> bg</h2><p><code>bg</code>可以将暂停的工作,放在后台,相当于<code>&amp;</code>号后台运行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">bg</span> 工作号
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="sighup" tabindex="-1"><a class="header-anchor" href="#sighup" aria-hidden="true">#</a> SIGHUP</h2><p>SIGHUP在用户结束终端连接时发出(关闭终端,断开ssh),系统对SIGHUP信号的默认处理是终止收到该信号的进程.所以若是程序中没有捕捉该信号,当收到该信号时,进程就会退出.</p><p>如果想在终端退出,程序正常运行的话,就要使用<code>nohup</code>命令</p><p>参考: https://www.cnblogs.com/lizhouwei/p/10122742.html</p>`,19),c=[t];function o(i,r){return s(),a("div",null,c)}const h=e(d,[["render",o],["__file","jobs.html.vue"]]);export{h as default};
