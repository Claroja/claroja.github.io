import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as c,o as r,c as t,f as d,a as e,b as l,d as i,e as n}from"./app-jdLxCr9I.js";const s={},u=e("h1",{id:"changevar",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#changevar","aria-hidden":"true"},"#"),l(" changeVar")],-1),h=e("p",null,"kubernetes，简称 K8s，是用 8 代替 8 个字符“ubernete”而成的缩写. 是容器编排工具, 占有率最高(Docker自己的Swarm占有率太低).",-1),p=n('<ul><li>自我修复 容器崩溃, 能迅速启动新的容器</li><li>弹性伸缩 对容器数量进行调整</li><li>服务发现 自动发现依赖的服务</li><li>负载均衡 多个pod, 自动实现负载均衡</li><li>版本回退 可以回退版本</li><li>存储编排 支持多种类型存储卷</li></ul><h3 id="组件" tabindex="-1"><a class="header-anchor" href="#组件" aria-hidden="true">#</a> 组件:</h3><ul><li>master(控制节点) <ul><li>ApiServer 唯一<code>控制</code>(非服务)的入口, 接受客户端命令, 进行鉴权等</li><li>Scheduler 资源调度, 将pod调度到不同的node上(进行计算)</li><li>ControllerManager, 负责维护集群状态(进行执行)</li><li>Etcd: 存储对象的信息</li></ul></li><li>node(工作节点) <ul><li>KubeProxy 负责服务发现和负载均衡</li><li>Kubelet 控制docker, 来创建/更新/销毁容器</li><li>Docker</li></ul></li></ul><h3 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念:</h3><p>Master: 集群控制节点 Node: 物理节点 Pod: k8s最小控制单元, 一个pod可以有一个或多个container Controller: 管理Pod, 比如启动pod, 停止pod, 伸缩pod Service: Pod对外服务的统一入口 Label: 对Pod进行分类, 方便Controller和Service进行管理 NameSpace: 隔离不同Pod的运行环境</p><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3>',6),b={href:"https://minikube.sigs.k8s.io/docs/",target:"_blank",rel:"noopener noreferrer"},_=e("code",null,"minikube start --driver=none",-1),k=e("ul",null,[e("li",null,[e("code",null,"yum install conntrack")]),e("li",null,[e("code",null,'echo "1">/proc/sys/net/bridge/bridge-nf-call-iptables'),l(" 或者修改"),e("code",null,"etc/sysctl.d/kubernetes.conf"),l(" 文件 "),e("code",null,"net.bridge.bridge-nf-call-iptables = 1")])],-1),f={href:"https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/#install-using-native-package-management",target:"_blank",rel:"noopener noreferrer"},m=n('<h3 id="命令" tabindex="-1"><a class="header-anchor" href="#命令" aria-hidden="true">#</a> 命令</h3><ol><li>通过命令 通过<code>get/describe</code> <code>delete</code> <code>creeate</code> 等命令 对`namespace(ns), pod, label, deployment(deploy), service(svc)对象进行管理</li></ol><ul><li>获取对象信息 <code>kubectl get/describe OBJECT NAME PARAM</code></li><li></li></ul><p><code>kubectl run nginx --image=nginx:1.17.1 --port=80</code> 2. 通过配置文件</p><ul><li>create 创建对象 <code>kubectl create -f nginx.yaml</code>, <code>kubectl apply -f configs/</code>, <code>kubectl apply -R -f configs/</code></li><li>delete 删除对象 <code>kubectl delete -f nginx.yaml -f redis.yaml</code></li><li>replace 更新对象或创建(没有则创建, 有了则更新) <code>kubectl replace -f nginx.yaml</code></li></ul>',5);function g(x,v){const o=c("ExternalLinkIcon");return r(),t("div",null,[u,h,d("more"),p,e("p",null,[l("使用"),e("a",b,[l("minikube"),i(o)]),l(" 在虚拟机开启时,使用 "),_,l(" 可能遇到的问题:")]),k,e("p",null,[l("安装"),e("a",f,[l("kubectl"),i(o)])]),m])}const P=a(s,[["render",g],["__file","kebernetes.html.vue"]]);export{P as default};
