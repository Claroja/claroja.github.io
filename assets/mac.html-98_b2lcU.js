import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as c,c as o,a as e,b as a}from"./app-jdLxCr9I.js";const s={},n=e("h1",{id:"mac",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#mac","aria-hidden":"true"},"#"),a(" mac")],-1),r=e("h2",{id:"mac地址-链路层",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#mac地址-链路层","aria-hidden":"true"},"#"),a(" MAC地址(链路层)")],-1),l=e("p",null,"每一个网卡唯一标识, 六个字节表示, 前三个字节用来确定厂商, 后三个字节是序号.",-1),_=e("ol",null,[e("li",null,"如果PC不知⽬标IP所对应的的MAC， 那么可以看出， pc会先发送arp⼴ 播， 得到对⽅的MAC然后， 在进⾏数据的传送"),e("li",null,"当switch第⼀次收到arp⼴播数据， 会把arp⼴播数据包转发给所有端⼝ （除来源端⼝） ； 如果以后还有pc询问此IP的MAC， 那么只是向⽬标的 端⼝进⾏转发数据")],-1),i=e("p",null,"为什么要MAC地址(链路层): 因为有很多subnet, 不同子网下不同电脑可能有相同的IP, 所以仅仅凭借网络层(IP地址)还不能唯一确定一台电脑",-1),d=e("p",null,"相关的协议: ARP(arp):根据IP找MAC RARP():根据MAC找IP",-1),h=[n,r,l,_,i,d];function m(p,u){return c(),o("div",null,h)}const P=t(s,[["render",m],["__file","mac.html.vue"]]);export{P as default};
