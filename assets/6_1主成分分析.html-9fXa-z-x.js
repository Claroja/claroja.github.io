import{_ as r}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as p,e as l}from"./app-YE2Hltoy.js";const b={},a=l('<h1 id="数据分析模型-主成分分析" tabindex="-1"><a class="header-anchor" href="#数据分析模型-主成分分析" aria-hidden="true">#</a> 数据分析模型_主成分分析</h1><p>考纲:</p><ul><li>领会 <ul><li>矩阵分析法的基本思想</li><li>主成分分析的原理</li><li>主成分分析的计算步骤</li></ul></li><li>熟知 <ul><li>适用于主成分分析的变量类型</li><li>主成分的个数的保留原则</li></ul></li><li>应用 <ul><li>在深入理解主成分的意义的基础之上，在遇到业务问题时，有能力决定是否使用主成分分析方法</li><li>明确主成分分析的适用场景</li></ul></li></ul><p>分值: a.主成分分析法、因子分析法（占比 10%）</p><h2 id="考点-pca基础" tabindex="-1"><a class="header-anchor" href="#考点-pca基础" aria-hidden="true">#</a> 考点: PCA基础</h2><ul><li><p>🟢(单选题)PCA的缺点是？<br> A、去除数据中的冗余信息<br> B、简洁<br> C、全局降维<br> D、线性降维</p><p>正确答案：D</p></li><li><p>🔴(单选题)对于主成分分析叙述错误的是()。<br> A、主成分分析是一种降维的方法<br> B、主成分分析不适用于分类型变量的降维 🔴<br> C、通过正交变换将一组可能存在相关性的变量转换为一组线性不相关的变量<br> D、主成分分析设法将原来的变量重新组合成一组新的、彼此相关的几个综合变量</p><p>答案:D</p></li><li><p>🟢(单选题)对于主成分分析来说，主要关注的是()。<br> A、行观测和列变量两者的相关性<br> B、变量之间的相关性<br> C、行观测之间的相似性<br> D、维度的含义</p><p>答案:B</p></li><li><p>🟢(单选题)进行主成分分析的前提条件是，各变量之间应该( )。<br> A、相互独立<br> B、低度相关<br> C、高度相关<br> D、完全不相关</p><p>答案:C</p></li><li><p>🔴(单选题)以下关于主成分分析的描述正确的是()。<br> A、主成分分析的本质就是找到解释变量的公共因子和特殊因子 🔴<br> B、在主成分分析中，对应最大特征值的特征向量，其方向正是协方差矩阵变异最小的方向🔴<br> C、我们一般只保留前k个主成分，其对应主成分特征根之和大于1就可以了🔴<br> D、我们一般使得保留的前k个主成分累计能够解释数据80%以上的变异</p><p>答案:D 解析:本题考查主成分分析的相关知识。选项A表述的是因子分析，不是主成分分析。选项B中主成分分析对应的最大特征值的特征向量，其方向正是协方差矩阵变异最大的方向，因此选项B表述错误。选项C前k个主成分特征根单个需要大于1，因此选项C表述错误。选项D表述正确，因此本题选D。</p></li><li><p>🔴(多选题)下列关于主成分分析算法的说法正确的是()。<br> A、需要研究数据的协方差矩阵<br> B、主成分分析选取能够最大化解释数据变异的成分<br> C、它是借助一个正交变换，将分量相关的原随机向量转换为其分量不相关的新随机向量 🔴<br> D、可以用于分类数据</p><p>答案:ABC</p></li><li><p>🔴(单选题)以下关于主成分分析的说法正确的是（）<br> A、每个主成分都是所有原始变量的线性组合<br> B、每个主成分都是部分原始变量的线性组合<br> C、只有前几个主成分是所有原始变量的线性组合<br> D、只有前几个主成分是部分原始变量的线性组合</p><p>正确答案：A,</p></li><li><p>🟢(单选题)下列场景适合使用主成分分析的是（）<br> A、进行聚类分析<br> B、进行矩阵分析<br> C、进行综合打分<br> D、进行精准营销</p><p>正确答室：C</p></li><li><p>🔴主成分分析(PCA)不适宜单独用于那种情况？<br> A、员工绩效的评估和排名<br> B、描述产品情况，如子公司的业务发展状况<br> C、消除数据分析中的共线性问题<br> D、PCA可以作为异常识别的算法使用</p><p>正确答案：B</p></li><li><p>🔴(多选题)主成分分析可以减少数据的特征数目，下面关于主成分分析说法正确的是<br> A、主成分的思想是用少数几个主成分来代替原始变量<br> B、主成分的几个主成分彼此之间不相关<br> C、一般来说，得到的主成分不好解释<br> D、主成分用均值来解释数据的变异</p><p>正确答案：A,B,C,</p></li></ul><h2 id="考点-主成分特征值特征向量" tabindex="-1"><a class="header-anchor" href="#考点-主成分特征值特征向量" aria-hidden="true">#</a> 考点: 主成分特征值特征向量</h2><ul><li><p>🔴(多选题)在主成分分析中如何得到协方差矩阵的特征值特征向量？ A、正交旋转 B、特征值分解 C、奇异值分解 D、斜交旋转</p><p>正确答案：BC</p></li><li><p>🔴(单选题)以下关于主成分分析说法错误的是( )。<br> A、PCA可以用来进行降维处理<br> B、PCA可以通过奇异值分解来实现<br> C、PCA可以通过特征值分解来实现🔴<br> D、PCA可以实现线性组合最小化样本方差🔴</p><p>答案:D 解析: 主成分分析可以实现线性组合最大化样本方差</p></li><li><p>🔴(单选题)主成分分析中，若使用特征值分解法，其在代数上的表现是？<br> A、将原随机向量的协方差阵变换成对角形阵<br> B、将原随机向量的方差阵变换成正定矩阵<br> C、将原随机向量的矩阵变换成对角形阵<br> D、将原随机向量的协方差阵变换成非正定矩阵</p><p>正确答案：A,解析：此为主成分分析算法基础知识，详细可见《统计学习方法》16.13节</p></li></ul><h2 id="考点-主成分矩阵" tabindex="-1"><a class="header-anchor" href="#考点-主成分矩阵" aria-hidden="true">#</a> 考点: 主成分矩阵</h2><ul><li><p>🔴(单选题)实际应用中，关于主成分数量K的取值，下列说法错误的是（）<br> A、可以基于碎石图进行判断🔴<br> B、特征根从大到小排序，通常要求前K个特征根都大于1<br> C、通常要求K个主成分的累积方差比超过80%<br> D、各个主成分之问的方向夹角需要尽可能的小</p><p>答案: D</p></li><li><p>🔴(单选题)在主成分分析中，从第一个主成分到最后一个主成分的方差具有的特征是()。<br> A、依次递增<br> B、依次递减<br> C、大小相等<br> D、先变大后变小</p><p>答案:B</p></li><li><p>🔴(单选题)在实际应用中，关于主成分数量K的选取，下列说法错误的是()。<br> A、各主成分之间相互正交<br> B、🔴特征根从大到小排序，通常要求前K个特征根都大于1<br> C、🔴通常要求K个主成分的累计方差比超过80%<br> D、各个主成分之间的方向夹角需要尽可能的小</p><p>答案:D</p></li><li><p>🔴(单选题)主成分分析中得到的第一个主成分和第二个主成分之间的协方差( )。<br> A、为0<br> B、大于0<br> C、小于0<br> D、不为0</p><p>答案:A</p></li><li><p>🔴(单选题)关于主成分的方差表述错误的是( )。<br> A、任意两个主成分的协方差是0<br> B、主成分的总方差等于原变量的总方差<br> C、主成分的方差等于第k个主成分与第j个变量样本间的相关系数<br> D、第k个主成分的方差为对应的特征根 🔴</p><p>答案:C</p></li><li><p>🟢(单选题)关于主成分的方差表述错误的是？ A、第一主成分的方差是最大的 B、主成分的总方差等于原变量的总方差 C、主成分的方差是等于第k个主成分与第个变量样本间的相关系数 D、第k个主成分的方差为对应的特征根</p><p>正确答案：C</p></li></ul><h2 id="考点-pca预处理" tabindex="-1"><a class="header-anchor" href="#考点-pca预处理" aria-hidden="true">#</a> 考点: PCA预处理</h2><ul><li><p>🟢(单选题)进行主成分分析(PCA)之前，如果变量的取值范围相差很大，应当如何处理数据？<br> A、直接使用协方差矩阵计算主成分。<br> B、先对每个变量进行中心化，然后使用协方差矩阵计算主成分。<br> C、对数据进行中心标准化，然后使用相关系数矩阵计算主成分。<br> D、仅对取值范围大的变量进行中心化，然后使用协方差矩阵计算主成分。</p><p>正确答案：C</p></li></ul><h2 id="考点-实操" tabindex="-1"><a class="header-anchor" href="#考点-实操" aria-hidden="true">#</a> 考点: 实操</h2><ul><li><p>🔴(单选题)以下关于代码片段(使用sklearn)的使用和PCA（主成分分析）的描述中，哪项是正确的？<br> A、preprocessing.scale(data)用于对数据进行归一化处理，确保PCA分析前各特征处于同一量级。<br> B、PCA(n_components=9)将数据降维了9个主成分。<br> C、pca.explained variance输出的是降维后各主成分的方差。<br> D、pca.explained variance ratio显示的是原始数据中各成分解方差的总和</p><p>正确答案：C,解析：A选项应该是标准化到均值为0和方差为1，而不是归一化，B选项应是降维到9个主成分D选项表示各主成分方差占总方差的比例，而不是方差比例的总和。</p></li></ul><h2 id="考点-其他" tabindex="-1"><a class="header-anchor" href="#考点-其他" aria-hidden="true">#</a> 考点: 其他</h2><ul><li>🟢(单选题)在实际应用中，若研究单个指标的方差对结果的影响，在做主成分析的时候应该选择使用（）<br> A、协方差矩阵<br> B、原始变量构成的矩阵<br> C、关联矩车<br> D、其余三者皆可</li></ul><p>答案: A, 各主成分方差之和等于所有变量的方差之和，因此用协方差矩阵可以得到指标的方差，从而继续后续分析。</p>',17),e=[a];function h(C,d){return i(),p("div",null,e)}const c=r(b,[["render",h],["__file","6_1主成分分析.html.vue"]]);export{c as default};
