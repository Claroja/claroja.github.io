import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as i,a as d}from"./app-nD1Z-e8V.js";const l={},a=d(`<p>1.创建头文件<code>mydll.h</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#pragma once
//内部函数,动态库自己调用,其他程序不能调用
//外部函数,外部调用

//__declspec(dllexport)导出函数
__declspec(dllexport) int myadd(int a, int b);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.创建源文件<code>mydll.c</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#include &quot;mydll.h&quot;
int myadd(int a, int b) {
	return a + b;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.右键项目,选择属性,在常规里将配置类型改为<strong>动态库(.dll)</strong> 4.右键项目,重新生成,在Debug文件夹下得到<strong>project.lib (对象文件库)<strong>和</strong>project.dll(动态库)</strong>,库的名称是项目名称 我们需要把<code>project.lib</code>,<code>project.dll</code>文件和<code>mylib.h</code>发给别人使用</p><h1 id="动态库使用" tabindex="-1"><a class="header-anchor" href="#动态库使用" aria-hidden="true">#</a> 动态库使用</h1><p>1.将动态库三个文件拷贝到当前项目文件夹下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#include &lt;stdio.h&gt;
#include &lt;string.h&gt;
#include &lt;stdlib.h&gt;
#include &quot;mydll.h&quot;//包含动态库的头文件
#pragma comment(lib,&quot;./tesdll.lib&quot;)//导入动态库

int main(int argc, char** argv)
{
	int res = myadd(10, 20);
	printf(&quot;%d\\n&quot;, res);
	system(&quot;pause&quot;);
	return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="动态库的优点" tabindex="-1"><a class="header-anchor" href="#动态库的优点" aria-hidden="true">#</a> 动态库的优点</h1><p>编译时不引入,运行时引用,所以不占用空间</p><h1 id="python调用动态库" tabindex="-1"><a class="header-anchor" href="#python调用动态库" aria-hidden="true">#</a> python调用动态库</h1><p>python只需要把<code>.dll</code>文件复制到项目目录下即可</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import ctypes
lib = ctypes.cdll.LoadLibrary(&quot;./tesdll.dll&quot;)
lib.myadd(10,20)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),s=[a];function t(r,c){return n(),i("div",null,s)}const v=e(l,[["render",t],["__file","win动态库.html.vue"]]);export{v as default};
