import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as t}from"./app-9tftCahk.js";const e={},p=t(`<h1 id="stats" tabindex="-1"><a class="header-anchor" href="#stats" aria-hidden="true">#</a> stats</h1><h2 id="常见分布" tabindex="-1"><a class="header-anchor" href="#常见分布" aria-hidden="true">#</a> 常见分布</h2><h2 id="正态连续随机变量" tabindex="-1"><a class="header-anchor" href="#正态连续随机变量" aria-hidden="true">#</a> 正态连续随机变量</h2><p>随机变量X可以取任何值的概率分布是连续随机变量。 location(loc)关键字指定平均值。 scale(scale)关键字指定标准偏差。</p><p>stats连续型随机变量的公共方法：</p><table><thead><tr><th>函数</th><th>描述</th></tr></thead><tbody><tr><td>rvs</td><td>产生服从指定分布的随机数</td></tr><tr><td>pdf</td><td>概率密度函数</td></tr><tr><td>cdf</td><td>累计分布函数</td></tr><tr><td>ppf</td><td>分位点函数（CDF的逆）</td></tr><tr><td>sf</td><td>残存函数（1-CDF）</td></tr><tr><td>isf</td><td>逆残存函数（sf的逆）</td></tr><tr><td>fit</td><td>对一组随机取样进行拟合，最大似然估计方法找出最适合取样数据的概率密度函数系数。</td></tr></tbody></table><p><em><strong>离散</strong></em>分布的方法大多数与连续分布很类似，但是<code>pdf</code>被更换为密度质量函数<code>pmf</code>。</p><h3 id="pdf" tabindex="-1"><a class="header-anchor" href="#pdf" aria-hidden="true">#</a> pdf</h3><p>求概率密度函数指定点的函数值</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> scipy<span class="token punctuation">.</span>stats <span class="token keyword">as</span> st
st<span class="token punctuation">.</span>norm<span class="token punctuation">.</span>pdf<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span>loc <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>scale <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">)</span>  <span class="token comment"># 0.3989422804014327</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cdf与ppf" tabindex="-1"><a class="header-anchor" href="#cdf与ppf" aria-hidden="true">#</a> CDF与PPF</h3><p>累计分布函数指定点的函数值(查找X对应的概率):</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> scipy<span class="token punctuation">.</span>stats <span class="token keyword">import</span> norm
<span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
norm<span class="token punctuation">.</span>cdf<span class="token punctuation">(</span>np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># array([0.15865525, 0.5, 0.84134475])</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>累计分布函数的逆函数(查找概率对应的X):</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> scipy<span class="token punctuation">.</span>stats <span class="token keyword">import</span> norm
norm<span class="token punctuation">.</span>ppf<span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">)</span>  <span class="token comment"># 0.0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="生成随机变量序列" tabindex="-1"><a class="header-anchor" href="#生成随机变量序列" aria-hidden="true">#</a> 生成随机变量序列</h3><p><code>norm.rvs</code>通过<code>loc</code>和<code>scale</code>指定正态分布的期望和标准差,<code>size</code>得到随机数组的形状.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> scipy<span class="token punctuation">.</span>stats <span class="token keyword">as</span> st 
st<span class="token punctuation">.</span>norm<span class="token punctuation">.</span>rvs<span class="token punctuation">(</span>loc <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>scale <span class="token operator">=</span> <span class="token number">0.1</span><span class="token punctuation">,</span>size <span class="token operator">=</span><span class="token number">4</span><span class="token punctuation">)</span>  <span class="token comment"># array([0.05569008, 0.06281672, 0.02828948, 0.00240669])</span>
st<span class="token punctuation">.</span>norm<span class="token punctuation">.</span>rvs<span class="token punctuation">(</span>loc <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">,</span>scale <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">,</span>size<span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
array([[26.69398671,  7.53583643],
    [ 0.21224097, -0.92683034]])
&quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二项分布" tabindex="-1"><a class="header-anchor" href="#二项分布" aria-hidden="true">#</a> 二项分布</h2><p>参考: https://docs.scipy.org/doc/scipy/tutorial/stats.html#</p>`,20),o=[p];function c(r,d){return s(),a("div",null,o)}const u=n(e,[["render",c],["__file","stats.html.vue"]]);export{u as default};
