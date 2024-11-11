name = "环境资源法"
# 增加 ABCD K字段
import json



with open(f'./source/_posts/law/{name}.json', 'r', encoding='utf8') as f:
    data = json.load(f)
new_data = []
for question in data:
    new_question = {}
    for key in question:
        if key == 'rate':
            new_question[key] = question[key]
            new_question["grasp"] = {"A":"","B":"","C":"","D":"","K":""}
        else:
            new_question[key] = question[key]
    new_data.append(new_question)
with open(f'./source/_posts/law/{name}2.json', 'w', encoding='utf8') as f:
    data = json.dump(new_data, f, ensure_ascii=False)


# 增加K字段K字段
import json


with open(f'./source/_posts/law/{name}2.json', 'r', encoding='utf8') as f:
    data = json.load(f)
new_data = []
for question in data:
    new_question = {}
    question["grasp"]["K"]=""
    for key in question:
        new_question[key] = question[key]
    new_data.append(new_question)
with open(f'./source/_posts/law/{name}3.json', 'w', encoding='utf8') as f:
    data = json.dump(new_data, f, ensure_ascii=False)


# 按年份拆分
import json
import re

with open(f'./source/_posts/law/{name}3.json', 'r', encoding='utf8') as f:
    data = json.load(f)
print(len(data))

save_file = {}
for question in data:
    try: 
        year = re.search(r'\d\d\d\d', question["source"]).group(0)
        if year in save_file:
            save_file[year].append(question)
        else:
            save_file[year]=[]
            save_file[year].append(question)
    except:
        pass


for key in save_file:
    last_save = {}
    last_save["info"]={"count":len(save_file[key])}
    last_save["questions"] = save_file[key]
    with open(f'./source/_posts/law/{name}-{key}.json', 'w', encoding='utf8') as f:
        data = json.dump(last_save, f, ensure_ascii=False)