import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o,c as t,e as n}from"./app-jdLxCr9I.js";const s={},r=n('<h1 id="window" tabindex="-1"><a class="header-anchor" href="#window" aria-hidden="true">#</a> window</h1><p>比如 是因为我们想看到过去一分钟，过去半小时的访问数据，这时候我们就需要窗口。</p><p><strong>Window</strong>: Windows将无界流拆分为一个个有限大小的buckets，然后在每一个buckets中进行计算。 <strong>(start_time,end_time]</strong>：当创建Window时间窗口的时，每个window都会有一个开始时间和结束时间（前开后闭），这个时间是系统时间。</p><p><strong>窗口生命周期</strong>, 只要属于此窗口的第一个元素到达，就会创建一个窗口，当时间（事件或处理时间）超过其结束时间戳加上用户指定的允许延迟时，窗口将被完全删除。例如：使用基于事件时间的窗口策略，每5分钟创建一个不重叠（或翻滚）的窗口并允许延迟1分钟。假定目前是12:00。当具有落入该间隔的时间戳的第一个元素到达时，Flink将为12:00到12:05之间的间隔创建一个新窗口，当水位线（watermark）到12:06时间戳时将删除它。</p><p><strong>Keyed vs Non-Keyed Windows</strong> 在定义窗口之前,可以使用<code>keyBy</code>将无界流分成逻辑的keyed stream。 对于Keyed流，拥有Keyed stream将允许窗口计算由多个任务并行执行，相同Key的所有元素将被发送到同一个任务。 在Non-Keyed流的情况下，原始流将不会被分成多个逻辑流，并且所有窗口逻辑将由单个任务执行。</p><p>refs: https://www.cnblogs.com/rossiXYZ/p/12286407.html</p>',6),d=[r];function i(c,a){return o(),t("div",null,d)}const p=e(s,[["render",i],["__file","window.html.vue"]]);export{p as default};
