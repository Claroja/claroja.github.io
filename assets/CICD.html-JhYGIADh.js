import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as i}from"./app-9tftCahk.js";const t={},n=i(`<h1 id="cicd" tabindex="-1"><a class="header-anchor" href="#cicd" aria-hidden="true">#</a> CICD</h1><p>A pipeline is a collection of jobs split in different stages.</p><p>一个pipeline是由分配在不同stages的jobs组成的. 在同一个stage的job会并发执行.一般来说, 后一个stage会在前一个stage所有job执行成功后触发.</p><p>job: 定义具体的执行, 比如: 编译或者测试代码 stage: 定义何时运行job, 比如: test code stage在compile code stage之后</p><figure><img src="https://about.gitlab.com/images/blogimages/pipeline-overview.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>比较典型的pipeline包含以下的stages:</p><ol><li>build stage, 包含的job称为compile</li><li>test stage, 包含的job称为test</li><li>staging stage, 包含的job称为deploy-to-stage</li><li>production stage, 包含的job称为deploy-to-prod</li></ol><h2 id="job" tabindex="-1"><a class="header-anchor" href="#job" aria-hidden="true">#</a> job</h2><p>job的命令,跑在<code>runner</code>(实际上就是一台服务器)上, 每个job是独立的. 在<code>.gitlab-ci.yml</code>中定义job</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>job1: <span class="token comment"># job的id</span>
  script: <span class="token string">&quot;make;make install&quot;</span> <span class="token comment"># 执行的脚本</span>
job2:
  script: <span class="token string">&quot;test.sh&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="stage" tabindex="-1"><a class="header-anchor" href="#stage" aria-hidden="true">#</a> stage</h2><p>stage可以包含一组job, 先在全局定义.</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">stages</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> build
  <span class="token punctuation">-</span> test
  <span class="token punctuation">-</span> deploy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>所有在build stage中的job, 并发执行</li><li>所有build stage的job执行成功后, 触发test的执行</li><li>如果所有deploy stage执行成功, pipeline就passed</li><li>任何的job失败, pipline都会failed, 其后的stage也不会执行</li><li>如果在<code>.gitloab-ci.yml</code>中没有定义stages, 默认会有build, test, deploy三个stages</li></ul><p>参考: https://docs.gitlab.com/ee/ci/jobs/index.html https://docs.gitlab.com/ee/ci/yaml/index.html#stages https://about.gitlab.com/blog/2018/01/22/a-beginners-guide-to-continuous-integration/</p>`,15),l=[n];function o(d,c){return s(),a("div",null,l)}const b=e(t,[["render",o],["__file","CICD.html.vue"]]);export{b as default};
