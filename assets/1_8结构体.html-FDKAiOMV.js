import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as e}from"./app-nD1Z-e8V.js";const i={},t=e(`<h2 id="quick" tabindex="-1"><a class="header-anchor" href="#quick" aria-hidden="true">#</a> quick</h2><p>一般使用typedef来定义</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">tagPoint</span>
<span class="token punctuation">{</span>
    <span class="token keyword">double</span> x<span class="token punctuation">;</span>
    <span class="token keyword">double</span> y<span class="token punctuation">;</span>
    <span class="token keyword">double</span> z<span class="token punctuation">;</span>
<span class="token punctuation">}</span> Point<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考:http://c.biancheng.net/view/298.html</p><h2 id="基础" tabindex="-1"><a class="header-anchor" href="#基础" aria-hidden="true">#</a> 基础</h2><ol><li>结构体也是基础类型,它是值传递,非引用传递,在作为传参时尽量使用指针,不然形参拷贝会浪费空间</li><li>直接调结构体变量是没有意义的,区别于数组变量是代表了数组的首元素地址</li></ol><h2 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h2><p>可以在main函数外定义,可也以在main函数内定义</p><h3 id="在main之外定义" tabindex="-1"><a class="header-anchor" href="#在main之外定义" aria-hidden="true">#</a> 在main之外定义</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># include &lt;stdio.h&gt;//引用函数库
# include &lt;stdlib.h&gt;
struct info{
	char name[20];
	int age;
};
struct info info1;
void main(){
	info1.age=19;
	sprintf(info1.name,&quot;xiaowang&quot;);//(stdio.h)，第一种初始化字符串方法
	//strcpy(info1.name,&quot;xiaowang&quot;);//(string.h)，第二种初始化字符串方法
	printf(&quot;%s %d&quot;,info1.name,info1.age);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在main内定义" tabindex="-1"><a class="header-anchor" href="#在main内定义" aria-hidden="true">#</a> 在main内定义</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># include &lt;stdio.h&gt;//引用函数库
# include &lt;stdlib.h&gt;
struct info{
	char name[20];
	int age;
};

void main(){
	struct info info1;
	info1.age=19;
	sprintf(info1.name,&quot;xiaowang&quot;);//(stdio.h)，第一种初始化字符串方法
	//strcpy(info1.name,&quot;xiaowang&quot;);//(string.h)，第二种初始化字符串方法
	printf(&quot;%s %d&quot;,info1.name,info1.age);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="声明结构体的时候直接定义" tabindex="-1"><a class="header-anchor" href="#声明结构体的时候直接定义" aria-hidden="true">#</a> 声明结构体的时候直接定义</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># include &lt;stdio.h&gt;//引用函数库
# include &lt;stdlib.h&gt;
struct info{
	char name[20];
	int age;
}info1,info2;

void main(){
	struct info info1;
	info1.age=18;
	sprintf(info1.name,&quot;xiaowang&quot;);//(stdio.h)，第一种初始化字符串方法
	//strcpy(info1.name,&quot;xiaowang&quot;);//(string.h)，第二种初始化字符串方法
	printf(&quot;%s %d&quot;,info1.name,info1.age);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="初始化结构体变量" tabindex="-1"><a class="header-anchor" href="#初始化结构体变量" aria-hidden="true">#</a> 初始化结构体变量</h2><h3 id="单个参量初始化" tabindex="-1"><a class="header-anchor" href="#单个参量初始化" aria-hidden="true">#</a> 单个参量初始化</h3><p>参考结构体定义</p><h3 id="结构体变量整体初始化" tabindex="-1"><a class="header-anchor" href="#结构体变量整体初始化" aria-hidden="true">#</a> 结构体变量整体初始化</h3><p>结构体变量不能整体引用，只能一个一个访问，赋值的时候才能用大括号一起赋值</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># include &lt;stdio.h&gt;//引用函数库
# include &lt;stdlib.h&gt;
struct info{
	char name[20];
	int age;
};
void main(){
	struct info info1={&quot;xiaowang&quot;,18};
	printf(&quot;%s %d&quot;,info1.name,info1.age);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="匿名结构体" tabindex="-1"><a class="header-anchor" href="#匿名结构体" aria-hidden="true">#</a> 匿名结构体</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># include &lt;stdio.h&gt;//引用函数库
# include &lt;stdlib.h&gt;
struct
{
	char name[20];
	int age;
}info1={&quot;xiaowang&quot;,17};//匿名结构体变量初始化只能紧跟结构体定义
void main(){
	printf(&quot;%s %d&quot;,info1.name,info1.age);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="嵌套结构体" tabindex="-1"><a class="header-anchor" href="#嵌套结构体" aria-hidden="true">#</a> 嵌套结构体</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>struct info{
	char name[20];
	int age;
	struct info_inner{//再次定义的结构体的变量会被当成母体的变量
									//这个结构体不能在上层结构体内直接引用
		int score;
		int height;
	};
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>等价于</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>struct info{
	char name[20];
	int age;
	int score;
	int height;
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="嵌套结构体应用" tabindex="-1"><a class="header-anchor" href="#嵌套结构体应用" aria-hidden="true">#</a> 嵌套结构体应用</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># include &lt;stdio.h&gt;//引用函数库
# include &lt;stdlib.h&gt;
struct info{
	char name[20];
	int age;
	struct info_inner{//再次定义的结构体的变量会被当成母体的变量
									//这个结构体不能在上层结构体内直接引用
		int score;
		int height;
	}student1;//内部定义的第一种方式
	struct info_inner student2;//内部定义的第二种方式
};
void main(){
	struct info class;
	class.student1.score = 99;
	printf(&quot;%d\\n&quot;,class.student1.score);
	class.student2.score = 98;
	printf(&quot;%d&quot;,class.student2.score);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="结构体对齐" tabindex="-1"><a class="header-anchor" href="#结构体对齐" aria-hidden="true">#</a> 结构体对齐</h2><ol><li>结构体本来应该占用1(char)+4(int)=5个字节,但是为了对齐,实际上占了1(char)+3(补充)+4(int)=8个字节</li><li>这是因为计算机读取数据时,一般标准化4个字节读取,为了节约时间,牺牲3个字符大小的内存,以空间换时间</li></ol><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">pragma</span> <span class="token expression"><span class="token function">warning</span><span class="token punctuation">(</span>disable<span class="token operator">:</span><span class="token number">4996</span><span class="token punctuation">)</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">struct</span> <span class="token class-name">test</span> <span class="token punctuation">{</span>
	<span class="token keyword">char</span> a<span class="token punctuation">;</span>
	<span class="token keyword">int</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token operator">*</span>argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">struct</span> <span class="token class-name">test</span> a <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token char">&#39;a&#39;</span><span class="token punctuation">,</span><span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token keyword">struct</span> <span class="token class-name">test</span> <span class="token operator">*</span>p <span class="token operator">=</span> <span class="token operator">&amp;</span>a<span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;结构体内存空间:%d字节,起始地址:%x,结束地址:%x\\n&quot;</span><span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">test</span><span class="token punctuation">)</span><span class="token punctuation">,</span>p<span class="token punctuation">,</span>p<span class="token operator">+</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">test</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">system</span><span class="token punctuation">(</span><span class="token string">&quot;pause&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,31),d=[t];function l(c,r){return s(),a("div",null,d)}const v=n(i,[["render",l],["__file","1_8结构体.html.vue"]]);export{v as default};
