import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as a,e as s}from"./app-A10JnHE0.js";const o={},c=s(`<h1 id="虚拟环境" tabindex="-1"><a class="header-anchor" href="#虚拟环境" aria-hidden="true">#</a> 虚拟环境</h1><h2 id="创建虚拟环境" tabindex="-1"><a class="header-anchor" href="#创建虚拟环境" aria-hidden="true">#</a> 创建虚拟环境</h2><p><code>python3 -m venv PATH</code>创建虚拟环境相当于安装了一个新的python环境, 目录如下:</p><ul><li><p><code>Include/ </code></p></li><li><p><code>Lib/</code> 虚拟环境的第三方包</p></li><li><p><code>pyvenv.cfg</code> 记录了该虚拟环境的配置信息:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>home <span class="token operator">=</span> D:<span class="token punctuation">\\</span>Scoop<span class="token punctuation">\\</span>apps<span class="token punctuation">\\</span>python<span class="token punctuation">\\</span>current <span class="token comment"># 创建虚拟环境的父环境</span>
include-system-site-packages <span class="token operator">=</span> <span class="token boolean">false</span>  <span class="token comment"># 是否包含父环境的包</span>
version <span class="token operator">=</span> <span class="token number">3.10</span>.8  <span class="token comment"># 父环境的python版本</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>Scripts/</code> <code>python.exe</code>和<code>pip.exe</code>的位置</p></li><li><p><code>share/</code></p></li></ul><h2 id="使用虚拟环境" tabindex="-1"><a class="header-anchor" href="#使用虚拟环境" aria-hidden="true">#</a> 使用虚拟环境</h2><ul><li>直接使用</li></ul><p>可以直接执行<code>PATH/Scripts/python.exe</code>来使用</p><ul><li>激活虚拟环境</li></ul><p>相当于把虚拟环境的<code>python.exe</code>添加到了环境变量, 不需要输入全路径</p><ol><li><p>激活</p><p>win: <code>Scripts\\activate.bat</code><br> linux: <code>source &lt;venv&gt;/bin/activate</code></p></li><li><p>退出</p><p><code>deactivate</code></p></li></ol><p>参考: https://docs.python.org/zh-cn/3/library/venv.html</p>`,11),p=[c];function t(i,l){return n(),a("div",null,p)}const h=e(o,[["render",t],["__file","python虚拟环境.html.vue"]]);export{h as default};
