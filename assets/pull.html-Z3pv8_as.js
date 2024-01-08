import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as d,e as n}from"./app-YE2Hltoy.js";const s={},a=n(`<h1 id="pull" tabindex="-1"><a class="header-anchor" href="#pull" aria-hidden="true">#</a> pull</h1><p><code>git pull</code> is shorthand for <code>git fetch</code> followed by <code>git merge</code> FETCH_HEAD.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git pull [host] [branch]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>等价于</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git fetch [host] [branch]
git merge origin/branch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>注意是当前的分支,而不是对应名字的分支。也就是说，如果当前的分支是<code>dev</code>，执行<code>git merge</code>，则是将<code>origin/master</code>与<code>dev</code>合并，而不是和本地的<code>master</code>合并。</p><p>如图，有三个分支：</p><ol><li>远程的分支：master on origin</li><li>本地的local分支：master</li><li>本地的remote分支：origin/master</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>      A---B---C master on origin
     /
D---E---F---G master
    ^
    origin/master <span class="token keyword">in</span> your repository
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用<code>git pull</code>之后:</p><ol><li>本地remote分支<code>origin/master</code>会与远程的<code>master on origin</code>进行同步</li><li>同步和本地的<code>master</code>分支进行和并, <code>merge</code>的第一步.</li><li>合并后进行提交, <code>merge</code>的第二步</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>        A---B---C master on origin
       /         
      A---B---C origin/master
     /         <span class="token punctuation">\\</span>
D---E---F---G---H master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),l=[a];function r(o,c){return i(),d("div",null,l)}const u=e(s,[["render",r],["__file","pull.html.vue"]]);export{u as default};
