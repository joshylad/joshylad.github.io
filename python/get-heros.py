from urllib.request import urlopen
from json import loads, dumps
from os import system

id_url = r"https://api.steampowered.com/IEconDOTA2_570/GetHeroes/v0001/?key=<key>&language=en_us"
image_url = r"http://cdn.dota2.com/apps/dota2/images/heroes/"

heros_json = urlopen(id_url).read().decode("utf-8")
heros= loads(heros_json)["result"]

for hero in heros["heroes"]:
    hero['img-name'] = ''.join([hero['name'].replace("npc_dota_hero_", ""), '_lg.png'])
    del hero['name']

for index, hero_name in enumerate(heros["heroes"]):
    print("%s/%s" % (index + 1, len(heros["heroes"])))
    system("wget -q %s" % image_url + hero_name['img-name'])


with open("../../js/hero.json", "w") as hf:
    hf.write(dumps(heros["heroes"]))
