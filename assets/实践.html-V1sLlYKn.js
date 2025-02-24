import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-A10JnHE0.js";const p={},o=t(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token keyword">import</span> anime <span class="token keyword">from</span> <span class="token string">&#39;animejs/lib/anime.es.js&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">createSvg</span><span class="token punctuation">(</span>width<span class="token operator">:</span> string <span class="token operator">=</span> <span class="token string">&quot;1000&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">height</span><span class="token operator">:</span> string <span class="token operator">=</span> <span class="token string">&quot;1000&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> div <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
    <span class="token comment">// make a simple rectangle</span>
    <span class="token keyword">var</span> svgDom <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElementNS</span><span class="token punctuation">(</span><span class="token string">&#39;http://www.w3.org/2000/svg&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;svg&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    svgDom<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;width&#39;</span><span class="token punctuation">,</span> width<span class="token punctuation">)</span><span class="token punctuation">;</span>
    svgDom<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;height&#39;</span><span class="token punctuation">,</span> height<span class="token punctuation">)</span><span class="token punctuation">;</span>
    div<span class="token operator">?.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>svgDom<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">svg</span><span class="token punctuation">(</span>svgDom<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">svg</span><span class="token punctuation">{</span>
    <span class="token literal-property property">body</span><span class="token operator">:</span> SVGSVGElement
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">svgDom</span><span class="token operator">:</span> SVGSVGElement</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>body <span class="token operator">=</span> svgDom
        <span class="token keyword">let</span> defs <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElementNS</span><span class="token punctuation">(</span><span class="token string">&#39;http://www.w3.org/2000/svg&#39;</span><span class="token punctuation">,</span> <span class="token string">&quot;defs&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        svgDom<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>defs<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token function">draw</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">options</span><span class="token operator">:</span> any<span class="token punctuation">,</span> <span class="token literal-property property">svg</span><span class="token operator">:</span> svg <span class="token operator">=</span> <span class="token keyword">this</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token keyword">let</span> <span class="token literal-property property">graph</span><span class="token operator">:</span> any<span class="token punctuation">;</span>
        <span class="token keyword">switch</span> <span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">case</span> <span class="token string">&quot;circle&quot;</span><span class="token operator">:</span>
                graph <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">circle</span><span class="token punctuation">(</span>options<span class="token punctuation">,</span> svg<span class="token punctuation">)</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>graph<span class="token operator">?.</span>body<span class="token punctuation">)</span>
        <span class="token keyword">return</span> graph
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token keyword">class</span> <span class="token class-name">circle</span><span class="token punctuation">{</span>
    <span class="token literal-property property">body</span><span class="token operator">:</span> SVGCircleElement
    <span class="token literal-property property">svg</span><span class="token operator">:</span> svg
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">options</span><span class="token operator">:</span> any<span class="token punctuation">,</span> <span class="token literal-property property">svg</span><span class="token operator">:</span> svg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>svg <span class="token operator">=</span> svg
        <span class="token keyword">this</span><span class="token punctuation">.</span>body <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElementNS</span><span class="token punctuation">(</span><span class="token string">&#39;http://www.w3.org/2000/svg&#39;</span><span class="token punctuation">,</span> <span class="token string">&quot;circle&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> key <span class="token keyword">in</span> options<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span>options<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token function">moveTo</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">point</span><span class="token operator">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">anime</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">targets</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>body<span class="token punctuation">,</span>
            <span class="token literal-property property">cx</span><span class="token operator">:</span> point<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token literal-property property">cy</span><span class="token operator">:</span> point<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token function">pathTo</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">to</span><span class="token operator">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token literal-property property">fill</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">stroke</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> path <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElementNS</span><span class="token punctuation">(</span><span class="token string">&#39;http://www.w3.org/2000/svg&#39;</span><span class="token punctuation">,</span> <span class="token string">&quot;path&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token keyword">let</span> cx <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;cx&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">let</span> cy <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;cy&quot;</span><span class="token punctuation">)</span>
        
        path<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;fill&quot;</span><span class="token punctuation">,</span> fill<span class="token punctuation">)</span>
        path<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;stroke&quot;</span><span class="token punctuation">,</span> stroke<span class="token punctuation">)</span>
        path<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;d&quot;</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">M </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>cx<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">,</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>cy<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>svg<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span>
        
        <span class="token function">anime</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">targets</span><span class="token operator">:</span> path<span class="token punctuation">,</span>
            <span class="token literal-property property">d</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">M </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>cx<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">,</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>cy<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> L </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>to<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">,</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>to<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>


    <span class="token function">fillImg</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">imgSrc</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        
        <span class="token keyword">let</span> pattern <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElementNS</span><span class="token punctuation">(</span><span class="token string">&#39;http://www.w3.org/2000/svg&#39;</span><span class="token punctuation">,</span> <span class="token string">&quot;pattern&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        pattern<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;avatar&quot;</span><span class="token punctuation">)</span>
        pattern<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;width&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span>
        pattern<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;height&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span>
        pattern<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;patternContentUnits&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;objectBoundingBox&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">let</span> image <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElementNS</span><span class="token punctuation">(</span><span class="token string">&#39;http://www.w3.org/2000/svg&#39;</span><span class="token punctuation">,</span> <span class="token string">&quot;image&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        image<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;width&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span>
        image<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;height&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span>
        image<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;href&quot;</span><span class="token punctuation">,</span>imgSrc<span class="token punctuation">)</span>

        pattern<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>image<span class="token punctuation">)</span>
        
        <span class="token keyword">let</span> defs <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>svg<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;defs&quot;</span><span class="token punctuation">)</span>
        defs<span class="token operator">?.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>pattern<span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>svg<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>defs<span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;fill&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;url(#avatar)&quot;</span><span class="token punctuation">)</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span>createSvg<span class="token punctuation">,</span> circle<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),e=[o];function c(i,l){return s(),a("div",null,e)}const k=n(p,[["render",c],["__file","实践.html.vue"]]);export{k as default};
