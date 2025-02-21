const n=JSON.parse('{"key":"v-35c43828","path":"/8%E6%95%B0%E6%8D%AE%E5%B7%A5%E7%A8%8B/1%E6%95%B0%E6%8D%AE%E5%BA%93/3%E8%A1%A8/table.html","title":"table","lang":"zh-CN","frontmatter":{"description":"table 表操作 1.创建表CREATE TABLE table_name CREATE TABLE `user_basic` ( `user_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT COMMENT \'用户ID\', `status` tinyint(1) NOT NULL DEFAULT \'1\' COMMENT \'状态，是否可用，0-不可用，1-可用\', `mobile` char(11) NOT NULL COMMENT \'手机号\', `password` varchar(93) NULL COMMENT \'密码\', `last_login` datetime NULL COMMENT \'最后登录时间\', `is_media` tinyint(1) NOT NULL DEFAULT \'0\' COMMENT \'是否是自媒体，0-不是，1-是\', PRIMARY KEY (`user_id`), UNIQUE KEY `mobile` (`mobile`), UNIQUE KEY `user_name` (`user_name`) ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT=\'用户基本信息表\';","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/8%E6%95%B0%E6%8D%AE%E5%B7%A5%E7%A8%8B/1%E6%95%B0%E6%8D%AE%E5%BA%93/3%E8%A1%A8/table.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"table"}],["meta",{"property":"og:description","content":"table 表操作 1.创建表CREATE TABLE table_name CREATE TABLE `user_basic` ( `user_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT COMMENT \'用户ID\', `status` tinyint(1) NOT NULL DEFAULT \'1\' COMMENT \'状态，是否可用，0-不可用，1-可用\', `mobile` char(11) NOT NULL COMMENT \'手机号\', `password` varchar(93) NULL COMMENT \'密码\', `last_login` datetime NULL COMMENT \'最后登录时间\', `is_media` tinyint(1) NOT NULL DEFAULT \'0\' COMMENT \'是否是自媒体，0-不是，1-是\', PRIMARY KEY (`user_id`), UNIQUE KEY `mobile` (`mobile`), UNIQUE KEY `user_name` (`user_name`) ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT=\'用户基本信息表\';"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-21T12:59:55.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-21T12:59:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"table\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-21T12:59:55.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"表操作","slug":"表操作","link":"#表操作","children":[]}],"git":{"createdTime":1740142795000,"updatedTime":1740142795000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":0.74,"words":223},"filePathRelative":"8数据工程/1数据库/3表/table.md","localizedDate":"2025年2月21日","excerpt":"<h1> table</h1>\\n<h2> 表操作</h2>\\n<p>1.创建表<code>CREATE TABLE table_name</code></p>\\n<div class=\\"language-sql line-numbers-mode\\" data-ext=\\"sql\\"><pre class=\\"language-sql\\"><code><span class=\\"token keyword\\">CREATE</span> <span class=\\"token keyword\\">TABLE</span> <span class=\\"token identifier\\"><span class=\\"token punctuation\\">`</span>user_basic<span class=\\"token punctuation\\">`</span></span> <span class=\\"token punctuation\\">(</span>\\n  <span class=\\"token identifier\\"><span class=\\"token punctuation\\">`</span>user_id<span class=\\"token punctuation\\">`</span></span> <span class=\\"token keyword\\">bigint</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">20</span><span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">unsigned</span> <span class=\\"token operator\\">NOT</span> <span class=\\"token boolean\\">NULL</span> <span class=\\"token keyword\\">AUTO_INCREMENT</span> <span class=\\"token keyword\\">COMMENT</span> <span class=\\"token string\\">\'用户ID\'</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token identifier\\"><span class=\\"token punctuation\\">`</span>status<span class=\\"token punctuation\\">`</span></span> <span class=\\"token keyword\\">tinyint</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">NOT</span> <span class=\\"token boolean\\">NULL</span> <span class=\\"token keyword\\">DEFAULT</span> <span class=\\"token string\\">\'1\'</span> <span class=\\"token keyword\\">COMMENT</span> <span class=\\"token string\\">\'状态，是否可用，0-不可用，1-可用\'</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token identifier\\"><span class=\\"token punctuation\\">`</span>mobile<span class=\\"token punctuation\\">`</span></span> <span class=\\"token keyword\\">char</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">11</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">NOT</span> <span class=\\"token boolean\\">NULL</span> <span class=\\"token keyword\\">COMMENT</span> <span class=\\"token string\\">\'手机号\'</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token identifier\\"><span class=\\"token punctuation\\">`</span>password<span class=\\"token punctuation\\">`</span></span> <span class=\\"token keyword\\">varchar</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">93</span><span class=\\"token punctuation\\">)</span> <span class=\\"token boolean\\">NULL</span> <span class=\\"token keyword\\">COMMENT</span> <span class=\\"token string\\">\'密码\'</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token identifier\\"><span class=\\"token punctuation\\">`</span>last_login<span class=\\"token punctuation\\">`</span></span> <span class=\\"token keyword\\">datetime</span> <span class=\\"token boolean\\">NULL</span> <span class=\\"token keyword\\">COMMENT</span> <span class=\\"token string\\">\'最后登录时间\'</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token identifier\\"><span class=\\"token punctuation\\">`</span>is_media<span class=\\"token punctuation\\">`</span></span> <span class=\\"token keyword\\">tinyint</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">NOT</span> <span class=\\"token boolean\\">NULL</span> <span class=\\"token keyword\\">DEFAULT</span> <span class=\\"token string\\">\'0\'</span> <span class=\\"token keyword\\">COMMENT</span> <span class=\\"token string\\">\'是否是自媒体，0-不是，1-是\'</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token keyword\\">PRIMARY</span> <span class=\\"token keyword\\">KEY</span> <span class=\\"token punctuation\\">(</span><span class=\\"token identifier\\"><span class=\\"token punctuation\\">`</span>user_id<span class=\\"token punctuation\\">`</span></span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token keyword\\">UNIQUE</span> <span class=\\"token keyword\\">KEY</span> <span class=\\"token identifier\\"><span class=\\"token punctuation\\">`</span>mobile<span class=\\"token punctuation\\">`</span></span> <span class=\\"token punctuation\\">(</span><span class=\\"token identifier\\"><span class=\\"token punctuation\\">`</span>mobile<span class=\\"token punctuation\\">`</span></span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token keyword\\">UNIQUE</span> <span class=\\"token keyword\\">KEY</span> <span class=\\"token identifier\\"><span class=\\"token punctuation\\">`</span>user_name<span class=\\"token punctuation\\">`</span></span> <span class=\\"token punctuation\\">(</span><span class=\\"token identifier\\"><span class=\\"token punctuation\\">`</span>user_name<span class=\\"token punctuation\\">`</span></span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">ENGINE</span><span class=\\"token operator\\">=</span><span class=\\"token keyword\\">InnoDB</span> <span class=\\"token keyword\\">DEFAULT</span> <span class=\\"token keyword\\">CHARSET</span><span class=\\"token operator\\">=</span>utf8 <span class=\\"token keyword\\">COMMENT</span><span class=\\"token operator\\">=</span><span class=\\"token string\\">\'用户基本信息表\'</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}');export{n as data};
