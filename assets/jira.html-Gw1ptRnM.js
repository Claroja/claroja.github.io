import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as r,e as i}from"./app-0JgdiRQ-.js";const o={},s=i('<h1 id="apply" tabindex="-1"><a class="header-anchor" href="#apply" aria-hidden="true">#</a> apply</h1><h2 id="jira" tabindex="-1"><a class="header-anchor" href="#jira" aria-hidden="true">#</a> jira</h2><ol><li><mark>dashboards</mark>添加仪表盘, 添加挂件来查看<mark>filter</mark>,<mark>calendar</mark>等 <ol><li><mark>filter results</mark> 用来展示<mark>filter</mark>的结果</li><li><mark>calendar</mark> 用来展示日历, 在日历中设置颜色标记</li></ol></li><li><mark>project</mark>用来设置项目</li><li><mark>issues</mark>用来设置<mark>filter</mark></li><li><mark>tempo</mark>用来管理工时</li><li><mark>boards</mark>看板, 不常用</li><li><mark>calendar</mark>用来设置日历</li></ol><h2 id="dashboard" tabindex="-1"><a class="header-anchor" href="#dashboard" aria-hidden="true">#</a> dashboard</h2><ol><li>在<code>dashboard</code>中添加<code>Filter Results</code> 的 <code>gadget</code>, 用以展示需要的<code>issue</code></li></ol><h2 id="project" tabindex="-1"><a class="header-anchor" href="#project" aria-hidden="true">#</a> project</h2><ol><li>点击左下角<mark>Project settings</mark>进行项目的配置</li><li><mark>workflows</mark>用来配置<mark>issue</mark>的工作流程</li><li><mark>screens</mark>用来配置<mark>issue</mark>的类型</li><li><mark>fields</mark>用来配置<mark>issue</mark>的显示字段</li><li><mark>priorities</mark>用来配置<mark>issue</mark>的优先级</li><li><mark>versions</mark>用来配置版本发布</li><li><mark>components</mark>用来设置模块</li></ol><h2 id="issue和filter" tabindex="-1"><a class="header-anchor" href="#issue和filter" aria-hidden="true">#</a> issue和filter</h2><h3 id="issue" tabindex="-1"><a class="header-anchor" href="#issue" aria-hidden="true">#</a> issue</h3><ol><li>一个项目下有很多<code>issue</code>, 一般都设置类型为<code>task</code>的<code>issue</code></li><li>一个<code>issue</code>下可以设置<code>child issue</code>. 建议使用<code>child issue</code>进行项目分阶段管理</li></ol><h3 id="filter" tabindex="-1"><a class="header-anchor" href="#filter" aria-hidden="true">#</a> filter</h3><ol><li>筛选器用来对issue进行筛选</li><li>点击<code>Issues</code>, 点击<code>Search for Issues</code></li><li>使用<code>advance</code>模式集合<code>jql</code>语法, 对<code>issue</code>进行过滤. 最佳时间是: <ol><li><code>project = 项目名称 AND status in (Open, &quot;In Progress&quot;, Reopened, &quot;To Do&quot;)</code> 查看自己负责的项目正在进行的issue</li><li><code>project != 项目名称 AND assignee = currentUser() AND status in (Open, &quot;In Progress&quot;, Reopened, &quot;To Do&quot;)</code> 查看非自己负责的项目的issue</li></ol></li><li>将filter保存下来</li></ol>',12),l=[s];function d(c,t){return a(),r("div",null,l)}const n=e(o,[["render",d],["__file","jira.html.vue"]]);export{n as default};
