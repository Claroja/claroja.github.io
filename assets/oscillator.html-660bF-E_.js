import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as l,c,a as n,b as t,d as s,e as r}from"./app-jdLxCr9I.js";const p={},i=n("h1",{id:"智能补全",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#智能补全","aria-hidden":"true"},"#"),t(" 智能补全")],-1),u=n("thead",null,[n("tr",null,[n("th",null,"参数"),n("th",null,"描述")])],-1),d={href:"https://www.javascripture.com/OscillatorNode#detune",target:"_blank",rel:"noopener noreferrer"},k={href:"https://en.wikipedia.org/wiki/Cent_(music)",target:"_blank",rel:"noopener noreferrer"},m=n("td",null,null,-1),h=n("tr",null,[n("td",null,[n("code",null,"frequency")]),n("td",null,[t("原始声波的频率, 默认是440, 单位"),n("code",null,"hertz"),t("."),n("code",null,"effectiveFrequency"),t("是真正的输出频率(音高), 它的计算方式如下, 是根据原始的"),n("code",null,"frequency"),t("和"),n("code",null,"detune"),t("共同决定的. 当"),n("code",null,"detune"),t("=0时, 就是原始音高, 当"),n("code",null,"detune"),t("=1200时, 频率提高一倍, 就提高了一个八度."),n("code",null,"effectiveFrequency = frequency * pow(2, detune / 1200)")])],-1),v=n("tr",null,[n("td",null,[n("code",null,"type")]),n("td",null,[t("波形的类型, 有"),n("code",null,"sine"),t(", "),n("code",null,"square"),t(", "),n("code",null,"sawtooth"),t(", or "),n("code",null,"triangle")])],-1),_=r(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> startTime <span class="token operator">=</span> audioContext<span class="token punctuation">.</span>currentTime  <span class="token comment">// 开始的时间</span>
<span class="token keyword">var</span> endTime <span class="token operator">=</span> startTime <span class="token operator">+</span> duration  <span class="token comment">//duration是持续的时间</span>
<span class="token keyword">var</span> oscillator <span class="token operator">=</span> audioContext<span class="token punctuation">.</span><span class="token function">createOscillator</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">//创建振荡器</span>
oscillator<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span>audioContext<span class="token punctuation">.</span>destination<span class="token punctuation">)</span>
oscillator<span class="token punctuation">.</span>type <span class="token operator">=</span> <span class="token string">&quot;sine&quot;</span>
oscillator<span class="token punctuation">.</span>detune<span class="token punctuation">.</span>value <span class="token operator">=</span> pitch <span class="token operator">*</span> <span class="token number">100</span>  <span class="token comment">//默认frequency是440, 一个pitch是一个semitone, 用此来表示音高.而不是直接改变基础频率</span>
oscillator<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span>startTime<span class="token punctuation">)</span>
oscillator<span class="token punctuation">.</span><span class="token function">stop</span><span class="token punctuation">(</span>endTime<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>方法</th><th>描述</th></tr></thead><tbody><tr><td>setPeriodicWave</td><td></td></tr><tr><td>start</td><td>开始播放</td></tr><tr><td>stop</td><td>结束播放</td></tr></tbody></table><p>参考: https://www.javascripture.com/OscillatorNode</p>`,3);function f(b,y){const e=o("ExternalLinkIcon");return l(),c("div",null,[i,n("table",null,[u,n("tbody",null,[n("tr",null,[n("td",null,[n("a",d,[t("detune"),s(e)]),t(": 每个八度都有1200个cent, detune代表有多少个cent. 比如我们想提高一个八度, 那么就让detune=1200. "),n("a",k,[t("cents"),s(e)]),t("将两个半音分为100份, 每一份是一个cent")]),m]),h,v])]),_])}const g=a(p,[["render",f],["__file","oscillator.html.vue"]]);export{g as default};
