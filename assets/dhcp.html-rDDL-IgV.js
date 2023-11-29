import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as s,e as r}from"./app-M6UUlHgF.js";const n="/assets/2-OaAkG7xY.png",i="/assets/3-2JOrXH0V.png",t="/assets/4-PqLAssAw.png",c="/assets/5-xROVxJUv.png",d={},o=r(`<h1 id="dhcp" tabindex="-1"><a class="header-anchor" href="#dhcp" aria-hidden="true">#</a> dhcp</h1><p>dhcp(Dynamic Host Configuration Protocol)在transport layer使用UDP, Server端使用67端口, Client端使用68端口. 可以给subnet 下的网卡自动配置:</p><ol><li>IP address</li><li>subnet mask</li><li>gateway</li><li>DNS</li></ol><h2 id="协议传输过程" tabindex="-1"><a class="header-anchor" href="#协议传输过程" aria-hidden="true">#</a> 协议传输过程</h2><h3 id="配置如下网络" tabindex="-1"><a class="header-anchor" href="#配置如下网络" aria-hidden="true">#</a> 配置如下网络:</h3><p>PC0: MAC Address: FE80::290:21FF:FEE3:3540 IP: dhcp SubnetMask: dhcp DNS: dhcp</p><p>DHCPServer: MAC FE80::210:11FF:FECE:DA86 IP: 192.168.1.3 SubnetMask: 255.255.255.0 DNS: 192.168.1.1</p><p>并在DHCPServer配置: PoolName: serverPool DefaultGateway: 192.168.1.1 DNSServer: 192.168.1.2 StartIPAddress: 192.168.1.4 SubnetMask: 255.255.255.0</p><p><a href="./dhcp/1.png"></a></p><h2 id="模拟dhcp请求" tabindex="-1"><a class="header-anchor" href="#模拟dhcp请求" aria-hidden="true">#</a> 模拟dhcp请求</h2><h3 id="命令输入" tabindex="-1"><a class="header-anchor" href="#命令输入" aria-hidden="true">#</a> 命令输入</h3><ol><li>在主机上输入<code>ipconfig /release</code>, 断开连接, IP地址变为<code>0.0.0.0</code></li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ipconfig /release
<span class="token comment">## IP Address......................: 0.0.0.0</span>
<span class="token comment">## Subnet Mask.....................: 0.0.0.0</span>
<span class="token comment">## Default Gateway.................: 0.0.0.0</span>
<span class="token comment">## DNS Server......................: 0.0.0.0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>在主机上输入<code>ipconfig /renew</code>, 请求为客户端分配IP, 可以看到总共有四个UDP包</li></ol><p>2.1 发现阶段(DHCP Discover):</p><p>client端在局域网内以广播的方式发起一个DHCP Discover包，目的是在子网络中发现能够给client端提供IP地址的server端。 UDP 目标端口号为67 源IP 地址0.0.0.0 目的IP:255.255.255.255(广播地址) <img src="`+n+'" alt="" loading="lazy"></p><h3 id="提供阶段-dhcp-offer" tabindex="-1"><a class="header-anchor" href="#提供阶段-dhcp-offer" aria-hidden="true">#</a> 提供阶段(DHCP Offer)</h3><p>局域网中DHCP server接受到Discover包之后，通过发送DHCP offer包给client端应答，主要是告知client端可以提供IP地址，以及相应的IP地址租约信息和其他配置信息也会在其中. UDP 目标68 源IP为DHCP服务器的IP 目的IP: Client端 <img src="'+i+'" alt="" loading="lazy"></p><h3 id="请求阶段-dhcp-request" tabindex="-1"><a class="header-anchor" href="#请求阶段-dhcp-request" aria-hidden="true">#</a> 请求阶段(DHCP Request)</h3><p>client只会接受收到offer报文，然后client端就会以广播的方式发送一个DHCP request报文请求分配IP地址。 UDP 目标67 源IP为0.0.0.0 目的IP:255.255.255.255 <img src="'+t+'" alt="" loading="lazy"></p><h3 id="确认阶段-dhcp-ack-or-dhcp-nak" tabindex="-1"><a class="header-anchor" href="#确认阶段-dhcp-ack-or-dhcp-nak" aria-hidden="true">#</a> 确认阶段(DHCP ACK or DHCP NAK)</h3><p>server端在收到DHCP request报文之后，会判断”option”字段的serverIP地址是否是自己的IP地址，如果符合分配IP地址的条件，就会给client发送一个DHCP ACK包，如果不满足就发挥发送一个DHCP NAK 包。 <img src="'+c+'" alt="" loading="lazy"></p><h3 id="没有响应" tabindex="-1"><a class="header-anchor" href="#没有响应" aria-hidden="true">#</a> 没有响应</h3><p>注意：客户端执行DHCP-DISCOVER后，如果没有DHCP服务器响应客户端的请求，客户端会随机使用169.254.0.0/16网段中的一个IP地址配置到本机地址。</p><p>169.254.0.0/16是Windows的自动专有IP寻址范围，也就是在无法通过DHCP获取IP地址时，由系统自动分配的IP地址段。</p><p>参考: https://blog.csdn.net/scanf_linux/article/details/89415965 https://blog.51cto.com/tonyguo/163475 https://www.sysnettechsolutions.com/en/configure-dhcp-in-cisco-packet-tracer/ https://blog.csdn.net/qq_39414668/article/details/80407746</p>',26),l=[o];function h(p,P){return a(),s("div",null,l)}const f=e(d,[["render",h],["__file","dhcp.html.vue"]]);export{f as default};
