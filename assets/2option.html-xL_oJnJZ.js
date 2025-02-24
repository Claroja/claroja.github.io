import{_ as r}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as l,o as a,c as o,a as t,b as d,d as s,e}from"./app-A10JnHE0.js";const c="/assets/标题等级-55STH_5O.png",i={},u=e(`<h1 id="pandoc-option" tabindex="-1"><a class="header-anchor" href="#pandoc-option" aria-hidden="true">#</a> pandoc_option</h1><h2 id="最佳实践" tabindex="-1"><a class="header-anchor" href="#最佳实践" aria-hidden="true">#</a> 最佳实践</h2><h3 id="配置文件设置" tabindex="-1"><a class="header-anchor" href="#配置文件设置" aria-hidden="true">#</a> 配置文件设置</h3><p>将参数都写在配置文件中</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># option.yml文件默认放在\`C:\\Users\\name\\AppData\\Roaming\\pandoc\`下的\`defaults\`文件夹中</span>
<span class="token key atrule">shift-heading-level-by</span><span class="token punctuation">:</span> <span class="token number">-1</span>
<span class="token key atrule">number-sections</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">reference-doc</span><span class="token punctuation">:</span> custom.docx
<span class="token key atrule">resource-path</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;C:\\Users\\Xinyu\\AppData\\Roaming\\pandoc&#39;</span><span class="token punctuation">]</span> <span class="token comment"># 指定reference-doc(模板文件)的路径</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="标题等级设置" tabindex="-1"><a class="header-anchor" href="#标题等级设置" aria-hidden="true">#</a> 标题等级设置</h3><p>和markdown规范一致, 在marddown规范中, 一级标题<code>#</code>是文章的标题. 所以设置<code>shift-heading-level-by: -1</code>.</p><figure><img src="`+c+'" alt="alt text" tabindex="0" loading="lazy"><figcaption>alt text</figcaption></figure><h2 id="通用设置" tabindex="-1"><a class="header-anchor" href="#通用设置" aria-hidden="true">#</a> 通用设置</h2>',9),h=t("thead",null,[t("tr",null,[t("th",null,"参数"),t("th",null,"描述")])],-1),p=t("tr",null,[t("td",null,[t("code",null,"-f FORMAT, -r FORMAT, --from=FORMAT, --read=FORMAT")]),t("td",null,"输入的文本格式(如果不指定, 默认根据文件名判断)")],-1),f=t("tr",null,[t("td",null,[t("code",null,"-t FORMAT, -w FORMAT, --to=FORMAT, --write=FORMAT")]),t("td",null,"输出的文本格式(如果不指定, 默认根据文件名判断)")],-1),_=t("tr",null,[t("td",null,[t("code",null,"-o FILE, --output=FILE")]),t("td",null,"输出文件(如果不指定, 默认是标准输出)")],-1),b=t("tr",null,[t("td",null,[t("code",null,"--data-dir=DIRECTORY")]),t("td",null,[d("pandoc的配置文件存放目录, 如模板文件. 如果不指定, linux默认是"),t("code",null,"$HOME/.local/share"),d(", win默认是"),t("code",null,"%APPDATA%\\pandoc"),d(". 可以通过"),t("code",null,"pandoc --version"),d("来查看")])],-1),m=t("td",null,[t("code",null,"-d FILE, --defaults=FILE")],-1),E=t("code",null,"--data-dir",-1),R={href:"https://pandoc.org/MANUAL.html#defaults-files",target:"_blank",rel:"noopener noreferrer"},g=t("tr",null,[t("td",null,[t("code",null,"--bash-completion")]),t("td",null,[d("命令补全, 在"),t("code",null,".bashrc"),d("中设置"),t("code",null,'eval "$(pandoc --bash-completion)"')])],-1),L=t("tr",null,[t("td",null,[t("code",null,"--verbose")]),t("td",null,"冗长显示debug信息")],-1),v=t("tr",null,[t("td",null,[t("code",null,"--quiet")]),t("td",null,"不输出信息")],-1),A=t("tr",null,[t("td",null,"`--fail-if-warnings[=true"),t("td",null,"false]`")],-1),x=t("tr",null,[t("td",null,[t("code",null,"--log=FILE")]),t("td",null,"输出日志")],-1),F=t("tr",null,[t("td",null,[t("code",null,"--list-input-formats")]),t("td",null,"列举支持的输入格式")],-1),k=t("tr",null,[t("td",null,[t("code",null,"--list-output-formats")]),t("td",null,"列举支持的输出格式")],-1),I=t("tr",null,[t("td",null,[t("code",null,"--list-extensions[=FORMAT]")]),t("td")],-1),M=t("tr",null,[t("td",null,[t("code",null,"--list-highlight-languages")]),t("td",null,"列举代码块支持的语言类型")],-1),y=t("tr",null,[t("td",null,[t("code",null,"-v, --version")]),t("td",null,"查看版本")],-1),T=t("tr",null,[t("td",null,[t("code",null,"-h, --help")]),t("td",null,"帮助信息")],-1),N=e('<h2 id="输入设置" tabindex="-1"><a class="header-anchor" href="#输入设置" aria-hidden="true">#</a> 输入设置</h2><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td><code>--shift-heading-level-by=NUMBER</code></td><td><code>-1</code>表示将二级标题作为一级标题(2+(-1)=1), 一级标题作为题目(1+(-1)=0)</td></tr><tr><td><code>--indented-code-classes=CLASSES</code></td><td></td></tr><tr><td><code>--default-image-extension=EXTENSION</code></td><td>当没有图片名中没有格式时, 通过该参数指定</td></tr><tr><td>`--file-scope[=true</td><td>false]`</td></tr><tr><td><code>-F PROGRAM, --filter=PROGRAM</code></td><td></td></tr><tr><td><code>-L SCRIPT, --lua-filter=SCRIPT</code></td><td></td></tr><tr><td><code>-M KEY[=VAL], --metadata=KEY[:VAL]</code></td><td></td></tr><tr><td><code>--metadata-file=FILE</code></td><td></td></tr><tr><td>`-p, --preserve-tabs[=true</td><td>false]`</td></tr><tr><td><code>--tab-stop=NUMBER</code></td><td></td></tr><tr><td>`--track-changes=accept</td><td>reject</td></tr><tr><td><code>--extract-media=DIR</code></td><td></td></tr><tr><td><code>--abbreviations=FILE</code></td><td></td></tr><tr><td>`--trace[=true</td><td>false]`</td></tr></tbody></table><h2 id="输出配置" tabindex="-1"><a class="header-anchor" href="#输出配置" aria-hidden="true">#</a> 输出配置</h2><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td><code>-s, --standalone</code></td><td>单文件模式</td></tr><tr><td>`--template=FILE</td><td>URL`</td></tr><tr><td><code>-V KEY[=VAL], --variable=KEY[:VAL]</code></td><td></td></tr><tr><td>`--sandbox[=true</td><td>false]`</td></tr><tr><td><code>-D FORMAT, --print-default-template=FORMAT</code></td><td></td></tr><tr><td><code>--print-default-data-file=FILE</code></td><td></td></tr><tr><td>`--eol=crlf</td><td>lf</td></tr><tr><td><code>--dpi=NUMBER</code></td><td></td></tr><tr><td>`--wrap=auto</td><td>none</td></tr><tr><td><code>--columns=NUMBER</code></td><td>设置每行的字数</td></tr><tr><td>`--toc[=true</td><td>false], --table-of-contents[=true</td></tr><tr><td><code>--toc-depth=NUMBER</code></td><td>目录的深度</td></tr><tr><td>`--strip-comments[=true</td><td>false]`</td></tr><tr><td><code>--no-highlight</code></td><td>不高亮代码</td></tr><tr><td>`--highlight-style=STYLE</td><td>FILE`</td></tr><tr><td>`--print-highlight-style=STYLE</td><td>FILE`</td></tr><tr><td><code>--syntax-definition=FILE</code></td><td></td></tr><tr><td>`-H FILE, --include-in-header=FILE</td><td>URL`</td></tr><tr><td>`-B FILE, --include-before-body=FILE</td><td>URL`</td></tr><tr><td>`-A FILE, --include-after-body=FILE</td><td>URL`</td></tr><tr><td><code>--resource-path=SEARCHPATH</code></td><td>图片等资源的路径, 默认是当前目录</td></tr><tr><td><code>--request-header=NAME:VAL</code></td><td></td></tr><tr><td>`--no-check-certificate[=true</td><td>false]`</td></tr></tbody></table><h2 id="特殊的输出设置" tabindex="-1"><a class="header-anchor" href="#特殊的输出设置" aria-hidden="true">#</a> 特殊的输出设置</h2><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>`--embed-resources[=true</td><td>false]`</td></tr><tr><td>`--html-q-tags[=true</td><td>false]`</td></tr><tr><td>`--ascii[=true</td><td>false]`</td></tr><tr><td>`--reference-links[=true</td><td>false]`</td></tr><tr><td>`--reference-location=block</td><td>section</td></tr><tr><td>`--markdown-headings=setext</td><td>atx`</td></tr><tr><td>`--list-tables[=true</td><td>false]`</td></tr><tr><td>`--top-level-division=default</td><td>section</td></tr><tr><td><code>-N, --number-sections</code></td><td>给章节加上序号</td></tr><tr><td><code>--number-offset=NUMBER[,NUMBER,…]</code></td><td>如果想要<code>first top-level heading</code>序号为<code>6</code>, 则需要指定<code>--number-offset=5</code></td></tr><tr><td>`--listings[=true</td><td>false]`</td></tr><tr><td>`-i, --incremental[=true</td><td>false]`</td></tr><tr><td><code>--slide-level=NUMBER</code></td><td><code>revealjs, pptx</code></td></tr><tr><td>`--section-divs[=true</td><td>false]`</td></tr><tr><td>`--email-obfuscation=none</td><td>javascript</td></tr><tr><td><code>--id-prefix=STRING</code></td><td></td></tr><tr><td><code>-T STRING, --title-prefix=STRING</code></td><td></td></tr><tr><td><code>-c URL, --css=URL</code></td><td></td></tr><tr><td>`--reference-doc=FILE</td><td>URL`</td></tr></tbody></table><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2><p>https://pandoc.org/MANUAL.html#options</p>',8);function U(O,S){const n=l("ExternalLinkIcon");return a(),o("div",null,[u,t("table",null,[h,t("tbody",null,[p,f,_,b,t("tr",null,[m,t("td",null,[d("默认参数文件, 默认搜索工作目录, 其次搜索"),E,d(". 内容可参考"),t("a",R,[d("defaults-files"),s(n)])])]),g,L,v,A,x,F,k,I,M,y,T])]),N])}const w=r(i,[["render",U],["__file","2option.html.vue"]]);export{w as default};
