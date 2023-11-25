import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as d,d as i}from"./app-j3zK2x6_.js";const r={},h=i('<h1 id="ip" tabindex="-1"><a class="header-anchor" href="#ip" aria-hidden="true">#</a> ip</h1><h2 id="ip地址-网络层" tabindex="-1"><a class="header-anchor" href="#ip地址-网络层" aria-hidden="true">#</a> IP地址(网络层)</h2><p>ip地址： ⽤来在⽹络中标记⼀台电脑的⼀串数字， ⽐如192.168.1.1； 在本地局域⽹上是惟⼀的。 每⼀个IP地址包括两部分： ⽹络地址和主机地址</p><h3 id="subnet与subnetmask" tabindex="-1"><a class="header-anchor" href="#subnet与subnetmask" aria-hidden="true">#</a> subnet与subnetmask</h3><p>互联网由多个subnet组成, 同一个subnet下的网卡可以直接通信, 不同的subnet下的网卡不能直接通信, 而需要借助<code>Router</code>进行通信. <code>Rounter</code>的本质就是拥有两个网卡, 分别在不同的subnet下, 相当于搭建了一个桥梁.</p><p>不同网卡的网络地址如果相同, 就代表在同一个subnet下.那么如何确定⽹络地址和主机地址各是多少位呢？如果不指定， 就不知道哪些位是⽹络地址、 哪些是主机地址， 这就需要通过subnet mask来实现。</p><p>subnet mask只有⼀个作⽤， 就是将某个IP地址划分成⽹络地址和主机地址两部分, subnet mask和IP地址相同， ⼦⻓度也是32位， - 左边是⽹络位， ⽤⼆进制数字“1”表示； - 右边是主机位， ⽤⼆进制数字“0”表示。</p><p>假设IP地址为<code>192.168.1.1</code> 的subnet mask为<code>255.255.255.0</code>。其中， <code>1</code>有24个(<code>255.255.255</code>)， 代表与此相对应的IP地址左边24位(<code>192.168.1</code>)是⽹络地址 <code>0</code>有8个， 代表与此相对应的IP地址右边8位(<code>.1</code>)是主机地址。 主机地址可以在<code>0~255</code>范围内任意变化， 因此可以提供256个IP地址。但是实际可⽤的IP地址数量是256-2， 即254个， 因为主机号不能全是“0”或全是“1”。 - 主机号全为0， 表示⽹络号 - 主机号全为1， 表示⽹络⼴播 例子: 假设有IP:192.168.1.2, 子网掩码是:255.255.255.0 对应的二进制是: 地址:11000000.10101000.00000001.00000010 掩码:11111111.11111111.11111111.00000000 将地址和掩码进行按位与(1不变,0变零) 二进制结果:11000000.10101000.00000001.00000010 十进制结果:192.168.1.0 就计算出了当前IP所在的子网的网络地址为<code>192.168.1.0</code>.</p><p>注意: 如果将⼦⽹掩码设置过⼤，也就是说⼦⽹范围扩⼤，那么，根据⼦⽹寻径规则，很可能发往和本地主机不在同⼀⼦⽹内的⽬标主机的数据，会因为错误的判断⽽认为⽬标主机是在同⼀⼦⽹内，那么 数据包将在本⼦⽹内循环，直到超时并抛弃， 使数据不能正确到达⽬标主机， 如果将⼦⽹掩码设置得过⼩， 那么就会将本来属于同⼀⼦⽹内的机器之间的通信当做是跨⼦⽹传输，数据包都交给缺省⽹关处理，这样势必增加缺省⽹关的负担，造成⽹络效率下降。 因此，⼦⽹掩码应该根据⽹络的规模进⾏设置。 如果⼀个⽹络的规模不超过254台电脑， 采⽤“255.255.255.0”作为⼦⽹掩码就可以了，现在⼤多数局域⽹都不会超过这个数字， 因此“255.255.255.0”是最常⽤的IP地址⼦⽹掩码； 假如在⼀所⼤学具有1500多台电脑，这种规模的局域⽹可以使⽤“255.255.0.0”。</p><h3 id="不同类别地址" tabindex="-1"><a class="header-anchor" href="#不同类别地址" aria-hidden="true">#</a> 不同类别地址</h3><h4 id="a类ip地址" tabindex="-1"><a class="header-anchor" href="#a类ip地址" aria-hidden="true">#</a> A类IP地址</h4><p>⼀个A类IP地址由1字节的⽹络地址和3字节主机地址组成， ⽹络地址的最⾼位必须是“0”， 地址范围1.0.0.1-126.255.255.254 ⼆进制表示为： 00000001 00000000 00000000 00000001 - 01111110 11111111 11111111 11111110 可⽤的A类⽹络有126个， 每个⽹络能容纳1677214个主机</p><h4 id="b类ip地址" tabindex="-1"><a class="header-anchor" href="#b类ip地址" aria-hidden="true">#</a> B类IP地址</h4><p>⼀个B类IP地址由2个字节的⽹络地址和2个字节的主机地址组成， ⽹络地址的最⾼位必须是“10”， 地址范围128.1.0.1-191.255.255.254 ⼆进制表示为： 10000000 00000001 00000000 00000001 - 10111111 11111111 11111111 11111110 可⽤的B类⽹络有16384个， 每个⽹络能容纳65534主机</p><h4 id="c类ip地址" tabindex="-1"><a class="header-anchor" href="#c类ip地址" aria-hidden="true">#</a> C类IP地址</h4><p>⼀个C类IP地址由3字节的⽹络地址和1字节的主机地址组成， ⽹络地址的最⾼位必须是“110” 范围192.0.1.1-223.255.255.254 ⼆进制表示为: 11000000 00000000 00000001 00000001 - 11011111 11111111 11111110 11111110 C类⽹络可达2097152个， 每个⽹络能容纳254个主机</p><h4 id="d类地址用于多点广播" tabindex="-1"><a class="header-anchor" href="#d类地址用于多点广播" aria-hidden="true">#</a> D类地址⽤于多点⼴播</h4><p>D类IP地址第⼀个字节以“1110”开始， 它是⼀个专⻔保留的地址。 它并不指向特定的⽹络， ⽬ 前这⼀类地址被⽤在多点⼴播（Multicast） 中多点⼴播地址⽤来⼀次寻址⼀组计算机 地址范围224.0.0.1-239.255.255.254</p><h4 id="e类ip地址" tabindex="-1"><a class="header-anchor" href="#e类ip地址" aria-hidden="true">#</a> E类IP地址</h4><p>以“1111”开始， 为将来使⽤保留 E类地址保留， 仅作实验和开发⽤</p><h3 id="公共ip和私有ip" tabindex="-1"><a class="header-anchor" href="#公共ip和私有ip" aria-hidden="true">#</a> 公共IP和私有IP</h3><p>在这么多⽹络IP中， 国际规定有⼀部分IP地址是⽤于我们的局域⽹使⽤， 也就是属于私⽹IP， 不在公⽹中使⽤的， 它们的范围是： 10.0.0.0～10.255.255.255 172.16.0.0～172.31.255.255 192.168.0.0～192.168.255.255</p><p>私有IP(对应家用路由器的LAN口)不会出现在公网上, 公网IP(对应家用路由器的WAN口)也不会出现在局域网内.</p><h3 id="回路ip" tabindex="-1"><a class="header-anchor" href="#回路ip" aria-hidden="true">#</a> 回路ip</h3><p>IP地址127.0.0.1~127.255.255.255⽤于回路测试， 如： 127.0.0.1可以代表本机IP地址， ⽤ http://127.0.0.1 就可以测试本机中配置的Web服务器。</p>',25),t=[h];function c(n,s){return a(),d("div",null,t)}const u=e(r,[["render",c],["__file","network_ip.html.vue"]]);export{u as default};
