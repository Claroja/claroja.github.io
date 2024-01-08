import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as t,c as e,e as o,a,b as n}from"./app-YE2Hltoy.js";const l="/assets/1-g8Wp-gm3.png",p={},i=o(`<h1 id="pos" tabindex="-1"><a class="header-anchor" href="#pos" aria-hidden="true">#</a> pos</h1><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> spacy

nlp <span class="token operator">=</span> spacy<span class="token punctuation">.</span>load<span class="token punctuation">(</span><span class="token string">&quot;en_core_web_sm&quot;</span><span class="token punctuation">)</span>
doc <span class="token operator">=</span> nlp<span class="token punctuation">(</span><span class="token string">&quot;Apple is looking at buying U.K. startup for $1 billion&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">for</span> token <span class="token keyword">in</span> doc<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>token<span class="token punctuation">.</span>text<span class="token punctuation">,</span> token<span class="token punctuation">.</span>lemma_<span class="token punctuation">,</span> token<span class="token punctuation">.</span>pos_<span class="token punctuation">,</span> token<span class="token punctuation">.</span>tag_<span class="token punctuation">,</span> token<span class="token punctuation">.</span>dep_<span class="token punctuation">,</span>
            token<span class="token punctuation">.</span>shape_<span class="token punctuation">,</span> token<span class="token punctuation">.</span>is_alpha<span class="token punctuation">,</span> token<span class="token punctuation">.</span>is_stop<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意: 由于spacy存储都是基于哈希值的, 所以在获得具体值时, 需要在变量后面加上<code>_</code>.</p>`,3),c=a("p",null,[n("TEXT|LEMMA|POS|TAG|DEP|SHAPE|ALPHA|STOP --|--|--|--|--|--|--|--|-- Apple|apple|PROPN|NNP|nsubj|Xxxxx|True|False is|be|AUX|VBZ|aux|xx|True|True looking|look|VERB|VBG|ROOT|xxxx|True|False at|at|ADP|IN|prep|xx|True|True buying|buy|VERB|VBG|pcomp|xxxx|True|False U.K.|u.k.|PROPN|NNP|compound|X.X.|False|False startup|startup|NOUN|NN|dobj|xxxx|True|False for|for|ADP|IN|prep|xxx|True|True "),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",{mathvariant:"normal"},"∣")]),a("annotation",{encoding:"application/x-tex"},"|")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),a("span",{class:"mord"},"∣")])])]),n("|SYM|"),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",{mathvariant:"normal"},"∣"),a("mi",null,"q"),a("mi",null,"u"),a("mi",null,"a"),a("mi",null,"n"),a("mi",null,"t"),a("mi",null,"m"),a("mi",null,"o"),a("mi",null,"d"),a("mi",{mathvariant:"normal"},"∣")]),a("annotation",{encoding:"application/x-tex"},"|quantmod|")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),a("span",{class:"mord"},"∣"),a("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"q"),a("span",{class:"mord mathnormal"},"u"),a("span",{class:"mord mathnormal"},"an"),a("span",{class:"mord mathnormal"},"t"),a("span",{class:"mord mathnormal"},"m"),a("span",{class:"mord mathnormal"},"o"),a("span",{class:"mord mathnormal"},"d"),a("span",{class:"mord"},"∣")])])]),n("|False|False 1|1|NUM|CD|compound|d|False|False billion|billion|NUM|CD|pobj|xxxx|True|False")],-1),u=a("p",null,[n("字段解释: Text: 原始的文本 Lemma: 词语的基本形式, 比如"),a("code",null,"is"),n("的基本形式是"),a("code",null,"be"),n(" POS: UPOS part-of-speech tag. Tag: detailed part-of-speech tag. Dep: Syntactic dependency Shape: 词语的形状 – 大小写, 标点, 数字. is alpha: 是字母(alpha character)? is stop: 停止词 i.e. the most common words of the language?")],-1),r=a("figure",null,[a("img",{src:l,alt:"",tabindex:"0",loading:"lazy"}),a("figcaption")],-1),m=a("h2",{id:"词性标注",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#词性标注","aria-hidden":"true"},"#"),n(" 词性标注")],-1),d=a("p",null,"https://spacy.io/usage/linguistic-features#pos-tagging https://spacy.io/api/annotation#pos-tagging",-1),h=[i,c,u,r,m,d];function k(x,g){return t(),e("div",null,h)}const v=s(p,[["render",k],["__file","pos.html.vue"]]);export{v as default};
