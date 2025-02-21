import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-jdLxCr9I.js";const e={},o=t(`<h1 id="subprocess" tabindex="-1"><a class="header-anchor" href="#subprocess" aria-hidden="true">#</a> subprocess</h1><p>运行linux的shell命令, 用来替代<code>os.system()</code>和<code>os.popen()</code>.</p><ul><li><code>os.system()</code>:将结果输出到屏幕，只返回命令执行状态(0：成功，非 0 ： 失败)</li><li><code>os.popen()</code>:将结果保存在内存当中，可以用<code>read()</code>方法读取出来</li></ul><p>常用方法是<code>run()</code>和<code>Popen()</code>, <code>call()</code>, <code>check_call()</code>, <code>check_output()</code>这些方法是3.5之前版本的, 现在已经不常使用.</p><h2 id="run" tabindex="-1"><a class="header-anchor" href="#run" aria-hidden="true">#</a> run()</h2><p><code>subprocess</code>最长用的是<code>run()</code>方法, 它会阻塞主进程直到子进程运行结束.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> subprocess
subprocess<span class="token punctuation">.</span>run<span class="token punctuation">(</span>popenargs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;echo&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>等价于在shell或cmd中执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> hello
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>popenargs</td><td>列表, 命令行按空格拆解</td></tr><tr><td>input</td><td>标准输入</td></tr><tr><td>capture_output</td><td>捕获<code>stdout</code>和<code>stderr</code>, 默认不捕获, 所以返回的<code>CompletedProcess</code>对象对应属性为<code>None</code></td></tr><tr><td>stdout</td><td>捕获标准输出, <code>stdout=PIPE</code></td></tr><tr><td>stderr</td><td>捕获标准错误, <code>stderr=PIPE</code></td></tr><tr><td>timeout</td><td>阻塞的时间, 超过则报异常</td></tr><tr><td>check</td><td>如果返回非0, 将抛出<code>CalledProcessError</code></td></tr><tr><td>shell</td><td></td></tr><tr><td>encoding</td><td>当设置<code>capture_output=True</code>后, 将stdout和stderr自动转换为字符</td></tr></tbody></table><ol><li><p><code>input</code></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># main.py</span>
<span class="token keyword">import</span> subprocess
<span class="token keyword">from</span> subprocess <span class="token keyword">import</span> PIPE

res <span class="token operator">=</span> subprocess<span class="token punctuation">.</span>run<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;python&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;hello.py&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                    <span class="token builtin">input</span><span class="token operator">=</span><span class="token string">&#39;hello input&#39;</span><span class="token punctuation">,</span>
                    encoding<span class="token operator">=</span><span class="token string">&#39;utf8&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># hello.py </span>
<span class="token keyword">import</span> sys
data <span class="token operator">=</span> sys<span class="token punctuation">.</span>stdin<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>shell</code></p><p>第一个参数<code>bash</code>指定使用<code>bash</code><br> 第二个参数<code>-c</code>是<code>command</code>的意思</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> subprocess
subprocess<span class="token punctuation">.</span>run<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;bash&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;-c&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;ls /usr/bin | grep pycode&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>使用<code>shell</code>参数</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>subprocess<span class="token punctuation">.</span>run<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;ls /usr/bin | grep pycode&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> shell<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>  <span class="token comment"># 等价于[&quot;sh&quot;, &quot;-c&quot;, ...]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用<code>powershell</code>, 注意<code>pwsh</code>和<code>pwsh.exe</code>都可以, 或者可以试试<code>powershell</code> 或 <code>powershell.exe</code><br> 另外第二个参数是<code>-Command</code>, 和<code>bash</code>不同</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> subprocess
subprocess<span class="token punctuation">.</span>run<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;pwsh&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;-Command&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;ls C:\\RealPython&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>使用<code>cmd</code>, 第二个参数是<code>/c</code></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> subprocess
subprocess<span class="token punctuation">.</span>run<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;cmd&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/c&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;dir C:\\RealPython&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="返回" tabindex="-1"><a class="header-anchor" href="#返回" aria-hidden="true">#</a> 返回</h3><p><code>run()</code>方法会返回<code>CompletedProcess</code>对象. 正如它的名字的<code>Completed</code>, 是在子进程完成后才返回.</p><table><thead><tr><th>属性</th><th>描述</th></tr></thead><tbody><tr><td><code>returncode</code></td><td>子进程的退出状态码, 退出状态码为0则表示进程成功运行了；一个负值-N表示这个子进程被信号N终止了</td></tr><tr><td><code>stdout</code></td><td>从子进程捕获的stdout。这通常是一个字节序列, 需要<code>run()</code>中传入<code>capture_output=True</code></td></tr><tr><td><code>stderr</code></td><td>从子进程捕获的stderr。它的值与stdout一样，是一个字节序列</td></tr></tbody></table><p>输出详解: 在<code>run()</code>方法中传入<code>capture_output=True</code>之后, 返回CompletedProcess对象的<code>.stdout</code>将会获得子进程的输出.<br><code>.stdout</code>的输出是字节, 我们需要调用<code>CompletedProcess.stdout.decode(&quot;utf-8&quot;)</code>来转化为文本.<br> 也可以在<code>run()</code>传入<code>encoding</code>参数来自动将字节转换为文本.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> subprocess
completed_process <span class="token operator">=</span> subprocess<span class="token punctuation">.</span>run<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;echo&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>capture_output<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
completed_process<span class="token punctuation">.</span>stdout  <span class="token comment"># b&#39;hello\\n&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>capture_output=True</code>等价于<code>stdout=subprocess.PIPE</code>和<code>stderr=subprocess.PIPE</code></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> subprocess
completed_process <span class="token operator">=</span> subprocess<span class="token punctuation">.</span>run<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;echo&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>stdout<span class="token operator">=</span>subprocess<span class="token punctuation">.</span>PIPE<span class="token punctuation">,</span>stderr<span class="token operator">=</span>subprocess<span class="token punctuation">.</span>PIPE<span class="token punctuation">)</span>
completed_process<span class="token punctuation">.</span>stdout  <span class="token comment"># b&#39;hello\\n&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以指定将输出保存到文件</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> subprocess
<span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;./test.txt&#39;</span><span class="token punctuation">,</span>mode<span class="token operator">=</span><span class="token string">&#39;w&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
    completed_process <span class="token operator">=</span> subprocess<span class="token punctuation">.</span>run<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;echo&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>stdout<span class="token operator">=</span>f<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="popen" tabindex="-1"><a class="header-anchor" href="#popen" aria-hidden="true">#</a> Popen()</h2><p><code>Popen()</code>方法和<code>run()</code>方法很像, 传入<code>run()</code>的参数都可以传入<code>Popen()</code><br> 他们俩最大的区别是<code>Popen()</code>是非阻塞的, 会并行执行子任务. <code>run()</code>方法返回<code>CompletedProcess</code>对象, 而<code>Popen()</code>返回的是<code>Popen</code>对象, <code>CompletedProcess</code>的标准流指向的是字节对象或字符串, 而<code>Popen</code>对象指向的是真正的流.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> subprocess

