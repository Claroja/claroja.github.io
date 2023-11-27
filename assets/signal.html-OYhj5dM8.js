import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as d,c as e,e as r}from"./app-O0xqlHfm.js";const i={},l=r('<h1 id="signal" tabindex="-1"><a class="header-anchor" href="#signal" aria-hidden="true">#</a> signal</h1><p>1.linux系统通过信号管理进程,系统规定了进程接收到信号的行为 2.一个进程接收到信号,就会打断原来程序执行流程来处理信号 3.信号只用来通知进程发生了什么事件,不会给进程传递任何数据</p><table><thead><tr><th>信号编号</th><th>行为</th><th>默认动作</th><th>说明</th></tr></thead><tbody><tr><td>1</td><td>SIGHUP</td><td>终止进程</td><td>当用户退出终端时,默认动作为终止进程,向该会话的所有进程发送，可捕获屏蔽</td></tr><tr><td>2</td><td>SIGINT</td><td>终止进程</td><td>Interrupt（Ctrl + C）可捕获屏蔽</td></tr><tr><td>3</td><td>SIGQUIT</td><td>终止进程</td><td>Quit（Ctrl + \\）可捕获屏蔽</td></tr><tr><td>4</td><td>GIGILL</td><td>dump</td><td>非法指令引起</td></tr><tr><td>5</td><td>SIGTRAP</td><td>dump</td><td>debug中断</td></tr><tr><td>6</td><td>SIGABRT/SIGIOT</td><td>dump</td><td>异常中止</td></tr><tr><td>7</td><td>SIGBUS/SIGEMT</td><td>dump</td><td>总线异常/EMT指令</td></tr><tr><td>8</td><td>SIGFPE</td><td>dump</td><td>浮点运算溢出</td></tr><tr><td>9</td><td>SIGKILL</td><td>终止</td><td>无条件终止进程。本信号不能被忽略，处理和阻塞。默认动作为终止进程</td></tr><tr><td>10</td><td>SIGUSR1</td><td>终止</td><td>用户信号, 进程可自定义用途</td></tr><tr><td>11</td><td>SIGSEGV</td><td>dump</td><td>非法内存地址引起</td></tr><tr><td>12</td><td>SIGUSR2</td><td>终止 用户信号, 进程可自定义用途</td><td></td></tr><tr><td>13</td><td>SIGPIPE</td><td>终止</td><td>向某个没有读取的管道中写入数据。默认动作为终止进程。</td></tr><tr><td>14</td><td>SIGALRM</td><td>终止</td><td>定时发送终止信号,就是表明是定时发送的</td></tr><tr><td>15</td><td>SIGTERM</td><td>终止</td><td>执行shell命令Kill时,与SIGKILL不同的是，该信号可以被阻塞和终止。通常用来要示程序正常退出。默认动作为终止进程。</td></tr><tr><td>16</td><td>SIGSTKFLT</td><td>终止</td><td>协处理器栈错误</td></tr><tr><td>17</td><td>SIGCHLD</td><td>忽略</td><td>子进程结束时，父进程会收到这个信号。默认动作为忽略这个信号。</td></tr><tr><td>18</td><td>SIGCONT</td><td>继续</td><td>如果进程已停止，则使其继续运行。默认动作为继续/忽略。</td></tr><tr><td>19</td><td>SIGSTOP</td><td>暂停</td><td>Stop（Ctrl + Z）不可捕获屏蔽</td></tr><tr><td>20</td><td>SIGSTP</td><td>暂停</td><td>停止终端交互进程的运行。按下&lt;ctrl+z&gt;组合键时发出这个信号。默认动作为暂停进程。</td></tr><tr><td>21</td><td>SIGTTIN</td><td>暂停</td><td>后台进程请求输入</td></tr><tr><td>22</td><td>SIGTTOU</td><td>暂停</td><td>后台进程请求输出</td></tr><tr><td>23</td><td>SIGURG</td><td>忽略</td><td>socket发送紧急情况</td></tr><tr><td>24</td><td>SIGXCPU</td><td>dump</td><td>CPU时间限制被打破</td></tr><tr><td>25</td><td>SIGXFSZ</td><td>dump</td><td>文件大小限制被打破</td></tr><tr><td>26</td><td>SIGVTALRM</td><td>终止</td><td>虚拟定时时钟</td></tr><tr><td>27</td><td>SIGPROF</td><td>终止</td><td>profile timer clock</td></tr><tr><td>28</td><td>SIGWINCH</td><td>忽略</td><td>窗口尺寸调整</td></tr><tr><td>29</td><td>SIGIO/SIGPOLL</td><td>终止</td><td>I/O可用</td></tr><tr><td>30</td><td>SIGPWR</td><td>终止</td><td>电源异常</td></tr><tr><td>31</td><td>SIGSYS/SYSUNUSED</td><td>dump</td><td>系统调用异常</td></tr></tbody></table><p>信号生命周期:诞生,注册,执行,注销</p><h2 id="信号诞生" tabindex="-1"><a class="header-anchor" href="#信号诞生" aria-hidden="true">#</a> 信号诞生:</h2><p>1.硬件:<code>ctrl+c</code> 2.程序异常:<code>SIGFPE</code>,<code>SIGSEGV</code> 3.软件:<code>kill</code>,<code>raise</code>,<code>alarm</code>,<code>settimer</code>,<code>sigqueue</code></p><h2 id="信号注册" tabindex="-1"><a class="header-anchor" href="#信号注册" aria-hidden="true">#</a> 信号注册</h2><ol><li><p>给进程发送信号,就是修改PCB中信号结构体的pending位图(sigset_t),将相应的位置设为1.</p><ol><li>PCB(Processing Control Block),在创建进程时,创建PCB <ol><li>程序ID(PID)</li><li>特征信息:系统进程,用户进程,内核进程</li><li>进程状态:运行/就绪/阻塞</li><li>优先级:获得CPU控制权的优先级大小</li><li>通信信息:进程之间的通信关系</li><li>现场保护区:保护阻塞进程作用</li><li>资源需求/分配控制信息</li><li>进程实体信息,程序路径/名称/</li><li>其他</li></ol></li><li>非可靠信号(1~31)不支持排队,非实时信号 ,将对应位置0换为1,如果重复不操作</li><li>可靠信号(32~)支持排队,不管有没有注册都置为1,并添加节点到链表中</li></ol></li><li><p>信号阻塞,建立和pending相同的表,来阻塞不想处理的信号.注意和忽略信号不是一个概念</p><ol><li><code>SIGKILL</code>,<code>SIGSTOP</code>不可被阻塞</li><li>sigset_t信号集 <ol><li>每个信号用一个比特位来表示,0/1表示信号未决或阻塞</li><li>只能使用信号集函数操作,不能直接访问结构体</li><li>pending结构体是未决信号集,里面放了注册但是未处理的信号</li><li>block结构体中是阻塞信号集,放了被阻塞的信号</li><li>相关函数<code> int sigemptyset</code> <code>int sigfillset</code> <code>int sigaddset</code> <code> int sigdelset</code> <code> int sigismembert</code> <code>sigprocmask</code></li></ol></li></ol></li><li><p>信号注销</p><ol><li>删除链表中节点,相应位图置为0</li><li>删除节点,判断是否还有相同信号节点,如果灭有位图置为0,如果有不置0</li></ol></li></ol><h2 id="信号处理-捕获-安装" tabindex="-1"><a class="header-anchor" href="#信号处理-捕获-安装" aria-hidden="true">#</a> 信号处理(捕获/安装)</h2><p>1.确定信号值及进程对该信号值的动作之间的映射关系.<code>signal()</code> <code>sigaction()</code></p><p>参考: https://blog.csdn.net/httpdrestart/article/details/80744352 https://www.jianshu.com/p/e0a69beb98bb https://blog.csdn.net/ENSHADOWER/article/details/83866359 http://m.elecfans.com/article/579913.html https://www.jianshu.com/p/c8edab99173d</p>',11),o=[l];function c(a,s){return d(),e("div",null,o)}const I=t(i,[["render",c],["__file","signal.html.vue"]]);export{I as default};
