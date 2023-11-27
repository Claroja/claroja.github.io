import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as l,c as a,e}from"./app-O0xqlHfm.js";const o="/assets/1-zaR1kBTU.png",r={},h=e('<h1 id="第三章指标体系与数据可视化" tabindex="-1"><a class="header-anchor" href="#第三章指标体系与数据可视化" aria-hidden="true">#</a> 第三章指标体系与数据可视化</h1><h2 id="python可视化" tabindex="-1"><a class="header-anchor" href="#python可视化" aria-hidden="true">#</a> python可视化</h2><ol><li>matplotlib</li><li>seaborn</li></ol><h2 id="描述性统计分析与绘图" tabindex="-1"><a class="header-anchor" href="#描述性统计分析与绘图" aria-hidden="true">#</a> 描述性统计分析与绘图</h2><p>描述性统计也称为探索性数据分析, 占整个模型开发工作量的40%.</p><p>变量度量类型与分布类型</p><ol><li>分类变量 <ol><li>名义变量(无序分类变量)</li><li>等级变量(有序分类变量)</li></ol></li><li>连续变量</li></ol><p>分类变量的水平(类别)数量过多, 需要<code>概化</code>. 其中等级变量可以选择<code>概化</code>也可以当成<code>连续变量</code>. 从统计学的角度讲, 等级变量是不能当做连续变量处理的, 但是在实际工作中我们会不由自主的这样做. 一般等级变量的水平数量超过20时, 就可以当成连续变量处理.(Python会把所有的数值变量当成连续变量处理)</p><h3 id="分类变量的统计量" tabindex="-1"><a class="header-anchor" href="#分类变量的统计量" aria-hidden="true">#</a> 分类变量的统计量</h3><ol><li>名义变量: 变量值不能比较大小, 如职业 <ol><li>频次</li><li>百分比</li></ol></li><li>等级变量: 变量值可以比较大小, 如年龄 <ol><li>频次</li><li>百分比</li><li>累计频次</li><li>累计百分比</li></ol></li></ol><h3 id="连续变量的分布与集中趋势" tabindex="-1"><a class="header-anchor" href="#连续变量的分布与集中趋势" aria-hidden="true">#</a> 连续变量的分布与集中趋势</h3><ol><li><p>集中趋势</p><ol><li>平均值</li><li>中位数</li><li>众数</li></ol><p>均值在众数左边是左偏, 均值在众数右边是右偏, 众数对应最高点. 例, 收入是典型的右偏分布变量, 高收入的极少, 但收入极高, 平均值会被高收入的拉高, 而中位数更能反映集中趋势.</p></li><li><p>离散趋势</p><ol><li>极差</li><li>方差(Variance)</li><li>标准差(Standard Deviation)</li><li>变异系数</li><li>平均绝对偏差(Mean Absolute Deviation)</li></ol></li><li><p>偏度</p><p>偏度小于0, 左偏(均值小于众数), 偏度大于0, 右偏(均值大于众数). 正态分布的偏度为0</p></li><li><p>峰度</p><p>峰度大于0, 更集中(尖峰), 峰度小于0, 更分散(平峰). 正态分布的峰度为0</p></li></ol><h3 id="制作报表与统计制图" tabindex="-1"><a class="header-anchor" href="#制作报表与统计制图" aria-hidden="true">#</a> 制作报表与统计制图</h3><p>报表分为维度(分类型变量)和度量(连续型变量). 仅含有维度的报表(度量为频次)被称为频次表(单个分类变量)和交叉表(两个以上分类变量) 含有维度和度量的报表被称为汇总表, 其中度量以统计量的形式出现.</p><p>报表分类:</p><ol><li>单因子频数: 仅分析单个分类变量的分布情况</li><li>表分析: 分析两个分类变量的联合分布情况</li><li>汇总统计量: 按照分类变量分组, 对连续变量进行描述性统计</li></ol><h3 id="图示" tabindex="-1"><a class="header-anchor" href="#图示" aria-hidden="true">#</a> 图示</h3><ol><li>盒须图 四分位距, IQR(Interquartile Range), 上下四分位数之间的距离, 或者说中间50%的数据 <img src="'+o+'" alt="" loading="lazy"></li><li>条形图: 变量值有顺序</li><li>柱状图: 变量本身有顺序</li><li>2Y轴图, 只在特殊情况使用: X轴为时间, 左Y轴表示绝对量, 如GDP. 右Y轴为变化率, 如GDP增长率. 用柱形图表示绝对量, 用线性表示增长率指标.</li><li>双变量关系图像: <ol><li>两个连续变量关系的散点图</li><li>连续变量对二分类变量影响的Logit图. 折线表示两个变量之间的关系, 柱形表示司机驾龄分布的情况.</li></ol></li></ol><p>复杂叙述目的的实现需要综合运用每类统计图, 而不是创造出复杂的图形. 统计图分为描述性统计图和检验性统计图. 描述性统计图常出现在工作报告中, 如饼图, 检验性统计图常出现在技术报告中, 如ROC曲线</p><h2 id="指标体系" tabindex="-1"><a class="header-anchor" href="#指标体系" aria-hidden="true">#</a> 指标体系</h2><h3 id="建立指标标准" tabindex="-1"><a class="header-anchor" href="#建立指标标准" aria-hidden="true">#</a> 建立指标标准</h3><p>1, 2感觉是一句话就是口径同一, 标准统一</p><ol><li>指标标准, 由一个归口部门做最终解释</li><li>同一规范, 避免出现同名不同义, 同义不同名</li><li>用数服务, <strong>这个概念不好</strong></li><li>决策支持, 从企业战略高度梳理</li></ol><h3 id="三个层级需求" tabindex="-1"><a class="header-anchor" href="#三个层级需求" aria-hidden="true">#</a> 三个层级需求</h3><ol><li>决策层</li><li>管理层, 如,部门负责人</li><li>执行层, 如,部门内部员工</li></ol><h3 id="指标分类" tabindex="-1"><a class="header-anchor" href="#指标分类" aria-hidden="true">#</a> 指标分类</h3><ol><li>根指标, 最关心的指标, 如, 营业额</li><li>组合指标, 根指标按维度细分, 如来自女性的营业额</li><li>派生指标, 根指标和组合指标运算得到的, 如, 女性营业额占总营业额的比率.</li></ol>',27),d=[h];function n(t,c){return l(),a("div",null,d)}const _=i(r,[["render",n],["__file","第三章指标体系与数据可视化.html.vue"]]);export{_ as default};