ls_process <span class="token operator">=</span> subprocess<span class="token punctuation">.</span>Popen<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;ls&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/usr/bin&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> stdout<span class="token operator">=</span>subprocess<span class="token punctuation">.</span>PIPE<span class="token punctuation">)</span>
grep_process <span class="token operator">=</span> subprocess<span class="token punctuation">.</span>Popen<span class="token punctuation">(</span>
    <span class="token punctuation">[</span><span class="token string">&quot;grep&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;python&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> stdin<span class="token operator">=</span>ls_process<span class="token punctuation">.</span>stdout<span class="token punctuation">,</span> stdout<span class="token operator">=</span>subprocess<span class="token punctuation">.</span>PIPE
<span class="token punctuation">)</span>

<span class="token keyword">for</span> line <span class="token keyword">in</span> grep_process<span class="token punctuation">.</span>stdout<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>line<span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>strip<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数-1" tabindex="-1"><a class="header-anchor" href="#参数-1" aria-hidden="true">#</a> 参数</h3><p>参考<code>run()</code>, 特别关注以下:</p><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>bufsize</td><td>在创建stdin / stdout / stderr管道文件对象时，bufsize将作为open()函数的相应参数. 0 代表unbuffered, 1 代表 line buffered, 其他正数代表buffer size, 负数代表使用系统默认的buffer size (io.DEFAULT_BUFFER_SIZE)</td></tr><tr><td>env</td><td>环境变量</td></tr><tr><td>cwd</td><td>如果该参数值不是None，则该函数将会在执行这个子进程之前改变当前工作目录。</td></tr></tbody></table><h3 id="返回-1" tabindex="-1"><a class="header-anchor" href="#返回-1" aria-hidden="true">#</a> 返回</h3><p>返回 <code>Popen</code>对象.</p><table><thead><tr><th>属性</th><th>描述</th></tr></thead><tbody><tr><td>PopenObject.poll()</td><td>用于检查命令是否已经执行结束，若结束返回状态码；若未结束返回None</td></tr><tr><td>PopenObject.wait([timeout, endtime])</td><td>等待子进程结束，并返回状态码；若超过timeout(s)进程仍未结束，则抛出异常；</td></tr><tr><td>PopenObject.send_signal(signal)</td><td>发送信号signal给子进程；</td></tr><tr><td>PopenObject.terminate()</td><td>停止子进程；</td></tr><tr><td>PopenObject.kill()</td><td>杀死子进程；</td></tr><tr><td>PopenObject.communicate([input, timeout])</td><td>与进程进行交互（如发送数据到stdin、读取stdout和stderr数据），它会阻塞父进程，直到子进程完成；</td></tr><tr><td>PopenObject.pid</td><td>继承ID</td></tr></tbody></table><p>字节流控制:</p><ol><li><p>PopenObject.stdin： 若PopenObject中stdin为PIPE，则返回一个可写流对象；若encoding或errors参数被指定或universal_newlines参数为True，则此流是一个文件流，否则为字节流。 若PopenObject中stdin不是PIPE，则属性为None。 stdin输入流非None，可执行写操作即PopenObject.stdin.write(s)</p></li><li><p>PopenObject.stdout： 若PopenObject中stdout为PIPE，则返回一个可读流对象；若encoding或errors参数被指定或universal_newlines参数为True，则此流是一个文件流，否则为字节流。 若PopenObject中stdout不是PIPE，则属性为None。 stdout输出流非None，可执行读操作即PopenObject.stdout.read()或.readlines()</p></li><li><p>PopenObject.stderr： 若PopenObject中stderr为PIPE，则返回一个可读流对象；若encoding或errors参数被指定或universal_newlines参数为True，则此流是一个文件流，否则为字节流。 若PopenObject中stderr不是PIPE，则属性为None。 stderr错误流非None，可执行读操作即PopenObject.stderr.read()或.readlines()</p></li></ol><h2 id="应用" tabindex="-1"><a class="header-anchor" href="#应用" aria-hidden="true">#</a> 应用</h2><h3 id="执行python文件-并传参" tabindex="-1"><a class="header-anchor" href="#执行python文件-并传参" aria-hidden="true">#</a> 执行python文件, 并传参</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> subprocess
subprocess<span class="token punctuation">.</span>run<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;python&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;timer.py&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;5&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">## timer.py</span>

<span class="token keyword">from</span> argparse <span class="token keyword">import</span> ArgumentParser
<span class="token keyword">from</span> time <span class="token keyword">import</span> sleep

<span class="token comment">## 初始化参数接收器</span>
parser <span class="token operator">=</span> ArgumentParser<span class="token punctuation">(</span><span class="token punctuation">)</span>
parser<span class="token punctuation">.</span>add_argument<span class="token punctuation">(</span><span class="token string">&quot;time&quot;</span><span class="token punctuation">,</span> <span class="token builtin">type</span><span class="token operator">=</span><span class="token builtin">int</span><span class="token punctuation">)</span>

<span class="token comment">## 获取输入的参数</span>
args <span class="token operator">=</span> parser<span class="token punctuation">.</span>parse_args<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">## 打印</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;Starting timer of </span><span class="token interpolation"><span class="token punctuation">{</span>args<span class="token punctuation">.</span>time<span class="token punctuation">}</span></span><span class="token string"> seconds&quot;</span></span><span class="token punctuation">)</span>
<span class="token keyword">for</span> _ <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>args<span class="token punctuation">.</span>time<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;.&quot;</span><span class="token punctuation">,</span> end<span class="token operator">=</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> flush<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
    sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Done!&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用虚拟环境" tabindex="-1"><a class="header-anchor" href="#使用虚拟环境" aria-hidden="true">#</a> 使用虚拟环境</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> subprocess

subprocess<span class="token punctuation">.</span>Popen<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;virtualenv1/bin/python&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;my_script.py&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
subprocess<span class="token punctuation">.</span>Popen<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;virtualenv2/bin/python&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;my_other_script.py&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="异常处理" tabindex="-1"><a class="header-anchor" href="#异常处理" aria-hidden="true">#</a> 异常处理</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> subprocess
<span class="token keyword">try</span><span class="token punctuation">:</span>
    subprocess<span class="token punctuation">.</span>run<span class="token punctuation">(</span>
        <span class="token punctuation">[</span><span class="token string">&quot;***&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> timeout<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">,</span> check<span class="token operator">=</span><span class="token boolean">True</span>
    <span class="token punctuation">)</span>
<span class="token keyword">except</span> FileNotFoundError <span class="token keyword">as</span> exc<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;Process failed because the executable could not be found.\\n</span><span class="token interpolation"><span class="token punctuation">{</span>exc<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>
<span class="token keyword">except</span> subprocess<span class="token punctuation">.</span>CalledProcessError <span class="token keyword">as</span> exc<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>
        <span class="token string-interpolation"><span class="token string">f&quot;Process failed because did not return a successful return code. &quot;</span></span>
        <span class="token string-interpolation"><span class="token string">f&quot;Returned </span><span class="token interpolation"><span class="token punctuation">{</span>exc<span class="token punctuation">.</span>returncode<span class="token punctuation">}</span></span><span class="token string">\\n</span><span class="token interpolation"><span class="token punctuation">{</span>exc<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span>
    <span class="token punctuation">)</span>
<span class="token keyword">except</span> subprocess<span class="token punctuation">.</span>TimeoutExpired <span class="token keyword">as</span> exc<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;Process timed out.\\n</span><span class="token interpolation"><span class="token punctuation">{</span>exc<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考: https://realpython.com/python-subprocess/</p>`,41),p=[o];function c(i,u){return s(),a("div",null,p)}const r=n(e,[["render",c],["__file","subprocess.html.vue"]]);export{r as default};
