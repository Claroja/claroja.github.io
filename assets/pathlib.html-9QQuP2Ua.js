import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o as e,c as p,b as n,d as o,e as i,a as c}from"./app-9tftCahk.js";const l="/assets/1-TNeE43Qv.png",u={},d=c(`<h1 id="pathlib" tabindex="-1"><a class="header-anchor" href="#pathlib" aria-hidden="true">#</a> pathlib</h1><h2 id="创建path对象" tabindex="-1"><a class="header-anchor" href="#创建path对象" aria-hidden="true">#</a> 创建Path对象</h2><ul><li><code>Path.home()</code>, 用户路径</li><li><code>Path.cwd()</code>, 当前工作目录(current work directory)</li><li><code>Path()</code>, 指定路径 <blockquote><p>在Windows中, 路径分隔符是<code>\\</code>, 但更多的场景里<code>\\</code>代表的是转义字符(escape character), 可以使用原始字符(raw string literals), 来规避这个问题, 如<code>r&quot;C:\\Users&quot;</code>等价于<code>&#39;C:\\\\Users&#39;</code> 另外使用<code>joinpath</code>也可以避免windows和linux路径处理的区别, 如<code>Path.home().joinpath(&quot;python&quot;)</code>, 结果为<code>PosixPath(&#39;/home/user/python)</code> 还有一种方法是<code>wave_absolute = Path(Path.home(), &quot;ocean&quot;, &quot;wave.txt&quot;)</code> 最后还可以使用<code>/</code>运算符 <code>Path.cwd() / &quot;test.md&quot;</code></p></blockquote></li></ul><p>注意, 以上获得的都是相对路径, 可以使用<code>resolve()</code>转化为绝对路径</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>path<span class="token punctuation">.</span>resolve<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 将相对路径转化为绝对路径</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="将path对象转化为字符串" tabindex="-1"><a class="header-anchor" href="#将path对象转化为字符串" aria-hidden="true">#</a> 将Path对象转化为字符串</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">from</span> pathlib <span class="token keyword">import</span> Path
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">str</span><span class="token punctuation">(</span>Path<span class="token punctuation">(</span><span class="token string">r&quot;C:\\Users&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token string">&#39;C:\\\\Users&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="获得path对象的局部" tabindex="-1"><a class="header-anchor" href="#获得path对象的局部" aria-hidden="true">#</a> 获得Path对象的局部</h2><ul><li><code>.name</code>: 文件名称和类型, 不包含路径, 而包含<code>.stem</code>和<code>.suffix</code></li><li><code>.stem</code>: 文件名称, 不包含类型<code>.suffix</code></li><li><code>.suffix</code>: 文件类型, 仅包含<code>.suffix</code></li><li><code>.anchor</code>: 盘符</li><li><code>.parent</code>: 文件的路径, <code>.parent</code>表示文件的路径, 而<code>.parent.parent</code>表示上一级路径</li></ul><figure><img src="`+l+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> pathlib <span class="token keyword">import</span> Path
path <span class="token operator">=</span> Path<span class="token punctuation">(</span><span class="token string">r&quot;C:\\Users\\gahjelle\\realpython\\test.md&quot;</span><span class="token punctuation">)</span>
path  <span class="token comment"># WindowsPath(&#39;C:/Users/gahjelle/realpython/test.md&#39;)</span>
path<span class="token punctuation">.</span>name  <span class="token comment"># &#39;test.md&#39;</span>
path<span class="token punctuation">.</span>stem  <span class="token comment"># &#39;test&#39;</span>
path<span class="token punctuation">.</span>suffix  <span class="token comment"># &#39;.md&#39;</span>
path<span class="token punctuation">.</span>anchor <span class="token comment"># &#39;C:\\\\&#39;</span>
path<span class="token punctuation">.</span>parent <span class="token comment"># WindowsPath(&#39;C:/Users/gahjelle/realpython&quot;)</span>
path<span class="token punctuation">.</span>parent<span class="token punctuation">.</span>parent <span class="token comment"># WindowsPath(&#39;C:/Users/gahjelle&#39;)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="文件操作" tabindex="-1"><a class="header-anchor" href="#文件操作" aria-hidden="true">#</a> 文件操作</h2><h3 id="读写文件" tabindex="-1"><a class="header-anchor" href="#读写文件" aria-hidden="true">#</a> 读写文件</h3><ul><li><p>默认调用<code>open()</code>方法</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> pathlib <span class="token keyword">import</span> Path

path <span class="token operator">=</span> Path<span class="token punctuation">.</span>cwd<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token string">&quot;test.md&quot;</span>
<span class="token keyword">with</span> path<span class="token punctuation">.</span><span class="token builtin">open</span><span class="token punctuation">(</span>mode<span class="token operator">=</span><span class="token string">&quot;r&quot;</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> md_file<span class="token punctuation">:</span>
    content <span class="token operator">=</span> md_file<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>也提供的便利的方法如</p><ul><li><code>.read_text()</code> 等价于<code>open(&#39;./test.md&#39;, mode=&#39;r&#39;)</code></li><li><code>.read_bytes()</code> 等价于<code>open(&#39;./test.md&#39;, mode=&#39;rb&#39;)</code></li><li><code>.write_text()</code> 等价于<code>open(&#39;./test.md&#39;, mode=&#39;w&#39;)</code></li><li><code>.write_bytes()</code> 等价于<code>open(&#39;./test.md&#39;, mode=&#39;wb&#39;)</code></li></ul><p>以上的方法自动关闭文件, 所以不必再写<code>with</code>.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> pathlib <span class="token keyword">import</span> Path
path <span class="token operator">=</span> Path<span class="token punctuation">.</span>cwd<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token string">&quot;test.md&quot;</span>
content <span class="token operator">=</span> path<span class="token punctuation">.</span>read_text<span class="token punctuation">(</span>encoding<span class="token operator">=</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="更改文件名称" tabindex="-1"><a class="header-anchor" href="#更改文件名称" aria-hidden="true">#</a> 更改文件名称</h3><ul><li><code>.with_stem()</code>, 仅更改<code>stem()</code>部分</li><li><code>.with_suffix()</code>, 仅更改<code>suffix()</code>部分</li><li><code>.with_name()</code>, 更改<code>name()</code>部分</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> pathlib <span class="token keyword">import</span> Path
txt_path <span class="token operator">=</span> Path<span class="token punctuation">(</span><span class="token string">&quot;/home/gahjelle/realpython/hello.txt&quot;</span><span class="token punctuation">)</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
PosixPath(&quot;/home/gahjelle/realpython/hello.txt&quot;)
&quot;&quot;&quot;</span>
<span class="token comment"># 创建更改\`suffix\`后的Path对象, 此时并没有实际更改文件名</span>
md_path <span class="token operator">=</span> txt_path<span class="token punctuation">.</span>with_suffix<span class="token punctuation">(</span><span class="token string">&quot;.md&quot;</span><span class="token punctuation">)</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
PosixPath(&#39;/home/gahjelle/realpython/hello.md&#39;)
&quot;&quot;&quot;</span>
<span class="token comment"># 替换为新的Path对象, 即实际更改文件类型</span>
txt_path<span class="token punctuation">.</span>replace<span class="token punctuation">(</span>md_path<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="复制文件" tabindex="-1"><a class="header-anchor" href="#复制文件" aria-hidden="true">#</a> 复制文件</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> pathlib <span class="token keyword">import</span> Path
source <span class="token operator">=</span> Path<span class="token punctuation">(</span><span class="token string">&quot;test.md&quot;</span><span class="token punctuation">)</span>
destination <span class="token operator">=</span> source<span class="token punctuation">.</span>with_stem<span class="token punctuation">(</span><span class="token string">&quot;test2&quot;</span><span class="token punctuation">)</span>
destination<span class="token punctuation">.</span>write_bytes<span class="token punctuation">(</span>source<span class="token punctuation">.</span>read_bytes<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="移动文件" tabindex="-1"><a class="header-anchor" href="#移动文件" aria-hidden="true">#</a> 移动文件</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> pathlib <span class="token keyword">import</span> Path

source <span class="token operator">=</span> Path<span class="token punctuation">(</span><span class="token string">&quot;test.py&quot;</span><span class="token punctuation">)</span>
destination <span class="token operator">=</span> Path<span class="token punctuation">(</span><span class="token string">&quot;test1.py&quot;</span><span class="token punctuation">)</span>
source<span class="token punctuation">.</span>replace<span class="token punctuation">(</span>destination<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除文件" tabindex="-1"><a class="header-anchor" href="#删除文件" aria-hidden="true">#</a> 删除文件</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> pathlib <span class="token keyword">import</span> Path

source <span class="token operator">=</span> Path<span class="token punctuation">(</span><span class="token string">&quot;test.py&quot;</span><span class="token punctuation">)</span>
source<span class="token punctuation">.</span>unlink<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建和删除路径" tabindex="-1"><a class="header-anchor" href="#创建和删除路径" aria-hidden="true">#</a> 创建和删除路径</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>path<span class="token punctuation">.</span>rmdir<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">#</span>
path<span class="token punctuation">.</span>mkdir<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 创建</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="迭代路径下的文件和目录" tabindex="-1"><a class="header-anchor" href="#迭代路径下的文件和目录" aria-hidden="true">#</a> 迭代路径下的文件和目录</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token punctuation">[</span>x <span class="token keyword">for</span> x <span class="token keyword">in</span> path<span class="token punctuation">.</span>iterdir<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">if</span> x<span class="token punctuation">.</span>is_dir<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span>  <span class="token comment"># 目录下所有目录</span>
<span class="token punctuation">[</span>x <span class="token keyword">for</span> x <span class="token keyword">in</span> path<span class="token punctuation">.</span>iterdir<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">if</span> x<span class="token punctuation">.</span>is_file<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span>  <span class="token comment"># 目录下所有文件</span>
<span class="token builtin">list</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span>glob<span class="token punctuation">(</span><span class="token string">&#39;**/*.py&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 目录及递归所有子目录下所有py文件, **代表递归所有子目录</span>
<span class="token builtin">list</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span>glob<span class="token punctuation">(</span><span class="token string">&#39;*/*.py&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 目录下所有一级子目录下所有py文件, *达标通配符</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="判断路径是否存在" tabindex="-1"><a class="header-anchor" href="#判断路径是否存在" aria-hidden="true">#</a> 判断路径是否存在</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> pathlib <span class="token keyword">import</span> Path
path <span class="token operator">=</span> Path<span class="token punctuation">(</span><span class="token string">&#39;/tmp/myfile.txt&#39;</span><span class="token punctuation">)</span>
path<span class="token punctuation">.</span>exists<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="判断路径类型-文件-目录-软连接" tabindex="-1"><a class="header-anchor" href="#判断路径类型-文件-目录-软连接" aria-hidden="true">#</a> 判断路径类型(文件?目录?软连接)</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> pathlib <span class="token keyword">import</span> Path
path <span class="token operator">=</span> Path<span class="token punctuation">(</span><span class="token string">&#39;/tmp&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;myfile.txt&#39;</span><span class="token punctuation">)</span>
path<span class="token punctuation">.</span>touch<span class="token punctuation">(</span><span class="token punctuation">)</span>
path<span class="token punctuation">.</span>is_file<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># True</span>
path<span class="token punctuation">.</span>is_dir<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># False</span>
path<span class="token punctuation">.</span>is_symlink<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># False</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="获得文件详细信息" tabindex="-1"><a class="header-anchor" href="#获得文件详细信息" aria-hidden="true">#</a> 获得文件详细信息</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> pathlib <span class="token keyword">import</span> Path
path <span class="token operator">=</span> Path<span class="token punctuation">(</span><span class="token string">&#39;/tmp&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;myfile.txt&#39;</span><span class="token punctuation">)</span>
path<span class="token punctuation">.</span>touch<span class="token punctuation">(</span><span class="token punctuation">)</span>
path<span class="token punctuation">.</span>write_text<span class="token punctuation">(</span><span class="token string">&#39;HelloWorld&#39;</span><span class="token punctuation">)</span>
path<span class="token punctuation">.</span>stat<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># os.stat_result(st_mode=33188, st_ino=20705682, st_dev=16777224, st_nlink=1, st_uid=501, st_gid=0, st_size=10, st_atime=1602572294, st_mtime=1602572354, st_ctime=1602572354)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="实践" tabindex="-1"><a class="header-anchor" href="#实践" aria-hidden="true">#</a> 实践</h2><ul><li><p>统计文件数量</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> pathlib <span class="token keyword">import</span> Path
<span class="token keyword">from</span> collections <span class="token keyword">import</span> Counter
Counter<span class="token punctuation">(</span>path<span class="token punctuation">.</span>suffix <span class="token keyword">for</span> path <span class="token keyword">in</span> Path<span class="token punctuation">.</span>cwd<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>iterdir<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># Counter({&#39;.md&#39;: 2, &#39;.txt&#39;: 4, &#39;.pdf&#39;: 2, &#39;.py&#39;: 1})</span>
Counter<span class="token punctuation">(</span>path<span class="token punctuation">.</span>suffix <span class="token keyword">for</span> path <span class="token keyword">in</span> Path<span class="token punctuation">.</span>cwd<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>glob<span class="token punctuation">(</span><span class="token string">&quot;*.p*&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># Counter({&#39;.pdf&#39;: 2, &#39;.py&#39;: 1})</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>路径的树结构</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> pathlib <span class="token keyword">import</span> Path
<span class="token keyword">def</span> <span class="token function">tree</span><span class="token punctuation">(</span>directory<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;+ </span><span class="token interpolation"><span class="token punctuation">{</span>directory<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> path <span class="token keyword">in</span> <span class="token builtin">sorted</span><span class="token punctuation">(</span>directory<span class="token punctuation">.</span>rglob<span class="token punctuation">(</span><span class="token string">&quot;*&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        depth <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span>relative_to<span class="token punctuation">(</span>directory<span class="token punctuation">)</span><span class="token punctuation">.</span>parts<span class="token punctuation">)</span>
        spacer <span class="token operator">=</span> <span class="token string">&quot;    &quot;</span> <span class="token operator">*</span> depth
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>spacer<span class="token punctuation">}</span></span><span class="token string">+ </span><span class="token interpolation"><span class="token punctuation">{</span>path<span class="token punctuation">.</span>name<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>

tree<span class="token punctuation">(</span>Path<span class="token punctuation">.</span>cwd<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
+ /home/gahjelle/realpython
    + directory_1
        + file_a.md
    + directory_2
        + file_a.md
        + file_b.pdf
        + file_c.py
    + file_1.txt
    + file_2.txt
&quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考:</h2>`,36),r={href:"https://realpython.com/python-pathlib/",target:"_blank",rel:"noopener noreferrer"},k=n("li",null,"https://docs.python.org/3/library/pathlib.html",-1),h=n("li",null,"https://myapollo.com.tw/zh-tw/python-pathlib/",-1);function m(v,b){const s=t("ExternalLinkIcon");return e(),p("div",null,[d,n("ul",null,[n("li",null,[n("a",r,[o("python-pathlib"),i(s)])]),k,h])])}const f=a(u,[["render",m],["__file","pathlib.html.vue"]]);export{f as default};
