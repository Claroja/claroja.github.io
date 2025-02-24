import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e}from"./app-A10JnHE0.js";const t={},p=e(`<h1 id="svg-runner" tabindex="-1"><a class="header-anchor" href="#svg-runner" aria-hidden="true">#</a> SVG.Runner</h1><h2 id="最佳实践" tabindex="-1"><a class="header-anchor" href="#最佳实践" aria-hidden="true">#</a> 最佳实践</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 创建一个 SVG 画布</span>
<span class="token keyword">const</span> draw <span class="token operator">=</span> <span class="token constant">SVG</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addTo</span><span class="token punctuation">(</span><span class="token string">&#39;body&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">300</span><span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 创建一个矩形</span>
<span class="token keyword">const</span> rect <span class="token operator">=</span> draw<span class="token punctuation">.</span><span class="token function">rect</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">move</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token string">&#39;#f06&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 第一个动画：移动矩形</span>
<span class="token keyword">const</span> firstRunner <span class="token operator">=</span> rect<span class="token punctuation">.</span><span class="token function">animate</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">move</span><span class="token punctuation">(</span><span class="token number">150</span><span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 监听第一个动画的结束事件</span>
firstRunner<span class="token punctuation">.</span><span class="token function">after</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 第二个动画：改变矩形的颜色</span>
  rect<span class="token punctuation">.</span><span class="token function">animate</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token string">&#39;#06f&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建runner" tabindex="-1"><a class="header-anchor" href="#创建runner" aria-hidden="true">#</a> 创建Runner</h2><ol start="2"><li>直接创建Runner</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 创建runner</span>
<span class="token keyword">var</span> runner <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SVG<span class="token punctuation">.</span>Runner</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span>
runner<span class="token punctuation">.</span><span class="token function">element</span><span class="token punctuation">(</span>someElement<span class="token punctuation">)</span>
runner<span class="token punctuation">.</span><span class="token function">move</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>
runner<span class="token punctuation">.</span><span class="token function">step</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>
<span class="token comment">// To animate, we need a timeline on which the runner is run</span>
<span class="token keyword">var</span> timeline <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SVG<span class="token punctuation">.</span>Timeline</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
timeline<span class="token punctuation">.</span><span class="token function">schedule</span><span class="token punctuation">(</span>runner<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>使用元素<code>animate()</code>方法直接获得runner</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> rect <span class="token operator">=</span> draw<span class="token punctuation">.</span><span class="token function">rect</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> runner <span class="token operator">=</span> rect<span class="token punctuation">.</span><span class="token function">animate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="runner方法" tabindex="-1"><a class="header-anchor" href="#runner方法" aria-hidden="true">#</a> runner方法</h2><ol><li>runner.element(), 获得或设置动画绑定的元素</li><li>runner.timeline(), 获得或设置动画的timeline</li><li>runner.schedule(timeline, delay, when), 设置动画的timeline</li><li>runner.unschedule(), 从timeline中移除动画</li><li>runner.animate(), 链式调用, 第一个动画完成后调用下一个animate</li><li>runner.loop(times, swing, wait), 重复动画, times次, 每次相隔wait</li><li>runner.queue(runOnceFn, runOnEveryStepFn), runner没一步调用的方法</li><li>runner.during(fn)，动画每一步调用方法</li><li>runner.after(fn), 动画完成后调用</li><li>runner.time(), 动画当前的时间</li><li>runner.duration(), 动画的持续时间</li><li>runner.loops(), 跳转到指定重复次数, 如3.5表示第4次循环的一半时间</li><li>runner.persist(), 让动画一直保存在时间线上, 默认会清理内存</li><li>runner.position(), 获得动画当前的位置比例(0~1), 不包含wait时间</li><li>runner.progress(), 获得动画当前的位置比例(0~1), 包含wait时间</li><li>runner.step(dt), ?</li><li>runner.reset(), 到开始状态</li><li>runner.finish(), 到结束状态</li><li>runner.reverse(), 倒序播放</li><li>runner.ease(), 设置动画运动特效</li><li>runner.active(), 激活动画</li></ol>`,10),c=[p];function o(i,l){return s(),a("div",null,c)}const k=n(t,[["render",o],["__file","5_1动画控制(runner).html.vue"]]);export{k as default};
