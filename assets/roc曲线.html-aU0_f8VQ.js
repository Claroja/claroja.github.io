import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as p,o,c,b as n,d as s,e as t,a as l}from"./app-9tftCahk.js";const i="/assets/2-sOWpLSy_.png",r="/assets/3-BIG6smga.png",u="/assets/4-WedBniZP.png",d={},k=l('<h1 id="roc" tabindex="-1"><a class="header-anchor" href="#roc" aria-hidden="true">#</a> ROC</h1><h2 id="roc-1" tabindex="-1"><a class="header-anchor" href="#roc-1" aria-hidden="true">#</a> ROC</h2><p>ROC(Receiver operating characteristic)是一个二分类模型评估方法.名字的来源是其最早发明用于军队雷达接收的操作者(operators of military radar receivers)</p><ul><li>真阳率(TPR):在label为阳性的样本中, 被正确地判断为阳性的比率. $$TPR=\\frac{TP}{TP+FN}$$ 真阳率即我们所说的召回率(recall)</li><li>伪阳率(FPR):在label为阴性的样本中, 被错误地判断为阳性的比率.$$FPR=\\frac{FP}{FP+TN}$$ 假阳率, 即误伤率 ,将阴性的样本判别为阳性.</li></ul><p>比如在作弊审核中.尽量把作弊玩家审核出来是主要任务, 也就是TPR越高越好.而把正常玩家, 误审为作弊玩家, 也就是FPR, 要越低越好. 两个指标是相互制约的. 如果我们比较在意TPR, 即想把所有作弊玩家全部揪出来, 那么不可避免的FPR也会相应升高, 即会误伤很多正常的玩家. 极端的, 把所有的玩家都预测为作弊玩家, 那么TPR为1, FPR也为1.</p><p>ROC空间将伪阳率(FPR)定义为X轴, 真阳率(TPR)定义为Y轴:</p><figure><img src="'+i+'" alt="2.png" tabindex="0" loading="lazy"><figcaption>2.png</figcaption></figure><ol><li>图片中的左上角(TPR=1,FPR=0),为完美分类, 即作弊全部预测正确, 且没有误伤</li><li>图片中的红色线上的点(TPR=FPR), 即作弊揪出50%, 误伤50%. 可以说是蒙对一半, 蒙错一半.</li><li>图片中的右下角(TPR=0,FPR=1), 将作弊的全部判为正常, 将正常的全部判为作弊.</li></ol><p>ROC曲线, 只能在某个特定阈值来评价模型, 我们需要一个独立于阈值的评价指标来衡量这个模型如何, 也就是遍历所有阈值, 得到ROC曲线.</p><figure><img src="'+r+'" alt="3.png" tabindex="0" loading="lazy"><figcaption>3.png</figcaption></figure><p>上图中, 我们可以根据需要来选择不同的TPR和FPR.</p><figure><img src="'+u+`" alt="4.png" tabindex="0" loading="lazy"><figcaption>4.png</figcaption></figure><p>上图中, 我们可以以求均值的方式对多分类模型进行评估</p><h2 id="auc" tabindex="-1"><a class="header-anchor" href="#auc" aria-hidden="true">#</a> AUC</h2><p>AUC(Area Under Curve)值为ROC曲线下面区域面积，显然，AUC越大，分类器分类效果越好。</p><ol><li>AUC = 1，不管设定什么阈值都能得出完美预测</li><li>0.5 &lt; AUC &lt; 1, 妥善设定阈值的话，能有预测价值</li><li>AUC = 0.5, 跟随机猜测一样（例：丢铜板），模型没有预测价值。</li><li>AUC &lt; 0.5，比随机猜测还差, 但只要总是反预测而行，就优于随机猜测。</li></ol><h2 id="案例" tabindex="-1"><a class="header-anchor" href="#案例" aria-hidden="true">#</a> 案例</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">### 绘制ROC曲线, 计算AUC</span>
fpr<span class="token punctuation">,</span> tpr<span class="token punctuation">,</span> thresholds <span class="token operator">=</span> roc_curve<span class="token punctuation">(</span>y_test<span class="token punctuation">,</span> y_pred_proba<span class="token punctuation">)</span>
auc_score <span class="token operator">=</span> roc_auc_score<span class="token punctuation">(</span>y_test<span class="token punctuation">,</span> y_pred_proba<span class="token punctuation">)</span>


plt<span class="token punctuation">.</span>plot<span class="token punctuation">(</span>fpr<span class="token punctuation">,</span> tpr<span class="token punctuation">,</span> label<span class="token operator">=</span><span class="token string-interpolation"><span class="token string">f&#39;AUC = </span><span class="token interpolation"><span class="token punctuation">{</span>auc_score<span class="token punctuation">:</span><span class="token format-spec">.2f</span><span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>  <span class="token comment"># 绘制ROC曲线，标注AUC的值</span>
plt<span class="token punctuation">.</span>plot<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> linestyle<span class="token operator">=</span><span class="token string">&#39;--&#39;</span><span class="token punctuation">,</span> color<span class="token operator">=</span><span class="token string">&#39;r&#39;</span><span class="token punctuation">,</span> label<span class="token operator">=</span><span class="token string">&#39;Random Classifier&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># 绘制随机分类器的ROC曲线</span>
plt<span class="token punctuation">.</span>xlabel<span class="token punctuation">(</span><span class="token string">&#39;False Positive Rate&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># x轴标签为FPR</span>
plt<span class="token punctuation">.</span>ylabel<span class="token punctuation">(</span><span class="token string">&#39;True Positive Rate&#39;</span><span class="token punctuation">)</span>   <span class="token comment"># y轴标签为TPR</span>
plt<span class="token punctuation">.</span>title<span class="token punctuation">(</span><span class="token string">&#39;ROC Curve&#39;</span><span class="token punctuation">)</span>             <span class="token comment"># 设置标题</span>
plt<span class="token punctuation">.</span>legend<span class="token punctuation">(</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>`,19),h=n("li",null,"https://zhuanlan.zhihu.com/p/347627036",-1),m=n("li",null,"https://zhuanlan.zhihu.com/p/616190701",-1),g={href:"https://www.cnblogs.com/gatherstars/p/6084696.html",target:"_blank",rel:"noopener noreferrer"},_={href:"https://scikit-learn.org/stable/auto_examples/model_selection/plot_roc.html",target:"_blank",rel:"noopener noreferrer"};function R(b,v){const a=p("ExternalLinkIcon");return o(),c("div",null,[k,n("ul",null,[h,m,n("li",null,[n("a",g,[s("ROC曲线与AUC值 - gatherstars - 博客园"),t(a)])]),n("li",null,[n("a",_,[s("Receiver Operating Characteristic (ROC) ‒ scikit-learn 0.24.2 documentation"),t(a)])])])])}const P=e(d,[["render",R],["__file","roc曲线.html.vue"]]);export{P as default};
