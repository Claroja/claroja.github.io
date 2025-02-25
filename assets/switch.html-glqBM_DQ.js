import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as n}from"./app-7knaTE3M.js";const i="/assets/1-G-ap0x2O.png",c="/assets/2-gkqAYKry.png",d="/assets/3-8jCfSHR0.png",o="/assets/4-JMbzW2T_.png",l="/assets/5-EZdLBEiw.png",t="/assets/6-sOh0wSUM.png",r="/assets/7-1-ZhKBw11I.png",p="/assets/8-B44pOlvQ.png",m="/assets/9-UsY-wxnF.png",g="/assets/10-15fRsy9a.png",h="/assets/11-LkZ1moJ9.png",u="/assets/12-fvcUMy7G.png",v="/assets/13-eLhV3H1W.png",b="/assets/14-MKc0nOLI.png",C="/assets/15-u_uK14Si.png",P="/assets/7-BrWNHKyO.png",A={},M=n('<h1 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> switch</h1><p>switch记录每个NIC的MAC地址, 根据MAC地址来发送信息</p><h2 id="两个nic直连" tabindex="-1"><a class="header-anchor" href="#两个nic直连" aria-hidden="true">#</a> 两个NIC直连</h2><h3 id="创建网络" tabindex="-1"><a class="header-anchor" href="#创建网络" aria-hidden="true">#</a> 创建网络</h3><p>创建如下网络: PC1: IP: 192.168.1.1 MASK: 255.255.255.0 MAC: 0050.0F43.1546 PC2: IP: 192.168.1.2 MASK: 255.255.255.0 MAC: 000A.4164.7BD4</p><figure><img src="'+i+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="模拟通话" tabindex="-1"><a class="header-anchor" href="#模拟通话" aria-hidden="true">#</a> 模拟通话</h3><ol><li><p><code>PC1</code>输入<code>ping 192.168.1.2</code>, 会创建两个包ARP和ICMP. 由于通讯的前提是知道对方的MAC地址, 所以<code>ping</code>命令发送的<code>ICMP</code>包会暂停发送, 因为不知道<code>192.168.1.2</code>MAC 所以会创建发送ARP包获取指定IP的MAC地址, 这里<code>DEST MAC</code>是<code>F...F</code>表示发送同网段下所有主机. <img src="'+c+`" alt="" loading="lazy"></p></li><li><p><code>PC2</code>收到ARP包后首先记录主机<code>PC1</code>的MAC, 然后发送ARP包返回</p></li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>arp <span class="token parameter variable">-a</span>
<span class="token comment">## Internet Address      Physical Address      Type</span>
<span class="token comment">## 192.168.1.1           0050.0f43.1546        dynamic</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+d+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li><code>PC1</code>收到返回的ARP包后, 首先记录<code>PC2</code>的MAC地址, 然后将<code>PC2</code>的MAC地址添加到<code>ICMP</code>包上, 并将<code>ICMP</code>包发送给<code>PC2</code></li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>arp <span class="token parameter variable">-a</span>
<span class="token comment">## Internet Address      Physical Address      Type</span>
<span class="token comment">## 192.168.1.2           000a.4164.7bd4        dynamic</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="4"><li><p><code>PC2</code>收到<code>ICMP</code>包后, 返回<code>ICMP</code>包给<code>PC1</code><img src="'+l+'" alt="" loading="lazy"></p></li><li><p><code>PC1</code>收到<code>ICMP</code>包后, 此次通信结束 <img src="'+t+'" alt="" loading="lazy"></p></li></ol><h2 id="通过switch组网" tabindex="-1"><a class="header-anchor" href="#通过switch组网" aria-hidden="true">#</a> 通过switch组网</h2><p>switch的作用 转发过滤： 当⼀个数据帧的⽬的地址在MAC地址表中有映射时， 它被转发到连接⽬的节点的端⼝⽽不是所有端⼝（如该数据帧为⼴播帧<code>F...F</code>则转发⾄所有端⼝） 学习功能： 以太⽹交换机了解每⼀端⼝相连设备的MAC地址， 并将地址同相应的端⼝映射起来存放在交换机缓存中的MAC地址表中</p><h3 id="配置网络" tabindex="-1"><a class="header-anchor" href="#配置网络" aria-hidden="true">#</a> 配置网络</h3><p>创建三个电脑和一个交换机: PC1: IP: 192.168.1.1 MASK: 255.255.255.0 MAC: 0050.0F43.1546 PC2: IP: 192.168.1.2 MASK: 255.255.255.0 MAC: 000A.4164.7BD4 PC3: IP: 192.168.1.3 MASK: 255.255.255.0 MAC:00E0.F7B2.0247</p><p>如图所示: <img src="'+r+'" alt="" loading="lazy"></p><ol><li><p>操作<code>PC1</code>在控制台输入<code>ping 193.168.1.3</code>, <code>PC1</code>会创建两个包:</p><ul><li>ARP包, 用来获取目标主机的MAC地址, 因为此时<code>PC1</code>不知道<code>193.168.1.3</code>的MAC地址</li><li>ICMP包, ping命令发送的包, 因为不知道<code>PC3</code>的MAC所以没有链路层的协议数据, 不能发送 首先, 会发送<code>ARP</code>包, 来获取<code>192.168.1.3</code>的MAC地址. 将ARP包发给<code>swtich1</code>, <img src="'+p+`" alt="" loading="lazy"></li></ul></li><li><p><code>switch1</code>收到<code>PC1</code>的ARP包后, 首先记录下<code>PC1</code>的信息, 然后查看<code>TARGET MAC</code>是<code>F...F</code>, 广播地址, 所以会将包原封不动转换给同网段的所有主机(<code>PC2</code>和<code>PC3</code>)</p></li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>show mac address-table 
<span class="token comment">##           Mac Address Table</span>
<span class="token comment">## -------------------------------------------</span>
<span class="token comment">## </span>
<span class="token comment">## Vlan    Mac Address       Type        Ports</span>
<span class="token comment">## ----    -----------       --------    -----</span>
<span class="token comment">## </span>
<span class="token comment">##    1    0050.0f43.1546    DYNAMIC     Fa0/1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+m+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>同一个subnet下的<code>PC2</code>和<code>PC3</code>收到<code>switch1</code>的ARP包 <code>PC2</code>收到包, 查看目的IP是<code>192.168.1.3</code>, 和自己不匹配就丢弃 <code>PC3</code>收到包, 查看和自己匹配, 于是更改包的内容, 收记录下发来包的<code>PC1</code>的地址, 并反向发送ARP包:</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>arp <span class="token parameter variable">-a</span>
<span class="token comment">## Internet Address      Physical Address      Type</span>
<span class="token comment">## 192.168.1.1           0050.0f43.1546        dynamic</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+g+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="4"><li><code>switch1</code>收到包后, 先记录发来包的<code>PC3</code>的MAC地址, 然后通过IP和MAC判断, 将APR包只发给<code>PC1</code></li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>show mac address-table 
<span class="token comment">##           Mac Address Table</span>
<span class="token comment">## -------------------------------------------</span>
<span class="token comment">## </span>
<span class="token comment">## Vlan    Mac Address       Type        Ports</span>
<span class="token comment">## ----    -----------       --------    -----</span>
<span class="token comment">## </span>
<span class="token comment">##    1    0050.0f43.1546    DYNAMIC     Fa0/1</span>
<span class="token comment">##    1    00e0.f7b2.0247    DYNAMIC     Fa0/3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+h+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="5"><li><code>PC1</code>拿到包之后, 记录<code>PC3</code>的MAC地址, 在ICMP(ping)包中写入<code>PC3</code>的MAC地址, 补全链路层的内容, 发送给<code>switch1</code>.</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>PC<span class="token operator">&gt;</span>arp <span class="token parameter variable">-a</span>
  Internet Address      Physical Address      Type
  <span class="token number">192.168</span>.1.3           00e0.f7b2.0247        dynamic
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="6"><li><code>PC1</code>通过MAC地址发送ICMP包 <img src="'+v+'" alt="" loading="lazy"><img src="'+b+'" alt="" loading="lazy"><img src="'+C+'" alt="" loading="lazy"></li></ol><h2 id="通过集线器组网" tabindex="-1"><a class="header-anchor" href="#通过集线器组网" aria-hidden="true">#</a> 通过集线器组⽹</h2><p>hub（集线器） 能够完成多个电脑的链接, 每个数据包的发送都是以⼴播的形式进⾏的， 容易堵塞⽹络 <img src="'+P+'" alt="" loading="lazy"></p>',34),f=[M];function _(y,k){return s(),a("div",null,f)}const w=e(A,[["render",_],["__file","switch.html.vue"]]);export{w as default};
