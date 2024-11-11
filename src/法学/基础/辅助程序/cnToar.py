import re
from cn2an import cn2an
from pathlib import Path

import os
os.getcwd()
os.chdir("./")

path = Path('./')


for title in list(path.glob('**/*.md')):
    print(title.stem)
    title = title.stem

    with open(f"./{title}.md", 'r', encoding='utf8') as f:
        text = f.readlines()
            
    new_text = []

    for line in text:
        res = re.search(r'^第(.{1,10}?)条', line)
        print(line)
        if res:
            arabic = res.group(1)
            line = line.replace(arabic, str(cn2an(arabic)))
        new_text.append(line)
        
        
    with open(f"./{title}_新.md", 'w', encoding='utf8') as f:
        f.writelines(new_text)
