
path

## get path

```python
from pathlib import Path
path = Path.cwd()  # absolute path
path = Path()  # relative path, equals Path("./") 
path.resolve()  # relative to absolute
path = Path.home()  # user home path
```

## compute path

```python
wave_absolute = Path(Path.home(), "ocean", "wave.txt")
print(wave_absolute)  # /Users/sammy/ocean/wave.txt
```

## iterate path

```python
[x for x in path.iterdir() if x.is_dir()]  # 目录下所有目录
[x for x in path.iterdir() if x.is_file()]  # 目录下所有文件
list(path.glob('**/*.py'))  # 目录及递归所有子目录下所有py文件, **代表递归所有子目录
list(path.glob('*/*.py'))  # 目录下所有一级子目录下所有py文件, *达标通配符
```
## exist

```python
from pathlib import Path
path = Path('/tmp/myfile.txt')
path.exists()
```


## is
```python
from pathlib import Path
path = Path('/tmp', 'myfile.txt')
path.touch()
path.is_file()  # True
path.is_dir()  # False
path.is_symlink()  # False
```

## dir
```python
path.rmdir() #
path.mkdir()  # 创建
```

## file
### create file
```python
from pathlib import Path
path = Path('/tmp', 'myfile.txt')
path.exists()  # False
path.touch()
path.exists()  # True
```

### get file suffix
```python
from pathlib import Path
path = Path('/tmp', 'myfile.txt')
path.name  # myfile.txt
path.suffix  # .txt
```

### get file detail

```python
from pathlib import Path
path = Path('/tmp', 'myfile.txt')
path.touch()
path.write_text('HelloWorld')
path.stat() # os.stat_result(st_mode=33188, st_ino=20705682, st_dev=16777224, st_nlink=1, st_uid=501, st_gid=0, st_size=10, st_atime=1602572294, st_mtime=1602572354, st_ctime=1602572354)
```

### delete file
```python
from pathlib import Path
path = Path('/tmp', 'myfile.txt')
path.touch()
path.is_file()  # True
path.unlink()
path.exists()  # False
```


## 操作
```python
path.parts
path.drive # 获得盼复
path.parents  # 获得父路径
>>> p = PureWindowsPath('c:/foo/bar/setup.py')
>>> p.parents[0]
PureWindowsPath('c:/foo/bar')
>>> p.parents[1]
PureWindowsPath('c:/foo')
>>> p.parents[2]
PureWindowsPath('c:/')
```


参考:
https://docs.python.org/3/library/pathlib.html
https://myapollo.com.tw/zh-tw/python-pathlib/