import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-A10JnHE0.js";const p="/assets/1-ekZyfAlq.png",o={},e=t('<h1 id="ks曲线" tabindex="-1"><a class="header-anchor" href="#ks曲线" aria-hidden="true">#</a> ks曲线</h1><p>训练出来的模型给的是为正类的概率，我们还需要选择一个阈值，大于阈值，判断为正类，小于阈值判断为负类。把阈值看成自变量，TPR、和FPR看成因变量，在二维坐标系里面做关系曲线，这就是KS曲线。</p><figure><img src="'+p+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>在阈值等于0.4的地方，TPR和FPR差最大，说明该处阈值可作为最佳区分点。</p><h2 id="案例" tabindex="-1"><a class="header-anchor" href="#案例" aria-hidden="true">#</a> 案例</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">### 绘制ROC曲线, 计算AUC</span>
fpr<span class="token punctuation">,</span> tpr<span class="token punctuation">,</span> thresholds <span class="token operator">=</span> roc_curve<span class="token punctuation">(</span>y_test<span class="token punctuation">,</span> y_pred_proba<span class="token punctuation">)</span>
auc_score <span class="token operator">=</span> roc_auc_score<span class="token punctuation">(</span>y_test<span class="token punctuation">,</span> y_pred_proba<span class="token punctuation">)</span>


plt<span class="token punctuation">.</span>plot<span class="token punctuation">(</span>fpr<span class="token punctuation">,</span> tpr<span class="token punctuation">,</span> label<span class="token operator">=</span><span class="token string-interpolation"><span class="token string">f&#39;AUC = </span><span class="token interpolation"><span class="token punctuation">{</span>auc_score<span class="token punctuation">:</span><span class="token format-spec">.2f</span><span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>  <span class="token comment"># 绘制ROC曲线，标注AUC的值</span>
plt<span class="token punctuation">.</span>plot<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> linestyle<span class="token operator">=</span><span class="token string">&#39;--&#39;</span><span class="token punctuation">,</span> color<span class="token operator">=</span><span class="token string">&#39;r&#39;</span><span class="token punctuation">,</span> label<span class="token operator">=</span><span class="token string">&#39;Random Classifier&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># 绘制随机分类器的ROC曲线</span>
plt<span class="token punctuation">.</span>xlabel<span class="token punctuation">(</span><span class="token string">&#39;False Positive Rate&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># x轴标签为FPR</span>
plt<span class="token punctuation">.</span>ylabel<span class="token punctuation">(</span><span class="token string">&#39;True Positive Rate&#39;</span><span class="token punctuation">)</span>   <span class="token comment"># y轴标签为TPR</span>
plt<span class="token punctuation">.</span>title<span class="token punctuation">(</span><span class="token string">&#39;ROC Curve&#39;</span><span class="token punctuation">)</span>             <span class="token comment"># 设置标题</span>
plt<span class="token punctuation">.</span>legend<span class="token punctuation">(</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">### 绘制KS曲线</span>
ks_arg <span class="token operator">=</span> <span class="token punctuation">(</span>tpr <span class="token operator">-</span> fpr<span class="token punctuation">)</span><span class="token punctuation">.</span>argmax<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 取最大值的下标</span>
ks_value <span class="token operator">=</span> <span class="token builtin">max</span><span class="token punctuation">(</span>tpr <span class="token operator">-</span> fpr<span class="token punctuation">)</span>  <span class="token comment"># 取最大值</span>
threshold <span class="token operator">=</span> thresholds<span class="token punctuation">[</span>ks_arg<span class="token punctuation">]</span> <span class="token comment"># 取阈值</span>

tpr_value <span class="token operator">=</span> tpr<span class="token punctuation">[</span>ks_arg<span class="token punctuation">]</span> <span class="token comment"># tpr值</span>
fpr_value <span class="token operator">=</span> fpr<span class="token punctuation">[</span>ks_arg<span class="token punctuation">]</span> <span class="token comment"># fpr值</span>

plt<span class="token punctuation">.</span>plot<span class="token punctuation">(</span>thresholds<span class="token punctuation">,</span> fpr<span class="token punctuation">,</span> label<span class="token operator">=</span><span class="token string-interpolation"><span class="token string">f&#39;fpr&#39;</span></span><span class="token punctuation">)</span>  <span class="token comment"># 绘制ROC曲线，标注AUC的值</span>
plt<span class="token punctuation">.</span>plot<span class="token punctuation">(</span>thresholds<span class="token punctuation">,</span> tpr<span class="token punctuation">,</span> label<span class="token operator">=</span><span class="token string-interpolation"><span class="token string">f&#39;tpr&#39;</span></span><span class="token punctuation">)</span>  <span class="token comment"># 绘制ROC曲线，标注AUC的值</span>
plt<span class="token punctuation">.</span>plot<span class="token punctuation">(</span><span class="token punctuation">[</span>thresholds<span class="token punctuation">[</span>ks_arg<span class="token punctuation">]</span><span class="token punctuation">,</span>thresholds<span class="token punctuation">[</span>ks_arg<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span>tpr<span class="token punctuation">[</span>ks_arg<span class="token punctuation">]</span><span class="token punctuation">,</span>fpr<span class="token punctuation">[</span>ks_arg<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span> label<span class="token operator">=</span><span class="token string-interpolation"><span class="token string">f&#39;ks&#39;</span></span><span class="token punctuation">)</span>

plt<span class="token punctuation">.</span>xlabel<span class="token punctuation">(</span><span class="token string">&#39;thresholds&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># x轴标签为FPR</span>
plt<span class="token punctuation">.</span>ylabel<span class="token punctuation">(</span><span class="token string">&#39;tpr&amp;fpr&#39;</span><span class="token punctuation">)</span>   <span class="token comment"># y轴标签为TPR</span>
plt<span class="token punctuation">.</span>title<span class="token punctuation">(</span><span class="token string">&#39;KS Curve&#39;</span><span class="token punctuation">)</span>   <span class="token comment"># 设置标题</span>
plt<span class="token punctuation">.</span>legend<span class="token punctuation">(</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2><ul><li>https://zhuanlan.zhihu.com/p/87456089</li><li>https://www.cnblogs.com/siriJR/p/12093513.html</li></ul>`,8),c=[e];function l(i,u){return s(),a("div",null,c)}const d=n(o,[["render",l],["__file","ks曲线.html.vue"]]);export{d as default};
