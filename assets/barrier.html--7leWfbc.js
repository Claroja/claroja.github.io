import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as s,a as t}from"./app-9tftCahk.js";const e={},p=t(`<h1 id="barrier" tabindex="-1"><a class="header-anchor" href="#barrier" aria-hidden="true">#</a> barrier</h1><h2 id="barrier-objects" tabindex="-1"><a class="header-anchor" href="#barrier-objects" aria-hidden="true">#</a> Barrier Objects</h2><p>建立一个Barrier来阻止parties(一定数量)的threads.调用<code>wait()</code>方法来阻塞, 直到阻塞的thread的数量达到了barrier设置的值.</p><h3 id="构造方法" tabindex="-1"><a class="header-anchor" href="#构造方法" aria-hidden="true">#</a> 构造方法</h3><p><code>class threading.Barrier(parties, action=None, timeout=None)</code></p><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>parties</td><td>阻塞线程的数量</td></tr><tr><td>action</td><td>如果提供, 将被阻塞的其中一个线程调用</td></tr><tr><td>timeout</td><td>超时时间</td></tr></tbody></table><p>对象方法</p><table><thead><tr><th>方法</th><th>描述</th></tr></thead><tbody><tr><td>wait(timeout=None)</td><td>每个线程调用, 就会增加Barrier计数, 直到满足其设置的值</td></tr><tr><td>reset()</td><td>重置Barrier计数</td></tr><tr><td>abort()</td><td>将Barrier的状态设置为broken</td></tr><tr><td>parties</td><td>越过Barrier的最大thread数量</td></tr><tr><td>n_waiting</td><td>当前Barrier前等待的thread数量</td></tr><tr><td>broken</td><td>如果Barrier的状态是Broken则返回<code>true</code></td></tr></tbody></table><h3 id="样例" tabindex="-1"><a class="header-anchor" href="#样例" aria-hidden="true">#</a> 样例</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> threading
<span class="token keyword">import</span> time

b <span class="token operator">=</span> threading<span class="token punctuation">.</span>Barrier<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> timeout<span class="token operator">=</span><span class="token number">5</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">task1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;start task1&#39;</span><span class="token punctuation">)</span>
    b<span class="token punctuation">.</span>wait<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;end task1&#39;</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">task2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;start task2&#39;</span><span class="token punctuation">)</span>
    b<span class="token punctuation">.</span>wait<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;end task2&#39;</span><span class="token punctuation">)</span>


threading<span class="token punctuation">.</span>Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>task1<span class="token punctuation">)</span><span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
threading<span class="token punctuation">.</span>Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>task2<span class="token punctuation">)</span><span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;over&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),i=[p];function r(o,c){return a(),s("div",null,i)}const u=n(e,[["render",r],["__file","barrier.html.vue"]]);export{u as default};
