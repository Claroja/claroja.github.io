import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,d as e}from"./app-j3zK2x6_.js";const p={},t=e(`<h1 id="type" tabindex="-1"><a class="header-anchor" href="#type" aria-hidden="true">#</a> type</h1><h2 id="类型声明" tabindex="-1"><a class="header-anchor" href="#类型声明" aria-hidden="true">#</a> 类型声明</h2><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 设置单个类型</span>
<span class="token keyword">let</span> 变量<span class="token operator">:</span> 类型<span class="token punctuation">;</span>
<span class="token keyword">let</span> 变量<span class="token operator">:</span> 类型 <span class="token operator">=</span> 值<span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span>参数<span class="token operator">:</span> 类型<span class="token punctuation">,</span> 参数<span class="token operator">:</span> 类型<span class="token punctuation">)</span><span class="token operator">:</span> 类型<span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token comment">// 也可以设置多个类型</span>
<span class="token keyword">let</span> 变量<span class="token operator">:</span> 类型<span class="token number">1</span> <span class="token operator">|</span> 类型<span class="token number">2</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">{</span>
<span class="token punctuation">}</span>


<span class="token comment">// &amp;表示同时</span>
<span class="token keyword">let</span> j<span class="token operator">:</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span> <span class="token operator">&amp;</span> <span class="token punctuation">{</span> age<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类型" tabindex="-1"><a class="header-anchor" href="#类型" aria-hidden="true">#</a> 类型</h3><ul><li>类型： | 类型 | 例子 | 描述 | | :-----: | :---------------: | :----------------------------: | | number | 1, -33, 2.5 | 任意数字 | | string | &#39;hi&#39;, &quot;hi&quot;, <code>hi</code> | 任意字符串 | | boolean | true、false | 布尔值true或false | | 字面量 | 其本身 | 限制变量的值就是该字面量的值 | | any | * | 任意类型 | | unknown | * | 类型安全的any | | void | 空值（undefined） | 没有值（或undefined） | | never | 没有值 | 不能是任何值 | | object | {name:&#39;孙悟空&#39;} | 任意的JS对象 | | array | [1,2,3] | 任意JS数组 | | tuple | [4,5] | 元素，TS新增类型，固定长度数组 | | enum | enum{A, B} | 枚举，TS中新增类型 |</li></ul><h4 id="number" tabindex="-1"><a class="header-anchor" href="#number" aria-hidden="true">#</a> number</h4><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> decimal<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> hex<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0xf00d</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> binary<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0b1010</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> octal<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0o744</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> big<span class="token operator">:</span> bigint <span class="token operator">=</span> <span class="token number">100n</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="boolean" tabindex="-1"><a class="header-anchor" href="#boolean" aria-hidden="true">#</a> boolean</h4><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> isDone<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="string" tabindex="-1"><a class="header-anchor" href="#string" aria-hidden="true">#</a> string</h4><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> color<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&quot;blue&quot;</span><span class="token punctuation">;</span>
color <span class="token operator">=</span> <span class="token string">&#39;red&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> fullName<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Bob Bobbington</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
<span class="token keyword">let</span> age<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">37</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> sentence<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Hello, my name is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>fullName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.I&#39;ll be </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>age <span class="token operator">+</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> years old next month.</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="字面量" tabindex="-1"><a class="header-anchor" href="#字面量" aria-hidden="true">#</a> 字面量</h4><p>通过字面量可以确定变量的取值范围, 和枚举类似</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> color<span class="token operator">:</span> <span class="token string">&#39;red&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;blue&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;black&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> num<span class="token operator">:</span> <span class="token number">1</span> <span class="token operator">|</span> <span class="token number">2</span> <span class="token operator">|</span> <span class="token number">3</span> <span class="token operator">|</span> <span class="token number">4</span> <span class="token operator">|</span> <span class="token number">5</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="any" tabindex="-1"><a class="header-anchor" href="#any" aria-hidden="true">#</a> any</h4><p>相当于回到了原生的js</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> d<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>
d <span class="token operator">=</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">;</span>
d <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="unknown" tabindex="-1"><a class="header-anchor" href="#unknown" aria-hidden="true">#</a> unknown</h4><p>any类型可以赋值给别的类型变量 unknown</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> e<span class="token operator">:</span> <span class="token builtin">unknown</span>
<span class="token keyword">let</span> s<span class="token operator">:</span> <span class="token builtin">string</span>
e<span class="token operator">=</span><span class="token string">&quot;hello&quot;</span>
s <span class="token operator">=</span> e <span class="token comment">//报错, 因为unknown的类型值不能赋值给其他类型, 但是any可以(所以unknown更加的严格, 建议使用unknown而不是any)</span>

<span class="token comment">// 1. 第一种赋值的方法</span>
<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> e <span class="token operator">===</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    s <span class="token operator">=</span> e <span class="token comment">//是可以的, 因为已经确认了e的类型</span>
<span class="token punctuation">}</span>
<span class="token comment">// 2. 第二种赋值的方法</span>
s <span class="token operator">=</span> e <span class="token keyword">as</span> <span class="token builtin">string</span>
<span class="token comment">// 3. 第三种方法, 类似于java的泛型</span>
s <span class="token operator">=</span> <span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span> e
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="void" tabindex="-1"><a class="header-anchor" href="#void" aria-hidden="true">#</a> void</h4><p>表示没有返回值, 返回值可能为null</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="never" tabindex="-1"><a class="header-anchor" href="#never" aria-hidden="true">#</a> never</h4><p>表示没有返回值, 函数没执行完</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">error</span><span class="token punctuation">(</span>message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">never</span> <span class="token punctuation">{</span>
  <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="object-没啥用" tabindex="-1"><a class="header-anchor" href="#object-没啥用" aria-hidden="true">#</a> object（没啥用）</h4><p>因为js任何东西都是对象</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">//一般不这么使用</span>
<span class="token keyword">let</span> obj<span class="token operator">:</span> object <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// 正常的用法</span>
<span class="token keyword">let</span> b<span class="token operator">:</span> <span class="token punctuation">{</span>name<span class="token operator">:</span> stirng<span class="token punctuation">,</span> age<span class="token operator">?</span><span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">}</span><span class="token punctuation">;</span><span class="token comment">//规定了对象的结构(只有一个name), 以及name的类型是string, age后面问号表示,该字段可有可无, 可选属性</span>
b <span class="token operator">=</span> <span class="token punctuation">{</span>name<span class="token operator">:</span><span class="token string">&#39;王&#39;</span><span class="token punctuation">}</span>

<span class="token keyword">let</span> c<span class="token operator">:</span> <span class="token punctuation">{</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span><span class="token punctuation">[</span>prop<span class="token operator">:</span> sting<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">}</span> <span class="token comment">//要求有一个name属性是string类型, 其他属性不做限定</span>


<span class="token comment">// 设置函数结构的类型声明：语法：(形参:类型, 形参:类型 ...) =&gt; 返回值</span>
<span class="token keyword">let</span> <span class="token function-variable function">d</span><span class="token operator">:</span> <span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">,</span>b<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token comment">// d = function (n1: string, n2: string): number{</span>
<span class="token comment">//     return 10;</span>
<span class="token comment">// }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="array" tabindex="-1"><a class="header-anchor" href="#array" aria-hidden="true">#</a> array</h4><p>数组的类型声明, 两种方式:</p><ol><li>类型[]</li><li>Array&lt;类型&gt;</li></ol><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> list<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> list<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="tuple" tabindex="-1"><a class="header-anchor" href="#tuple" aria-hidden="true">#</a> tuple</h4><p>元组就是固定长度的数组 语法：[类型, 类型, 类型]</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> x<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
x <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="enum" tabindex="-1"><a class="header-anchor" href="#enum" aria-hidden="true">#</a> enum</h4><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">enum</span> Gender<span class="token punctuation">{</span>
    Male<span class="token punctuation">,</span>
    Female
<span class="token punctuation">}</span>

<span class="token keyword">let</span> i<span class="token operator">:</span> <span class="token punctuation">{</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> gender<span class="token operator">:</span> Gender<span class="token punctuation">}</span><span class="token punctuation">;</span>
i <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&#39;孙悟空&#39;</span><span class="token punctuation">,</span>
    gender<span class="token operator">:</span> Gender<span class="token punctuation">.</span>Male <span class="token comment">// &#39;male&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="自定义类型名" tabindex="-1"><a class="header-anchor" href="#自定义类型名" aria-hidden="true">#</a> 自定义类型名</h4><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">myType</span> <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">|</span> <span class="token number">2</span> <span class="token operator">|</span> <span class="token number">3</span> <span class="token operator">|</span> <span class="token number">4</span> <span class="token operator">|</span> <span class="token number">5</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> k<span class="token operator">:</span> myType<span class="token punctuation">;</span>
<span class="token keyword">let</span> l<span class="token operator">:</span> myType<span class="token punctuation">;</span>
<span class="token keyword">let</span> m<span class="token operator">:</span> myType<span class="token punctuation">;</span>
k <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,41),o=[t];function l(c,i){return s(),a("div",null,o)}const d=n(p,[["render",l],["__file","ts_type.html.vue"]]);export{d as default};
