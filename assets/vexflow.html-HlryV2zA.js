import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as e,o,c as p,b as n,d as c,e as r,a}from"./app-9tftCahk.js";const i={},l=a(`<h1 id="vexflow" tabindex="-1"><a class="header-anchor" href="#vexflow" aria-hidden="true">#</a> vexflow</h1><h2 id="renderer" tabindex="-1"><a class="header-anchor" href="#renderer" aria-hidden="true">#</a> renderer</h2><p>Vex.Flow.Renderer(div,Vex.Flow.Renderer.Backends.SVG) | 渲染器 <code>renderer</code>并不参与实际的渲染, 它的主要作用是:</p><ol><li>指定生成的标签(第一个参数)</li><li>渲染的方式<code>svg</code>和<code>canvas</code>(第二个参数)</li><li>生成<code>context</code>对象(<code>getContext()</code>)</li><li>设置界面的大小(\`resize())</li></ol><h3 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h3><table><thead><tr><th>方法</th><th>描述</th></tr></thead><tbody><tr><td>renderer.resize(500, 500)</td><td>设置svg大小</td></tr><tr><td>renderer.getContext()</td><td>获得<code>context</code>对象</td></tr></tbody></table><h2 id="context" tabindex="-1"><a class="header-anchor" href="#context" aria-hidden="true">#</a> context</h2><p><code>context</code>的作用是作用是绘图(path),每个曲谱的渲染都需要<code>context</code>的协助. 下面的代码是画一个黄色的三角形</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>context<span class="token punctuation">.</span><span class="token function">beginPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// start recording our pen&#39;s moves</span>
  <span class="token punctuation">.</span><span class="token function">moveTo</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">// pickup the pen and set it down at X=0, Y=0. NOTE: Y=0 is the top of the screen.</span>
  <span class="token punctuation">.</span><span class="token function">lineTo</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">// now add a line to the right from (0, 0) to (50, 0) to our path</span>
  <span class="token punctuation">.</span><span class="token function">lineTo</span><span class="token punctuation">(</span><span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span> <span class="token comment">// add a line to the left and down from (50, 0) to (25, 50)</span>
  <span class="token punctuation">.</span><span class="token function">closePath</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// now add a line back to wherever the path started, in this case (0, 0), closing the triangle.</span>
  <span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token string">&#39;yellow&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// now fill our triangle in yellow.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述的代码等价于:<code>M0 0L50 0L25 50Z</code></p><p>绘制的上下文 renderer.getContext()</p>`,11),u={href:"https://github.com/0xfe/vexflow/wiki/Understanding-Renderer-&-Context",target:"_blank",rel:"noopener noreferrer"},d=a(`<h2 id="stave" tabindex="-1"><a class="header-anchor" href="#stave" aria-hidden="true">#</a> stave</h2><p>stave就是五线谱了 Vex.Flow.Stave(10, 40, 400)</p><table><thead><tr><th>方法</th><th>描述</th></tr></thead><tbody><tr><td>addClef(&quot;treble&quot;)</td><td>谱号</td></tr><tr><td>addTimeSignature(&quot;4/4&quot;)</td><td>拍好</td></tr><tr><td>setContext()</td><td>设置context对象</td></tr><tr><td>draw()</td><td>绘制</td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> notes</h2><p>音符</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> notes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token comment">// A quarter-note C.</span>
  <span class="token keyword">new</span> <span class="token class-name">VF<span class="token punctuation">.</span>StaveNote</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">clef</span><span class="token operator">:</span> <span class="token string">&quot;treble&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">keys</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;c/4&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token string">&quot;q&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="voice" tabindex="-1"><a class="header-anchor" href="#voice" aria-hidden="true">#</a> voice</h2><p>将多个notes称为一个<code>voice</code>, 多个<code>voice</code>可以形成<code>voiceGroup</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> voice <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VF<span class="token punctuation">.</span>Voice</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">num_beats</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>  <span class="token literal-property property">beat_value</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
voice<span class="token punctuation">.</span><span class="token function">addTickables</span><span class="token punctuation">(</span>notes<span class="token punctuation">)</span><span class="token punctuation">;</span>
voice<span class="token punctuation">.</span><span class="token function">draw</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> stave<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="formatter" tabindex="-1"><a class="header-anchor" href="#formatter" aria-hidden="true">#</a> formatter</h2><p>用来设置音符的样式</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> formatter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VF<span class="token punctuation">.</span>Formatter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">joinVoices</span><span class="token punctuation">(</span><span class="token punctuation">[</span>voice<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token punctuation">[</span>voice<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">350</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,12);function k(v,h){const s=e("ExternalLinkIcon");return o(),p("div",null,[l,n("p",null,[n("a",u,[c("官网"),r(s)])]),d])}const f=t(i,[["render",k],["__file","vexflow.html.vue"]]);export{f as default};
