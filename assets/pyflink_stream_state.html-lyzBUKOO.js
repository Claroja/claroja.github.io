import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as e,d as s}from"./app-j3zK2x6_.js";const r="/assets/1-A3wvnqdh.png",n="/assets/2-RvzmpMYj.png",i={},o=s('<h1 id="stream-state" tabindex="-1"><a class="header-anchor" href="#stream-state" aria-hidden="true">#</a> stream_state</h1><p>Flink 处理机制的核心，就是“有状态的流式计算”</p><h3 id="有状态算子" tabindex="-1"><a class="header-anchor" href="#有状态算子" aria-hidden="true">#</a> 有状态算子</h3><p>无状态的算子任务只需要观察每个独立事件，根据当前输入的数据直接转换输出结果，如 map、filter、flatMap，如下图所示： <img src="'+r+'" alt="" loading="lazy"></p><p>而有状态的算子任务，则除当前数据之外，还需要一些状态（state）来得到计算结果。聚合算子、窗口算子都属于有状态的算子。如下图： <img src="'+n+'" alt="" loading="lazy"></p><p>（1）算子任务接收到上游发来的数据； （2）获取当前状态； （3）根据业务逻辑进行计算，更新状态； （4）得到计算结果，输出发送到下游任务。</p><p>refs: https://nightlies.apache.org/flink/flink-docs-master/docs/dev/datastream/fault-tolerance/state/</p>',7),c=[o];function l(p,d){return a(),e("div",null,c)}const m=t(i,[["render",l],["__file","pyflink_stream_state.html.vue"]]);export{m as default};
