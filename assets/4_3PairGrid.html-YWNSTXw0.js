import{_ as p}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o,c as l,b as n,d as s,e as i,a}from"./app-9tftCahk.js";const c={},r=a(`<p>绘制成对相关性图</p><h2 id="最佳实践" tabindex="-1"><a class="header-anchor" href="#最佳实践" aria-hidden="true">#</a> 最佳实践</h2><ol><li><p>对角线 - 非对角线</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> seaborn <span class="token keyword">as</span> sns
penguins <span class="token operator">=</span> sns<span class="token punctuation">.</span>load_dataset<span class="token punctuation">(</span><span class="token string">&quot;penguins&quot;</span><span class="token punctuation">)</span>
g <span class="token operator">=</span> sns<span class="token punctuation">.</span>PairGrid<span class="token punctuation">(</span>penguins<span class="token punctuation">,</span> hue<span class="token operator">=</span><span class="token string">&quot;species&quot;</span><span class="token punctuation">)</span>
g<span class="token punctuation">.</span>map_diag<span class="token punctuation">(</span>sns<span class="token punctuation">.</span>histplot<span class="token punctuation">)</span>
g<span class="token punctuation">.</span>map_offdiag<span class="token punctuation">(</span>sns<span class="token punctuation">.</span>scatterplot<span class="token punctuation">)</span>
g<span class="token punctuation">.</span>add_legend<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>对角线 - 上三角 - 下三角</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> seaborn <span class="token keyword">as</span> sns
penguins <span class="token operator">=</span> sns<span class="token punctuation">.</span>load_dataset<span class="token punctuation">(</span><span class="token string">&quot;penguins&quot;</span><span class="token punctuation">)</span>
g <span class="token operator">=</span> sns<span class="token punctuation">.</span>PairGrid<span class="token punctuation">(</span>penguins<span class="token punctuation">,</span> diag_sharey<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">,</span> hue<span class="token operator">=</span><span class="token string">&quot;species&quot;</span><span class="token punctuation">)</span>
g<span class="token punctuation">.</span>map_diag<span class="token punctuation">(</span>sns<span class="token punctuation">.</span>histplot<span class="token punctuation">)</span>
g<span class="token punctuation">.</span>map_upper<span class="token punctuation">(</span>sns<span class="token punctuation">.</span>scatterplot<span class="token punctuation">)</span>
g<span class="token punctuation">.</span>map_lower<span class="token punctuation">(</span>sns<span class="token punctuation">.</span>kdeplot<span class="token punctuation">)</span>
g<span class="token punctuation">.</span>add_legend<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>figure_level</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> seaborn <span class="token keyword">as</span> sns
iris <span class="token operator">=</span> sns<span class="token punctuation">.</span>load_dataset<span class="token punctuation">(</span><span class="token string">&quot;iris&quot;</span><span class="token punctuation">)</span>
sns<span class="token punctuation">.</span>pairplot<span class="token punctuation">(</span>iris<span class="token punctuation">,</span> hue<span class="token operator">=</span><span class="token string">&quot;species&quot;</span><span class="token punctuation">,</span> height<span class="token operator">=</span><span class="token number">2.5</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,3),u={id:"pairgrid",tabindex:"-1"},d=n("a",{class:"header-anchor",href:"#pairgrid","aria-hidden":"true"},"#",-1),k={href:"https://seaborn.pydata.org/generated/seaborn.PairGrid.html#seaborn.PairGrid",target:"_blank",rel:"noopener noreferrer"},m=a(`<ol><li><p>构造参数</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">seaborn</span><span class="token punctuation">.</span>PairGrid<span class="token punctuation">(</span>
    data<span class="token punctuation">,</span>                   <span class="token comment"># DataFrame. </span>
    <span class="token operator">*</span><span class="token punctuation">,</span> 
    hue<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>               <span class="token comment"># string (variable name). </span>
    <span class="token builtin">vars</span><span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>              <span class="token comment"># list of variable names. 使用哪些变量, 如果不指定, 则使用所有列, 每列类型被转换为数字类型</span>
    x_vars<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>            <span class="token comment"># lists of variable names. 指定x轴的顺序</span>
    y_vars<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>            <span class="token comment"># lists of variable names. 指定y轴的顺序</span>
    hue_order<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>         <span class="token comment"># list of strings</span>
    palette<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>           <span class="token comment"># dict or seaborn color palette</span>
    hue_kws<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>           <span class="token comment"># dictionary of param -&gt; list of values mapping</span>
    corner<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">,</span>           <span class="token comment"># bool. True: 不显示上三角</span>
    diag_sharey<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> 
    height<span class="token operator">=</span><span class="token number">2.5</span><span class="token punctuation">,</span>             <span class="token comment"># scalar</span>
    aspect<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span>               <span class="token comment"># scalar</span>
    layout_pad<span class="token operator">=</span><span class="token number">0.5</span><span class="token punctuation">,</span>         <span class="token comment"># scalar. 坐标空间的间隔</span>
    despine<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span>           <span class="token comment"># boolean.</span>
    dropna<span class="token operator">=</span><span class="token boolean">False</span>            <span class="token comment"># boolean.</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>对象方法</p><ol><li>add_legend([legend_data, title, ...]): 添加标识</li><li>apply(func, *args, **kwargs)</li><li>map(func, **kwargs)</li><li>map_diag(func, **kwargs)</li><li>map_lower(func, **kwargs)</li><li>map_offdiag(func, **kwargs)</li><li>map_upper(func, **kwargs)</li><li>pipe(func, *args, **kwargs)</li><li>savefig(*args, **kwargs): 保存图片</li><li>set(**kwargs)</li><li>tick_params([axis])</li><li>tight_layout(*args, **kwargs)</li></ol></li><li><p>对象属性</p><ol><li>figure: matplotlib.figure.Figure</li><li>legend: matplotlib.legend.Legend</li></ol></li></ol>`,1);function v(g,b){const e=t("ExternalLinkIcon");return o(),l("div",null,[r,n("h2",u,[d,s(),n("a",k,[s("PairGrid"),i(e)])]),m])}const f=p(c,[["render",v],["__file","4_3PairGrid.html.vue"]]);export{f as default};
