import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-SnI5rGHA.js";const p="/assets/2-x_WCp7TX.gif",o="/assets/1-sG7Wk1Pz.gif",e={},c=t(`<h1 id="line" tabindex="-1"><a class="header-anchor" href="#line" aria-hidden="true">#</a> Line</h1><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> manim <span class="token keyword">import</span> <span class="token operator">*</span>

<span class="token keyword">class</span> <span class="token class-name">MovingDots</span><span class="token punctuation">(</span>Scene<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">construct</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        l1<span class="token operator">=</span>Line<span class="token punctuation">(</span>LEFT<span class="token punctuation">,</span>RIGHT<span class="token punctuation">)</span><span class="token punctuation">.</span>set_color<span class="token punctuation">(</span>RED<span class="token punctuation">)</span>
        l1<span class="token punctuation">.</span>add_updater<span class="token punctuation">(</span><span class="token keyword">lambda</span> z<span class="token punctuation">,</span> dt<span class="token punctuation">:</span> z<span class="token punctuation">.</span>become<span class="token punctuation">(</span>Line<span class="token punctuation">(</span>LEFT<span class="token operator">+</span>dt<span class="token operator">*</span><span class="token number">1</span><span class="token punctuation">,</span>RIGHT<span class="token operator">+</span>dt<span class="token operator">*</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>set_color<span class="token punctuation">(</span>YELLOW<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>add<span class="token punctuation">(</span>l1<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>直接使用<code>updater</code>的<code>dt</code>无法控制动画的长短 <img src="`+p+`" alt="" loading="lazy"></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> manim <span class="token keyword">import</span> <span class="token operator">*</span>

<span class="token keyword">class</span> <span class="token class-name">MovingDots</span><span class="token punctuation">(</span>Scene<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">construct</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        tracker <span class="token operator">=</span> ValueTracker<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
        l1<span class="token operator">=</span>Line<span class="token punctuation">(</span>LEFT<span class="token punctuation">,</span>RIGHT<span class="token punctuation">)</span><span class="token punctuation">.</span>set_color<span class="token punctuation">(</span>RED<span class="token punctuation">)</span>
        l1<span class="token punctuation">.</span>add_updater<span class="token punctuation">(</span><span class="token keyword">lambda</span> z<span class="token punctuation">,</span> dt<span class="token punctuation">:</span> z<span class="token punctuation">.</span>become<span class="token punctuation">(</span>Line<span class="token punctuation">(</span>LEFT<span class="token operator">+</span>tracker<span class="token punctuation">.</span>get_value<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>RIGHT<span class="token operator">+</span>tracker<span class="token punctuation">.</span>get_value<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>add<span class="token punctuation">(</span>l1<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>play<span class="token punctuation">(</span>tracker<span class="token punctuation">.</span>animate<span class="token punctuation">.</span>set_value<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span>run_time<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>使用<code>play</code>来控制动画的时间</li><li>使用<code>ValueTracker()</code>来控制数量变化</li></ol><p><a href="./Line/3.gif"></a></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> manim <span class="token keyword">import</span> <span class="token operator">*</span>

<span class="token keyword">class</span> <span class="token class-name">MovingDots</span><span class="token punctuation">(</span>Scene<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">construct</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        d1<span class="token punctuation">,</span>d2<span class="token operator">=</span>Dot<span class="token punctuation">(</span>color<span class="token operator">=</span>BLUE<span class="token punctuation">)</span><span class="token punctuation">,</span>Dot<span class="token punctuation">(</span>color<span class="token operator">=</span>GREEN<span class="token punctuation">)</span>
        l1<span class="token operator">=</span>Line<span class="token punctuation">(</span>d1<span class="token punctuation">.</span>get_center<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>d2<span class="token punctuation">.</span>get_center<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>set_color<span class="token punctuation">(</span>RED<span class="token punctuation">)</span>
        x<span class="token operator">=</span>ValueTracker<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
        y<span class="token operator">=</span>ValueTracker<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
        d1<span class="token punctuation">.</span>add_updater<span class="token punctuation">(</span><span class="token keyword">lambda</span> z<span class="token punctuation">:</span> z<span class="token punctuation">.</span>set_x<span class="token punctuation">(</span>x<span class="token punctuation">.</span>get_value<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        d2<span class="token punctuation">.</span>add_updater<span class="token punctuation">(</span><span class="token keyword">lambda</span> z<span class="token punctuation">:</span> z<span class="token punctuation">.</span>set_y<span class="token punctuation">(</span>y<span class="token punctuation">.</span>get_value<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        l1<span class="token punctuation">.</span>add_updater<span class="token punctuation">(</span><span class="token keyword">lambda</span> z<span class="token punctuation">:</span> z<span class="token punctuation">.</span>become<span class="token punctuation">(</span>Line<span class="token punctuation">(</span>d1<span class="token punctuation">.</span>get_center<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>d2<span class="token punctuation">.</span>get_center<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>add<span class="token punctuation">(</span>d1<span class="token punctuation">,</span>d2<span class="token punctuation">,</span>l1<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>play<span class="token punctuation">(</span>x<span class="token punctuation">.</span>animate<span class="token punctuation">.</span>set_value<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>play<span class="token punctuation">(</span>y<span class="token punctuation">.</span>animate<span class="token punctuation">.</span>set_value<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>wait<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',8),u=[c];function l(i,k){return s(),a("div",null,u)}const m=n(e,[["render",l],["__file","Line.html.vue"]]);export{m as default};
