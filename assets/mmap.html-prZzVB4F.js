import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as t}from"./app-7knaTE3M.js";const p={},e=t(`<h1 id="mmap" tabindex="-1"><a class="header-anchor" href="#mmap" aria-hidden="true">#</a> mmap</h1><p>本质： 将文件映射到内存，进行直接对内存进行读写（当关闭mmap时内存映射才写入到文件，中间的操作都是在内存） 优点： 1.直接读写内存，不需要任何数据拷贝。管道消息队列需要在内核和用户空间进行四次数据拷贝，而共享内存只拷贝两次数据（一次是文件到共享内存，一次是从共享内存到输出文件上） 缺点：</p><p><code>Windows: mmap(fileno, length[, tagname[, access[, offset]]])</code><code>Unix: mmap(fileno, length[, flags[, prot[, access[, offset]]]])</code></p><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>fileno</td><td>文件描述符file对象的fileno()方法</td></tr><tr><td>length</td><td>映射的长度,0表示全部映射</td></tr><tr><td>flags</td><td></td></tr><tr><td>prot</td><td></td></tr><tr><td>access</td><td>ACCESS_READ：读访问;ACCESS_WRITE：写访问，默认;ACCESS_COPY：拷贝访问，不会把更改写入到文件，使用flush把更改写到文件</td></tr></tbody></table><table><thead><tr><th>方法</th><th>描述</th></tr></thead><tbody><tr><td>close()</td><td>关闭映射</td></tr><tr><td>m.find(str, start=0)</td><td>从start开始,从左到右寻找str,返回下标</td></tr><tr><td>m.flush([offset, n])</td><td>从offset开始的n个字节刷到对应的文件中,开启<code>ACCESS_COPY</code>时使用</td></tr><tr><td>move(dstoff, srcoff, n)</td><td>从 srcoff 开始的 n 个字节复制到从 dstoff 开始的n个字节</td></tr><tr><td>read(n)</td><td>m 对应的文件中最多读取 n 个字节,当前位置后移动</td></tr><tr><td>read_byte()</td><td></td></tr><tr><td>readline()</td><td></td></tr><tr><td>seek(pos, how=0)</td><td>改变当前位置</td></tr><tr><td>size()</td><td>文件的长度</td></tr><tr><td>tell()</td><td>返回当前位置</td></tr><tr><td>write(str)</td><td></td></tr><tr><td>write_byte(byte)</td><td></td></tr></tbody></table><h2 id="_1-基本使用" tabindex="-1"><a class="header-anchor" href="#_1-基本使用" aria-hidden="true">#</a> 1.基本使用</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>
<span class="token keyword">import</span> mmap

<span class="token comment">#1.先创建一个文件</span>
<span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;hello.txt&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;wb&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
    f<span class="token punctuation">.</span>write<span class="token punctuation">(</span><span class="token string">b&quot;Hello Python!\\n&quot;</span><span class="token punctuation">)</span>
<span class="token comment">#2.将文件与文件进行映射</span>
<span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;hello.txt&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;r+b&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
    mm <span class="token operator">=</span> mmap<span class="token punctuation">.</span>mmap<span class="token punctuation">(</span>f<span class="token punctuation">.</span>fileno<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment"># f.fileno()文件描述符,size为0表示读取整个文件</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>mm<span class="token punctuation">.</span>readline<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># prints &quot;Hello Python!&quot; # 标准读取方式</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>mm<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment"># prints &quot;Hello&quot;# 切片读取方式</span>
    mm<span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">:</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">b&quot; world!\\n&quot;</span>
    mm<span class="token punctuation">.</span>seek<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token comment"># 使用seek定位光标到数据头,当前光标已到数据末(mm.tell()可获取当前光标)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>mm<span class="token punctuation">.</span>readline<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># prints &quot;Hello  world!&quot;# 再次标准读取</span>
    mm<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment"># 像处理文件一样关闭mmap映射</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-父子进程通信" tabindex="-1"><a class="header-anchor" href="#_2-父子进程通信" aria-hidden="true">#</a> 2.父子进程通信</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> mmap
<span class="token keyword">import</span> os
<span class="token keyword">import</span> time

mm <span class="token operator">=</span> mmap<span class="token punctuation">.</span>mmap<span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">27</span><span class="token punctuation">)</span><span class="token comment">#传入文件描述符-1,使用匿名映射</span>
mm<span class="token punctuation">.</span>write<span class="token punctuation">(</span><span class="token string">b&quot;Original msg&quot;</span><span class="token punctuation">)</span> <span class="token comment"># 涉及mm的读写都要记得字符串的二进制</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;write successfully&#39;</span><span class="token punctuation">)</span>

pid <span class="token operator">=</span> os<span class="token punctuation">.</span>fork<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> pid <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>  <span class="token comment"># 子进程中</span>
    mm<span class="token punctuation">.</span>seek<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Read from the mmap:&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>mm<span class="token punctuation">.</span>readline<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment">#以切片访问时,严格按照字符串长度</span>
    mm<span class="token punctuation">[</span><span class="token number">12</span><span class="token punctuation">:</span><span class="token punctuation">]</span> <span class="token operator">=</span>  <span class="token string">b&#39; sth from child&#39;</span>
    mm<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token comment"># 用sleep使子进程先执行</span>
    mm<span class="token punctuation">.</span>seek<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Read from the child:&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>mm<span class="token punctuation">.</span>readline<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    mm<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-无关进程linux的通信" tabindex="-1"><a class="header-anchor" href="#_3-无关进程linux的通信" aria-hidden="true">#</a> 3.无关进程linux的通信</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> mmap
<span class="token keyword">import</span> contextlib
<span class="token keyword">import</span> time

<span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&quot;mmap.file&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;w&quot;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
    f<span class="token punctuation">.</span>write<span class="token punctuation">(</span><span class="token string">&#39;\\x00&#39;</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">)</span>

<span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;mmap.file&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;r+&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
    m <span class="token operator">=</span> mmap<span class="token punctuation">.</span>mmap<span class="token punctuation">(</span>f<span class="token punctuation">.</span>fileno<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1024</span><span class="token punctuation">,</span> access<span class="token operator">=</span>mmap<span class="token punctuation">.</span>ACCESS_WRITE<span class="token punctuation">)</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">10001</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        m<span class="token punctuation">.</span>seek<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
        m<span class="token punctuation">.</span>write<span class="token punctuation">(</span><span class="token string">b&quot;hello&quot;</span><span class="token punctuation">)</span>
        m<span class="token punctuation">.</span>flush<span class="token punctuation">(</span><span class="token punctuation">)</span>
        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> mmap
<span class="token keyword">import</span> contextlib
<span class="token keyword">import</span> time

<span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
    <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;mmap.file&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;r&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
        <span class="token keyword">with</span> contextlib<span class="token punctuation">.</span>closing<span class="token punctuation">(</span>mmap<span class="token punctuation">.</span>mmap<span class="token punctuation">(</span>f<span class="token punctuation">.</span>fileno<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1024</span><span class="token punctuation">,</span> access<span class="token operator">=</span>mmap<span class="token punctuation">.</span>ACCESS_READ<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">as</span> m<span class="token punctuation">:</span>
            s <span class="token operator">=</span> m<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>replace<span class="token punctuation">(</span><span class="token string">b&#39;\\x00&#39;</span><span class="token punctuation">,</span><span class="token string">b&#39;&#39;</span><span class="token punctuation">)</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-无关进程win通信" tabindex="-1"><a class="header-anchor" href="#_4-无关进程win通信" aria-hidden="true">#</a> 4.无关进程win通信</h2><p>server.py</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> mmap
<span class="token keyword">import</span> contextlib
<span class="token keyword">import</span> time
 
<span class="token keyword">with</span> contextlib<span class="token punctuation">.</span>closing<span class="token punctuation">(</span>mmap<span class="token punctuation">.</span>mmap<span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1024</span><span class="token punctuation">,</span> tagname<span class="token operator">=</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">,</span> access<span class="token operator">=</span>mmap<span class="token punctuation">.</span>ACCESS_WRITE<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">as</span> m<span class="token punctuation">:</span>
  <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">10001</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    m<span class="token punctuation">.</span>seek<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
    m<span class="token punctuation">.</span>write<span class="token punctuation">(</span><span class="token string">&quot;msg &quot;</span> <span class="token operator">+</span> <span class="token builtin">str</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span>
    m<span class="token punctuation">.</span>flush<span class="token punctuation">(</span><span class="token punctuation">)</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>client.py</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> mmap
<span class="token keyword">import</span> contextlib
<span class="token keyword">import</span> time
 
<span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
  <span class="token keyword">with</span> contextlib<span class="token punctuation">.</span>closing<span class="token punctuation">(</span>mmap<span class="token punctuation">.</span>mmap<span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1024</span><span class="token punctuation">,</span> tagname<span class="token operator">=</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">,</span> access<span class="token operator">=</span>mmap<span class="token punctuation">.</span>ACCESS_READ<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">as</span> m<span class="token punctuation">:</span>
    s <span class="token operator">=</span> m<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token number">1024</span><span class="token punctuation">)</span><span class="token punctuation">.</span>replace<span class="token punctuation">(</span><span class="token string">&#39;\\x00&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span> s
  time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考: https://www.xuebuyuan.com/3189076.html https://docs.python.org/zh-cn/3.9/library/mmap.html https://blog.csdn.net/zdy0_2004/article/details/53200250 https://blog.csdn.net/m0_37422289/article/details/79895526 https://blog.csdn.net/m0_37422289/article/details/79895526</p>`,18),o=[e];function c(i,l){return s(),a("div",null,o)}const d=n(p,[["render",c],["__file","mmap.html.vue"]]);export{d as default};
