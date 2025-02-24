import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-A10JnHE0.js";const p={},e=t(`<h1 id="基础" tabindex="-1"><a class="header-anchor" href="#基础" aria-hidden="true">#</a> 基础</h1><ol><li><code>wait()</code>父进程调用,返回子进程状态的变化(由运行到结束)</li><li>当父进程调用<code>wait()</code>将会阻塞,直到子进程状态发生变化</li><li><code>wait</code>返回子子进程的pid,如果没有子进程,则返回-1</li><li><code>wait</code>需要整型指针参数,记录子进程退出的状态</li><li>当status为NULL时只要有一个子进程退出,主进程就退出,如果参数status的值不是NULL，wait就会把子进程退出时的状态取出并存入其中，这是一个整数值(int),使用宏(macro)来判断 <ol><li>WIFEXITED(status)：这个宏用来指出子进程是否为正常退出的,正常返回非0</li><li>WEXITSTATUS(status)：当WIFEXITED返回非零值时，我们可以用这个宏来提取子进程的返回值，如果子进程调用exit(5)退出，WEXITSTATUS(status)就会返回5</li></ol></li><li><code>#include &lt;sys/types.h&gt;</code>,<code>#include &lt;sys/wait.h&gt;</code> 原型<code>pid_t wait(int *status);</code></li><li>当进程终止时,操作系统会: <ol><li>关闭所有文件描述符</li><li>释放分配的内存空间</li><li>但是内核的PCB仍存在,其中保存着(正常终止→退出值；异常终止→终止信号)</li></ol></li></ol><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/*get_exitstatus.c*/</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;unistd.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;sys/types.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;sys/wait.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

  <span class="token class-name">pid_t</span> c_pid<span class="token punctuation">,</span> pid<span class="token punctuation">;</span>
  <span class="token keyword">int</span> status<span class="token punctuation">;</span>

  c_pid <span class="token operator">=</span> <span class="token function">fork</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//duplicate</span>

  <span class="token keyword">if</span><span class="token punctuation">(</span> c_pid <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//child</span>
    pid <span class="token operator">=</span> <span class="token function">getpid</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Child: %d: I&#39;m the child\\n&quot;</span><span class="token punctuation">,</span> pid<span class="token punctuation">,</span> c_pid<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Child: sleeping for 2-seconds, then exiting with status 12\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//sleep for 2 seconds</span>
    <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//exit with statys 12</span>
    <span class="token function">exit</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>c_pid <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//parent</span>

    <span class="token comment">//waiting for child to terminate</span>
    pid <span class="token operator">=</span> <span class="token function">wait</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>status<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span> <span class="token function">WIFEXITED</span><span class="token punctuation">(</span>status<span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Parent: Child exited with status: %d\\n&quot;</span><span class="token punctuation">,</span> <span class="token function">WEXITSTATUS</span><span class="token punctuation">(</span>status<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

  <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
    <span class="token comment">//error: The return of fork() is negative</span>
    <span class="token function">perror</span><span class="token punctuation">(</span><span class="token string">&quot;fork failed&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">_exit</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//exit failure, hard</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">//success                                                                                                                                                        </span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考:https://blog.csdn.net/thanksgining/article/details/41979699</p><h1 id="waitpid" tabindex="-1"><a class="header-anchor" href="#waitpid" aria-hidden="true">#</a> waitpid</h1><ol><li><code>include &lt;sys/sypes.h&gt;</code> <code>#include &lt;sys/wait.h&gt;</code> 原型 <code>pid_t waitpid(pid_t pid,int *status, int options)</code></li><li>参数</li></ol><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>pid</td><td>&gt;0,等待指定pid子进程退出;=0,等待组任一子进程退出;=-1,等待任一子进程退出,同waite;&lt;-1,等待起?</td></tr><tr><td>status</td><td>同<code>wait()</code></td></tr><tr><td>options</td><td>WNOHANG,不阻塞,直接返回,如果子进程没结束,返回0;WUNTRACED,;0,同<code>wait()</code></td></tr></tbody></table><ol start="3"><li>返回 正常:返回退出子进程的进程号,WNOHANG,没有子进程退出返回0 错误:返回-1</li></ol><p>参考:https://blog.csdn.net/yasi_xi/article/details/46341733</p><h1 id="孤儿进程" tabindex="-1"><a class="header-anchor" href="#孤儿进程" aria-hidden="true">#</a> 孤儿进程</h1><p>孤儿进程:父进程死,子进程被init领养 子进程被领养后,ctrl+c不能停止,因为该bash已经没有子进程了,只能通过kill杀死</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;unistd.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;sys/wait.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name">pid_t</span> pid<span class="token punctuation">;</span>
    pid <span class="token operator">=</span> <span class="token function">fork</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token keyword">if</span> <span class="token punctuation">(</span>pid <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;子进程,我的父 = %d\\n&quot;</span><span class="token punctuation">,</span> <span class="token function">getppid</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>pid <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;父进程,我的子 = %d\\n&quot;</span><span class="token punctuation">,</span> <span class="token function">getpid</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;------------parent going to die------------\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">perror</span><span class="token punctuation">(</span><span class="token string">&quot;fork&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="僵尸进程" tabindex="-1"><a class="header-anchor" href="#僵尸进程" aria-hidden="true">#</a> 僵尸进程</h1><p>僵尸进程:子进程死了,父进程没有回收子进程的资源(PCB) 僵尸进程不能用kill命令清掉,因为僵尸进程已经终止了.可以通过杀死父进程,来杀死僵尸进程.</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;unistd.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;sys/wait.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name">pid_t</span> pid<span class="token punctuation">,</span> wpid<span class="token punctuation">;</span>
    pid <span class="token operator">=</span> <span class="token function">fork</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>pid <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;子进程,我的父= %d, going to sleep 10s\\n&quot;</span><span class="token punctuation">,</span> <span class="token function">getppid</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;-------------child die--------------\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>pid <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;父进程, pid = %d, 我的子 = %d\\n&quot;</span><span class="token punctuation">,</span> <span class="token function">getpid</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> pid<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">perror</span><span class="token punctuation">(</span><span class="token string">&quot;fork&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token class-name">pid_t</span> <span class="token function">wait</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span>status<span class="token punctuation">)</span><span class="token punctuation">;</span> 	成功：清理掉的子进程ID；失败：<span class="token operator">-</span><span class="token number">1</span> <span class="token punctuation">(</span>没有子进程<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token class-name">pid_t</span> <span class="token function">waitpid</span><span class="token punctuation">(</span><span class="token class-name">pid_t</span> pid<span class="token punctuation">,</span> <span class="token keyword">int</span> <span class="token operator">*</span>status<span class="token punctuation">,</span> in options<span class="token punctuation">)</span><span class="token punctuation">;</span>	成功：返回清理掉的子进程ID；失败：<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">(</span>无子进程<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,17),i=[e];function c(o,l){return s(),a("div",null,i)}const r=n(p,[["render",c],["__file","5wait.html.vue"]]);export{r as default};
