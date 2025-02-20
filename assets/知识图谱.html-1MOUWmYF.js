import{_ as l}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as e,a as d}from"./app-9tftCahk.js";const o={},n=d(`<h1 id="知识图谱" tabindex="-1"><a class="header-anchor" href="#知识图谱" aria-hidden="true">#</a> 知识图谱</h1><h2 id="知识图谱-1" tabindex="-1"><a class="header-anchor" href="#知识图谱-1" aria-hidden="true">#</a> 知识图谱</h2><p>小明昨天在公园跑步 如何用知识图谱表示:</p><p>以下是一个可能的知识图谱表示方式：</p><ol><li><p>节点：</p><ol><li>小明</li><li>昨天</li><li>公园</li><li>跑步</li></ol></li><li><p>关系：</p><ol><li>“小明”和“跑步”之间存在“执行”关系。</li><li>“小明”和“公园”之间存在“所在位置”关系。</li><li>“跑步”和“昨天”之间存在“发生时间”关系。</li></ol></li></ol><p>可以用图形化的方式展示，比如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  小明 ----执行---- 跑步
   |                |
   |                |
所在位置         发生时间
   |                |
   |                |
 公园  ----------- 昨天
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="本体" tabindex="-1"><a class="header-anchor" href="#本体" aria-hidden="true">#</a> 本体</h2><p>知识图谱的本体（Ontology）是对知识图谱所描述的领域中概念、概念之间的关系以及约束的形式化定义和描述。主要包含以下几个关键部分：</p><ol><li>概念（Concepts/classes）：对领域中的对象或事物进行分类和定义。例如，在一个关于人物的知识图谱中，“人”、“学生”、“教师”等可以作为概念。</li><li>属性（Properties/Attributes）：描述概念的特征或性质。比如“人”这个概念可能具有“姓名”、“年龄”、“性别”等属性。</li><li>关系（Relations）：定义概念之间的关联方式。常见的关系有“属于”、“拥有”、“导致”等。</li></ol><p>以下是一个简单的关于“学校”领域的本体示例：</p><ol><li>概念/类（Concepts/classes）： <ol><li>学生</li><li>教师</li><li>课程</li><li>班级</li><li>教学楼</li></ol></li><li>属性（Properties）： <ol><li>学生：姓名、年龄、学号、所在班级</li><li>教师：姓名、工号、教授课程</li><li>课程：课程名称、课程编号、授课教师</li><li>班级：班级名称、所属年级、班主任</li><li>教学楼：楼名、楼层数量、容纳班级</li></ol></li><li>关系（Relations）： <ol><li>学生 - 属于 - 班级</li><li>教师 - 教授 - 课程</li><li>课程 - 开设于 - 班级</li><li>班级 - 位于 - 教学楼</li></ol></li></ol><h2 id="考试" tabindex="-1"><a class="header-anchor" href="#考试" aria-hidden="true">#</a> 考试</h2><h3 id="考试本体" tabindex="-1"><a class="header-anchor" href="#考试本体" aria-hidden="true">#</a> 考试本体</h3><ol><li><p>题干</p><ol><li>问答题 <ol><li>关系 <ol><li>一个题干对应多个考察点(问答题)</li></ol></li><li>属性 <ol><li>难度(正确率)</li></ol></li></ol></li><li>选择题 <ol><li>关系: <ol><li>一个题干对应多个选项(选择题)</li></ol></li><li>属性: <ol><li>是否判断题</li><li>是否包含图片</li><li>单选题还是多选题</li><li>难度(正确率)</li></ol></li></ol></li></ol></li><li><p>选项</p><ol><li><p>关系</p><ol><li>一个选项对应一个考察点</li><li>正确选项对应的知识点就是该题目考察的考察点</li></ol></li><li><p>属性</p><ol><li>是否正确</li></ol></li></ol><blockquote><p>[!tip] 问答题没有选项</p></blockquote></li><li><p>考察点</p><ol><li>关系 <ol><li>一个考察点对应多个知识点</li></ol></li><li>属性： <ol><li>名称:</li><li>内容:</li></ol></li></ol><blockquote><p>[!tip] 知识点是对比类, 则应该是包含A, B, 以及AB的区别联系 知识点是概念类, 可只包含A</p></blockquote></li><li><p>知识点</p><ol><li>关系</li><li>属性 <ol><li>名称</li><li>内容</li></ol></li></ol><p>比如, 对比类考察点就包含了:</p><ol><li>A的概念</li><li>B的概念</li><li>AB的关系</li></ol><p>三个知识点</p></li></ol><h3 id="法律本体的特殊处理" tabindex="-1"><a class="header-anchor" href="#法律本体的特殊处理" aria-hidden="true">#</a> 法律本体的特殊处理</h3><p>知识点: 法律, 序号, 章, 节, 内容</p><h2 id="题目-考察点-知识点的区别" tabindex="-1"><a class="header-anchor" href="#题目-考察点-知识点的区别" aria-hidden="true">#</a> 题目_考察点_知识点的区别</h2><p>知识点: 是指书本上, 最原始的表述 考察点: 在知识点基础上总结的, 以题目为出发点, 和题目关系更接近的, 知识点的总结. 考试题: 是具体的考察方式, 比如选择题, 填空题, 问答题等.</p><p>举例:</p><p>知识点: &lt;中华人民共和国道路交通安全法&gt;第99条:</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>第九十九条　有下列行为之一的，由公安机关交通管理部门处二百元以上二千元以下罚款：

（一）未取得机动车驾驶证、机动车驾驶证被吊销或者机动车驾驶证被暂扣期间驾驶机动车的；

（二）将机动车交由未取得机动车驾驶证或者机动车驾驶证被吊销、暂扣的人驾驶的；

（三）造成交通事故后逃逸，尚不构成犯罪的；

（四）机动车行驶超过规定时速百分之五十的；

（五）强迫机动车驾驶人违反道路交通安全法律、法规和机动车安全驾驶要求驾驶机动车，造成交通事故，尚不构成犯罪的；

（六）违反交通管制的规定强行通行，不听劝阻的；

（七）故意损毁、移动、涂改交通设施，造成危害后果，尚不构成犯罪的；

（八）非法拦截、扣留机动车辆，不听劝阻，造成交通严重阻塞或者较大财产损失的。

行为人有前款第二项、第四项情形之一的，可以并处吊销机动车驾驶证；有第一项、第三项、第五项至第八项情形之一的，可以并处十五日以下拘留。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>考察点:</p><p><code>无证驾驶</code>:</p><p><code>未取得机动车驾驶证</code>、<code>机动车驾驶证被吊销</code>或者<code>机动车驾驶证被暂扣期间驾驶机动车的</code>, 由公安机关交通管理部门处<code>二百元以上二千元以下\`\`罚款</code>, 可以并处<code>十五日以下\`\`拘留</code>。</p><ol><li>三种情形: <code>未取得</code>, <code>吊销</code>, <code>暂扣</code></li><li>两种惩罚: <ol><li><code>罚款(&lt;2000)</code>, <code>拘留(&lt;15)</code></li><li>两种惩罚的关系: 必须罚款, 可以拘留</li></ol></li></ol><p>考试题:</p><p>对未取得驾驶证驾驶机动车的, 会追究其法律责任. A. 正确 B. 错误</p><p>考察点和知识点并不是包含和被包含关系, 而考察点和知识点各自范围内可有包含关系, 比如:</p><ol><li>考察点和子考察点, 如<code>无证驾驶</code>的子知识点是<code>无证驾驶的情形</code>, <code>无证驾驶的惩罚</code></li><li>知识点与子知识点, 如&lt;中华人民共和国道路交通安全法&gt;第99条, 可拆分为8个</li><li>父和子的关系, 既可以用关系表示, 也可以在名称中使用下划线表示<code>无证驾驶</code>, <code>无证驾驶_清醒</code>, <code>无证驾驶_惩罚</code></li></ol><p>考察点可以分为两类:</p><ol><li>纯记忆的, 比如</li><li>非纯记忆的, 需要做逻辑延伸, 比如</li></ol><p>知识点, 通常是<code>概念</code>, <code>原始文本</code>. 比如, 法条是原始文本</p><p>知识点和考察点的区别:</p><ol><li>知识点的结构: <ol><li>无过错归责包含: 1. 环境侵权 2. 产品质量侵权 3. 饲养动物致害</li><li>因果关系倒置包含: 环境侵权</li></ol></li><li>考察点的结构: <ol><li>环境侵权, 适用: 1. 无过错归责 2. 因果关系倒置</li><li>产品质量侵权, 适用: 1. 无过错归责</li><li>饲养动物齐全, 使用: 1. 无过错归责</li></ol></li></ol><p>因为考题中, 肯定会先给出是那种侵权(环境, 质量, 宠物), 然后再判断适用什么规则. 考察点相比知识点更容易和考题做链接. 类似与倒排索引.</p>`,36),a=[n];function c(s,r){return i(),e("div",null,a)}const v=l(o,[["render",c],["__file","知识图谱.html.vue"]]);export{v as default};
