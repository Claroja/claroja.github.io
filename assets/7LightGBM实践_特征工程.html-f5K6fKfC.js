import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o as p,c as o,a as n,b as a,d as l,e as c}from"./app-A10JnHE0.js";const i={},r=n("h2",{id:"缺失值",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#缺失值","aria-hidden":"true"},"#"),a(" 缺失值")],-1),u=n("p",null,"将缺失值当成一个类别处理",-1),d=n("p",null,"所以:",-1),_=n("ol",null,[n("li",null,"scikitlearn决策树模型, 可以接收缺失值做输入, 按照以上方法进行处理"),n("li",null,"但是处理方法过于简单, 建议在特征工程时进行缺失值的填充")],-1),h={href:"https://zhuanlan.zhihu.com/p/382253128",target:"_blank",rel:"noopener noreferrer"},k=c(`<h2 id="特征编码" tabindex="-1"><a class="header-anchor" href="#特征编码" aria-hidden="true">#</a> 特征编码</h2><ol><li><p>分类数据</p><ol><li><p>需要将分类数据进行labelencode, 既将字符串, 转换为数字, 0, 1, 2</p></li><li><p>需要告诉模型哪些特征当成类别特征处理, 在调用fit方法时:</p><ol><li>通过指定feature_name和categorical_feature来确定</li><li>在pandas进行数据处理时, 指定分类变量列的类型为category.</li></ol><p>建议使用pandas处理, 因为: 可以和lable编码一起进行, 代码较为简洁</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>data_all<span class="token punctuation">[</span><span class="token string">&#39;Sex&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> data_all<span class="token punctuation">[</span><span class="token string">&#39;Sex&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token builtin">map</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&#39;male&#39;</span><span class="token punctuation">:</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token string">&#39;female&#39;</span><span class="token punctuation">:</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>astype<span class="token punctuation">(</span><span class="token string">&#39;category&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>不要使用one-hot编码</p></li><li><p>树模型不区分分类变量和排序变量</p></li></ol></li><li><p>排序数据</p><p>树模型不区分分类变量和排序变量</p></li><li><p>数值数据</p><p>不需要处理</p></li></ol><h2 id="归一化" tabindex="-1"><a class="header-anchor" href="#归一化" aria-hidden="true">#</a> 归一化</h2><pre><code>决策树不需要进行归一化
</code></pre>`,4);function m(f,g){const s=t("ExternalLinkIcon");return p(),o("div",null,[r,u,d,_,n("p",null,[a("参考"),n("a",h,[a("还有人不懂XGBoost的缺失值处理"),l(s)])]),k])}const v=e(i,[["render",m],["__file","7LightGBM实践_特征工程.html.vue"]]);export{v as default};
