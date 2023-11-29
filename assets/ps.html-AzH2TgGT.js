import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as c,c as d,e as o}from"./app-M6UUlHgF.js";const a={},s=o('<h1 id="ps" tabindex="-1"><a class="header-anchor" href="#ps" aria-hidden="true">#</a> ps</h1><h2 id="查询进程" tabindex="-1"><a class="header-anchor" href="#查询进程" aria-hidden="true">#</a> 查询进程</h2><p>1.列出所有进程 <code>ps -aux</code> 2.列出指定命令进程 <code>ps -aux | grep python</code> 3.查看某个端口打开的文件 lsof -i :3306 4.查看某个网络协议打开的文件 lsof -i tcp</p><h2 id="终止进程" tabindex="-1"><a class="header-anchor" href="#终止进程" aria-hidden="true">#</a> 终止进程</h2><p><code>kill pid</code> 默认发送<code>TERM</code>信号,不能保证进程被杀死,<code>TERM</code>信号可以被捕获,屏蔽或忽略 <code>kill [-signal] pid</code> <code>kill -9 pid</code>,发送<code>KILL</code>信号,强制杀死,<code>KILL</code>不能被捕获,屏蔽或忽略</p><p>参考: https://www.jianshu.com/p/a37efe9fe5a3</p>',6),i=[s];function t(r,h){return c(),d("div",null,i)}const l=e(a,[["render",t],["__file","ps.html.vue"]]);export{l as default};
