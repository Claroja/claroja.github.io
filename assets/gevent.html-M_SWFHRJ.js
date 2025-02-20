import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as i,a as d}from"./app-9tftCahk.js";const a={},s=d(`<h1 id="gevent" tabindex="-1"><a class="header-anchor" href="#gevent" aria-hidden="true">#</a> gevent</h1><p>当遇到I/O阻塞时，协程会自动切换到其他的协程上，然后等I/O完成时再切换回来。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import gevent

def foo():
    print(&#39;foo1&#39;)
    gevent.sleep(0)
    print(&#39;foo2&#39;)

def bar():
    print(&#39;bar1&#39;)
    gevent.sleep(0)
    print(&#39;bar2&#39;)

gevent.joinall([
    gevent.spawn(foo),
    gevent.spawn(bar),
])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行的结果：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>foo1
bar1
foo2
bar2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过yield也可以实现协程。</p><p>参考文献： http://sdiehl.github.io/gevent-tutorial/ http://python.jobbole.com/84301/ https://www.liaoxuefeng.com/wiki/001374738125095c955c1e6d8bb493182103fac9270762a000/001407503089986d175822da68d4d6685fbe849a0e0ca35000</p>`,7),l=[s];function t(r,v){return n(),i("div",null,l)}const u=e(a,[["render",t],["__file","gevent.html.vue"]]);export{u as default};
