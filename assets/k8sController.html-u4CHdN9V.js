const e=JSON.parse('{"key":"v-cebc1670","path":"/%E7%BC%96%E7%A8%8B%E5%9F%BA%E7%A1%80/Docker/kebernetes/k8sController.html","title":"process_pool","lang":"zh-CN","frontmatter":{"description":"process_pool controller 管理pod的中间层, 只需操作controller我们需要怎样的pod, 它就会自动创建并帮忙维护, 比如出现故障会进行重启 ReplicaSet: 指定数量, 数量变更, 镜像版本变更 Deployment: 继承ReplicaSet, 并多加滚动升级和版本回退 Horizontal Pod Autoscaler: 根据负载自动扩容 DaemonSet: 在指定Node运行一个副本, 用于守护进程 Job: 完成任务立即退出, 用于执行一次性任务 Cronjob: 周期性执行 StatefulSet: 有状态应用","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E7%BC%96%E7%A8%8B%E5%9F%BA%E7%A1%80/Docker/kebernetes/k8sController.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"process_pool"}],["meta",{"property":"og:description","content":"process_pool controller 管理pod的中间层, 只需操作controller我们需要怎样的pod, 它就会自动创建并帮忙维护, 比如出现故障会进行重启 ReplicaSet: 指定数量, 数量变更, 镜像版本变更 Deployment: 继承ReplicaSet, 并多加滚动升级和版本回退 Horizontal Pod Autoscaler: 根据负载自动扩容 DaemonSet: 在指定Node运行一个副本, 用于守护进程 Job: 完成任务立即退出, 用于执行一次性任务 Cronjob: 周期性执行 StatefulSet: 有状态应用"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-25T13:46:58.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2023-11-25T13:46:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"process_pool\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-25T13:46:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"controller","slug":"controller","link":"#controller","children":[{"level":3,"title":"ReplicaSet(RS)","slug":"replicaset-rs","link":"#replicaset-rs","children":[]},{"level":3,"title":"Deployment","slug":"deployment","link":"#deployment","children":[]},{"level":3,"title":"Horizontal Pod Autoscaler(HPA)","slug":"horizontal-pod-autoscaler-hpa","link":"#horizontal-pod-autoscaler-hpa","children":[]},{"level":3,"title":"DaemonSet","slug":"daemonset","link":"#daemonset","children":[]},{"level":3,"title":"StatefulSets","slug":"statefulsets","link":"#statefulsets","children":[]}]}],"git":{"createdTime":1700920018000,"updatedTime":1700920018000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":3.61,"words":1082},"filePathRelative":"编程基础/Docker/kebernetes/k8sController.md","localizedDate":"2023年11月25日","excerpt":"<h1> process_pool</h1>\\n<h2> controller</h2>\\n<p>管理pod的中间层, 只需操作controller我们需要怎样的pod, 它就会自动创建并帮忙维护, 比如出现故障会进行重启</p>\\n<ul>\\n<li>ReplicaSet: 指定数量, 数量变更, 镜像版本变更</li>\\n<li>Deployment: 继承ReplicaSet, 并多加滚动升级和版本回退</li>\\n<li>Horizontal Pod Autoscaler: 根据负载自动扩容</li>\\n<li>DaemonSet: 在指定Node运行一个副本, 用于守护进程</li>\\n<li>Job: 完成任务立即退出, 用于执行一次性任务</li>\\n<li>Cronjob: 周期性执行</li>\\n<li>StatefulSet: 有状态应用</li>\\n</ul>","copyright":{"author":"王新宇"},"autoDesc":true}');export{e as data};
