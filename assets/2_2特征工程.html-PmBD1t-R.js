import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as l,e as s,a as t,b as d}from"./app-jdLxCr9I.js";const i="/assets/数据可视化Sex-ZL-Rg7NH.png",r="/assets/数据可视化Region-cUm6WFhv.png",n="/assets/数据可视化Married-AuCS4LwU.png",h="/assets/数据可视化Children-uZq7B7TT.png",m="/assets/数据可视化Car-WrOWMZUZ.png",c="/assets/数据可视化Save-EAwpETRx.png",p="/assets/数据可视化Current-OGq9BOAZ.png",o="/assets/数据可视化Mortgage-P0b_Nv_k.png",g="/assets/数据可视化Age-oWh6B9oe.png",u="/assets/数据可视化Income-44mkZcPw.png",b={},y=s('<p>特征工程的评估步骤</p><p>先建立机器学习模型的Baseline Model 应用一种或多种特征工程技术在原始数据中 重新建立机器学习模型并与Baseline Model比较 若效能的增量大于某个临界值的话，代表它是有益的</p><p>在进行主要的特征工程处理之前，我们必须要先进行</p><p>生特征理解:了解我的数据集里面有什么字段 特征改进:对字段进行数据预处理</p><h2 id="特征理解" tabindex="-1"><a class="header-anchor" href="#特征理解" aria-hidden="true">#</a> 特征理解</h2><ol><li>数据是结构还是非结构数据: art3会说明非结构文本数据的处理方法</li><li>字段的类型: 数值型、类别型、顺序型、二元型</li><li>探索式数据分析(ExploratoryDataAnalysis): 描述性统计(Descriptive Statistics): 不同值个数、空值个数、类别值的分布、最大值、最小值、平均值、标准差、离群值等</li><li>数据可视化(DataVisualization): 各种图表的搭配(圆饼图、长条图、直方图、散点图等)</li></ol><h3 id="小额信用贷款数据集" tabindex="-1"><a class="header-anchor" href="#小额信用贷款数据集" aria-hidden="true">#</a> 小额信用贷款数据集</h3><ol><li>小额信贷数据包含1,551笔客户数据</li><li>每笔客户数据含1个目标字段(TargetAttribute)和10个输入字段(Input Attributes): 8个为类别型字段，2个为数值型字段</li><li>本项目将顾客分为两类 <ol><li>会来小额信贷(会响应)的客户: 167笔数据</li><li>不会来小额信贷(不会响应)的客户: 有1,384笔数据</li></ol></li></ol><p>字段解释:</p><ol><li>字段01：age(数值字段)：年龄</li><li>字段02：sex(类别字段)：性别</li><li>字段03：region(类别字段)：居住区域</li><li>字段04:income(数值字段)：：月收人</li><li>字段05：married(类别字段)：是否已婚</li><li>字段06：children(类别字段)：家中小孩数</li><li>字段07：car(类别字段)：是否有车</li><li>字段08：save_act(类别字段)：是否有活储账户</li><li>字段09：current_act(类别字段)：是否有支存账户</li><li>字段10：：mortgage(类别字段)：是否为房贷户</li></ol><table><thead><tr><th>id</th><th>age</th><th>sex</th><th>region</th><th>income</th><th>married</th><th>children</th><th>car</th><th>save_act</th><th>current_act</th><th>mortgage</th><th>response</th></tr></thead><tbody><tr><td>ID13791</td><td>21</td><td>M</td><td>TOWN</td><td>12409.6</td><td>YES</td><td>0</td><td>NO</td><td>YES</td><td>YES</td><td>YES</td><td>YES</td></tr><tr><td>ID13792</td><td>42</td><td>M</td><td>INNER_CITY</td><td>31832.4</td><td>YES</td><td>3</td><td>YES</td><td>NO</td><td>NO</td><td>NO</td><td>YES</td></tr><tr><td>ID13793</td><td>61</td><td>M</td><td>INNER_CITY</td><td>33173.4</td><td>NO</td><td>1</td><td>YES</td><td>NO</td><td>NO</td><td>NO</td><td>NO</td></tr><tr><td>ID13794</td><td>49</td><td>F</td><td>SUBURBAN</td><td>33218.3</td><td>YES</td><td>0</td><td>YES</td><td>NO</td><td>YES</td><td>YES</td><td>NO</td></tr><tr><td>ID13795</td><td>53</td><td>F</td><td>INNER_CITY</td><td>41635.6</td><td>NO</td><td>1</td><td>NO</td><td>YES</td><td>YES</td><td>NO</td><td>NO</td></tr><tr><td>ID13796</td><td>66</td><td>M</td><td>RURAL</td><td>53180.7</td><td>YES</td><td>1</td><td>YES</td><td>YES</td><td>NO</td><td>NO</td><td>NO</td></tr><tr><td>ID13797</td><td>26</td><td>F</td><td>INNER_CITY</td><td>18170.4</td><td>YES</td><td>0</td><td>YES</td><td>NO</td><td>YES</td><td>NO</td><td>NO</td></tr><tr><td>ID13798</td><td>22</td><td>F</td><td>SUBURBAN</td><td>12754.9</td><td>NO</td><td>0</td><td>YES</td><td>YES</td><td>YES</td><td>NO</td><td>NO</td></tr></tbody></table><h2 id="描述性统计-数据质量报告" tabindex="-1"><a class="header-anchor" href="#描述性统计-数据质量报告" aria-hidden="true">#</a> 描述性统计-数据质量报告</h2><table><thead><tr><th>字段</th><th>数据型态</th><th>不同值个数</th><th>空值个数</th><th>空值比例</th><th>有值个数</th><th>有值比例</th></tr></thead><tbody><tr><td>id</td><td>C</td><td>1551</td><td>0</td><td>0.00%</td><td>1551</td><td>100.00%</td></tr><tr><td>age</td><td>N</td><td>50</td><td>2</td><td>0.13%</td><td>1549</td><td>99.87%</td></tr><tr><td>sex</td><td>C</td><td>3</td><td>0</td><td>0.00%</td><td>1551</td><td>100.00%</td></tr><tr><td>income</td><td>N</td><td>374</td><td>0</td><td>0.00%</td><td>1551</td><td>100.00%</td></tr><tr><td>married</td><td>C</td><td>2</td><td>0</td><td>0.00%</td><td>1551</td><td>100.00%</td></tr><tr><td>children</td><td>C</td><td>4</td><td>2</td><td>0.13%</td><td>1549</td><td>99.87%</td></tr><tr><td>response</td><td>C</td><td>2</td><td>0</td><td>0.00%</td><td>1551</td><td>100.00%</td></tr></tbody></table><p>✨C是Category, N是Numeric</p><p>连续型:</p><table><thead><tr><th>Numeric</th><th>Min</th><th>Max</th><th>Mean</th><th>StDev</th><th>M-3</th><th>M+3</th></tr></thead><tbody><tr><td>age</td><td>18.0</td><td>67.0</td><td>44.0</td><td>14.3</td><td>1.0</td><td>86.9</td></tr><tr><td>income</td><td>6294.2</td><td>65786.1</td><td>29885.1</td><td>13112.6</td><td>-9452.9</td><td>69223.0</td></tr></tbody></table><p>分类型:</p><table><thead><tr><th>Categorical</th><th>F</th><th>M</th><th>X</th><th>F（%）</th><th>M（%）</th><th>X（%）</th></tr></thead><tbody><tr><td>sex</td><td>811</td><td>738</td><td>2</td><td>52.29%</td><td>47.58%</td><td>0.13%</td></tr></tbody></table><table><thead><tr><th>Categorical</th><th>0</th><th>1</th><th>2</th><th>3</th><th>(空白)</th><th>0（%）</th><th>1（%）</th><th>2（%）</th><th>3（%）</th><th>(空白)(%)</th></tr></thead><tbody><tr><td>children</td><td>585</td><td>585</td><td>292</td><td>87</td><td>2</td><td>37.72%</td><td>37.72%</td><td>18.83%</td><td>5.61%</td><td>0.13%</td></tr></tbody></table><table><thead><tr><th>Categorical</th><th>YES</th><th>NO</th><th>YES（%）</th><th>NO（%）</th></tr></thead><tbody><tr><td>car</td><td>812</td><td>739</td><td>52.35%</td><td>47.65%</td></tr></tbody></table><table><thead><tr><th>Categorical</th><th>YES</th><th>NO</th><th>YES（%）</th><th>NO（%）</th></tr></thead><tbody><tr><td>save act</td><td>994</td><td>557</td><td>64.09%</td><td>35.91%</td></tr></tbody></table><table><thead><tr><th>Categorical</th><th>YES</th><th>NO</th><th>YES（%）</th><th>NO（%）</th></tr></thead><tbody><tr><td>current_act</td><td>1127</td><td>424</td><td>72.66%</td><td>27.34%</td></tr></tbody></table><h2 id="数据可视化-sex" tabindex="-1"><a class="header-anchor" href="#数据可视化-sex" aria-hidden="true">#</a> 数据可视化-Sex</h2><table><thead><tr><th>Sex</th><th>NO</th><th>YES</th><th>总计</th></tr></thead><tbody><tr><td>F</td><td>730</td><td>82</td><td>812</td></tr><tr><td>M</td><td>654</td><td>85</td><td>739</td></tr><tr><td>总计</td><td>1384</td><td>167</td><td>1551</td></tr><tr><td><img src="'+i+'" alt="数据可视化Sex" loading="lazy"></td><td></td><td></td><td></td></tr></tbody></table><p>性别和贷款无相关性</p><h2 id="数据可视化-region" tabindex="-1"><a class="header-anchor" href="#数据可视化-region" aria-hidden="true">#</a> 数据可视化-Region</h2><table><thead><tr><th>Region</th><th>NO</th><th>YES</th><th>总计</th></tr></thead><tbody><tr><td>INNER CITY 都市</td><td>579</td><td>66</td><td>645</td></tr><tr><td>RURAL 乡村</td><td>219</td><td>29</td><td>248</td></tr><tr><td>SUBURBAN 郊区</td><td>230</td><td>16</td><td>246</td></tr><tr><td>TOWN 市区</td><td>356</td><td>56</td><td>412</td></tr><tr><td>总计</td><td>1384</td><td>167</td><td>1551</td></tr></tbody></table><figure><img src="'+r+'" alt="数据可视化Region" tabindex="0" loading="lazy"><figcaption>数据可视化Region</figcaption></figure><p>住在城市的人有更多贷款</p><h2 id="数据可视化-married" tabindex="-1"><a class="header-anchor" href="#数据可视化-married" aria-hidden="true">#</a> 数据可视化-Married</h2><table><thead><tr><th>Married</th><th>NO</th><th>YES</th><th>总计</th></tr></thead><tbody><tr><td>NO</td><td>667</td><td>41</td><td>708</td></tr><tr><td>YES</td><td>717</td><td>126</td><td>843</td></tr><tr><td>总计</td><td>1384</td><td>167</td><td>1551</td></tr></tbody></table><figure><img src="'+n+'" alt="数据可视化Married" tabindex="0" loading="lazy"><figcaption>数据可视化Married</figcaption></figure><p>已婚的人有更多贷款</p><h2 id="数据可视化-children" tabindex="-1"><a class="header-anchor" href="#数据可视化-children" aria-hidden="true">#</a> 数据可视化-Children</h2><table><thead><tr><th>Children</th><th>NO</th><th>YES</th><th>总计</th></tr></thead><tbody><tr><td>0</td><td>498</td><td>87</td><td>585</td></tr><tr><td>1</td><td>568</td><td>18</td><td>586</td></tr><tr><td>2</td><td>259</td><td>34</td><td>293</td></tr><tr><td>3</td><td>59</td><td>28</td><td>87</td></tr><tr><td>总计</td><td>1384</td><td>167</td><td>1551</td></tr></tbody></table><figure><img src="'+h+'" alt="数据可视化Children" tabindex="0" loading="lazy"><figcaption>数据可视化Children</figcaption></figure><p>有三个小孩或者没有小孩有更多的贷款.</p><h2 id="数据可视化-car" tabindex="-1"><a class="header-anchor" href="#数据可视化-car" aria-hidden="true">#</a> 数据可视化-Car</h2><table><thead><tr><th>Car</th><th>NO</th><th>YES</th><th>总计</th></tr></thead><tbody><tr><td>NO</td><td>652</td><td>87</td><td>739</td></tr><tr><td>YES</td><td>732</td><td>80</td><td>812</td></tr><tr><td>总计</td><td>1384</td><td>167</td><td>1551</td></tr></tbody></table><figure><img src="'+m+'" alt="数据可视化Car" tabindex="0" loading="lazy"><figcaption>数据可视化Car</figcaption></figure><p>有没有车和贷款关系不大</p><h2 id="数据可视化-save-act" tabindex="-1"><a class="header-anchor" href="#数据可视化-save-act" aria-hidden="true">#</a> 数据可视化-Save_act</h2><table><thead><tr><th>Save_act</th><th>NO</th><th>YES</th><th>总计</th></tr></thead><tbody><tr><td>NO</td><td>520</td><td>37</td><td>557</td></tr><tr><td>YES</td><td>864</td><td>130</td><td>994</td></tr><tr><td>总计</td><td>1384</td><td>167</td><td>1551</td></tr></tbody></table><figure><img src="'+c+'" alt="数据可视化Save" tabindex="0" loading="lazy"><figcaption>数据可视化Save</figcaption></figure><p>有活期储蓄的用户更容易贷款</p><h2 id="数据可视化-current-act" tabindex="-1"><a class="header-anchor" href="#数据可视化-current-act" aria-hidden="true">#</a> 数据可视化-Current_act</h2><table><thead><tr><th>Current_act</th><th>NO</th><th>YES</th><th>总计</th></tr></thead><tbody><tr><td>NO</td><td>379</td><td>45</td><td>424</td></tr><tr><td>YES</td><td>1005</td><td>122</td><td>1127</td></tr><tr><td>总计</td><td>1384</td><td>167</td><td>1551</td></tr></tbody></table><figure><img src="'+p+'" alt="数据可视化Current" tabindex="0" loading="lazy"><figcaption>数据可视化Current</figcaption></figure><p>有没有往来账户和贷款关系不大</p><h2 id="数据可视化-mortgage" tabindex="-1"><a class="header-anchor" href="#数据可视化-mortgage" aria-hidden="true">#</a> 数据可视化-Mortgage</h2><table><thead><tr><th>Mortgage</th><th>NO</th><th>YES</th><th>总计</th></tr></thead><tbody><tr><td>NO</td><td>874</td><td>106</td><td>980</td></tr><tr><td>YES</td><td>510</td><td>61</td><td>571</td></tr><tr><td>总计</td><td>1384</td><td>167</td><td>1551</td></tr></tbody></table><figure><img src="'+o+'" alt="数据可视化Mortgage" tabindex="0" loading="lazy"><figcaption>数据可视化Mortgage</figcaption></figure><p>有没有房贷和贷款关系不大</p><h2 id="数据可视化-age" tabindex="-1"><a class="header-anchor" href="#数据可视化-age" aria-hidden="true">#</a> 数据可视化-Age</h2><figure><img src="'+g+'" alt="数据可视化Age" tabindex="0" loading="lazy"><figcaption>数据可视化Age</figcaption></figure><p>随年龄增加有下降趋势</p><h2 id="数据可视化-income" tabindex="-1"><a class="header-anchor" href="#数据可视化-income" aria-hidden="true">#</a> 数据可视化-*Income</h2><figure><img src="'+u+'" alt="数据可视化Income" tabindex="0" loading="lazy"><figcaption>数据可视化Income</figcaption></figure><p>随收入增加有下降趋势</p><h2 id="特征改进" tabindex="-1"><a class="header-anchor" href="#特征改进" aria-hidden="true">#</a> 特征改进</h2><ol><li>数据清洗: 错误值、空值、离群值的处理，之前已有说明</li><li>数据编码 <ol><li>数据的标准化(DataStandardization)及类型的转换: -score,Min-Max，类别型及顺序型字段的编码，之前的课程已有说明</li><li>数据的一般化(DataGeneralization)及离散化(DataDiscretization): 一章已有说明</li><li>数据的归一化(DataNormalization): 让向量长度为1，常用于文本分析，Part3会说明</li></ol></li><li>非结构数据结构化: part3会说明非结构文本数据结构化的方法</li></ol><h3 id="数据归一化" tabindex="-1"><a class="header-anchor" href="#数据归一化" aria-hidden="true">#</a> 数据归一化</h3><table><thead><tr><th>原始数据</th><th>L2</th><th>L1</th></tr></thead><tbody><tr><td>0.5, 0.5</td><td>0.70710678, 0.70710678</td><td>0.5, 0.5</td></tr><tr><td>1.1, 3.4</td><td>0.30782029, 0.95144452</td><td>0.24444444, 0.75555556</td></tr><tr><td>1.5, 20.2</td><td>0.07405353, 0.99725427</td><td>0.06912442, 0.93087558</td></tr><tr><td>1.63, 34.4</td><td>0.04733062, 0.99887928</td><td>0.04524008, 0.95475992</td></tr><tr><td>10.9, 3.3</td><td>0.95709822, 0.28976368</td><td>0.76760563, 0.23239437</td></tr></tbody></table>',63),v=t("p",null,[d("L2归一化:"),t("span",{class:"katex"},[t("span",{class:"katex-mathml"},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("semantics",null,[t("mrow",null,[t("mi",{mathvariant:"normal"},"∣"),t("mi",{mathvariant:"normal"},"∣"),t("mi",null,"x"),t("mi",{mathvariant:"normal"},"∣"),t("msub",null,[t("mi",{mathvariant:"normal"},"∣"),t("mn",null,"2")]),t("mo",null,"="),t("msqrt",null,[t("mrow",null,[t("msubsup",null,[t("mi",null,"x"),t("mn",null,"1"),t("mn",null,"2")]),t("mo",null,"+"),t("msubsup",null,[t("mi",null,"x"),t("mn",null,"2"),t("mn",null,"2")]),t("mo",null,"+"),t("mi",{mathvariant:"normal"},"."),t("mi",{mathvariant:"normal"},"."),t("mi",{mathvariant:"normal"},"."),t("mo",null,"+"),t("msubsup",null,[t("mi",null,"x"),t("mi",null,"n"),t("mn",null,"2")])])])]),t("annotation",{encoding:"application/x-tex"},"||x||_2 = \\sqrt{x_1^2 + x_2^2 + ... + x_n^2}")])])]),t("span",{class:"katex-html","aria-hidden":"true"},[t("span",{class:"base"},[t("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),t("span",{class:"mord"},"∣∣"),t("span",{class:"mord mathnormal"},"x"),t("span",{class:"mord"},"∣"),t("span",{class:"mord"},[t("span",{class:"mord"},"∣"),t("span",{class:"msupsub"},[t("span",{class:"vlist-t vlist-t2"},[t("span",{class:"vlist-r"},[t("span",{class:"vlist",style:{height:"0.3011em"}},[t("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[t("span",{class:"pstrut",style:{height:"2.7em"}}),t("span",{class:"sizing reset-size6 size3 mtight"},[t("span",{class:"mord mtight"},"2")])])]),t("span",{class:"vlist-s"},"​")]),t("span",{class:"vlist-r"},[t("span",{class:"vlist",style:{height:"0.15em"}},[t("span")])])])])]),t("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),t("span",{class:"mrel"},"="),t("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),t("span",{class:"base"},[t("span",{class:"strut",style:{height:"1.24em","vertical-align":"-0.2902em"}}),t("span",{class:"mord sqrt"},[t("span",{class:"vlist-t vlist-t2"},[t("span",{class:"vlist-r"},[t("span",{class:"vlist",style:{height:"0.9498em"}},[t("span",{class:"svg-align",style:{top:"-3.2em"}},[t("span",{class:"pstrut",style:{height:"3.2em"}}),t("span",{class:"mord",style:{"padding-left":"1em"}},[t("span",{class:"mord"},[t("span",{class:"mord mathnormal"},"x"),t("span",{class:"msupsub"},[t("span",{class:"vlist-t vlist-t2"},[t("span",{class:"vlist-r"},[t("span",{class:"vlist",style:{height:"0.7959em"}},[t("span",{style:{top:"-2.4337em","margin-left":"0em","margin-right":"0.05em"}},[t("span",{class:"pstrut",style:{height:"2.7em"}}),t("span",{class:"sizing reset-size6 size3 mtight"},[t("span",{class:"mord mtight"},"1")])]),t("span",{style:{top:"-3.0448em","margin-right":"0.05em"}},[t("span",{class:"pstrut",style:{height:"2.7em"}}),t("span",{class:"sizing reset-size6 size3 mtight"},[t("span",{class:"mord mtight"},"2")])])]),t("span",{class:"vlist-s"},"​")]),t("span",{class:"vlist-r"},[t("span",{class:"vlist",style:{height:"0.2663em"}},[t("span")])])])])]),t("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),t("span",{class:"mbin"},"+"),t("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),t("span",{class:"mord"},[t("span",{class:"mord mathnormal"},"x"),t("span",{class:"msupsub"},[t("span",{class:"vlist-t vlist-t2"},[t("span",{class:"vlist-r"},[t("span",{class:"vlist",style:{height:"0.7959em"}},[t("span",{style:{top:"-2.4337em","margin-left":"0em","margin-right":"0.05em"}},[t("span",{class:"pstrut",style:{height:"2.7em"}}),t("span",{class:"sizing reset-size6 size3 mtight"},[t("span",{class:"mord mtight"},"2")])]),t("span",{style:{top:"-3.0448em","margin-right":"0.05em"}},[t("span",{class:"pstrut",style:{height:"2.7em"}}),t("span",{class:"sizing reset-size6 size3 mtight"},[t("span",{class:"mord mtight"},"2")])])]),t("span",{class:"vlist-s"},"​")]),t("span",{class:"vlist-r"},[t("span",{class:"vlist",style:{height:"0.2663em"}},[t("span")])])])])]),t("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),t("span",{class:"mbin"},"+"),t("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),t("span",{class:"mord"},"..."),t("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),t("span",{class:"mbin"},"+"),t("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),t("span",{class:"mord"},[t("span",{class:"mord mathnormal"},"x"),t("span",{class:"msupsub"},[t("span",{class:"vlist-t vlist-t2"},[t("span",{class:"vlist-r"},[t("span",{class:"vlist",style:{height:"0.7401em"}},[t("span",{style:{top:"-2.453em","margin-left":"0em","margin-right":"0.05em"}},[t("span",{class:"pstrut",style:{height:"2.7em"}}),t("span",{class:"sizing reset-size6 size3 mtight"},[t("span",{class:"mord mathnormal mtight"},"n")])]),t("span",{style:{top:"-2.989em","margin-right":"0.05em"}},[t("span",{class:"pstrut",style:{height:"2.7em"}}),t("span",{class:"sizing reset-size6 size3 mtight"},[t("span",{class:"mord mtight"},"2")])])]),t("span",{class:"vlist-s"},"​")]),t("span",{class:"vlist-r"},[t("span",{class:"vlist",style:{height:"0.247em"}},[t("span")])])])])])])]),t("span",{style:{top:"-2.9098em"}},[t("span",{class:"pstrut",style:{height:"3.2em"}}),t("span",{class:"hide-tail",style:{"min-width":"1.02em",height:"1.28em"}},[t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"400em",height:"1.28em",viewBox:"0 0 400000 1296",preserveAspectRatio:"xMinYMin slice"},[t("path",{d:`M263,681c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l0 -0
c4.7,-7.3,11,-11,19,-11
H40000v40H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M1001 80h400000v40h-400000z`})])])])]),t("span",{class:"vlist-s"},"​")]),t("span",{class:"vlist-r"},[t("span",{class:"vlist",style:{height:"0.2902em"}},[t("span")])])])])])])])],-1),x=t("p",null,[d("L1归一化:"),t("span",{class:"katex"},[t("span",{class:"katex-mathml"},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("semantics",null,[t("mrow",null,[t("mi",{mathvariant:"normal"},"∣"),t("mi",{mathvariant:"normal"},"∣"),t("mi",null,"x"),t("mi",{mathvariant:"normal"},"∣"),t("msub",null,[t("mi",{mathvariant:"normal"},"∣"),t("mn",null,"1")]),t("mo",null,"="),t("msqrt",null,[t("mrow",null,[t("msubsup",null,[t("mo",null,"∑"),t("mrow",null,[t("mi",null,"i"),t("mo",null,"="),t("mn",null,"1")]),t("mi",null,"n")]),t("mi",{mathvariant:"normal"},"∣"),t("msub",null,[t("mi",null,"x"),t("mi",null,"i")]),t("mi",{mathvariant:"normal"},"∣")])])]),t("annotation",{encoding:"application/x-tex"},"||x||_1 = \\sqrt{\\sum_{i=1}^n|x_i|}")])])]),t("span",{class:"katex-html","aria-hidden":"true"},[t("span",{class:"base"},[t("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),t("span",{class:"mord"},"∣∣"),t("span",{class:"mord mathnormal"},"x"),t("span",{class:"mord"},"∣"),t("span",{class:"mord"},[t("span",{class:"mord"},"∣"),t("span",{class:"msupsub"},[t("span",{class:"vlist-t vlist-t2"},[t("span",{class:"vlist-r"},[t("span",{class:"vlist",style:{height:"0.3011em"}},[t("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[t("span",{class:"pstrut",style:{height:"2.7em"}}),t("span",{class:"sizing reset-size6 size3 mtight"},[t("span",{class:"mord mtight"},"1")])])]),t("span",{class:"vlist-s"},"​")]),t("span",{class:"vlist-r"},[t("span",{class:"vlist",style:{height:"0.15em"}},[t("span")])])])])]),t("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),t("span",{class:"mrel"},"="),t("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),t("span",{class:"base"},[t("span",{class:"strut",style:{height:"1.24em","vertical-align":"-0.3027em"}}),t("span",{class:"mord sqrt"},[t("span",{class:"vlist-t vlist-t2"},[t("span",{class:"vlist-r"},[t("span",{class:"vlist",style:{height:"0.9373em"}},[t("span",{class:"svg-align",style:{top:"-3.2em"}},[t("span",{class:"pstrut",style:{height:"3.2em"}}),t("span",{class:"mord",style:{"padding-left":"1em"}},[t("span",{class:"mop"},[t("span",{class:"mop op-symbol small-op",style:{position:"relative",top:"0em"}},"∑"),t("span",{class:"msupsub"},[t("span",{class:"vlist-t vlist-t2"},[t("span",{class:"vlist-r"},[t("span",{class:"vlist",style:{height:"0.8043em"}},[t("span",{style:{top:"-2.4003em","margin-left":"0em","margin-right":"0.05em"}},[t("span",{class:"pstrut",style:{height:"2.7em"}}),t("span",{class:"sizing reset-size6 size3 mtight"},[t("span",{class:"mord mtight"},[t("span",{class:"mord mathnormal mtight"},"i"),t("span",{class:"mrel mtight"},"="),t("span",{class:"mord mtight"},"1")])])]),t("span",{style:{top:"-3.2029em","margin-right":"0.05em"}},[t("span",{class:"pstrut",style:{height:"2.7em"}}),t("span",{class:"sizing reset-size6 size3 mtight"},[t("span",{class:"mord mathnormal mtight"},"n")])])]),t("span",{class:"vlist-s"},"​")]),t("span",{class:"vlist-r"},[t("span",{class:"vlist",style:{height:"0.2997em"}},[t("span")])])])])]),t("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),t("span",{class:"mord"},"∣"),t("span",{class:"mord"},[t("span",{class:"mord mathnormal"},"x"),t("span",{class:"msupsub"},[t("span",{class:"vlist-t vlist-t2"},[t("span",{class:"vlist-r"},[t("span",{class:"vlist",style:{height:"0.3117em"}},[t("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[t("span",{class:"pstrut",style:{height:"2.7em"}}),t("span",{class:"sizing reset-size6 size3 mtight"},[t("span",{class:"mord mathnormal mtight"},"i")])])]),t("span",{class:"vlist-s"},"​")]),t("span",{class:"vlist-r"},[t("span",{class:"vlist",style:{height:"0.15em"}},[t("span")])])])])]),t("span",{class:"mord"},"∣")])]),t("span",{style:{top:"-2.8973em"}},[t("span",{class:"pstrut",style:{height:"3.2em"}}),t("span",{class:"hide-tail",style:{"min-width":"1.02em",height:"1.28em"}},[t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"400em",height:"1.28em",viewBox:"0 0 400000 1296",preserveAspectRatio:"xMinYMin slice"},[t("path",{d:`M263,681c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l0 -0
c4.7,-7.3,11,-11,19,-11
H40000v40H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M1001 80h400000v40h-400000z`})])])])]),t("span",{class:"vlist-s"},"​")]),t("span",{class:"vlist-r"},[t("span",{class:"vlist",style:{height:"0.3027em"}},[t("span")])])])])])])])],-1),N=s('<h3 id="特征步骤" tabindex="-1"><a class="header-anchor" href="#特征步骤" aria-hidden="true">#</a> 特征步骤</h3><ol><li><p>特征建构(Feature Construction)：建构新的特征，探索特征间的关联</p><ol><li>运用外部数据的特征建构方法</li><li>运用数据探索的特征建构方法</li><li>运用专家经验的特征建构方法</li><li>运用数据分析的特征建构方法</li></ol></li><li><p>特征选择(Feature Selection)：选择一部分有用的特征，对坏特征说不</p><ol><li>统计方式的特征选择</li><li>高度相关特征的选择</li><li>模型方式的特征选择</li><li>递归式的特征选择</li></ol></li><li><p>特征转换(Feature Transformation)：运用数学方法，合并旧字段，产生新特征，以提取隐藏在数据中的潜在结构</p><ol><li>线性的特征转换(PCA,矩阵分解NMF,SVD,TSVD,LDA)</li><li>非线性的特征转换(Kernel PCA,t-SNE,神经网络)</li></ol></li><li><p>特征学习(Feature Learning)：运用深度学习，自动学习新特征</p><ol><li>关联规则为基础的特征学习</li><li>神经网络为基础的特征学习</li><li>深度学习为基础的特征学习</li><li>词嵌入为基础的文本特征学习</li></ol></li></ol>',2),_=[y,v,x,N];function f(S,E){return e(),l("div",null,_)}const O=a(b,[["render",f],["__file","2_2特征工程.html.vue"]]);export{O as default};
