import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as t,c as i,e as a}from"./app-0JgdiRQ-.js";const l={},r=a('<h1 id="支付结算法律制度" tabindex="-1"><a class="header-anchor" href="#支付结算法律制度" aria-hidden="true">#</a> 支付结算法律制度</h1><h2 id="aqs" tabindex="-1"><a class="header-anchor" href="#aqs" aria-hidden="true">#</a> AQS</h2><p>AbstractQueuedSynchronizer，是阻塞式锁和相关的同步器工具的框架</p><ul><li>用state属性来表示资源的状态（分独占模式和共享模式）），子类需要定义如何维护这个状态，控制如何获取锁和释放锁 <ul><li>getState - 获取 state 状态</li><li>setState - 设置 state 状态</li><li>compareAndSetState - cas 机制设置 state 状态</li><li>独占模式是只有一个线程能够访问资源，而共享模式可以允许多个线程访问资源</li></ul></li><li>提供了基于 FIFO 的等待队列，类似于 Monitor 的 EntryList</li><li>条件变量来实现等待、唤醒机制，支持多个条件变量，类似于 Monitor 的 WaitSet 子类主要实现这样一些方法（默认抛出 UnsupportedOperationException）</li><li>tryAcquire</li><li>tryRelease</li><li>tryAcquireShared</li><li>tryReleaseShared</li><li>isHeldExclusively</li></ul>',4),s=[r];function c(o,n){return t(),i("div",null,s)}const u=e(l,[["render",c],["__file","JavaJUC.html.vue"]]);export{u as default};
