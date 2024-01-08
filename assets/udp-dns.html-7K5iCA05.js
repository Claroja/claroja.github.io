import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as o}from"./app-YE2Hltoy.js";const d="/assets/1-eSVn4gPJ.png",r="/assets/2-hjBsMiKK.png",t="/assets/3-aPSpUsU1.png",c="/assets/4-nmlpXseS.png",n={},i=o('<h1 id="udp-dns" tabindex="-1"><a class="header-anchor" href="#udp-dns" aria-hidden="true">#</a> udp-dns</h1><p>DNS协议是客户端发送域名, DNS返回对应的IP</p><h2 id="创建网络" tabindex="-1"><a class="header-anchor" href="#创建网络" aria-hidden="true">#</a> 创建网络</h2><p>创建如下网络: PC1: IP: 192.168.1.1 MASK: 255.255.255.0 MAC: 0050.0F43.1546 DNS: 192.168.1.3 HttpServer: IP: 192.168.1.2 MASK: 255.255.255.0 MAC: 000A.4164.7BD4 DnsServer: IP: 192.168.1.3 MASK: 255.255.255.0 MAC: 0090.2B92.4EC2</p><p>如下图 <img src="'+d+'" alt="" loading="lazy"></p><p>在DnsServer中添加映射: 域名:www.wxy.com Http服务:192.168.1.2</p><h2 id="模拟请求" tabindex="-1"><a class="header-anchor" href="#模拟请求" aria-hidden="true">#</a> 模拟请求</h2><ol><li><p>在<code>PC1</code>浏览器中输入<code>www.wxy.com</code>后, 创建DNS包. 根据本机配置的DNS地址 发送给192.168.1.3 <img src="'+r+'" alt="" loading="lazy"></p></li><li><p><code>DnsServer</code>收到<code>PC1</code>的DNS包后, 将对应域名的IP返回 <img src="'+t+'" alt="" loading="lazy"></p></li><li><p><code>PC1</code>收到<code>DnsServer</code>返回的域名IP后, 开始发起TCP请求 <img src="'+c+'" alt="" loading="lazy"></p></li></ol>',8),p=[i];function l(h,_){return s(),a("div",null,p)}const g=e(n,[["render",l],["__file","udp-dns.html.vue"]]);export{g as default};
