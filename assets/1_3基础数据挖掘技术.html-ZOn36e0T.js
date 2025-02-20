import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as d,c as r,a}from"./app-9tftCahk.js";const e={},h=a('<h1 id="基础数据挖掘技术" tabindex="-1"><a class="header-anchor" href="#基础数据挖掘技术" aria-hidden="true">#</a> 基础数据挖掘技术</h1><p>探索性数据分析(Data Explore)</p><ol><li>描述性统计</li><li>可视化技术</li></ol><p>案例为本的学习(Case-based Learning)</p><h2 id="描述性统计" tabindex="-1"><a class="header-anchor" href="#描述性统计" aria-hidden="true">#</a> 描述性统计</h2><h3 id="交换机占线数" tabindex="-1"><a class="header-anchor" href="#交换机占线数" aria-hidden="true">#</a> 交换机占线数</h3><p>交换机的通话记录</p><table><thead><tr><th>资话号码</th><th>受话号码</th><th>日期</th><th>时间</th><th>持时间(秒)</th></tr></thead><tbody><tr><td>Xxxxx</td><td>Aaaaa</td><td>980501</td><td>110322</td><td>742</td></tr><tr><td>Xxxxx</td><td>Bbbbb</td><td>980501</td><td>110501</td><td>616</td></tr><tr><td>Xxxxx</td><td>Ccccc</td><td>980501</td><td>110842</td><td>52</td></tr></tbody></table><p>持续时间转成总类</p><table><thead><tr><th>资话号码</th><th>受话号码</th><th>日期</th><th>时间</th><th>总频</th></tr></thead><tbody><tr><td>Xxxxx</td><td>Aaaaa</td><td>980501</td><td>110322</td><td>开始</td></tr><tr><td>Xxxxx</td><td>Aaaaa</td><td>980501</td><td>111544</td><td>结束</td></tr><tr><td>Xxxxx</td><td>Bbbbb</td><td>980501</td><td>110501</td><td>开始</td></tr><tr><td>Xxxxx</td><td>Bbbbb</td><td>980501</td><td>111517</td><td>结束</td></tr><tr><td>Xxxxx</td><td>Ccccc</td><td>980501</td><td>110842</td><td>开始</td></tr><tr><td>Xxxxx</td><td>Ccccc</td><td>980501</td><td>110934</td><td>结束</td></tr></tbody></table><p>对时间排序统计占线数</p><table><thead><tr><th>资话号码</th><th>受话号码</th><th>日期</th><th>时间</th><th>总频（占）</th></tr></thead><tbody><tr><td>Xxxxx</td><td>Aaaaa</td><td>980501</td><td>110322</td><td>开始(1)</td></tr><tr><td>Xxxxx</td><td>Bbbbb</td><td>980501</td><td>110501</td><td>开始(2)</td></tr><tr><td>Xxxxx</td><td>Ccccc</td><td>980501</td><td>110842</td><td>开始(3)</td></tr><tr><td>Xxxxx</td><td>Ccccc</td><td>980501</td><td>110934</td><td>结束(2)</td></tr><tr><td>Xxxxx</td><td>Bbbbb</td><td>980501</td><td>111517</td><td>结束(1)</td></tr><tr><td>Xxxxx</td><td>Aaaaa</td><td>980501</td><td>111544</td><td>结束(0)</td></tr></tbody></table><h3 id="_300减30" tabindex="-1"><a class="header-anchor" href="#_300减30" aria-hidden="true">#</a> 300减30</h3><p>我们计算每个消费者每次消费的客单价金额为多少</p><p>一共有21,598消费者纪录。</p><p>ID：代表顾客编号 otal_Spending：代表顾客总花费金额 例如：买了2件200元衣服，此字段就是400元</p><p>我们将所有顾客的客单价，每50元为一个区间，统计该区间有多少人 我们非常清楚的可以看出150~200元的区间是最多人会到店花费的金额，大约4000人左右</p><p>如果我们现在已经买了 450 元，就可以考虑买一点小东西达到 500 元顺便取得折扣。的确会吸引不少消费者想办法买到 500 元。 但如果群客单价在 150～200 元的大群消费者呢？聪明的我们一定会觉得要多花 300 才可以得到优惠。那当然买 200 就好了，才不要当冤大头。 但是 150～200 元区间却是最多消费者消费的总金额，等于平白失去了 4000 笔可以提升客单价的机会！</p><p>我们可以很明显的看出200、400、600、700都是有大量消费者习惯购买的总消费金额。我们即可挑选其中三个数字做成优惠区隔</p><h3 id="杂志" tabindex="-1"><a class="header-anchor" href="#杂志" aria-hidden="true">#</a> 杂志</h3><table><thead><tr><th></th><th>Average</th></tr></thead><tbody><tr><td>Age</td><td>46.9</td></tr><tr><td>Income</td><td>20.8</td></tr><tr><td>Credit</td><td>34.9</td></tr><tr><td>Car owner</td><td>0.59</td></tr><tr><td>House owner</td><td>0.59</td></tr><tr><td>car magazine</td><td>0.329</td></tr><tr><td>house magazine</td><td>0.702</td></tr><tr><td>sports magazine</td><td>0.447</td></tr><tr><td>music magazine</td><td>0.146</td></tr><tr><td>comic magazine</td><td>0.081</td></tr></tbody></table><p>naive predictions</p><table><thead><tr><th>Magazine</th><th>a priori probability that client buys magazine</th><th>Naive prediction accuracy</th></tr></thead><tbody><tr><td>car</td><td>32.9%</td><td>67.1%</td></tr><tr><td>house</td><td>70.2%</td><td>70.2%</td></tr><tr><td>sports</td><td>44.7%</td><td>55.3%</td></tr><tr><td>music</td><td>14.6%</td><td>85.4%</td></tr><tr><td>comic</td><td>8.1%</td><td>91.9%</td></tr></tbody></table><table><thead><tr><th>Magazine</th><th>Age</th><th>Income</th><th>Credit</th><th>Car</th><th>House</th></tr></thead><tbody><tr><td>car</td><td>29.3</td><td>17.1</td><td>27.3</td><td>0.48</td><td>0.53</td></tr><tr><td>house</td><td>48.1</td><td>21.1</td><td>35.5</td><td>0.58</td><td>0.76</td></tr><tr><td>sports</td><td>42.2</td><td>24.3</td><td>31.4</td><td>0.70</td><td>0.60</td></tr><tr><td>music</td><td>24.6</td><td>12.8</td><td>24.6</td><td>0.30</td><td>0.45</td></tr><tr><td>comic</td><td>21.4</td><td>25.5</td><td>26.3</td><td>0.62</td><td>0.60</td></tr></tbody></table><p>naive predictions作为基础的评估标准, 建模要比naive predictions更好.</p><h2 id="可视化技术-visualization-techniques" tabindex="-1"><a class="header-anchor" href="#可视化技术-visualization-techniques" aria-hidden="true">#</a> 可视化技术(Visualization Techniques)</h2>',26),i=[h];function c(x,o){return d(),r("div",null,i)}const s=t(e,[["render",c],["__file","1_3基础数据挖掘技术.html.vue"]]);export{s as default};
