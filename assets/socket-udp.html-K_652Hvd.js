import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-yeyEmHfz.js";const p={},e=t(`<h1 id="socket-udp" tabindex="-1"><a class="header-anchor" href="#socket-udp" aria-hidden="true">#</a> socket-udp</h1><h2 id="udp介绍" tabindex="-1"><a class="header-anchor" href="#udp介绍" aria-hidden="true">#</a> UDP介绍</h2><p>UDP --- ⽤户数据报协议， 是⼀个⽆连接的简单的⾯向数据报的运输层协议。 UDP不提供可靠性， 它只是把应⽤程序传给IP层的数据报发送出去， 但是并不能保证它们能到达⽬ 的地。 由于UDP在传输数据报前不⽤在客户和服务器之间建⽴⼀个连接， 且没有超时重发等机制， 故⽽传输速度很快。 UDP是⼀种⾯向⽆连接的协议， 每个数据报都是⼀个独⽴的信息， 包括完整源地址或⽬ 的地址， 它在⽹络上以任何可能的路径传往⽬ 的地， 因此能否到达⽬ 的地， 到达⽬ 的地的时间以及内容的正确性都是不能被保证的。</p><h3 id="特点" tabindex="-1"><a class="header-anchor" href="#特点" aria-hidden="true">#</a> 特点</h3><p>UDP是⾯向⽆连接的通讯协议， UDP数据包括⽬ 的端⼝号和源端⼝号信息，由于通讯不需要连接， 所以可以实现⼴播发送。 UDP传输数据时有⼤⼩限制， 每个被传输的数据报必须限定在64KB之内。 UDP是⼀个不可靠的协议， 发送⽅所发送的数据报并不⼀定以相同的次序到达接收⽅。</p><h3 id="适用情况" tabindex="-1"><a class="header-anchor" href="#适用情况" aria-hidden="true">#</a> 适⽤情况</h3><p>UDP操作简单， ⽽且仅需要较少的监护， 因此通常⽤于局域⽹⾼可靠性的分散系统中client/server应⽤程序。 例如视频会议系统， 并不要求⾳频视频数据绝对的正确， 只要保证连贯性就可以了， 这种情况下显然使⽤UDP会更合理⼀些。</p><ul><li>语⾳⼴播</li><li>视频</li><li>QQ</li><li>TFTP(简单⽂件传送）</li><li>SNMP（简单⽹络管理协议）</li><li>RIP（路由信息协议， 如报告股票市场， 航空信息）</li><li>DNS(域名解释）</li></ul><h3 id="udp网络程序-发送数据" tabindex="-1"><a class="header-anchor" href="#udp网络程序-发送数据" aria-hidden="true">#</a> udp⽹络程序-发送数据</h3><p>创建⼀个udp客户端程序的流程是简单， 具体步骤如下：</p><ol><li>创建客户端套接字</li><li>发送/接收数据</li><li>关闭套接字</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> socket <span class="token keyword">import</span> <span class="token operator">*</span>
<span class="token comment">#1. 创建套接字</span>
udpSocket <span class="token operator">=</span> socket<span class="token punctuation">(</span>AF_INET<span class="token punctuation">,</span> SOCK_DGRAM<span class="token punctuation">)</span>
<span class="token comment">#2. 准备接收⽅的地址</span>
sendAddr <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">&#39;192.168.1.103&#39;</span><span class="token punctuation">,</span> <span class="token number">8080</span><span class="token punctuation">)</span>
<span class="token comment">#3. 从键盘获取数据</span>
sendData <span class="token operator">=</span> <span class="token builtin">raw_input</span><span class="token punctuation">(</span><span class="token string">&quot;请输⼊要发送的数据:&quot;</span><span class="token punctuation">)</span>
<span class="token comment">#4. 发送数据到指定的电脑上</span>
udpSocket<span class="token punctuation">.</span>sendto<span class="token punctuation">(</span>sendData<span class="token punctuation">,</span> sendAddr<span class="token punctuation">)</span>
<span class="token comment">#5. 关闭套接字</span>
udpSocket<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建udp网络程序-接收数据" tabindex="-1"><a class="header-anchor" href="#创建udp网络程序-接收数据" aria-hidden="true">#</a> 创建udp⽹络程序-接收数据</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#coding=utf-8</span>
<span class="token keyword">from</span> socket <span class="token keyword">import</span> <span class="token operator">*</span>
<span class="token comment">#1. 创建套接字</span>
udpSocket <span class="token operator">=</span> socket<span class="token punctuation">(</span>AF_INET<span class="token punctuation">,</span> SOCK_DGRAM<span class="token punctuation">)</span>
<span class="token comment">#2. 准备接收⽅的地址</span>
sendAddr <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">&#39;192.168.1.103&#39;</span><span class="token punctuation">,</span> <span class="token number">8080</span><span class="token punctuation">)</span>
<span class="token comment">#3. 从键盘获取数据</span>
sendData <span class="token operator">=</span> <span class="token builtin">raw_input</span><span class="token punctuation">(</span><span class="token string">&quot;请输⼊要发送的数据:&quot;</span><span class="token punctuation">)</span>
<span class="token comment">#4. 发送数据到指定的电脑上</span>
udpSocket<span class="token punctuation">.</span>sendto<span class="token punctuation">(</span>sendData<span class="token punctuation">,</span> sendAddr<span class="token punctuation">)</span>
<span class="token comment">#5. 等待接收对⽅发送的数据</span>
recvData <span class="token operator">=</span> udpSocket<span class="token punctuation">.</span>recvfrom<span class="token punctuation">(</span><span class="token number">1024</span><span class="token punctuation">)</span> <span class="token comment"># 1024表示本次接收的最⼤字节数</span>
<span class="token comment">#6. 显示对⽅发送的数据</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>recvData<span class="token punctuation">)</span>
<span class="token comment">#7. 关闭套接字</span>
udpSocket<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="udp网络程序-端口问题" tabindex="-1"><a class="header-anchor" href="#udp网络程序-端口问题" aria-hidden="true">#</a> udp⽹络程序-端⼝问题</h3><p>⽹络程序在运⾏的过程中， IP+Port就唯⼀标识这个程序，所以如果其他电脑上的⽹络程序如果想要向此程序发送数据， 那么就需要向这个数字（即端⼝） 标识的程序发送即可</p><p>⼀个udp⽹络程序， 可以不绑定， 此时操作系统会随机进⾏分配⼀个端⼝， 如果重新运⾏次程序端⼝可能会发⽣变化 ⼀个udp⽹络程序， 也可以绑定信息（ip地址， 端⼝号） ， 如果绑定成功， 那么操作系统⽤这个端⼝号来进⾏区别收到的⽹络数据是否是此进程的</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#coding=utf-8</span>
<span class="token keyword">from</span> socket <span class="token keyword">import</span> <span class="token operator">*</span>
<span class="token comment">#1. 创建套接字</span>
udpSocket <span class="token operator">=</span> socket<span class="token punctuation">(</span>AF_INET<span class="token punctuation">,</span> SOCK_DGRAM<span class="token punctuation">)</span>
<span class="token comment">#2. 绑定本地的相关信息， 如果⼀个⽹络程序不绑定， 则系统会随机分配</span>
bindAddr <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token number">7788</span><span class="token punctuation">)</span> <span class="token comment"># ip地址和端⼝号， ip⼀般不⽤写， 表示本机的任何⼀个ip</span>
udpSocket<span class="token punctuation">.</span>bind<span class="token punctuation">(</span>bindAddr<span class="token punctuation">)</span>
<span class="token comment">#3. 等待接收对⽅发送的数据</span>
recvData <span class="token operator">=</span> udpSocket<span class="token punctuation">.</span>recvfrom<span class="token punctuation">(</span><span class="token number">1024</span><span class="token punctuation">)</span> <span class="token comment"># 1024表示本次接收的最⼤字节数</span>
<span class="token comment">#4. 显示接收到的数据</span>
<span class="token keyword">print</span> recvData
<span class="token comment">#5. 关闭套接字</span>
udpSocket<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="udp网络通信过程" tabindex="-1"><a class="header-anchor" href="#udp网络通信过程" aria-hidden="true">#</a> udp⽹络通信过程</h3><p><a href="./socket-udp/2.png"></a></p><h3 id="简单聊天室" tabindex="-1"><a class="header-anchor" href="#简单聊天室" aria-hidden="true">#</a> 简单聊天室</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> socket <span class="token keyword">import</span> <span class="token operator">*</span>

