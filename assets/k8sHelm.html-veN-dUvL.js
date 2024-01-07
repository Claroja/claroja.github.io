import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as l,e as i}from"./app-SnI5rGHA.js";const r={},c=i(`<h1 id="第五编婚姻家庭-第三章家庭关系" tabindex="-1"><a class="header-anchor" href="#第五编婚姻家庭-第三章家庭关系" aria-hidden="true">#</a> 第五编婚姻家庭-第三章家庭关系</h1><h3 id="helm" tabindex="-1"><a class="header-anchor" href="#helm" aria-hidden="true">#</a> Helm</h3><p>Helm 是一个 Kubernetes 的包管理工具, 将之前打包好的 yaml 文件部署到kubernetes 上. Helm 有 3 个重要概念：</p><ul><li>helm: 一个命令行客户端工具, 用于chart的创建、打包、发布和管理。</li><li>Chart: yaml的集合</li><li>Release: Chart应用的某个版本</li></ul><div class="language-s line-numbers-mode" data-ext="s"><pre class="language-s"><code>helm repo add aliyun https://kubernetes.oss-cn-hangzhou.aliyuncs.com/charts
helm repo remove aliyun
helm repo update
helm repo list
helm search repo stable

chart install
chart upgrade
chart rollback
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用开源chart" tabindex="-1"><a class="header-anchor" href="#使用开源chart" aria-hidden="true">#</a> 使用开源chart</h3><ol><li><code>helm search repo weave</code> 查看chart</li><li><code>helm install ui stable/weave-scope</code> 安装chart</li><li><code>helm list</code> <code>helm status ui</code> 查看信息</li><li>修改 service Type: NodePort 即可访问 ui</li></ol><h3 id="自定义chart" tabindex="-1"><a class="header-anchor" href="#自定义chart" aria-hidden="true">#</a> 自定义chart</h3><ol><li><p><code>helm create mychart</code><code>tree mychart/</code>文件说明 mychart/ ├── charts # 依赖的所有子chart ├── Chart.yaml # Chart 的基本信息，包括名字版本等 ├── templates # 存放所有yaml模板文件. <code>{{ .Release.Name }}</code>可以获得版本号, 经常用name后 │ ├── deployment.yaml │ ├── _helpers.tpl │ ├── ingress.yaml │ ├── NOTES.txt # Chart帮助信息, helm install部署后展示给用户 │ └── service.yaml └── values.yaml # 存储templates模板中用到变量, templates文件可以使用<code>{{ .Values.Val }}</code>来取值.</p></li><li><p><code>helm install web mychart/</code> 安装</p></li><li><p><code>helm package mychart/</code> 打包发布给其他人</p></li></ol>`,9),s=[c];function t(d,h){return a(),l("div",null,s)}const m=e(r,[["render",t],["__file","k8sHelm.html.vue"]]);export{m as default};
