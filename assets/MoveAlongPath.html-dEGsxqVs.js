import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as s,e as t}from"./app-M6UUlHgF.js";const o="/assets/1-xiDRqlSU.gif",p={},e=t(`<h1 id="movealongpath" tabindex="-1"><a class="header-anchor" href="#movealongpath" aria-hidden="true">#</a> MoveAlongPath</h1><p>manim_animations_MoveAlongPath</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> manim <span class="token keyword">import</span> <span class="token operator">*</span>

<span class="token keyword">class</span> <span class="token class-name">MoveAlongPathExample</span><span class="token punctuation">(</span>Scene<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">construct</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        d1 <span class="token operator">=</span> Dot<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>set_color<span class="token punctuation">(</span>ORANGE<span class="token punctuation">)</span>
        l1 <span class="token operator">=</span> Line<span class="token punctuation">(</span>LEFT<span class="token punctuation">,</span> RIGHT<span class="token punctuation">)</span>
        l2 <span class="token operator">=</span> VMobject<span class="token punctuation">(</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>add<span class="token punctuation">(</span>d1<span class="token punctuation">,</span> l1<span class="token punctuation">,</span> l2<span class="token punctuation">)</span>
        l2<span class="token punctuation">.</span>add_updater<span class="token punctuation">(</span><span class="token keyword">lambda</span> x<span class="token punctuation">:</span> x<span class="token punctuation">.</span>become<span class="token punctuation">(</span>Line<span class="token punctuation">(</span>LEFT<span class="token punctuation">,</span> d1<span class="token punctuation">.</span>get_center<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>set_color<span class="token punctuation">(</span>ORANGE<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>play<span class="token punctuation">(</span>MoveAlongPath<span class="token punctuation">(</span>d1<span class="token punctuation">,</span> l1<span class="token punctuation">)</span><span class="token punctuation">,</span> rate_func<span class="token operator">=</span>linear<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><code>l2.add_updater()</code>是每一帧都更新该对象 <code>lambda x: x.become(Line(LEFT, d1.get_center())</code>每一帧都变成一个直线, 直线的一段是<code>LEFT</code>, 另外一端是<code>Dot</code>对象的中心, 在不断的变换, 就有了线在不断变长的效果.</p><p>参考: https://docs.manim.community/en/stable/reference/manim.animation.movement.MoveAlongPath.html</p>',6),c=[e];function l(i,u){return a(),s("div",null,c)}const k=n(p,[["render",l],["__file","MoveAlongPath.html.vue"]]);export{k as default};
