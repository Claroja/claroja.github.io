import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e}from"./app-O0xqlHfm.js";const t={},o=e(`<h1 id="w2v" tabindex="-1"><a class="header-anchor" href="#w2v" aria-hidden="true">#</a> w2v</h1><h2 id="获得vector" tabindex="-1"><a class="header-anchor" href="#获得vector" aria-hidden="true">#</a> 获得vector</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> spacy

nlp <span class="token operator">=</span> spacy<span class="token punctuation">.</span>load<span class="token punctuation">(</span><span class="token string">&quot;en_core_web_md&quot;</span><span class="token punctuation">)</span>
tokens <span class="token operator">=</span> nlp<span class="token punctuation">(</span><span class="token string">&quot;dog cat banana afskfsd&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">for</span> token <span class="token keyword">in</span> tokens<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>token<span class="token punctuation">.</span>text<span class="token punctuation">,</span> token<span class="token punctuation">.</span>has_vector<span class="token punctuation">,</span> token<span class="token punctuation">.</span>vector_norm<span class="token punctuation">,</span> token<span class="token punctuation">.</span>is_oov<span class="token punctuation">)</span>


<span class="token comment">## dog True 75.254234 False</span>
<span class="token comment">## cat True 63.188496 False</span>
<span class="token comment">## banana True 31.620354 False</span>
<span class="token comment">## afskfsd False 0.0 True</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>dog</code>, <code>cat</code>和<code>banana</code>都是英语中的常用词, 所以在词汇表中, 具有向量表示. 而<code>afskfsd</code>不是常用词, 不在词汇表中, 所以使用300维的0来表示.</p><h2 id="相似度比较" tabindex="-1"><a class="header-anchor" href="#相似度比较" aria-hidden="true">#</a> 相似度比较</h2><p>每个<code>Doc</code>, <code>Span</code>, <code>Token</code>和<code>Lexeme</code>都具有<code>.similarity</code>方法, 可以用来和其他对象比较相似度.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> spacy

nlp <span class="token operator">=</span> spacy<span class="token punctuation">.</span>load<span class="token punctuation">(</span><span class="token string">&quot;en_core_web_md&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># make sure to use larger package!</span>
doc1 <span class="token operator">=</span> nlp<span class="token punctuation">(</span><span class="token string">&quot;I like salty fries and hamburgers.&quot;</span><span class="token punctuation">)</span>
doc2 <span class="token operator">=</span> nlp<span class="token punctuation">(</span><span class="token string">&quot;Fast food tastes very good.&quot;</span><span class="token punctuation">)</span>

<span class="token comment">## Similarity of two documents</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>doc1<span class="token punctuation">,</span> <span class="token string">&quot;&lt;-&gt;&quot;</span><span class="token punctuation">,</span> doc2<span class="token punctuation">,</span> doc1<span class="token punctuation">.</span>similarity<span class="token punctuation">(</span>doc2<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">## Similarity of tokens and spans</span>
french_fries <span class="token operator">=</span> doc1<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">:</span><span class="token number">4</span><span class="token punctuation">]</span>
burgers <span class="token operator">=</span> doc1<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>french_fries<span class="token punctuation">,</span> <span class="token string">&quot;&lt;-&gt;&quot;</span><span class="token punctuation">,</span> burgers<span class="token punctuation">,</span> french_fries<span class="token punctuation">.</span>similarity<span class="token punctuation">(</span>burgers<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">## I like salty fries and hamburgers. &lt;-&gt; Fast food tastes very good. 0.691649353055761</span>
<span class="token comment">## salty fries &lt;-&gt; hamburgers 0.6938489675521851</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考: https://spacy.io/usage/linguistic-features#vectors-similarity</p>`,8),p=[o];function c(i,l){return s(),a("div",null,p)}const d=n(t,[["render",c],["__file","w2v.html.vue"]]);export{d as default};
