import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as l,o as i,c,a as n,b as a,d as e,e as o}from"./app-qxiCM96p.js";const p={},u=o(`<h1 id="actions" tabindex="-1"><a class="header-anchor" href="#actions" aria-hidden="true">#</a> actions</h1><h1 id="github-actions" tabindex="-1"><a class="header-anchor" href="#github-actions" aria-hidden="true">#</a> github_actions</h1><p>在上传github时, 自动触发工作流(workflow). 比如vuepress提交源码时, 在github服务器上自动触发编译, 生成githubpages. 配置文件下载git项目的<code>.github/workflows/deploy-docs.yml</code>中.</p><h2 id="关键字段解释" tabindex="-1"><a class="header-anchor" href="#关键字段解释" aria-hidden="true">#</a> 关键字段解释</h2><ul><li><p><code>name</code>: workflow 的名称。如果省略该字段，默认为当前 workflow 的文件名, 如<code>name: GitHub Actions Test</code></p></li><li><p><code>on</code>: 定触发 workflow 的条件, 可以是单个事件, 如<code>on: push</code>, 也可以是多个<code>on: [push, pull_request]</code>. 另外还可以指定事件具体内容, 如指定<code>push</code>的<code>branch</code></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">on</span><span class="token punctuation">:</span>
<span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>jobs</code>: 文件的主体, 任务的具体内容</p><ul><li><p><code>job_id</code>, 每个<code>job_id</code>对应一个工作流. <code>name</code>是别名</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">jobs</span><span class="token punctuation">:</span>
    <span class="token key atrule">my_first_job</span><span class="token punctuation">:</span>
        <span class="token key atrule">name</span><span class="token punctuation">:</span> My first job
    <span class="token key atrule">my_second_job</span><span class="token punctuation">:</span>
        <span class="token key atrule">name</span><span class="token punctuation">:</span> My second job
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>needs</code>, 定当前任务的依赖关系，即运行顺序。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>
<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
<span class="token key atrule">job1</span><span class="token punctuation">:</span>
<span class="token key atrule">job2</span><span class="token punctuation">:</span>
    <span class="token key atrule">needs</span><span class="token punctuation">:</span> job1
<span class="token key atrule">job3</span><span class="token punctuation">:</span>
    <span class="token key atrule">needs</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>job1<span class="token punctuation">,</span> job2<span class="token punctuation">]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>runs-on</code>, 指定运行所需要的虚拟机环境, 在github服务器上, 非本地, 如<code>runs-on: ubuntu-18.04</code></p></li><li><p><code>steps</code>, 指定每个 Job 的运行步骤, 每个步骤都可以指定:</p><ul><li><code>name</code>：步骤名称。</li><li><code>run</code>：该步骤运行的<code>action</code>, 就是命令</li><li><code>env</code>：该步骤所需的环境变量</li><li><code>uses</code>: 使用现有的<code>actions</code></li><li><code>with</code>: <code>uses</code>所需的参数</li></ul></li></ul></li></ul><h2 id="实践" tabindex="-1"><a class="header-anchor" href="#实践" aria-hidden="true">#</a> 实践</h2><p>这个是vuepress-hope主题创建时, 选择创建的. 仅需要在注释处做自定义的修改即可. 每次<code>push</code>源码后, 可以在<code>github</code>的<code>actions</code>中查看自动化流程</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>
<span class="token key atrule">name</span><span class="token punctuation">:</span> 部署文档

<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span>
      <span class="token comment"># 确保这是你正在使用的分支名称</span>
      <span class="token punctuation">-</span> source

<span class="token key atrule">permissions</span><span class="token punctuation">:</span>
  <span class="token key atrule">contents</span><span class="token punctuation">:</span> write

<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">deploy-gh-pages</span><span class="token punctuation">:</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">fetch-depth</span><span class="token punctuation">:</span> <span class="token number">0</span>
          <span class="token comment"># 如果你文档需要 Git 子模块，取消注释下一行</span>
          <span class="token comment"># submodules: true</span>



      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 设置 Node.js
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">node-version</span><span class="token punctuation">:</span> <span class="token number">20</span>
          <span class="token key atrule">cache</span><span class="token punctuation">:</span> npm

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 安装依赖
        <span class="token key atrule">run</span><span class="token punctuation">:</span> npm ci

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 构建文档
        <span class="token key atrule">env</span><span class="token punctuation">:</span>
          <span class="token key atrule">NODE_OPTIONS</span><span class="token punctuation">:</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>max_old_space_size=8192
        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token punctuation">-</span>
          npm run docs<span class="token punctuation">:</span>build
          <span class="token punctuation">&gt;</span> src/.vuepress/dist/.nojekyll

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 部署文档
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> JamesIves/github<span class="token punctuation">-</span>pages<span class="token punctuation">-</span>deploy<span class="token punctuation">-</span>action@v4
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token comment"># 这是文档部署到的分支名称</span>
          <span class="token key atrule">branch</span><span class="token punctuation">:</span> main
          <span class="token key atrule">folder</span><span class="token punctuation">:</span> src/.vuepress/dist
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考:</p>`,9),d={href:"https://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html",target:"_blank",rel:"noopener noreferrer"},r={href:"https://docs.github.com/zh/actions",target:"_blank",rel:"noopener noreferrer"};function k(v,m){const s=l("ExternalLinkIcon");return i(),c("div",null,[u,n("ul",null,[n("li",null,[n("a",d,[a("GitHub Actions 入门教程"),e(s)])]),n("li",null,[n("a",r,[a("GitHub Actions 文档"),e(s)])])])])}const y=t(p,[["render",k],["__file","actions.html.vue"]]);export{y as default};
