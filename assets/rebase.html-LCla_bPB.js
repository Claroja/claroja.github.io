import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as d,c as o,e as c}from"./app-SnI5rGHA.js";const a="/assets/1-y-DEloIC.png",i={},t=c('<h1 id="rebase" tabindex="-1"><a class="header-anchor" href="#rebase" aria-hidden="true">#</a> rebase</h1><p>git rebase: 更改当前分支的根基(Move the base of a branch)</p><h2 id="命令" tabindex="-1"><a class="header-anchor" href="#命令" aria-hidden="true">#</a> 命令</h2><p><code>git rebase -i [&lt;upstream&gt; [&lt;branch&gt;]]</code></p><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td><code>branch</code></td><td>默认停留在当前的分支, 如果指定<code>branch</code>, 则自动执行<code>git switch &lt;branch&gt;</code></td></tr><tr><td><code>&lt;upstream&gt;</code></td><td>默认指向输入的<code>&lt;branch&gt;</code>, 如果不指定<code>&lt;branch&gt;</code>或<code>&lt;upstream&gt;</code>, 则会退出</td></tr></tbody></table><h2 id="应用" tabindex="-1"><a class="header-anchor" href="#应用" aria-hidden="true">#</a> 应用</h2><h3 id="替换merge" tabindex="-1"><a class="header-anchor" href="#替换merge" aria-hidden="true">#</a> 替换<code>merge</code></h3><p><code>git rebase branch</code></p><figure><img src="'+a+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="更改指定提交的信息" tabindex="-1"><a class="header-anchor" href="#更改指定提交的信息" aria-hidden="true">#</a> 更改指定提交的信息</h3><p>假设有提交<code>A-B-C-D-E-F</code>, <code>HEAD</code>指向<code>F</code>, 需要修改<code>C</code>和<code>D</code>的 author.</p><ol><li><p><code>git rebase -i B</code>, 将<code>C-D-E-F</code>取出, 并将<code>B</code>作为base</p></li><li><p>将<code>C</code>和<code>D</code> 之前的<code>pick</code> 更改为<code>edit</code></p></li><li><p>退出编辑器(在<code>vim</code>中是<code>:wq</code>)</p></li><li><p><code>rebase</code>会在<code>C</code>暂停</p></li><li><p>使用<code>git commit --amend --author=&quot;Author Name &lt;email@address.com&gt;&quot;</code> 重新提交<code>C</code></p></li><li><p>再次执行<code>git rebase --continue</code></p></li><li><p><code>rebase</code>会在<code>D</code>暂停</p></li><li><p><code>git commit --amend --author=&quot;Author Name &lt;email@address.com&gt;&quot;</code> 重新提交<code>D</code></p></li><li><p><code>rebae</code>完成</p></li><li><p><code>git push -f</code> 更新<code>origin</code></p></li></ol><h3 id="更改提交顺序" tabindex="-1"><a class="header-anchor" href="#更改提交顺序" aria-hidden="true">#</a> 更改提交顺序</h3><p>假设有提交<code>A-B-C-D-E-F</code>, <code>HEAD</code>指向<code>F</code>, 需要修改<code>C</code>和<code>D</code>的顺序</p><ol><li><p><code>git rebase -i B</code>, 将<code>C-D-E-F</code>取出, 并将<code>B</code>作为base</p></li><li><p><code>C</code>和<code>D</code> 两行进行替换即可</p></li></ol><h3 id="合并多次提交" tabindex="-1"><a class="header-anchor" href="#合并多次提交" aria-hidden="true">#</a> 合并多次提交</h3><p>假设有提交<code>A-B-C-D-E-F</code>, <code>HEAD</code>指向<code>F</code>, 需要将<code>C</code>,<code>D</code>,<code>E</code>进行合并</p><ol><li><p><code>git rebase -i B</code>, 将<code>C-D-E-F</code>取出, 并将<code>B</code>作为base</p></li><li><p>将<code>C</code>,<code>D</code>,<code>E</code>之前的个<code>pick</code>更改为<code>squash</code></p></li></ol><h3 id="分开一次提交" tabindex="-1"><a class="header-anchor" href="#分开一次提交" aria-hidden="true">#</a> 分开一次提交</h3><h3 id="替代-amend" tabindex="-1"><a class="header-anchor" href="#替代-amend" aria-hidden="true">#</a> 替代<code>--amend</code></h3><p><code>--amend</code>只能合并上一次的提交, 而<code>git rebase</code>可以合并指定的提交</p><p>假设有提交<code>A-B-C-D-E-F</code>, <code>HEAD</code>指向<code>F</code>, 需要使用<code>F</code>的提交和<code>C</code>的提交进行合并</p><ol><li><p><code>git rebase -i B</code>, 将<code>C-D-E-F</code>取出, 并将<code>B</code>作为base</p></li><li><p>将<code>F</code>提交放在<code>C</code>后, 并将<code>F</code>前面的<code>pick</code>更改为<code>fixup</code>(修复上面的的)</p></li></ol><h2 id="root" tabindex="-1"><a class="header-anchor" href="#root" aria-hidden="true">#</a> <code>--root</code></h2><p>当我们进行3次提交后, 使用<code>git rebase -i HEAD^3</code>会报错, 因为第一个提交是<code>root</code>, 也就是说只能<code>git rebase -i HEAD~2</code>, <code>root commit</code>不能获得, 如果想获得, 需要执行<code>git rebase -i --root</code></p><h2 id="continue" tabindex="-1"><a class="header-anchor" href="#continue" aria-hidden="true">#</a> continue</h2><p><code>git reabse --continue --abort</code> 在使用-i交互模式时,处理conflict会中断,要使用--continue来恢复交互模式</p><h2 id="命令-1" tabindex="-1"><a class="header-anchor" href="#命令-1" aria-hidden="true">#</a> 命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pick：保留该commit（缩写:p）
reword：保留该commit，但我需要修改该commit的注释（缩写:r）
edit：保留该commit, 但我要停下来修改该提交<span class="token punctuation">(</span>不仅仅修改注释<span class="token punctuation">)</span>（缩写:e）
squash：将该commit和前一个commit合并（缩写:s）
fixup：将该commit和前一个commit合并，但我不要保留该提交的注释信息（缩写:f）
exec：执行shell命令（缩写:x）
drop：我要丢弃该commit（缩写:d）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>https://git-rebase.io/ https://www.educative.io/answers/what-is-the-git-rebase-branch-name-command https://stackoverflow.com/questions/3042437/how-to-change-the-commit-author-for-one-specific-commit https://git-scm.com/docs/git-rebase</p>`,30),r=[t];function s(n,h){return d(),o("div",null,r)}const m=e(i,[["render",s],["__file","rebase.html.vue"]]);export{m as default};
