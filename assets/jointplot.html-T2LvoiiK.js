import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as p}from"./app-SnI5rGHA.js";const t={},o=p(`<h1 id="jointplot" tabindex="-1"><a class="header-anchor" href="#jointplot" aria-hidden="true">#</a> jointplot</h1><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd
<span class="token keyword">import</span> matplotlib<span class="token punctuation">.</span>pyplot <span class="token keyword">as</span> plt
<span class="token keyword">from</span> matplotlib<span class="token punctuation">.</span>gridspec <span class="token keyword">import</span> GridSpec

df <span class="token operator">=</span> pd<span class="token punctuation">.</span>read_csv<span class="token punctuation">(</span><span class="token string">&#39;iris.csv&#39;</span><span class="token punctuation">)</span>

fig <span class="token operator">=</span> plt<span class="token punctuation">.</span>figure<span class="token punctuation">(</span><span class="token punctuation">)</span>
gs <span class="token operator">=</span> GridSpec<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span>

ax_scatter <span class="token operator">=</span> fig<span class="token punctuation">.</span>add_subplot<span class="token punctuation">(</span>gs<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">:</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
ax_hist_x <span class="token operator">=</span> fig<span class="token punctuation">.</span>add_subplot<span class="token punctuation">(</span>gs<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
ax_hist_y <span class="token operator">=</span> fig<span class="token punctuation">.</span>add_subplot<span class="token punctuation">(</span>gs<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

ax_scatter<span class="token punctuation">.</span>scatter<span class="token punctuation">(</span>df<span class="token punctuation">[</span><span class="token string">&#39;SepalLengthCm&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> df<span class="token punctuation">[</span><span class="token string">&#39;SepalWidthCm&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

ax_hist_x<span class="token punctuation">.</span>hist<span class="token punctuation">(</span>df<span class="token punctuation">[</span><span class="token string">&#39;SepalLengthCm&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
ax_hist_y<span class="token punctuation">.</span>hist<span class="token punctuation">(</span>df<span class="token punctuation">[</span><span class="token string">&#39;SepalWidthCm&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> orientation <span class="token operator">=</span> <span class="token string">&#39;horizontal&#39;</span><span class="token punctuation">)</span>

plt<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd
<span class="token keyword">import</span> matplotlib<span class="token punctuation">.</span>pyplot <span class="token keyword">as</span> plt
<span class="token keyword">from</span> matplotlib<span class="token punctuation">.</span>gridspec <span class="token keyword">import</span> GridSpec

df <span class="token operator">=</span> pd<span class="token punctuation">.</span>read_csv<span class="token punctuation">(</span><span class="token string">&#39;iris.csv&#39;</span><span class="token punctuation">)</span>

setosa <span class="token operator">=</span> df<span class="token punctuation">[</span>df<span class="token punctuation">[</span><span class="token string">&#39;Species&#39;</span><span class="token punctuation">]</span><span class="token operator">==</span><span class="token string">&#39;Iris-setosa&#39;</span><span class="token punctuation">]</span>
virginica <span class="token operator">=</span> df<span class="token punctuation">[</span>df<span class="token punctuation">[</span><span class="token string">&#39;Species&#39;</span><span class="token punctuation">]</span><span class="token operator">==</span><span class="token string">&#39;Iris-virginica&#39;</span><span class="token punctuation">]</span>
versicolor <span class="token operator">=</span> df<span class="token punctuation">[</span>df<span class="token punctuation">[</span><span class="token string">&#39;Species&#39;</span><span class="token punctuation">]</span><span class="token operator">==</span><span class="token string">&#39;Iris-versicolor&#39;</span><span class="token punctuation">]</span>
species <span class="token operator">=</span> df<span class="token punctuation">[</span><span class="token string">&#39;Species&#39;</span><span class="token punctuation">]</span>
colors <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&#39;Iris-setosa&#39;</span> <span class="token punctuation">:</span> <span class="token string">&#39;tab:blue&#39;</span><span class="token punctuation">,</span> 
    <span class="token string">&#39;Iris-versicolor&#39;</span> <span class="token punctuation">:</span> <span class="token string">&#39;tab:red&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;Iris-virginica&#39;</span> <span class="token punctuation">:</span> <span class="token string">&#39;tab:green&#39;</span>
    <span class="token punctuation">}</span>

fig <span class="token operator">=</span> plt<span class="token punctuation">.</span>figure<span class="token punctuation">(</span><span class="token punctuation">)</span>
gs <span class="token operator">=</span> GridSpec<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span>

ax_scatter <span class="token operator">=</span> fig<span class="token punctuation">.</span>add_subplot<span class="token punctuation">(</span>gs<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">:</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
ax_hist_y <span class="token operator">=</span> fig<span class="token punctuation">.</span>add_subplot<span class="token punctuation">(</span>gs<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
ax_hist_x <span class="token operator">=</span> fig<span class="token punctuation">.</span>add_subplot<span class="token punctuation">(</span>gs<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>


ax_scatter<span class="token punctuation">.</span>scatter<span class="token punctuation">(</span>df<span class="token punctuation">[</span><span class="token string">&#39;SepalLengthCm&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> df<span class="token punctuation">[</span><span class="token string">&#39;SepalWidthCm&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> c<span class="token operator">=</span>species<span class="token punctuation">.</span><span class="token builtin">map</span><span class="token punctuation">(</span>colors<span class="token punctuation">)</span><span class="token punctuation">)</span>

ax_hist_y<span class="token punctuation">.</span>hist<span class="token punctuation">(</span>versicolor<span class="token punctuation">[</span><span class="token string">&#39;SepalLengthCm&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> color<span class="token operator">=</span><span class="token string">&#39;tab:red&#39;</span><span class="token punctuation">,</span> alpha<span class="token operator">=</span><span class="token number">0.4</span><span class="token punctuation">)</span>
ax_hist_y<span class="token punctuation">.</span>hist<span class="token punctuation">(</span>virginica<span class="token punctuation">[</span><span class="token string">&#39;SepalLengthCm&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> color<span class="token operator">=</span><span class="token string">&#39;tab:green&#39;</span><span class="token punctuation">,</span> alpha<span class="token operator">=</span><span class="token number">0.4</span><span class="token punctuation">)</span>
ax_hist_y<span class="token punctuation">.</span>hist<span class="token punctuation">(</span>setosa<span class="token punctuation">[</span><span class="token string">&#39;SepalLengthCm&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> color<span class="token operator">=</span><span class="token string">&#39;tab:blue&#39;</span><span class="token punctuation">,</span> alpha<span class="token operator">=</span><span class="token number">0.4</span><span class="token punctuation">)</span>

ax_hist_x<span class="token punctuation">.</span>hist<span class="token punctuation">(</span>versicolor<span class="token punctuation">[</span><span class="token string">&#39;SepalWidthCm&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> orientation <span class="token operator">=</span> <span class="token string">&#39;horizontal&#39;</span><span class="token punctuation">,</span> color<span class="token operator">=</span><span class="token string">&#39;tab:red&#39;</span><span class="token punctuation">,</span> alpha<span class="token operator">=</span><span class="token number">0.4</span><span class="token punctuation">)</span>
ax_hist_x<span class="token punctuation">.</span>hist<span class="token punctuation">(</span>virginica<span class="token punctuation">[</span><span class="token string">&#39;SepalWidthCm&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> orientation <span class="token operator">=</span> <span class="token string">&#39;horizontal&#39;</span><span class="token punctuation">,</span> color<span class="token operator">=</span><span class="token string">&#39;tab:green&#39;</span><span class="token punctuation">,</span> alpha<span class="token operator">=</span><span class="token number">0.4</span><span class="token punctuation">)</span>
ax_hist_x<span class="token punctuation">.</span>hist<span class="token punctuation">(</span>setosa<span class="token punctuation">[</span><span class="token string">&#39;SepalWidthCm&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> orientation <span class="token operator">=</span> <span class="token string">&#39;horizontal&#39;</span><span class="token punctuation">,</span> color<span class="token operator">=</span><span class="token string">&#39;tab:blue&#39;</span><span class="token punctuation">,</span> alpha<span class="token operator">=</span><span class="token number">0.4</span><span class="token punctuation">)</span>

plt<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考: https://stackabuse.com/matplotlib-scatter-plot-with-distribution-plots-histograms-jointplot/</p>`,4),e=[o];function c(i,l){return s(),a("div",null,e)}const k=n(t,[["render",c],["__file","jointplot.html.vue"]]);export{k as default};
