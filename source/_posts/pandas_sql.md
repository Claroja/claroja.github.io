
# 写入数据库
```python
from sqlalchemy import create_engine
engine = create_engine("mysql+pymysql://root:123@localhost:3306/aaa?charset=utf8mb4")
data.to_sql(name="price",con=engine,if_exists='replace',index=False,index_label=False)
```
- `to_sql`其他的参数说明:
- `name`: 输出的表名
- `con`: 与read_sql中相同，数据库链接
- `if_exits`： 三种模式：fail，若表存在，则不输出；replace：若表存在，覆盖原来表里的数据；append：若表存在，将数据写到原表的后面。默认为fail。
- `index`：是否将df的index单独写到一列中
- `index_label`:指定列作为df的index输出，此时index为True



# 读取数据库
```python
from sqlalchemy import create_engine

sql = 'select * from data'
conn = create_engine('mysql+pymysql://root:159951@127.0.0.1:3306/test')
pdata = pd.read_sql(sql,conn)
```


参考:
https://blog.csdn.net/rubysxl/article/details/103947739