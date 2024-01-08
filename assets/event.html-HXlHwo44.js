import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as s,e as t}from"./app-YE2Hltoy.js";const e={},p=t(`<h1 id="event" tabindex="-1"><a class="header-anchor" href="#event" aria-hidden="true">#</a> event</h1><h2 id="event-objects" tabindex="-1"><a class="header-anchor" href="#event-objects" aria-hidden="true">#</a> Event Objects</h2><p>最简单的线程通信方式, 一个线程发出Event, 另一等待Event. Event instance维护了一个flag, 默认为<code>false</code>, 通过<code>set()</code>方法设置为<code>true</code>, 而通过<code>clear()</code>方法重置为<code>false</code>. <code>wait()</code>方法阻塞, 直到flag变为<code>true</code></p><h3 id="构造方法" tabindex="-1"><a class="header-anchor" href="#构造方法" aria-hidden="true">#</a> 构造方法</h3><p><code>class threading.Event</code>是一个factory function,</p><h3 id="对象方法" tabindex="-1"><a class="header-anchor" href="#对象方法" aria-hidden="true">#</a> 对象方法</h3><table><thead><tr><th>方法</th><th>描述</th></tr></thead><tbody><tr><td>is_set()</td><td>当flag为<code>true</code>时, 返回<code>true</code></td></tr><tr><td>set()</td><td>将flag设置为<code>true</code></td></tr><tr><td>clear()</td><td>将flag设置为<code>false</code></td></tr><tr><td>wait(timeout=None)</td><td>线程阻塞</td></tr></tbody></table><h3 id="例子" tabindex="-1"><a class="header-anchor" href="#例子" aria-hidden="true">#</a> 例子</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> time
<span class="token keyword">import</span> threading
event <span class="token operator">=</span> threading<span class="token punctuation">.</span>Event<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">dis_class</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
    event<span class="token punctuation">.</span>wait<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;同学们下课了&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">bell</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;下课铃声响了&#39;</span><span class="token punctuation">)</span>
    event<span class="token punctuation">.</span><span class="token builtin">set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    t1 <span class="token operator">=</span> threading<span class="token punctuation">.</span>Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>bell<span class="token punctuation">)</span>
    t2 <span class="token operator">=</span> threading<span class="token punctuation">.</span>Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>dis_class<span class="token punctuation">)</span>
    t1<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
    t2<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
    t1<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span>
    t2<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),c=[p];function o(i,l){return a(),s("div",null,c)}const r=n(e,[["render",o],["__file","event.html.vue"]]);export{r as default};
