import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o,c,a as d}from"./app-9tftCahk.js";const r="/assets/1-ID1HnXRM.png",t="/assets/2-_Qsc4R5y.png",s="/assets/3-YATSK8Qr.png",a="/assets/4-T7N2JGrY.png",i="/assets/5-tMmZMaWA.png",p="/assets/6-sZlb1SGd.png",l="/assets/7-MFGQk44V.png",n="/assets/8-FAhaeyZB.png",C="/assets/9-BRynnQ7b.png",_="/assets/10-Sh2_qop9.png",P={},g=d('<h1 id="tcp-http" tabindex="-1"><a class="header-anchor" href="#tcp-http" aria-hidden="true">#</a> tcp-http</h1><p>HTTP是四层网络协议的顶层, 三层用的是TCP协议.</p><p>TCP通信的一些概念: SYN(synchronous)建立联机 ACK(acknowledgement)确认 PSH(push)传输 FIN(finish)结束</p><h2 id="创建网络" tabindex="-1"><a class="header-anchor" href="#创建网络" aria-hidden="true">#</a> 创建网络</h2><p>创建如下网络: PC1: IP: 192.168.1.1 MASK: 255.255.255.0 MAC: 0050.0F43.1546 Server2: IP: 192.168.1.2 MASK: 255.255.255.0 MAC: 000A.4164.7BD4</p><figure><img src="'+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="模拟网络请求" tabindex="-1"><a class="header-anchor" href="#模拟网络请求" aria-hidden="true">#</a> 模拟网络请求</h2><p>在<code>Server2</code>中开启HTTP和HTTPs服务, 在<code>PC1</code>浏览器输入<code>192.168.1.2</code></p><ol><li><p><code>PC1</code>创建<code>SYN</code>的TCP包, 发送给<code>Server2</code>,请求创建链接. 这是第一次握手. <img src="'+t+'" alt="" loading="lazy"></p></li><li><p><code>Server2</code>包收到<code>SYN</code>的TCP包之后, 返回<code>SYN+ACK</code>的TCP包, 确认<code>PC1</code>的请求, 并发送创建链接请求.第二次握手. <img src="'+s+'" alt="" loading="lazy"></p></li><li><p><code>PC1</code>收到<code>Server2</code>发送来的<code>SYN+ACK</code>的TCP包之后, 返回<code>ACK</code>的TCP包, 确认<code>Server2</code>的请求. 第三次握手. 另外创建<code>HTTP</code>包, 等待返回的<code>ACK</code>的TCP包被<code>Server2</code>接受后发送. <img src="'+a+'" alt="" loading="lazy"></p></li><li><p><code>PC1</code>将HTTP包发送给<code>Server2</code>, 这里发送的是<code>Get</code>请求, 这里开始传送数据, 每个数据帧有四层网络协议. <img src="'+i+'" alt="" loading="lazy"></p></li><li><p><code>Server2</code>收到HTTP请求包之后, 进行返回. TCP每次携带的数据是一定的, 如果大于此数据量, 则会分多份TCP分别发送, 每次发送<code>PC1</code>都是返回<code>ACK</code>包TCP进行确认. <img src="'+p+'" alt="" loading="lazy"></p></li><li><p><code>PC1</code>收到返回结果, 发送<code>FIN+ACK</code>的TCP包给<code>Server2</code>, 确认收到的数据没问题, 并请求结束连接.第一次挥手. <img src="'+l+'" alt="" loading="lazy"></p></li><li><p><code>Server2</code>收到<code>PC1</code>的结束请求, 发送<code>FIN+ACK</code>的TCP包给<code>Server2</code>, 确认<code>PC1</code>的结束请求, 并发送断开连接的请求. 第二次和第三次挥手. 注意所谓四次挥手, 其实就是将这一步分为第二次和第三次挥手, <code>Server2</code>可能先发送<code>ACK</code>的确认TCP, 再发送<code>FIN</code>的结束TCP. 而这里是合并了. <img src="'+n+'" alt="" loading="lazy"></p></li><li><p><code>PC1</code>收到<code>Server2</code>结束请求后, 发送<code>ACK</code>的TCP包给<code>Server2</code>, 确认<code>Server2</code>的结束请求. <img src="'+C+'" alt="" loading="lazy"></p></li><li><p><code>Server2</code>收到确认的TCP包后, 结束. <img src="'+_+'" alt="" loading="lazy"></p></li></ol>',9),h=[g];function T(m,S){return o(),c("div",null,h)}const f=e(P,[["render",T],["__file","tcp-http.html.vue"]]);export{f as default};
