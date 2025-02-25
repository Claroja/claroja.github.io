import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as e,a as d}from"./app-7knaTE3M.js";const t="/assets/1-3CQGp49E.png",s={},l=d(`<p>所有的循环都可以写成递归，但递归不一定能写成循环</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># include &lt;stdio.h&gt;//引用函数库
//递归实现累加
int add_r(int num){
	if (num == 0){
		return 0;
	}
	else{
		return add_r(num-1) + num;
	}
}
//循环实现累加
int add_l(int num){
	int n1 = 0;
	int n2;
	for (int i = 0; i &lt; num; i++){
		n2 = n1+i+1;
		n1 = n2;
	}
	return n2;
}

int main(){
	printf(&quot;%d&quot;, add_r(15));
	printf(&quot;%d&quot;, add_l(15));
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+t+'" alt="alt text" tabindex="0" loading="lazy"><figcaption>alt text</figcaption></figure><p>最内层的函数最后调用，最先执行，最先调用的函数，要等后一个调用的函数执行完才能执行</p>',4),a=[l];function r(v,c){return i(),e("div",null,a)}const o=n(s,[["render",r],["__file","5函数递归.html.vue"]]);export{o as default};
