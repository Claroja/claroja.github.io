const t=JSON.parse(`{"key":"v-3c798268","path":"/2%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/2c/2%E5%A4%8D%E5%90%88%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B/2_2%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%A4%84%E7%90%86.html","title":"","lang":"zh-CN","frontmatter":{"description":"函数 描述 参数 返回 size_t strlen(const char *s); 计算指定指定字符串s的长度，不包含字符串结束符‘\\\\0’ s：字符串首地址 字符串s的长度，size_t为unsigned int类型 char *strcpy(char *dest, const char *src); 把src所指向的字符串复制到dest所指向的空间中，'\\\\0'也会拷贝过去 dest：目的字符串首地址；src：源字符首地址 成功：返回dest字符串的首地址；失败：NULL char *strncpy(char *dest, const char *src, size_t n); 把src指向字符串的前n个字符复制到dest所指向的空间中，是否拷贝结束符看指定的长度是否包含'\\\\0'。 dest：目的字符串首地址；src：源字符首地址；n：指定需要拷贝字符串个数 成功：返回dest字符串的首地址；失败：NULL char *strcat(char *dest, const char *src); 将src字符串连接到dest的尾部，‘\\\\0’也会追加过去 dest：目的字符串首地址;src：源字符首地址 成功：返回dest字符串的首地址;失败：NULL char *strncat(char *dest, const char *src, size_t n); 将src字符串前n个字符连接到dest的尾部，‘\\\\0’也会追加过去 dest：目的字符串首地址;src：源字符首地址;n：指定需要追加字符串个数 成功：返回dest字符串的首地址;失败：NULL int strcmp(const char *s1, const char *s2); 比较 s1 和 s2 的大小，比较的是字符ASCII码大小。 s1：字符串1首地址;s2：字符串2首地址 相等：0大于：&gt;0小于：&lt;0 int strncmp(const char *s1, const char *s2, size_t n); 比较 s1 和 s2 前n个字符的大小，比较的是字符ASCII码大小 s1：字符串1首地址;s2：字符串2首地址;n：指定比较字符串的数量 相等：0;大于： &gt; 0;小于： &lt; 0 int sprintf(char *_CRT_SECURE_NO_WARNINGS, const char *format, ...); 根据参数format字符串来转换并格式化数据，然后将结果输出到str指定的空间中，直到出现字符串结束符 '\\\\0' 为止 str：字符串首地址;format：字符串格式，用法和printf()一样 成功：实际格式化的字符个数;失败： - 1 int sscanf(const char *str, const char *format, ...); 从str指定的字符串读取数据，并根据参数format字符串来转换并格式化数据 str：指定的字符串首地址;format：字符串格式，用法和scanf()一样 成功：参数数目，成功转换的值的个数;失败： - 1 char *strchr(const char *s, int c); 在字符串s中查找字母c出现的位置 s：字符串首地址;c：匹配字母(字符) 成功：返回第一次出现的c地址;失败：NULL char *strstr(const char *haystack, const char *needle); 在字符串haystack中查找字符串needle出现的位置 haystack：源字符串首地址;needle：匹配字符串首地址 成功：返回第一次出现的needle地址;失败：NULL strtok() 来将字符串分割成一个个片段。当strtok()在参数s的字符串中发现参数delim中包含的分割字符时, 则会将该字符改为\\\\0 字符，当连续出现多个时只替换第一个为\\\\0。 str：指向欲分割的字符串;delim：为分割字符串中包含的所有字符 成功：分割后字符串首地址;失败：NULL int atoi(const char *nptr); atoi()会扫描nptr字符串，跳过前面的空格字符，直到遇到数字或正负号才开始做转换，而遇到非数字或字符串结束符('\\\\0')才结束转换，并将结果返回返回值。 nptr：待转换的字符串 成功转换后整数 atof() 把一个小数形式的字符串转化为一个浮点数。 atol() 将一个字符串转化为long类型","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/2%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/2c/2%E5%A4%8D%E5%90%88%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B/2_2%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%A4%84%E7%90%86.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:description","content":"函数 描述 参数 返回 size_t strlen(const char *s); 计算指定指定字符串s的长度，不包含字符串结束符‘\\\\0’ s：字符串首地址 字符串s的长度，size_t为unsigned int类型 char *strcpy(char *dest, const char *src); 把src所指向的字符串复制到dest所指向的空间中，'\\\\0'也会拷贝过去 dest：目的字符串首地址；src：源字符首地址 成功：返回dest字符串的首地址；失败：NULL char *strncpy(char *dest, const char *src, size_t n); 把src指向字符串的前n个字符复制到dest所指向的空间中，是否拷贝结束符看指定的长度是否包含'\\\\0'。 dest：目的字符串首地址；src：源字符首地址；n：指定需要拷贝字符串个数 成功：返回dest字符串的首地址；失败：NULL char *strcat(char *dest, const char *src); 将src字符串连接到dest的尾部，‘\\\\0’也会追加过去 dest：目的字符串首地址;src：源字符首地址 成功：返回dest字符串的首地址;失败：NULL char *strncat(char *dest, const char *src, size_t n); 将src字符串前n个字符连接到dest的尾部，‘\\\\0’也会追加过去 dest：目的字符串首地址;src：源字符首地址;n：指定需要追加字符串个数 成功：返回dest字符串的首地址;失败：NULL int strcmp(const char *s1, const char *s2); 比较 s1 和 s2 的大小，比较的是字符ASCII码大小。 s1：字符串1首地址;s2：字符串2首地址 相等：0大于：&gt;0小于：&lt;0 int strncmp(const char *s1, const char *s2, size_t n); 比较 s1 和 s2 前n个字符的大小，比较的是字符ASCII码大小 s1：字符串1首地址;s2：字符串2首地址;n：指定比较字符串的数量 相等：0;大于： &gt; 0;小于： &lt; 0 int sprintf(char *_CRT_SECURE_NO_WARNINGS, const char *format, ...); 根据参数format字符串来转换并格式化数据，然后将结果输出到str指定的空间中，直到出现字符串结束符 '\\\\0' 为止 str：字符串首地址;format：字符串格式，用法和printf()一样 成功：实际格式化的字符个数;失败： - 1 int sscanf(const char *str, const char *format, ...); 从str指定的字符串读取数据，并根据参数format字符串来转换并格式化数据 str：指定的字符串首地址;format：字符串格式，用法和scanf()一样 成功：参数数目，成功转换的值的个数;失败： - 1 char *strchr(const char *s, int c); 在字符串s中查找字母c出现的位置 s：字符串首地址;c：匹配字母(字符) 成功：返回第一次出现的c地址;失败：NULL char *strstr(const char *haystack, const char *needle); 在字符串haystack中查找字符串needle出现的位置 haystack：源字符串首地址;needle：匹配字符串首地址 成功：返回第一次出现的needle地址;失败：NULL strtok() 来将字符串分割成一个个片段。当strtok()在参数s的字符串中发现参数delim中包含的分割字符时, 则会将该字符改为\\\\0 字符，当连续出现多个时只替换第一个为\\\\0。 str：指向欲分割的字符串;delim：为分割字符串中包含的所有字符 成功：分割后字符串首地址;失败：NULL int atoi(const char *nptr); atoi()会扫描nptr字符串，跳过前面的空格字符，直到遇到数字或正负号才开始做转换，而遇到非数字或字符串结束符('\\\\0')才结束转换，并将结果返回返回值。 nptr：待转换的字符串 成功转换后整数 atof() 把一个小数形式的字符串转化为一个浮点数。 atol() 将一个字符串转化为long类型"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-21T12:59:55.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-21T12:59:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-21T12:59:55.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[],"git":{"createdTime":1740142795000,"updatedTime":1740142795000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":3.63,"words":1090},"filePathRelative":"2编程语言/2c/2复合数据类型/2_2字符串处理.md","localizedDate":"2025年2月21日","excerpt":"<table>\\n<thead>\\n<tr>\\n<th>函数</th>\\n<th>描述</th>\\n<th>参数</th>\\n<th>返回</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>size_t strlen(const char *s);</td>\\n<td>计算指定指定字符串s的长度，不包含字符串结束符‘\\\\0’</td>\\n<td>s：字符串首地址</td>\\n<td>字符串s的长度，size_t为unsigned int类型</td>\\n</tr>\\n<tr>\\n<td>char *strcpy(char *dest, const char *src);</td>\\n<td>把src所指向的字符串复制到dest所指向的空间中，'\\\\0'也会拷贝过去</td>\\n<td>dest：目的字符串首地址；src：源字符首地址</td>\\n<td>成功：返回dest字符串的首地址；失败：NULL</td>\\n</tr>\\n<tr>\\n<td>char *strncpy(char *dest, const char *src, size_t n);</td>\\n<td>把src指向字符串的前n个字符复制到dest所指向的空间中，是否拷贝结束符看指定的长度是否包含'\\\\0'。</td>\\n<td>dest：目的字符串首地址；src：源字符首地址；n：指定需要拷贝字符串个数</td>\\n<td>成功：返回dest字符串的首地址；失败：NULL</td>\\n</tr>\\n<tr>\\n<td>char *strcat(char *dest, const char *src);</td>\\n<td>将src字符串连接到dest的尾部，‘\\\\0’也会追加过去</td>\\n<td>dest：目的字符串首地址;src：源字符首地址</td>\\n<td>成功：返回dest字符串的首地址;失败：NULL</td>\\n</tr>\\n<tr>\\n<td>char *strncat(char *dest, const char *src, size_t n);</td>\\n<td>将src字符串前n个字符连接到dest的尾部，‘\\\\0’也会追加过去</td>\\n<td>dest：目的字符串首地址;src：源字符首地址;n：指定需要追加字符串个数</td>\\n<td>成功：返回dest字符串的首地址;失败：NULL</td>\\n</tr>\\n<tr>\\n<td>int strcmp(const char *s1, const char *s2);</td>\\n<td>比较 s1 和 s2 的大小，比较的是字符ASCII码大小。</td>\\n<td>s1：字符串1首地址;s2：字符串2首地址</td>\\n<td>相等：0大于：&gt;0小于：&lt;0</td>\\n</tr>\\n<tr>\\n<td>int strncmp(const char *s1, const char *s2, size_t n);</td>\\n<td>比较 s1 和 s2 前n个字符的大小，比较的是字符ASCII码大小</td>\\n<td>s1：字符串1首地址;s2：字符串2首地址;n：指定比较字符串的数量</td>\\n<td>相等：0;大于： &gt; 0;小于： &lt; 0</td>\\n</tr>\\n<tr>\\n<td>int sprintf(char *_CRT_SECURE_NO_WARNINGS, const char *format, ...);</td>\\n<td>根据参数format字符串来转换并格式化数据，然后将结果输出到str指定的空间中，直到出现字符串结束符 '\\\\0'  为止</td>\\n<td>str：字符串首地址;format：字符串格式，用法和printf()一样</td>\\n<td>成功：实际格式化的字符个数;失败： - 1</td>\\n</tr>\\n<tr>\\n<td>int sscanf(const char *str, const char *format, ...);</td>\\n<td>从str指定的字符串读取数据，并根据参数format字符串来转换并格式化数据</td>\\n<td>str：指定的字符串首地址;format：字符串格式，用法和scanf()一样</td>\\n<td>成功：参数数目，成功转换的值的个数;失败： - 1</td>\\n</tr>\\n<tr>\\n<td>char *strchr(const char *s, int c);</td>\\n<td>在字符串s中查找字母c出现的位置</td>\\n<td>s：字符串首地址;c：匹配字母(字符)</td>\\n<td>成功：返回第一次出现的c地址;失败：NULL</td>\\n</tr>\\n<tr>\\n<td>char *strstr(const char *haystack, const char *needle);</td>\\n<td>在字符串haystack中查找字符串needle出现的位置</td>\\n<td>haystack：源字符串首地址;needle：匹配字符串首地址</td>\\n<td>成功：返回第一次出现的needle地址;失败：NULL</td>\\n</tr>\\n<tr>\\n<td>strtok()</td>\\n<td>来将字符串分割成一个个片段。当strtok()在参数s的字符串中发现参数delim中包含的分割字符时, 则会将该字符改为\\\\0 字符，当连续出现多个时只替换第一个为\\\\0。</td>\\n<td>str：指向欲分割的字符串;delim：为分割字符串中包含的所有字符</td>\\n<td>成功：分割后字符串首地址;失败：NULL</td>\\n</tr>\\n<tr>\\n<td>int atoi(const char *nptr);</td>\\n<td>atoi()会扫描nptr字符串，跳过前面的空格字符，直到遇到数字或正负号才开始做转换，而遇到非数字或字符串结束符('\\\\0')才结束转换，并将结果返回返回值。</td>\\n<td>nptr：待转换的字符串</td>\\n<td>成功转换后整数</td>\\n</tr>\\n<tr>\\n<td>atof()</td>\\n<td>把一个小数形式的字符串转化为一个浮点数。</td>\\n<td></td>\\n<td></td>\\n</tr>\\n<tr>\\n<td>atol()</td>\\n<td>将一个字符串转化为long类型</td>\\n<td></td>\\n<td></td>\\n</tr>\\n</tbody>\\n</table>","copyright":{"author":"王新宇"},"autoDesc":true}`);export{t as data};
