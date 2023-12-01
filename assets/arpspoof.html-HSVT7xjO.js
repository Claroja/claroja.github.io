import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as s,e as n}from"./app-MTzDpLgJ.js";const r={},t=n(`<h1 id="arpspoof" tabindex="-1"><a class="header-anchor" href="#arpspoof" aria-hidden="true">#</a> arpspoof</h1><p>地址解析协议，即ARP（Address Resolution Protocol），是根据IP地址 获取物理地址（MAC地址）的一个TCP/IP协议。 主机发送信息时将包含目标IP地址的ARP请求广播到局域网络上的所有主机，并接收返回消息，以此确定目标的物理地址；收到返回消息后将该IP地址和物理地址存入本机ARP缓存中并保留一定时间，下次请求时直接查询ARP缓存以节约资源。 地址解析协议是建立在网络中各个主机互相信任的基础上的，局域网络上的主机可以自主发送ARP应答消息，其他主机收到应答报文时不会检测该报文的真实性就会将其记入本机ARP缓存；</p><h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h2><p>arpspoof [-i interface] [-c own|host|both] [-t target] [-r] host</p><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2><p>-t target 指定一个特殊的、将被ARP毒化的主机（如果没有指定，则认为是局域网中所有主机）。重复可以指定多个主机 host host是你想要截获数据包的主机 (通常是网关)。 -i interface 指定要使用的接口（即指定一块网卡） -r 捕获两个方向的网络流量, 默认只捕获target到host的流量</p><p>使用 <code>ip a</code>来查看网卡名称</p><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><p><code>arpspoof -i eth0 -t 192.168.31.45 192.168.31.1</code> -i 指定网卡 -t 目标哦主机 host 网关 这个命令的含义是获取目标主机发给网关的包</p><h2 id="应用" tabindex="-1"><a class="header-anchor" href="#应用" aria-hidden="true">#</a> 应用</h2><h3 id="让目标主机断网" tabindex="-1"><a class="header-anchor" href="#让目标主机断网" aria-hidden="true">#</a> 让目标主机断网</h3><p>截获目标主机发给网关的信息 <code>arpspoof -i eth0 -t 192.168.31.45 192.168.31.1</code></p><h3 id="截取目标主机信息" tabindex="-1"><a class="header-anchor" href="#截取目标主机信息" aria-hidden="true">#</a> 截取目标主机信息</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 开启本机的转发功能 1表示开启, 0表示关闭</span>
<span class="token builtin class-name">echo</span> <span class="token number">1</span> <span class="token operator">&gt;</span> /proc/sys/net/ipv4/ip_forward 
arpspoof <span class="token parameter variable">-i</span> eth0 <span class="token parameter variable">-t</span> <span class="token number">192.168</span>.31.45 <span class="token parameter variable">-r</span> <span class="token number">192.168</span>.31.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="让整个个局域网断网" tabindex="-1"><a class="header-anchor" href="#让整个个局域网断网" aria-hidden="true">#</a> 让整个个局域网断网</h3><p>不用-t参数，那它就是指针对所有的主机发起欺骗, 让所有其他主机不能上网, 这时只要自己不被欺骗就可以独享网络. <code>arpspoof -i eth0 网关IP</code></p><h3 id="防范中间人欺骗" tabindex="-1"><a class="header-anchor" href="#防范中间人欺骗" aria-hidden="true">#</a> 防范中间人欺骗</h3><p>arp欺骗攻击就是通过改变主机的映射表，即原来192.168.1.1指向的mac地址是a-b-c-d, 而有人在局域网内喊话说192.168.1.1是a-a-a-a 那你的电脑收到后就会改变</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>arp <span class="token parameter variable">-a</span>  <span class="token comment"># 查看arp缓存表, 可以看到iP和MAC是动态的</span>
arp <span class="token parameter variable">-s</span>  <span class="token number">192.168</span>.31.1   ec-41-18-49-d4-30  <span class="token comment"># 静态绑定</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>参考: https://blog.csdn.net/qq_54780911/article/details/121891827 https://blog.csdn.net/qq_54780911/article/details/121957519</p>`,20),i=[t];function d(o,p){return e(),s("div",null,i)}const l=a(r,[["render",d],["__file","arpspoof.html.vue"]]);export{l as default};
