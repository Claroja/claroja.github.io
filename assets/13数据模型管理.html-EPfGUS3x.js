import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as e,a as l}from"./app-9tftCahk.js";const h={},d=l('<h1 id="数据模型管理" tabindex="-1"><a class="header-anchor" href="#数据模型管理" aria-hidden="true">#</a> 数据模型管理</h1><h2 id="_13-1-数据分类" tabindex="-1"><a class="header-anchor" href="#_13-1-数据分类" aria-hidden="true">#</a> 13.1 数据分类</h2><p>对数据分类, 首先需要弄清楚数据的定义是什么。《DAMA 数据管理知识体系指南》一书中给出了数据的定义，数据是以文本、数字、图形、图像、声音和视频等格式对事实进行表现的</p><p>信息是指有上下文的数据，其实就是在原有数据定义中增加了限定。这里所指的上下文包括与数据相关的业务术语的定义、数据表达的格式、数据所处的时间范围和数据与特定用法的相关性。</p><p>在信息的基础上，又生成了知识的概念。知识是基于信息整合形成的观点，是基于信息对模式、趋势的识别、解释、假设和推理。</p><p>举例来说，有“45”和“前5%”两个数据，我们并不知道“45&quot;和“前5%”所代表的含义是什么，而信息则是给这些数据增加定义、格式、时间范围和相关性等内容，方便人们理解数据所代表的含义，比如这些数据背后代表的信息是“年龄: 45岁”和“收入排名:前5%”。如果我们在信息的基础上再加上业务理解，基于模式和趋势、关系、假设等内容，就会构成知识。比如，这个案例我们可以得到“年龄45岁的人，收入排名在前5%的概率有90%”这条知识。</p><p>在企业中可以从业务视角和数据管理视角对数据进行分类。</p><h3 id="从业务视角对数据进行分类" tabindex="-1"><a class="header-anchor" href="#从业务视角对数据进行分类" aria-hidden="true">#</a> 从业务视角对数据进行分类，</h3><p>首先需要明确什么是企业。从经济学的角度理解，企业是各种契约的合集。比如，企业与企业员工之间会签署劳务合同，证明双方存在雇佣与被雇佣的契约关系。此外，部门之间也有契约，规范不同部门之间的交流与合作。所以，从业务视角对数据进行分类是将企业看作关系的集合，包含各种实体，分别如下。</p><ul><li>当事人:个人或一组人。</li><li>资产:当事人所有的具有价值且能够获得收益的事物。</li><li>财务:企业内部的会计系统。</li><li>区域:地理区域，物理的或电子的地址。</li><li>事件:由用户主动发起的各类行为。</li><li>协议:在用户和机构之间达成的关于特定产品的协议。</li><li>行销活动:为了获取、挽留用户或提高用户的使用率而采取的战略、计划或促销活动。</li><li>内部组织:机构或公司内部的业务单元。</li><li>产品:-种可以在市场上交易的产品或服务，包括条款或条件。</li><li>渠道:用户和机构或公司进行接触的途径。</li></ul><p>这种分类方式参考了知名数据仓库公司Teradata的FS-LDM数据模型架构，但是对于不同的公司来说，从业务视角划分的内容是不一样的，很难提供一个完整、统一的标准。</p><h3 id="从数据管理视角分类" tabindex="-1"><a class="header-anchor" href="#从数据管理视角分类" aria-hidden="true">#</a> 从数据管理视角分类</h3><p>可以把数据分为主数据、交易数据(又称为事务数据、业务数据)、统计分析数据(又称为指标)、参考数据和元数据。相对于从业务视角分类，数据管理视角的数据分类标准相对统一。</p><ul><li><p>主数据是关于业务实体的数据，描述组织内的“物”，如人、地点、用户、产品等。在企业中存在很多IT系统，然而主数据信息是需要跨系统流转的，所以主数据是企业中记录数据的核心。</p></li><li><p>交易数据描述组织业务运营过程中的内部或外部“事件”。交易数据也可以理解为主数据中的对象产生的一些行为数据，如销售订单、通话记录等。·统计分析数据是对企业业务活动进行统计分析的数值型数据，即指标，如用户数、销售额等。用户数是对主数据中存在的用户进行统计，销售额是对交易销售行为的订单、额度进行统计。</p></li><li><p>参考数据是将其他数据进行分类或进行目录整编的数据，参考数据值是几个允许值之一。参考数据也可以理解为码值，是为了对一些数据定义进行解释和规范的。例如，用户等级可以分为A、B、C三级，但是单纯从A、B、C并不能看出具体的用户等级是怎样的，参考数据可以帮助公司规定A等级用户代表优质用户，B等级用户代表一般用户，C等级用户代表大众用户。参考数据的制定可以参考国际标准、行业标准或公司内部标准。</p></li><li><p>元数据是描述数据的数据，帮助理解、获取、使用数据，分为技术元数据、业务元数据等。</p></li></ul><p>下面举一个例子来看一下这些数据之间的关系。交易数据是一位用户的电费缴费记录，所记录的内容包含用户编号、缴费类型、缴费地点、缴费金额、缴费时间、表号和用电类别信息。</p><p>在数据库中实际存储的都是英文表名与字段名，要想理解字段的具体含义，就需要借助元数据即用户缴费表中的字段、类型和名称等信息，才能正确解读交易数据的中文含义。在这里元数据起到了类似字典的作用。</p><p>对于“用户编号”记录，在用户缴费记录表中只记录了一串数字“8234-00”, 如果我们想知道这个用户的信息，那么需要借助主数据中的用户表，对应的用户编号信息为张三，以及他的身份证号、家庭地址和手机号码等。主数据信息可以认为是用户的基本属性或不易发生变化的数据，并且需要各个系统进行共享的数据信。</p><p>在用户缴费记录表中“用电类别”标记的是&quot;01-居民用电”，如果单纯标记&quot;01”,我们可能很难理解它所代表的是什么类别的用电方式，在这里可以借助参考数据中的用电类别表，就可以明确地知道“01”代表的是居民用电，这就体现出了参考数据的规范性。</p><p>工作人员在做业务汇报时经常需要统计和分析数据，大量的交易数据为分析数据提供了强有力的数据支撑。从用户缴费记录看，可以汇总公司月实收电费余额、年实收电费余额等数据，或者将实收电费余额按照城区维度建立组织编号，方便制定KPI指标等信息。统计分析数据是对交易数据的进一步汇总和加工。</p><h2 id="_13-2-数据建模" tabindex="-1"><a class="header-anchor" href="#_13-2-数据建模" aria-hidden="true">#</a> 13.2 数据建模</h2><h3 id="_13-2-1-数据架构的基本概念" tabindex="-1"><a class="header-anchor" href="#_13-2-1-数据架构的基本概念" aria-hidden="true">#</a> 13.2.1 数据架构的基本概念</h3><p>数据架构是企业架构的组成部分之一。企业架构就像企业的“城市总体规划蓝图”(如图13-3所示)，在它的指导下，各个IT系统的建设得以有序地开展。</p><table><thead><tr><th>架构类型</th><th>描述</th></tr></thead><tbody><tr><td>业务架构</td><td>业务战略、治理、组织和关键业务流程</td></tr></tbody></table><p>数据架构|组织的各类逻辑、物理数据资产，以及数据管理资源的结构，具体包括数据模型、数据关系矩阵和大数据平台架构。 应用架构|描述被部署的单个应用系统、系统之间的交互及它们与组织核心业务流程之间关系的蓝图 技术架构|对于支持业务、数据和应用服务的部署来说，必须具备逻辑软、硬件能，包括IT基础设施、中间件、网络、通信、部署处理和一些标准等</p><p>数据架构在数据治理中处于核心地位，数据模型在数据架构中也处于核心地位，</p><h3 id="_13-2-2数据模型介绍" tabindex="-1"><a class="header-anchor" href="#_13-2-2数据模型介绍" aria-hidden="true">#</a> 13.2.2数据模型介绍</h3><p>什么是数据模型？对于企业来说，数据模型可以在不同层次上进行抽象。在业务层面可以抽象成业务流程模型，在技术层面可以抽象成应用模型和数据模型。数据模型的基本概念如下。</p><p>·建模技术:借助模型来分析、设计应用系统的技术。 ·模型:现实世界中某些事物的一种抽象表示。·抽象:抽取事物的本质特性，忽略事物的其他次要因素。 ·建模:是理解、分析、开发或改造事物原型的一种常用手段，如建筑物蓝图、高楼大厦模型，建筑师利用蓝图、模型对建筑物进行分析和设计，动工前就能有一个完整且清晰的概念，能够据此对建筑物进行评审，尽早发现问题并改进。</p><p>企业拥有自身的价值链，如原材料进货、生产、库存、销售等各个环节都会产生数据。数据之间进行有机的整合，即所说的数据模型。</p><h3 id="_13-2-3数据建模基础" tabindex="-1"><a class="header-anchor" href="#_13-2-3数据建模基础" aria-hidden="true">#</a> 13.2.3数据建模基础</h3><p>在20世纪60年代，针对数据模型提出了道循三范式(3NF)的关系模型，并且广泛应用于在线事务处理(OLTP)。之后在20世纪 80年代，关系模型适应了数据仓库日益增长的需求，并且也实现了用关系模型的方法论指导建设数据仓库。但是用关系模型做数据仓库在计算上比较费时费力，在建模上也比较复杂。在20世纪八九十年代出现了新型结构，也就是所谓的维度模型。维度模型面向数据分析应用进行数据模型开发，更加便捷。在20世纪90年代，技术人员开始对DATA VAULT进行研究，并于1999年左右完成。在2004年，一款敏捷的数据库建模技术Anchor问世，它适用于在结构和内容上随时间变化的信息。</p><p>从数据模型的层次上看，可以分为概念模型、逻辑模型和物理模型3个层次。概念模型(CDM)描述预设范围内的业务需求，逻辑模型(LDM)是详细的业务解决方案，物理模型(PDM)是详细的技术解决方案。在数据建模之前，还有一个必要环节，那就是对数据按照业务属性进行分类，即主题域分类。</p><h3 id="_13-2-4主题域分类" tabindex="-1"><a class="header-anchor" href="#_13-2-4主题域分类" aria-hidden="true">#</a> 13.2.4主题域分类</h3><p>主题域模型处于企业数据模型的顶层，是针对企业关键业务领域业务概念的分类方法和框架。主题域模型主要的参与者是企业中的管理者或高级数据管理者。主题域分类是从业务角度对数据进行划分的，不同行业的主题域是不一样的，甚至每个企业的主题域也不是一样的。主题域分析偏战略的层面，并非数据分析师或数据架构师所关心的工作内容。</p><p>传统行业如银行、制造业、电信、零售等行业，都有比较成熟的主题域划分，如BDWM、FS-LDM、MLDM等。</p><h3 id="_13-2-5概念模型" tabindex="-1"><a class="header-anchor" href="#_13-2-5概念模型" aria-hidden="true">#</a> 13.2.5概念模型</h3><p>概念模型以实体一关系(Entity-Relationship,E-R)理论为基础，通过主题域形式描述概念化的结构。概念模型是一种高阶的数据模型，是对某个主题域内容的细化。</p><p>概念模型描述企业内主要业务的实体及实体间的业务关系。概念模型主要面向业务管理人员，通常需要借助ER图来实现。概念模型最关心实体之间的关系，尽可能地凝聚实体和关系。在概念模型阶段并不需要对实体中的属性进行具体化。</p><h3 id="_13-2-6-逻辑模型" tabindex="-1"><a class="header-anchor" href="#_13-2-6-逻辑模型" aria-hidden="true">#</a> 13.2.6 逻辑模型</h3><p>逻辑模型是对概念模型的进一步细化，通过关键数据属性描述更多的业务细节。逻辑模型描述实体、属性及实体关系，只包含关键数据属性，而不包含全部实体和全部属性。逻辑模型独立于具体技术，是IT人员和业务人员沟通的工具，主要给架构师使用。在设计逻辑模型时要遵循范式的设计概念，以求达到较少的数据冗余，维护数据的完整性和可扩展性。检查数据模型是否符合范式(-般符合三范式)要求，比如每个属性的值唯一，不具有多义性；每个非主属性必须完全依赖整个主键，而非主键的一部分；关系模式中不存在传递依赖。</p><h3 id="_13-2-7物理模型" tabindex="-1"><a class="header-anchor" href="#_13-2-7物理模型" aria-hidden="true">#</a> 13.2.7物理模型</h3><p>模型的落地还需要建立物理模型，一般情况下物理模型是由数据库管理员、数据库工程师具体实施的，主要是将逻辑模型转换成数据库的设计表达，涉及数据库中的表、数据类型、字段长度等信息。物理模型涉及两个层次(如图13-7所示)。 (1)转换模型。创建物理数据库信息，定义和记录数据字典，生成数据库的数据元素和记录，提供上下文环境，提供物理数据库结构。 (2)DBMS模型。DBMS模型记录位于DBMS模式或系统表中的物理数据库对象的定义。通过DBMS模型自动生成这些对象，主键成为唯一索引，候选键和查询项也成为索引。此外，物理模型中的关系基数是通过数据库的参照完整性功能、应用程序逻辑、其他事后监测和修正功能得以实现的。</p><h2 id="_13-4-数据仓库体系和etl" tabindex="-1"><a class="header-anchor" href="#_13-4-数据仓库体系和etl" aria-hidden="true">#</a> 13.4 数据仓库体系和ETL</h2><p>数据仓库是进行数据分析的一个重要工具。在理解数据仓库之前，先介绍两个概念，分别是OLTP系统和OLAP系统。</p><h3 id="oltp和olap" tabindex="-1"><a class="header-anchor" href="#oltp和olap" aria-hidden="true">#</a> OLTP和OLAP</h3><p>OLTP(On-line Transaction Processing)系统，也称为联机事务处理系统、生产系统，它是事件驱动、面向需求的，比如银行的储蓄系统就是一个典型的OLTP系统。OLTP系统在使用过程中积累了大量的数据。关系数据库概念被提出来之后，联机事务处理一直是数据库应用的主流。OLTP系统的特点如下:</p><ul><li>对响应时间要求非常高。</li><li>用户数量庞大，主要是操作人员。</li><li>数据库的各种操作基于索引进行。</li></ul><p>OLAP(On-line Analytical Processing)系统，也称为联机分析处理系统，是基于数据仓库的信息分析处理过程，是<code>数据仓库的用户接口部分</code>，是数据驱动、面向分析的。oLAP系统是跨部门、面向主题的。OLAP系统的特点如下:</p><ul><li>基础数据来源于生产系统的操作数据，也就是说，OLAP系统的数据来源于OLTP系统。</li><li>系统的响应时间合理。</li><li>用户数量相对较少，其用户主要是业务决策人员与管理人员。</li></ul><h3 id="数据仓库的特征" tabindex="-1"><a class="header-anchor" href="#数据仓库的特征" aria-hidden="true">#</a> 数据仓库的特征</h3><p>可以将数据仓库简单地理解为把数据整合之后再进行数据加工，提供给数据集市进行数据分析应用。</p><p>数据仓库的数据来源于源系统，也就是业务系统。之后通过提取到数据仓库的模型层进行数据整合。如，以银行业系统为例，一家银行的业务系统数目是非常多的，即使是中小型银行也可能有二三百个业务系统，这些数据散落在各个系统中。对于数据分析人员来说，需要借助数据仓库进行生产数据的整合，比如要实现风控模型，需要访问众多与风险相关的业务系统中的数据。</p><p>数据仓库的特征主要包含4部分，分别是面向主题、数据集成、数据相对稳定和数据随时间变化。</p><ul><li><p><code>面向主题</code>: 主要是指用户在使用数据仓库进行决策时所关心的重点方面，如用户、产品、账务、事件、服务使用、资源、用户服务、地域等。数据仓库内的信息是按主题进行组织的，而不是像业务支撑系统那样按业务功能进行组织的。</p></li><li><p><code>数据集成</code>: 是指数据仓库中的信息不是从各个业务系统中简单提取出来的，而是经过一系列加工、整理和汇总，消除源数据中的不一致性，因此数据仓库中的信息是关于整个企业的一致的全局信息。各个业务系统可能由不同的厂家独立承建，它们的数据模型设计、编码规则等都是不同的，这些数据被加载到数据仓库之后，需要进行加工转换。如，两个不同的厂商分别是CRM系统和BOsS系统，CRM系统中对性别编码的规定是0表示男、1表示女和2表示其他，而在BOss系统中性别编码的规定是M表示男、F表示女、O表示其他。在映射到数据仓库时会按照不同的映射规则，对不同原系统中的数据编码进行转换，最终形成统一的标准，如在数据仓库中整合出1表示男、2表示女、3表示其他的数据规则。</p></li><li><p><code>数据相对稳定</code>: 是指一旦某个数据进入数据仓库后，一般很少进行修改，更多的是对信息进行查询操作，通常只进行定期的加载和刷新。在数据仓库中几乎很少对历史数据进行修改，如某年6月2日用户停单，那么在“天”这个粒度上的数据就是本日最终停单的状态，而在业务系统中，它总是最新的状态，所以业务系统中的数据总是不断变化的。</p></li><li><p><code>数据随时间变化</code>: 指数据仓库在集成数据时一般使用拉链表的形式，所有的拉链表要求每个数据在进入数据仓库时都保留一个时间戳。如，前一天的数据当日再进入数据仓库时，前一天和当天都会保留一份数据，也就是按照时间点保留多个副本。这样做的好处是保证了数据在不同时间点的情况，留痕数据可能发生变化。</p></li></ul><h2 id="数据集市和多维分析" tabindex="-1"><a class="header-anchor" href="#数据集市和多维分析" aria-hidden="true">#</a> 数据集市和多维分析</h2><p>当准备进行数据分析时，通常是利用数据集市来完成的，因为数据仓库受到各项权限的制约，很多情况下数据分析师并不方便直接接触业务系统的数据，而是依赖数据集市的加工处理。那么数据集市和数据仓库之间有什么关系呢？业务数据模型在实际运营过程中会采集大量的数据，通过ETL集成到数据仓库，企业级的数据仓库会把企业的各个系统数据都集成在一起。这其中又需要一些指标要素对数据进行度量。指标要素的建立其实就是在确认维度，因此需要建立维度模型。那么如何建立维度模型呢？从数据仓库ER模型中提取数据建立大宽表。数据集市是按照不同的业务需求对数据仓库中的数据进行进一步提取和整合的，例如财务报表数据集市、中介绩效分析数据集市、健康险盈利性管理数据集市等。</p><p>现代多维分析系统一般以数据仓库为基础，即从数据仓库中提取详细数据的一个子集并经过必要的聚集存储到数据立方体存储器。数据立方体存储器中每个小方格里的数据就是所需的度量指标。</p><p>数据立方体的建立为数据分析提供很多便利，我们在进行数据分析时，可以利用数据立方体进行向上钻取或向下钻取。向上钻取为向上级进行数据汇总，向下钻取是从上级向下展开细节。</p><p>无论是从原系统到数据仓库，还是从数据仓库到数据集市，都使用ETL实现数据的集成和提取。那么什么是ETL呢？ ETL是数据提取(Extract)、清洗(Cleansing)、转换(Transform)、加载(Load)的过程。ETL起到十分关键的作用，它主要用于解决以下几类问题。</p><ol><li>在多数据源多字符集环境下如何整合数据。</li><li>如何统一多种统计口径。</li><li>如何将严格范式结构转换为星型或雪花型模型。</li><li>如何做到增量提取。</li><li>如何妥善管理开发过程中的元数据。</li><li>如何处理脏数据。</li><li>如何管理复杂的数据交换。</li></ol><h3 id="etl" tabindex="-1"><a class="header-anchor" href="#etl" aria-hidden="true">#</a> ETL</h3><p>ETL从数据源提取所需的数据，经过数据清洗、转换，最终按照预先定义好的数据仓库模型，将数据加载到数据仓库中。</p><ul><li>ETL的提取是建立在针对有效数据进行提取的前提下，原系统中与业务有关的重要数据会进入数据仓库，而系统本身的一些运维信息等非业务相关数据将不会进入数据仓库。</li><li>数据被提取后会进行统一标准的转换，这里面也涉及数据清洗的环节。</li><li>完成数据的整合和清洗后就要加载到数据仓库。强调加载的意义在于数据仓库中的数据模型和原系统中的数据模型并不是一样的。因此，数据被加载到数据仓库中需要按照某个特定的数据需求才能完成加载，并不是单纯地将数据随意地存储到数据仓库中。</li></ul>',63),r=[d];function p(t,n){return i(),e("div",null,r)}const s=a(h,[["render",p],["__file","13数据模型管理.html.vue"]]);export{s as default};
