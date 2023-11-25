import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,d as e}from"./app-j3zK2x6_.js";const t={},o=e(`<h1 id="sentencesegmentation" tabindex="-1"><a class="header-anchor" href="#sentencesegmentation" aria-hidden="true">#</a> sentenceSegmentation</h1><p>句子分割</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> spacy

nlp <span class="token operator">=</span> spacy<span class="token punctuation">.</span>load<span class="token punctuation">(</span><span class="token string">&quot;en_core_web_sm&quot;</span><span class="token punctuation">)</span>
doc <span class="token operator">=</span> nlp<span class="token punctuation">(</span><span class="token string">&quot;This is a sentence. This is another sentence.&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">assert</span> doc<span class="token punctuation">.</span>has_annotation<span class="token punctuation">(</span><span class="token string">&quot;SENT_START&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> sent <span class="token keyword">in</span> doc<span class="token punctuation">.</span>sents<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>sent<span class="token punctuation">.</span>text<span class="token punctuation">)</span>


<span class="token comment">## This is a sentence.</span>
<span class="token comment">## This is another sentence.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>https://spacy.io/usage/linguistic-features#sbd</p>`,4),c=[o];function i(p,l){return s(),a("div",null,c)}const d=n(t,[["render",i],["__file","spacy_sentenceSegmentation.html.vue"]]);export{d as default};
