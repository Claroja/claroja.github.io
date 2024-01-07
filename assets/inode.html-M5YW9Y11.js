import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as e,e as a}from"./app-SnI5rGHA.js";const i={},o=a(`<h1 id="inode" tabindex="-1"><a class="header-anchor" href="#inode" aria-hidden="true">#</a> inode</h1><p>inode(index node)描述文件或目录的系统对象。每个inode存储对象数据的属性(上次更改的时间、访问、修改)和磁盘块位置。 文件的真实数据不存储在inode中，而是存储在称为&quot;数据块&quot;的地方 每个文件都与inode相关联，inode由整数标识，通常称为i-number或inode号。 使用ls -i命令可以找到文件的inode号。ls-i命令在报表的第一列中打印 i-node编号。 文件的标识是它的inode号，而不是它的名称。</p><p>inode包含的信息: File types ( executable, block special etc ) Permissions ( read, write etc ) UID ( Owner ) GID ( Group ) FileSize Time stamps including last access, last modification and last inode number change. File deletion time Number of links ( soft/hard ) Location of file on harddisk Some other metadata about file.</p><p>使用ls -i命令可以找到文件的inode号。ls-i命令在报表的第一列中打印 i-node编号。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>rockydeMacBook-Pro:~ rocky$ <span class="token function">ls</span> <span class="token parameter variable">-i</span>
<span class="token number">14373725</span> Applications       <span class="token number">624053</span> Movies           <span class="token number">14740502</span> account.txt
<span class="token number">624013</span> Desktop              <span class="token number">624055</span> Music            <span class="token number">3800781</span> default-soapui-workspace.xml
<span class="token number">623997</span> Documents            <span class="token number">624057</span> Pictures         <span class="token number">4320031342</span> node_modules
<span class="token number">623999</span> Downloads            <span class="token number">624059</span> Public           <span class="token number">3800780</span> soapui-settings.xml
<span class="token number">624001</span> Library              <span class="token number">670752</span> Work
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果知道了文件的inode编号，那么可以使用下面的命令来查找文件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>rockydeMacBook-Pro:Work rocky$ <span class="token function">ls</span> <span class="token parameter variable">-i</span>
<span class="token number">13583397</span> config_datasource.properties   <span class="token number">13964509</span> npm-debug.log          <span class="token number">13175726</span> workspace
<span class="token number">2913703</span> document              <span class="token number">674806</span> project
<span class="token number">13822742</span> idea                 <span class="token number">670756</span> software
rockydeMacBook-Pro:Work rocky$ <span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-inum</span> <span class="token number">13583397</span> <span class="token parameter variable">-print</span>
./config_datasource.properties
rockydeMacBook-Pro:Work rocky$ 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="hardlink" tabindex="-1"><a class="header-anchor" href="#hardlink" aria-hidden="true">#</a> hardlink</h2><p>hardlink是一个指向inode的名称。这意味着如果file1有一个名为file2的hardlink，那么这两个文件都引用相同的inode。因此，当您为一个文件创建一个hardlink时，您真正要做的就是为一个inode添加一个新的名称。为此，请使用不带选项的ln命令。关于hard links的有趣之处在于原始文件和link之间没有差异：它们只是连接到同一inode的两个名称。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## ls -l /home/bobbin/sync.sh  </span>
-rw-r----- <span class="token number">1</span> root root <span class="token number">5</span> Apr <span class="token number">7</span> 06:09 /home/bobbin/sync.sh
<span class="token comment">## ln /home/bobbin/sync.sh synchro</span>
<span class="token comment">## ls -il /home/bobbin/sync.sh synchro </span>
<span class="token number">517333</span> -rw-r----- <span class="token number">2</span> root root <span class="token number">5</span> Apr <span class="token number">7</span> 06:09 /home/bobbin/sync.sh
<span class="token number">517333</span> -rw-r----- <span class="token number">2</span> root root <span class="token number">5</span> Apr <span class="token number">7</span> 06:09 synchro
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="inode随复制、移动和删除而更改" tabindex="-1"><a class="header-anchor" href="#inode随复制、移动和删除而更改" aria-hidden="true">#</a> inode随复制、移动和删除而更改</h2><p>复制文件：CP分配一个空闲的inode编号，并在inode表中放置一个新条目。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#### Check inode of existing file </span>
$ <span class="token function">ls</span> <span class="token parameter variable">-il</span>  myfile.txt
<span class="token number">1150561</span> -rw-r--r-- <span class="token number">1</span> root root <span class="token number">0</span> Mar <span class="token number">10</span> 01:06 myfile.txt

<span class="token comment">#### Copy file with new name </span>
$ <span class="token function">cp</span> myfile.txt myfile_new.txt

<span class="token comment">#### Check inode number of new file. Its changed </span>
$ <span class="token function">ls</span> <span class="token parameter variable">-il</span> myfile_new.txt
<span class="token number">1150562</span> -rw-r--r-- <span class="token number">1</span> root root <span class="token number">0</span> Mar <span class="token number">10</span> 01:09 myfile_new.txt

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>移动或重命名文件：如果目标与源文件系统相同，对inode编号没有影响，它只更改inode表中的时间戳。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#### Check inode of existing file </span>
$ <span class="token function">ls</span> <span class="token parameter variable">-il</span>  myfile.txt
<span class="token number">1150561</span> -rw-r--r-- <span class="token number">1</span> root root <span class="token number">0</span> Mar <span class="token number">10</span> 01:06 myfile.txt

<span class="token comment">#### Moved file to another directory </span>
$ <span class="token function">mv</span> myfile.txt /opt/

<span class="token comment">#### Check inode number of moved file. No change in inode </span>
$ <span class="token function">ls</span> <span class="token parameter variable">-il</span> /opt/myfile.txt
<span class="token number">1150561</span> -rw-r--r-- <span class="token number">1</span> root root <span class="token number">0</span> Mar <span class="token number">10</span> 01:06 /opt/myfile.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>删除一个文件：在Linux中删除一个文件，减少链接计数，释放的inode编号会被重用。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>总结：文件通过文件名进行访问，但事实上，对于文件本身并不与文件名称直接相关联。相反，文件通过inode来访问，inode使用唯一的数值进行标志。该值称为inode编号（inode number），通常简写为i-number或者ino。</p><p>参考: https://www.jianshu.com/p/101e43dfff30</p>`,19),l=[o];function r(c,d){return s(),e("div",null,l)}const m=n(i,[["render",r],["__file","inode.html.vue"]]);export{m as default};
