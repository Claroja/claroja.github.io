import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as d,c as e,a as o}from"./app-9tftCahk.js";const a={},i=o('<h1 id="condition" tabindex="-1"><a class="header-anchor" href="#condition" aria-hidden="true">#</a> condition</h1><h2 id="condition-objects" tabindex="-1"><a class="header-anchor" href="#condition-objects" aria-hidden="true">#</a> Condition Objects</h2><p>condition variable也是一种Lock. <code>wait()</code>方法释放锁, 然后block自己, 直到另外一个thread使用<code>notify()</code>来唤醒. 唤醒后和普通线程一样, 继续竞争锁.</p><h3 id="构造方法" tabindex="-1"><a class="header-anchor" href="#构造方法" aria-hidden="true">#</a> 构造方法</h3><p><code>class threading.Condition(lock=None)</code>是一个factory function, lock参数可以传入Lock对象或者RLock对象, 作为底层的锁对象.</p><h3 id="对象方法" tabindex="-1"><a class="header-anchor" href="#对象方法" aria-hidden="true">#</a> 对象方法</h3><table><thead><tr><th>方法</th><th>描述</th></tr></thead><tbody><tr><td>acquire(*args)</td><td>获得底层锁</td></tr><tr><td>release()</td><td>释放底层锁</td></tr><tr><td>wait(timeout=None)</td><td>释放底层锁, 并且被阻塞(进入等候室), 直到其他thread调用<code>notify()</code>方法来唤醒</td></tr><tr><td>wait_for(predicate, timeout=None)</td><td>等待直到条件计算为 True，predicate 是一个可调用对象且它的返回值可被解释为一个布尔值。</td></tr><tr><td>notify(n=1)</td><td>唤醒一个等待该condition instance的thread</td></tr><tr><td>notify_all()</td><td>唤醒所有等待该condition instance的thread</td></tr></tbody></table>',7),n=[i];function r(c,h){return d(),e("div",null,n)}const f=t(a,[["render",r],["__file","condition.html.vue"]]);export{f as default};
