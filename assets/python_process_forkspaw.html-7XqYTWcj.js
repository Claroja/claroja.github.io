import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,d as e}from"./app-j3zK2x6_.js";const t={},p=e(`<h1 id="process-forkspaw" tabindex="-1"><a class="header-anchor" href="#process-forkspaw" aria-hidden="true">#</a> process_forkspaw</h1><p>实际上，Python 创建的子进程执行的内容，和启动该进程的方式有关。而根据不同的平台，启动进程的方式大致可分为以下 3 种：</p><ul><li>spawn：使用此方式启动的进程，只会执行和 target 参数或者 run() 方法相关的代码。Windows 平台只能使用此方法，事实上该平台默认使用的也是该启动方式。相比其他两种方式，此方式启动进程的效率最低。</li><li>fork：使用此方式启动的进程，基本等同于主进程（即主进程拥有的资源，该子进程全都有）。因此，该子进程会从创建位置起，和主进程一样执行程序中的代码。注意，此启动方式仅适用于 UNIX 平台，os.fork() 创建的进程就是采用此方式启动的。</li><li>forserver：使用此方式，程序将会启动一个服务器进程。即当程序每次请求启动新进程时，父进程都会连接到该服务器进程，请求由服务器进程来创建新进程。通过这种方式启动的进程不需要从父进程继承资源。注意，此启动方式只在 UNIX 平台上有效。</li></ul><h2 id="fork-copies-everything-in-memory" tabindex="-1"><a class="header-anchor" href="#fork-copies-everything-in-memory" aria-hidden="true">#</a> fork() copies everything in memory</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> logging
<span class="token keyword">from</span> multiprocessing <span class="token keyword">import</span> Pool
<span class="token keyword">from</span> os <span class="token keyword">import</span> getpid

<span class="token keyword">def</span> <span class="token function">runs_in_subprocess</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    logging<span class="token punctuation">.</span>info<span class="token punctuation">(</span>
        <span class="token string">&quot;I am the child, with PID {}&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>getpid<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    logging<span class="token punctuation">.</span>basicConfig<span class="token punctuation">(</span>
        <span class="token builtin">format</span><span class="token operator">=</span><span class="token string">&#39;GADZOOKS %(message)s&#39;</span><span class="token punctuation">,</span> level<span class="token operator">=</span>logging<span class="token punctuation">.</span>DEBUG<span class="token punctuation">)</span>

    logging<span class="token punctuation">.</span>info<span class="token punctuation">(</span>
        <span class="token string">&quot;I am the parent, with PID {}&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>getpid<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token keyword">with</span> Pool<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> pool<span class="token punctuation">:</span>
        pool<span class="token punctuation">.</span><span class="token builtin">apply</span><span class="token punctuation">(</span>runs_in_subprocess<span class="token punctuation">)</span>

<span class="token comment">## GADZOOKS I am the parent, with PID 3884</span>
<span class="token comment">## GADZOOKS I am the child, with PID 3885</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意child processes继承了parent process的logging configuration. 也即是说, 任何在parent module中的配置, 都会被child process继承.</p><h2 id="fork-doesn-t-copy-everything" tabindex="-1"><a class="header-anchor" href="#fork-doesn-t-copy-everything" aria-hidden="true">#</a> fork() doesn’t copy everything</h2><p>比如fork()并没有复制threads.任何在parent process的threads都不会在child process的存在.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> threading <span class="token keyword">import</span> Thread<span class="token punctuation">,</span> <span class="token builtin">enumerate</span> <span class="token comment">#enumerate()是线程的数量</span>
<span class="token keyword">from</span> os <span class="token keyword">import</span> fork
<span class="token keyword">from</span> time <span class="token keyword">import</span> sleep

<span class="token comment">## Start a thread:</span>
Thread<span class="token punctuation">(</span>target<span class="token operator">=</span><span class="token keyword">lambda</span><span class="token punctuation">:</span> sleep<span class="token punctuation">(</span><span class="token number">60</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> fork<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;The parent process has {} threads&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>
        <span class="token builtin">len</span><span class="token punctuation">(</span><span class="token builtin">enumerate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;The child process has {} threads&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>
        <span class="token builtin">len</span><span class="token punctuation">(</span><span class="token builtin">enumerate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">## The parent process has 2 threads</span>
<span class="token comment">## The child process has 1 threads</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="fork-的问题" tabindex="-1"><a class="header-anchor" href="#fork-的问题" aria-hidden="true">#</a> fork()的问题</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> os <span class="token keyword">import</span> fork
<span class="token keyword">from</span> threading <span class="token keyword">import</span> Lock

<span class="token comment">## Lock is acquired in the parent process:</span>
lock <span class="token operator">=</span> Lock<span class="token punctuation">(</span><span class="token punctuation">)</span>
lock<span class="token punctuation">.</span>acquire<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> fork<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
    <span class="token comment"># In the child process, try to grab the lock:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Acquiring lock...&quot;</span><span class="token punctuation">)</span>
    lock<span class="token punctuation">.</span>acquire<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Lock acquired! (This code will never run)&quot;</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="spawn" tabindex="-1"><a class="header-anchor" href="#spawn" aria-hidden="true">#</a> spawn</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> multiprocessing <span class="token keyword">import</span> set_start_method
set_start_method<span class="token punctuation">(</span><span class="token string">&quot;spawn&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>this solves our problem, because module state isn’t inherited by child processes: it starts from scratch.</p><p>另外一个写法</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> multiprocessing <span class="token keyword">import</span> get_context
<span class="token keyword">def</span> <span class="token function">your_func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">with</span> get_context<span class="token punctuation">(</span><span class="token string">&quot;spawn&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Pool<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> pool<span class="token punctuation">:</span>
        <span class="token comment"># ... everything else is unchanged</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考: https://pythonspeed.com/articles/python-multiprocessing/ https://britishgeologicalsurvey.github.io/science/python-forking-vs-spawn/ http://c.biancheng.net/view/2633.html</p>`,17),o=[p];function i(c,l){return s(),a("div",null,o)}const d=n(t,[["render",i],["__file","python_process_forkspaw.html.vue"]]);export{d as default};
