import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as a,c as s,b as e,d as n,e as i,a as c}from"./app-7knaTE3M.js";const d={},p=c('<h1 id="esp和msr" tabindex="-1"><a class="header-anchor" href="#esp和msr" aria-hidden="true">#</a> ESP和MSR</h1><p>对固态或机械硬盘格式化分区后，会<code>默认创建MSR分区</code>，<code>系统磁盘</code>还会多创建一个<code>ESP分区</code>。这两个分区不会用户显示, 只有在第三方磁盘管理工具如DiskGenius等内才能看到.</p><p>ESP(EFI system partition)分区保存了UEFI引导模式需要的文件, <code>磁盘管理</code>工具内，ESP显示为<code>EFI系统分区</code>.</p><h2 id="msr-microsoft-reserved-partition" tabindex="-1"><a class="header-anchor" href="#msr-microsoft-reserved-partition" aria-hidden="true">#</a> MSR(Microsoft Reserved Partition)</h2><p>MSR, 微软保留分区 , 用途是防止将一块GPT磁盘接到老系统中，被当作未格式化的空硬盘而继续操作（例如重新格式化）导致数据丢失。GPT磁盘上有了这个分区后，当把它接入XP等老系统中，会提示无法识别的磁盘，也无法进一步操作，以保护储存的数据。</p><p>在使用Windows的“磁盘管理”工具格式化或分区时，会默认创建MSR分区(16MB左右)，无需手动操作和设置。</p><h2 id="esp-efi-system-partition" tabindex="-1"><a class="header-anchor" href="#esp-efi-system-partition" aria-hidden="true">#</a> ESP(EFI system partition)</h2><p>ESP是一个标准的FAT32格式分区. ESP分区独立于操作系统之外，当操作系统被引导之后，就不再依赖它。这使得ESP非常适合用来存储那些系统级的维护性的工具和数据，比如：引导管理程序、驱动程序、系统维护工具、系统备份等，甚至可以在ESP里安装一个特殊的操作系统。</p><p>在使用Windows的“磁盘管理”工具格式化或分区时，会默认创建MSR分区(100MB左右)，无需手动操作和设置。</p><p>参考:</p>',10),h={href:"https://baiyunju.cc/8773",target:"_blank",rel:"noopener noreferrer"};function l(S,m){const r=o("ExternalLinkIcon");return a(),s("div",null,[p,e("ul",null,[e("li",null,[e("a",h,[n("硬盘中的MSR、ESP、EFI分区是什么意思"),i(r)])])])])}const f=t(d,[["render",l],["__file","ESP和MSR.html.vue"]]);export{f as default};
