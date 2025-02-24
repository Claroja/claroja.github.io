const e=JSON.parse('{"key":"v-3ee5382e","path":"/4%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/4java/Synchronized/JavaCAS.html","title":"支付结算法律制度","lang":"zh-CN","frontmatter":{"description":"支付结算法律制度 CAS compareAndSet(CAS)必须借助volatile才能读取到共享变量的最新值来实现【比较并交换】的效果. 注意:volatile 仅仅保证了共享变量的可见性，让其它线程能够看到最新值，但不能解决指令交错问题（不能保证原 子性） CAS是基于乐观锁的思想：最乐观的估计，不怕别的线程来修改共享变量，就算改了也没关系，我多尝试, 总会有没改的情况. synchronized是基于悲观锁的思想：最悲观的估计，得防着其它线程来修改共享变量, 我用完, 其他线程才可以使用 CAS 体现的是无锁并发、无阻塞并发: 因为没有使用 synchronized，所以线程不会陷入阻塞，这是效率提升的因素之一.(synchronized 会让线程在没有获得锁的时候，发生上下文切换，进入阻塞。) 但如果竞争激烈，可以想到重试必然频繁发生，反而效率会受影响, 适用于线程数少、多核 CPU 的场景下。(多线程,单核由于竞争不到CPU,也会发生阻塞和上下文切换)","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/4%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/4java/Synchronized/JavaCAS.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"支付结算法律制度"}],["meta",{"property":"og:description","content":"支付结算法律制度 CAS compareAndSet(CAS)必须借助volatile才能读取到共享变量的最新值来实现【比较并交换】的效果. 注意:volatile 仅仅保证了共享变量的可见性，让其它线程能够看到最新值，但不能解决指令交错问题（不能保证原 子性） CAS是基于乐观锁的思想：最乐观的估计，不怕别的线程来修改共享变量，就算改了也没关系，我多尝试, 总会有没改的情况. synchronized是基于悲观锁的思想：最悲观的估计，得防着其它线程来修改共享变量, 我用完, 其他线程才可以使用 CAS 体现的是无锁并发、无阻塞并发: 因为没有使用 synchronized，所以线程不会陷入阻塞，这是效率提升的因素之一.(synchronized 会让线程在没有获得锁的时候，发生上下文切换，进入阻塞。) 但如果竞争激烈，可以想到重试必然频繁发生，反而效率会受影响, 适用于线程数少、多核 CPU 的场景下。(多线程,单核由于竞争不到CPU,也会发生阻塞和上下文切换)"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-24T12:46:58.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-24T12:46:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"支付结算法律制度\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-24T12:46:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"CAS","slug":"cas","link":"#cas","children":[]},{"level":2,"title":"原子整数","slug":"原子整数","link":"#原子整数","children":[]},{"level":2,"title":"原子引用","slug":"原子引用","link":"#原子引用","children":[]},{"level":2,"title":"原子数组","slug":"原子数组","link":"#原子数组","children":[]},{"level":2,"title":"字段更新器","slug":"字段更新器","link":"#字段更新器","children":[]},{"level":2,"title":"原子累加器","slug":"原子累加器","link":"#原子累加器","children":[]},{"level":2,"title":"usafe","slug":"usafe","link":"#usafe","children":[]}],"git":{"createdTime":1740401218000,"updatedTime":1740401218000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":4.89,"words":1467},"filePathRelative":"4编程语言/4java/Synchronized/JavaCAS.md","localizedDate":"2025年2月24日","excerpt":"<h1> 支付结算法律制度</h1>\\n<h2> CAS</h2>\\n<p>compareAndSet(CAS)必须借助volatile才能读取到共享变量的最新值来实现【比较并交换】的效果.\\n注意:volatile 仅仅保证了共享变量的可见性，让其它线程能够看到最新值，但不能解决指令交错问题（不能保证原\\n子性）\\nCAS是基于乐观锁的思想：最乐观的估计，不怕别的线程来修改共享变量，就算改了也没关系，我多尝试, 总会有没改的情况.\\nsynchronized是基于悲观锁的思想：最悲观的估计，得防着其它线程来修改共享变量, 我用完, 其他线程才可以使用\\nCAS 体现的是无锁并发、无阻塞并发:</p>\\n<ul>\\n<li>因为没有使用 synchronized，所以线程不会陷入阻塞，这是效率提升的因素之一.(synchronized 会让线程在没有获得锁的时候，发生上下文切换，进入阻塞。)</li>\\n<li>但如果竞争激烈，可以想到重试必然频繁发生，反而效率会受影响, 适用于线程数少、多核 CPU 的场景下。(多线程,单核由于竞争不到CPU,也会发生阻塞和上下文切换)</li>\\n</ul>","copyright":{"author":"王新宇"},"autoDesc":true}');export{e as data};
