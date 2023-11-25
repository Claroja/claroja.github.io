


## windows安装
<font style="background: hotpink">注意设置在"属性"中设置"以管理员身份运行此程序"</font>否则有些程序, 如`pywin32`某些功能, 如鼠标点击时间, 将无效.
另外, 如果使用vscode, 也需要将vscode设置为"以管理员身份运行此程序", 否则无法打开管理员身份的python.exe



## linux安装
```sh
tar -zxvf Python-3.7.3.tar
cd ./Python-3.7.3
mdkir /root/program/python3.8
./configure --prefix=/root/program/python3.8 # 配置make的编译后的安装目录
make && make install 一步来实现
ln -s /root/program/python3.8/bin/python3.8 /root/program/python3.8/bin/python # 添加软链接
vi /etc/profile # 配置环境变量
export PATH=/root/program/python3.8/bin:$PATH
```






使用pandas时，提示
No module named '_bz2'
第一步
yum -y install bzip2 bzip2-devel
