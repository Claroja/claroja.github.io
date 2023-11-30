import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e}from"./app-0JgdiRQ-.js";const i={},t=e(`<h1 id="class" tabindex="-1"><a class="header-anchor" href="#class" aria-hidden="true">#</a> class</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
## constructor
创建和初始化实例

语法:
\`constructor([arguments]) { ... }\`
描述:
一个类只能有一个\`constructor\`方法
使用\`super\`关键字调用父类方法
如果没有显式指定构造方法,默认添加无参构造方法



\`\`\`js
class Polygon {
  constructor() {
    this.name = &quot;Polygon&quot;;
  }
}

const poly1 = new Polygon();

console.log(poly1.name);
// expected output: &quot;Polygon&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="static" tabindex="-1"><a class="header-anchor" href="#static" aria-hidden="true">#</a> static</h2><p><code>static</code>定义静态方法,不能再类的实例中调用静态方法,在类中调用</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">ClassWithStaticMethod</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> <span class="token function">staticMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&#39;static method has been called.&#39;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ClassWithStaticMethod<span class="token punctuation">.</span><span class="token function">staticMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// expected output: &quot;static method has been called.&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>语法 <code>static methodName() { ... }</code></p><p>描述 不能再实例上调用</p><p>参考: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/class https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes/constructor</p>`,8),c=[t];function l(o,d){return s(),a("div",null,c)}const p=n(i,[["render",l],["__file","class.html.vue"]]);export{p as default};
