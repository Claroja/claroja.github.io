import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as e}from"./app-7knaTE3M.js";const i="/assets/1-TLqgu-9V.png",t="/assets/2-CO757544.png",r="/assets/3-A9YVP5Vt.png",c="/assets/4-kJEvGv3d.png",o="/assets/5-MZEwCpl_.png",l={},d=e('<h1 id="revert" tabindex="-1"><a class="header-anchor" href="#revert" aria-hidden="true">#</a> revert</h1><h2 id="idea演示" tabindex="-1"><a class="header-anchor" href="#idea演示" aria-hidden="true">#</a> idea演示</h2><p>1.准备数据,每次提交一行 <img src="'+i+'" alt="" loading="lazy"> 2.revert 到version2 <img src="'+t+'" alt="" loading="lazy"> 3.弹出冲突 <img src="'+r+'" alt="" loading="lazy"> 4.处理冲突 <img src="'+c+'" alt="" loading="lazy"> 5.跳出正常的commit处理界面 <img src="'+o+`" alt="" loading="lazy"></p><h2 id="git-命令操作" tabindex="-1"><a class="header-anchor" href="#git-命令操作" aria-hidden="true">#</a> git 命令操作</h2><p>以上操作相当于</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>//1.指定revert的commit,HEAD~2是自身以0为起点,数三个commit<span class="token punctuation">(</span>version2<span class="token punctuation">)</span>,然后用下一个<span class="token punctuation">(</span>version1<span class="token punctuation">)</span>的commit来merge
<span class="token function">git</span> revert HEAD~2//或者git revert 4c7907<span class="token punctuation">(</span>version的id<span class="token punctuation">)</span>
//2.处理冲突
处理冲突
//3.继续
<span class="token function">git</span> revert <span class="token parameter variable">--continue</span>
//4.冲突后的文件修改
<span class="token function">git</span> <span class="token function">add</span> ./
//5.提交
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&#39;Revert Version2&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),p=[d];function m(v,u){return s(),a("div",null,p)}const _=n(l,[["render",m],["__file","revert.html.vue"]]);export{_ as default};
