import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as e,e as n}from"./app-jdLxCr9I.js";const t={},o=n(`<h1 id="shell" tabindex="-1"><a class="header-anchor" href="#shell" aria-hidden="true">#</a> shell</h1><p>You need to use the -p flag to send a password. And it&#39;s tricky because you must have no space between -p and the password.</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>$ mysql <span class="token operator">-</span>h <span class="token string">&quot;server-name&quot;</span> <span class="token operator">-</span>u <span class="token string">&quot;root&quot;</span> <span class="token string">&quot;-pXXXXXXXX&quot;</span> <span class="token string">&quot;database-name&quot;</span> <span class="token operator">&lt;</span> <span class="token string">&quot;filename.sql&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>If you use a space after -p it makes the mysql client prompt you interactively for the password, and then it interprets the next command argument as a database-name:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>$ mysql <span class="token operator">-</span>h <span class="token string">&quot;server-name&quot;</span> <span class="token operator">-</span>u <span class="token string">&quot;root&quot;</span> <span class="token operator">-</span>p <span class="token string">&quot;XXXXXXXX&quot;</span> <span class="token string">&quot;database-name&quot;</span> <span class="token operator">&lt;</span> <span class="token string">&quot;filename.sql&quot;</span>
Enter password: <span class="token operator">&lt;</span>you <span class="token keyword">type</span> it <span class="token operator">in</span> here<span class="token operator">&gt;</span>
ERROR <span class="token number">1049</span> <span class="token punctuation">(</span><span class="token number">42000</span><span class="token punctuation">)</span>: Unknown <span class="token keyword">database</span> <span class="token string">&#39;XXXXXXXX&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>refs: https://stackoverflow.com/questions/8055694/how-to-execute-a-mysql-command-from-a-shell-script https://www.codeleading.com/article/35245676702/</p>`,6),p=[o];function r(l,c){return a(),e("div",null,p)}const d=s(t,[["render",r],["__file","shell.html.vue"]]);export{d as default};
