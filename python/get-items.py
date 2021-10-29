from urllib.request import urlopen
from json import loads, dumps
from os import system

with open("item.json") as i:
    items_json = loads(i.read())

print(items_json)