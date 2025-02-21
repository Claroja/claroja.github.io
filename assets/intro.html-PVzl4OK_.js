import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as e,e as a}from"./app-jdLxCr9I.js";const s={},l=a(`<h1 id="intro" tabindex="-1"><a class="header-anchor" href="#intro" aria-hidden="true">#</a> intro</h1><p>BOM（Browser Object Model）即浏览器对象模型，它提供了独立于内容而与浏览器窗口进行交互的对象，其核心对象是 window。</p><p>DOM:</p><ul><li>文档对象模型</li><li>DOM 就是把「文档」当做一个「对象」来看待</li><li>DOM 的顶级对象是 document</li><li>DOM 主要学习的是操作页面元素</li><li>DOM 是 W3C 标准规范</li></ul><p>BOM:</p><ul><li>浏览器对象模型</li><li>把「浏览器」当做一个「对象」来看待</li><li>BOM 的顶级对象是 window</li><li>BOM 学习的是浏览器窗口交互的一些对象</li><li>BOM 是浏览器厂商在各自浏览器上定义的，兼容性较差</li></ul><p>浏览器里面，<code>window</code>对象指当前的浏览器窗口。它也是当前页面的顶层对象，即最高一层的对象，所有其他对象都是它的下属。一个变量如果未声明，那么默认就是顶层对象的属性。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
window<span class="token punctuation">.</span>a <span class="token comment">// 1 a是一个没有声明就直接赋值的变量，它自动成为顶层对象的属性。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>参考:</p><p>https://www.jianshu.com/p/7c796f4ff810</p>`,10),t=[l];function o(c,r){return n(),e("div",null,t)}const u=i(s,[["render",o],["__file","intro.html.vue"]]);export{u as default};
