import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as t}from"./app-7knaTE3M.js";const e="/assets/1-Py0tcqXr.png",p={},o=t('<p><code>mmap</code>()Memory-mapped I/O)将文件映射到内存缓冲区中,从缓冲区读数据,就相当于读文件中的字节,将数据存入缓冲区,相应的字节就会写入文件.(可以不使用read,write函数情况下,使用地址(指针)来完成I/O操作) 多进程映射同一个文件,来完成进程中的通信</p><p><code>void *mmap(void *addr, size_t len, int prot, int flags, int fd, off_t offset);</code> 同malloc函数申请内存空间类似的，mmap建立的映射区在使用结束后也应调用类似free的函数来释放。</p><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>addr</td><td>映射到进程空间的起始地址,内核指定,直接传递NULL</td></tr><tr><td>fd</td><td>文件描述符,由open()返回</td></tr><tr><td>len</td><td>映射空间字节数,从offset算起</td></tr><tr><td>prot</td><td>共享内存的访问权限(PROT_READ可读,PROT_WRITE可写,PROT_EXEC可执行,PROT_NONE不可访问)</td></tr><tr><td>flags</td><td>MAP_SHARED对内存的修改同时影响到文件, MAP_PRIVATE对内存修改只对该进程可见,文件未修改, MAP_FIXED</td></tr><tr><td>offset</td><td>默认0,从文件头开始映射</td></tr></tbody></table><figure><img src="'+e+`" alt="alt text" tabindex="0" loading="lazy"><figcaption>alt text</figcaption></figure><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;unistd.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;sys/types.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;sys/stat.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;fcntl.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;sys/mman.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;string.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">int</span> fd <span class="token operator">=</span> <span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&quot;test.txt&quot;</span><span class="token punctuation">,</span>O_RDWR<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">//创建映射区</span>
	<span class="token keyword">char</span> <span class="token operator">*</span>mem <span class="token operator">=</span> <span class="token function">mmap</span><span class="token punctuation">(</span>NUll<span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span>PROT_READ<span class="token operator">|</span>PROT_WRITE<span class="token punctuation">,</span>MAP_SHARED<span class="token punctuation">,</span>fd<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>mem <span class="token operator">==</span> MAP_FAILED<span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token function">perror</span><span class="token punctuation">(</span><span class="token string">&quot;mmap err&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token comment">//拷贝数据</span>
	<span class="token function">strcpy</span><span class="token punctuation">(</span>mem<span class="token punctuation">,</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">//释放</span>
	<span class="token function">munmap</span><span class="token punctuation">(</span>mem<span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">close</span><span class="token punctuation">(</span>fd<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考: https://www.cnblogs.com/xiaoshiwang/p/10823291.html https://blog.csdn.net/weixin_33775572/article/details/93538003 https://blog.csdn.net/zdy0_2004/article/details/53200250 https://www.cnblogs.com/bwbfight/p/11181631.html</p>`,6),c=[o];function i(l,r){return s(),a("div",null,c)}const k=n(p,[["render",i],["__file","7_3mmap.html.vue"]]);export{k as default};
