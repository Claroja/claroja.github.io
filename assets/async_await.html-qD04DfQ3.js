import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as e}from"./app-7knaTE3M.js";const t={},p=e(`<h1 id="async-await" tabindex="-1"><a class="header-anchor" href="#async-await" aria-hidden="true">#</a> async&amp;await</h1><h2 id="async函数" tabindex="-1"><a class="header-anchor" href="#async函数" aria-hidden="true">#</a> async函数</h2><p>函数的返回值为 promise 对象, 和<code>.then</code>很相似.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//then</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//1. 如果返回值是一个非Promise类型的数据, 结果是成功的promise对象</span>
    <span class="token comment">// return 521;</span>
    <span class="token comment">//2. 如果返回的是一个Promise对象, 结果是Promise对象</span>
    <span class="token comment">// return new Promise((resolve, reject) =&gt; {</span>
    <span class="token comment">//     // resolve(&#39;OK&#39;);</span>
    <span class="token comment">//     reject(&#39;Error&#39;);</span>
    <span class="token comment">// });</span>
    <span class="token comment">//3. 抛出异常, 结果是失败的promise对象</span>
    <span class="token keyword">throw</span> <span class="token string">&quot;Oh NO&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="await表达式" tabindex="-1"><a class="header-anchor" href="#await表达式" aria-hidden="true">#</a> await表达式</h2><p>await 右侧的表达式一般为 promise 对象, 但也可以是其它的值</p><ul><li>如果表达式是 promise 对象, await 返回的是 promise 成功的值</li><li>如果表达式是其它值, 直接将此值作为 await 的返回值</li></ul><p>注意:</p><ul><li>await 必须写在 async 函数中, 但 async 函数中可以没有 await</li><li>如果 await 的 promise 失败了, 就会抛出异常, 需要通过 try...catch 捕获处理</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token comment">// resolve(&#39;OK&#39;);</span>
        <span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">&#39;Error&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token comment">//1. 右侧为promise的情况</span>
    <span class="token comment">// let res = await p;</span>
    <span class="token comment">//2. 右侧为其他类型的数据</span>
    <span class="token comment">// let res2 = await 20;</span>
    <span class="token comment">//3. 如果promise是失败的状态</span>
    <span class="token keyword">try</span><span class="token punctuation">{</span>
        <span class="token keyword">let</span> res3 <span class="token operator">=</span> <span class="token keyword">await</span> p<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">catch</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="应用" tabindex="-1"><a class="header-anchor" href="#应用" aria-hidden="true">#</a> 应用</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * resource  1.html  2.html 3.html 文件内容
 */</span>

<span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> util <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;util&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> mineReadFile <span class="token operator">=</span> util<span class="token punctuation">.</span><span class="token function">promisify</span><span class="token punctuation">(</span>fs<span class="token punctuation">.</span>readFile<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//回调函数的方式</span>
<span class="token comment">// fs.readFile(&#39;./resource/1.html&#39;, (err, data1) =&gt; {</span>
<span class="token comment">//     if(err) throw err;</span>
<span class="token comment">//     fs.readFile(&#39;./resource/2.html&#39;, (err, data2) =&gt; {</span>
<span class="token comment">//         if(err) throw err;</span>
<span class="token comment">//         fs.readFile(&#39;./resource/3.html&#39;, (err, data3) =&gt; {</span>
<span class="token comment">//             if(err) throw err;</span>
<span class="token comment">//             console.log(data1 + data2 + data3);</span>
<span class="token comment">//         });</span>
<span class="token comment">//     });</span>
<span class="token comment">// });</span>

<span class="token comment">//async 与 await</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">try</span><span class="token punctuation">{</span>
        <span class="token comment">//读取第一个文件的内容</span>
        <span class="token keyword">let</span> data1 <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">mineReadFile</span><span class="token punctuation">(</span><span class="token string">&#39;./resource/1x.html&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> data2 <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">mineReadFile</span><span class="token punctuation">(</span><span class="token string">&#39;./resource/2.html&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> data3 <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">mineReadFile</span><span class="token punctuation">(</span><span class="token string">&#39;./resource/3.html&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data1 <span class="token operator">+</span> data2 <span class="token operator">+</span> data3<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">catch</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>code<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),c=[p];function o(i,l){return s(),a("div",null,c)}const d=n(t,[["render",o],["__file","async_await.html.vue"]]);export{d as default};
