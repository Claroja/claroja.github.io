import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-MTzDpLgJ.js";const p="/assets/1-oEhFSSSs.png",e={},c=t(`<h1 id="tcp" tabindex="-1"><a class="header-anchor" href="#tcp" aria-hidden="true">#</a> tcp</h1><h2 id="样例1-基本使用" tabindex="-1"><a class="header-anchor" href="#样例1-基本使用" aria-hidden="true">#</a> 样例1-基本使用</h2><h3 id="服务端" tabindex="-1"><a class="header-anchor" href="#服务端" aria-hidden="true">#</a> 服务端</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> socket
server <span class="token operator">=</span> socket<span class="token punctuation">.</span>socket<span class="token punctuation">(</span>socket<span class="token punctuation">.</span>AF_INET<span class="token punctuation">,</span>socket<span class="token punctuation">.</span>SOCK_STREAM<span class="token punctuation">)</span>
server<span class="token punctuation">.</span>bind<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">&#39;localhost&#39;</span><span class="token punctuation">,</span><span class="token number">8000</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 绑定端口</span>
server<span class="token punctuation">.</span>listen<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># 开始监听,既建立连接池</span>
conn<span class="token punctuation">,</span>addr <span class="token operator">=</span> server<span class="token punctuation">.</span>accept<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 取出连接池的连接三次握手</span>
conn<span class="token punctuation">.</span>send<span class="token punctuation">(</span><span class="token string">&#39;您好&#39;</span><span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 处理接收信息</span>
conn<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 四次挥手</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="客户端" tabindex="-1"><a class="header-anchor" href="#客户端" aria-hidden="true">#</a> 客户端</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> socket
client <span class="token operator">=</span> socket<span class="token punctuation">.</span>socket<span class="token punctuation">(</span><span class="token punctuation">)</span>
client<span class="token punctuation">.</span>connect<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">&#39;localhost&#39;</span><span class="token punctuation">,</span><span class="token number">8000</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 三次握手</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>client<span class="token punctuation">.</span>recv<span class="token punctuation">(</span><span class="token number">1024</span><span class="token punctuation">)</span><span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 处理消息</span>
client<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="样例2-listen与accept" tabindex="-1"><a class="header-anchor" href="#样例2-listen与accept" aria-hidden="true">#</a> 样例2 listen与accept</h3><p><code>listen</code>方法开始监听端口,等待客户端连接<code>connect</code>,如果收到客户端连接则放在队列FIFO里.listen参数是队列的长度,最大容纳的连接数?这个还不确定 <code>accept</code>方法从队列里取连接,返回连接对象和地址,使用连接对象来发送消息</p><p>1.服务端建立监听端口,等待链接</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> socket
server <span class="token operator">=</span> socket<span class="token punctuation">.</span>socket<span class="token punctuation">(</span>socket<span class="token punctuation">.</span>AF_INET<span class="token punctuation">,</span>socket<span class="token punctuation">.</span>SOCK_STREAM<span class="token punctuation">)</span>
server<span class="token punctuation">.</span>bind<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">&#39;localhost&#39;</span><span class="token punctuation">,</span><span class="token number">8001</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
server<span class="token punctuation">.</span>listen<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># client.connect((&#39;localhost&#39;,8001))</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.客户端1进行连接</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> socket
client1 <span class="token operator">=</span> socket<span class="token punctuation">.</span>socket<span class="token punctuation">(</span>socket<span class="token punctuation">.</span>AF_INET<span class="token punctuation">,</span>socket<span class="token punctuation">.</span>SOCK_STREAM<span class="token punctuation">)</span>
client1<span class="token punctuation">.</span>connect<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">&#39;localhost&#39;</span><span class="token punctuation">,</span><span class="token number">8001</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.客户端2进行连接</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> socket
client2 <span class="token operator">=</span> socket<span class="token punctuation">.</span>socket<span class="token punctuation">(</span>socket<span class="token punctuation">.</span>AF_INET<span class="token punctuation">,</span>socket<span class="token punctuation">.</span>SOCK_STREAM<span class="token punctuation">)</span>
client2<span class="token punctuation">.</span>connect<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">&#39;localhost&#39;</span><span class="token punctuation">,</span><span class="token number">8001</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4.目前服务器,已经收到两个连接请求,两个请求放在FIFO队列里,使用accept来顺序取出 如果使用accpet后,没有发现有链接存在,则阻塞,一直到有连接为止 conn可以使用send和recv来发送和接收信息,本质上是全双工的管道,一端写,一端读</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>conn1<span class="token punctuation">,</span>addr1 <span class="token operator">=</span> server<span class="token punctuation">.</span>accept<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">#  获得第一个客户端连接,文件描述符fd=1204,端口7192</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>conn1<span class="token punctuation">,</span>addr1<span class="token punctuation">)</span> <span class="token comment"># &lt;socket.socket fd=1204, family=AddressFamily.AF_INET, type=SocketKind.SOCK_STREAM, proto=0, laddr=(&#39;127.0.0.1&#39;, 8001), raddr=(&#39;127.0.0.1&#39;, 7192)&gt; (&#39;127.0.0.1&#39;, 7192)</span>
conn2<span class="token punctuation">,</span>addr2 <span class="token operator">=</span> server<span class="token punctuation">.</span>accept<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">#  获得第二个客户端连接,文件描述符fd=1256,端口7212</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>conn2<span class="token punctuation">,</span>addr2<span class="token punctuation">)</span> <span class="token comment"># &lt;socket.socket fd=1256, family=AddressFamily.AF_INET, type=SocketKind.SOCK_STREAM, proto=0, laddr=(&#39;127.0.0.1&#39;, 8001), raddr=(&#39;127.0.0.1&#39;, 7212)&gt; (&#39;127.0.0.1&#39;, 7212)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="样例3-send-recv" tabindex="-1"><a class="header-anchor" href="#样例3-send-recv" aria-hidden="true">#</a> 样例3 send&amp;recv</h3><p>1.服务端建立监听端口,等待链接</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> socket
server <span class="token operator">=</span> socket<span class="token punctuation">.</span>socket<span class="token punctuation">(</span>socket<span class="token punctuation">.</span>AF_INET<span class="token punctuation">,</span>socket<span class="token punctuation">.</span>SOCK_STREAM<span class="token punctuation">)</span>
server<span class="token punctuation">.</span>bind<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">&#39;localhost&#39;</span><span class="token punctuation">,</span><span class="token number">8001</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
server<span class="token punctuation">.</span>listen<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># client.connect((&#39;localhost&#39;,8001))</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.客户端链接,并发送消息</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> socket
client1 <span class="token operator">=</span> socket<span class="token punctuation">.</span>socket<span class="token punctuation">(</span>socket<span class="token punctuation">.</span>AF_INET<span class="token punctuation">,</span>socket<span class="token punctuation">.</span>SOCK_STREAM<span class="token punctuation">)</span>
client1<span class="token punctuation">.</span>connect<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">&#39;localhost&#39;</span><span class="token punctuation">,</span><span class="token number">8001</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
client1<span class="token punctuation">.</span>send<span class="token punctuation">(</span><span class="token string">&#39;client1-1&#39;</span><span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 向管道里写入,可以多次写入,写入操作不会阻塞</span>
client1<span class="token punctuation">.</span>send<span class="token punctuation">(</span><span class="token string">&#39;client1-2&#39;</span><span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.服务端接收消息</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>conn1<span class="token punctuation">,</span>addr1 <span class="token operator">=</span> server<span class="token punctuation">.</span>accept<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">#  获得第一个客户端连接</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>conn1<span class="token punctuation">,</span>addr1<span class="token punctuation">)</span> <span class="token comment"># &lt;socket.socket fd=1036, family=AddressFamily.AF_INET, type=SocketKind.SOCK_STREAM, proto=0, laddr=(&#39;127.0.0.1&#39;, 8001), raddr=(&#39;127.0.0.1&#39;, 7623)&gt; (&#39;127.0.0.1&#39;, 7623)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>conn1<span class="token punctuation">.</span>recv<span class="token punctuation">(</span><span class="token number">1024</span><span class="token punctuation">)</span><span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># client1-1client1-2 直接受到客户端所有发送的信息(如果没有消息则阻塞)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="tcp-udp区别" tabindex="-1"><a class="header-anchor" href="#tcp-udp区别" aria-hidden="true">#</a> TCP UDP区别</h2><figure><img src="`+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',25),o=[c];function i(l,u){return s(),a("div",null,o)}const r=n(e,[["render",i],["__file","tcp.html.vue"]]);export{r as default};
