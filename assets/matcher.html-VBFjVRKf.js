import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-SnI5rGHA.js";const o={},p=t(`<h1 id="matcher" tabindex="-1"><a class="header-anchor" href="#matcher" aria-hidden="true">#</a> matcher</h1><p>类似于正则表达式, 可以添加pos,dep和ner信息. 例如, 我们希望获得三个相连的token:</p><ol><li>lowercase form matches “hello”, e.g. “Hello” or “HELLO”.</li><li><code>is_punct</code> flag is set to True, i.e. any punctuation.</li><li>lowercase form matches “world”, e.g. “World” or “WORLD”.</li></ol><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token property">&quot;LOWER&quot;</span><span class="token operator">:</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token property">&quot;IS_PUNCT&quot;</span><span class="token operator">:</span> True<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token property">&quot;LOWER&quot;</span><span class="token operator">:</span> <span class="token string">&quot;world&quot;</span><span class="token punctuation">}</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注意, 列表中的每个字典代表一个token, 如果任何一个字典没有匹配到, 都不会有返回的结果.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> spacy
<span class="token keyword">from</span> spacy<span class="token punctuation">.</span>matcher <span class="token keyword">import</span> Matcher

nlp <span class="token operator">=</span> spacy<span class="token punctuation">.</span>load<span class="token punctuation">(</span><span class="token string">&quot;en_core_web_sm&quot;</span><span class="token punctuation">)</span>
matcher <span class="token operator">=</span> Matcher<span class="token punctuation">(</span>nlp<span class="token punctuation">.</span>vocab<span class="token punctuation">)</span>
<span class="token comment">## Add match ID &quot;HelloWorld&quot; with no callback and one pattern</span>
pattern <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token string">&quot;LOWER&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string">&quot;IS_PUNCT&quot;</span><span class="token punctuation">:</span> <span class="token boolean">True</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string">&quot;LOWER&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;world&quot;</span><span class="token punctuation">}</span><span class="token punctuation">]</span>
matcher<span class="token punctuation">.</span>add<span class="token punctuation">(</span><span class="token string">&quot;HelloWorld&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>pattern<span class="token punctuation">]</span><span class="token punctuation">)</span>

doc <span class="token operator">=</span> nlp<span class="token punctuation">(</span><span class="token string">&quot;Hello, world! Hello world!&quot;</span><span class="token punctuation">)</span>
matches <span class="token operator">=</span> matcher<span class="token punctuation">(</span>doc<span class="token punctuation">)</span>
<span class="token keyword">for</span> match_id<span class="token punctuation">,</span> start<span class="token punctuation">,</span> end <span class="token keyword">in</span> matches<span class="token punctuation">:</span>
    string_id <span class="token operator">=</span> nlp<span class="token punctuation">.</span>vocab<span class="token punctuation">.</span>strings<span class="token punctuation">[</span>match_id<span class="token punctuation">]</span>  <span class="token comment"># Get string representation</span>
    span <span class="token operator">=</span> doc<span class="token punctuation">[</span>start<span class="token punctuation">:</span>end<span class="token punctuation">]</span>  <span class="token comment"># The matched span</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>match_id<span class="token punctuation">,</span> string_id<span class="token punctuation">,</span> start<span class="token punctuation">,</span> end<span class="token punctuation">,</span> span<span class="token punctuation">.</span>text<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>matcher(doc)</code>返回<code>[(match_id, start, end)]</code>元组列表, 在这个例子中是<code>[(&#39;15578876784678163569&#39;, 0, 3)]</code>.</p><ol><li><code>match_id</code>是String ID(<code>HelloWord</code>)的哈希值, 可以在<code>nlp.vocab.strings</code>中索引到字符串.</li><li><code>start</code>&amp;<code>end</code>: 通过<code>doc[start, end]</code>(<code>doc[0,3]</code>)可以获得匹配的结果.</li></ol><p>https://spacy.io/usage/rule-based-matching https://spacy.io/api/matcher</p>`,9),e=[p];function c(l,u){return s(),a("div",null,e)}const d=n(o,[["render",c],["__file","matcher.html.vue"]]);export{d as default};
