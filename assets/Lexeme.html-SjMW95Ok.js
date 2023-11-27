import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-O0xqlHfm.js";const e={},o=t(`<h1 id="lexeme" tabindex="-1"><a class="header-anchor" href="#lexeme" aria-hidden="true">#</a> Lexeme</h1><p>词位lexeme 比如eats，eating，ate，eaten，这四个词虽然词形不同，但是它们都是eat的屈折变体，因此，eat就是这四个词的词位lexeme。在词典中，这些词都被收录在eat（词位）这个词条下。</p><p>形态学(Morphology)是指单词通过增加前缀和后缀而改变了语法的作用, 但是并没有改变part-of-speech. lemma(root form)通过一个或多个形态特征(morphological features)形成了新的单词.</p><table><thead><tr><th>CONTEXT</th><th>SURFACE</th><th>LEMMA</th><th>POS</th><th>MORPHOLOGICAL FEATURES</th></tr></thead><tbody><tr><td>I was reading the paper</td><td>reading</td><td>read</td><td>VERB</td><td>VerbForm=Ger</td></tr><tr><td>I don’t watch the news, I read the paper</td><td>read</td><td>read</td><td>VERB</td><td>VerbForm=Fin, Mood=Ind, Tense=Pres</td></tr><tr><td>I read the paper yesterday</td><td>read</td><td>read</td><td>VERB</td><td>VerbForm=Fin, Mood=Ind, Tense=Past</td></tr></tbody></table><p>形态特征存储在<code>Token.morph</code>下面的<code>MorphAnalysis</code>中:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> spacy
nlp <span class="token operator">=</span> spacy<span class="token punctuation">.</span>load<span class="token punctuation">(</span><span class="token string">&quot;en_core_web_sm&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Pipeline:&quot;</span><span class="token punctuation">,</span> nlp<span class="token punctuation">.</span>pipe_names<span class="token punctuation">)</span>
doc <span class="token operator">=</span> nlp<span class="token punctuation">(</span><span class="token string">&quot;I was reading the paper.&quot;</span><span class="token punctuation">)</span>
token <span class="token operator">=</span> doc<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>  <span class="token comment"># &#39;I&#39;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>token<span class="token punctuation">.</span>morph<span class="token punctuation">)</span>  <span class="token comment"># &#39;Case=Nom|Number=Sing|Person=1|PronType=Prs&#39;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>token<span class="token punctuation">.</span>morph<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;PronType&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># [&#39;Prs&#39;]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考: https://spacy.io/usage/linguistic-features#morphology</p>`,7),p=[o];function c(r,d){return s(),a("div",null,p)}const u=n(e,[["render",c],["__file","Lexeme.html.vue"]]);export{u as default};
