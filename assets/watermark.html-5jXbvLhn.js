import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as n}from"./app-MTzDpLgJ.js";const t="/assets/1-aeGYQ2Zz.png",i="/assets/2-TcNVbBwN.png",o="/assets/3-T0-Fb_rN.png",l="/assets/4-Htw3Ybww.png",r="/assets/5-4GvWovQK.png",p={},d=n('<h1 id="watermark" tabindex="-1"><a class="header-anchor" href="#watermark" aria-hidden="true">#</a> watermark</h1><h2 id="summary" tabindex="-1"><a class="header-anchor" href="#summary" aria-hidden="true">#</a> summary</h2><ol><li>watermark will go up with the system_time going up with the event streaming in.</li><li>in window point of view,window_length(end_time-start_time) = window_original_length + the delay(comes from watermark setting) + allowed_lateness</li></ol><h2 id="messages-arrive-without-delay" tabindex="-1"><a class="header-anchor" href="#messages-arrive-without-delay" aria-hidden="true">#</a> Messages arrive without delay</h2><p>Suppose the source generated three messages of the type a at times 13th second, 13th second and 16th second respectively. <img src="'+t+'" alt="" loading="lazy"> We will create a SlidingWindow of size 10 seconds which slides every 5 seconds and at the end of the window. These messages will fall into the windows as follows. The first two messages that were generated at 13th sec will fall into both window1(5s-15s) and window2(10s-20s) and the third message generated at 16th second will fall into window2(10s-20s) and window3(15s-25s). The final counts emitted by each window will be (a,2), (a,3) and (a,1) respectively. <img src="'+i+'" alt="" loading="lazy"></p><h2 id="messages-arrive-in-delay" tabindex="-1"><a class="header-anchor" href="#messages-arrive-in-delay" aria-hidden="true">#</a> Messages arrive in delay</h2><p>Now suppose one of the messages (generated at 13th second) arrived at a delay of 6 seconds(at 19th second), may be due to some network congestion. <img src="'+o+`" alt="" loading="lazy"> The delayed message fell into window 2 and 3, since 19 is within the range 10-20 and 15-25. It did not cause any problem to the calculation in window2 (because the message was anyways supposed to fall into that window) but it affected the result of window1 and window3. We will now try to fix this problem by using EventTime processing.</p><h2 id="eventtime-based-system" tabindex="-1"><a class="header-anchor" href="#eventtime-based-system" aria-hidden="true">#</a> EventTime based system</h2><p>To enable EventTime processing, we need a timestamp extractor that extracts the event time information from the message.</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">TimestampExtractor</span> <span class="token keyword">extends</span> <span class="token class-name">AssignerWithPeriodicWatermarks</span><span class="token punctuation">[</span><span class="token class-name">String</span><span class="token punctuation">]</span> <span class="token keyword">with</span> <span class="token class-name">Serializable</span> <span class="token punctuation">{</span>
  override def <span class="token function">extractTimestamp</span><span class="token punctuation">(</span>e<span class="token operator">:</span> <span class="token class-name">String</span><span class="token punctuation">,</span> prevElementTimestamp<span class="token operator">:</span> <span class="token class-name">Long</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    e<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;,&quot;</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>toLong 
  <span class="token punctuation">}</span>
  override def <span class="token function">getCurrentWatermark</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token class-name">Watermark</span> <span class="token operator">=</span> <span class="token punctuation">{</span> 
      <span class="token keyword">new</span> <span class="token class-name">Watermark</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>currentTimeMillis<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The result of running the above code is shown in the diagram below. <img src="`+l+`" alt="" loading="lazy"></p><p>The results look better, the windows 2 and 3 now emitted correct result, but window1 is still wrong. Flink did not assign the delayed message to window 3 because it now checked the message’s event time and understood that it did not fall in that window. But why didn’t it assign the message to window 1?. The reason is that by the time the delayed message reached the system(at 19th second), the evaluation of window 1 has already finished (at 15th second). Let us now try to fix this issue by using the Watermark.</p><h2 id="watermarks" tabindex="-1"><a class="header-anchor" href="#watermarks" aria-hidden="true">#</a> Watermarks</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">TimestampExtractor</span> <span class="token keyword">extends</span> <span class="token class-name">AssignerWithPeriodicWatermarks</span><span class="token punctuation">[</span><span class="token class-name">String</span><span class="token punctuation">]</span> <span class="token keyword">with</span> <span class="token class-name">Serializable</span> <span class="token punctuation">{</span>
  override def <span class="token function">extractTimestamp</span><span class="token punctuation">(</span>e<span class="token operator">:</span> <span class="token class-name">String</span><span class="token punctuation">,</span> prevElementTimestamp<span class="token operator">:</span> <span class="token class-name">Long</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    e<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;,&quot;</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>toLong 
  <span class="token punctuation">}</span>
override def <span class="token function">getCurrentWatermark</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token class-name">Watermark</span> <span class="token operator">=</span> <span class="token punctuation">{</span> 
      <span class="token keyword">new</span> <span class="token class-name">Watermark</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>currentTimeMillis <span class="token operator">-</span> <span class="token number">5000</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+r+'" alt="" loading="lazy"> Finally we have the correct result, all the three windows now emit counts as expected - which is (a,2), (a,3) and (a,1).</p><p>Watermark is a timestamp.There are three time:</p><ol><li>window_start_time: when the first event(event_time &gt; window_start_time) arrive, it created.</li><li>window_end_time: when the first event(wvent_time &gt; window_end_time) arrive, it destroyed.</li><li>water_mark: the system_current_time(defined by the streaming_event time) minus delay.</li></ol><p>as the code before, the delay is 5 seconds. for example: as showed before, we have three event: <code>a</code> at times 13th second, 13th second and 16th second respectively and one of the messages (generated at 13th second) arrived at a delay of 6 seconds(at 19th second).</p><table><thead><tr><th>event</th><th>event_time</th><th>process_time</th></tr></thead><tbody><tr><td>a_1</td><td>13s</td><td>13s</td></tr><tr><td>a_2</td><td>13s</td><td>19s</td></tr><tr><td>a_3</td><td>16s</td><td>16s</td></tr></tbody></table><p>When a_1 arrive, the system_time update to 13s(equal to a1&#39;s event_time). Because the system_time &gt; window1_start_time, window1 create, and so a1 run into window1. When a_3 arrive, the system_time update to 16s(equal to a2&#39;s event_time). a_3 event_time &gt; window1_end_time, so a2 don&#39;t run into window2.Although now the system_time &gt; window1_end_time(16s &gt; 15s), but we also have the delay 5s, hints system_time - delay &lt; window1_end_time, so window1 is not destroyed. when a_2 arrive, the system_time is still 16s, because a2&#39;s event_time is 13s, &lt; system_time. so a_2 run into a1. suppose, there is an event a4(event_time=21s), when it arrived, the system_time update to 21s. Because system_time - delay &gt; window1_end_time, so window1 is destroyed.</p><p>the window would not be destroyed until the watermark(system_time - delay) past the window_end_time. this is why it is called <code>watermark</code>, image that the system_time is continuos go up with the event streaming in.it would paste the window at the some time.</p><h2 id="lateness" tabindex="-1"><a class="header-anchor" href="#lateness" aria-hidden="true">#</a> Lateness</h2><p>为了避免在设置了WaterMaker后，仍有些迟到的数据被删除，因此产生了allowedLateness，通过使用allowedLateness来延迟销毁窗口，允许有一段时间（也是以event time来衡量）来等待之前的数据到达，以便再次处理这些数据!</p><h2 id="flink-time" tabindex="-1"><a class="header-anchor" href="#flink-time" aria-hidden="true">#</a> flink time</h2><ul><li><strong>Event Time</strong> 是事件在现实世界中发生的时间，它通常由事件中的时间戳描述。</li><li><strong>Ingestion Time</strong> 是数据进入Apache Flink流处理系统的时间，也就是Flink读取数据源时间。</li><li><strong>Processing Time</strong> 是数据流入到具体某个算子 (消息被计算处理) 时候相应的系统时间。</li></ul><p>有1~10个事件。乱序到达的序列(Processing Time)是：1,2,4,5,6,3,8,9,10,7经过按Event Time处理后的序列是：1,2,3,4,5,6,7,8,9,10</p><h2 id="窗口生命周期" tabindex="-1"><a class="header-anchor" href="#窗口生命周期" aria-hidden="true">#</a> 窗口生命周期</h2><p>一旦应属于该窗口的第一个元素到达，就会创建一个窗口，并且当时间（事件时间、处理时间、摄入时间）超过其结束时间戳（end-of-time）（如果设置了WaterMaker，WaterMaker触发窗口执行后）且计算逻辑执行后 ，该窗口将被完全删除，Flink只会删除基于时间的窗口。</p><h2 id="迟到事件" tabindex="-1"><a class="header-anchor" href="#迟到事件" aria-hidden="true">#</a> 迟到事件</h2><p>迟到事件出现时窗口已经关闭并产出了计算结果，因此处理的方法有3种：</p><ul><li>Allowed Lateness: Flink 会在窗口关闭后一直保存窗口的状态直至超过允许迟到时长，这期间的迟到事件不会被丢弃，而是默认会触发窗口重新计算。</li><li>Side Output: 机制可以将迟到事件单独放入一个数据流分支，这会作为 window 计算结果的副产品，以便用户获取并对其进行特殊处理。</li><li>将迟到事件视为错误消息并丢弃。</li></ul><p>refs: http://vishnuviswanath.com/flink_eventtime.html https://nightlies.apache.org/flink/flink-docs-release-1.15/docs/concepts/time/ https://www.cnblogs.com/rossiXYZ/p/12286407.html https://nightlies.apache.org/flink/flink-docs-release-1.15/docs/concepts/time/ https://stackoverflow.com/questions/51512618/why-does-apache-flink-need-watermarks-for-event-time-processing/51516225#51516225 https://blog.csdn.net/leilei1366615/article/details/117382112</p>',32),c=[d];function m(h,u){return s(),a("div",null,c)}const v=e(p,[["render",m],["__file","watermark.html.vue"]]);export{v as default};
