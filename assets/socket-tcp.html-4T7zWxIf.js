import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e}from"./app-M6UUlHgF.js";const t={},p=e(`<h1 id="socket-tcp" tabindex="-1"><a class="header-anchor" href="#socket-tcp" aria-hidden="true">#</a> socket-tcp</h1><h2 id="tcp" tabindex="-1"><a class="header-anchor" href="#tcp" aria-hidden="true">#</a> TCP</h2><p>udp通信模型中， 在通信开始之前， 不需要建⽴相关的链接， 只需要发送数据即可， 类似于⽣活中， &quot;写信&quot;&quot; udp通信模型中， 在通信开始之前， ⼀定要先建⽴相关的链接， 才能发送数据， 类似于⽣活中， &quot;打电话&quot;&quot;</p><p>如果想要完成⼀个tcp服务器的功能， 需要的流程如下：</p><ol><li>socket创建⼀个套接字</li><li>bind绑定ip和port</li><li>listen使套接字变为可以被动链接</li><li>accept等待客户端的链接</li><li>recv/send接收发送数据</li></ol><h3 id="tcp服务器" tabindex="-1"><a class="header-anchor" href="#tcp服务器" aria-hidden="true">#</a> tcp服务器</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#coding=utf-8</span>
<span class="token keyword">from</span> socket <span class="token keyword">import</span> <span class="token operator">*</span>
<span class="token comment">## 创建socket</span>
tcpSerSocket <span class="token operator">=</span> socket<span class="token punctuation">(</span>AF_INET<span class="token punctuation">,</span> SOCK_STREAM<span class="token punctuation">)</span>
<span class="token comment">## 绑定本地信息</span>
address <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token number">7788</span><span class="token punctuation">)</span>
tcpSerSocket<span class="token punctuation">.</span>bind<span class="token punctuation">(</span>address<span class="token punctuation">)</span>
<span class="token comment">## 使⽤socket创建的套接字默认的属性是主动的， 使⽤listen将其变为被动的， 这样就可以接收</span>
tcpSerSocket<span class="token punctuation">.</span>listen<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
<span class="token comment">## 如果有新的客户端来链接服务器， 那么就产⽣⼀个新的套接字专⻔为这个客户端服务器</span>
<span class="token comment">## newSocket⽤来为这个客户端服务</span>
<span class="token comment">## tcpSerSocket就可以省下来专⻔等待其他新客户端的链接</span>
newSocket<span class="token punctuation">,</span> clientAddr <span class="token operator">=</span> tcpSerSocket<span class="token punctuation">.</span>accept<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">## 接收对⽅发送过来的数据， 最⼤接收1024个字节</span>
recvData <span class="token operator">=</span> newSocket<span class="token punctuation">.</span>recv<span class="token punctuation">(</span><span class="token number">1024</span><span class="token punctuation">)</span>
<span class="token keyword">print</span> <span class="token string">&#39;接收到的数据为:&#39;</span><span class="token punctuation">,</span>recvData
<span class="token comment">## 发送⼀些数据到客户端</span>
newSocket<span class="token punctuation">.</span>send<span class="token punctuation">(</span><span class="token string">&quot;thank you !&quot;</span><span class="token punctuation">)</span>
<span class="token comment">## 关闭为这个客户端服务的套接字， 只要关闭了， 就意味着为不能再为这个客户端服务了， 如果还</span>
newSocket<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">## 关闭监听套接字， 只要这个套接字关闭了， 就意味着整个程序不能再接收任何新的客户端的连接</span>
tcpSerSocket<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="tcp客户端" tabindex="-1"><a class="header-anchor" href="#tcp客户端" aria-hidden="true">#</a> tcp客户端</h3><p>tcp的客户端要⽐服务器端简单很多， 如果说服务器端是需要⾃⼰买⼿机、 查⼿机卡、 设置铃声、 等待别⼈打电话流程的话， 那么客户端就只需要找⼀个电话亭， 拿起电话拨打即可， 流程要少很多</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#coding=utf-8</span>
<span class="token keyword">from</span> socket <span class="token keyword">import</span> <span class="token operator">*</span>
<span class="token comment">## 创建socket</span>
tcpClientSocket <span class="token operator">=</span> socket<span class="token punctuation">(</span>AF_INET<span class="token punctuation">,</span> SOCK_STREAM<span class="token punctuation">)</span>
<span class="token comment">## 链接服务器</span>
serAddr <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">&#39;192.168.1.102&#39;</span><span class="token punctuation">,</span> <span class="token number">7788</span><span class="token punctuation">)</span>
tcpClientSocket<span class="token punctuation">.</span>connect<span class="token punctuation">(</span>serAddr<span class="token punctuation">)</span>
<span class="token comment">## 提示⽤户输⼊数据</span>
sendData <span class="token operator">=</span> <span class="token builtin">raw_input</span><span class="token punctuation">(</span><span class="token string">&quot;请输⼊要发送的数据： &quot;</span><span class="token punctuation">)</span>
tcpClientSocket<span class="token punctuation">.</span>send<span class="token punctuation">(</span>sendData<span class="token punctuation">)</span>
<span class="token comment">## 接收对⽅发送过来的数据， 最⼤接收1024个字节</span>
recvData <span class="token operator">=</span> tcpClientSocket<span class="token punctuation">.</span>recv<span class="token punctuation">(</span><span class="token number">1024</span><span class="token punctuation">)</span>
<span class="token keyword">print</span> <span class="token string">&#39;接收到的数据为:&#39;</span><span class="token punctuation">,</span>recvData
<span class="token comment">## 关闭套接字</span>
tcpClientSocket<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="tcp模拟qq聊天" tabindex="-1"><a class="header-anchor" href="#tcp模拟qq聊天" aria-hidden="true">#</a> TCP模拟QQ聊天</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#coding=utf-8</span>
<span class="token keyword">from</span> socket <span class="token keyword">import</span> <span class="token operator">*</span>
<span class="token comment">## 创建socket</span>
tcpSerSocket <span class="token operator">=</span> socket<span class="token punctuation">(</span>AF_INET<span class="token punctuation">,</span> SOCK_STREAM<span class="token punctuation">)</span>
<span class="token comment">## 绑定本地信息</span>
address <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token number">7788</span><span class="token punctuation">)</span>
tcpSerSocket<span class="token punctuation">.</span>bind<span class="token punctuation">(</span>address<span class="token punctuation">)</span>
<span class="token comment">## 使⽤socket创建的套接字默认的属性是主动的， 使⽤listen将其变为被动的， 这样就可以接收</span>
tcpSerSocket<span class="token punctuation">.</span>listen<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
<span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
    <span class="token comment"># 如果有新的客户端来链接服务器， 那么就产⽣⼀个信⼼的套接字专⻔为这个客户端服务器</span>
    <span class="token comment"># newSocket⽤来为这个客户端服务</span>
    <span class="token comment"># tcpSerSocket就可以省下来专⻔等待其他新客户端的链接</span>
    newSocket<span class="token punctuation">,</span> clientAddr <span class="token operator">=</span> tcpSerSocket<span class="token punctuation">.</span>accept<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
        <span class="token comment"># 接收对⽅发送过来的数据， 最⼤接收1024个字节</span>
        recvData <span class="token operator">=</span> newSocket<span class="token punctuation">.</span>recv<span class="token punctuation">(</span><span class="token number">1024</span><span class="token punctuation">)</span>
        <span class="token comment"># 如果接收的数据的⻓度为0， 则意味着客户端关闭了链接</span>
        <span class="token keyword">if</span> <span class="token builtin">len</span><span class="token punctuation">(</span>recvData<span class="token punctuation">)</span><span class="token operator">&gt;</span><span class="token number">0</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span> <span class="token string">&#39;recv:&#39;</span><span class="token punctuation">,</span>recvData
        <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">break</span>
        <span class="token comment"># 发送⼀些数据到客户端</span>
        sendData <span class="token operator">=</span> <span class="token builtin">raw_input</span><span class="token punctuation">(</span><span class="token string">&quot;send:&quot;</span><span class="token punctuation">)</span>
        newSocket<span class="token punctuation">.</span>send<span class="token punctuation">(</span>sendData<span class="token punctuation">)</span>
        <span class="token comment"># 关闭为这个客户端服务的套接字， 只要关闭了， 就意味着为不能再为这个客户端服务了， 如</span>
    newSocket<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">## 关闭监听套接字， 只要这个套接字关闭了， 就意味着整个程序不能再接收任何新的客户端的连接</span>
tcpSerSocket<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),c=[p];function o(i,l){return s(),a("div",null,c)}const r=n(t,[["render",o],["__file","socket-tcp.html.vue"]]);export{r as default};
