import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as i,e as d}from"./app-A10JnHE0.js";const o={},l=d('<h1 id="第四编人格权-第四章肖像权" tabindex="-1"><a class="header-anchor" href="#第四编人格权-第四章肖像权" aria-hidden="true">#</a> 第四编人格权-第四章肖像权</h1><h2 id="查看process-thread方法" tabindex="-1"><a class="header-anchor" href="#查看process-thread方法" aria-hidden="true">#</a> 查看Process/Thread方法</h2><h3 id="win" tabindex="-1"><a class="header-anchor" href="#win" aria-hidden="true">#</a> win</h3><p>查看进程</p><ul><li><code>tasklist | findstr java</code></li><li><code>jps</code> 杀死进程</li><li><code>taskkill /F /PID</code>杀死进程</li></ul><h3 id="linux" tabindex="-1"><a class="header-anchor" href="#linux" aria-hidden="true">#</a> Linux</h3><ul><li><code>ps -fe | grep java</code> 查看所有java进程</li><li><code>ps -fT -p &lt;PID&gt;</code> 查看某个进程的所有线程</li><li><code>top</code> 动态查看所有进程</li><li><code>top -H -p &lt;PID&gt;</code> 动态查看某进程的所有线程</li><li><code>jps</code></li><li><code>jstack &lt;PID&gt;</code> 更详细的信息</li></ul><h3 id="远程监控-jconsole" tabindex="-1"><a class="header-anchor" href="#远程监控-jconsole" aria-hidden="true">#</a> 远程监控 jconsole</h3><ol><li>运行java类:</li></ol><div class="language-s line-numbers-mode" data-ext="s"><pre class="language-s"><code>java -Djava.rmi.server.hostname=`ip地址` -Dcom.sun.management.jmxremote -\nDcom.sun.management.jmxremote.port=`连接端口` -Dcom.sun.management.jmxremote.ssl=是否安全连接(false) -\nDcom.sun.management.jmxremote.authenticate=是否认证(false) java类\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>远程运行<code>jconsole</code></li></ol><p>杀死进程 <code>kill PID</code></p>',12),n=[l];function s(c,r){return a(),i("div",null,n)}const m=e(o,[["render",s],["__file","JavaThreadCommand.html.vue"]]);export{m as default};
