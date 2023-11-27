import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as s,e as t}from"./app-O0xqlHfm.js";const e="/assets/1-yy71wqi2.gif",p={},c=t(`<h1 id="valuetracker" tabindex="-1"><a class="header-anchor" href="#valuetracker" aria-hidden="true">#</a> ValueTracker</h1><p>一个可以用来追踪值变化的<code>mobject</code></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> manim <span class="token keyword">import</span> <span class="token operator">*</span>

<span class="token keyword">class</span> <span class="token class-name">ValueTrackerExample</span><span class="token punctuation">(</span>Scene<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">construct</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        tracker <span class="token operator">=</span> ValueTracker<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
        label <span class="token operator">=</span> Dot<span class="token punctuation">(</span>radius<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">.</span>add_updater<span class="token punctuation">(</span><span class="token keyword">lambda</span> x <span class="token punctuation">:</span> x<span class="token punctuation">.</span>set_x<span class="token punctuation">(</span>tracker<span class="token punctuation">.</span>get_value<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>add<span class="token punctuation">(</span>label<span class="token punctuation">,</span> tracker<span class="token punctuation">)</span>
        tracker<span class="token punctuation">.</span>add_updater<span class="token punctuation">(</span><span class="token keyword">lambda</span> mobject<span class="token punctuation">,</span> dt<span class="token punctuation">:</span> mobject<span class="token punctuation">.</span>increment_value<span class="token punctuation">(</span>dt<span class="token punctuation">)</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>wait<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+e+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>参考: https://docs.manim.community/en/stable/reference/manim.mobject.value_tracker.ValueTracker.html?highlight=ValueTracker#valuetracker</p>',5),o=[c];function l(u,i){return a(),s("div",null,o)}const d=n(p,[["render",l],["__file","ValueTracker.html.vue"]]);export{d as default};
