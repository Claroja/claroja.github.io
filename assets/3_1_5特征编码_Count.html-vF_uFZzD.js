import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as p,o as c,c as o,b as n,d as s,e as i,a}from"./app-9tftCahk.js";const l={},d=a(`<h1 id="计数编码-countencoder" tabindex="-1"><a class="header-anchor" href="#计数编码-countencoder" aria-hidden="true">#</a> 计数编码(CountEncoder)</h1><p>对于给定的分类特征，按照每个类别分组，统计组计数，将每个类别都映射到该类别的样本数。清晰地反映了类别在数据集中的出现次数，缺点是忽略类别的物理意义，比如说两个类别出现频次相当，但是在业务意义上，模型的重要性也许不一样。这个编码可以指示每个类别的“可信度”，例如，机器学习算法可以决定仅考虑其类别计数高于某个阈值的类别所带来的信息</p><h2 id="pandas" tabindex="-1"><a class="header-anchor" href="#pandas" aria-hidden="true">#</a> pandas</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>ce<span class="token punctuation">.</span>BinaryEncoder<span class="token punctuation">(</span>cols<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&#39;BloodType&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span>fit_transform<span class="token punctuation">(</span>data<span class="token punctuation">)</span>


<span class="token keyword">import</span> category_encoders <span class="token keyword">as</span> ce
<span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd
data <span class="token operator">=</span> pd<span class="token punctuation">.</span>DataFrame<span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token string">&#39;Sex&#39;</span><span class="token punctuation">:</span><span class="token punctuation">[</span><span class="token string">&#39;F&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;M&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;M&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;F&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;M&#39;</span><span class="token punctuation">,</span><span class="token boolean">None</span><span class="token punctuation">,</span><span class="token string">&#39;F&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;M&#39;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>


data<span class="token punctuation">.</span>groupby<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;Sex&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span>transform<span class="token punctuation">(</span><span class="token string">&#39;size&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># 0    3.0</span>
<span class="token comment"># 1    4.0</span>
<span class="token comment"># 2    4.0</span>
<span class="token comment"># 3    3.0</span>
<span class="token comment"># 4    4.0</span>
<span class="token comment"># 5    NaN</span>
<span class="token comment"># 6    3.0</span>
<span class="token comment"># 7    4.0</span>
<span class="token comment"># dtype: float64</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),u={id:"category-encoders",tabindex:"-1"},r=n("a",{class:"header-anchor",href:"#category-encoders","aria-hidden":"true"},"#",-1),k={href:"https://contrib.scikit-learn.org/category_encoders/index.html",target:"_blank",rel:"noopener noreferrer"},m=a(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>
<span class="token keyword">import</span> category_encoders <span class="token keyword">as</span> ce
<span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd
data <span class="token operator">=</span> pd<span class="token punctuation">.</span>DataFrame<span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token string">&#39;Sex&#39;</span><span class="token punctuation">:</span><span class="token punctuation">[</span><span class="token string">&#39;F&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;M&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;M&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;F&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;M&#39;</span><span class="token punctuation">,</span><span class="token boolean">None</span><span class="token punctuation">,</span><span class="token string">&#39;F&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;M&#39;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

ce<span class="token punctuation">.</span>CountEncoder<span class="token punctuation">(</span>cols<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&#39;Sex&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span>fit_transform<span class="token punctuation">(</span>data<span class="token punctuation">)</span>

<span class="token comment">#    Sex</span>
<span class="token comment"># 0    3</span>
<span class="token comment"># 1    4</span>
<span class="token comment"># 2    4</span>
<span class="token comment"># 3    3</span>
<span class="token comment"># 4    4</span>
<span class="token comment"># 5    1</span>
<span class="token comment"># 6    3</span>
<span class="token comment"># 7    4</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2><ol><li>https://datascience.stackexchange.com/questions/39317/difference-between-ordinalencoder-and-labelencoder</li><li>https://www.cnblogs.com/dangui/p/15836197.html</li></ol>`,3);function v(b,h){const e=p("ExternalLinkIcon");return c(),o("div",null,[d,n("h2",u,[r,s(),n("a",k,[s("category_encoders"),i(e)])]),m])}const y=t(l,[["render",v],["__file","3_1_5特征编码_Count.html.vue"]]);export{y as default};
