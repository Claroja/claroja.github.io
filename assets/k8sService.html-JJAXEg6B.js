import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e}from"./app-MTzDpLgJ.js";const t={},l=e(`<h1 id="索引" tabindex="-1"><a class="header-anchor" href="#索引" aria-hidden="true">#</a> 索引</h1><h2 id="service" tabindex="-1"><a class="header-anchor" href="#service" aria-hidden="true">#</a> service</h2><p>问题:</p><ul><li>pod 重启后其IP会更改</li><li>pod IP仅可在集群内部访问 解决:</li><li>service可以为一组pod提供统一的入口地址，并且将请求负载分发到后端的各个pod上。</li><li>服务发现, 当pod重启后, 会自动注册 本质: kube-proxy服务, 运行在每个Node节点上.当创建Service时, 向etcd写入信息, 由kube-proxy来解析</li></ul><h3 id="命令控制" tabindex="-1"><a class="header-anchor" href="#命令控制" aria-hidden="true">#</a> 命令控制</h3><ul><li>创建service <code>kubectl expose deployment [NAME] --name=[NAME] --type=[ClusterIP] --port=[NUM] --target-port=[NUM]</code><ul><li>type: ClusterIP在集群内访问, NodePort在集群外访问, 会先创建ClusterIP, 并设置<code>target-port=port</code></li><li>port:每个pod暴露的端口</li><li>target-port: pod组对应service暴露的端口</li></ul></li><li>获得service <code>kubectl get/describe svc</code></li><li>删除service <code>kubectl delte svc</code></li></ul><h3 id="配置文件控制" tabindex="-1"><a class="header-anchor" href="#配置文件控制" aria-hidden="true">#</a> 配置文件控制</h3><p><code>kubectl create/apply -f [YAML_PATH]</code></p><table><thead><tr><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>ClusterIP</td><td>默认, 只能集群内部访问</td></tr><tr><td>HeadLiness</td><td>不分配Cluster IP, 通过service域名查询</td></tr><tr><td>NodePort</td><td>集群内部访问外部访问</td></tr><tr><td>LoadBalancer</td><td>外界负载均衡服务</td></tr><tr><td>ExternalName</td><td>将外部IP引入</td></tr></tbody></table><h4 id="clusterip-headliness" tabindex="-1"><a class="header-anchor" href="#clusterip-headliness" aria-hidden="true">#</a> ClusterIP/HeadLiness</h4><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Service
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> my<span class="token punctuation">-</span>service
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span> <span class="token comment"># 选择指定标签的Pod</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> MyApp
  <span class="token key atrule">clusterIP</span><span class="token punctuation">:</span> 10.74.44.22 <span class="token comment"># serviceIP地址, 默认自动生成, 设置为None则为HeadLiness</span>
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">protocol</span><span class="token punctuation">:</span> TCP <span class="token comment"># 默认协议是TCP, 可以不写</span>
      <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">80</span> <span class="token comment"># service的端口</span>
      <span class="token key atrule">targetPort</span><span class="token punctuation">:</span> <span class="token number">9376</span> <span class="token comment"># 一组或一个pod, 集群内部暴露</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="nodeport" tabindex="-1"><a class="header-anchor" href="#nodeport" aria-hidden="true">#</a> NodePort</h4><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Service
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> my<span class="token punctuation">-</span>service
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">type</span><span class="token punctuation">:</span> NodePort
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> MyApp
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token comment"># 默认情况下，为了方便起见，\`targetPort\` 被设置为与 \`port\` 字段相同的值。</span>
    <span class="token punctuation">-</span> <span class="token key atrule">targetPort</span><span class="token punctuation">:</span> <span class="token number">80</span> <span class="token comment"># pod端口</span>
      <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">80</span> <span class="token comment"># service端口</span>
      <span class="token key atrule">nodePort</span><span class="token punctuation">:</span> <span class="token number">30007</span> <span class="token comment"># 主机端口（默认：30000-32767）</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="ingress" tabindex="-1"><a class="header-anchor" href="#ingress" aria-hidden="true">#</a> Ingress</h4><p>NodePort 在每个节点都会启动端口, 所以每个端口只能使用1次, 而实际访问中根据不同域名跳转到不同端口服务中. Ingress 公开了从集群外部到集群内服务的 HTTP 和 HTTPS 路由. 相当于Nginx 7层的负载均衡器. <code>kubectl get/describe ing</code>查看负载均衡器</p><ol><li>http</li></ol><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> networking.k8s.io/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Ingress
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> minimal<span class="token punctuation">-</span>ingress
  <span class="token key atrule">annotations</span><span class="token punctuation">:</span>
    <span class="token key atrule">nginx.ingress.kubernetes.io/rewrite-target</span><span class="token punctuation">:</span> /
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">rules</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">host</span><span class="token punctuation">:</span> xxx.com 访问该域名<span class="token punctuation">,</span> 转到下面定义的test service 80端口上去(需要解析域名<span class="token punctuation">,</span> 测试用hosts文件即可).另外记得加NodePort端口号
    <span class="token key atrule">http</span><span class="token punctuation">:</span>
      <span class="token key atrule">paths</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">path</span><span class="token punctuation">:</span> /
        <span class="token key atrule">backend</span><span class="token punctuation">:</span>
          <span class="token key atrule">serviceName</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>service
          <span class="token key atrule">servicePort</span><span class="token punctuation">:</span> <span class="token number">80</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>https 要添加证书文件</li></ol><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">tls</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> xxx.com
      <span class="token key atrule">secretName</span><span class="token punctuation">:</span> tls<span class="token punctuation">-</span>secret <span class="token comment"># 指定秘钥</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19),p=[l];function i(c,o){return s(),a("div",null,p)}const d=n(t,[["render",i],["__file","k8sService.html.vue"]]);export{d as default};
