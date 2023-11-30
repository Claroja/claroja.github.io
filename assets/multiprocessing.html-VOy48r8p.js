import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as e,e as a}from"./app-0JgdiRQ-.js";const i="/assets/1-7wpyYBi4.png",t={},o=a('<h1 id="multiprocessing" tabindex="-1"><a class="header-anchor" href="#multiprocessing" aria-hidden="true">#</a> multiprocessing</h1><figure><img src="'+i+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Ready：进程已分配到除CPU以为的所有必要的资源，只要获得处理机便可立即执行 Running：当进程已获得处理机，其程序正在处理机上执行 Blocked：引起进程阻塞的时间有多种，例如：等待I/O完成、申请缓冲区不能满足、等待信件（信号）</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#程序开始,进入ready状态(注意不是running)</span>
<span class="token keyword">import</span> time <span class="token comment"># 程序开始运行</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;running&quot;</span><span class="token punctuation">)</span>
time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token comment"># 进入blocked状态,input方法也是blocked状态</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;over&quot;</span><span class="token punctuation">)</span><span class="token comment">#sleep后进入running状态</span>
<span class="token comment">#结束</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>multiprocessing.Process</code>的接口设计类似于<code>threading.Thread</code></p><p>进程主要模块包括:</p><ol><li><p>进程 Process</p></li><li><p>进程通信 Pipes Queues</p></li><li><p>共享对象 Value Array dict</p></li><li><p>锁 lock: 最基本的锁 rlock: 可重入锁 semaphore: 计数锁, 当小于规定阈值线程数量时, 可执行, 并获得锁 barrier: 计数锁, 当小于规定阈值线程数量时, 会阻塞, 知道大于阈值时, 才可执行 condition: 调用wait()来进入等待室, 调用notify()方法来唤醒, 好处是一个线程可以反复使用 event: 类似于condition</p></li></ol>`,7),p=[o];function c(l,r){return s(),e("div",null,p)}const m=n(t,[["render",c],["__file","multiprocessing.html.vue"]]);export{m as default};
