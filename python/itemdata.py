from urllib.request import urlopen
from json import loads, dumps
from os import system

image_url = r"http://cdn.dota2.com/apps/dota2/images/items/"

with open("item.json") as ij:
    items_json = loads(ij.read())

print(items_json)


for index, hero_name in enumerate(items_json):
    print('<img src="assets/img/Items/%s">' % items_json[hero_name]['img'])

