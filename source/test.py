from pathlib import Path
import re


path = Path('./source/_posts')

path.exists()
mds = list(path.glob('**/*.md'))  # 目录及递归所有子目录下所有py文件, **代表递归所有子目录

# md = mds[0]

for md in mds:
    md_name = md.name.split('.')[0]
    with open(md) as f:
        data = f.readlines()
    res_lines = []  
    for line in data:
        res = re.search(r'^#+ ', line)
        if res: 
            line = '#' + line

        
        res = re.search(r'!\[.*?\]\((.*?)\)', line)
        
        if res:

            line = re.sub(r'!\[.*?\]\((.*?)\)',f'![](./{md_name}/{res.group(1)})',line)

        
        res_lines.append(line)
        
    data2 = "".join(res_lines)

    with open(f'./source/docs/{md.name}','w') as f:
        f.write(data2)