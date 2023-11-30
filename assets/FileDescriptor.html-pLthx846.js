import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-0JgdiRQ-.js";const p="/assets/1-nrcg2B4O.png",e="/assets/2-cMyQLBsn.png",c={},i=t('<h1 id="filedescriptor" tabindex="-1"><a class="header-anchor" href="#filedescriptor" aria-hidden="true">#</a> FileDescriptor</h1><p>文件描述符是一个非负整数，通常在C编程语言中表示为int类型(保留负值以表示“无值”或错误条件)。 在Linux上，进程中打开的一组文件描述符可以在路径/proc/pid/fd/下访问，其中PID是进程标识符。 在类似Unix的系统中，文件描述符可以引用在文件系统中命名的任何Unix文件类型。除了常规文件之外，它还包括目录、Blockand字符设备(也称为“特殊文件”)、Unix域套接字和命名管道。文件描述符还可以引用文件系统中通常不存在的其他对象，例如匿名管道和网络套接字。</p><p><img src="'+p+'" alt="" loading="lazy"><img src="'+e+`" alt="" loading="lazy"></p><h2 id="系统级底层读写" tabindex="-1"><a class="header-anchor" href="#系统级底层读写" aria-hidden="true">#</a> 系统级底层读写</h2><p>下面程序中<code>fd</code>就是打开文件的文件描述符，<code>read()</code>执行系统调用将文件描述符作为参数传入进去。由内核执行后续的操作。</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;fcntl.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">char</span> c<span class="token punctuation">;</span>
    <span class="token keyword">int</span> fd <span class="token operator">=</span> <span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&quot;d:\\\\1.txt&quot;</span><span class="token punctuation">,</span> O_RDONLY<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">read</span><span class="token punctuation">(</span>fd<span class="token punctuation">,</span> <span class="token operator">&amp;</span>c<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;c = %c\\n&quot;</span><span class="token punctuation">,</span> c<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">exit</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// c = 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="用户级高级读写" tabindex="-1"><a class="header-anchor" href="#用户级高级读写" aria-hidden="true">#</a> 用户级高级读写</h2><p>没有看到文件描述符相关的信息，而是通过FILE类型的指针来进行操作。文件描述符是一个低级别的&quot;句柄&quot;，用于标识内核级、Linux和其他类Unix系统中打开的文件(或套接字或其他什么)。C语言对文件描述符进行了包装，提出了文件指针的概念。</p><p>文件指针是C标准库级结构，用于表示文件。FILE包装了文件描述符，并添加缓冲和其他功能，以使I/O更容易。</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;fcntl.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> num<span class="token punctuation">;</span>
    FILE <span class="token operator">*</span>fptr<span class="token punctuation">;</span>
    fptr <span class="token operator">=</span> <span class="token function">fopen</span><span class="token punctuation">(</span><span class="token string">&quot;d:\\\\1.txt&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;w&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span><span class="token punctuation">(</span>fptr <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Error!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">fprintf</span><span class="token punctuation">(</span>fptr<span class="token punctuation">,</span> <span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> <span class="token number">1213</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">fclose</span><span class="token punctuation">(</span>fptr<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),o=[i];function l(u,r){return s(),a("div",null,o)}const v=n(c,[["render",l],["__file","FileDescriptor.html.vue"]]);export{v as default};
