import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-M6UUlHgF.js";const e={},d=t(`<h1 id="c" tabindex="-1"><a class="header-anchor" href="#c" aria-hidden="true">#</a> c</h1><p>单片机的C语言基本数据类型:</p><table><thead><tr><th>数据类型</th><th>关键字</th><th>所占位数</th><th>表示范围</th></tr></thead><tbody><tr><td>无符号类型</td><td>unsigned char</td><td>8</td><td>0-255</td></tr><tr><td>有符号类型</td><td>char</td><td>8</td><td>-128-127</td></tr><tr><td>无符号整型</td><td>unsigned int</td><td>16</td><td>0-65535</td></tr><tr><td>有符号整型</td><td>int</td><td>16</td><td>-32768-32767</td></tr><tr><td>无符号长整型</td><td>unsigned long</td><td>32</td><td></td></tr><tr><td>有符号长整型</td><td>long</td><td>32</td><td></td></tr><tr><td>单精度浮点型</td><td>float</td><td>32</td><td></td></tr><tr><td>双精度浮点型</td><td>double</td><td>64</td><td></td></tr></tbody></table><p>注意单片机的位数是16位, 而我们的电脑是一般是32位和64位.</p><table><thead><tr><th>类别</th><th>运算符</th><th>描述</th></tr></thead><tbody><tr><td>算术</td><td>+</td><td>加</td></tr><tr><td>算术</td><td>-</td><td>减</td></tr><tr><td>算术</td><td>*</td><td>乘</td></tr><tr><td>算术</td><td>/</td><td>除</td></tr><tr><td>算术</td><td>*</td><td>余</td></tr><tr><td>条件</td><td>&gt;</td><td>大于</td></tr><tr><td>条件</td><td>&gt;=</td><td>大于等于</td></tr><tr><td>条件</td><td>&lt;</td><td>小于</td></tr><tr><td>条件</td><td>&lt;=</td><td>小于等于</td></tr><tr><td>条件</td><td>==</td><td>等于</td></tr><tr><td>条件</td><td>!=</td><td>不等于</td></tr><tr><td>逻辑</td><td>&amp;&amp;</td><td>与</td></tr><tr><td>逻辑</td><td>||</td><td>或</td></tr><tr><td>逻辑</td><td>!</td><td>非</td></tr><tr><td>位运算</td><td>&lt;&lt;</td><td>按位左移</td></tr><tr><td>位运算</td><td>&gt;&gt;</td><td>安位右移</td></tr><tr><td>位运算</td><td>&amp;</td><td>按位与</td></tr><tr><td>位运算</td><td>|</td><td>按位或</td></tr><tr><td>位运算</td><td>^</td><td>按位异或</td></tr><tr><td>位运算</td><td>~</td><td>按位取反</td></tr></tbody></table><p>在单片机中, 经常使用位运算 按位左移: <code>0011 1100 &lt;&lt; 1 = 0111 1000</code> 高位移出去, 低位补0 按位右移: <code>0011 1100 &gt;&gt; 1 = 0011 1100</code> 低位移出去, 高位补0 按位与: <code>0001 1000 &amp; 0010 1010 = 0000 1000</code> 只有都是1时, 才是1 按位或: <code>0001 1000 | 0010 1010 = 0011 1010</code> 只要有一个是1, 就是1 按位异或: <code>0001 1000 ^ 0010 1010 = 0011 0010</code> 不一样是1, 一样是0 按位取反: <code>~0001 1000 = 1110 0111</code> 0变成1 1变成0</p><h2 id="流程控制" tabindex="-1"><a class="header-anchor" href="#流程控制" aria-hidden="true">#</a> 流程控制</h2><h3 id="if" tabindex="-1"><a class="header-anchor" href="#if" aria-hidden="true">#</a> if</h3><div class="language-C line-numbers-mode" data-ext="C"><pre class="language-C"><code>if(逻辑表达式)
{
    语句体1;
}
else
{
    语句体2;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="while" tabindex="-1"><a class="header-anchor" href="#while" aria-hidden="true">#</a> while</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">while</span><span class="token punctuation">(</span>逻辑表达式<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    循环体<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> switch</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">switch</span><span class="token punctuation">(</span>变量<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">case</span> 常量<span class="token number">1</span><span class="token operator">:</span>语句体<span class="token number">1</span><span class="token punctuation">;</span><span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> 常量<span class="token number">2</span><span class="token operator">:</span>语句体<span class="token number">2</span><span class="token punctuation">;</span><span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span>
    <span class="token keyword">default</span><span class="token operator">:</span>语句体x<span class="token punctuation">;</span><span class="token keyword">break</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="for" tabindex="-1"><a class="header-anchor" href="#for" aria-hidden="true">#</a> for</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">for</span><span class="token punctuation">(</span>初始化<span class="token punctuation">;</span>逻辑表达式<span class="token punctuation">;</span>更改条件<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    循环体<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数组" tabindex="-1"><a class="header-anchor" href="#数组" aria-hidden="true">#</a> 数组</h2><p>数组：把相同类型的一系列数据统一编制到某一个组</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> x<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>			<span class="token comment">//定义一组变量（3个）</span>
<span class="token keyword">int</span> x<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">;</span>	<span class="token comment">//定义一组变量并初始化</span>

x<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> 		<span class="token comment">//引用数组的第0个变量</span>
x<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> 		<span class="token comment">//引用数组的第1个变量</span>
x<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>			<span class="token comment">//引用数组的第2个变量</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>引用x[3]时，数组越界，读出的数值不确定，应避免这种操作</p><h2 id="模块化编程" tabindex="-1"><a class="header-anchor" href="#模块化编程" aria-hidden="true">#</a> 模块化编程</h2><p>模块化编程：把各个模块的代码放在不同的.c文件里，在.h文件里提供外部可调用函数的声明，其它.c文件想使用其中的代码时，只需要#include &quot;XXX.h&quot;文件即可。使用模块化编程可极大的提高代码的可阅读性、可维护性、可移植性等</p><p>.c文件：函数、变量的定义 .h文件：可被外部调用的函数、变量的声明</p><p>任何自定义的变量、函数在调用前必须有定义或声明（同一个.c） 使用到的自定义函数的.c文件必须添加到工程参与编译 使用到的.h文件必须要放在编译器可寻找到的地方（工程文件夹根目录、安装目录、自定义）</p><h3 id="预编译" tabindex="-1"><a class="header-anchor" href="#预编译" aria-hidden="true">#</a> 预编译</h3><p>C语言的预编译以#开头，作用是在真正的编译开始之前，对代码做一些处理（预编译）</p><p><code>#include &lt;REGX52.H&gt;</code> 把REGX52.H文件的内容搬到此处 <code>#define PI 3.14</code> 定义PI，将PI替换为3.14 <code>#define ABC</code> 定义ABC <code>#ifndef __XX_H__</code> 如果没有定义__XX_H__ <code>#endif</code> 与#ifndef,#if匹配，组成“括号”</p><p>此外还有<code>#ifdef</code>,<code>#if</code>,<code>#else</code>,<code>#elif</code>,<code>#undef</code>等</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">AAA</span>  <span class="token comment">// 定义AAA</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">ifdef</span> <span class="token expression">AAA  </span><span class="token comment">//如果定义了AAA, xxx才参与编译</span></span>
xxx
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="样例" tabindex="-1"><a class="header-anchor" href="#样例" aria-hidden="true">#</a> 样例</h3><ol><li><code>Delay.c</code> 函数体</li></ol><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">Delay</span><span class="token punctuation">(</span><span class="token keyword">unsigned</span> <span class="token keyword">int</span> xms<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">unsigned</span> <span class="token keyword">char</span> i<span class="token punctuation">,</span> j<span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>xms<span class="token operator">--</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        i <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
        j <span class="token operator">=</span> <span class="token number">239</span><span class="token punctuation">;</span>
        <span class="token keyword">do</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">--</span>j<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">--</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li><code>Delay.h</code> 函数声明文件</li></ol><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">ifndef</span> <span class="token expression">__DELAY_H__</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">__DELAY_H__</span></span>

<span class="token keyword">void</span> <span class="token function">Delay</span><span class="token punctuation">(</span><span class="token keyword">unsigned</span> <span class="token keyword">int</span> xms<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li><code>main.c</code> 主程序入口</li></ol><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;Delay.h&quot;</span></span>


<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token function">Delay</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,35),c=[d];function i(p,o){return s(),a("div",null,c)}const u=n(e,[["render",i],["__file","c.html.vue"]]);export{u as default};