<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    udpSocket <span class="token operator">=</span> socket<span class="token punctuation">(</span>AF_INET<span class="token punctuation">,</span> SOCK_DGRAM<span class="token punctuation">)</span>

    udpSocket<span class="token punctuation">.</span>bind<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token number">6789</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token comment">#收，打印</span>
    <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
        recvInfor <span class="token operator">=</span> udpSocket<span class="token punctuation">.</span>recvfrom<span class="token punctuation">(</span><span class="token number">1024</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;[%s]:%s&quot;</span><span class="token operator">%</span><span class="token punctuation">(</span><span class="token builtin">str</span><span class="token punctuation">(</span>recvInfor<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> recvInfor<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token string">&quot;gb2312&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
    main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实现qq" tabindex="-1"><a class="header-anchor" href="#实现qq" aria-hidden="true">#</a> 实现QQ</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> threading <span class="token keyword">import</span> Thread
<span class="token keyword">from</span> socket <span class="token keyword">import</span> <span class="token operator">*</span>

<span class="token comment">#1. 收数据，然后打印</span>
<span class="token keyword">def</span> <span class="token function">recvData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
        recvInfo <span class="token operator">=</span> udpSocket<span class="token punctuation">.</span>recvfrom<span class="token punctuation">(</span><span class="token number">1024</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;&gt;&gt;%s:%s&quot;</span><span class="token operator">%</span><span class="token punctuation">(</span><span class="token builtin">str</span><span class="token punctuation">(</span>recvInfo<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> recvInfo<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">#2. 检测键盘，发数据</span>
<span class="token keyword">def</span> <span class="token function">sendData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
        sendInfo <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;&lt;&quot;</span><span class="token punctuation">)</span>
        udpSocket<span class="token punctuation">.</span>sendto<span class="token punctuation">(</span>sendInfo<span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token string">&quot;gb2312&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>destIp<span class="token punctuation">,</span> destPort<span class="token punctuation">)</span><span class="token punctuation">)</span>

udpSocket <span class="token operator">=</span> <span class="token boolean">None</span>
destIp <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>
destPort <span class="token operator">=</span> <span class="token number">0</span>

<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    
    <span class="token keyword">global</span> udpSocket
    <span class="token keyword">global</span> destIp
    <span class="token keyword">global</span> destPort 

    destIp <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;对方的ip:&quot;</span><span class="token punctuation">)</span>
    destPort <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;对方的ip:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    udpSocket <span class="token operator">=</span> socket<span class="token punctuation">(</span>AF_INET<span class="token punctuation">,</span> SOCK_DGRAM<span class="token punctuation">)</span>
    udpSocket<span class="token punctuation">.</span>bind<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token number">4567</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    tr <span class="token operator">=</span> Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>recvData<span class="token punctuation">)</span>
    ts <span class="token operator">=</span> Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>sendData<span class="token punctuation">)</span>

    tr<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
    ts<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>

    tr<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span>
    ts<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
    main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="udp-广播" tabindex="-1"><a class="header-anchor" href="#udp-广播" aria-hidden="true">#</a> UDP 广播</h3><p>TCP没有广播, 只有UDP有广告博</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#coding=utf-8</span>
<span class="token keyword">import</span> socket<span class="token punctuation">,</span> sys
dest <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">&#39;&lt;broadcast&gt;&#39;</span><span class="token punctuation">,</span> <span class="token number">7788</span><span class="token punctuation">)</span>
<span class="token comment">## 创建udp套接字</span>
s <span class="token operator">=</span> socket<span class="token punctuation">.</span>socket<span class="token punctuation">(</span>socket<span class="token punctuation">.</span>AF_INET<span class="token punctuation">,</span> socket<span class="token punctuation">.</span>SOCK_DGRAM<span class="token punctuation">)</span>
<span class="token comment">## 对这个需要发送⼴播数据的套接字进⾏修改设置， 否则不能发送⼴播数据</span>
s<span class="token punctuation">.</span>setsockopt<span class="token punctuation">(</span>socket<span class="token punctuation">.</span>SOL_SOCKET<span class="token punctuation">,</span> socket<span class="token punctuation">.</span>SO_BROADCAST<span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token comment">## 以⼴播的形式发送数据到本⽹络的所有电脑中</span>
s<span class="token punctuation">.</span>sendto<span class="token punctuation">(</span><span class="token string">&quot;Hi&quot;</span><span class="token punctuation">,</span> dest<span class="token punctuation">)</span>
<span class="token keyword">print</span> <span class="token string">&quot;等待对⽅回复（按ctrl+c退出） &quot;</span>
<span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
    <span class="token punctuation">(</span>buf<span class="token punctuation">,</span> address<span class="token punctuation">)</span> <span class="token operator">=</span> s<span class="token punctuation">.</span>recvfrom<span class="token punctuation">(</span><span class="token number">2048</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span> <span class="token string">&quot;Received from %s: %s&quot;</span> <span class="token operator">%</span> <span class="token punctuation">(</span>address<span class="token punctuation">,</span> buf<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,27),o=[e];function c(i,l){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","socket-udp.html.vue"]]);export{r as default};
