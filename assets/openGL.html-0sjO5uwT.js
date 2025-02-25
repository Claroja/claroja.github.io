import{_ as p}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as t,a,b as n,d as s}from"./app-nD1Z-e8V.js";const o={},l=a(`<h1 id="离散-期望" tabindex="-1"><a class="header-anchor" href="#离散-期望" aria-hidden="true">#</a> 离散_期望</h1><h2 id="设置窗口" tabindex="-1"><a class="header-anchor" href="#设置窗口" aria-hidden="true">#</a> 设置窗口</h2><h2 id="点" tabindex="-1"><a class="header-anchor" href="#点" aria-hidden="true">#</a> 点</h2><p>所有的电脑图像都是2维的. 最基础的是画点(points or pixels), 设置大小(size)和颜色(color)</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> OpenGL<span class="token punctuation">.</span>GL <span class="token keyword">import</span> <span class="token operator">*</span>
<span class="token keyword">from</span> OpenGL<span class="token punctuation">.</span>GLU <span class="token keyword">import</span> <span class="token operator">*</span>
<span class="token keyword">from</span> OpenGL<span class="token punctuation">.</span>GLUT <span class="token keyword">import</span> <span class="token operator">*</span>

<span class="token keyword">def</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    glClearColor<span class="token punctuation">(</span><span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">)</span>  <span class="token comment"># 背景设置为黑色 (red, green, blue, alpha)</span>
    gluOrtho2D<span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">)</span>  <span class="token comment"># 设置坐标(x-left, x-right, y-bottom, y-top)</span>


<span class="token keyword">def</span> <span class="token function">plotpoints</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    glClear<span class="token punctuation">(</span>GL_COLOR_BUFFER_BIT<span class="token punctuation">)</span>  <span class="token comment"># 清除当前屏幕, 使用init()中设置的背景</span>
    glColor3f<span class="token punctuation">(</span><span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">)</span>  <span class="token comment"># 给笔着色(red, green, blue)</span>

    glBegin<span class="token punctuation">(</span>GL_POINTS<span class="token punctuation">)</span>  <span class="token comment"># 开始画, 并指定绘制点(point), 还可以指定其他, 比如 GL_LINES</span>
    glVertex2f<span class="token punctuation">(</span><span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">)</span>  <span class="token comment"># 坐标(x,y)</span>
    glEnd<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># 结束作画</span>
    glFlush<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># 发送到屏幕</span>

<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    glutInit<span class="token punctuation">(</span><span class="token punctuation">)</span>
    glutInitDisplayMode<span class="token punctuation">(</span>GLUT_SINGLE<span class="token operator">|</span>GLUT_RGB<span class="token punctuation">)</span>
    glutInitWindowSize<span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">,</span><span class="token number">500</span><span class="token punctuation">)</span>
    glutInitWindowPosition<span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">,</span><span class="token number">50</span><span class="token punctuation">)</span>
    glutCreateWindow<span class="token punctuation">(</span><span class="token string">&quot;Plot Points&quot;</span><span class="token punctuation">)</span>
    glutDisplayFunc<span class="token punctuation">(</span>plotpoints<span class="token punctuation">)</span>

    init<span class="token punctuation">(</span><span class="token punctuation">)</span>
    glutMainLoop<span class="token punctuation">(</span><span class="token punctuation">)</span>


    
main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="plotting-2d-functions" tabindex="-1"><a class="header-anchor" href="#plotting-2d-functions" aria-hidden="true">#</a> Plotting 2D Functions</h3><p>做一个二次函数</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> OpenGL<span class="token punctuation">.</span>GL <span class="token keyword">import</span> <span class="token operator">*</span>
<span class="token keyword">from</span> OpenGL<span class="token punctuation">.</span>GLU <span class="token keyword">import</span> <span class="token operator">*</span>
<span class="token keyword">from</span> OpenGL<span class="token punctuation">.</span>GLUT <span class="token keyword">import</span> <span class="token operator">*</span>
<span class="token keyword">from</span> numpy <span class="token keyword">import</span> <span class="token operator">*</span>



<span class="token keyword">def</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    glClearColor<span class="token punctuation">(</span><span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">)</span>
    gluOrtho2D<span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">5.0</span><span class="token punctuation">,</span> <span class="token number">5.0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">5.0</span><span class="token punctuation">,</span> <span class="token number">5.0</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">plotfunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    glClear<span class="token punctuation">(</span>GL_COLOR_BUFFER_BIT<span class="token punctuation">)</span>
    glColor3f<span class="token punctuation">(</span><span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">)</span>
    glPointSize<span class="token punctuation">(</span><span class="token number">3.0</span><span class="token punctuation">)</span>

    <span class="token comment"># 画出x轴和y轴</span>
    glBegin<span class="token punctuation">(</span>GL_LINES<span class="token punctuation">)</span>  <span class="token comment"># 指定绘制的是线</span>
    glVertex2f<span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">5.0</span><span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">)</span>
    glVertex2f<span class="token punctuation">(</span><span class="token number">5.0</span><span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">)</span>
    glVertex2f<span class="token punctuation">(</span><span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">5.0</span><span class="token punctuation">)</span>
    glVertex2f<span class="token punctuation">(</span><span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">5.0</span><span class="token punctuation">)</span>
    glEnd<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">for</span> x <span class="token keyword">in</span> arange<span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">5.0</span><span class="token punctuation">,</span> <span class="token number">5.0</span><span class="token punctuation">,</span> <span class="token number">0.1</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        y <span class="token operator">=</span> x<span class="token operator">*</span>x
        <span class="token comment"># 每次画点 都是这三个步骤</span>
        glBegin<span class="token punctuation">(</span>GL_POINTS<span class="token punctuation">)</span>  <span class="token comment"># GL_POINTS是指定绘制的是点</span>
        glVertex2f<span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span>
        glEnd<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token comment"># 每次都推送到屏幕上</span>
        glFlush<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    glutInit<span class="token punctuation">(</span>sys<span class="token punctuation">.</span>argv<span class="token punctuation">)</span>
    glutInitDisplayMode<span class="token punctuation">(</span>GLUT_SINGLE<span class="token operator">|</span>GLUT_RGB<span class="token punctuation">)</span>
    glutInitWindowPosition<span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">,</span><span class="token number">50</span><span class="token punctuation">)</span>
    glutInitWindowSize<span class="token punctuation">(</span><span class="token number">400</span><span class="token punctuation">,</span><span class="token number">400</span><span class="token punctuation">)</span>
    glutCreateWindow<span class="token punctuation">(</span><span class="token string">&quot;Function Plotter&quot;</span><span class="token punctuation">)</span>
    glutDisplayFunc<span class="token punctuation">(</span>plotfunc<span class="token punctuation">)</span>

    init<span class="token punctuation">(</span><span class="token punctuation">)</span>
    glutMainLoop<span class="token punctuation">(</span><span class="token punctuation">)</span>

main<span class="token punctuation">(</span><span class="token punctuation">)</span> 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="parametric-equations" tabindex="-1"><a class="header-anchor" href="#parametric-equations" aria-hidden="true">#</a> Parametric Equations</h3><p>通过<code>y=sing(t)</code>和<code>y=cos(t)</code>来做一个圆</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">plotfunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    glClear<span class="token punctuation">(</span>GL_COLOR_BUFFER_BIT<span class="token punctuation">)</span>
    glColor3f<span class="token punctuation">(</span><span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">)</span>
    glPointSize<span class="token punctuation">(</span><span class="token number">1.0</span><span class="token punctuation">)</span>

    <span class="token comment"># Plot the coordinate axes</span>
    glBegin<span class="token punctuation">(</span>GL_LINES<span class="token punctuation">)</span>
    glVertex2f<span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">2.0</span><span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">)</span>
    glVertex2f<span class="token punctuation">(</span><span class="token number">2.0</span><span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">)</span>
    glVertex2f<span class="token punctuation">(</span><span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">2.0</span><span class="token punctuation">)</span>
    glVertex2f<span class="token punctuation">(</span><span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">2.0</span><span class="token punctuation">)</span>
    glEnd<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment"># Plot the parametric equations</span>
    <span class="token keyword">for</span> t <span class="token keyword">in</span> arange<span class="token punctuation">(</span><span class="token number">0.0</span><span class="token punctuation">,</span><span class="token number">6.28</span><span class="token punctuation">,</span> <span class="token number">0.001</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        x <span class="token operator">=</span> sin<span class="token punctuation">(</span>t<span class="token punctuation">)</span>
        y <span class="token operator">=</span> cos<span class="token punctuation">(</span>t<span class="token punctuation">)</span>
        glBegin<span class="token punctuation">(</span>GL_POINTS<span class="token punctuation">)</span>
        glVertex2f<span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span>
        glEnd<span class="token punctuation">(</span><span class="token punctuation">)</span>
        glFlush<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="an-example-from-physics" tabindex="-1"><a class="header-anchor" href="#an-example-from-physics" aria-hidden="true">#</a> An Example from Physics</h3><h3 id="section-5-5-polar-coordinates" tabindex="-1"><a class="header-anchor" href="#section-5-5-polar-coordinates" aria-hidden="true">#</a> Section 5.5 Polar Coordinates</h3>`,13),c=n("p",null,[s("在代数中我们使用直角坐标系(Cartesian rectangular coordinate system), 另外还有极坐标系(polar coordinates), 利用"),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"r")]),n("annotation",{encoding:"application/x-tex"},"r")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.4306em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"r")])])]),s("(半径)和"),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"θ")]),n("annotation",{encoding:"application/x-tex"},"\\theta")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.6944em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"θ")])])]),s("(角度)来确定点的位置.")],-1),i=n("p",null,"绘制极坐标图像, 需要先将极坐标的点转换为笛卡尔坐标点.",-1),u=n("p",{class:"katex-block"},[n("span",{class:"katex-display"},[n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[n("semantics",null,[n("mrow",null,[n("mi",null,"x"),n("mo",null,"="),n("mi",null,"r"),n("mo",null,"⋅"),n("mi",null,"c"),n("mi",null,"o"),n("mi",null,"s"),n("mo",{stretchy:"false"},"("),n("mi",null,"θ"),n("mo",{stretchy:"false"},")"),n("mi",null,"y"),n("mo",null,"="),n("mi",null,"r"),n("mo",null,"⋅"),n("mi",null,"s"),n("mi",null,"i"),n("mi",null,"n"),n("mo",{stretchy:"false"},"("),n("mi",null,"θ"),n("mo",{stretchy:"false"},")")]),n("annotation",{encoding:"application/x-tex"}," x = r \\cdot cos(\\theta) y = r \\cdot sin(\\theta) ")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.4306em"}}),n("span",{class:"mord mathnormal"},"x"),n("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),n("span",{class:"mrel"},"="),n("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.4445em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"r"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),n("span",{class:"mbin"},"⋅"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mord mathnormal"},"cos"),n("span",{class:"mopen"},"("),n("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"θ"),n("span",{class:"mclose"},")"),n("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),n("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),n("span",{class:"mrel"},"="),n("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.4445em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"r"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),n("span",{class:"mbin"},"⋅"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mord mathnormal"},"s"),n("span",{class:"mord mathnormal"},"in"),n("span",{class:"mopen"},"("),n("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"θ"),n("span",{class:"mclose"},")")])])])])],-1),r=a(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>
<span class="token keyword">from</span> OpenGL<span class="token punctuation">.</span>GL <span class="token keyword">import</span> <span class="token operator">*</span>
<span class="token keyword">from</span> OpenGL<span class="token punctuation">.</span>GLU <span class="token keyword">import</span> <span class="token operator">*</span>
<span class="token keyword">from</span> OpenGL<span class="token punctuation">.</span>GLUT <span class="token keyword">import</span> <span class="token operator">*</span>
<span class="token keyword">from</span> numpy <span class="token keyword">import</span> <span class="token operator">*</span>
<span class="token keyword">import</span> sys 

<span class="token comment">## 设置窗口的大小以及极坐标的范围</span>
<span class="token keyword">global</span> width
<span class="token keyword">global</span> height
<span class="token keyword">global</span> axrng

width <span class="token operator">=</span> <span class="token number">400</span>
height <span class="token operator">=</span> <span class="token number">400</span>
axrng <span class="token operator">=</span> <span class="token number">7.0</span> 

<span class="token keyword">def</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    glClearColor<span class="token punctuation">(</span><span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">plotpolar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>

    glClear<span class="token punctuation">(</span>GL_COLOR_BUFFER_BIT<span class="token punctuation">)</span>

    <span class="token comment"># Plot axis lines for reference</span>
    glColor3f<span class="token punctuation">(</span><span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">)</span>
    glBegin<span class="token punctuation">(</span>GL_LINES<span class="token punctuation">)</span>
    glVertex2f<span class="token punctuation">(</span><span class="token operator">-</span>axrng<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span>
    glVertex2f<span class="token punctuation">(</span>axrng<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span>
    glVertex2f<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span>axrng<span class="token punctuation">)</span>
    glVertex2f<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token operator">-</span>axrng<span class="token punctuation">)</span>
    glEnd<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment"># Plot polar equation for a Limacon</span>
    glPointSize<span class="token punctuation">(</span><span class="token number">2.0</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> theta <span class="token keyword">in</span> arange<span class="token punctuation">(</span><span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">6.28</span><span class="token punctuation">,</span> <span class="token number">0.001</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        r <span class="token operator">=</span> <span class="token number">4</span><span class="token operator">*</span>cos<span class="token punctuation">(</span>theta<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">2</span>
        x <span class="token operator">=</span> r<span class="token operator">*</span>cos<span class="token punctuation">(</span>theta<span class="token punctuation">)</span>
        y <span class="token operator">=</span> r<span class="token operator">*</span>sin<span class="token punctuation">(</span>theta<span class="token punctuation">)</span>
        glBegin<span class="token punctuation">(</span>GL_POINTS<span class="token punctuation">)</span>
        glVertex2f<span class="token punctuation">(</span>x<span class="token punctuation">,</span>y<span class="token punctuation">)</span>
        glEnd<span class="token punctuation">(</span><span class="token punctuation">)</span>
        glFlush<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">reshape</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span> h<span class="token punctuation">)</span><span class="token punctuation">:</span>  <span class="token comment"># 每次改变窗口时被调用, (w,h)是调用时窗口的宽度和高度</span>
    <span class="token comment"># To insure we don&#39;t have a zero window height</span>
    <span class="token keyword">if</span> h<span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">:</span>
        h <span class="token operator">=</span> <span class="token number">1</span>
    <span class="token comment"># Fill the entire graphics window!</span>
    glViewport<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> w<span class="token punctuation">,</span> h<span class="token punctuation">)</span>
    <span class="token comment"># Set the projection matrix... our &quot;view&quot;</span>
    glMatrixMode<span class="token punctuation">(</span>GL_PROJECTION<span class="token punctuation">)</span>
    glLoadIdentity<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment"># Set the aspect ratio of the plot so that it</span>
    <span class="token comment"># Always looks &quot;OK&quot; and never distorted.</span>
    <span class="token keyword">if</span> w <span class="token operator">&lt;=</span> h<span class="token punctuation">:</span>
        gluOrtho2D<span class="token punctuation">(</span><span class="token operator">-</span>axrng<span class="token punctuation">,</span> axrng<span class="token punctuation">,</span> <span class="token operator">-</span>axrng<span class="token operator">*</span>h<span class="token operator">/</span>w<span class="token punctuation">,</span> axrng<span class="token operator">*</span>h<span class="token operator">/</span>w<span class="token punctuation">)</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        gluOrtho2D<span class="token punctuation">(</span><span class="token operator">-</span>axrng<span class="token operator">*</span>w<span class="token operator">/</span>h<span class="token punctuation">,</span> axrng<span class="token operator">*</span>w<span class="token operator">/</span>h<span class="token punctuation">,</span> <span class="token operator">-</span>axrng<span class="token punctuation">,</span> axrng<span class="token punctuation">)</span>
    <span class="token comment"># Set the matrix for the object we are drawing</span>
    glMatrixMode<span class="token punctuation">(</span>GL_MODELVIEW<span class="token punctuation">)</span>
    glLoadIdentity<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">keyboard</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># Allows us to quit by pressing &#39;Esc&#39; or &#39;q&#39;</span>
    <span class="token keyword">if</span> key <span class="token operator">==</span> <span class="token builtin">chr</span><span class="token punctuation">(</span><span class="token number">27</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        sys<span class="token punctuation">.</span>exit<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> key <span class="token operator">==</span> <span class="token string">&quot;q&quot;</span><span class="token punctuation">:</span>
        sys<span class="token punctuation">.</span>exit<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">global</span> width
    <span class="token keyword">global</span> height

    glutInit<span class="token punctuation">(</span>sys<span class="token punctuation">.</span>argv<span class="token punctuation">)</span>
    glutInitDisplayMode<span class="token punctuation">(</span>GLUT_RGB<span class="token operator">|</span>GLUT_SINGLE<span class="token punctuation">)</span>
    glutInitWindowPosition<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span>
    glutInitWindowSize<span class="token punctuation">(</span>width<span class="token punctuation">,</span>height<span class="token punctuation">)</span>
    glutCreateWindow<span class="token punctuation">(</span><span class="token string">&quot;Polar Equations&quot;</span><span class="token punctuation">)</span>
    glutReshapeFunc<span class="token punctuation">(</span>reshape<span class="token punctuation">)</span>  <span class="token comment"># 设置窗口的大小, 每次窗口改变大小, 都会调用reshape文件</span>
    glutDisplayFunc<span class="token punctuation">(</span>plotpolar<span class="token punctuation">)</span>
    glutKeyboardFunc<span class="token punctuation">(</span>keyboard<span class="token punctuation">)</span>
    init<span class="token punctuation">(</span><span class="token punctuation">)</span>
    glutMainLoop<span class="token punctuation">(</span><span class="token punctuation">)</span>

main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="patterns-and-chaos-in-2-dimensions" tabindex="-1"><a class="header-anchor" href="#patterns-and-chaos-in-2-dimensions" aria-hidden="true">#</a> Patterns and Chaos in 2 Dimensions</h2><p>下面的程序, 根据你的电脑配置可能会需要几秒或几分钟的时间才能渲染完毕. 慢的原因是我们是一个点一个点来计算的.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">## PyMathArt.py</span>
<span class="token comment">## PyMathArt.py</span>
<span class="token keyword">from</span> OpenGL<span class="token punctuation">.</span>GL <span class="token keyword">import</span> <span class="token operator">*</span>
<span class="token keyword">from</span> OpenGL<span class="token punctuation">.</span>GLU <span class="token keyword">import</span> <span class="token operator">*</span>
<span class="token keyword">from</span> OpenGL<span class="token punctuation">.</span>GLUT <span class="token keyword">import</span> <span class="token operator">*</span>
<span class="token keyword">from</span> numpy <span class="token keyword">import</span> <span class="token operator">*</span>
<span class="token keyword">import</span> sys
<span class="token comment">## Set the global width, height, and axis ranges of the window</span>
<span class="token keyword">global</span> width
<span class="token keyword">global</span> height
<span class="token keyword">global</span> axrng
<span class="token comment">## Initial values</span>
width <span class="token operator">=</span> <span class="token number">500</span>
height <span class="token operator">=</span> <span class="token number">500</span>
axrng <span class="token operator">=</span> <span class="token number">10.0</span>


<span class="token keyword">def</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    glClearColor<span class="token punctuation">(</span><span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">plotmathart</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    glClear<span class="token punctuation">(</span>GL_COLOR_BUFFER_BIT<span class="token punctuation">)</span>

    <span class="token comment"># 为什么步长是0.04</span>
    <span class="token comment"># 因为窗口宽度和高度是500, 坐标系x和y轴都是(-10,10), 所以20个单位点必须分布在500像素(pixel)中 20/500=0.04</span>
    <span class="token keyword">for</span> x <span class="token keyword">in</span> arange<span class="token punctuation">(</span><span class="token operator">-</span>axrng<span class="token punctuation">,</span> axrng<span class="token punctuation">,</span> <span class="token number">0.04</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">for</span> y <span class="token keyword">in</span> arange<span class="token punctuation">(</span><span class="token operator">-</span>axrng<span class="token punctuation">,</span> axrng<span class="token punctuation">,</span> <span class="token number">0.04</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            r <span class="token operator">=</span> cos<span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token operator">+</span> sin<span class="token punctuation">(</span>y<span class="token punctuation">)</span>
            glColor3f<span class="token punctuation">(</span>cos<span class="token punctuation">(</span>y<span class="token operator">*</span>r<span class="token punctuation">)</span><span class="token punctuation">,</span> cos<span class="token punctuation">(</span>x<span class="token operator">*</span>y<span class="token operator">*</span>r<span class="token punctuation">)</span><span class="token punctuation">,</span> sin<span class="token punctuation">(</span>r<span class="token operator">*</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span>
            glBegin<span class="token punctuation">(</span>GL_POINTS<span class="token punctuation">)</span>
            glVertex2f<span class="token punctuation">(</span>x<span class="token punctuation">,</span>y<span class="token punctuation">)</span>
            glEnd<span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token comment"># glFlush()</span>

<span class="token keyword">def</span> <span class="token function">reshape</span><span class="token punctuation">(</span> w<span class="token punctuation">,</span> h<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># To insure we don&#39;t have a zero height</span>
    <span class="token keyword">if</span> h<span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">:</span>
        h <span class="token operator">=</span> <span class="token number">1</span>

    <span class="token comment"># Fill the entire graphics window!</span>
    glViewport<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> w<span class="token punctuation">,</span> h<span class="token punctuation">)</span>

    <span class="token comment"># Set the projection matrix... our &quot;view&quot;</span>
    glMatrixMode<span class="token punctuation">(</span>GL_PROJECTION<span class="token punctuation">)</span>
    glLoadIdentity<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment"># Set the aspect ratio of the plot so that it </span>
    <span class="token comment"># Always looks &quot;OK&quot; and never distorted.</span>
    <span class="token keyword">if</span> w <span class="token operator">&lt;=</span> h<span class="token punctuation">:</span>
        gluOrtho2D<span class="token punctuation">(</span><span class="token operator">-</span>axrng<span class="token punctuation">,</span> axrng<span class="token punctuation">,</span> <span class="token operator">-</span>axrng<span class="token operator">*</span>h<span class="token operator">/</span>w<span class="token punctuation">,</span> axrng<span class="token operator">*</span>h<span class="token operator">/</span>w<span class="token punctuation">)</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        gluOrtho2D<span class="token punctuation">(</span><span class="token operator">-</span>axrng<span class="token operator">*</span>w<span class="token operator">/</span>h<span class="token punctuation">,</span> axrng<span class="token operator">*</span>w<span class="token operator">/</span>h<span class="token punctuation">,</span> <span class="token operator">-</span>axrng<span class="token punctuation">,</span> axrng<span class="token punctuation">)</span>

    <span class="token comment"># Set the matrix for the object we are drawing</span>
    glMatrixMode<span class="token punctuation">(</span>GL_MODELVIEW<span class="token punctuation">)</span>
    glLoadIdentity<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">keyboard</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># Allows us to quit by pressing &#39;Esc&#39; or &#39;q&#39;</span>
    <span class="token keyword">if</span> key <span class="token operator">==</span> <span class="token builtin">chr</span><span class="token punctuation">(</span><span class="token number">27</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        sys<span class="token punctuation">.</span>exit<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> key <span class="token operator">==</span> <span class="token string">&quot;q&quot;</span><span class="token punctuation">:</span>
        sys<span class="token punctuation">.</span>exit<span class="token punctuation">(</span><span class="token punctuation">)</span> 


<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">global</span> width
    <span class="token keyword">global</span> height

    glutInit<span class="token punctuation">(</span>sys<span class="token punctuation">.</span>argv<span class="token punctuation">)</span>
    glutInitDisplayMode<span class="token punctuation">(</span>GLUT_RGB<span class="token operator">|</span>GLUT_SINGLE<span class="token punctuation">)</span>
    glutInitWindowPosition<span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">)</span>
    glutInitWindowSize<span class="token punctuation">(</span>width<span class="token punctuation">,</span>height<span class="token punctuation">)</span>
    glutCreateWindow<span class="token punctuation">(</span><span class="token string">&quot;Math Art Patterns&quot;</span><span class="token punctuation">)</span>
    glutReshapeFunc<span class="token punctuation">(</span>reshape<span class="token punctuation">)</span>
    glutDisplayFunc<span class="token punctuation">(</span>plotmathart<span class="token punctuation">)</span>
    glutKeyboardFunc<span class="token punctuation">(</span>keyboard<span class="token punctuation">)</span>

    init<span class="token punctuation">(</span><span class="token punctuation">)</span>
    glutMainLoop<span class="token punctuation">(</span><span class="token punctuation">)</span>


main<span class="token punctuation">(</span><span class="token punctuation">)</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="谢尔宾斯基三角形-sierpinski-gasket" tabindex="-1"><a class="header-anchor" href="#谢尔宾斯基三角形-sierpinski-gasket" aria-hidden="true">#</a> 谢尔宾斯基三角形(Sierpinski Gasket)</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> OpenGL<span class="token punctuation">.</span>GL <span class="token keyword">import</span> <span class="token operator">*</span>
<span class="token keyword">from</span> OpenGL<span class="token punctuation">.</span>GLU <span class="token keyword">import</span> <span class="token operator">*</span>
<span class="token keyword">from</span> OpenGL<span class="token punctuation">.</span>GLUT <span class="token keyword">import</span> <span class="token operator">*</span>
<span class="token keyword">from</span> random <span class="token keyword">import</span> <span class="token operator">*</span>
<span class="token keyword">import</span> sys

<span class="token comment">## Set the global width, height, and axis ranges of the window</span>
<span class="token keyword">global</span> width
<span class="token keyword">global</span> height
<span class="token keyword">global</span> axrng

<span class="token comment">## Initial values</span>
width <span class="token operator">=</span> <span class="token number">500</span>
height <span class="token operator">=</span> <span class="token number">500</span>
axrng <span class="token operator">=</span> <span class="token number">2.0</span>

<span class="token keyword">def</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># White background</span>
    glClearColor<span class="token punctuation">(</span><span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">)</span>

    <span class="token comment"># Black Plot</span>
    glColor3f<span class="token punctuation">(</span><span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">)</span>



<span class="token keyword">def</span> <span class="token function">plotfunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># Store the triangle vertices in an array</span>
    verts <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">0.0</span><span class="token punctuation">,</span><span class="token number">2.0</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">2.0</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">2.0</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">2.0</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">2.0</span><span class="token punctuation">]</span><span class="token punctuation">]</span>

    <span class="token comment"># Choose an initial point... any point</span>
    x <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1.5</span>
    y <span class="token operator">=</span> <span class="token number">0.75</span>

    glClear<span class="token punctuation">(</span>GL_COLOR_BUFFER_BIT<span class="token punctuation">)</span>

    <span class="token keyword">for</span> n <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">10000</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        v <span class="token operator">=</span> randint<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span>
        x <span class="token operator">=</span> <span class="token punctuation">(</span>x <span class="token operator">+</span> verts<span class="token punctuation">[</span>v<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span>
        y <span class="token operator">=</span> <span class="token punctuation">(</span>y <span class="token operator">+</span> verts<span class="token punctuation">[</span>v<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span>

        <span class="token keyword">if</span> n <span class="token operator">&gt;</span> <span class="token number">30</span><span class="token punctuation">:</span>
            glBegin<span class="token punctuation">(</span>GL_POINTS<span class="token punctuation">)</span>
            glVertex2f<span class="token punctuation">(</span>x<span class="token punctuation">,</span>y<span class="token punctuation">)</span>
            glEnd<span class="token punctuation">(</span><span class="token punctuation">)</span>
            glFlush<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">reshape</span><span class="token punctuation">(</span> w<span class="token punctuation">,</span> h<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token comment"># To insure we don&#39;t have a zero height</span>
    <span class="token keyword">if</span> h<span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">:</span>
        h <span class="token operator">=</span> <span class="token number">1</span>

    <span class="token comment"># Fill the entire graphics window!</span>
    glViewport<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> w<span class="token punctuation">,</span> h<span class="token punctuation">)</span>

    <span class="token comment"># Set the projection matrix... our &quot;view&quot;</span>
    glMatrixMode<span class="token punctuation">(</span>GL_PROJECTION<span class="token punctuation">)</span>
    glLoadIdentity<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment"># Set the aspect ratio of the plot so that it</span>
    <span class="token comment"># Always looks &quot;OK&quot; and never distorted.</span>
    <span class="token keyword">if</span> w <span class="token operator">&lt;=</span> h<span class="token punctuation">:</span>
        gluOrtho2D<span class="token punctuation">(</span><span class="token operator">-</span>axrng<span class="token punctuation">,</span> axrng<span class="token punctuation">,</span> <span class="token operator">-</span>axrng<span class="token operator">*</span>h<span class="token operator">/</span>w<span class="token punctuation">,</span> axrng<span class="token operator">*</span>h<span class="token operator">/</span>w<span class="token punctuation">)</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        gluOrtho2D<span class="token punctuation">(</span><span class="token operator">-</span>axrng<span class="token operator">*</span>w<span class="token operator">/</span>h<span class="token punctuation">,</span> axrng<span class="token operator">*</span>w<span class="token operator">/</span>h<span class="token punctuation">,</span> <span class="token operator">-</span>axrng<span class="token punctuation">,</span> axrng<span class="token punctuation">)</span>

    <span class="token comment"># Set the matrix for the object we are drawing</span>
    glMatrixMode<span class="token punctuation">(</span>GL_MODELVIEW<span class="token punctuation">)</span>
    glLoadIdentity<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">keyboard</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># Allows us to quit by pressing &#39;Esc&#39; or &#39;q&#39;</span>
    <span class="token keyword">if</span> key <span class="token operator">==</span> <span class="token builtin">chr</span><span class="token punctuation">(</span><span class="token number">27</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        sys<span class="token punctuation">.</span>exit<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> key <span class="token operator">==</span> <span class="token string">&quot;q&quot;</span><span class="token punctuation">:</span>
        sys<span class="token punctuation">.</span>exit<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">global</span> width
    <span class="token keyword">global</span> height

    glutInit<span class="token punctuation">(</span>sys<span class="token punctuation">.</span>argv<span class="token punctuation">)</span>
    glutInitDisplayMode<span class="token punctuation">(</span>GLUT_RGB<span class="token operator">|</span>GLUT_SINGLE<span class="token punctuation">)</span>
    glutInitWindowPosition<span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">)</span>
    glutInitWindowSize<span class="token punctuation">(</span>width<span class="token punctuation">,</span>height<span class="token punctuation">)</span>
    glutCreateWindow<span class="token punctuation">(</span><span class="token string">&quot;The Chaos Game&quot;</span><span class="token punctuation">)</span>
    glutReshapeFunc<span class="token punctuation">(</span>reshape<span class="token punctuation">)</span>
    glutDisplayFunc<span class="token punctuation">(</span>plotfunc<span class="token punctuation">)</span>
    glutKeyboardFunc<span class="token punctuation">(</span>keyboard<span class="token punctuation">)</span>

    init<span class="token punctuation">(</span><span class="token punctuation">)</span>
    glutMainLoop<span class="token punctuation">(</span><span class="token punctuation">)</span>

main<span class="token punctuation">(</span><span class="token punctuation">)</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="the-barnsley-fern" tabindex="-1"><a class="header-anchor" href="#the-barnsley-fern" aria-hidden="true">#</a> The Barnsley Fern</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> OpenGL<span class="token punctuation">.</span>GL <span class="token keyword">import</span> <span class="token operator">*</span>
<span class="token keyword">from</span> OpenGL<span class="token punctuation">.</span>GLU <span class="token keyword">import</span> <span class="token operator">*</span>
<span class="token keyword">from</span> OpenGL<span class="token punctuation">.</span>GLUT <span class="token keyword">import</span> <span class="token operator">*</span>
<span class="token keyword">import</span> random
<span class="token keyword">from</span> numpy <span class="token keyword">import</span> <span class="token operator">*</span>
<span class="token keyword">import</span> sys

<span class="token comment">## Globals for window width and height</span>
<span class="token keyword">global</span> width
<span class="token keyword">global</span> height

<span class="token comment">## Initial values of width and height</span>
width <span class="token operator">=</span> <span class="token number">600</span>
height <span class="token operator">=</span> <span class="token number">600</span>

<span class="token keyword">def</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># White background</span>
    glClearColor<span class="token punctuation">(</span><span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">)</span>

    <span class="token comment"># Green Plot… it IS a Fern</span>
    glColor3f<span class="token punctuation">(</span><span class="token number">0.3</span><span class="token punctuation">,</span> <span class="token number">0.6</span><span class="token punctuation">,</span> <span class="token number">0.2</span><span class="token punctuation">)</span>

    <span class="token comment"># Set the projection matrix... our &quot;view&quot;</span>
    glMatrixMode<span class="token punctuation">(</span>GL_PROJECTION<span class="token punctuation">)</span>
    glLoadIdentity<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment"># Set the plot window range</span>
    gluOrtho2D<span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">3.0</span><span class="token punctuation">,</span> <span class="token number">3.0</span><span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">10.5</span><span class="token punctuation">)</span>

    <span class="token comment"># Set the matrix for the object we are drawing</span>
    glMatrixMode<span class="token punctuation">(</span>GL_MODELVIEW<span class="token punctuation">)</span>
    glLoadIdentity<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">plotfunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token comment"># Choose an initial point... any point</span>
    <span class="token comment"># You can randomize this if you wish</span>
    x <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1.5</span>
    y <span class="token operator">=</span> <span class="token number">0.75</span>

    glClear<span class="token punctuation">(</span>GL_COLOR_BUFFER_BIT<span class="token punctuation">)</span>

    <span class="token comment"># Plot 100000 points. This number is very large.</span>
    <span class="token comment"># Feel free to experiment with smaller values.</span>

    <span class="token keyword">for</span> n <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">100000</span><span class="token punctuation">)</span><span class="token punctuation">:</span>

        <span class="token comment"># n allows us to reject the first few points</span>
        <span class="token comment"># to give the attractor a chance to do its “thing”</span>
        <span class="token comment"># Choose a random value between 0 and 1 and</span>
        <span class="token comment"># then select a set of parameters based on this value.</span>
        <span class="token comment"># v = random()</span>
        v<span class="token operator">=</span> random<span class="token punctuation">.</span>random<span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token keyword">if</span> v <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token keyword">and</span> v <span class="token operator">&lt;=</span> <span class="token number">0.8000</span><span class="token punctuation">:</span>
            a <span class="token operator">=</span> <span class="token number">0</span>
            b <span class="token operator">=</span> <span class="token number">1.6</span>
            c <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">2.5</span><span class="token operator">*</span>pi<span class="token operator">/</span><span class="token number">180</span>
            d <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">2.5</span><span class="token operator">*</span>pi<span class="token operator">/</span><span class="token number">180</span>
            e <span class="token operator">=</span> <span class="token number">0.85</span>
            f <span class="token operator">=</span> <span class="token number">0.85</span>
            <span class="token comment">#glColor3f(1.0, 0.0, 0.0)</span>

        <span class="token keyword">elif</span> v <span class="token operator">&gt;</span> <span class="token number">0.8000</span> <span class="token keyword">and</span> v <span class="token operator">&lt;=</span> <span class="token number">0.8050</span><span class="token punctuation">:</span>
            a <span class="token operator">=</span> <span class="token number">0</span>
            b <span class="token operator">=</span> <span class="token number">0</span>
            c <span class="token operator">=</span> <span class="token number">0</span><span class="token operator">*</span>pi<span class="token operator">/</span><span class="token number">180</span>
            d <span class="token operator">=</span> <span class="token number">0</span><span class="token operator">*</span>pi<span class="token operator">/</span><span class="token number">180</span>
            e <span class="token operator">=</span> <span class="token number">0</span>
            f <span class="token operator">=</span> <span class="token number">0.16</span>
            <span class="token comment">#glColor3f(0.0, 1.0, 0.0)</span>

        <span class="token keyword">elif</span> v <span class="token operator">&gt;</span> <span class="token number">0.8050</span> <span class="token keyword">and</span> v <span class="token operator">&lt;=</span> <span class="token number">0.9025</span><span class="token punctuation">:</span>
            a <span class="token operator">=</span> <span class="token number">0</span>
            b <span class="token operator">=</span> <span class="token number">1.6</span>
            c <span class="token operator">=</span> <span class="token number">49</span><span class="token operator">*</span>pi<span class="token operator">/</span><span class="token number">180</span>
            d <span class="token operator">=</span> <span class="token number">49</span><span class="token operator">*</span>pi<span class="token operator">/</span><span class="token number">180</span>
            e <span class="token operator">=</span> <span class="token number">0.3</span>
            f <span class="token operator">=</span> <span class="token number">0.34</span>
            <span class="token comment">#glColor3f(0.0, 0.0, 1.0)</span>

        <span class="token keyword">elif</span> v <span class="token operator">&gt;</span> <span class="token number">0.9025</span> <span class="token keyword">and</span> v <span class="token operator">&lt;=</span> <span class="token number">1.0</span><span class="token punctuation">:</span>
            a <span class="token operator">=</span> <span class="token number">0</span>
            b <span class="token operator">=</span> <span class="token number">0.44</span>
            c <span class="token operator">=</span> <span class="token number">120</span><span class="token operator">*</span>pi<span class="token operator">/</span><span class="token number">180</span>
            d <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">50</span><span class="token operator">*</span>pi<span class="token operator">/</span><span class="token number">180</span>
            e <span class="token operator">=</span> <span class="token number">0.3</span>
            f <span class="token operator">=</span> <span class="token number">0.37</span>
            <span class="token comment">#glColor3f(1.0, 0.0, 1.0)</span>


        <span class="token comment"># Save the old values of x and y so we can iterate</span>
        <span class="token comment"># those values according to the chosen parameters</span>
        <span class="token comment"># and rules.</span>
        xx <span class="token operator">=</span> x
        yy <span class="token operator">=</span> y
        <span class="token comment"># Apply the parameters to the rule equations</span>
        x <span class="token operator">=</span> e <span class="token operator">*</span> xx <span class="token operator">*</span> cos<span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token operator">-</span> f <span class="token operator">*</span> yy <span class="token operator">*</span> sin<span class="token punctuation">(</span>d<span class="token punctuation">)</span> <span class="token operator">+</span> a
        y <span class="token operator">=</span> e <span class="token operator">*</span> xx <span class="token operator">*</span> sin<span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token operator">+</span> f <span class="token operator">*</span> yy <span class="token operator">*</span> cos<span class="token punctuation">(</span>d<span class="token punctuation">)</span> <span class="token operator">+</span> b

        <span class="token comment"># Start plotting after the 10th point</span>
        <span class="token keyword">if</span> n <span class="token operator">&gt;</span> <span class="token number">10</span><span class="token punctuation">:</span>
            glBegin<span class="token punctuation">(</span>GL_POINTS<span class="token punctuation">)</span>
            glVertex2f<span class="token punctuation">(</span>x<span class="token punctuation">,</span>y<span class="token punctuation">)</span>
            glEnd<span class="token punctuation">(</span><span class="token punctuation">)</span>
            glFlush<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">keyboard</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># Allows us to quit by pressing &#39;Esc&#39; or &#39;q&#39;</span>
    <span class="token keyword">if</span> key <span class="token operator">==</span> <span class="token builtin">chr</span><span class="token punctuation">(</span><span class="token number">27</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        sys<span class="token punctuation">.</span>exit<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> key <span class="token operator">==</span> <span class="token string">&quot;q&quot;</span><span class="token punctuation">:</span>
        sys<span class="token punctuation">.</span>exit<span class="token punctuation">(</span><span class="token punctuation">)</span> 
<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">global</span> width
    <span class="token keyword">global</span> height

    glutInit<span class="token punctuation">(</span>sys<span class="token punctuation">.</span>argv<span class="token punctuation">)</span>
    glutInitDisplayMode<span class="token punctuation">(</span>GLUT_RGB<span class="token operator">|</span>GLUT_SINGLE<span class="token punctuation">)</span>
    glutInitWindowPosition<span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">)</span>
    glutInitWindowSize<span class="token punctuation">(</span>width<span class="token punctuation">,</span>height<span class="token punctuation">)</span>
    glutCreateWindow<span class="token punctuation">(</span><span class="token string">&quot;The Chaos Game... Fern!&quot;</span><span class="token punctuation">)</span>
    glutDisplayFunc<span class="token punctuation">(</span>plotfunc<span class="token punctuation">)</span>
    glutKeyboardFunc<span class="token punctuation">(</span>keyboard<span class="token punctuation">)</span>

    init<span class="token punctuation">(</span><span class="token punctuation">)</span>
    glutMainLoop<span class="token punctuation">(</span><span class="token punctuation">)</span>


main<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="chaos-and-the-logistic-map" tabindex="-1"><a class="header-anchor" href="#chaos-and-the-logistic-map" aria-hidden="true">#</a> Chaos and the Logistic Map</h3><h2 id="_7" tabindex="-1"><a class="header-anchor" href="#_7" aria-hidden="true">#</a> 7</h2><h2 id="_8-2d-animation" tabindex="-1"><a class="header-anchor" href="#_8-2d-animation" aria-hidden="true">#</a> 8 2D Animation</h2><p>如何让一些东西动起来?可能我们需要先问, 我们如何知道一个东西动了起来. 为了确定运动是否产生, 我们首先要选择一个<code>参考系</code>(stationary). 比如地球, 虽然地球每时每刻都在运动, 但是我们相对于地球却是静止的. 如果我们移动参考系, 就会让大脑觉得其他物品在动的错觉. 比如在卡通动画中, 我们可以将机场作为一个参考系, 但我们移动机场时, 我们就会觉得飞机在运动, 很多老的游戏都是利用了这个错觉, 比如超级玛丽. 另一个动画的方法是现在一个特定的地方画出物品, 在下一帧擦除, 再重新画. 我们用的就是第二种方法:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> OpenGL<span class="token punctuation">.</span>GL <span class="token keyword">import</span> <span class="token operator">*</span>
<span class="token keyword">from</span> OpenGL<span class="token punctuation">.</span>GLU <span class="token keyword">import</span> <span class="token operator">*</span>
<span class="token keyword">from</span> OpenGL<span class="token punctuation">.</span>GLUT <span class="token keyword">import</span> <span class="token operator">*</span>
<span class="token keyword">import</span> sys

<span class="token comment">## uncomment these lines later</span>
<span class="token comment">## to see if there is any difference</span>
<span class="token comment">## in the speed of the ball</span>
<span class="token comment">## import psyco</span>
<span class="token comment">## psyco.full()</span>

<span class="token comment">## globals for animation, ball position</span>
<span class="token comment">## and direction of motion</span>
<span class="token keyword">global</span> anim<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y <span class="token punctuation">,</span>dx<span class="token punctuation">,</span> dy  <span class="token comment"># 要比单独的声明效率更高, </span>

<span class="token comment">## xy是球的中心点</span>
x <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">0.67</span>
y <span class="token operator">=</span> <span class="token number">0.34</span>
<span class="token comment">## dx和dy是移动的方向, 改变符号可以改变方向</span>
dx <span class="token operator">=</span> dy <span class="token operator">=</span> <span class="token number">1</span>
<span class="token comment">## Window dimensions</span>
width <span class="token operator">=</span> height <span class="token operator">=</span> <span class="token number">500</span>

axrng <span class="token operator">=</span> <span class="token number">1.0</span>

<span class="token comment">## No animation to start</span>
anim <span class="token operator">=</span> <span class="token number">0</span>

<span class="token keyword">def</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    glClearColor<span class="token punctuation">(</span><span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">)</span>
    glColor3ub<span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>

    <span class="token comment"># Dimensions of the screen</span>
    <span class="token comment"># Make axrng larger and see what happens!</span>
    gluOrtho2D<span class="token punctuation">(</span><span class="token operator">-</span>axrng<span class="token punctuation">,</span> axrng<span class="token punctuation">,</span> <span class="token operator">-</span>axrng<span class="token punctuation">,</span> axrng<span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">idle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># We animate only if anim == 1, 此时将不再相应鼠标和键盘的输入</span>
    <span class="token comment"># otherwise the ball doesn&#39;t move</span>
    <span class="token keyword">if</span> anim <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">:</span>
        glutPostRedisplay<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 渲染动画</span>


<span class="token keyword">def</span> <span class="token function">bounce</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">global</span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> dx<span class="token punctuation">,</span> dy
    glClear<span class="token punctuation">(</span>GL_COLOR_BUFFER_BIT<span class="token punctuation">)</span>  <span class="token comment"># 擦除上一帧动画</span>
    <span class="token comment"># changes x and y, 如果我们将dx和dy改成-1, 则会改变方向</span>
    x <span class="token operator">+=</span> <span class="token number">0.001</span><span class="token operator">*</span>dx
    y <span class="token operator">+=</span> <span class="token number">0.001</span><span class="token operator">*</span>dy

    <span class="token comment"># Keep the motion mathematics</span>
    <span class="token comment"># Safe from harm and then</span>
    <span class="token comment"># Move the ball location based on x and y</span>
    glPushMatrix<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 和glPopMatrix对应, 用来固定中心点</span>
    glTranslate<span class="token punctuation">(</span>x<span class="token punctuation">,</span>y<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span>  <span class="token comment"># 移动点</span>
    glutSolidSphere<span class="token punctuation">(</span><span class="token number">0.1</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span>  <span class="token comment"># 设置球的半径, 还有质地</span>
    glPopMatrix<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment"># Collision detection!</span>
    <span class="token comment"># What happens here and why does this work?</span>
    <span class="token keyword">if</span> x <span class="token operator">&gt;=</span> axrng <span class="token keyword">or</span> x <span class="token operator">&lt;=</span> <span class="token operator">-</span>axrng<span class="token punctuation">:</span>
        dx <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token operator">*</span>dx
    <span class="token keyword">if</span> y <span class="token operator">&gt;=</span> axrng <span class="token keyword">or</span> y <span class="token operator">&lt;=</span> <span class="token operator">-</span>axrng<span class="token punctuation">:</span>
        dy <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token operator">*</span>dy 
    glFlush<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 改成glutSwapBuffers()动画会更顺滑</span>

<span class="token keyword">def</span> <span class="token function">keyboard</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># Allows us to quit by pressing &#39;Esc&#39; or &#39;q&#39;</span>
    <span class="token comment"># We can animate by &quot;a&quot; and stop by &quot;s&quot;</span>
    <span class="token keyword">global</span> anim
    <span class="token keyword">print</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
    <span class="token keyword">if</span> key <span class="token operator">==</span> <span class="token string">b&#39;\\x1b&#39;</span><span class="token punctuation">:</span>  <span class="token comment"># ESC</span>
        sys<span class="token punctuation">.</span>exit<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> key <span class="token operator">==</span> <span class="token string">b&quot;a&quot;</span><span class="token punctuation">:</span>
    <span class="token comment"># Notice we are making anim = 1</span>
    <span class="token comment"># What does this mean? Look at the idle function</span>
        anim <span class="token operator">=</span> <span class="token number">1</span>
    <span class="token keyword">if</span> key <span class="token operator">==</span> <span class="token string">b&quot;s&quot;</span><span class="token punctuation">:</span>
    <span class="token comment"># STOP the ball!</span>
        anim <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">if</span> key <span class="token operator">==</span> <span class="token string">b&quot;q&quot;</span><span class="token punctuation">:</span>
        sys<span class="token punctuation">.</span>exit<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    glutInit<span class="token punctuation">(</span>sys<span class="token punctuation">.</span>argv<span class="token punctuation">)</span>
    glutInitDisplayMode<span class="token punctuation">(</span>GLUT_RGB<span class="token operator">|</span>GLUT_SINGLE<span class="token punctuation">)</span>  <span class="token comment"># 改成glutInitDisplayMode(GLUT_RGB|GLUT_DOUBLE) 动画会更顺滑</span>
    glutInitWindowPosition<span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">)</span>
    glutInitWindowSize<span class="token punctuation">(</span>width<span class="token punctuation">,</span>height<span class="token punctuation">)</span>
    glutCreateWindow<span class="token punctuation">(</span><span class="token string">&quot;PyBounce&quot;</span><span class="token punctuation">)</span>
    glutDisplayFunc<span class="token punctuation">(</span>bounce<span class="token punctuation">)</span>
    glutKeyboardFunc<span class="token punctuation">(</span>keyboard<span class="token punctuation">)</span>
    glutIdleFunc<span class="token punctuation">(</span>idle<span class="token punctuation">)</span>

    init<span class="token punctuation">(</span><span class="token punctuation">)</span>
    glutMainLoop<span class="token punctuation">(</span><span class="token punctuation">)</span>

main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="chapter-9-3d-and-3d-animation" tabindex="-1"><a class="header-anchor" href="#chapter-9-3d-and-3d-animation" aria-hidden="true">#</a> Chapter 9 3D and 3D Animation</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> OpenGL<span class="token punctuation">.</span>GL <span class="token keyword">import</span> <span class="token operator">*</span>
<span class="token keyword">from</span> OpenGL<span class="token punctuation">.</span>GLU <span class="token keyword">import</span> <span class="token operator">*</span>
<span class="token keyword">from</span> OpenGL<span class="token punctuation">.</span>GLUT <span class="token keyword">import</span> <span class="token operator">*</span>
<span class="token keyword">import</span> sys

<span class="token comment">## import psyco</span>
<span class="token comment">## psyco.full() </span>

<span class="token comment">## Set the width and height of the window</span>
<span class="token keyword">global</span> width
<span class="token keyword">global</span> height
<span class="token comment">## Global variables for rotation angles</span>
<span class="token keyword">global</span> xrot
<span class="token keyword">global</span> yrot
xrot <span class="token operator">=</span> <span class="token number">0.0</span>
yrot <span class="token operator">=</span> <span class="token number">0.0</span>
<span class="token comment">## the usual screen dimension variables and lighting</span>
width <span class="token operator">=</span> <span class="token number">600</span>
height <span class="token operator">=</span> <span class="token number">600</span>
<span class="token comment">## Generic Lighting values and coordinates</span>
<span class="token keyword">global</span> ambientLight
<span class="token keyword">global</span> diffuseLight
<span class="token keyword">global</span> specular
<span class="token keyword">global</span> specref 

ambientLight <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">0.35</span><span class="token punctuation">,</span> <span class="token number">0.35</span><span class="token punctuation">,</span> <span class="token number">0.35</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">)</span>
diffuseLight <span class="token operator">=</span> <span class="token punctuation">(</span> <span class="token number">0.75</span><span class="token punctuation">,</span> <span class="token number">0.75</span><span class="token punctuation">,</span> <span class="token number">0.75</span><span class="token punctuation">,</span> <span class="token number">0.7</span><span class="token punctuation">)</span>
specular <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">)</span>
specref <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">)</span>
<span class="token comment">## Shape variables</span>
<span class="token keyword">global</span> glutshape
<span class="token keyword">global</span> solid
<span class="token comment">## start with wireframe</span>
solid <span class="token operator">=</span> <span class="token string">&quot;w&quot;</span>
<span class="token comment">## start with a sphere</span>
glutshape <span class="token operator">=</span> <span class="token number">1</span> 


<span class="token keyword">def</span> <span class="token function">renderscene</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">global</span> xrot
    <span class="token keyword">global</span> yrot

    glClear<span class="token punctuation">(</span>GL_COLOR_BUFFER_BIT<span class="token operator">|</span>GL_DEPTH_BUFFER_BIT<span class="token punctuation">)</span>

    <span class="token comment"># isolate the rotation by using glPushMatrix()</span>
    <span class="token comment"># this keeps the whole scene from rotating!</span>

    glPushMatrix<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment"># rotate the GLUT object!</span>
    glRotatef<span class="token punctuation">(</span>xrot<span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">)</span>
    glRotatef<span class="token punctuation">(</span>yrot<span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">)</span>

    <span class="token comment"># choose either wireframe (w) or solid (s) and which</span>
    <span class="token comment"># GLUT shape you want to view</span>

    <span class="token keyword">if</span> solid <span class="token operator">==</span> <span class="token string">&quot;w&quot;</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> glutshape <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">:</span>
            glutWireSphere<span class="token punctuation">(</span><span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">)</span>
        <span class="token keyword">elif</span> glutshape <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">:</span>
            glutWireCube<span class="token punctuation">(</span><span class="token number">1.0</span><span class="token punctuation">)</span>
        <span class="token keyword">elif</span> glutshape <span class="token operator">==</span> <span class="token number">3</span><span class="token punctuation">:</span>
            glutWireCone<span class="token punctuation">(</span><span class="token number">0.3</span><span class="token punctuation">,</span> <span class="token number">1.1</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span>
        <span class="token keyword">elif</span> glutshape <span class="token operator">==</span> <span class="token number">4</span><span class="token punctuation">:</span>
            glutWireTorus<span class="token punctuation">(</span><span class="token number">0.3</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">)</span>
        <span class="token keyword">elif</span> glutshape <span class="token operator">==</span> <span class="token number">5</span><span class="token punctuation">:</span>
            glutWireDodecahedron<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">elif</span> glutshape <span class="token operator">==</span> <span class="token number">6</span><span class="token punctuation">:</span>
            glutWireOctahedron<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">elif</span> glutshape <span class="token operator">==</span> <span class="token number">7</span><span class="token punctuation">:</span>
            glutWireTetrahedron<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">elif</span> glutshape <span class="token operator">==</span> <span class="token number">8</span><span class="token punctuation">:</span>
            glutWireIcosahedron<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">elif</span> glutshape <span class="token operator">==</span> <span class="token number">9</span><span class="token punctuation">:</span>
            glutWireTeapot<span class="token punctuation">(</span><span class="token number">1.0</span><span class="token punctuation">)</span>
    <span class="token keyword">elif</span> solid <span class="token operator">==</span> <span class="token string">&quot;s&quot;</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> glutshape <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">:</span>
            glutSolidSphere<span class="token punctuation">(</span><span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">)</span>
        <span class="token keyword">elif</span> glutshape <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">:</span>
            glutSolidCube<span class="token punctuation">(</span><span class="token number">1.0</span><span class="token punctuation">)</span>
        <span class="token keyword">elif</span> glutshape <span class="token operator">==</span> <span class="token number">3</span><span class="token punctuation">:</span>
            glutSolidCone<span class="token punctuation">(</span><span class="token number">0.3</span><span class="token punctuation">,</span> <span class="token number">1.1</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span>
        <span class="token keyword">elif</span> glutshape <span class="token operator">==</span> <span class="token number">4</span><span class="token punctuation">:</span>
            glutSolidTorus<span class="token punctuation">(</span><span class="token number">0.3</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">)</span>
        <span class="token keyword">elif</span> glutshape <span class="token operator">==</span> <span class="token number">5</span><span class="token punctuation">:</span>
            glutSolidDodecahedron<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">elif</span> glutshape <span class="token operator">==</span> <span class="token number">6</span><span class="token punctuation">:</span>
            glutSolidOctahedron<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">elif</span> glutshape <span class="token operator">==</span> <span class="token number">7</span><span class="token punctuation">:</span>
            glutSolidTetrahedron<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">elif</span> glutshape <span class="token operator">==</span> <span class="token number">8</span><span class="token punctuation">:</span>
            glutSolidIcosahedron<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">elif</span> glutshape <span class="token operator">==</span> <span class="token number">9</span><span class="token punctuation">:</span>
            glutSolidTeapot<span class="token punctuation">(</span><span class="token number">1.0</span><span class="token punctuation">)</span>
    <span class="token comment"># end the glPushMatrix() command by “popping” the rotation</span>
    <span class="token comment"># matrix back into place for real-time animation</span>
    glPopMatrix<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment"># swap the screen buffers for smooth animation</span>
    glutSwapBuffers<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">global</span> width
    <span class="token keyword">global</span> height
    glClearColor<span class="token punctuation">(</span><span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">)</span>

    <span class="token comment"># Enable depth testing</span>
    glEnable<span class="token punctuation">(</span>GL_DEPTH_TEST<span class="token punctuation">)</span>

    glEnable<span class="token punctuation">(</span>GL_LIGHTING<span class="token punctuation">)</span>
    glLightfv<span class="token punctuation">(</span>GL_LIGHT0<span class="token punctuation">,</span> GL_AMBIENT<span class="token punctuation">,</span> ambientLight<span class="token punctuation">)</span>
    glLightfv<span class="token punctuation">(</span>GL_LIGHT0<span class="token punctuation">,</span> GL_DIFFUSE<span class="token punctuation">,</span> diffuseLight<span class="token punctuation">)</span>
    glLightfv<span class="token punctuation">(</span>GL_LIGHT0<span class="token punctuation">,</span> GL_SPECULAR<span class="token punctuation">,</span> specular<span class="token punctuation">)</span>
    glEnable<span class="token punctuation">(</span>GL_LIGHT0<span class="token punctuation">)</span>
    glEnable<span class="token punctuation">(</span>GL_COLOR_MATERIAL<span class="token punctuation">)</span>
    glColorMaterial<span class="token punctuation">(</span>GL_FRONT<span class="token punctuation">,</span> GL_AMBIENT_AND_DIFFUSE<span class="token punctuation">)</span>
    glMaterialfv<span class="token punctuation">(</span>GL_FRONT<span class="token punctuation">,</span> GL_SPECULAR<span class="token punctuation">,</span> specref<span class="token punctuation">)</span>
    glMateriali<span class="token punctuation">(</span>GL_FRONT<span class="token punctuation">,</span> GL_SHININESS<span class="token punctuation">,</span> <span class="token number">128</span><span class="token punctuation">)</span>

    glColor3ub<span class="token punctuation">(</span><span class="token number">230</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">specialkeys</span><span class="token punctuation">(</span> key<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">global</span> xrot
    <span class="token keyword">global</span> yrot

    <span class="token keyword">if</span> key <span class="token operator">==</span> GLUT_KEY_UP<span class="token punctuation">:</span>
        xrot <span class="token operator">-=</span> <span class="token number">2.0</span>
    <span class="token keyword">if</span> key <span class="token operator">==</span> GLUT_KEY_DOWN<span class="token punctuation">:</span>
        xrot <span class="token operator">+=</span> <span class="token number">2.0</span>
    <span class="token keyword">if</span> key <span class="token operator">==</span> GLUT_KEY_LEFT<span class="token punctuation">:</span>
        yrot <span class="token operator">-=</span> <span class="token number">2.0</span>
    <span class="token keyword">if</span> key <span class="token operator">==</span> GLUT_KEY_RIGHT<span class="token punctuation">:</span>
        yrot <span class="token operator">+=</span> <span class="token number">2.0</span>

    glutPostRedisplay<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">reshape</span><span class="token punctuation">(</span> w<span class="token punctuation">,</span> h<span class="token punctuation">)</span><span class="token punctuation">:</span>
    lightPos <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">50.0</span><span class="token punctuation">,</span> <span class="token number">50.0</span><span class="token punctuation">,</span> <span class="token number">100.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">)</span>
    nRange <span class="token operator">=</span> <span class="token number">2.0</span>

    <span class="token keyword">if</span> h<span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">:</span>
        h <span class="token operator">=</span> <span class="token number">1</span>

    glViewport<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> w<span class="token punctuation">,</span> h<span class="token punctuation">)</span>

    glMatrixMode<span class="token punctuation">(</span>GL_PROJECTION<span class="token punctuation">)</span>
    glLoadIdentity<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment"># this section allows for window reshaping while</span>
    <span class="token comment"># maintaining a “normal” GLUT shape</span>
    <span class="token keyword">if</span> w <span class="token operator">&lt;=</span> h<span class="token punctuation">:</span>
        glOrtho<span class="token punctuation">(</span><span class="token operator">-</span>nRange<span class="token punctuation">,</span> nRange<span class="token punctuation">,</span> <span class="token operator">-</span>nRange<span class="token operator">*</span>h<span class="token operator">/</span>w<span class="token punctuation">,</span> nRange<span class="token operator">*</span>h<span class="token operator">/</span>w<span class="token punctuation">,</span> <span class="token operator">-</span>nRange<span class="token punctuation">,</span> nRange<span class="token punctuation">)</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        glOrtho<span class="token punctuation">(</span><span class="token operator">-</span>nRange<span class="token operator">*</span>w<span class="token operator">/</span>h<span class="token punctuation">,</span> nRange<span class="token operator">*</span>w<span class="token operator">/</span>h<span class="token punctuation">,</span> <span class="token operator">-</span>nRange<span class="token punctuation">,</span> nRange<span class="token punctuation">,</span> <span class="token operator">-</span>nRange<span class="token punctuation">,</span> nRange<span class="token punctuation">)</span>
    glMatrixMode<span class="token punctuation">(</span>GL_MODELVIEW<span class="token punctuation">)</span>
    glLoadIdentity<span class="token punctuation">(</span><span class="token punctuation">)</span>

    glLightfv<span class="token punctuation">(</span>GL_LIGHT0<span class="token punctuation">,</span> GL_POSITION<span class="token punctuation">,</span> lightPos<span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">keyboard</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">global</span> glutshape<span class="token punctuation">,</span> solid
    <span class="token keyword">if</span> key <span class="token operator">==</span> <span class="token builtin">chr</span><span class="token punctuation">(</span><span class="token number">27</span><span class="token punctuation">)</span> <span class="token keyword">or</span> key <span class="token operator">==</span> <span class="token string">&quot;q&quot;</span><span class="token punctuation">:</span>
        sys<span class="token punctuation">.</span>exit<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> <span class="token builtin">int</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">:</span>
            glutshape <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
    <span class="token keyword">except</span><span class="token punctuation">:</span>
        <span class="token keyword">pass</span>

    <span class="token keyword">if</span> key <span class="token operator">==</span> <span class="token string">&quot;w&quot;</span> <span class="token keyword">or</span> key <span class="token operator">==</span> <span class="token string">&quot;s&quot;</span><span class="token punctuation">:</span>
        solid <span class="token operator">=</span> key

    glutPostRedisplay<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">global</span> width
    <span class="token keyword">global</span> height

    <span class="token comment"># Setup for double-buffered display and depth testing</span>
    glutInitDisplayMode<span class="token punctuation">(</span>GLUT_RGB<span class="token operator">|</span>GLUT_DOUBLE<span class="token operator">|</span>GLUT_DEPTH<span class="token punctuation">)</span>
    glutInitWindowPosition<span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">)</span>
    glutInitWindowSize<span class="token punctuation">(</span>width<span class="token punctuation">,</span>height<span class="token punctuation">)</span>
    glutInit<span class="token punctuation">(</span>sys<span class="token punctuation">.</span>argv<span class="token punctuation">)</span>
    glutCreateWindow<span class="token punctuation">(</span><span class="token string">&quot;GLUT Shapes... Rotations&quot;</span><span class="token punctuation">)</span>

    init<span class="token punctuation">(</span><span class="token punctuation">)</span>
    glutReshapeFunc<span class="token punctuation">(</span>reshape<span class="token punctuation">)</span>
    glutDisplayFunc<span class="token punctuation">(</span>renderscene<span class="token punctuation">)</span>
    glutKeyboardFunc<span class="token punctuation">(</span>keyboard<span class="token punctuation">)</span>
    glutSpecialFunc<span class="token punctuation">(</span>specialkeys<span class="token punctuation">)</span>
    glutMainLoop<span class="token punctuation">(</span><span class="token punctuation">)</span>
main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考: http://new.math.uiuc.edu/public198/ipython/stanblank/PyOpenGL.pdf</p>`,16),k=[l,c,i,u,r];function d(m,v){return e(),t("div",null,k)}const h=p(o,[["render",d],["__file","openGL.html.vue"]]);export{h as default};
