import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e}from"./app-A10JnHE0.js";const t={},l=e(`<h1 id="matcher" tabindex="-1"><a class="header-anchor" href="#matcher" aria-hidden="true">#</a> matcher</h1><h2 id="持久化存储" tabindex="-1"><a class="header-anchor" href="#持久化存储" aria-hidden="true">#</a> 持久化存储</h2><p>容器销毁, 容器中的数据被清除</p><ul><li>简单存储: EmptyDir, HostPath, NFS</li><li>高级存储: PV, PVC</li><li>配置存储: ConfigMap, Secret</li></ul><h3 id="emptydir" tabindex="-1"><a class="header-anchor" href="#emptydir" aria-hidden="true">#</a> EmptyDir</h3><p>EmptyDir是Host上的空目录, 当Pod销毁时, EmptyDIr中的数据会被永久删除. 应用场景:</p><ul><li>临时数据存储</li><li>同一个pod多个container数据共享</li></ul><p><code>emptydir</code>是本地存储, pod重启后, 数据就不存在了</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Pod
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> redis
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">containers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> redis
    <span class="token key atrule">image</span><span class="token punctuation">:</span> redis
    <span class="token key atrule">volumeMounts</span><span class="token punctuation">:</span>  <span class="token comment"># 挂载pod中的volumes</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> redis<span class="token punctuation">-</span>storage  <span class="token comment"># pod volume的名称</span>
      <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /data/redis  <span class="token comment"># container中的路径</span>
  <span class="token key atrule">volumes</span><span class="token punctuation">:</span>  <span class="token comment"># pod中开启volumes</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> redis<span class="token punctuation">-</span>storage  <span class="token comment"># 在pod中开启目录</span>
    <span class="token key atrule">emptyDir</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>  <span class="token comment"># 默认随机分配</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="hostpath" tabindex="-1"><a class="header-anchor" href="#hostpath" aria-hidden="true">#</a> HostPath</h3><p>将Node主机中的实际目录挂在pod中.</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">containers</span><span class="token punctuation">:</span>
    <span class="token key atrule">volumeMounts</span><span class="token punctuation">:</span>  <span class="token comment"># 挂载pod中的volumes</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> logs<span class="token punctuation">-</span>volume  <span class="token comment"># pod volume的名称</span>
      <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /data/redis  <span class="token comment"># container中的路径</span>
  <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> logs<span class="token punctuation">-</span>volume
      <span class="token key atrule">hostPath</span><span class="token punctuation">:</span>  <span class="token comment"># 使用Node物理机的路径</span>
        <span class="token key atrule">path</span><span class="token punctuation">:</span> /root/logs
        <span class="token key atrule">type</span><span class="token punctuation">:</span> DirectoryOrCreate  <span class="token comment"># 默认, 目录存在就使用, 不存在就创建</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="nfs-网络存储" tabindex="-1"><a class="header-anchor" href="#nfs-网络存储" aria-hidden="true">#</a> nfs 网络存储</h3><p>搭建一台NFS服务器, 将Pod中的数据存储到NFS服务器上.</p><ol><li>配一台nfs服务器 <code>yum install -y nfs-utils</code><code>vi /etc/exports</code> -&gt; <code>/data/nfs *(rw, no_root_squash)</code></li><li>启动nfs <code>systemctl start nfs</code></li><li>node节点上安装nfs <code>yum install -y nfs-utils</code></li><li>k8s部署应用 <code>nfs-nginx.yaml</code></li></ol><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">containers</span><span class="token punctuation">:</span>
    <span class="token key atrule">volumeMounts</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> wwwroot
      <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /usr/share/nginx/html
  <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> wwwroot
      <span class="token key atrule">nfs</span><span class="token punctuation">:</span>
        <span class="token key atrule">server</span><span class="token punctuation">:</span> 192.168.13.21
        <span class="token key atrule">path</span><span class="token punctuation">:</span> /data/nfs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="pv和pvc" tabindex="-1"><a class="header-anchor" href="#pv和pvc" aria-hidden="true">#</a> PV和PVC</h3><p><code>管理员</code>封装NFS构建过程, 直接给<code>用户</code>提供接口 PV(Persistent Volume) 管理员维护 PVC(Persistent Volume Claim) 用户维护</p><h4 id="管理员配置pv" tabindex="-1"><a class="header-anchor" href="#管理员配置pv" aria-hidden="true">#</a> 管理员配置pv</h4><p>没有namespace, 集群资源</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> PersistentVolume
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> my<span class="token punctuation">-</span>pv
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">capacity</span><span class="token punctuation">:</span>  <span class="token comment"># 存储能力</span>
    <span class="token key atrule">storage</span><span class="token punctuation">:</span> 5Gi  <span class="token comment"># 能存多少数据</span>
  <span class="token key atrule">accessModes</span><span class="token punctuation">:</span>  <span class="token comment"># 访问模式</span>
    <span class="token punctuation">-</span> ReadWriteMany  <span class="token comment"># 读写 能让多个pvc挂载</span>
  <span class="token key atrule">nfs</span><span class="token punctuation">:</span>
    <span class="token key atrule">path</span><span class="token punctuation">:</span> /k8s/nfs
    <span class="token key atrule">server</span><span class="token punctuation">:</span> 192.168.44.134
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="pvc用户使用" tabindex="-1"><a class="header-anchor" href="#pvc用户使用" aria-hidden="true">#</a> PVC用户使用</h4><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> PersistentVolumeClaim
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> my<span class="token punctuation">-</span>pvc
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">accessModes</span><span class="token punctuation">:</span>  <span class="token comment"># 访问模式</span>
    <span class="token punctuation">-</span> ReadWriteMany
  <span class="token key atrule">resources</span><span class="token punctuation">:</span>  <span class="token comment"># 声明需要的资源</span>
    <span class="token key atrule">requests</span><span class="token punctuation">:</span>
      <span class="token key atrule">storage</span><span class="token punctuation">:</span> 5Gi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="生命周期" tabindex="-1"><a class="header-anchor" href="#生命周期" aria-hidden="true">#</a> 生命周期</h4><ol><li>Available 可用, 但还未被PVC绑定</li><li>Bound PV被PVC绑定</li><li>Released PVC被删除, 但还未被集群重新使用</li><li>Failed PV自动回收失败</li></ol><h3 id="config" tabindex="-1"><a class="header-anchor" href="#config" aria-hidden="true">#</a> config</h3><ul><li>在运行时, 支持动态更新</li></ul><ol><li>创建configmap</li></ol><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> ConfigMap
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> configmap
<span class="token key atrule">data</span><span class="token punctuation">:</span>
  <span class="token key atrule">info</span><span class="token punctuation">:</span>  <span class="token comment"># 在container中生成info文件 ,内容是 username和password</span>
    <span class="token key atrule">username</span><span class="token punctuation">:</span> wang
    <span class="token key atrule">password</span><span class="token punctuation">:</span> <span class="token number">12345</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>使用configmap</li></ol><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Pod
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> mypod
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">containers</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> busybox
      <span class="token key atrule">image</span><span class="token punctuation">:</span> busybox
      <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;/bin/sh&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;-c&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;cat /etc/config/info&quot;</span> <span class="token punctuation">]</span>
      <span class="token key atrule">volumeMounts</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> config<span class="token punctuation">-</span>volume
        <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /etc/config
  <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> config<span class="token punctuation">-</span>volume
      <span class="token key atrule">configMap</span><span class="token punctuation">:</span>
        <span class="token key atrule">name</span><span class="token punctuation">:</span> configmap
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="scret" tabindex="-1"><a class="header-anchor" href="#scret" aria-hidden="true">#</a> scret</h3><ol><li>使用base64对数据进行编码 <code>echo -n &#39;admin&#39; | base64</code><code>echo -n &#39;123455&#39; | base64</code></li><li>编写secret.yml</li></ol><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Secret
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> mysecret
<span class="token key atrule">type</span><span class="token punctuation">:</span> Opaque
<span class="token key atrule">data</span><span class="token punctuation">:</span>
  <span class="token key atrule">username</span><span class="token punctuation">:</span> YWRtaW4=
  <span class="token key atrule">password</span><span class="token punctuation">:</span> MTIzNDU2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>使用scret</li></ol><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Pod
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> mypod
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">containers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx
    <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx
    <span class="token key atrule">volumeMounts</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> foo
      <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> <span class="token string">&quot;/etc/foo&quot;</span>
  <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> foo
    <span class="token key atrule">secret</span><span class="token punctuation">:</span>
      <span class="token key atrule">secretName</span><span class="token punctuation">:</span> mysecret
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,36),p=[l];function i(c,o){return s(),a("div",null,p)}const r=n(t,[["render",i],["__file","k8sPersistence.html.vue"]]);export{r as default};
