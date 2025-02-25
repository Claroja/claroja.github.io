import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as e,a as d}from"./app-7knaTE3M.js";const s={},l=d(`<h2 id="隐式转换-自动转换" tabindex="-1"><a class="header-anchor" href="#隐式转换-自动转换" aria-hidden="true">#</a> 隐式转换(自动转换)</h2><p>遵循一定的规则,由编译系统自动完成</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#include &lt;stdio.h&gt;

int main()
{
	int num = 5;
	printf(&quot;s1=%d\\n&quot;, num / 2);
	printf(&quot;s2=%lf\\n&quot;, num / 2.0);

	return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="强制类型转换" tabindex="-1"><a class="header-anchor" href="#强制类型转换" aria-hidden="true">#</a> 强制类型转换</h2><p>把表达式的运算结果强制转换成所需的数据类型。<code>(类型说明符) (表达式)</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#include &lt;stdio.h&gt;

int main()
{
	float x = 0;
	int i = 0;
	x = 3.6f;

	i = x;			//x为实型, i为整型，直接赋值会有警告
	i = (int)x;		//使用强制类型转换

	printf(&quot;x=%f, i=%d\\n&quot;, x, i);

	return 0;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),t=[l];function a(r,v){return n(),e("div",null,t)}const m=i(s,[["render",a],["__file","1_5类型转换.html.vue"]]);export{m as default};
