import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as e}from"./app-9tftCahk.js";const p={},t=e(`<h1 id="fifo" tabindex="-1"><a class="header-anchor" href="#fifo" aria-hidden="true">#</a> fifo</h1><p>fifo(first in first out) 也称named pipe(命名管道),单向数据流（半双工管道）</p><p>本质： 1.硬盘建立一个文件，对文件进行读写，实际数据没有流入硬盘 优点： 1.可以非血缘关系进程进行读写操作 2.多语言通信 缺点： 1.只能一端读令一端写（所以要相互通信需要建立两个fifo）</p><h2 id="_1-简单应用一次读写" tabindex="-1"><a class="header-anchor" href="#_1-简单应用一次读写" aria-hidden="true">#</a> 1.简单应用一次读写</h2><p><code>fifo1.py</code></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> os<span class="token punctuation">,</span>sys
os<span class="token punctuation">.</span>mkfifo<span class="token punctuation">(</span><span class="token string">&#39;file1&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># os.mknod win操作系统</span>
f1<span class="token operator">=</span><span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;file&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;w&#39;</span><span class="token punctuation">)</span>
f1<span class="token punctuation">.</span>write<span class="token punctuation">(</span>sys<span class="token punctuation">.</span>stdin<span class="token punctuation">.</span>readline<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
f1<span class="token punctuation">.</span>flush<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>fifo2.py</code></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> sys
f<span class="token operator">=</span><span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;file1&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;r&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>f<span class="token punctuation">.</span>readline<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
sys<span class="token punctuation">.</span>stdout<span class="token punctuation">.</span>flush<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在bash1中启动fifo1：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>python fifo1.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在bash2中启动fifo2：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>python fifo2.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在bash1中输入hello 在bash2中会受到hello</p><h2 id="_2-增强应用连续读写" tabindex="-1"><a class="header-anchor" href="#_2-增强应用连续读写" aria-hidden="true">#</a> 2.增强应用连续读写</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> os 
<span class="token keyword">import</span> sys

os<span class="token punctuation">.</span>mkfifo<span class="token punctuation">(</span><span class="token string">&quot;file&quot;</span><span class="token punctuation">)</span>
f1 <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;file&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;w&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
    f1<span class="token punctuation">.</span>write<span class="token punctuation">(</span>sys<span class="token punctuation">.</span>stdin<span class="token punctuation">.</span>readline<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    f1<span class="token punctuation">.</span>flush<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> sys
f<span class="token operator">=</span><span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;file&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;r&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>f<span class="token punctuation">.</span>readline<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    sys<span class="token punctuation">.</span>stdout<span class="token punctuation">.</span>flush<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考： https://www.cnblogs.com/nufangrensheng/p/3561632.html</p>`,17),o=[t];function i(c,l){return s(),a("div",null,o)}const r=n(p,[["render",i],["__file","fifo.html.vue"]]);export{r as default};
