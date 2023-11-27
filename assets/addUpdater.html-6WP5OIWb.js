import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as e,o,c as p,a as n,b as a,d as c,w as l,e as i}from"./app-O0xqlHfm.js";const u="/assets/1-6ixFYN0v.gif",d="/assets/2-2m1Y3I98.gif",r={},k=n("h1",{id:"addupdater",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#addupdater","aria-hidden":"true"},"#"),a(" addUpdater")],-1),m=n("code",null,"add_updater",-1),b=n("code",null,"become",-1),v=i(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> manim <span class="token keyword">import</span> <span class="token operator">*</span>

<span class="token keyword">class</span> <span class="token class-name">NextToUpdater</span><span class="token punctuation">(</span>Scene<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">construct</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        dot <span class="token operator">=</span> Dot<span class="token punctuation">(</span>RIGHT<span class="token operator">*</span><span class="token number">3</span><span class="token punctuation">)</span>  <span class="token comment"># 点(3,0)位置</span>
        label <span class="token operator">=</span> DecimalNumber<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 小数对象</span>
        label<span class="token punctuation">.</span>add_updater<span class="token punctuation">(</span><span class="token keyword">lambda</span> x<span class="token punctuation">:</span> x<span class="token punctuation">.</span>set_value<span class="token punctuation">(</span>dot<span class="token punctuation">.</span>get_center<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span>next_to<span class="token punctuation">(</span>dot<span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 每一帧获得点的位置, 赋予小数对象</span>

        self<span class="token punctuation">.</span>add<span class="token punctuation">(</span>dot<span class="token punctuation">,</span> label<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>play<span class="token punctuation">(</span>Rotating<span class="token punctuation">(</span>dot<span class="token punctuation">,</span> about_point<span class="token operator">=</span>ORIGIN<span class="token punctuation">,</span> angle<span class="token operator">=</span>TAU<span class="token punctuation">,</span> run_time<span class="token operator">=</span>TAU<span class="token punctuation">,</span> rate_func<span class="token operator">=</span>linear<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+u+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> manim <span class="token keyword">import</span> <span class="token operator">*</span>

<span class="token keyword">class</span> <span class="token class-name">DtUpdater</span><span class="token punctuation">(</span>Scene<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">construct</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        line <span class="token operator">=</span> Square<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token comment">#Let the line rotate 90° per second</span>
        line<span class="token punctuation">.</span>add_updater<span class="token punctuation">(</span><span class="token keyword">lambda</span> mobject<span class="token punctuation">,</span> dt<span class="token punctuation">:</span> mobject<span class="token punctuation">.</span>rotate<span class="token punctuation">(</span>dt<span class="token operator">*</span><span class="token number">90</span><span class="token operator">*</span>DEGREES<span class="token punctuation">)</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>add<span class="token punctuation">(</span>line<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>wait<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>lambda mobject, dt: mobject.rotate(dt*90*DEGREES)</code><code>lambda</code>的参数有两个<code>mobject</code>和<code>dt</code>, <code>dt</code>是指<code>Delta time</code>, 即时间的微分. <code>dt*90*DEGREES</code>即表示将 要旋转的总度数<code>90*DEGREES</code>除以动画的总时间. 即单位时间旋转多少度.</p><figure><img src="`+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>参考: https://docs.manim.community/en/stable/reference/manim.mobject.mobject.Mobject.html?highlight=add_updater#manim.mobject.mobject.Mobject.add_updater</p>',6);function _(f,g){const s=e("RouterLink");return o(),p("div",null,[k,n("p",null,[m,a("每一帧来更新对象, 结合"),b,a("方法可以做出多种动画效果, 比如"),c(s,{to:"/manim_animations_MoveAlongPath/"},{default:l(()=>[a("manim_animations_MoveAlongPath")]),_:1})]),v])}const x=t(r,[["render",_],["__file","addUpdater.html.vue"]]);export{x as default};
