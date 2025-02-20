import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as t,c as e,a as n}from"./app-9tftCahk.js";const s={},d=n(`<h1 id="位运算" tabindex="-1"><a class="header-anchor" href="#位运算" aria-hidden="true">#</a> 位运算</h1><table><thead><tr><th>符号</th><th>描述</th><th>规则</th></tr></thead><tbody><tr><td><code>&amp;</code></td><td>与</td><td>两个位都为1时，结果才为1</td></tr><tr><td>\`</td><td>\`</td><td>或</td></tr><tr><td><code>^</code></td><td>异或</td><td>两个位相同为0，相异为1</td></tr><tr><td><code>~</code></td><td>取反</td><td>0变1，1变0</td></tr><tr><td><code>&lt;&lt;</code></td><td>左移</td><td>各二进位全部左移若干位，高位丢弃，低位补0</td></tr><tr><td><code>&gt;&gt;</code></td><td>右移</td><td>各二进位全部右移若干位，对无符号数，高位补0，有符号数，各编译器处理方法不一样，有的补符号位（算术右移），有的补0（逻辑右移）</td></tr></tbody></table><h2 id="按为与运算" tabindex="-1"><a class="header-anchor" href="#按为与运算" aria-hidden="true">#</a> 按为与运算</h2><p>规则,<code>bit</code>位视角: <code>0&amp;0=0 0&amp;1=0 1&amp;0=0 1&amp;1=1</code> 总结：两位同时为1，结果才为1，否则结果为0。 理解: 和1与, 值不变, 和0与, 值变成0 例如：3&amp;5 即 0000 0011&amp; 0000 0101 = 0000 0001，因此 3&amp;5 的值得1。 注意：负数按补码形式参加按位与运算。</p><h3 id="用途" tabindex="-1"><a class="header-anchor" href="#用途" aria-hidden="true">#</a> 用途</h3><ol><li>清零(与是用来清零的) 按位与的作用是, 如果与右侧bit位为1, 则左侧对应的bit位不变, 如果右侧bit位为0, 则左侧对应bit为变为0</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 将0b11111111中间的4位变为0</span>
<span class="token builtin">bin</span><span class="token punctuation">(</span><span class="token number">0b11111110</span> <span class="token operator">&amp;</span> <span class="token number">0b11000011</span><span class="token punctuation">)</span> <span class="token comment"># &#39;0b11000010&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>取指定位的值 右侧数指定位为1, 其余为0即可.</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 取左侧数的后四位, 只需右侧后四位为1, 其他为0即可</span>
<span class="token builtin">bin</span><span class="token punctuation">(</span><span class="token number">0b10101110</span> <span class="token operator">&amp;</span> <span class="token number">0b00001111</span><span class="token punctuation">)</span>  <span class="token comment">#  &#39;0b1110&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>判断奇偶 只需取最后一位, 结果是0则为偶数, 结果是1则为奇数.</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token number">197</span> <span class="token operator">&amp;</span> <span class="token number">1</span> <span class="token comment"># 结果是1, 为奇数</span>
<span class="token builtin">bin</span><span class="token punctuation">(</span><span class="token number">197</span><span class="token punctuation">)</span> <span class="token comment"># &#39;0b11000101&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="按位或" tabindex="-1"><a class="header-anchor" href="#按位或" aria-hidden="true">#</a> 按位或</h2><p>规则, <code>bit</code>视角: <code>0|0=0 0|1=1 1|0=1 1|1=1</code> 总结：参加运算的两个对象只要有一个为1，其值为1。 理解: 和0或, 值不变, 和1或值变成1 例如：3|5即 0000 0011| 0000 0101 = 0000 0111，因此，3|5的值得7。 注意：负数按补码形式参加按位或运算。</p><ol><li>将某些位置设置成1(或是用来置一的)</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 将左侧的后四位全部换成1</span>
<span class="token builtin">bin</span><span class="token punctuation">(</span><span class="token number">0b10101110</span> <span class="token operator">|</span> <span class="token number">0b00001111</span><span class="token punctuation">)</span> <span class="token comment"># &#39;0b10101111&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="按位异或" tabindex="-1"><a class="header-anchor" href="#按位异或" aria-hidden="true">#</a> 按位异或</h2><p>运算规则, bit视角: <code>0^0=0 0^1=1 1^0=1 1^1=0</code> 总结：参加运算的两个对象，如果两个相应位相同为0，相异为1。 理解: 按位异或的作用, 和0异或的值不变, 和1异或的值取反</p><h3 id="应用" tabindex="-1"><a class="header-anchor" href="#应用" aria-hidden="true">#</a> 应用</h3><ol><li>指定位翻转 右侧将需要翻转的bit位设置成1即可</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token builtin">bin</span><span class="token punctuation">(</span><span class="token number">0b10101110</span> <span class="token operator">^</span> <span class="token number">0b00001111</span><span class="token punctuation">)</span> <span class="token comment"># &#39;0b10100001&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="按位取反" tabindex="-1"><a class="header-anchor" href="#按位取反" aria-hidden="true">#</a> 按位取反</h2><p>运算规则, bit视角: <code>~1=0 ~0=1</code> 总结：对一个二进制数按位取反，即将0变1，1变0。</p><h2 id="按位左移" tabindex="-1"><a class="header-anchor" href="#按位左移" aria-hidden="true">#</a> 按位左移</h2><p>定义：将一个运算对象的各二进制位全部左移若干位（左边的二进制位丢弃，右边补0）。 例子: 设 a=1010 1110，a = a&lt;&lt; 2 将a的二进制位左移2位、右补0，即得a=1011 1000。 理解: 若左移时舍弃的高位不包含1，则每左移一位，相当于该数乘以2。</p><h2 id="按位右移" tabindex="-1"><a class="header-anchor" href="#按位右移" aria-hidden="true">#</a> 按位右移</h2><p>定义：将一个数的各二进制位全部右移若干位，正数左补0，负数左补1，右边丢弃。 例如：a=a&gt;&gt;2 将a的二进制位右移2位，左补0 或者 左补1得看被移数是正还是负。 理解: 操作数每右移一位，相当于该数除以2。</p><h2 id="复合赋值运算符" tabindex="-1"><a class="header-anchor" href="#复合赋值运算符" aria-hidden="true">#</a> 复合赋值运算符</h2><table><thead><tr><th>运算符</th><th>例子</th><th>理解</th></tr></thead><tbody><tr><td><code>&amp;=</code></td><td><code>a&amp;=b</code></td><td><code>a=a&amp;b</code></td></tr><tr><td>\`</td><td>=\`</td><td>\`a</td></tr><tr><td><code>&gt;&gt;=</code></td><td><code>a&gt;&gt;=b</code></td><td><code>a=a&gt;&gt;b</code></td></tr><tr><td><code>&lt;&lt;=</code></td><td><code>a&lt;&lt;=b</code></td><td><code>a=a&lt;&lt;b</code></td></tr><tr><td><code>^=</code></td><td><code>a^=b</code></td><td><code>a=a^b</code></td></tr></tbody></table><p>refs: https://www.runoob.com/w3cnote/bit-operation.html</p>`,29),o=[d];function c(i,p){return t(),e("div",null,o)}const h=a(s,[["render",c],["__file","位运算.html.vue"]]);export{h as default};
