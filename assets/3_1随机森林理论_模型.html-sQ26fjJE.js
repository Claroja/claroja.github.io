import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as t,c as e,a as i}from"./app-9tftCahk.js";const o="/assets/1-cFSLIoe-.png",r="/assets/2-b-9jqu8V.gif",s="/assets/3-jIpFB_5n.png",d="/assets/4-fdIa4LL7.gif",p={},n=i('<h1 id="randomforest" tabindex="-1"><a class="header-anchor" href="#randomforest" aria-hidden="true">#</a> randomforest</h1><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><ol><li>随机森林步骤</li><li>使用随机样本, 可放回的随机抽取样本，建立和初始数据集一样大小的样本集合，这个过程叫做<code>bootstrapped</code></li><li>使用随机特征</li><li>将多课树的结果进行分类打分，求最终的结果</li><li>缺失值的处理</li></ol><ul><li>首先进行差值</li><li>根据多课树预测结果，将相同的预测结果样本放在一起，然后用再权重来评估。</li></ul><h2 id="随机森林算法步骤" tabindex="-1"><a class="header-anchor" href="#随机森林算法步骤" aria-hidden="true">#</a> 随机森林算法步骤</h2><p>决策树简单, 容易解释, 很容易拟合训练集, 但是在测试集上表现却不好. 随机森林结合了多个简单的决策树, 解决了这个问题.</p><p>✨但是随机森林丧失了可解释性</p><h3 id="步骤1-创建bootstrapped数据集" tabindex="-1"><a class="header-anchor" href="#步骤1-创建bootstrapped数据集" aria-hidden="true">#</a> 步骤1: 创建bootstrapped数据集</h3><p>✨bootstrapped在统计学中，有一种称为自助法（bootstrap method）的技术，就是通过对原始样本进行有放回的抽样，多次重复这个过程以获取样本统计量的分布等信息，从而进行统计推断。这里 “bootstrapped” 就表示运用了这种自助法进行相关操作。</p><p>假设有4个样本的数据集, 为了创建和原始数据集一样大的bootstrapped数据集, 我们仅需要从原始数据集中随机抽样. 允许, 重复, 抽样.</p><figure><img src="'+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>✨第三个和第四个样本是相同的.</p><h3 id="步骤2-在从bootstrapped数据集中创建树时-每一步随机选取两个属性" tabindex="-1"><a class="header-anchor" href="#步骤2-在从bootstrapped数据集中创建树时-每一步随机选取两个属性" aria-hidden="true">#</a> 步骤2: 在从bootstrapped数据集中创建树时, 每一步随机选取两个属性</h3><p>在每一步仅选择尚未被作为决策点的两个属性.</p><figure><img src="'+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>回到步骤1, 创建新的bootStrapped数据集, 并在每一步随机选择属性创建树</p><figure><img src="'+s+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="步骤3-预测与投票" tabindex="-1"><a class="header-anchor" href="#步骤3-预测与投票" aria-hidden="true">#</a> 步骤3: 预测与投票</h3><p>用所有创建的树, 来预测测试样本, 通过投票决定最终的结果.</p><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>✨Bagging: 对数据进行自助抽样（Bootstrapping）再结合聚合（aggregate）来做出决策的方法被称为 “装袋法（Bootstrap Aggregating, Bagging）</p><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2><p>https://www.youtube.com/watch?v=J4Wdy0Wc_xQ&amp;t=412s https://www.youtube.com/watch?v=sQ870aTKqiM</p>',23),c=[n];function h(l,g){return t(),e("div",null,c)}const u=a(p,[["render",h],["__file","3_1随机森林理论_模型.html.vue"]]);export{u as default};
