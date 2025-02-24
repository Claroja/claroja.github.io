import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as s,e as t}from"./app-A10JnHE0.js";const e={},o=t(`<h1 id="filesystem" tabindex="-1"><a class="header-anchor" href="#filesystem" aria-hidden="true">#</a> FileSystem</h1><h2 id="java内置的annotations" tabindex="-1"><a class="header-anchor" href="#java内置的annotations" aria-hidden="true">#</a> java内置的annotations</h2><p>java有三个内置的annotations, 用来给compiler传递指令:</p><ul><li><code>@Deprecated</code> 用来声明class, method或field将要废弃, 如果继续使用compiler会给出warning</li><li>@Override 用在subclass中的method上, 声明override superclass的method.如果不能匹配上, 则compiler会给出error</li><li>@SuppressWarnings 告诉compiler 抑制warning.</li></ul><h2 id="自定义annotations" tabindex="-1"><a class="header-anchor" href="#自定义annotations" aria-hidden="true">#</a> 自定义annotations</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span> <span class="token comment">//运行时可用</span>
<span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">TYPE</span><span class="token punctuation">)</span>  <span class="token comment">//在类上使用</span>
<span class="token annotation punctuation">@Inherited</span>  <span class="token comment">//如果一个类用上了@Inherited修饰的注解，那么其子类也会继承这个注解</span>
<span class="token annotation punctuation">@Documented</span> <span class="token comment">//javadoc显示MyAnnotation</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">MyAnnotation</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">age</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token number">18</span><span class="token punctuation">;</span>  <span class="token comment">//默认值</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Annotation</span></span><span class="token punctuation">;</span>
<span class="token annotation punctuation">@MyAnnotation</span><span class="token punctuation">(</span>name<span class="token operator">=</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> demo1 <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Class</span> aClass <span class="token operator">=</span> demo1<span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">;</span>
        <span class="token class-name">Annotation</span><span class="token punctuation">[</span><span class="token punctuation">]</span> annotations <span class="token operator">=</span> aClass<span class="token punctuation">.</span><span class="token function">getAnnotations</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token class-name">Annotation</span> annotation <span class="token operator">:</span> annotations<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>annotation <span class="token keyword">instanceof</span> <span class="token class-name">MyAnnotation</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token class-name">MyAnnotation</span> myAnnotation <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">MyAnnotation</span><span class="token punctuation">)</span> annotation<span class="token punctuation">;</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;name: &quot;</span> <span class="token operator">+</span> myAnnotation<span class="token punctuation">.</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;age: &quot;</span> <span class="token operator">+</span> myAnnotation<span class="token punctuation">.</span><span class="token function">age</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="annotation-elements" tabindex="-1"><a class="header-anchor" href="#annotation-elements" aria-hidden="true">#</a> Annotation Elements</h2><ul><li>可以使用<code>default</code>关键字, 添加默认值</li><li>如果只有element, 则可使用<code>value</code>方便替换自定的element名称, 或者直接省略</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@MyAnnotation</span><span class="token punctuation">(</span>value<span class="token operator">=</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@InsertNew</span><span class="token punctuation">(</span><span class="token string">&quot;yes&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="annotation-placement" tabindex="-1"><a class="header-anchor" href="#annotation-placement" aria-hidden="true">#</a> Annotation Placement</h2><p>Annotations可以用在classes, interfaces, methods, method parameters, fields and local variables.</p><h2 id="自定义annotation的annotation" tabindex="-1"><a class="header-anchor" href="#自定义annotation的annotation" aria-hidden="true">#</a> 自定义Annotation的Annotation</h2><ul><li><p><code>RetentionPolicy</code></p><ul><li>RetentionPolicy.SOURCE：注解只保留在源文件，当Java文件编译成class文件的时候，注解被遗弃</li><li>RetentionPolicy.CLASS：(compile time)注解被保留到class文件，但jvm加载class文件时候被遗弃，这是默认的生命周期</li><li>RetentionPolicy.RUNTIME：(run time)注解不仅被保存到class文件中，jvm加载class文件之后，仍然存在</li></ul></li><li><p><code>ElementType</code></p><ul><li>ElementType.ANNOTATION_TYPE</li><li>ElementType.CONSTRUCTOR</li><li>ElementType.FIELD</li><li>ElementType.LOCAL_VARIABLE</li><li>ElementType.METHOD</li><li>ElementType.PACKAGE</li><li>ElementType.PARAMETER</li><li>ElementType.TYPE</li><li>ElementType.TYPE_PARAMETER</li><li>ElementType.TYPE_USE</li></ul></li><li><p><code>@Inherited</code> 如果一个类用上了@Inherited修饰的注解，那么其子类也会继承这个注解</p></li><li><p><code>@Documented</code> javadoc显示MyAnnotation</p></li></ul><p>参考: http://tutorials.jenkov.com/java/annotations.html https://blog.csdn.net/qq_43390895/article/details/100175330</p>`,15),p=[o];function c(i,l){return a(),s("div",null,p)}const r=n(e,[["render",c],["__file","Annotation.html.vue"]]);export{r as default};
