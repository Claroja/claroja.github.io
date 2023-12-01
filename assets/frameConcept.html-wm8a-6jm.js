import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as t,e as o}from"./app-MTzDpLgJ.js";const r="/assets/3-FqIgUJGq.png",i="/assets/1-W05civRB.svg",n="/assets/2-qDtzWbcA.svg",l={},s=o('<h1 id="frameconcept" tabindex="-1"><a class="header-anchor" href="#frameconcept" aria-hidden="true">#</a> frameConcept</h1><h2 id="parallelism" tabindex="-1"><a class="header-anchor" href="#parallelism" aria-hidden="true">#</a> parallelism</h2><p>parallelism 并行度 每个operator都可以进行并行计算 <code>env.setParallelism()</code> 对application进行并行度设置，优先级中 <code>dataStream.setParallelism()</code> 对算子进行并行度设置，优先级最高 <code>conf/flink.yaml,parallelism.default:1</code> 提交任务时设置</p><figure><img src="'+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="dataflow-dag" tabindex="-1"><a class="header-anchor" href="#dataflow-dag" aria-hidden="true">#</a> dataflow dag</h2><p>one-to-one(forwarding): map,filter,flatMap one-to-many(redistributing,shuffle):keyby 在 one-to-one中 通过本地转发(local forward)方式进行连接成一个task，比如map-&gt;map两个算子。 <img src="'+i+'" alt="" loading="lazy"></p><p>Every Flink application needs an execution environment, env in this example. <img src="'+n+'" alt="" loading="lazy"></p><p>FlinkMaster：集群服务器，一台物理机 TaskManager: 一个进程 TaskSlot: 一个线程，CPU的一个核心</p><p>refs: https://nightlies.apache.org/flink/flink-docs-release-1.15/docs/learn-flink/overview/</p>',9),c=[s];function d(p,f){return e(),t("div",null,c)}const g=a(l,[["render",d],["__file","frameConcept.html.vue"]]);export{g as default};
