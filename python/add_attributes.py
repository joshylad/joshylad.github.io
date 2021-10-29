from urllib.request import urlopen
from json import loads, dumps
from os import system

with open("hero2.json") as i:
    hero = loads(i.read())
x = []

for a in hero:
    if a["attribute"] == "agi":
        x.append(a)

agi = len(x)

for a in hero:
    if a["attribute"] == "int":
        x.append(a)

int = len(x) - agi

for a in hero:
    if a["attribute"] == "str":
        x.append(a)

print(agi,int,len(x) - int - agi)
with open("hero3.json", 'w') as i:
     i.write(dumps(x))