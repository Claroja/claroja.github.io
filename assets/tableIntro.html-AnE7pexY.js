const n=JSON.parse(`{"key":"v-ac0bf568","path":"/%E6%95%B0%E6%8D%AE%E5%B7%A5%E7%A8%8B/flink/pyflinktable/tableIntro.html","title":"tableIntro","lang":"zh-CN","frontmatter":{"description":"tableIntro from pyflink.common import Row from pyflink.table import (EnvironmentSettings, TableEnvironment, TableDescriptor, Schema, DataTypes,) from pyflink.table.expressions import lit, col from pyflink.table.udf import udtf word_count_data = [\\"To be, or not to be,--that is the question:--\\", \\"Be all my sins remember'd.\\"] ## 1. declare an execution environment t_env = TableEnvironment.create(EnvironmentSettings.in_streaming_mode()) t_env.get_config().set(\\"parallelism.default\\", \\"1\\") # write all the data to one file ## 2. define the source tab = t_env.from_elements(map(lambda i: (i,), word_count_data), DataTypes.ROW([DataTypes.FIELD('line', DataTypes.STRING())])) ## 3. define the sink t_env.create_temporary_table( 'sink', TableDescriptor.for_connector('print') .schema(Schema.new_builder() .column('word', DataTypes.STRING()) .column('count', DataTypes.BIGINT()) .build()) .build()) ## 4. define transform @udtf(result_types=[DataTypes.STRING()]) def split(line: Row): for s in line[0].split(): yield Row(s) tab.flat_map(split).alias('word') \\\\ .group_by(col('word')) \\\\ .select(col('word'), lit(1).count) \\\\ .execute_insert('sink') \\\\ .wait() ## remove .wait if submitting to a remote cluster, refer to ## https://nightlies.apache.org/flink/flink-docs-stable/docs/dev/python/faq/#wait-for-jobs-to-finish-when-executing-jobs-in-mini-cluster ## for more details","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E6%95%B0%E6%8D%AE%E5%B7%A5%E7%A8%8B/flink/pyflinktable/tableIntro.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"tableIntro"}],["meta",{"property":"og:description","content":"tableIntro from pyflink.common import Row from pyflink.table import (EnvironmentSettings, TableEnvironment, TableDescriptor, Schema, DataTypes,) from pyflink.table.expressions import lit, col from pyflink.table.udf import udtf word_count_data = [\\"To be, or not to be,--that is the question:--\\", \\"Be all my sins remember'd.\\"] ## 1. declare an execution environment t_env = TableEnvironment.create(EnvironmentSettings.in_streaming_mode()) t_env.get_config().set(\\"parallelism.default\\", \\"1\\") # write all the data to one file ## 2. define the source tab = t_env.from_elements(map(lambda i: (i,), word_count_data), DataTypes.ROW([DataTypes.FIELD('line', DataTypes.STRING())])) ## 3. define the sink t_env.create_temporary_table( 'sink', TableDescriptor.for_connector('print') .schema(Schema.new_builder() .column('word', DataTypes.STRING()) .column('count', DataTypes.BIGINT()) .build()) .build()) ## 4. define transform @udtf(result_types=[DataTypes.STRING()]) def split(line: Row): for s in line[0].split(): yield Row(s) tab.flat_map(split).alias('word') \\\\ .group_by(col('word')) \\\\ .select(col('word'), lit(1).count) \\\\ .execute_insert('sink') \\\\ .wait() ## remove .wait if submitting to a remote cluster, refer to ## https://nightlies.apache.org/flink/flink-docs-stable/docs/dev/python/faq/#wait-for-jobs-to-finish-when-executing-jobs-in-mini-cluster ## for more details"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-27T13:17:01.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2023-11-27T13:17:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"tableIntro\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-27T13:17:01.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[],"git":{"createdTime":1701091021000,"updatedTime":1701091021000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":0.52,"words":156},"filePathRelative":"数据工程/flink/pyflinktable/tableIntro.md","localizedDate":"2023年11月27日","excerpt":"<h1> tableIntro</h1>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token keyword\\">from</span> pyflink<span class=\\"token punctuation\\">.</span>common <span class=\\"token keyword\\">import</span> Row\\n<span class=\\"token keyword\\">from</span> pyflink<span class=\\"token punctuation\\">.</span>table <span class=\\"token keyword\\">import</span> <span class=\\"token punctuation\\">(</span>EnvironmentSettings<span class=\\"token punctuation\\">,</span> TableEnvironment<span class=\\"token punctuation\\">,</span> TableDescriptor<span class=\\"token punctuation\\">,</span> Schema<span class=\\"token punctuation\\">,</span>\\n                        DataTypes<span class=\\"token punctuation\\">,</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token keyword\\">from</span> pyflink<span class=\\"token punctuation\\">.</span>table<span class=\\"token punctuation\\">.</span>expressions <span class=\\"token keyword\\">import</span> lit<span class=\\"token punctuation\\">,</span> col\\n<span class=\\"token keyword\\">from</span> pyflink<span class=\\"token punctuation\\">.</span>table<span class=\\"token punctuation\\">.</span>udf <span class=\\"token keyword\\">import</span> udtf\\n\\nword_count_data <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">[</span><span class=\\"token string\\">\\"To be, or not to be,--that is the question:--\\"</span><span class=\\"token punctuation\\">,</span>\\n                    <span class=\\"token string\\">\\"Be all my sins remember'd.\\"</span><span class=\\"token punctuation\\">]</span>\\n\\n<span class=\\"token comment\\">## 1. declare an execution environment</span>\\nt_env <span class=\\"token operator\\">=</span> TableEnvironment<span class=\\"token punctuation\\">.</span>create<span class=\\"token punctuation\\">(</span>EnvironmentSettings<span class=\\"token punctuation\\">.</span>in_streaming_mode<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\nt_env<span class=\\"token punctuation\\">.</span>get_config<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span><span class=\\"token builtin\\">set</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"parallelism.default\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"1\\"</span><span class=\\"token punctuation\\">)</span>  <span class=\\"token comment\\"># write all the data to one file</span>\\n\\n<span class=\\"token comment\\">## 2. define the source</span>\\ntab <span class=\\"token operator\\">=</span> t_env<span class=\\"token punctuation\\">.</span>from_elements<span class=\\"token punctuation\\">(</span><span class=\\"token builtin\\">map</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">lambda</span> i<span class=\\"token punctuation\\">:</span> <span class=\\"token punctuation\\">(</span>i<span class=\\"token punctuation\\">,</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span> word_count_data<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span>\\n                            DataTypes<span class=\\"token punctuation\\">.</span>ROW<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">[</span>DataTypes<span class=\\"token punctuation\\">.</span>FIELD<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'line'</span><span class=\\"token punctuation\\">,</span> DataTypes<span class=\\"token punctuation\\">.</span>STRING<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token comment\\">## 3. define the sink</span>\\nt_env<span class=\\"token punctuation\\">.</span>create_temporary_table<span class=\\"token punctuation\\">(</span>\\n    <span class=\\"token string\\">'sink'</span><span class=\\"token punctuation\\">,</span>\\n    TableDescriptor<span class=\\"token punctuation\\">.</span>for_connector<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'print'</span><span class=\\"token punctuation\\">)</span>\\n        <span class=\\"token punctuation\\">.</span>schema<span class=\\"token punctuation\\">(</span>Schema<span class=\\"token punctuation\\">.</span>new_builder<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n                <span class=\\"token punctuation\\">.</span>column<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'word'</span><span class=\\"token punctuation\\">,</span> DataTypes<span class=\\"token punctuation\\">.</span>STRING<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n                <span class=\\"token punctuation\\">.</span>column<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'count'</span><span class=\\"token punctuation\\">,</span> DataTypes<span class=\\"token punctuation\\">.</span>BIGINT<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n                <span class=\\"token punctuation\\">.</span>build<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n        <span class=\\"token punctuation\\">.</span>build<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token comment\\">## 4. define transform</span>\\n<span class=\\"token decorator annotation punctuation\\">@udtf</span><span class=\\"token punctuation\\">(</span>result_types<span class=\\"token operator\\">=</span><span class=\\"token punctuation\\">[</span>DataTypes<span class=\\"token punctuation\\">.</span>STRING<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token keyword\\">def</span> <span class=\\"token function\\">split</span><span class=\\"token punctuation\\">(</span>line<span class=\\"token punctuation\\">:</span> Row<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n    <span class=\\"token keyword\\">for</span> s <span class=\\"token keyword\\">in</span> line<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">.</span>split<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n        <span class=\\"token keyword\\">yield</span> Row<span class=\\"token punctuation\\">(</span>s<span class=\\"token punctuation\\">)</span>\\n\\ntab<span class=\\"token punctuation\\">.</span>flat_map<span class=\\"token punctuation\\">(</span>split<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span>alias<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'word'</span><span class=\\"token punctuation\\">)</span> \\\\\\n    <span class=\\"token punctuation\\">.</span>group_by<span class=\\"token punctuation\\">(</span>col<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'word'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span> \\\\\\n    <span class=\\"token punctuation\\">.</span>select<span class=\\"token punctuation\\">(</span>col<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'word'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span> lit<span class=\\"token punctuation\\">(</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span>count<span class=\\"token punctuation\\">)</span> \\\\\\n    <span class=\\"token punctuation\\">.</span>execute_insert<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'sink'</span><span class=\\"token punctuation\\">)</span> \\\\\\n    <span class=\\"token punctuation\\">.</span>wait<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token comment\\">## remove .wait if submitting to a remote cluster, refer to</span>\\n<span class=\\"token comment\\">## https://nightlies.apache.org/flink/flink-docs-stable/docs/dev/python/faq/#wait-for-jobs-to-finish-when-executing-jobs-in-mini-cluster</span>\\n<span class=\\"token comment\\">## for more details</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}`);export{n as data};
