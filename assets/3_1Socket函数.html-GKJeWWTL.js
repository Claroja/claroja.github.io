import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as a,o as d,c as o,a as t,b as s,d as c,e as i}from"./app-A10JnHE0.js";const r={},l=i(`<h1 id="socket" tabindex="-1"><a class="header-anchor" href="#socket" aria-hidden="true">#</a> socket</h1><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;sys/types.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;sys/socket.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">socket</span><span class="token punctuation">(</span><span class="token keyword">int</span> domain<span class="token punctuation">,</span> <span class="token keyword">int</span> type<span class="token punctuation">,</span> <span class="token keyword">int</span> protocol<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>domain</td><td>设置通信域(本地(PF_LOCAL),ipv4(AF_INET),ipv6()等)</td></tr><tr><td>type</td><td>设置套接字通信类型(TCP,双向字节流(SOCK_STREAM),UDP(SOCK_DGRAM))</td></tr><tr><td>protocol</td><td>某个协议的特定类型,既type类型中某个类型.通常只有一个类型,所以设置成0</td></tr></tbody></table><h1 id="本地和网络字节转换" tabindex="-1"><a class="header-anchor" href="#本地和网络字节转换" aria-hidden="true">#</a> 本地和网络字节转换</h1><p>网络字节顺序NBO（Network Byte Order）,按从高到底顺序存储,(大端：低位存放在高字节) 主机字节顺序（HBO，Host Byte Order）（小端：低位存放在低字节）</p><table><thead><tr><th>方法</th><th>描述</th></tr></thead><tbody><tr><td>htonl()</td><td>&quot;Host to Network Long int&quot;</td></tr><tr><td>ntohl()</td><td>&quot;Network to Host Long int&quot;</td></tr><tr><td>htons()</td><td>&quot;Host to Network Short int&quot;</td></tr><tr><td>ntohs()</td><td>&quot;Network to Host Short int&quot;</td></tr></tbody></table><p>INADDR_ANY 就是0.0.0.0,意思就是本机所有的网卡(因为有些机子不止一块网卡).在多卡的情况下,如果我们绑定了某个具体的ip地址,那么就只能监听所设置的ip地址所在的网卡端口,其他的两块网卡无法监听端口.</p><h1 id="sockaddr-in" tabindex="-1"><a class="header-anchor" href="#sockaddr-in" aria-hidden="true">#</a> sockaddr_in</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>struct sockaddr_in {
　　short int sin_family; /*指代协议族，在socket编程中只能是AF_INET */
　　unsigned short int sin_port; /* 端口号 */
　　struct in_addr sin_addr; /* IP地址, in_addr这个数据结构,下面会有对in_addr的介绍*/
　　unsigned char sin_zero[8]; /* Same size as struct sockaddr */
　　};

struct in_addr {
　　union {
　　struct{ unsigned char s_b1,s_b2, s_b3,s_b4;} S_un_b;
　　struct{ unsigned short s_w1, s_w2;} S_un_w;
　　unsigned long S_addr;
　　} S_un;
　　} IN_ADDR;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="socklent-t" tabindex="-1"><a class="header-anchor" href="#socklent-t" aria-hidden="true">#</a> socklent_t</h1><p>在32位下<code>size_t</code>和<code>int</code>长度相同,都是32bit, 在64位下<code>sie_t</code>和<code>int</code>长度不同,分别是32bit和64bit 而socket中accpet函数的第三个参数必须和int长度相同,所以变设置了socklen_t的类型</p><h1 id="accept" tabindex="-1"><a class="header-anchor" href="#accept" aria-hidden="true">#</a> accept</h1><p>提取所监听套接字的第一个链接请求,创建新的套接字,并返回文件描述符,新建立的套接字准备发送send()和接收数据recv()</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;sys/types.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;sys/socket.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">accept</span><span class="token punctuation">(</span><span class="token keyword">int</span> sockfd<span class="token punctuation">,</span><span class="token keyword">struct</span> <span class="token class-name">sockaddr</span> <span class="token operator">*</span>addr<span class="token punctuation">,</span><span class="token class-name">socklen_t</span> <span class="token operator">*</span>addrlen<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>sockfd</td><td>经过绑定(bind),监听(listen)的socket套接字描述符</td></tr><tr><td>addr</td><td>客户端的地址结构体</td></tr><tr><td>addrlen</td><td>sizeof(struct sockaddr_in),客户端地址结构体的大小</td></tr></tbody></table>`,15),p={href:"https://blog.csdn.net/u010144805/article/details/78276659",target:"_blank",rel:"noopener noreferrer"};function u(h,k){const n=a("ExternalLinkIcon");return d(),o("div",null,[l,t("p",null,[s("参考文献: https://blog.csdn.net/xc_tsao/article/details/44123331 https://blog.csdn.net/haoxiaodao/article/details/73162663 https://blog.csdn.net/Qiana_/article/details/79552087 "),t("a",p,[s("accept"),c(n)])])])}const b=e(r,[["render",u],["__file","3_1Socket函数.html.vue"]]);export{b as default};
