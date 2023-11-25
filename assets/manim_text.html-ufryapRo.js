import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,d as t}from"./app-j3zK2x6_.js";const o="/assets/1-G9XhtTmB.png",e={},p=t(`<h1 id="text" tabindex="-1"><a class="header-anchor" href="#text" aria-hidden="true">#</a> text</h1><p><code>Text</code>对象用来处理文字, 它继承的继承关系是: <code>TextMobject</code>(Text Math object) -&gt; <code>SVGMobject</code>(SVG Vectorized Math object) -&gt; <code>VMobject</code>(Vectorized Math object) -&gt; <code>Mobject</code>(Math object)</p><p>所以<code>Text</code>也可以使用<code>SVGMobject</code>, <code>VMobject</code>和<code>Mobject</code>的方法.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> manim <span class="token keyword">import</span> <span class="token operator">*</span>

<span class="token keyword">class</span> <span class="token class-name">MultipleFonts</span><span class="token punctuation">(</span>Scene<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">construct</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        morning <span class="token operator">=</span> Text<span class="token punctuation">(</span><span class="token string">&quot;வணக்கம்&quot;</span><span class="token punctuation">,</span> font<span class="token operator">=</span><span class="token string">&quot;sans-serif&quot;</span><span class="token punctuation">)</span>
        japanese <span class="token operator">=</span> Text<span class="token punctuation">(</span>
            <span class="token string">&quot;日本へようこそ&quot;</span><span class="token punctuation">,</span> t2c<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&quot;日本&quot;</span><span class="token punctuation">:</span> BLUE<span class="token punctuation">}</span>
        <span class="token punctuation">)</span>  <span class="token comment"># works same as \`\`Text\`\`.</span>
        mess <span class="token operator">=</span> Text<span class="token punctuation">(</span><span class="token string">&quot;Multi-Language&quot;</span><span class="token punctuation">,</span> weight<span class="token operator">=</span>BOLD<span class="token punctuation">)</span>
        russ <span class="token operator">=</span> Text<span class="token punctuation">(</span><span class="token string">&quot;Здравствуйте मस नम म &quot;</span><span class="token punctuation">,</span> font<span class="token operator">=</span><span class="token string">&quot;sans-serif&quot;</span><span class="token punctuation">)</span>
        hin <span class="token operator">=</span> Text<span class="token punctuation">(</span><span class="token string">&quot;नमस्ते&quot;</span><span class="token punctuation">,</span> font<span class="token operator">=</span><span class="token string">&quot;sans-serif&quot;</span><span class="token punctuation">)</span>
        arb <span class="token operator">=</span> Text<span class="token punctuation">(</span>
            <span class="token string">&quot;صباح الخير \\n تشرفت بمقابلتك&quot;</span><span class="token punctuation">,</span> font<span class="token operator">=</span><span class="token string">&quot;sans-serif&quot;</span>
        <span class="token punctuation">)</span>  <span class="token comment"># don&#39;t mix RTL and LTR languages nothing shows up then ;-)</span>
        chinese <span class="token operator">=</span> Text<span class="token punctuation">(</span><span class="token string">&quot;臂猿「黛比」帶著孩子&quot;</span><span class="token punctuation">,</span> font<span class="token operator">=</span><span class="token string">&quot;sans-serif&quot;</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>add<span class="token punctuation">(</span>morning<span class="token punctuation">,</span> japanese<span class="token punctuation">,</span> mess<span class="token punctuation">,</span> russ<span class="token punctuation">,</span> hin<span class="token punctuation">,</span> arb<span class="token punctuation">,</span> chinese<span class="token punctuation">)</span>
        <span class="token keyword">for</span> i<span class="token punctuation">,</span>mobj <span class="token keyword">in</span> <span class="token builtin">enumerate</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>mobjects<span class="token punctuation">)</span><span class="token punctuation">:</span>
            mobj<span class="token punctuation">.</span>shift<span class="token punctuation">(</span>DOWN<span class="token operator">*</span><span class="token punctuation">(</span>i<span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',5),c=[p];function i(u,l){return s(),a("div",null,c)}const d=n(e,[["render",i],["__file","manim_text.html.vue"]]);export{d as default};
