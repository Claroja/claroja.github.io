import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as n,a as o}from"./app-9tftCahk.js";const a={},l=o(`<h1 id="hostbind" tabindex="-1"><a class="header-anchor" href="#hostbind" aria-hidden="true">#</a> hostBind</h1><p>在开发网站时要进行host绑定, 比如在<code>live-server</code>中指定:</p><ol><li><code>--host localhost</code> 或 <code>--host 127.0.0.1</code></li><li><code>--host 0.0.0.0</code></li></ol><p><code>host bind</code>是指我们的app监听哪个网卡的数据.</p><ol><li>首先使用<code>ip addr</code>查看本机当前的网卡, 可以看到, 我们有两个网卡: <ul><li>lo: Loop back address(127.0.0.0) 正常的数据包会从IP层进入链路层，然后发送到网络上；而给回环地址发送数据包，数据包会直接被发送主机的IP层获取</li><li>eth0: 网卡名(10.0.4.11)，如果有多块网卡，会有多个eth 或其它名称。</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">1</span>: lo: <span class="token operator">&lt;</span>LOOPBACK,UP,LOWER_UP<span class="token operator">&gt;</span> mtu <span class="token number">65536</span> qdisc noqueue state UNKNOWN group default qlen <span class="token number">1000</span>
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet <span class="token number">127.0</span>.0.1/8 scope <span class="token function">host</span> lo
    valid_lft forever preferred_lft forever
    inet6 ::1/128 scope <span class="token function">host</span> 
    valid_lft forever preferred_lft forever
<span class="token number">2</span>: eth0: <span class="token operator">&lt;</span>BROADCAST,MULTICAST,UP,LOWER_UP<span class="token operator">&gt;</span> mtu <span class="token number">1500</span> qdisc mq state UP group default qlen <span class="token number">1000</span>
    link/ether <span class="token number">52</span>:54:00:bb:e2:62 brd ff:ff:ff:ff:ff:ff
    inet <span class="token number">10.0</span>.4.11/22 brd <span class="token number">10.0</span>.7.255 scope global eth0
    valid_lft forever preferred_lft forever
    inet6 fe80::5054:ff:febb:e262/64 scope <span class="token function">link</span> 
    valid_lft forever preferred_lft forever
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>如果使用<code>--host localhost</code> 或 <code>--host 127.0.0.1</code>, 意思就是将web app绑定到<code>lo</code>卡上, 该网卡只接受本机的连接.</li><li>如果使用<code>--host 0.0.0.0</code>, 则表示将web app绑定到本机所有的网卡上, 这里包含了<code>lo</code>和<code>eth0</code>两个网卡, 如果有其他网卡, 也会被绑定上. 因为<code>eth0</code>可以被其他主机访问, 所以我们的web app也可以被其他主机访问. 这里如果使用<code>--host 10.0.4.11</code>也是可以被其他主机访问的.<code>0.0.0.0</code>是比较方便的写法, 一来不需要记忆自己的主机ip, 另外不需要记忆有多少个网卡</li></ol>`,5),d=[l];function t(c,i){return s(),n("div",null,d)}const f=e(a,[["render",t],["__file","hostBind.html.vue"]]);export{f as default};
