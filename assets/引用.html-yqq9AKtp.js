import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as n}from"./app-7knaTE3M.js";const i={},d=n(`<p><code>git log 1a410e</code>来查看该提交的历史记录, 但是记忆<code>1a410e</code>值, 太麻烦了, 所以可以起个别名, 这种简单的名字被称为引用(references，或简写为 refs)。 你可以在 <code>.git/refs</code> 目录下</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">find</span> .git/refs
.git/refs
.git/refs/heads
.git/refs/tags
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>给SHA添加refs:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> 1a410efbd13591db07496601ebc7a059dd55cfe9 <span class="token operator">&gt;</span> .git/refs/heads/master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>可以通过refs来查:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个就是Git分支的本质：一个指向某一系列提交之首的指针或引用。 当运行类似于 git branch 这样的命令时，Git 实际上会运行 update-ref 命令， 取得当前所在分支最新提交对应的 SHA-1 值，并将其加入你想要创建的任何新引用中。 git提供了<code>git update-ref</code>命令来添加refs, 不提倡直接使用<code>echo</code>来直接操作, 给第二个提交添加refs:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> update-ref refs/heads/test cac0ca
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>目前仓库的样子: https://git-scm.com/book/en/v2/images/data-model-4.png</p><h2 id="head-引用" tabindex="-1"><a class="header-anchor" href="#head-引用" aria-hidden="true">#</a> HEAD 引用</h2><p>HEAD 文件通常是一个符号引用（symbolic reference），指向目前所在的分支。 所谓符号引用，表示它是一个指向其他引用的指针。 然而在某些罕见的情况下，HEAD 文件可能会包含一个 git 对象的 SHA-1 值。 当你在检出一个标签、提交或远程分支，让你的仓库变成 &quot;分离 HEAD&quot;状态时，就会出现这种情况。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">cat</span> .git/HEAD
ref: refs/heads/master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果执行 git checkout test，Git 会像这样更新 HEAD 文件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">cat</span> .git/HEAD
ref: refs/heads/test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>git也提供了<code>git symbolic-ref</code>来修改HEAD 查看HEAD值</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> symbolic-ref HEAD
refs/heads/master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>更新HEAD值</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> symbolic-ref HEAD refs/heads/test
$ <span class="token function">cat</span> .git/HEAD
ref: refs/heads/test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="标签引用" tabindex="-1"><a class="header-anchor" href="#标签引用" aria-hidden="true">#</a> 标签引用</h2><p>Git 的三种主要的对象类型（数据对象、树对象 和 提交对象 ）实际上还有第四种, 标签对象（tag object）. 标签对象（tag object）类似于一个提交对象——它包含一个标签创建者信息、一个日期、一段注释信息，以及一个指针。主要的区别在于，标签对象通常指向一个提交对象，而不是一个树对象。 它像是一个永不移动的分支引用——永远指向同一个提交对象，只不过给这个提交对象加上一个更友好的名字罢了. 创建一个轻量标签：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> update-ref refs/tags/v1.0 cac0cab538b970a37ea1e769cbbde608743bc96d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="远程引用" tabindex="-1"><a class="header-anchor" href="#远程引用" aria-hidden="true">#</a> 远程引用</h2><p>远程引用（remote reference）如果你添加了一个远程版本库并对其执行过推送操作，Git 会记录下最近一次推送操作时每一个分支所对应的值，并保存在 refs/remotes 目录下。 查看 refs/remotes/origin/master 文件，可以发现 origin 远程版本库的 master 分支所对应的 SHA-1 值，就是最近一次与服务器通信时本地 master 分支所对应的 SHA-1 值：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">cat</span> .git/refs/remotes/origin/master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> remote <span class="token function">add</span> origin https://github.com/schacon/simplegit-progit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>仓库中的 .git/config 文件中添加一个小节， 并在其中指定远程版本库的名称（origin）、URL 和一个用于获取操作的 引用规范（refspec）：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>remote <span class="token string">&quot;origin&quot;</span><span class="token punctuation">]</span>
   url <span class="token operator">=</span> https://github.com/schacon/simplegit-progit
   fetch <span class="token operator">=</span> +refs/heads/*:refs/remotes/origin/*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>引用规范的格式由一个可选的 + 号和紧随其后的 src:dst 组成，</p><ul><li>src 是一个模式（pattern），代表远程版本库中的引用；</li><li>dst 是本地跟踪的远程引用的位置。</li><li>+号告诉 Git 即使在不能快进的情况下也要（强制）更新引用。</li></ul><p>默认情况下，引用规范由 git remote add origin 命令自动生成， Git 获取服务器中 refs/heads/ 下面的所有引用，并将它写入到本地的 refs/remotes/origin/ 中。 所以，如果服务器上有一个 master 分支，你可以在本地通过下面任意一种方式来访问该分支上的提交记录：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> log origin/master
$ <span class="token function">git</span> log remotes/origin/master
$ <span class="token function">git</span> log refs/remotes/origin/master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的三个命令作用相同，因为 Git 会把它们都扩展成 refs/remotes/origin/master。 如果想让 Git 每次只拉取远程的 master 分支，而不是所有分支， 可以把（引用规范的）获取那一行修改为只引用该分支：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>fetch = +refs/heads/master:refs/remotes/origin/master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>参考: https://git-scm.com/book/zh/v2/Git-%E5%86%85%E9%83%A8%E5%8E%9F%E7%90%86-%E5%BC%95%E7%94%A8%E8%A7%84%E8%8C%83</p>`,34),r=[d];function t(c,l){return s(),a("div",null,r)}const p=e(i,[["render",t],["__file","引用.html.vue"]]);export{p as default};
