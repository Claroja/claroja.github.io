import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as s,e}from"./app-A10JnHE0.js";const c={},o=e(`<p>命名规则: makefile Makefile</p><p>三要素 目标:依赖 规则命令</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>temp<span class="token operator">=</span>main<span class="token punctuation">.</span>o add<span class="token punctuation">.</span>o sub<span class="token punctuation">.</span>o
#使用变量$<span class="token punctuation">(</span>temp<span class="token punctuation">)</span>
main<span class="token operator">:</span>$<span class="token punctuation">(</span>temp<span class="token punctuation">)</span>
        gcc <span class="token operator">-</span>o main <span class="token operator">-</span>I <span class="token punctuation">.</span><span class="token operator">/</span>h main<span class="token punctuation">.</span>o add<span class="token punctuation">.</span>o sub<span class="token punctuation">.</span>o
main<span class="token punctuation">.</span>o<span class="token operator">:</span>main<span class="token punctuation">.</span>c
        gcc <span class="token operator">-</span>c main<span class="token punctuation">.</span>c <span class="token operator">-</span>I <span class="token punctuation">.</span><span class="token operator">/</span>h
sub<span class="token punctuation">.</span>o<span class="token operator">:</span>sub<span class="token punctuation">.</span>c
        gcc <span class="token operator">-</span>c sub<span class="token punctuation">.</span>c <span class="token operator">-</span>I <span class="token punctuation">.</span><span class="token operator">/</span>h
add<span class="token punctuation">.</span>o<span class="token operator">:</span>add<span class="token punctuation">.</span>c
        gcc <span class="token operator">-</span>c add<span class="token punctuation">.</span>c <span class="token operator">-</span>I <span class="token punctuation">.</span><span class="token operator">/</span>h

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>各个文件可以参考gcc文章</p><p><code>$(wildcard *.c)</code> 获得所有<code>.c</code>文件 <code>$(patsubst %.c,%.o,$(wilfcard *.c))</code><code>$@</code>代表目标 <code>$^</code>全部依赖 <code>$&lt;</code>第一个依赖 <code>$?</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cf = $(wildcard *.c)# 获得所有\`.c\`文件名
of = $(patsubst %.c,%.o,$(cf)) # 获得\`.c\`转换\`.o\`的文件名
main:$(of)
        gcc -I ./h -o main $(of)
%.o:%.c
        gcc -c $&lt; -I ./h
.PHONY:clean #避免已经存在clean造成的冲突
clean:# 一个命令
        -@rm *.o # @之后的命令不会输出
        rm main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),t=[o];function p(i,l){return a(),s("div",null,t)}const r=n(c,[["render",p],["__file","makefile.html.vue"]]);export{r as default};
