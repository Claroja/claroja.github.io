import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as i,e as a}from"./app-jdLxCr9I.js";const r="/assets/PCA-_aumW1vS.png",n="/assets/PCA2-xrRzk4-E.png",d="/assets/PCA3-mLH4L5SQ.png",o="/assets/PCA4-CAd_HQKd.png",s="/assets/SVD-TnyWzX09.png",l="/assets/SVD2-xRblgW0b.png",c="/assets/SVD3-1tixc2ao.png",h="/assets/SVD4-b01Nctiu.png",p="/assets/SVD5-2EBlPRu6.png",f={},g=a('<ol><li>线性的特征转换 <ol><li>与目标字段无关的转换: PCA，SVD，TSVD,矩阵分解NMF</li><li>与目标字段有关的转换: LDA</li></ol></li><li>非线性的特征转换 <ol><li>与目标字段无关的转换: Kernel PCA,t-SNE</li><li>与目标字段有关的转换: 神经网络</li></ol></li></ol><p>转换出来的新特征, 不好解释. 如果想要好解释性, 最好做特征选择.</p><h2 id="pca" tabindex="-1"><a class="header-anchor" href="#pca" aria-hidden="true">#</a> PCA</h2><p>Principal component analysis (PCA) is a popular <code>linear</code> dimensionality reductiontechnique.</p><p>PCA projects observations onto fewer principal components of the feature matrixthat retain the <code>most variance</code>.</p><p>PCA is an <code>unsupervised technique</code>, meaning that it does not use the informationfrom the target vector and instead only considers the feature matrix.</p><p>The variance of the “length&#39;is significantly ggreater thanthee &quot;height&quot;.</p><p>Instead of length and height.we refer to the “directionswith the most variance as thefirst principalcomponentt andthe “direction“ with thesecond-most variance as thesecond principal component.</p><figure><img src="'+r+'" alt="PCA" tabindex="0" loading="lazy"><figcaption>PCA</figcaption></figure><figure><img src="'+n+'" alt="PCA2" tabindex="0" loading="lazy"><figcaption>PCA2</figcaption></figure><p>PCA求得主成分的步骤</p><ol><li>计算协方差矩阵(Variance-CovarianceMatrix)</li><li>解出协方差矩阵的特征值(EigenValue)及特征向量(EigenVector)</li><li>将特征值由大至小排序，排序后分别为第一主成分、第二主成分、</li></ol><figure><img src="'+d+'" alt="PCA3" tabindex="0" loading="lazy"><figcaption>PCA3</figcaption></figure><p>红色表示PCA转换后的特征, 蓝色表示原始特征. 取5个主成分分就能达到80%的效果, 而原始要选择9个特征.</p><figure><img src="'+o+'" alt="PCA4" tabindex="0" loading="lazy"><figcaption>PCA4</figcaption></figure><h2 id="svd" tabindex="-1"><a class="header-anchor" href="#svd" aria-hidden="true">#</a> SVD</h2><h3 id="lsa" tabindex="-1"><a class="header-anchor" href="#lsa" aria-hidden="true">#</a> LSA</h3><p>潜在语意分析(Latent Semantic Analysis,LSA)运用SVD(SingularValue Decomposition)从庞大的文字数据中找出词汇所拥有的潜在语意关联性，是广泛运用在自然语言数据搜寻上的降维方式</p><p>传统自然语言搜索引擎的搜寻方式会要求使用者下查询的关键词，然后依照这些关键词去搜寻文章中有出现这些关键词的文章</p><p>然而，这种搜寻方式有一个问题就是关键词若文章中的词无法完全符合关键词，则就无法顺利搜寻出这些文章</p><p>例如，文章中有“车&quot;这个词，但若查询的关键词是“汽车&quot;的话，则就无法搜寻出这篇文章. 但“车&quot;和“汽车”是同义词，若无法顺利搜寻出则无法满足使用者的需求</p><p>通过LSA，可以计算出词汇间的语意相似度，以及词汇与文件间的相似度，来解决这个问题</p><p>LSA可以将词汇-文件的矩阵降维，转换为潜在语意空间，此转换需要用到SVD的矩阵分解技术</p><figure><img src="'+s+'" alt="SVD" tabindex="0" loading="lazy"><figcaption>SVD</figcaption></figure><p>文件1: 驾驶汽车去公司 文件2: 开车过去 文件3: 在餐厅吃汉堡排 文件4: 吃餐厅的意大利面</p><table><thead><tr><th>X</th><th>文件1</th><th>文件2</th><th>文件3</th><th>文件4</th></tr></thead><tbody><tr><td>汽车</td><td>1</td><td>0</td><td>0</td><td>0</td></tr><tr><td>公司</td><td>1</td><td>0</td><td>0</td><td>0</td></tr><tr><td>去</td><td>1</td><td>1</td><td>0</td><td>0</td></tr><tr><td>车</td><td>0</td><td>1</td><td>0</td><td>0</td></tr><tr><td>餐厅</td><td>0</td><td>0</td><td>1</td><td>1</td></tr><tr><td>汉堡排</td><td>0</td><td>0</td><td>1</td><td>0</td></tr><tr><td>吃</td><td>0</td><td>0</td><td>1</td><td>1</td></tr><tr><td>意大利面</td><td>0</td><td>0</td><td>0</td><td>1</td></tr></tbody></table><figure><img src="'+l+'" alt="SVD2" tabindex="0" loading="lazy"><figcaption>SVD2</figcaption></figure><figure><img src="'+c+'" alt="SVD3" tabindex="0" loading="lazy"><figcaption>SVD3</figcaption></figure><figure><img src="'+h+'" alt="SVD4" tabindex="0" loading="lazy"><figcaption>SVD4</figcaption></figure><figure><img src="'+p+'" alt="SVD5" tabindex="0" loading="lazy"><figcaption>SVD5</figcaption></figure><ol><li>LSA通过奇异值分解进行降维后，各语意维度形成正交，矩阵中的元素有可能是负值，会造成解读困难: －用NMF或LDA等方法可以解决</li><li>奇异值分解计算非常费时，尤其是关键词的量非常大时</li><li>新词加入时，需要重新进行矩阵分解</li><li>进行奇异值分解时通常采用截断SVD(Truncated SVD,TSVD)－与SVD不同的是TSVD可以产生一个指定维度的分解矩阵，运算较快</li></ol><h2 id="线性的特征转换-矩阵分解nmf❓" tabindex="-1"><a class="header-anchor" href="#线性的特征转换-矩阵分解nmf❓" aria-hidden="true">#</a> 线性的特征转换-矩阵分解NMF❓</h2><p>NMF is an unsupervised technique for linear dimensionality reductionthat factorizes feature matrix into matrices representing the latentrelationship between observations and their features.</p><p>Formally, given a desired number of returned features, r,)NMF factorizesour feature matrix such that V ~ WH where V is the original d<em>n featurematrix (i.e., d features, n observations), W is a d</em>r, and H is an r*nmatrix.</p><p>One major requirement of NMA is that, the feature matrix cannot containnegative values.</p><h2 id="线性的特征转换-lda❓" tabindex="-1"><a class="header-anchor" href="#线性的特征转换-lda❓" aria-hidden="true">#</a> 线性的特征转换-LDA❓</h2><ol><li>Linear Discriminant Analysis ( LDA) is a classification algorithm that isalso a popular technique for dimensionality reduction.</li><li>LDA works similarly to principal component analysis (PCA) in that itprojects the feature space onto a lower-dimensional space.</li><li>However, in PCA we were only interested in the component axes thatmaximize the variance in the data, while in LDA we have the additionalgoal of maximizing the differences between classes.</li></ol><h2 id="非线性的特征转换-kernelpca❓" tabindex="-1"><a class="header-anchor" href="#非线性的特征转换-kernelpca❓" aria-hidden="true">#</a> 非线性的特征转换-KernelPCA❓</h2><h2 id="非线性的特征转换-t-sne❓" tabindex="-1"><a class="header-anchor" href="#非线性的特征转换-t-sne❓" aria-hidden="true">#</a> 非线性的特征转换-t-SNE❓</h2><h2 id="非线性的特征转换-神经网络❓" tabindex="-1"><a class="header-anchor" href="#非线性的特征转换-神经网络❓" aria-hidden="true">#</a> 非线性的特征转换+神经网络❓</h2><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><table><thead><tr><th>Algorithm</th><th>Supervised/Unsupervised</th><th>Linear /Non-Linear</th></tr></thead><tbody><tr><td>PCA</td><td>Unsupervised Transformation</td><td>Linear</td></tr><tr><td>NMF</td><td>Unsupervised Transformation</td><td>Linear</td></tr><tr><td>SVD,TSVD</td><td>Unsupervised Transformation</td><td>Linear</td></tr><tr><td>KERNEL PCA</td><td>Unsupervised Transformation</td><td>Non-Linear</td></tr><tr><td>T-sne</td><td>Unsupervised Transformation</td><td>Non-Linear</td></tr><tr><td>AutoEncoder</td><td>Unsupervised Transformation</td><td>Non-Linear</td></tr><tr><td>LDA</td><td>Supervised Transformation</td><td>Linear</td></tr><tr><td>NN/Deep Learning</td><td>Supervised Transformation</td><td>Non-Linear</td></tr></tbody></table>',42),u=[g];function m(A,_){return e(),i("div",null,u)}const b=t(f,[["render",m],["__file","2_5特征转换.html.vue"]]);export{b as default};
