import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e}from"./app-MTzDpLgJ.js";const t={},o=e(`<h1 id="vgroup" tabindex="-1"><a class="header-anchor" href="#vgroup" aria-hidden="true">#</a> vgroup</h1><h2 id="vgroup-1" tabindex="-1"><a class="header-anchor" href="#vgroup-1" aria-hidden="true">#</a> vgroup</h2><p><code>arrange()</code>|常用于<code>VGroup</code>对象 <code>shuffle</code>|随机排列子mobject, <code>VGroup</code><code>sort</code>|随机排列子mobject</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> manim <span class="token keyword">import</span> <span class="token operator">*</span>

<span class="token keyword">class</span> <span class="token class-name">ArcShapeIris</span><span class="token punctuation">(</span>Scene<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">construct</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        vg <span class="token operator">=</span> VGroup<span class="token punctuation">(</span><span class="token punctuation">)</span>
        triangle<span class="token punctuation">,</span> square <span class="token operator">=</span> Triangle<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> Square<span class="token punctuation">(</span><span class="token punctuation">)</span>
        vg<span class="token punctuation">.</span>add<span class="token punctuation">(</span>triangle<span class="token punctuation">,</span> square<span class="token punctuation">)</span>
        <span class="token comment"># vg[0]</span>
        self<span class="token punctuation">.</span>add<span class="token punctuation">(</span>vg<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考: https://docs.manim.community/en/stable/reference/manim.mobject.types.vectorized_mobject.VGroup.html</p>`,5),p=[o];function c(u,i){return s(),a("div",null,p)}const d=n(t,[["render",c],["__file","vgroup.html.vue"]]);export{d as default};
