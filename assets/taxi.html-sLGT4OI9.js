const e=JSON.parse('{"key":"v-704db4c4","path":"/4%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/2_4%E5%BC%BA%E5%8C%96%E5%AD%A6%E4%B9%A0/taxi.html","title":"taxi","lang":"zh-CN","frontmatter":{"description":"taxi 训练一个可以在指定地点接乘客并送到另个指定地点的出租车，我们希望这辆出租车可以： 在正确的地方接上乘客 在正确的地方放下乘客 以最快的速度放下乘客 我们需要考虑的有：奖励，状态以及行为 奖励 智能体如果能正确的放下乘客，则会收到高的正向的奖励，因为这是我们最期待的结果 智能体如果错误的放下乘客，则会收到负向的惩罚 智能体每移动一步都会受到轻微的负向惩罚，之所以受到惩罚是因为我们期望智能体能够以最快的速度接送乘客，之所以轻微是因为相比送错乘客，迟到是比较轻微的","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/4%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/2_4%E5%BC%BA%E5%8C%96%E5%AD%A6%E4%B9%A0/taxi.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"taxi"}],["meta",{"property":"og:description","content":"taxi 训练一个可以在指定地点接乘客并送到另个指定地点的出租车，我们希望这辆出租车可以： 在正确的地方接上乘客 在正确的地方放下乘客 以最快的速度放下乘客 我们需要考虑的有：奖励，状态以及行为 奖励 智能体如果能正确的放下乘客，则会收到高的正向的奖励，因为这是我们最期待的结果 智能体如果错误的放下乘客，则会收到负向的惩罚 智能体每移动一步都会受到轻微的负向惩罚，之所以受到惩罚是因为我们期望智能体能够以最快的速度接送乘客，之所以轻微是因为相比送错乘客，迟到是比较轻微的"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://claroja.github.io/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-21T12:59:55.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"taxi"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-21T12:59:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"taxi\\",\\"image\\":[\\"https://claroja.github.io/\\"],\\"dateModified\\":\\"2025-02-21T12:59:55.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"奖励","slug":"奖励","link":"#奖励","children":[]},{"level":2,"title":"状态空间(state space)","slug":"状态空间-state-space","link":"#状态空间-state-space","children":[]},{"level":2,"title":"行为空间(action space)","slug":"行为空间-action-space","link":"#行为空间-action-space","children":[]},{"level":2,"title":"Gym","slug":"gym","link":"#gym","children":[{"level":3,"title":"Action space","slug":"action-space","link":"#action-space","children":[]},{"level":3,"title":"State Space","slug":"state-space","link":"#state-space","children":[]},{"level":3,"title":"Reward Table","slug":"reward-table","link":"#reward-table","children":[]}]},{"level":2,"title":"强化学习(reinforcement learning)","slug":"强化学习-reinforcement-learning","link":"#强化学习-reinforcement-learning","children":[{"level":3,"title":"公式","slug":"公式","link":"#公式","children":[]},{"level":3,"title":"Q-table","slug":"q-table","link":"#q-table","children":[]},{"level":3,"title":"Q-learn的过程","slug":"q-learn的过程","link":"#q-learn的过程","children":[]},{"level":3,"title":"代码","slug":"代码","link":"#代码","children":[]},{"level":3,"title":"超参数","slug":"超参数","link":"#超参数","children":[]}]}],"git":{"createdTime":1740142795000,"updatedTime":1740142795000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":5.24,"words":1571},"filePathRelative":"4机器学习/2_4强化学习/taxi.md","localizedDate":"2025年2月21日","excerpt":"<h1> taxi</h1>\\n<p>训练一个可以在指定地点接乘客并送到另个指定地点的出租车，我们希望这辆出租车可以：</p>\\n<ol>\\n<li>在正确的地方接上乘客</li>\\n<li>在正确的地方放下乘客</li>\\n<li>以最快的速度放下乘客</li>\\n</ol>\\n<p>我们需要考虑的有：奖励，状态以及行为</p>\\n<h2> 奖励</h2>\\n<p>智能体如果能正确的放下乘客，则会收到高的正向的奖励，因为这是我们最期待的结果\\n智能体如果错误的放下乘客，则会收到负向的惩罚\\n智能体每移动一步都会受到轻微的负向惩罚，之所以受到惩罚是因为我们期望智能体能够以最快的速度接送乘客，之所以轻微是因为相比送错乘客，迟到是比较轻微的</p>","copyright":{"author":"王新宇"},"autoDesc":true}');export{e as data};
