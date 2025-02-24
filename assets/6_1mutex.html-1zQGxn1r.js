import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as r,e as d}from"./app-A10JnHE0.js";const _={},o=d("<p>线程同步:按预定的先后次序运行</p><p><code>int pthread_mutex_init(pthread_mutex_t *restrict mutex, const pthread_mutexattr_t *restrict attr);</code> 参1：传出参数，调用时应传 &amp;mutex restrict关键字：所有修改该指针指向内存中内容的操作，只能通过本指针完成。 参2：互斥量属性。是一个传入参数，通常传NULL，选用默认属性(线程间共享)。</p><p>可以静态初始化: <code>pthead_mutex_t muetx = PTHREAD_MUTEX_INITIALIZER;</code> 也可以动态初始化: <code>pthread_mutex_init(&amp;mutex, NULL)</code></p><p>互斥量</p><table><thead><tr><th>函数</th><th>描述</th></tr></thead><tbody><tr><td>pthread_mutex_lock</td><td>加锁(阻塞,如果有锁就等待)</td></tr><tr><td>pthread_mutex_trylock</td><td>尝试加锁(非阻塞,如果有锁返回错误)</td></tr><tr><td>pthread_mutex_unlock</td><td>解锁</td></tr></tbody></table><p>pthread_mutex_destroy</p><p>互斥量使用步骤: 1.初始化 2.加锁 3.执行逻辑(操作共享数据,只在共享数据方面加锁,最小力度) 4.解锁</p><p>死锁 交叉锁:如果需要两把锁,每个线程获取锁的顺序要固定,或者如果第一把锁成功,第二把锁失败的话,则及时释放第一把锁</p>",8),c=[o];function p(a,m){return e(),r("div",null,c)}const s=t(_,[["render",p],["__file","6_1mutex.html.vue"]]);export{s as default};
