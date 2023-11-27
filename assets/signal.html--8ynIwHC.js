import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as s,e as a}from"./app-O0xqlHfm.js";const d={},i=a(`<h1 id="signal" tabindex="-1"><a class="header-anchor" href="#signal" aria-hidden="true">#</a> signal</h1><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>signal.SIG_DFL</td><td>执行信号的默认函数</td></tr><tr><td>signal.SIG_IGN</td><td>忽略信号</td></tr><tr><td>signal.NSIG</td><td></td></tr><tr><td>signal.ITIMER_REAL</td><td></td></tr><tr><td>signal.ITIMER_VIRTUAL</td><td></td></tr><tr><td>signal.ITIMER_PROF</td><td></td></tr><tr><td>signal.SIG_BLOC</td><td></td></tr><tr><td>signal.SIG_UNBLOCK</td><td></td></tr><tr><td>signal.SIG_SETMASK</td><td></td></tr></tbody></table><table><thead><tr><th>方法</th><th>描述</th></tr></thead><tbody><tr><td>signal.alarm(time)</td><td>定时发送<code>SIGALAEM</code>信号,</td></tr><tr><td>signal.getsignal(signalnum)</td><td>返回信号处理函数(python对象, signal.SIG_IGN, signal.SIG_DFL,None)</td></tr><tr><td>signal.strsignal(signalnum)</td><td>对信号的描述</td></tr><tr><td>signal.valid_signals()</td><td>当前系统可用的信号</td></tr><tr><td>signal.pause()</td><td>阻塞,直到收到信号</td></tr><tr><td>signal.raise_signal(signum)</td><td>给当前进程发送信号</td></tr><tr><td>signal.pthread_kill(thread_id, signalnum)</td><td>向线程发送信号</td></tr><tr><td>signal.pthread_sigmask(how, mask)</td><td></td></tr><tr><td>signal.setitimer(which, seconds, interval=0.0)</td><td>定时发送SIGALRM</td></tr><tr><td>signal.getitimer(which)</td><td></td></tr><tr><td>signal.set_wakeup_fd(fd, *, warn_on_full_buffer=True)</td><td></td></tr><tr><td>signal.siginterrupt(signalnum, flag)</td><td></td></tr><tr><td>signal.signal(signalnum, handler)</td><td>捕获信号,设置处理方法</td></tr><tr><td>signal.sigpending()</td><td></td></tr><tr><td>signal.sigwait(sigset)</td><td></td></tr><tr><td>signal.sigwaitinfo(sigset)</td><td></td></tr><tr><td>signal.sigtimedwait(sigset, timeout)</td><td></td></tr></tbody></table><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> signal
<span class="token comment">## Define signal handler function</span>
<span class="token keyword">def</span> <span class="token function">myHandler</span><span class="token punctuation">(</span>signum<span class="token punctuation">,</span> frame<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;I received: &#39;</span><span class="token punctuation">,</span> signum<span class="token punctuation">)</span>

<span class="token comment">## register signal.SIGTSTP&#39;s handler</span>
signal<span class="token punctuation">.</span>signal<span class="token punctuation">(</span>signal<span class="token punctuation">.</span>SIGTSTP<span class="token punctuation">,</span> myHandler<span class="token punctuation">)</span>
signal<span class="token punctuation">.</span>pause<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;End of Signal Demo&#39;</span><span class="token punctuation">)</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考: https://docs.python.org/3/library/signal.html#module-signal https://www.cnblogs.com/madsnotes/articles/5688681.html https://www.jianshu.com/p/c8edab99173d</p><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>which</td><td>ITIMER_REAL:系统真实时间;ITIMER_VIRTUAL:用户态花费的时间;ITIMER_PROF:用户态内核态总时间</td></tr></tbody></table><p>signal.CTRL_C_EVENT|win|Ctrl+C 击键事件的信号 signal.CTRL_BREAK_EVENT|win|<code> Ctrl+Break</code></p>`,7),e=[i];function l(r,o){return n(),s("div",null,e)}const g=t(d,[["render",l],["__file","signal.html.vue"]]);export{g as default};
