# shotcut


## 创建快捷方式
比如`root`用户在`/root/`目录下, 下载了`node-v14.15.1-linux-x64`, 可以将运行程序软连接到`/usr/local/bin/`下.
```sh
ln -s /root/node-v14.15.1-linux-x64/bin/node /usr/local/bin/node
```
不需要时直接删除`/usr/local/bin/node`软连接即可.


## 目录
bin是binary的缩写，二进制。
sbin意义为system binary

目录|描述
--|--
`/bin`|常是普通用户和超级用户都会用到的必要的命令，例如`ls`，`pwd`
`/sbin`|通常是系统管理员使用的必要的来管理系统的命令，例如`shutdown`，`ifconfig`
`/usr/bin`|通常是一些非必要的，但是普通用户和超级用户都可能使用到的命令，例如gcc，ldd
`/usr/sbin`|通常是一些非必要的，由系统管理员来使用的管理系统的命令，例如crond，httpd
`/usr/local/bin`|通常是用户后来安装的软件，可能被普通用户或超级用户使用。
`/usr/local/sbin`|通常是用户后来安装的软件，一般是用来管理系统的，被系统管理员使用。


## 或者直接添加环境变量

```sh
export 变量名='值'
export PATH=$PATH:$HOME/bin:$ORACLE_HOME/bin
```
### 系统环境变量
系统环境变量对全部的用户生效，设置系统环境变量有三种方法。
1. 系统环境变量`/etc/profile`, 用户登录时`/etc/profile`文件. 或者手动执行`source /etc/profile`. 不推荐.
2. 在`/etc/profile.d`目录中增加环境变量脚本文件，这是Linux推荐的方法。`/etc/profile`在每次启动时会执行`/etc/profile.d`下全部的脚本文件。
3. 在`/etc/bashrc`文件中设置环境变量。用户使用的`bash shell`时调用, 不建议.
### 用户环境变量
用户环境变量只对当前用户生效，设置用户环境变量也有多种方法。
1. `.bash_profile`（推荐首选）当用户登录时执行
2. `.bashrc` 每次打开终端时执行
3. `.bash_logout` 退出终端时执行
4. `.bash_history` 保存了当前用户使用过的历史命令

### 环境变量脚本执行顺序
`/etc/profile->/etc/profile.d->/etc/bashrc->用户的.bash_profile->用户的.bashrc`


## PATH变量
可执行程序的搜索目录，可执行程序包括Linux系统命令和用户的应用程序。PATH环境变量存放的是目录列表，目录之间用冒号:分隔，最后的圆点.表示当前目录。PATH缺省包含了Linux系统命令所在的目录（/usr/local/bin:/usr/bin:/usr/local/sbin:/usr/sbin）
