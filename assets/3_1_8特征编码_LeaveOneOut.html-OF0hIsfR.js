const e=JSON.parse('{"key":"v-56e8c646","path":"/2%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/1%E7%AE%97%E6%B3%95%E5%8E%9F%E7%90%86/2%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0%E6%B5%81%E7%A8%8B/3%E7%89%B9%E5%BE%81%E7%BC%96%E7%A0%81/3_1_8%E7%89%B9%E5%BE%81%E7%BC%96%E7%A0%81_LeaveOneOut.html","title":"OWE编码(WOEEncoder)","lang":"zh-CN","frontmatter":{"description":"OWE编码(WOEEncoder) Leave One Out Encoder与Target Encoder非常相似，但在计算一个类别的平均目标时会排除当前行的目标，以减少异常值的影响。 如果您打算将编码用作预测模型的输入(例如，梯度增强)，则可能会出现问题。实际上，假设您使用TargetEncoder。这意味着您将在X_train中引入有关y_train的信息，这可能会导致严重的过度拟合风险。 关键是：如何在限制过度拟合风险的同时保持监督编码？LeaveOneOutEncoder提供了一个出色的解决方案。它执行原始目标编码，但是对于每一行，它不考虑对该行观察到的y值。这样，避免了行泄漏。","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/2%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/1%E7%AE%97%E6%B3%95%E5%8E%9F%E7%90%86/2%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0%E6%B5%81%E7%A8%8B/3%E7%89%B9%E5%BE%81%E7%BC%96%E7%A0%81/3_1_8%E7%89%B9%E5%BE%81%E7%BC%96%E7%A0%81_LeaveOneOut.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"OWE编码(WOEEncoder)"}],["meta",{"property":"og:description","content":"OWE编码(WOEEncoder) Leave One Out Encoder与Target Encoder非常相似，但在计算一个类别的平均目标时会排除当前行的目标，以减少异常值的影响。 如果您打算将编码用作预测模型的输入(例如，梯度增强)，则可能会出现问题。实际上，假设您使用TargetEncoder。这意味着您将在X_train中引入有关y_train的信息，这可能会导致严重的过度拟合风险。 关键是：如何在限制过度拟合风险的同时保持监督编码？LeaveOneOutEncoder提供了一个出色的解决方案。它执行原始目标编码，但是对于每一行，它不考虑对该行观察到的y值。这样，避免了行泄漏。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-24T12:46:58.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-24T12:46:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"OWE编码(WOEEncoder)\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-24T12:46:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"pandas","slug":"pandas","link":"#pandas","children":[]},{"level":2,"title":"category_encoders","slug":"category-encoders","link":"#category-encoders","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1740401218000,"updatedTime":1740401218000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":0.98,"words":294},"filePathRelative":"2机器学习/1算法原理/2机器学习流程/3特征编码/3_1_8特征编码_LeaveOneOut.md","localizedDate":"2025年2月24日","excerpt":"<h1> OWE编码(WOEEncoder)</h1>\\n<p>Leave One Out Encoder与Target Encoder非常相似，但在计算一个类别的平均目标时会排除当前行的目标，以减少异常值的影响。</p>\\n<p>如果您打算将编码用作预测模型的输入(例如，梯度增强)，则可能会出现问题。实际上，假设您使用TargetEncoder。这意味着您将在X_train中引入有关y_train的信息，这可能会导致严重的过度拟合风险。</p>\\n<p>关键是：如何在限制过度拟合风险的同时保持监督编码？LeaveOneOutEncoder提供了一个出色的解决方案。它执行原始目标编码，但是对于每一行，它不考虑对该行观察到的y值。这样，避免了行泄漏。</p>","copyright":{"author":"王新宇"},"autoDesc":true}');export{e as data};
