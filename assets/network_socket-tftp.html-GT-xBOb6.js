import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,d as t}from"./app-j3zK2x6_.js";const p={},e=t(`<h1 id="socket-tftp" tabindex="-1"><a class="header-anchor" href="#socket-tftp" aria-hidden="true">#</a> socket-tftp</h1><h2 id="tftp协议" tabindex="-1"><a class="header-anchor" href="#tftp协议" aria-hidden="true">#</a> TFTP协议</h2><p>TFTP（Trivial File Transfer Protocol,简单⽂件传输协议）是TCP/IP协议族中的⼀个⽤来在客户端与服务器之间进⾏简单⽂件传输的协议</p><p>特点：</p><ul><li>简单</li><li>占⽤资源⼩</li><li>适合传递⼩⽂件</li><li>适合在局域⽹进⾏传递</li><li>端⼝号为69</li><li>基于UDP实现</li></ul><h3 id="tftp下载过程" tabindex="-1"><a class="header-anchor" href="#tftp下载过程" aria-hidden="true">#</a> TFTP下载过程</h3><p>TFTP服务器默认监听69号端⼝ 当客户端发送“下载”请求（即读请求） 时， 需要向服务器的69端⼝发送 服务器若批准此请求,则使⽤⼀个新的、 临时的 端⼝进⾏数据传输</p><p>当服务器找到需要现在的⽂件后， 会⽴刻打开⽂件， 把⽂件中的数据通过TFTP协议发送给客户端</p><p>如果⽂件的总⼤⼩较⼤（⽐如3M） ， 那么服务器分多次发送， 每次会从⽂件中读取512个字节的数据发送过来</p><p>因为发送的次数有可能会很多， 所以为了让客户端对接收到的数据进⾏排序， 所以在服务器发送那512个字节数据的时候， 会多发2个字节的数据， ⽤来存放序号， 并且放在512个字节数据的前⾯， 序号是从1开始的</p><p>因为需要从服务器上下载⽂件时， ⽂件可能不存在， 那么此时服务器就会发送⼀个错误的信息过来， 为了区分服务发送的是⽂件内容还是错误的提示信息， 所以⼜⽤了2个字节 来表示这个数据包的功能（称为操作码） ， 并且在序号的前⾯</p><table><thead><tr><th>操作码</th><th>功能</th></tr></thead><tbody><tr><td>1</td><td>读请求， 即下载</td></tr><tr><td>2</td><td>写请求， 即上传</td></tr><tr><td>3</td><td>表示数据包， 即DATA</td></tr><tr><td>4</td><td>确认码， 即ACK</td></tr><tr><td>5</td><td>错误</td></tr></tbody></table><p>因为udp的数据包不安全， 即发送⽅发送是否成功不能确定， 所以TFTP协议中规定， 为了让服务器知道客户端已经接收到了刚刚发送的那个数据包， 所以当客户端接收到⼀个数据包的时候需要向服务器进⾏发送确认信息， 即发送收到了， 这样的包成为ACK(应答包)</p><p>为了标记数据已经发送完毕， 所以规定， 当客户端接收到的数据⼩于516（2字节操作码+2个字节的序号+512字节数据） 时， 就意味着服务器发送完毕了 TFTP数据包的格式如下: <a href="./network_socket-tftp/3.png"></a></p><p>ftp的整个过程为: <a href="./network_socket-tftp/4.png"></a></p><p>代码实现为:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#coding=utf-8</span>
<span class="token keyword">from</span> socket <span class="token keyword">import</span> <span class="token operator">*</span>
<span class="token keyword">import</span> struct
<span class="token keyword">import</span> sys
<span class="token keyword">if</span> <span class="token builtin">len</span><span class="token punctuation">(</span>sys<span class="token punctuation">.</span>argv<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token number">2</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;-&#39;</span><span class="token operator">*</span><span class="token number">30</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;tips:&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;python xxxx.py 192.168.1.1&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;-&#39;</span><span class="token operator">*</span><span class="token number">30</span><span class="token punctuation">)</span>
    exit<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    ip <span class="token operator">=</span> sys<span class="token punctuation">.</span>argv<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token comment">## 创建udp套接字</span>
udpSocket <span class="token operator">=</span> socket<span class="token punctuation">(</span>AF_INET<span class="token punctuation">,</span> SOCK_DGRAM<span class="token punctuation">)</span>
<span class="token comment">#构造下载请求数据</span>
cmd_buf <span class="token operator">=</span> struct<span class="token punctuation">.</span>pack<span class="token punctuation">(</span><span class="token string">&quot;!H8sb5sb&quot;</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token string">&quot;test.jpg&quot;</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token string">&quot;octet&quot;</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token comment">#发送下载⽂件请求数据到指定服务器</span>
sendAddr <span class="token operator">=</span> <span class="token punctuation">(</span>ip<span class="token punctuation">,</span> <span class="token number">69</span><span class="token punctuation">)</span>
udpSocket<span class="token punctuation">.</span>sendto<span class="token punctuation">(</span>cmd_buf<span class="token punctuation">,</span> sendAddr<span class="token punctuation">)</span>
p_num <span class="token operator">=</span> <span class="token number">0</span>
recvFile <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
<span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
    recvData<span class="token punctuation">,</span>recvAddr <span class="token operator">=</span> udpSocket<span class="token punctuation">.</span>recvfrom<span class="token punctuation">(</span><span class="token number">1024</span><span class="token punctuation">)</span>
    recvDataLen <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>recvData<span class="token punctuation">)</span>
    <span class="token comment"># print recvAddr # for test</span>
    <span class="token comment"># print len(recvData) # for test</span>
    cmdTuple <span class="token operator">=</span> struct<span class="token punctuation">.</span>unpack<span class="token punctuation">(</span><span class="token string">&quot;!HH&quot;</span><span class="token punctuation">,</span> recvData<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token comment"># print cmdTuple # for test</span>
    cmd <span class="token operator">=</span> cmdTuple<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    currentPackNum <span class="token operator">=</span> cmdTuple<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
    <span class="token keyword">if</span> cmd <span class="token operator">==</span> <span class="token number">3</span><span class="token punctuation">:</span> <span class="token comment">#是否为数据包</span>
        <span class="token comment"># 如果是第⼀次接收到数据， 那么就创建⽂件</span>
        <span class="token keyword">if</span> currentPackNum <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">:</span>
            recvFile <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&quot;test.jpg&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span>
        <span class="token comment"># 包编号是否和上次相等</span>
        <span class="token keyword">if</span> p_num<span class="token operator">+</span><span class="token number">1</span> <span class="token operator">==</span> currentPackNum<span class="token punctuation">:</span>
            recvFile<span class="token punctuation">.</span>write<span class="token punctuation">(</span>recvData<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            p_num <span class="token operator">+=</span><span class="token number">1</span>
            <span class="token keyword">print</span> <span class="token string">&#39;(%d)次接收到的数据&#39;</span><span class="token operator">%</span><span class="token punctuation">(</span>p_num<span class="token punctuation">)</span>
            ackBuf <span class="token operator">=</span> struct<span class="token punctuation">.</span>pack<span class="token punctuation">(</span><span class="token string">&quot;!HH&quot;</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span>p_num<span class="token punctuation">)</span>
            udpSocket<span class="token punctuation">.</span>sendto<span class="token punctuation">(</span>ackBuf<span class="token punctuation">,</span> recvAddr<span class="token punctuation">)</span>
        <span class="token comment"># 如果收到的数据⼩于516则认为出错</span>
        <span class="token keyword">if</span> recvDataLen<span class="token operator">&lt;</span><span class="token number">516</span><span class="token punctuation">:</span>
            recvFile<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">print</span> <span class="token string">&#39;已经成功下载！ ！ ！ &#39;</span>
            <span class="token keyword">break</span>
    <span class="token keyword">elif</span> cmd <span class="token operator">==</span> <span class="token number">5</span><span class="token punctuation">:</span> <span class="token comment">#是否为错误应答</span>
    <span class="token keyword">print</span> <span class="token string">&quot;error num:%d&quot;</span><span class="token operator">%</span>currentPackNum
    <span class="token keyword">break</span>
udpSocket<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","network_socket-tftp.html.vue"]]);export{k as default};
