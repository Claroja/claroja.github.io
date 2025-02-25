import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as s,a as e}from"./app-7knaTE3M.js";const t={},p=e(`<h1 id="blob" tabindex="-1"><a class="header-anchor" href="#blob" aria-hidden="true">#</a> blob</h1><p><code>Blob</code>(Binary Large Object).将二进制数据存储为一个单一个体的集合。Blob 通常是影像、声音或多媒体文件。在 JavaScript 中 Blob 类型的对象表示不可变的类似文件对象的原始数据。 <code>Blob</code> 由一个可选的字符串 <code>type</code>（通常是 MIME 类型）和 <code>blobParts</code> 组成.</p><p>语法:<code>var newBlob = new Blob(array, options);</code> 参数: <code>blobParts</code> 是 Blob/BufferSource/String 类型的值的数组。 <code>options</code> 可选对象：</p><ul><li><code>type</code> —— Blob 类型，通常是 MIME 类型，例如 image/png，</li><li><code>endings</code> —— 是否转换换行符，使 Blob 对应于当前操作系统的换行符（\\r\\n 或 \\n）。默认为 &quot;transparent&quot;（啥也不做），不过也可以是 &quot;native&quot;（转换）。</li></ul><p>例子: 从<code>text/html</code>字符串中读取</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> htmlFragment <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;&lt;a id=&quot;a&quot;&gt;&lt;b id=&quot;b&quot;&gt;hey!&lt;/b&gt;&lt;/a&gt;&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> myBlob <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Blob</span><span class="token punctuation">(</span>htmlFragment<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">type</span> <span class="token operator">:</span> <span class="token string">&#39;text/html&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>从<code>application/json</code>字符串中读取</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">hello</span><span class="token operator">:</span> <span class="token string">&#39;world&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> blob <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Blob</span><span class="token punctuation">(</span><span class="token punctuation">[</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">type</span> <span class="token operator">:</span> <span class="token string">&#39;application/json&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>从<code>text/plain</code>字符串中读取</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> blob <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Blob</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;Hello, world!&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;text/plain&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>从<code>typed array</code>类型化数组读取</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> hello <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Uint8Array</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">72</span><span class="token punctuation">,</span> <span class="token number">101</span><span class="token punctuation">,</span> <span class="token number">108</span><span class="token punctuation">,</span> <span class="token number">108</span><span class="token punctuation">,</span> <span class="token number">111</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 二进制格式的 &quot;hello&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2><p>Blob.size|字节数 Blob.type|MIME类型</p><h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h2><p>Blob.slice()| Blob.stream()| Blob.text()| Blob.arrayBuffer()|</p><h2 id="应用" tabindex="-1"><a class="header-anchor" href="#应用" aria-hidden="true">#</a> 应用</h2><h3 id="读取用户上传图片" tabindex="-1"><a class="header-anchor" href="#读取用户上传图片" aria-hidden="true">#</a> 读取用户上传图片</h3><p>文件选择器<code>&lt;input type=&quot;file&quot;&gt;</code>用来让用户选取文件。出于安全考虑，浏览器不允许脚本自行设置这个控件的value属性，即文件必须是用户手动选取的，不能是脚本指定的。 文件选择器返回一个 FileList 对象，该对象是一个类似数组的成员，每个成员都是一个 File 实例对象。File 实例对象是一个特殊的 Blob 实例，增加了name和lastModifiedDate属性。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// HTML 代码如下</span>
<span class="token comment">// &lt;input type=&quot;file&quot; onchange=&quot;readfile(this.files[0])&quot;&gt;&lt;/input&gt;</span>
<span class="token comment">// &lt;pre id=&quot;output&quot;&gt;&lt;/pre&gt;</span>
<span class="token keyword">function</span> <span class="token function">readfile</span><span class="token punctuation">(</span><span class="token parameter">f</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> reader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileReader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    reader<span class="token punctuation">.</span><span class="token function">readAsText</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span><span class="token punctuation">;</span>
    reader<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> text <span class="token operator">=</span> reader<span class="token punctuation">.</span>result<span class="token punctuation">;</span>
        <span class="token keyword">var</span> out <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;output&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        out<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
        out<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">createTextNode</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    reader<span class="token punctuation">.</span><span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Error&#39;</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// HTML 代码如下</span>
<span class="token comment">// &lt;input type=&quot;file&quot; onchange=&quot;typefile(this.files[0])&quot;&gt;&lt;/input&gt;</span>
<span class="token keyword">function</span> <span class="token function">typefile</span><span class="token punctuation">(</span><span class="token parameter">file</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 文件开头的四个字节，生成一个 Blob 对象</span>
  <span class="token keyword">var</span> slice <span class="token operator">=</span> file<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> reader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileReader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 读取这四个字节</span>
  reader<span class="token punctuation">.</span><span class="token function">readAsArrayBuffer</span><span class="token punctuation">(</span>slice<span class="token punctuation">)</span><span class="token punctuation">;</span>
  reader<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> buffer <span class="token operator">=</span> reader<span class="token punctuation">.</span>result<span class="token punctuation">;</span>
    <span class="token comment">// 将这四个字节的内容，视作一个32位整数</span>
    <span class="token keyword">var</span> view <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DataView</span><span class="token punctuation">(</span>buffer<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> magic <span class="token operator">=</span> view<span class="token punctuation">.</span><span class="token function">getUint32</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 根据文件的前四个字节，判断它的类型</span>
    <span class="token keyword">switch</span><span class="token punctuation">(</span>magic<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">case</span> <span class="token number">0x89504E47</span><span class="token operator">:</span> file<span class="token punctuation">.</span>verified_type <span class="token operator">=</span> <span class="token string">&#39;image/png&#39;</span><span class="token punctuation">;</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
      <span class="token keyword">case</span> <span class="token number">0x47494638</span><span class="token operator">:</span> file<span class="token punctuation">.</span>verified_type <span class="token operator">=</span> <span class="token string">&#39;image/gif&#39;</span><span class="token punctuation">;</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
      <span class="token keyword">case</span> <span class="token number">0x25504446</span><span class="token operator">:</span> file<span class="token punctuation">.</span>verified_type <span class="token operator">=</span> <span class="token string">&#39;application/pdf&#39;</span><span class="token punctuation">;</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
      <span class="token keyword">case</span> <span class="token number">0x504b0304</span><span class="token operator">:</span> file<span class="token punctuation">.</span>verified_type <span class="token operator">=</span> <span class="token string">&#39;application/zip&#39;</span><span class="token punctuation">;</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>file<span class="token punctuation">.</span>name<span class="token punctuation">,</span> file<span class="token punctuation">.</span>verified_type<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="blob-与-arraybuffer-的区别" tabindex="-1"><a class="header-anchor" href="#blob-与-arraybuffer-的区别" aria-hidden="true">#</a> Blob 与 ArrayBuffer 的区别</h2><p><code>ArrayBuffer</code> 对象用于表示通用的，固定长度的原始二进制数据缓冲区。你不能直接操纵 ArrayBuffer 的内容，而是需要创建一个类型化数组对象或 DataView 对象，该对象以特定格式表示缓冲区，并使用该对象读取和写入缓冲区的内容。 <code>Blob</code> 类型的对象表示不可变的类似文件对象的原始数据。Blob 表示的不一定是 JavaScript 原生格式的数据。File 接口基于 Blob，继承了Blob 功能并将其扩展为支持用户系统上的文件。</p><p>二者区别:</p><ul><li>除非你需要使用 ArrayBuffer 提供的写入/编辑的能力，否则 Blob 格式可能是最好的。</li><li>Blob 对象是不可变的，而 ArrayBuffer 是可以通过 TypedArrays 或 DataView 来操作。</li><li>ArrayBuffer 是存在内存中的，可以直接操作。而 Blob 可以位于磁盘、高速缓存内存和其他不可用的位置。</li><li>虽然 Blob 可以直接作为参数传递给其他函数，比如 window.URL.createObjectURL()。但是，你可能仍需要 FileReader 之类的 File API 才能与 Blob 一起使用。</li><li>Blob 与 ArrayBuffer 对象之间是可以相互转化的：</li></ul><p>二者转换: 使用 FileReader 的 readAsArrayBuffer() 方法，可以把 Blob 对象转换为 ArrayBuffer 对象； 使用 Blob 构造函数，如 new Blob([new Uint8Array(data]);，可以把 ArrayBuffer 对象转换为 Blob 对象。</p><p>参考: https://developer.mozilla.org/en-US/docs/Web/API/Blob/ https://wangdoc.com/javascript/bom/arraybuffer.html https://segmentfault.com/a/1190000022812794</p>`,27),o=[p];function c(l,i){return a(),s("div",null,o)}const k=n(t,[["render",c],["__file","blob.html.vue"]]);export{k as default};
