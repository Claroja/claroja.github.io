import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as e}from"./app-9tftCahk.js";const t={},l=e(`<h1 id="第一编总则-第六章证据" tabindex="-1"><a class="header-anchor" href="#第一编总则-第六章证据" aria-hidden="true">#</a> 第一编总则_第六章证据</h1><h2 id="job-一次性任务" tabindex="-1"><a class="header-anchor" href="#job-一次性任务" aria-hidden="true">#</a> Job 一次性任务</h2><p>执行一次就停止</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> batch/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Job
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> pi
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">template</span><span class="token punctuation">:</span>
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token key atrule">containers</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> pi
        <span class="token key atrule">image</span><span class="token punctuation">:</span> perl
        <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;perl&quot;</span><span class="token punctuation">,</span>  <span class="token string">&quot;-Mbignum=bpi&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;-wle&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;print bpi(2000)&quot;</span><span class="token punctuation">]</span>
      <span class="token key atrule">restartPolicy</span><span class="token punctuation">:</span> Never
  <span class="token key atrule">backoffLimit</span><span class="token punctuation">:</span> <span class="token number">4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>创建<code>kubectl apply -f ./job.yaml</code></li><li>查看状态 <code>kubectl describe jobs/pi</code></li><li>查看输出 <code>kubectl logs $pods</code></li></ol><h2 id="cronjob-定时任务" tabindex="-1"><a class="header-anchor" href="#cronjob-定时任务" aria-hidden="true">#</a> cronjob 定时任务</h2><p>cronjob.yml</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> batch/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> CronJob
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> hello
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">schedule</span><span class="token punctuation">:</span> <span class="token string">&quot;*/1 * * * *&quot;</span>
  <span class="token key atrule">jobTemplate</span><span class="token punctuation">:</span>
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token key atrule">template</span><span class="token punctuation">:</span>
        <span class="token key atrule">spec</span><span class="token punctuation">:</span>
          <span class="token key atrule">containers</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> hello
            <span class="token key atrule">image</span><span class="token punctuation">:</span> busybox
            <span class="token key atrule">imagePullPolicy</span><span class="token punctuation">:</span> IfNotPresent
            <span class="token key atrule">command</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> /bin/sh
            <span class="token punctuation">-</span> <span class="token punctuation">-</span>c
            <span class="token punctuation">-</span> date; echo Hello from the Kubernetes cluster
          <span class="token key atrule">restartPolicy</span><span class="token punctuation">:</span> OnFailure
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Cron 时间表语法</p><div class="language-s line-numbers-mode" data-ext="s"><pre class="language-s"><code>## ┌───────────── 分钟 (0 - 59)
## │ ┌───────────── 小时 (0 - 23)
## │ │ ┌───────────── 月的某天 (1 - 31)
## │ │ │ ┌───────────── 月份 (1 - 12)
## │ │ │ │ ┌───────────── 周的某天 (0 - 6) （周日到周一；在某些系统上，7 也是星期日）
## │ │ │ │ │                                   
## │ │ │ │ │
## │ │ │ │ │
## * * * * *
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),i=[l];function p(c,o){return s(),a("div",null,i)}const r=n(t,[["render",p],["__file","k8sJob.html.vue"]]);export{r as default};
