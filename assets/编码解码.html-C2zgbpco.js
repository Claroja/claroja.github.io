import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e}from"./app-SnI5rGHA.js";const t={},p=e(`<h1 id="编码解码" tabindex="-1"><a class="header-anchor" href="#编码解码" aria-hidden="true">#</a> 编码解码</h1><p>那么什么是文本文件，什么是二进制文件呢？ 从文件编码的方式来看，文件可分为ASCII码文件和二进制码文件两种.</p><ol><li>文本文件 ASCII编码文件是文本文件的一种，这种文件在磁盘中存放时每个字符对应一个字节，用于存放对应的ASCII码。例如，文本中(字符串)的5678共占用4个字节, 存储形式为：<br> 编码|1|2|3|4 --|--|--|-- ASC码|00110101|00110110|00110111|00111000<br> 十进制码|5|6|7|8</li><li>二进制文件 二进制文件是按二进制的编码方式来存放文件的。例如，数5678的存储形式为：00010110 00101110只占二个字节。二进制文件虽然也可在文本中打开，但内容会经过解码(ascii码表), 这里如果用文本打开, 就变成了, &quot;SYN&quot;(00010110), &quot;.&quot;(00101110), 最终的结果是<code>.</code>。</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&quot;./test.txt&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;wb&quot;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
    a<span class="token operator">=</span><span class="token number">5678</span>
    f<span class="token punctuation">.</span>write<span class="token punctuation">(</span>a<span class="token punctuation">.</span>to_bytes<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token string">&#39;big&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>具体来说: bytes只负责以字节序列的形式（二进制形式）来存储数据，至于这些数据到底表示什么内容（字符串，数字，图片，音频等），完全由程序的解析方式决定，如果采用合适的字符编码方式（字符集），字节串可以恢复成字符串，反之亦然，字符串也可以转换成字节串。</p><ol><li>处理文本文件 <ol><li>复制, 最佳选择是二进制模式, 也可以选择文本模式</li><li>需转化为字符串, 处理文本内容时, 选择文本模式</li></ol></li><li>图片 使用二进制处理, 相应的工具也是使用二进制转化, 然后根据协议进行转码</li><li>音频 同图片</li><li>视频 同图片</li></ol><p>不同语言: C语言中, 使用<code>fopen()</code>来处理, 默认是文本模式, <code>b</code>是二进制模式. 文本模式默认是ascii编码, 不能处理GBK和UTF编码, 需要自己通过<code>b</code>模式来根据编码规则处理 python中, 使用<code>open()</code>来处理, 默认是文本模式, <code>b</code>是二进制模式. 文本模式可以使用<code>encoding</code>参数来指定具体编码, 比如GBK, UTF等</p><h2 id="unicode" tabindex="-1"><a class="header-anchor" href="#unicode" aria-hidden="true">#</a> unicode</h2><p>它为每种语言中的每个字符设定了统一并且唯一的二进制编码，以满足跨语言、跨平台进行文本转换、处理的要求。1990年开始研发，1994年正式公布。Unicode编码系统可分为编码方式和实现方式两个层次。</p><ol><li>编码方式 Unicode的编码方式使用16位的编码空间，也就是每个字符占用2个字节。Unicode共有2^16即65536个编码，其中有近39000种已被定义完成，而中国字就占了21000种 ！</li><li>实现方式 Unicode的实现方式不同于编码方式。一个字符的Unicode编码是确定的。但是在实际传输过程中，由于不同系统平台的设计不一定一致，以及出于节省空间的目的，对Unicode编码的实现方式有所不同。Unicode的实现方式称为Unicode转换格式（Unicode Translation Format，简称为UTF）。</li></ol><p>参考: https://home.unicode.org/#</p><h2 id="python" tabindex="-1"><a class="header-anchor" href="#python" aria-hidden="true">#</a> python</h2><ol><li>文本字符全部用 str 类型表示，str 能表示 Unicode 字符集中所有字符,而二进制字节数据用 bytes 来表示。</li><li>内存里以Unicode编码（Python3 str类型）存在，不论是网络传输还是保存到硬盘上，本机脱离了内存空间，就必须转换为字节型（Python3 bytes类型））</li><li>Python3中，在字符引号前加‘b’，明确表示这是一个 bytes 类型的对象，实际上它就是一组二进制字节序列组成的数据，每一个元素是ASCII范围内的字符和其它十六进制形式的字符数据，但不能用中文等非ASCII字符表示。</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">128</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    b <span class="token operator">=</span> i<span class="token punctuation">.</span>to_bytes<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token string">&#39;big&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span><span class="token builtin">hex</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到<code>b&#39;\\t&#39; 0x9</code>, <code>b&#39;\\n&#39; 0xa</code>, <code>b&#39;\\r&#39; 0xd</code>以及<code>b&#39; &#39; 0x20</code> ~<code>b&#39;~&#39; 0x7e</code>的字节码, python中都是用ascii的字符来表示的(觉得这不是一个好的设计, 很容易让人看懵), 其他则是以16进制的单字节来表示的.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">b&#39;~&#39;</span><span class="token punctuation">,</span> <span class="token string">b&#39;\\x7e&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># 两种表示同一个字节, python使用前者显示</span>
<span class="token comment">## b&#39;~&#39; b&#39;~&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>注意<code>0x7e</code>是十六进制的字符串表示, <code>b&#39;\\x7e&#39;</code>是十六进制的字节表示.</p><p>字节码只能用十六进制或ascii码表示, 不能使用除此之外的其他字符来表示.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token string">b&#39;王&#39;</span>
<span class="token comment">##   File &quot;&lt;stdin&gt;&quot;, line 1</span>
<span class="token comment">##     b&#39;王&#39;</span>
<span class="token comment">##         ^</span>
<span class="token comment">## SyntaxError: bytes can only contain ASCII literal characters</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="类型转换" tabindex="-1"><a class="header-anchor" href="#类型转换" aria-hidden="true">#</a> 类型转换</h2><h3 id="数字与字节间的转换" tabindex="-1"><a class="header-anchor" href="#数字与字节间的转换" aria-hidden="true">#</a> 数字与字节间的转换</h3><ol><li>数字转字节</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token builtin">int</span><span class="token punctuation">.</span>to_bytes<span class="token punctuation">(</span><span class="token number">65535</span><span class="token punctuation">,</span> length<span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span> byteorder<span class="token operator">=</span><span class="token string">&#39;big&#39;</span><span class="token punctuation">,</span> signed<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>self</code>: 表示具体的数值 <code>length</code>: 指定用几个字节存储, 字节容量必须大于要转换的数值 <code>byteorder</code>: 大端还是小端 <code>signed</code>: 是否有符号</p><ol start="2"><li>字节转数字</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token builtin">int</span><span class="token punctuation">.</span>from_bytes<span class="token punctuation">(</span><span class="token string">b&#39;\\xFF\\xFF&#39;</span><span class="token punctuation">,</span> byteorder<span class="token operator">=</span><span class="token string">&#39;big&#39;</span><span class="token punctuation">,</span> signed<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>另外还有数组转换方法, 可以将bytes数组中的某个元素转换成int类型</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token string">b&#39;a&#39;</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token comment"># 97</span>
<span class="token string">b&#39;abc&#39;</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token comment"># 97</span>
<span class="token string">b&#39;\\x61bc&#39;</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token comment"># 97</span>
<span class="token builtin">list</span><span class="token punctuation">(</span><span class="token string">b&#39;abc&#39;</span><span class="token punctuation">)</span> <span class="token comment"># [97, 98, 99]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字符串与字节间的转换" tabindex="-1"><a class="header-anchor" href="#字符串与字节间的转换" aria-hidden="true">#</a> 字符串与字节间的转换</h3><p>encode：将str转换为bytes，是一个编码的过程；decode：将bytes转换为str，是一个解码的过程 Python3默认编码为<code>UTF-8</code>, 可以通过<code>sys.getdefaultencoding()</code>查看, 所以在调用<code>encode()</code>和<code>decode()</code>的默认编码格式都是<code>utf8</code></p><ol><li>字符串转字节</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token string">&#39;abc&#39;</span><span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># b&#39;abc&#39; 实际上是b&#39;\\x61\\x62\\x63&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>字节转字符串</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token string">b&#39;abc&#39;</span><span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># &#39;abc&#39;</span>
<span class="token string">b&#39;\\x61\\x62\\x63&#39;</span><span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># &#39;abc&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="bytearray" tabindex="-1"><a class="header-anchor" href="#bytearray" aria-hidden="true">#</a> bytearray</h3><p>bytearray和bytes不一样的地方在于，bytearray是可变的。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>byte <span class="token operator">=</span> <span class="token builtin">bytes</span><span class="token punctuation">(</span><span class="token string">&#39;人生苦短，我用Python!&#39;</span><span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 生成bytes对象</span>
<span class="token builtin">type</span><span class="token punctuation">(</span>byte<span class="token punctuation">)</span>  <span class="token comment"># &lt;class &#39;bytes&#39;&gt;</span>
<span class="token builtin">len</span><span class="token punctuation">(</span>byte<span class="token punctuation">)</span>  <span class="token comment"># 28</span>
byte_array <span class="token operator">=</span> <span class="token builtin">bytearray</span><span class="token punctuation">(</span><span class="token string">&#39;人生苦短，我用Python!&#39;</span><span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 生成Bytearray对象</span>
<span class="token builtin">type</span><span class="token punctuation">(</span>byte_array<span class="token punctuation">)</span>  <span class="token comment"># &lt;class &#39;bytearray&#39;&gt;</span>
<span class="token builtin">len</span><span class="token punctuation">(</span>byte_array<span class="token punctuation">)</span>  <span class="token comment"># 28</span>

byte_array<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token builtin">bytearray</span><span class="token punctuation">(</span><span class="token string">&#39;狗&#39;</span><span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 将第一个字符&quot;人&quot;对应的字节码(3个)替换成&quot;狗&quot;的字节码</span>
byte_array<span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># &#39;狗生苦短，我用Python!&#39;</span>

byte<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token builtin">bytes</span><span class="token punctuation">(</span><span class="token string">&#39;狗&#39;</span><span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 报错 TypeError: &#39;bytes&#39; object does not support item assignment</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="python解码图片" tabindex="-1"><a class="header-anchor" href="#python解码图片" aria-hidden="true">#</a> python解码图片</h3><p>https://yasoob.me/posts/understanding-and-writing-jpeg-decoder-in-python/#file-start-file-end</p><p>参考: https://python-forum.io/thread-21488.html https://python-forum.io/thread-32636.html</p>`,40),o=[p];function c(i,l){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","编码解码.html.vue"]]);export{r as default};
