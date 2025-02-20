import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as n,a}from"./app-9tftCahk.js";const i={},l=a(`<h1 id="第三编合同-第二分编典型合同-第十五章融资租赁合同" tabindex="-1"><a class="header-anchor" href="#第三编合同-第二分编典型合同-第十五章融资租赁合同" aria-hidden="true">#</a> 第三编合同-第二分编典型合同-第十五章融资租赁合同</h1><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>   CC credential-store.o
In <span class="token function">file</span> included from cache.h:4:0,
                from credential-store.c:1:
git-compat-util.h:280:25: 致命错误：openssl/ssl.h：没有那个文件或目录
 <span class="token comment">#include &lt;openssl/ssl.h&gt;</span>
                        ^
编译中断。
make: *** <span class="token punctuation">[</span>credential-store.o<span class="token punctuation">]</span> 错误 <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>报这个错误的原因是没有安装libssl-dev，需要<code>sudo yum install openssl-devel</code></p><p>参考: https://www.jianshu.com/p/1ad292323d96 https://blog.csdn.net/claroja/article/details/107749764</p>`,4),t=[l];function c(d,o){return s(),n("div",null,t)}const p=e(i,[["render",c],["__file","Git安装.html.vue"]]);export{p as default};
