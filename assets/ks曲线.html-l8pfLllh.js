const n=JSON.parse(`{"key":"v-f56534e0","path":"/2%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/1%E7%AE%97%E6%B3%95%E5%8E%9F%E7%90%86/2%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0%E6%B5%81%E7%A8%8B/5%E6%A8%A1%E5%9E%8B%E8%AF%84%E4%BC%B0/ks%E6%9B%B2%E7%BA%BF.html","title":"ks曲线","lang":"zh-CN","frontmatter":{"description":"ks曲线 训练出来的模型给的是为正类的概率，我们还需要选择一个阈值，大于阈值，判断为正类，小于阈值判断为负类。把阈值看成自变量，TPR、和FPR看成因变量，在二维坐标系里面做关系曲线，这就是KS曲线。 在阈值等于0.4的地方，TPR和FPR差最大，说明该处阈值可作为最佳区分点。 案例 ### 绘制ROC曲线, 计算AUC fpr, tpr, thresholds = roc_curve(y_test, y_pred_proba) auc_score = roc_auc_score(y_test, y_pred_proba) plt.plot(fpr, tpr, label=f'AUC = {auc_score:.2f}') # 绘制ROC曲线，标注AUC的值 plt.plot([0, 1], [0, 1], linestyle='--', color='r', label='Random Classifier') # 绘制随机分类器的ROC曲线 plt.xlabel('False Positive Rate') # x轴标签为FPR plt.ylabel('True Positive Rate') # y轴标签为TPR plt.title('ROC Curve') # 设置标题 plt.legend() plt.show() ### 绘制KS曲线 ks_arg = (tpr - fpr).argmax() # 取最大值的下标 ks_value = max(tpr - fpr) # 取最大值 threshold = thresholds[ks_arg] # 取阈值 tpr_value = tpr[ks_arg] # tpr值 fpr_value = fpr[ks_arg] # fpr值 plt.plot(thresholds, fpr, label=f'fpr') # 绘制ROC曲线，标注AUC的值 plt.plot(thresholds, tpr, label=f'tpr') # 绘制ROC曲线，标注AUC的值 plt.plot([thresholds[ks_arg],thresholds[ks_arg]],[tpr[ks_arg],fpr[ks_arg]], label=f'ks') plt.xlabel('thresholds') # x轴标签为FPR plt.ylabel('tpr&amp;fpr') # y轴标签为TPR plt.title('KS Curve') # 设置标题 plt.legend() plt.show()","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/2%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/1%E7%AE%97%E6%B3%95%E5%8E%9F%E7%90%86/2%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0%E6%B5%81%E7%A8%8B/5%E6%A8%A1%E5%9E%8B%E8%AF%84%E4%BC%B0/ks%E6%9B%B2%E7%BA%BF.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"ks曲线"}],["meta",{"property":"og:description","content":"ks曲线 训练出来的模型给的是为正类的概率，我们还需要选择一个阈值，大于阈值，判断为正类，小于阈值判断为负类。把阈值看成自变量，TPR、和FPR看成因变量，在二维坐标系里面做关系曲线，这就是KS曲线。 在阈值等于0.4的地方，TPR和FPR差最大，说明该处阈值可作为最佳区分点。 案例 ### 绘制ROC曲线, 计算AUC fpr, tpr, thresholds = roc_curve(y_test, y_pred_proba) auc_score = roc_auc_score(y_test, y_pred_proba) plt.plot(fpr, tpr, label=f'AUC = {auc_score:.2f}') # 绘制ROC曲线，标注AUC的值 plt.plot([0, 1], [0, 1], linestyle='--', color='r', label='Random Classifier') # 绘制随机分类器的ROC曲线 plt.xlabel('False Positive Rate') # x轴标签为FPR plt.ylabel('True Positive Rate') # y轴标签为TPR plt.title('ROC Curve') # 设置标题 plt.legend() plt.show() ### 绘制KS曲线 ks_arg = (tpr - fpr).argmax() # 取最大值的下标 ks_value = max(tpr - fpr) # 取最大值 threshold = thresholds[ks_arg] # 取阈值 tpr_value = tpr[ks_arg] # tpr值 fpr_value = fpr[ks_arg] # fpr值 plt.plot(thresholds, fpr, label=f'fpr') # 绘制ROC曲线，标注AUC的值 plt.plot(thresholds, tpr, label=f'tpr') # 绘制ROC曲线，标注AUC的值 plt.plot([thresholds[ks_arg],thresholds[ks_arg]],[tpr[ks_arg],fpr[ks_arg]], label=f'ks') plt.xlabel('thresholds') # x轴标签为FPR plt.ylabel('tpr&amp;fpr') # y轴标签为TPR plt.title('KS Curve') # 设置标题 plt.legend() plt.show()"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://claroja.github.io/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-24T12:46:58.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"ks曲线"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-24T12:46:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ks曲线\\",\\"image\\":[\\"https://claroja.github.io/\\"],\\"dateModified\\":\\"2025-02-24T12:46:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"案例","slug":"案例","link":"#案例","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1740401218000,"updatedTime":1740401218000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":1.07,"words":322},"filePathRelative":"2机器学习/1算法原理/2机器学习流程/5模型评估/ks曲线.md","localizedDate":"2025年2月24日","excerpt":"<h1> ks曲线</h1>\\n<p>训练出来的模型给的是为正类的概率，我们还需要选择一个阈值，大于阈值，判断为正类，小于阈值判断为负类。把阈值看成自变量，TPR、和FPR看成因变量，在二维坐标系里面做关系曲线，这就是KS曲线。</p>\\n<figure><figcaption></figcaption></figure>\\n<p>在阈值等于0.4的地方，TPR和FPR差最大，说明该处阈值可作为最佳区分点。</p>\\n<h2> 案例</h2>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token comment\\">### 绘制ROC曲线, 计算AUC</span>\\nfpr<span class=\\"token punctuation\\">,</span> tpr<span class=\\"token punctuation\\">,</span> thresholds <span class=\\"token operator\\">=</span> roc_curve<span class=\\"token punctuation\\">(</span>y_test<span class=\\"token punctuation\\">,</span> y_pred_proba<span class=\\"token punctuation\\">)</span>\\nauc_score <span class=\\"token operator\\">=</span> roc_auc_score<span class=\\"token punctuation\\">(</span>y_test<span class=\\"token punctuation\\">,</span> y_pred_proba<span class=\\"token punctuation\\">)</span>\\n\\n\\nplt<span class=\\"token punctuation\\">.</span>plot<span class=\\"token punctuation\\">(</span>fpr<span class=\\"token punctuation\\">,</span> tpr<span class=\\"token punctuation\\">,</span> label<span class=\\"token operator\\">=</span><span class=\\"token string-interpolation\\"><span class=\\"token string\\">f'AUC = </span><span class=\\"token interpolation\\"><span class=\\"token punctuation\\">{</span>auc_score<span class=\\"token punctuation\\">:</span><span class=\\"token format-spec\\">.2f</span><span class=\\"token punctuation\\">}</span></span><span class=\\"token string\\">'</span></span><span class=\\"token punctuation\\">)</span>  <span class=\\"token comment\\"># 绘制ROC曲线，标注AUC的值</span>\\nplt<span class=\\"token punctuation\\">.</span>plot<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">[</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span> <span class=\\"token punctuation\\">[</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span> linestyle<span class=\\"token operator\\">=</span><span class=\\"token string\\">'--'</span><span class=\\"token punctuation\\">,</span> color<span class=\\"token operator\\">=</span><span class=\\"token string\\">'r'</span><span class=\\"token punctuation\\">,</span> label<span class=\\"token operator\\">=</span><span class=\\"token string\\">'Random Classifier'</span><span class=\\"token punctuation\\">)</span>  <span class=\\"token comment\\"># 绘制随机分类器的ROC曲线</span>\\nplt<span class=\\"token punctuation\\">.</span>xlabel<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'False Positive Rate'</span><span class=\\"token punctuation\\">)</span>  <span class=\\"token comment\\"># x轴标签为FPR</span>\\nplt<span class=\\"token punctuation\\">.</span>ylabel<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'True Positive Rate'</span><span class=\\"token punctuation\\">)</span>   <span class=\\"token comment\\"># y轴标签为TPR</span>\\nplt<span class=\\"token punctuation\\">.</span>title<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'ROC Curve'</span><span class=\\"token punctuation\\">)</span>             <span class=\\"token comment\\"># 设置标题</span>\\nplt<span class=\\"token punctuation\\">.</span>legend<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\nplt<span class=\\"token punctuation\\">.</span>show<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token comment\\">### 绘制KS曲线</span>\\nks_arg <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">(</span>tpr <span class=\\"token operator\\">-</span> fpr<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span>argmax<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>  <span class=\\"token comment\\"># 取最大值的下标</span>\\nks_value <span class=\\"token operator\\">=</span> <span class=\\"token builtin\\">max</span><span class=\\"token punctuation\\">(</span>tpr <span class=\\"token operator\\">-</span> fpr<span class=\\"token punctuation\\">)</span>  <span class=\\"token comment\\"># 取最大值</span>\\nthreshold <span class=\\"token operator\\">=</span> thresholds<span class=\\"token punctuation\\">[</span>ks_arg<span class=\\"token punctuation\\">]</span> <span class=\\"token comment\\"># 取阈值</span>\\n\\ntpr_value <span class=\\"token operator\\">=</span> tpr<span class=\\"token punctuation\\">[</span>ks_arg<span class=\\"token punctuation\\">]</span> <span class=\\"token comment\\"># tpr值</span>\\nfpr_value <span class=\\"token operator\\">=</span> fpr<span class=\\"token punctuation\\">[</span>ks_arg<span class=\\"token punctuation\\">]</span> <span class=\\"token comment\\"># fpr值</span>\\n\\nplt<span class=\\"token punctuation\\">.</span>plot<span class=\\"token punctuation\\">(</span>thresholds<span class=\\"token punctuation\\">,</span> fpr<span class=\\"token punctuation\\">,</span> label<span class=\\"token operator\\">=</span><span class=\\"token string-interpolation\\"><span class=\\"token string\\">f'fpr'</span></span><span class=\\"token punctuation\\">)</span>  <span class=\\"token comment\\"># 绘制ROC曲线，标注AUC的值</span>\\nplt<span class=\\"token punctuation\\">.</span>plot<span class=\\"token punctuation\\">(</span>thresholds<span class=\\"token punctuation\\">,</span> tpr<span class=\\"token punctuation\\">,</span> label<span class=\\"token operator\\">=</span><span class=\\"token string-interpolation\\"><span class=\\"token string\\">f'tpr'</span></span><span class=\\"token punctuation\\">)</span>  <span class=\\"token comment\\"># 绘制ROC曲线，标注AUC的值</span>\\nplt<span class=\\"token punctuation\\">.</span>plot<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">[</span>thresholds<span class=\\"token punctuation\\">[</span>ks_arg<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span>thresholds<span class=\\"token punctuation\\">[</span>ks_arg<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span><span class=\\"token punctuation\\">[</span>tpr<span class=\\"token punctuation\\">[</span>ks_arg<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span>fpr<span class=\\"token punctuation\\">[</span>ks_arg<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span> label<span class=\\"token operator\\">=</span><span class=\\"token string-interpolation\\"><span class=\\"token string\\">f'ks'</span></span><span class=\\"token punctuation\\">)</span>\\n\\nplt<span class=\\"token punctuation\\">.</span>xlabel<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'thresholds'</span><span class=\\"token punctuation\\">)</span>  <span class=\\"token comment\\"># x轴标签为FPR</span>\\nplt<span class=\\"token punctuation\\">.</span>ylabel<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'tpr&amp;fpr'</span><span class=\\"token punctuation\\">)</span>   <span class=\\"token comment\\"># y轴标签为TPR</span>\\nplt<span class=\\"token punctuation\\">.</span>title<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'KS Curve'</span><span class=\\"token punctuation\\">)</span>   <span class=\\"token comment\\"># 设置标题</span>\\nplt<span class=\\"token punctuation\\">.</span>legend<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\nplt<span class=\\"token punctuation\\">.</span>show<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}`);export{n as data};
