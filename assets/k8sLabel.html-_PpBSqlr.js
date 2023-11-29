import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as n,e as s}from"./app-M6UUlHgF.js";const l={},c=s(`<h1 id="任务" tabindex="-1"><a class="header-anchor" href="#任务" aria-hidden="true">#</a> 任务</h1><h2 id="label" tabindex="-1"><a class="header-anchor" href="#label" aria-hidden="true">#</a> label</h2><p>以key: value的形式附加在资源上(Node/Pod/Service)</p><h3 id="命令行控制" tabindex="-1"><a class="header-anchor" href="#命令行控制" aria-hidden="true">#</a> 命令行控制</h3><ul><li>给pod添加标签 <code>kubectl label pod [NAME] [KEY=VALUE]</code></li><li>查看pod的标签 <code>kubectl get pod --show-labels</code></li><li>根据lable查找pod <code>kubectl get pod -l [KEY=VALUE]</code></li><li>覆盖已有的标签key <code>kubectl label pod [NAME] [KEY=VALUE] --overwrite</code></li><li>删除标签 <code>kubectl label pod [NAME] [KEY]-</code></li></ul><h3 id="yaml文件控制" tabindex="-1"><a class="header-anchor" href="#yaml文件控制" aria-hidden="true">#</a> yaml文件控制</h3><p>Label使用<code>metadata.labels</code>字段, 来为对象添加标签，通过<code>spec.selector</code>来引用对象 <code>kubectl create/apply -f [YAML_PATH]</code></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Pod
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> myapp<span class="token punctuation">-</span>pod
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> myapp
    <span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),t=[c];function d(o,i){return a(),n("div",null,t)}const u=e(l,[["render",d],["__file","k8sLabel.html.vue"]]);export{u as default};
