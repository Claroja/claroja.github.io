import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-jdLxCr9I.js";const p={},e=t(`<h1 id="合并数据集-纵向concate" tabindex="-1"><a class="header-anchor" href="#合并数据集-纵向concate" aria-hidden="true">#</a> 合并数据集_纵向concate</h1><h2 id="参数解释" tabindex="-1"><a class="header-anchor" href="#参数解释" aria-hidden="true">#</a> 参数解释</h2><h3 id="测试数据集" tabindex="-1"><a class="header-anchor" href="#测试数据集" aria-hidden="true">#</a> 测试数据集</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>df1 <span class="token operator">=</span> pd<span class="token punctuation">.</span>DataFrame<span class="token punctuation">(</span>
    <span class="token punctuation">{</span>
        <span class="token string">&quot;A&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;A0&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;A1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;A2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;A3&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string">&quot;B&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;B0&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;B1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;B2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;B3&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string">&quot;C&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;C0&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;C1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;C2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;C3&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string">&quot;D&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;D0&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;D1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;D2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;D3&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    index<span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>

df2 <span class="token operator">=</span> pd<span class="token punctuation">.</span>DataFrame<span class="token punctuation">(</span>
    <span class="token punctuation">{</span>
        <span class="token string">&quot;B&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;B2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;B3&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;B6&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;B7&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string">&quot;D&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;D2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;D3&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;D6&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;D7&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string">&quot;F&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;F2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;F3&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;F6&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;F7&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    index<span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="axis控制合并方向为纵向" tabindex="-1"><a class="header-anchor" href="#axis控制合并方向为纵向" aria-hidden="true">#</a> axis控制合并方向为纵向</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>pd<span class="token punctuation">.</span>concat<span class="token punctuation">(</span><span class="token punctuation">[</span>df1<span class="token punctuation">,</span> df2<span class="token punctuation">]</span><span class="token punctuation">,</span> axis<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span>

<span class="token triple-quoted-string string">&quot;&quot;&quot;
    A   B    C   D    F
0   A0  B0   C0  D0  NaN
1   A1  B1   C1  D1  NaN
2   A2  B2   C2  D2  NaN
3   A3  B3   C3  D3  NaN
2  NaN  B2  NaN  D2   F2
3  NaN  B3  NaN  D3   F3
4  NaN  B6  NaN  D6   F6
5  NaN  B7  NaN  D7   F7
&quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ignore-index索引处理" tabindex="-1"><a class="header-anchor" href="#ignore-index索引处理" aria-hidden="true">#</a> ignore_index索引处理</h3><ol><li>默认ignore_index=False, 既不对索引处理</li><li>ignore_index=True, 重新生成索引, 相当于合并后进行<code>reset_index()</code></li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>pd<span class="token punctuation">.</span>concat<span class="token punctuation">(</span><span class="token punctuation">[</span>df1<span class="token punctuation">,</span> df2<span class="token punctuation">]</span><span class="token punctuation">,</span> ignore_index<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> axis<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
    A   B    C   D    F
0   A0  B0   C0  D0  NaN
1   A1  B1   C1  D1  NaN
2   A2  B2   C2  D2  NaN
3   A3  B3   C3  D3  NaN
4  NaN  B2  NaN  D2   F2
5  NaN  B3  NaN  D3   F3
6  NaN  B6  NaN  D6   F6
7  NaN  B7  NaN  D7   F7
&quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="join相同索引处理" tabindex="-1"><a class="header-anchor" href="#join相同索引处理" aria-hidden="true">#</a> join相同索引处理</h3><ol><li><p>默认join=outer, 列名不同数据丢弃</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>pd<span class="token punctuation">.</span>concat<span class="token punctuation">(</span><span class="token punctuation">[</span>df1<span class="token punctuation">,</span> df2<span class="token punctuation">]</span><span class="token punctuation">,</span> ignore_index<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span>join<span class="token operator">=</span><span class="token string">&quot;outer&quot;</span><span class="token punctuation">,</span>axis<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
    A	B	C	D	F
0	A0	B0	C0	D0	NaN
1	A1	B1	C1	D1	NaN
2	A2	B2	C2	D2	NaN
3	A3	B3	C3	D3	NaN
4	NaN	B2	NaN	D2	F2
5	NaN	B3	NaN	D3	F3
6	NaN	B6	NaN	D6	F6
7	NaN	B7	NaN	D7	F
&quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>join=inner仅保留列名相同的数据</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>pd<span class="token punctuation">.</span>concat<span class="token punctuation">(</span><span class="token punctuation">[</span>df1<span class="token punctuation">,</span> df2<span class="token punctuation">]</span><span class="token punctuation">,</span> ignore_index<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span>join<span class="token operator">=</span><span class="token string">&quot;inner&quot;</span><span class="token punctuation">,</span>axis<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
    B   D
0  B0  D0
1  B1  D1
2  B2  D2
3  B3  D3
4  B2  D2
5  B3  D3
6  B6  D6
7  B7  D7
&quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="拼贴series" tabindex="-1"><a class="header-anchor" href="#拼贴series" aria-hidden="true">#</a> 拼贴Series</h2><pre><code>\`\`\`python
s = pd.Series([&quot;X0&quot;, &quot;X1&quot;, &quot;X2&quot;, &quot;X3&quot;], index=[&quot;A&quot;, &quot;B&quot;, &quot;C&quot;, &quot;D&quot;])
&quot;&quot;&quot;
A    X0
B    X1
C    X2
D    X3
&quot;&quot;&quot;

pd.concat([df1, s.to_frame().T], ignore_index=True)
&quot;&quot;&quot;
    A   B   C   D
0  A0  B0  C0  D0
1  A1  B1  C1  D1
2  A2  B2  C2  D2
3  A3  B3  C3  D3
4  X0  X1  X2  X3
&quot;&quot;&quot;
\`\`\`
</code></pre><h2 id="repeat-rows" tabindex="-1"><a class="header-anchor" href="#repeat-rows" aria-hidden="true">#</a> repeat rows</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd
df <span class="token operator">=</span> pd<span class="token punctuation">.</span>DataFrame<span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token string">&quot;a&quot;</span><span class="token punctuation">:</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string">&quot;b&quot;</span><span class="token punctuation">:</span><span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

pd<span class="token punctuation">.</span>concat<span class="token punctuation">(</span><span class="token punctuation">[</span>df<span class="token punctuation">,</span><span class="token operator">*</span><span class="token punctuation">(</span><span class="token punctuation">[</span>df<span class="token punctuation">[</span>df<span class="token punctuation">[</span><span class="token string">&quot;b&quot;</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">*</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="append" tabindex="-1"><a class="header-anchor" href="#append" aria-hidden="true">#</a> append</h2><p>已经废弃了</p>`,17),o=[e];function u(i,c){return s(),a("div",null,o)}const d=n(p,[["render",u],["__file","合并数据集_纵向concate.html.vue"]]);export{d as default};
