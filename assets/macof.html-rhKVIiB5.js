import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as t,a as c}from"./app-9tftCahk.js";const r={},o=c('<h1 id="macof" tabindex="-1"><a class="header-anchor" href="#macof" aria-hidden="true">#</a> macof</h1><p>macof是dsniff中的一个小工具 概要：交换机中存在着一个记录着MAC地址的表，为了完成数据的快速转发，这个表有着自动学习机制，学习后可以直接向目标发送数据。利用这不断学习的机制，不断地发送MAC地址交给交换机，填满整个MAC表，此时交换机就只能数据广播的形式获取信息，就像是集线器一样。攻击者使用抓包工具, 即可获得广播的数据. macof 用于对交换机进行mac地址表溢出。内部mac表都是有大小的，一般8k左右，一但mac表满了，其他mac地址就加不进来。macof，用来发送大量伪造的mac地址的数据包。可达到溢出的目的。阻断内网服务器正常网络通信，一般情况下，mac地址的欺骗和arp的欺骗组合使用，共同欺骗交换机和PC，增加欺骗成功率。</p><h2 id="syntax" tabindex="-1"><a class="header-anchor" href="#syntax" aria-hidden="true">#</a> syntax</h2><p>macof [-i interface] [-s src] [-d dst] [-e tha] [-x sport] [-y dport] [-n times]</p><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2><p>-i interface 指定要发送的接口 -s src 指定源IP地址 -d dst 指定目标IP地址 -e tha 指定目标硬件地址 -x sport 指定TCP源端口 -y dport 指定TCP目标端口 -n times 指定要发送的数据包数</p><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><p>正常我们-i指定网卡即可：macof -i eth0</p><h2 id="应用" tabindex="-1"><a class="header-anchor" href="#应用" aria-hidden="true">#</a> 应用</h2><p>MAC Flooding</p><p>参考: https://www.cnblogs.com/BaoLeri/p/5721249.html https://kalilinuxtutorials.com/macof/</p>',11),i=[o];function s(h,d){return e(),t("div",null,i)}const f=a(r,[["render",s],["__file","macof.html.vue"]]);export{f as default};
