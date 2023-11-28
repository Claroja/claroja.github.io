import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e}from"./app-yeyEmHfz.js";const t={},o=e(`<h1 id="handleerror" tabindex="-1"><a class="header-anchor" href="#handleerror" aria-hidden="true">#</a> handleError</h1><h2 id="lbyl和eafp" tabindex="-1"><a class="header-anchor" href="#lbyl和eafp" aria-hidden="true">#</a> LBYL和EAFP</h2><p>有两种应对<code>error</code>和<code>exception</code>的方法:</p><ol><li><p>在<code>error</code>和<code>exception</code>发生前阻止, 比如使用<code>if</code>语句, <code>C</code>和<code>GO</code>中, 简称为Look before you leap (LBYL)</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">if</span> <span class="token string">&quot;possible_key&quot;</span> <span class="token keyword">in</span> data_dict<span class="token punctuation">:</span>
    value <span class="token operator">=</span> data_dict<span class="token punctuation">[</span><span class="token string">&quot;possible_key&quot;</span><span class="token punctuation">]</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token comment"># Handle missing keys here...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>在<code>error</code>和<code>exception</code>发生后处理, 比如使用<code>try...except</code>, <code>C++</code>,<code>Java</code>和<code>Python</code>, 简称为Easier to ask forgiveness than permission (EAFP)</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">try</span><span class="token punctuation">:</span>
    value <span class="token operator">=</span> data_dict<span class="token punctuation">[</span><span class="token string">&quot;possible_key&quot;</span><span class="token punctuation">]</span>
<span class="token keyword">except</span> KeyError<span class="token punctuation">:</span>
    <span class="token comment"># Handle missing keys here...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="如何选择" tabindex="-1"><a class="header-anchor" href="#如何选择" aria-hidden="true">#</a> 如何选择</h2><p>是使用<code>LBYL</code>还是<code>EAFP</code>, 要根据以下4中情况考虑:</p><ul><li>Number of checks</li><li>Readability and clarity</li><li>Race condition risk</li><li>Code performance</li></ul><h3 id="avoiding-unnecessary-check-repetition" tabindex="-1"><a class="header-anchor" href="#avoiding-unnecessary-check-repetition" aria-hidden="true">#</a> Avoiding Unnecessary Check Repetition</h3><p>下面的代码, 我们首先使用<code>value.isdigit</code>来判断字符串中是否包含数字</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">to_integer</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> value<span class="token punctuation">.</span>isdigit<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>  <span class="token comment"># 先确认字符串中是否都是数字</span>
        <span class="token keyword">return</span> <span class="token builtin">int</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token boolean">None</span>

to_integer<span class="token punctuation">(</span><span class="token string">&quot;42&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># 42</span>
to_integer<span class="token punctuation">(</span><span class="token string">&quot;one&quot;</span><span class="token punctuation">)</span> <span class="token comment"># None</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为<code>int()</code>方法中已经做了<code>isdigit()</code>的检查, 如果不是<code>digit</code>则会抛出异常, 所以我们没必要再做<code>if</code>判断.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">to_integer</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token builtin">int</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
    <span class="token keyword">except</span> ValueError<span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token boolean">None</span>

to_integer<span class="token punctuation">(</span><span class="token string">&quot;42&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># 42</span>
to_integer<span class="token punctuation">(</span><span class="token string">&quot;one&quot;</span><span class="token punctuation">)</span> <span class="token comment"># True</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="improving-readability-and-clarity" tabindex="-1"><a class="header-anchor" href="#improving-readability-and-clarity" aria-hidden="true">#</a> Improving Readability and Clarity</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">divide</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> default<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> b <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>  <span class="token comment"># Exceptional situation</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;zero division detected&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># Error handling</span>
        <span class="token keyword">return</span> default
    <span class="token keyword">return</span> a <span class="token operator">/</span> b  <span class="token comment"># Most common situation</span>

divide<span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment"># 4.0</span>
divide<span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment"># zero division detected</span>
divide<span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> default<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment"># divide(8, 0, default=0) 0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码的问题是将<code>exception</code>放在代码中间, 这样不利于对该方法的理解. 因为这个方法的主要目的是计算两个数的商, 而不是处理分母为0的情况, 所以<code>EAFP</code>风格更合适.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">divide</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> default<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> a <span class="token operator">/</span> b  <span class="token comment"># Most common situation</span>
    <span class="token keyword">except</span> ZeroDivisionError<span class="token punctuation">:</span>  <span class="token comment"># Exceptional situation</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;zero division detected&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># Error handling</span>
        <span class="token keyword">return</span> default
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="avoiding-race-conditions" tabindex="-1"><a class="header-anchor" href="#avoiding-race-conditions" aria-hidden="true">#</a> Avoiding Race Conditions</h3><p>在不同的<code>program</code>,<code>processes</code>或者<code>threads</code>访问同一个资源的情况下, 会发生<code>race condition</code>.这种情况<code>if key in mapping: return mapping[key]</code>可能会失败, 因为另外的<code>thread</code>可能移除<code>key</code>在使用<code>if</code>语句判断前.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>connection <span class="token operator">=</span> create_connection<span class="token punctuation">(</span>db<span class="token punctuation">,</span> host<span class="token punctuation">,</span> user<span class="token punctuation">,</span> password<span class="token punctuation">)</span>
<span class="token comment">## Later in your code...</span>
<span class="token keyword">if</span> connection<span class="token punctuation">.</span>is_active<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># Update your database here...</span>
    connection<span class="token punctuation">.</span>commit<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token comment"># Handle the connection error here...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果<code>database</code>在执行<code>.is_active()</code>和<code>if</code>里面的代码时变成了<code>unavailable</code>时, 程序就会报错. 为了避免这种情况, 最好使用 EAFP.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>connection <span class="token operator">=</span> create_connection<span class="token punctuation">(</span>db<span class="token punctuation">,</span> host<span class="token punctuation">,</span> user<span class="token punctuation">,</span> password<span class="token punctuation">)</span>

<span class="token comment">## Later in your code...</span>
<span class="token keyword">try</span><span class="token punctuation">:</span>
    <span class="token comment"># Update your database here...</span>
    connection<span class="token punctuation">.</span>commit<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">except</span> ConnectionError<span class="token punctuation">:</span>
    <span class="token comment"># Handle the connection error here...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="improving-your-code-s-performance" tabindex="-1"><a class="header-anchor" href="#improving-your-code-s-performance" aria-hidden="true">#</a> Improving Your Code’s Performance</h3><p>EAFP在大多数情况下都会比LBYL</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>sample_text <span class="token operator">=</span> <span class="token triple-quoted-string string">&quot;&quot;&quot;
Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
mollitia, molestiae quas vel sint commodi repudiandae consequuntur
voluptatum laborum numquam blanditiis harum quisquam eius sed odit
fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum
ut molestias architecto voluptate aliquam nihil, eveniet aliquid
culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error,
harum nesciunt ipsum debitis quas aliquid.
&quot;&quot;&quot;</span>


<span class="token keyword">def</span> <span class="token function">char_frequency_lbyl</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">:</span>
    counter <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">for</span> char <span class="token keyword">in</span> text<span class="token punctuation">:</span>
        <span class="token keyword">if</span> char <span class="token keyword">in</span> counter<span class="token punctuation">:</span>
            counter<span class="token punctuation">[</span>char<span class="token punctuation">]</span> <span class="token operator">+=</span> <span class="token number">1</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            counter<span class="token punctuation">[</span>char<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span>
    <span class="token keyword">return</span> counter

<span class="token keyword">def</span> <span class="token function">char_frequency_eafp</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">:</span>
    counter <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">for</span> char <span class="token keyword">in</span> text<span class="token punctuation">:</span>
        <span class="token keyword">try</span><span class="token punctuation">:</span>
            counter<span class="token punctuation">[</span>char<span class="token punctuation">]</span> <span class="token operator">+=</span> <span class="token number">1</span>
        <span class="token keyword">except</span> KeyError<span class="token punctuation">:</span>
            counter<span class="token punctuation">[</span>char<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span>
    <span class="token keyword">return</span> counter

<span class="token keyword">import</span> timeit
sample_text <span class="token operator">*=</span> <span class="token number">100</span>

eafp_time <span class="token operator">=</span> <span class="token builtin">min</span><span class="token punctuation">(</span>
    timeit<span class="token punctuation">.</span>repeat<span class="token punctuation">(</span>
        stmt<span class="token operator">=</span><span class="token string">&quot;char_frequency_eafp(sample_text)&quot;</span><span class="token punctuation">,</span>
        number<span class="token operator">=</span><span class="token number">1000</span><span class="token punctuation">,</span>
        repeat<span class="token operator">=</span><span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token builtin">globals</span><span class="token operator">=</span><span class="token builtin">globals</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span>
<span class="token punctuation">)</span>

lbyl_time <span class="token operator">=</span> <span class="token builtin">min</span><span class="token punctuation">(</span>
    timeit<span class="token punctuation">.</span>repeat<span class="token punctuation">(</span>
        stmt<span class="token operator">=</span><span class="token string">&quot;char_frequency_lbyl(sample_text)&quot;</span><span class="token punctuation">,</span>
        number<span class="token operator">=</span><span class="token number">1000</span><span class="token punctuation">,</span>
        repeat<span class="token operator">=</span><span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token builtin">globals</span><span class="token operator">=</span><span class="token builtin">globals</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span>
<span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;LBYL is </span><span class="token interpolation"><span class="token punctuation">{</span>lbyl_time <span class="token operator">/</span> eafp_time<span class="token punctuation">:</span><span class="token format-spec">.3f</span><span class="token punctuation">}</span></span><span class="token string"> times slower than EAFP&quot;</span></span><span class="token punctuation">)</span> <span class="token comment"># LBYL is 1.211 times slower than EAFP</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考: python_handleError</p>`,25),p=[o];function i(c,l){return s(),a("div",null,p)}const r=n(t,[["render",i],["__file","handleError.html.vue"]]);export{r as default};
