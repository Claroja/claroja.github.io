import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o,c as t,a as d}from"./app-7knaTE3M.js";const c={},r=d('<h1 id="进程管理-process" tabindex="-1"><a class="header-anchor" href="#进程管理-process" aria-hidden="true">#</a> 进程管理(process)</h1><h2 id="查询进程" tabindex="-1"><a class="header-anchor" href="#查询进程" aria-hidden="true">#</a> 查询进程</h2><ol><li><code>Get-Process</code>: 获取所有进程</li><li><code>Get-Process -id 0</code>: 通过id获取信息</li><li><code>Get-Process -Name ex*</code>: 通过name获取信息</li><li><code>Get-Process -Name exp*,power*</code>: 获取多个进程信息</li><li><code>get-process -name python | get-member</code>: 获得进程对象的所有属性和方法</li><li><code>(get-process -name python).path</code>: 获得指定进程的路径</li></ol><h2 id="停止进程" tabindex="-1"><a class="header-anchor" href="#停止进程" aria-hidden="true">#</a> 停止进程</h2><ol><li><code>Stop-Process -Name Idle</code>: 通过name停止进程</li><li><code>Get-Process | Where-Object -FilterScript {$_.Responding -eq $false} | Stop-Process</code>: 停止无响应的进程</li><li><code>Get-Process -Name powershell | Where-Object -FilterScript {$_.Id -ne $PID} | Stop-Process -PassThru</code>: 停止会话下的所有进程</li></ol><h2 id="启动进程" tabindex="-1"><a class="header-anchor" href="#启动进程" aria-hidden="true">#</a> 启动进程</h2><h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h3><ol><li><code>Start-Process -FilePath &quot;sort.exe&quot;</code>: 启动进程</li><li><code>Start-Process -FilePath &quot;powershell&quot; -Verb RunAs</code>: 管理员身份运行</li></ol><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td><code>-ArgumentList</code>, <code>Args</code></td><td>给命令传入的参数, 多个使用<code>,</code>隔开</td></tr><tr><td><code>-FilePath</code>, <code>Path</code></td><td>可执行文件或文档（如 .txt 或 .doc 文件）的名称</td></tr><tr><td><code>-NoNewWindow</code>, <code>nnw</code></td><td>不创建新窗口, 默认情况下在 Windows 上，PowerShell 会打开一个新窗口。</td></tr><tr><td><code>-PassThru</code></td><td>为 cmdlet 启动的每个进程返回一个进程对象。 默认情况下，此 cmdlet 不会生成任何输出。</td></tr><tr><td><code>-RedirectStandardError</code>, <code>RSE</code></td><td>将进程产生的所有错误发送给指定的文件。 输入路径和文件名。 默认情况下，在控制台中显示这些错误。</td></tr><tr><td><code>-RedirectStandardInput</code>, <code>RSI</code></td><td>从指定文件读取输入。 输入输入文件的路径和文件名。 默认情况下，进程从键盘获取其输入。</td></tr><tr><td><code>-RedirectStandardOutput</code>, <code>RSO</code></td><td>将进程产生的输出发送给指定的文件。 输入路径和文件名。 默认情况下，在控制台中显示该输出。</td></tr><tr><td><code>-Verb</code></td><td>启动进程时要使用的动词。 可用的谓词取决于进程中运行的文件的文件扩展名. 如果<code>-FilePath</code>是<code>.txt</code>类型, 则<code>-Verb</code>可以是<code>Print</code>, 既打印该文件. <code>.exe</code>对应的<code>-Verb</code>默认是<code>Open</code></td></tr><tr><td><code>-WorkingDirectory</code></td><td>指定新进程应启动的位置。默认为 FilePath 参数中指定的完全限定位置。</td></tr></tbody></table><h3 id="输入输出" tabindex="-1"><a class="header-anchor" href="#输入输出" aria-hidden="true">#</a> 输入输出</h3><ol><li>输入: 无</li><li>输出: <ol><li><code>None</code>: 默认情况下，此 cmdlet 不返回任何输出。</li><li><code>Process</code>: 如果使用 PassThru 参数，则此 cmdlet 将返回进程对象。</li></ol></li></ol><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2><ul><li>https://learn.microsoft.com/zh-cn/powershell/scripting/samples/managing-processes-with-process-cmdlets</li><li>https://learn.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/start-process</li><li>https://learn.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/stop-process</li><li>https://learn.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/get-process</li></ul>',14),a=[r];function s(i,l){return o(),t("div",null,a)}const p=e(c,[["render",s],["__file","进程管理(process).html.vue"]]);export{p as default};
