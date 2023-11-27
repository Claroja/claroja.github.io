import{_ as d}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as a,o as l,c as n,a as t,b as e,d as o,e as r}from"./app-O0xqlHfm.js";const s={},c=r('<h1 id="uefi和bios" tabindex="-1"><a class="header-anchor" href="#uefi和bios" aria-hidden="true">#</a> UEFI和BIOS</h1><h2 id="uefi和bios的概念" tabindex="-1"><a class="header-anchor" href="#uefi和bios的概念" aria-hidden="true">#</a> UEFI和BIOS的概念</h2><p>UEFI(Unified Extensible Firmware Interface, i.e. UEFI BIOS), UEFI的启动顺序是:</p><ol><li>UEFI</li><li>GPT(EFI Boot Loader)</li><li>Kernel</li><li>Operating System</li></ol><p>BIOS(Basic Input-Output System, i.e. Legacy BIOS or traditional BIOS), BIOS的启动顺序是:</p><ol><li>BIOS</li><li>MBR(Master Boot Record)</li><li>Boot Loader</li><li>Kernel</li><li>Operating System</li></ol><p>UEFI将所有的启动信息都保存在<code>.efi</code>文件中, 并放在EFI专有的系统分区<code>ESP</code>. <code>ESP</code>中还包含了引导加载程序(boot loader programs). 正是因为有单独的分区, 所以EFI才会有更快的引导速度.</p><h2 id="uefi和bios的区别" tabindex="-1"><a class="header-anchor" href="#uefi和bios的区别" aria-hidden="true">#</a> UEFI和BIOS的区别</h2><table><thead><tr><th>--</th><th>BIOS</th><th>UEFI</th></tr></thead><tbody><tr><td>Release Date</td><td>1975.</td><td>2002.</td></tr><tr><td>Operating Mode</td><td>16-bit.</td><td>32-bit/64-bit.</td></tr><tr><td>User Interface</td><td>Basic UI navigation using the keyboard.</td><td>Provides a user-friendly graphical UI with mouse support.</td></tr><tr><td>Partition Support</td><td>Up to four physical partitions.</td><td>Up to 128 physical partitions.</td></tr><tr><td>Partition Size Limit</td><td>2 TB.</td><td>18 exabytes (~18.8 million terabytes).</td></tr><tr><td>Performance</td><td>Performs best on older 16-bit systems.</td><td>Faster boot time and better performance compared to BIOS.</td></tr><tr><td>Storage</td><td>System initialization information stored in a dedicated chip on the motherboard.</td><td>System initialization information stored in a .efi file on the hard drive.</td></tr><tr><td>Security</td><td>Password protection.</td><td>Secure Boot feature.</td></tr><tr><td>Developed By</td><td>Intel</td><td>IBM</td></tr><tr><td>User Interface</td><td>Offers a graphical user interface (GUI), with icons and clickable buttons</td><td>Uses a text-based interface, which can feel like using a command line</td></tr><tr><td>Bootloader</td><td>Supports a bootloader</td><td>Doesn’t support a bootloader</td></tr><tr><td>Booting Speed</td><td>Boots up faster than BIOS due to the bootloader, its modular design, and its pre-boot environment.</td><td>Slower boot time than UEFI</td></tr><tr><td>Partitioning and Capacity</td><td>Supports the GPT partitioning scheme, which allows for larger disk sizes and more partitions</td><td>Uses the MBR partitioning scheme, and has a limited number of partitions</td></tr><tr><td>Security</td><td>Offers better security features, such as support for cryptographic authentication</td><td>Less secure since it lacks support for such features as cryptographic authentication</td></tr><tr><td>Driver Support</td><td>Great driver support</td><td>Limited driver support</td></tr><tr><td>Network Booting</td><td>Supports network booting through the PXE standard</td><td>Has no network booting support</td></tr><tr><td>Compatibility</td><td>16-bit systems</td><td>32-bit/64-bit systems</td></tr><tr><td>Customization</td><td>Offers plenty of customization options</td><td>Not easily customizable</td></tr></tbody></table><h2 id="uefi-和-bios之间的转换" tabindex="-1"><a class="header-anchor" href="#uefi-和-bios之间的转换" aria-hidden="true">#</a> UEFI 和 BIOS之间的转换</h2>',10),p=t("li",null,[t("p",null,"确认磁盘的分区形式(Partition style)"),t("p",null,"MBR + BIOS 和 GPT + UEFI是配对出现的, BIOS不能引导GPT, UEFI不能引导MBR. 具体操作:"),t("ol",null,[t("li",null,[e("Win + R 输入"),t("code",null,"diskmgmt.msc"),e(", 进入磁盘管理(Disk Management)")]),t("li",null,"右键查看系统盘的属性(properties)"),t("li",null,"切换到卷(Volumes), 查看磁盘分区形式")])],-1),h=t("p",null,"MBR和GPT的相互转化",-1),u={href:"https://cdn2.minitool.com/?p=pw&e=pw-demo",target:"_blank",rel:"noopener noreferrer"},f=t("ol",null,[t("li",null,[e("点击"),t("code",null,"Bootable Media")]),t("li",null,[e("左侧边栏"),t("code",null,"Convert MBR Disk to GPT Disk ")])],-1),m=r("<li><p>更改UEFI/BIOS引导模式</p><ol><li>接通电源后连续点击F2(或者F1, F3, F10, F12, ESC, Delete)</li><li>进入<code>BIOS</code>界面后, 选择<code>Boot</code>栏</li><li>更改<code>UEFI/BIOS Boot Mode</code>为<code>Legacy</code>或<code>UEFI</code></li><li>保存更改并重新启动</li></ol></li><li><p>UEFI或BIOS的单模式设置</p><ol><li>如果只想使用UEFI模式, 则可以删除 <code>bootmgr</code>文件</li><li>如果只想使用BIOS模式, 则可以删除<code>efi</code>文件</li></ol></li>",2),b=r("<p>翻译:</p><ul><li>primary partitions(基础分区)</li><li>motherboard firmware(母版固件)</li><li>boot loader programs(启动加载程序)</li><li>disk 磁盘</li><li>partition 分区</li><li>Disk Management 磁盘管理</li><li>properties 属性</li><li>Volumes 卷</li><li>Partition style 磁盘分区形式</li></ul><p>参考:</p>",3),I={href:"https://www.easeus.com/partition-manager-software/uefi-vs-bios.html",target:"_blank",rel:"noopener noreferrer"},B={href:"https://www.partitionwizard.com/partitionmagic/uefi-vs-bios.html",target:"_blank",rel:"noopener noreferrer"},_={href:"https://phoenixnap.com/kb/uefi-vs-bios",target:"_blank",rel:"noopener noreferrer"},S={href:"https://history-computer.com/uefi-vs-bios/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://zhuanlan.zhihu.com/p/26098509",target:"_blank",rel:"noopener noreferrer"};function y(E,F){const i=a("ExternalLinkIcon");return l(),n("div",null,[c,t("ol",null,[p,t("li",null,[h,t("p",null,[e("如果想使用UEFI但是磁盘是MBR, 或者想使用BIOS但磁盘是GPT, 就需要进行MBR和GPT的转换, 这里推荐使用"),t("a",u,[e("MiniTool Partition Wizard"),o(i)]),e("工具.")]),f]),m]),b,t("ul",null,[t("li",null,[t("a",I,[e("uefi-vs-bios"),o(i)])]),t("li",null,[t("a",B,[e("uefi-vs-bios"),o(i)])]),t("li",null,[t("a",_,[e("uefi-vs-bios"),o(i)])]),t("li",null,[t("a",S,[e("uefi-vs-bios"),o(i)])]),t("li",null,[t("a",g,[e("MBR与GPT"),o(i)])])])])}const k=d(s,[["render",y],["__file","UEFI和BIOS.html.vue"]]);export{k as default};
