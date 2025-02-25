import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as a,a as s}from"./app-7knaTE3M.js";const e={},o=s(`<h1 id="audio" tabindex="-1"><a class="header-anchor" href="#audio" aria-hidden="true">#</a> audio</h1><h2 id="audiocontext" tabindex="-1"><a class="header-anchor" href="#audiocontext" aria-hidden="true">#</a> AudioContext</h2><p><code>AudioContext</code>的作用:</p><ul><li>创建它所包含的node</li><li>执行音频处理 在做任何事情之前, 都要创建<code>AudioContext</code>, 所有的事情都是在<code>AudioContext</code>里面发生. 建议创建一个<code>AudioContext</code>, 重复使用, 而不是创建多个<code>AudioContext</code>.</li></ul><table><thead><tr><th>属性</th><th>描述</th></tr></thead><tbody><tr><td>currentTime</td><td>double类型的逐渐增长的硬件时间单位秒, 继承自BaseAudioContext</td></tr><tr><td>destination</td><td>返回一个<code>AudioDestinationNode</code>, 表示context中的目的地node, 既渲染设备(耳机,音响)</td></tr><tr><td>sampleRate</td><td>context内所有node使用的sample rate, float类型. 不能改变</td></tr><tr><td>state</td><td>当前的状态[&#39;suspended&#39;,&#39;running&#39;,&#39;closed&#39;]</td></tr></tbody></table><table><thead><tr><th>方法</th><th>描述</th></tr></thead><tbody><tr><td>createOscillator()</td><td>返回<code>OscillatorNode</code>对象</td></tr></tbody></table><h2 id="oscillatornode" tabindex="-1"><a class="header-anchor" href="#oscillatornode" aria-hidden="true">#</a> OscillatorNode</h2><p><code>OscillatorNode</code>表示一个时间段的波形(waveform), 比如sine wave. 继承关系: <code>OscillatorNode</code> -&gt; <code>AudioScheduledSourceNode</code> -&gt; <code>AudioNode</code></p><table><thead><tr><th>属性</th><th>描述</th></tr></thead><tbody><tr><td>frequency</td><td>震动频率, 可以直接改变音高 单位hertz, 默认440Hz, 既标准音A(standard middle-A note)</td></tr><tr><td>detune</td><td>另一种改变音高的方式, 使用百分比(cents), 100就是一个半音(semitone). 默认是0.</td></tr><tr><td>type</td><td>波形的类型, 可选<code>sine</code>, <code>square</code>, <code>sawtooth</code>, <code>triangle</code></td></tr></tbody></table><table><thead><tr><th>方法</th><th>描述</th></tr></thead><tbody><tr><td>start()</td><td>开始的时间, 结合audioContext.currentTime使用</td></tr><tr><td>stop()</td><td>结束的时间, 结合audioContext.currentTime+period使用</td></tr></tbody></table><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> audioContext <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AudioContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> oscillatorNode <span class="token operator">=</span> audioContext<span class="token punctuation">.</span><span class="token function">createOscillator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
oscillatorNode<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span>audioContext<span class="token punctuation">.</span>destination<span class="token punctuation">)</span><span class="token punctuation">;</span>


oscillatorNode<span class="token punctuation">.</span>type <span class="token operator">=</span> <span class="token string">&#39;sawtooth&#39;</span><span class="token punctuation">;</span>
oscillatorNode<span class="token punctuation">.</span>frequency<span class="token punctuation">.</span><span class="token function">setValueAtTime</span><span class="token punctuation">(</span><span class="token number">220</span><span class="token punctuation">,</span> context<span class="token punctuation">.</span>currentTime<span class="token punctuation">)</span><span class="token punctuation">;</span>
oscillatorNode<span class="token punctuation">.</span>detune<span class="token punctuation">.</span><span class="token function">setValueAtTime</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">,</span> context<span class="token punctuation">.</span>currentTime<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//等价 oscillator.detune.value = pitch * 100</span>

oscillatorNode<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// insert timer or user input</span>
oscillatorNode<span class="token punctuation">.</span><span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考: https://web-audio-api.firebaseapp.com/oscillator-node https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode</p><h2 id="audiodestinationnode" tabindex="-1"><a class="header-anchor" href="#audiodestinationnode" aria-hidden="true">#</a> AudioDestinationNode</h2><p><code>AudioDestinationNode</code>表示audio graph的最终的目的地, 往往是扬声器(speakers of device).</p><ul><li>没有output, 既后面不能再连接<code>AudioNode</code></li><li>仅有一个input.</li><li>输入的channels必须在[0, maxChannelCount]之间.</li></ul><p>参考: https://developer.mozilla.org/en-US/docs/Web/API/AudioDestinationNode</p>`,16),d=[o];function c(i,p){return n(),a("div",null,d)}const r=t(e,[["render",c],["__file","audio.html.vue"]]);export{r as default};
