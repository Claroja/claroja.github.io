import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as c,c as l,a as n,b as s,d as p,e as t}from"./app-MTzDpLgJ.js";const i={},u=n("h1",{id:"manipulate-element",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#manipulate-element","aria-hidden":"true"},"#"),s(" manipulate_element")],-1),r=n("p",null,"创建模型 在pgmpy中, 模型的结构和它的参数(CPDs)两者是分开的.所以创建需要三步:",-1),k=n("li",null,"定义模型的结构",-1),d=n("li",null,"定义所有的参数",-1),m={href:"http://www.bnlearn.com/bnrepository/#cancer",target:"_blank",rel:"noopener noreferrer"},v=n("a",{href:"1.png"},"1.png",-1),b=t(`<h2 id="_1-定义模型结构" tabindex="-1"><a class="header-anchor" href="#_1-定义模型结构" aria-hidden="true">#</a> 1. 定义模型结构</h2><p>本例中, 我们定义了Pollution -&gt; Cancer, Smoker -&gt; Cancer, Cancer -&gt; Xray, Cancer -&gt; Dyspnoea的结构.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> pgmpy<span class="token punctuation">.</span>models <span class="token keyword">import</span> BayesianModel

cancer_model <span class="token operator">=</span> BayesianModel<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token string">&#39;Pollution&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Cancer&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                                <span class="token punctuation">(</span><span class="token string">&#39;Smoker&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Cancer&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                                <span class="token punctuation">(</span><span class="token string">&#39;Cancer&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Xray&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                                <span class="token punctuation">(</span><span class="token string">&#39;Cancer&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Dyspnoea&#39;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-定义cpds" tabindex="-1"><a class="header-anchor" href="#_2-定义cpds" aria-hidden="true">#</a> 2. 定义CPDs</h2>`,4),_={href:"https://pgmpy.org/_modules/pgmpy/factors/discrete/CPD.html",target:"_blank",rel:"noopener noreferrer"},h=t(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> pgmpy<span class="token punctuation">.</span>factors<span class="token punctuation">.</span>discrete <span class="token keyword">import</span> TabularCPD
cpd_poll <span class="token operator">=</span> TabularCPD<span class="token punctuation">(</span>variable<span class="token operator">=</span><span class="token string">&#39;Pollution&#39;</span><span class="token punctuation">,</span> variable_card<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">,</span>
                        values<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">0.9</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">0.1</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
cpd_smoke <span class="token operator">=</span> TabularCPD<span class="token punctuation">(</span>variable<span class="token operator">=</span><span class="token string">&#39;Smoker&#39;</span><span class="token punctuation">,</span> variable_card<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">,</span>
                       values<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">0.3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">0.7</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
cpd_cancer <span class="token operator">=</span> TabularCPD<span class="token punctuation">(</span>variable<span class="token operator">=</span><span class="token string">&#39;Cancer&#39;</span><span class="token punctuation">,</span> variable_card<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">,</span>
                        values<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">0.03</span><span class="token punctuation">,</span> <span class="token number">0.05</span><span class="token punctuation">,</span> <span class="token number">0.001</span><span class="token punctuation">,</span> <span class="token number">0.02</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                                <span class="token punctuation">[</span><span class="token number">0.97</span><span class="token punctuation">,</span> <span class="token number">0.95</span><span class="token punctuation">,</span> <span class="token number">0.999</span><span class="token punctuation">,</span> <span class="token number">0.98</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                        evidence<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&#39;Smoker&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Pollution&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                        evidence_card<span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
cpd_xray <span class="token operator">=</span> TabularCPD<span class="token punctuation">(</span>variable<span class="token operator">=</span><span class="token string">&#39;Xray&#39;</span><span class="token punctuation">,</span> variable_card<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">,</span>
                        values<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">0.9</span><span class="token punctuation">,</span> <span class="token number">0.2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">0.1</span><span class="token punctuation">,</span> <span class="token number">0.8</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                        evidence<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&#39;Cancer&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> evidence_card<span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
cpd_dysp <span class="token operator">=</span> TabularCPD<span class="token punctuation">(</span>variable<span class="token operator">=</span><span class="token string">&#39;Dyspnoea&#39;</span><span class="token punctuation">,</span> variable_card<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">,</span>
                        values<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">0.65</span><span class="token punctuation">,</span> <span class="token number">0.3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">0.35</span><span class="token punctuation">,</span> <span class="token number">0.7</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                        evidence<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&#39;Cancer&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> evidence_card<span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-向模型中添加cpds" tabindex="-1"><a class="header-anchor" href="#_3-向模型中添加cpds" aria-hidden="true">#</a> 3. 向模型中添加CPDs</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">## Associating the parameters with the model structure.</span>
cancer_model<span class="token punctuation">.</span>add_cpds<span class="token punctuation">(</span>cpd_poll<span class="token punctuation">,</span> cpd_smoke<span class="token punctuation">,</span> cpd_cancer<span class="token punctuation">,</span> cpd_xray<span class="token punctuation">,</span> cpd_dysp<span class="token punctuation">)</span>
<span class="token comment">## Checking if the cpds are valid for the model.</span>
cancer_model<span class="token punctuation">.</span>check_model<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="模型简单操作" tabindex="-1"><a class="header-anchor" href="#模型简单操作" aria-hidden="true">#</a> 模型简单操作</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">## Check for d-separation between variables</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>cancer_model<span class="token punctuation">.</span>is_dconnected<span class="token punctuation">(</span><span class="token string">&#39;Pollution&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Smoker&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>cancer_model<span class="token punctuation">.</span>is_dconnected<span class="token punctuation">(</span><span class="token string">&#39;Pollution&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Smoker&#39;</span><span class="token punctuation">,</span> observed<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&#39;Cancer&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">## Get all d-connected nodes</span>
cancer_model<span class="token punctuation">.</span>active_trail_nodes<span class="token punctuation">(</span><span class="token string">&#39;Pollution&#39;</span><span class="token punctuation">)</span>

<span class="token comment">## List local independencies for a node</span>
cancer_model<span class="token punctuation">.</span>local_independencies<span class="token punctuation">(</span><span class="token string">&#39;Xray&#39;</span><span class="token punctuation">)</span>

<span class="token comment">## Get all model implied independence conditions</span>
cancer_model<span class="token punctuation">.</span>get_independencies<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="载入官方模型" tabindex="-1"><a class="header-anchor" href="#载入官方模型" aria-hidden="true">#</a> 载入官方模型</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> pgmpy<span class="token punctuation">.</span>utils <span class="token keyword">import</span> get_example_model
model <span class="token operator">=</span> get_example_model<span class="token punctuation">(</span><span class="token string">&#39;cancer&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Nodes in the model:&quot;</span><span class="token punctuation">,</span> model<span class="token punctuation">.</span>nodes<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Edges in the model:&quot;</span><span class="token punctuation">,</span> model<span class="token punctuation">.</span>edges<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
model<span class="token punctuation">.</span>get_cpds<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function g(y,C){const a=o("ExternalLinkIcon");return c(),l("div",null,[u,r,n("ol",null,[k,d,n("li",null,[s("将参数添加到结构中 我们以"),n("a",m,[s("cancer model"),p(a)]),s("为例子: "),v])]),b,n("p",null,[s("贝叶斯网络中每个节点都有一个CPD, 因此我们需要定义5个CPDs. 在pgmpy中, CPDs可以使用TabularCPD类, 具体可参考"),n("a",_,[s("官方文档"),p(a)]),s(".")]),h])}const P=e(i,[["render",g],["__file","pgmpy创建网络.html.vue"]]);export{P as default};
