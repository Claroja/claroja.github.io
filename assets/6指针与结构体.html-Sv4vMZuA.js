import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as e,a as d}from"./app-7knaTE3M.js";const t={},s=d(`<h1 id="结构体指针" tabindex="-1"><a class="header-anchor" href="#结构体指针" aria-hidden="true">#</a> 结构体指针</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># include &lt;stdio.h&gt;//引用函数库
# include &lt;stdlib.h&gt;
struct info{
	char name[4];
	int age;
};
void main(){
	struct info student1;
	student1.age = 19;
	sprintf(student1.name,&quot;li&quot;);
	printf(&quot;%d,%s\\n&quot;,student1.age,student1.name);

	struct info *p;//p存储地址，struct info决定内存长度
	p=&amp;student1;
	printf(&quot;%d,%s\\n&quot;,(*p).age,(*p).name);//指针访问结构体第一种方法
	printf(&quot;%d,%s\\n&quot;,p-&gt;age,p-&gt;name);//指针访问结构体第二种方法
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="结构体数组指针" tabindex="-1"><a class="header-anchor" href="#结构体数组指针" aria-hidden="true">#</a> 结构体数组指针</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># include &lt;stdio.h&gt;//引用函数库
# include &lt;stdlib.h&gt;
struct info{
	char name[10];
	int age;
};
void main(){
	struct info student1[2]={&quot;li&quot;,18,&quot;lu&quot;,17};
	for (struct info *p =student1;p&lt;student1+2;p++){
		printf(&quot;%s,%d\\n&quot;,p-&gt;name,p-&gt;age);
		printf(&quot;%s,%d\\n&quot;,(*p).name,(*p).age);
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="结构体指针作为参数" tabindex="-1"><a class="header-anchor" href="#结构体指针作为参数" aria-hidden="true">#</a> 结构体指针作为参数</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># include &lt;stdio.h&gt;//引用函数库
# include &lt;stdlib.h&gt;
struct info{
	char name[10];
	int age;
};
change(struct info *p){
	p-&gt;age=10;
}
void main(){
	struct info student1={&quot;li&quot;,18};
	change(&amp;student1);
	printf(&quot;%d&quot;,student1.age);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="结构体数组作为参数" tabindex="-1"><a class="header-anchor" href="#结构体数组作为参数" aria-hidden="true">#</a> 结构体数组作为参数</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># include &lt;stdio.h&gt;//引用函数库
# include &lt;stdlib.h&gt;
struct info{
	char name[10];
	int age;
};
change(struct info student[]){//函数参数传递的是数组的地址，而不是新建了一个数组
	student[1].age=100;
}
void main(){
	struct info student1[2]={&quot;li&quot;,18,&quot;lu&quot;,17};
	change(&amp;student1);
	printf(&quot;%d&quot;,student1[1].age);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>动态分配结构体内存</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># include &lt;stdio.h&gt;//引用函数库
# include &lt;stdlib.h&gt;
struct info{
	char name[10];
	int age;
};
void main(){
	struct info *p=(struct info *)malloc(sizeof(struct info)*2);//malloc返回的是void类型指针，所以要强转
	for (int i =0;i&lt;2;i++){//指针数组
		p[i].age=i*10;
		printf(&quot;%d &quot;,p[i].age);
	}
	for (int i =0;i&lt;2;i++){//指针
		(*(p+i)).age=i*10;
		printf(&quot;%d &quot;,(*(p+i)).age);
	}
	for (struct info *pp=p;pp&lt;p+2;pp++){//指针轮循
		(*pp).age=10;
		printf(&quot;%d &quot;,(*pp).age);
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),l=[s];function a(u,v){return n(),e("div",null,l)}const m=i(t,[["render",a],["__file","6指针与结构体.html.vue"]]);export{m as default};
