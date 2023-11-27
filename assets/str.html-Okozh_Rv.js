import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as d,c as e,e as r}from"./app-O0xqlHfm.js";const a={},o=r(`<h1 id="str" tabindex="-1"><a class="header-anchor" href="#str" aria-hidden="true">#</a> str</h1><h2 id="type" tabindex="-1"><a class="header-anchor" href="#type" aria-hidden="true">#</a> type</h2><h3 id="char-varchar" tabindex="-1"><a class="header-anchor" href="#char-varchar" aria-hidden="true">#</a> CHAR VARCHAR</h3><p>char和varchar类型在最大长度和尾部补0方式有差异</p><p>CHAR 固定长度 最大长度可以设置为255, 存储时长度不满足,会在尾部填充0,在取数据时会将0自动去掉 存储长度超过时,会截断</p><p>VARCHAR 可变长度 长度可以设置为65535 存储长度不足时,不填充0,会缩小存储空间 存储长度超过时,会截断</p><table><thead><tr><th>Value</th><th>CHAR(4)</th><th>Storage Required</th><th>VARCHAR(4)</th><th>Storage Required</th></tr></thead><tbody><tr><td>&#39;&#39;</td><td>&#39; &#39;</td><td>4 bytes</td><td>&#39;&#39;</td><td>1 byte</td></tr><tr><td>&#39;ab&#39;</td><td>&#39;ab &#39;</td><td>4 bytes</td><td>&#39;ab&#39;</td><td>3 bytes</td></tr><tr><td>&#39;abcd&#39;</td><td>&#39;abcd&#39;</td><td>4 bytes</td><td>&#39;abcd&#39;</td><td>5 bytes</td></tr><tr><td>&#39;abcdefgh&#39;</td><td>&#39;abcd&#39;</td><td>4 bytes</td><td>&#39;abcd&#39;</td><td>5 bytes</td></tr></tbody></table><p>通过下面这个例子,可以看到,在VARCHAR(4)字符后面的空白字符被舍去.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mysql&gt; CREATE TABLE vc (v VARCHAR(4), c CHAR(4));
Query OK, 0 rows affected (0.01 sec)

mysql&gt; INSERT INTO vc VALUES (&#39;ab  &#39;, &#39;ab  &#39;);
Query OK, 1 row affected (0.00 sec)

mysql&gt; SELECT CONCAT(&#39;(&#39;, v, &#39;)&#39;), CONCAT(&#39;(&#39;, c, &#39;)&#39;) FROM vc;
+---------------------+---------------------+
| CONCAT(&#39;(&#39;, v, &#39;)&#39;) | CONCAT(&#39;(&#39;, c, &#39;)&#39;) |
+---------------------+---------------------+
| (ab  )              | (ab)                |
+---------------------+---------------------+
1 row in set (0.06 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="the-blob-and-text-types" tabindex="-1"><a class="header-anchor" href="#the-blob-and-text-types" aria-hidden="true">#</a> The BLOB and TEXT Types</h3><p>BLOB可以存大量的可变的二进制数据 TEXT可以存大量的可变的字符数据</p><table><thead><tr><th>Data Type</th><th>Storage Required</th></tr></thead><tbody><tr><td>TINYBLOB, TINYTEXT</td><td>L + 1 bytes, where L &lt; 28</td></tr><tr><td>BLOB, TEXT</td><td>L + 2 bytes, where L &lt; 216</td></tr><tr><td>MEDIUMBLOB, MEDIUMTEXT</td><td>L + 3 bytes, where L &lt; 224</td></tr><tr><td>LONGBLOB, LONGTEXT</td><td>L + 4 bytes, where L &lt; 232</td></tr></tbody></table><h2 id="function" tabindex="-1"><a class="header-anchor" href="#function" aria-hidden="true">#</a> function</h2><table><thead><tr><th>Name</th><th>Description</th><th>例子</th></tr></thead><tbody><tr><td><code>ASCII(str)</code></td><td>返回字符ascii码</td><td><code>SELECT ASCII(&#39;2&#39;); # -&gt; 50</code></td></tr><tr><td><code>BIN(N)</code></td><td>返回字符的二进制值</td><td><code>SELECT BIN(12); # -&gt; &#39;1100&#39;</code></td></tr><tr><td>BIT_LENGTH()</td><td>Return length of argument in bits</td><td></td></tr><tr><td><code>CHAR(N,... [USING charset_name])</code></td><td>将整型转换为字符</td><td><code>SELECT CHAR(77,121,83,81,&#39;76&#39;); # -&gt; &#39;MySQL&#39;</code></td></tr><tr><td>CHAR_LENGTH()</td><td>Return number of characters in argument</td><td></td></tr><tr><td>CHARACTER_LENGTH()</td><td>Synonym for CHAR_LENGTH()</td><td></td></tr><tr><td><code>CONCAT(str1,str2,...)</code></td><td>拼贴字符串</td><td><code>SELECT CONCAT(&#39;My&#39;, &#39;S&#39;, &#39;QL&#39;); # -&gt; &#39;MySQL&#39;</code></td></tr><tr><td>CONCAT_WS()</td><td>Return concatenate with separator</td><td></td></tr><tr><td>ELT()</td><td>Return string at index number</td><td></td></tr><tr><td>EXPORT_SET()</td><td>Return a string such that for every bit set in the value bits, you get an on string and for every unset bit, you get an off string</td><td></td></tr><tr><td><code>FIELD(str,str1,str2,str3,...)</code></td><td>Returns the index (position) of str in the str1, str2, str3, ... list.</td><td><code>SELECT FIELD(&#39;Bb&#39;, &#39;Aa&#39;, &#39;Bb&#39;, &#39;Cc&#39;, &#39;Dd&#39;, &#39;Ff&#39;); # -&gt; 2</code></td></tr><tr><td>FIND_IN_SET()</td><td>Index (position) of first argument within second argument</td><td></td></tr><tr><td><code>FORMAT(X,D[,locale])</code></td><td>格式化字符串,D是小数点保留位</td><td><code>SELECT FORMAT(12332.123456, 4); # -&gt; &#39;12,332.1235&#39;</code></td></tr><tr><td>FROM_BASE64()</td><td>Decode base64 encoded string and return result</td><td></td></tr><tr><td>HEX()</td><td>Hexadecimal representation of decimal or string value</td><td></td></tr><tr><td><code>INSERT(str,pos,len,newstr)</code></td><td>插入字符</td><td><code>SELECT INSERT(&#39;Quadratic&#39;, 3, 4, &#39;What&#39;); # -&gt; &#39;QuWhattic&#39;</code></td></tr><tr><td><code>INSTR(str,substr)</code></td><td>索引子字符串</td><td><code>SELECT INSTR(&#39;foobarbar&#39;, &#39;bar&#39;); # -&gt; 4</code></td></tr><tr><td>LCASE()</td><td>Synonym for LOWER()</td><td></td></tr><tr><td><code>LEFT(str,len)</code></td><td>从左边截取字符串</td><td><code>SELECT LEFT(&#39;foobarbar&#39;, 5); # -&gt; &#39;fooba&#39;</code></td></tr><tr><td><code>LENGTH(str)</code></td><td>返回字符串长度</td><td></td></tr><tr><td>LIKE</td><td>Simple pattern matching</td><td></td></tr><tr><td>LOAD_FILE()</td><td>Load the named file</td><td></td></tr><tr><td><code>LOCATE(substr,str), LOCATE(substr,str,pos)</code></td><td>索引字符串</td><td><code>SELECT LOCATE(&#39;bar&#39;, &#39;foobarbar&#39;); # -&gt; 4</code></td></tr><tr><td><code>LOWER(str)</code></td><td>小写</td><td><code>SELECT LOWER(&#39;QUADRATICALLY&#39;); -&gt; &#39;quadratically&#39;</code></td></tr><tr><td><code>LPAD(str,len,padstr)</code></td><td>左边填充字符串,len是填充后的长度</td><td><code>SELECT LPAD(&#39;hi&#39;,4,&#39;??&#39;); # -&gt; &#39;??hi&#39;</code></td></tr><tr><td><code>LTRIM(str)</code></td><td>删除左边的空白</td><td><code>SELECT LTRIM(&#39; barbar&#39;); # -&gt; &#39;barbar&#39;</code></td></tr><tr><td>MAKE_SET()</td><td>Return a set of comma-separated strings that have the corresponding bit in bits set</td><td></td></tr><tr><td>MATCH</td><td>Perform full-text search</td><td></td></tr><tr><td><code>MID(str,pos,len)</code></td><td>SUBSTRING(str,pos,len)</td><td></td></tr><tr><td>NOT LIKE</td><td>Negation of simple pattern matching</td><td></td></tr><tr><td>NOT REGEXP</td><td>Negation of REGEXP</td><td></td></tr><tr><td>OCT()</td><td>Return a string containing octal representation of a number</td><td></td></tr><tr><td>OCTET_LENGTH()</td><td>Synonym for LENGTH()</td><td></td></tr><tr><td>ORD()</td><td>Return character code for leftmost character of the argument</td><td></td></tr><tr><td>POSITION()</td><td>Synonym for LOCATE()</td><td></td></tr><tr><td>QUOTE()</td><td>Escape the argument for use in an SQL statement</td><td></td></tr><tr><td>REGEXP</td><td>Whether string matches regular expression</td><td></td></tr><tr><td>REGEXP_INSTR()</td><td>Starting index of substring matching regular expression</td><td></td></tr><tr><td>REGEXP_LIKE()</td><td>Whether string matches regular expression</td><td></td></tr><tr><td>REGEXP_REPLACE()</td><td>Replace substrings matching regular expression</td><td></td></tr><tr><td>REGEXP_SUBSTR()</td><td>Return substring matching regular expression</td><td></td></tr><tr><td><code>REPEAT(str,count)</code></td><td>重复字符串</td><td><code>SELECT REPEAT(&#39;MySQL&#39;, 3); # -&gt; &#39;MySQLMySQLMySQL&#39;</code></td></tr><tr><td><code>REPLACE(str,from_str,to_str)</code></td><td>替换字符串</td><td><code>SELECT REPLACE(&#39;www.mysql.com&#39;, &#39;w&#39;, &#39;Ww&#39;); # -&gt; &#39;WwWwWw.mysql.com&#39;</code></td></tr><tr><td><code>REVERSE(str)</code></td><td>反转字符串</td><td><code>SELECT REVERSE(&#39;abc&#39;); # -&gt; &#39;cba&#39;</code></td></tr><tr><td><code>RIGHT(str,len)</code></td><td>从右边截取字符串</td><td><code> SELECT RIGHT(&#39;foobarbar&#39;, 4); # -&gt; &#39;rbar&#39;</code></td></tr><tr><td>RLIKE</td><td>Whether string matches regular expression</td><td></td></tr><tr><td><code>RPAD(str,len,padstr)</code></td><td>右边填充空白</td><td><code>SELECT RPAD(&#39;hi&#39;,5,&#39;?&#39;); # -&gt; &#39;hi???&#39;</code></td></tr><tr><td><code>RTRIM(str)</code></td><td>右边删除空白</td><td><code>SELECT RTRIM(&#39;barbar &#39;); # -&gt; &#39;barbar&#39;</code></td></tr><tr><td>SOUNDEX()</td><td>Return a soundex string</td><td></td></tr><tr><td>SOUNDS LIKE</td><td>Compare sounds</td><td></td></tr><tr><td><code>SPACE(N)</code></td><td>生成空白字符</td><td><code>SELECT SPACE(6); # -&gt;-&gt; &#39; &#39;</code></td></tr><tr><td>STRCMP()</td><td>Compare two strings</td><td></td></tr><tr><td>SUBSTR()</td><td>Return the substring as specified</td><td></td></tr><tr><td><code>SUBSTRING(str,pos,len)</code></td><td>截取字符串</td><td><code>SELECT SUBSTRING(&#39;Quadratically&#39;,5,6); # -&gt; &#39;ratica&#39;</code></td></tr><tr><td>SUBSTRING_INDEX()</td><td>Return a substring from a string before the specified number of occurrences of the delimiter</td><td></td></tr><tr><td>TO_BASE64()</td><td>Return the argument converted to a base-64 string</td><td></td></tr><tr><td><code>TRIM([{BOTH ....</code></td><td>删除空白</td><td><code>SELECT TRIM(&#39; bar &#39;); # -&gt; &#39;bar&#39;</code></td></tr><tr><td>UCASE()</td><td>UPPER()</td><td></td></tr><tr><td>UNHEX()</td><td>Return a string containing hex representation of a number</td><td></td></tr><tr><td><code>UPPER(str)</code></td><td>大写</td><td><code>SELECT UPPER(&#39;Hej&#39;); # -&gt; &#39;HEJ&#39;</code></td></tr><tr><td>WEIGHT_STRING()</td><td>Return the weight string for a string</td><td></td></tr></tbody></table><p>参考: https://dev.mysql.com/doc/refman/8.0/en/string-types.html https://dev.mysql.com/doc/refman/8.0/en/string-functions.html</p>`,15),s=[o];function n(c,i){return d(),e("div",null,s)}const b=t(a,[["render",n],["__file","str.html.vue"]]);export{b as default};
