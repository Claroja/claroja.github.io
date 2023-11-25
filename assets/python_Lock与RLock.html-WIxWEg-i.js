import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as o,d as a}from"./app-j3zK2x6_.js";const d={},r=a('<h1 id="lock与rlock" tabindex="-1"><a class="header-anchor" href="#lock与rlock" aria-hidden="true">#</a> Lock与RLock</h1><h2 id="lock-objects" tabindex="-1"><a class="header-anchor" href="#lock-objects" aria-hidden="true">#</a> Lock Objects</h2><p>基础的lock只有两个状态&quot;locked&quot;和&quot;unlocked&quot;. 创建的时候是&quot;unlocked&quot;状态, 它有两个基本的方法&quot;acquire()&quot;和&quot;release()&quot;. &quot;acquire()&quot;将&quot;unlocked&quot;状态转换为&quot;locked&quot;状态,&quot;release()&quot;将&quot;locked&quot;状态转换为&quot;unlocked&quot;状态.</p><h3 id="构造方法" tabindex="-1"><a class="header-anchor" href="#构造方法" aria-hidden="true">#</a> 构造方法</h3><p><code>class threading.Lock</code>是一个factory function, 返回 instance of Lock class</p><h3 id="对象方法" tabindex="-1"><a class="header-anchor" href="#对象方法" aria-hidden="true">#</a> 对象方法</h3><table><thead><tr><th>方法</th><th>描述</th></tr></thead><tbody><tr><td>acquire(blocking=True, timeout=- 1)</td><td>获得锁</td></tr><tr><td>release()</td><td>释放锁</td></tr><tr><td>locked()</td><td>如果已经上锁 ,则返回true</td></tr><tr><td>参数描述:</td><td></td></tr><tr><td>blocking:它是一個可選參數，用作阻塞標誌。如果設置為 True，調用線程將在其他線程持有該標誌時被阻塞，一旦該鎖被釋放，調用線程將獲取該鎖並返回 True。如果設置為 False，則如果其他線程已獲取鎖，則不會阻塞該線程，並返回 False。其默認值為 True。</td><td></td></tr><tr><td>timeout:它是一個可選參數，它指定如果其他方法當前正在獲取鎖，調用線程將被阻塞的秒數。它的默認值是 -1，表示線程將被無限期阻塞，直到它獲得鎖。</td><td></td></tr></tbody></table><h2 id="rlock-objects" tabindex="-1"><a class="header-anchor" href="#rlock-objects" aria-hidden="true">#</a> RLock Objects</h2><p>reentrant lock可以被同一个thread多次上锁.一个线程获得了reentrant lock, 它可以在不阻塞的情况下再获得一个锁.上锁和释放锁的操作要成对出现.</p><h3 id="构造方法-1" tabindex="-1"><a class="header-anchor" href="#构造方法-1" aria-hidden="true">#</a> 构造方法</h3><p><code>class threading.RLock</code>是一个factory function, 返回 instance of RLock class</p><h3 id="对象方法-1" tabindex="-1"><a class="header-anchor" href="#对象方法-1" aria-hidden="true">#</a> 对象方法</h3><table><thead><tr><th>方法</th><th>描述</th></tr></thead><tbody><tr><td>acquire(blocking=True, timeout=- 1)</td><td>获得锁</td></tr><tr><td>release()</td><td>释放锁</td></tr></tbody></table>',13),c=[r];function h(n,i){return e(),o("div",null,c)}const s=t(d,[["render",h],["__file","python_Lock与RLock.html.vue"]]);export{s as default};
