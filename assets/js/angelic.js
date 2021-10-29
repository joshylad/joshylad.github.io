$(document).ready(function () {
    $('input[type="checkbox"]').change(function() {
        var checked = 0;
        for (var i = 0; i < 3; i++) {
            if($("#attribute" + (i + 1)).is(":checked")){
                checked++;
            }
        }
        if(checked==0){
            this.checked = true;
        }
    });
});

$(window).load(function () {
    var button = $("#generate");
    button.prop("disabled", false);
    button.html("Generate Build");
    button.click(function () {
        var heroes = [
            [
                {
                    "img": "antimage_lg.jpg",
                    "localized_name": "Anti-Mage",
                    "attribute": "agi",
                    "id": 1
                },
                {
                    "img": "bloodseeker_lg.jpg",
                    "localized_name": "Bloodseeker",
                    "attribute": "agi",
                    "id": 4
                },
                {
                    "img": "drow_ranger_lg.jpg",
                    "localized_name": "Drow Ranger",
                    "attribute": "agi",
                    "id": 6
                },
                {
                    "img": "juggernaut_lg.jpg",
                    "localized_name": "Juggernaut",
                    "attribute": "agi",
                    "id": 8
                },
                {
                    "img": "mirana_lg.jpg",
                    "localized_name": "Mirana",
                    "attribute": "agi",
                    "id": 9
                },
                {
                    "img": "nevermore_lg.jpg",
                    "localized_name": "Shadow Fiend",
                    "attribute": "agi",
                    "id": 11
                },
                {
                    "img": "morphling_lg.jpg",
                    "localized_name": "Morphling",
                    "attribute": "agi",
                    "id": 10
                },
                {
                    "img": "phantom_lancer_lg.jpg",
                    "localized_name": "Phantom Lancer",
                    "attribute": "agi",
                    "id": 12
                },
                {
                    "img": "razor_lg.jpg",
                    "localized_name": "Razor",
                    "attribute": "agi",
                    "id": 15
                },
                {
                    "img": "vengefulspirit_lg.jpg",
                    "localized_name": "Vengeful Spirit",
                    "attribute": "agi",
                    "id": 20
                },
                {
                    "img": "riki_lg.jpg",
                    "localized_name": "Riki",
                    "attribute": "agi",
                    "id": 32
                },
                {
                    "img": "sniper_lg.jpg",
                    "localized_name": "Sniper",
                    "attribute": "agi",
                    "id": 35
                },
                {
                    "img": "venomancer_lg.jpg",
                    "localized_name": "Venomancer",
                    "attribute": "agi",
                    "id": 40
                },
                {
                    "img": "faceless_void_lg.jpg",
                    "localized_name": "Faceless Void",
                    "attribute": "agi",
                    "id": 41
                },
                {
                    "img": "phantom_assassin_lg.jpg",
                    "localized_name": "Phantom Assassin",
                    "attribute": "agi",
                    "id": 44
                },
                {
                    "img": "templar_assassin_lg.jpg",
                    "localized_name": "Templar Assassin",
                    "attribute": "agi",
                    "id": 46
                },
                {
                    "img": "viper_lg.jpg",
                    "localized_name": "Viper",
                    "attribute": "agi",
                    "id": 47
                },
                {
                    "img": "luna_lg.jpg",
                    "localized_name": "Luna",
                    "attribute": "agi",
                    "id": 48
                },
                {
                    "img": "clinkz_lg.jpg",
                    "localized_name": "Clinkz",
                    "attribute": "agi",
                    "id": 56
                },
                {
                    "img": "broodmother_lg.jpg",
                    "localized_name": "Broodmother",
                    "attribute": "agi",
                    "id": 61
                },
                {
                    "img": "bounty_hunter_lg.jpg",
                    "localized_name": "Bounty Hunter",
                    "attribute": "agi",
                    "id": 62
                },
                {
                    "img": "weaver_lg.jpg",
                    "localized_name": "Weaver",
                    "attribute": "agi",
                    "id": 63
                },
                {
                    "img": "spectre_lg.jpg",
                    "localized_name": "Spectre",
                    "attribute": "agi",
                    "id": 67
                },
                {
                    "img": "ursa_lg.jpg",
                    "localized_name": "Ursa",
                    "attribute": "agi",
                    "id": 70
                },
                {
                    "img": "gyrocopter_lg.jpg",
                    "localized_name": "Gyrocopter",
                    "attribute": "agi",
                    "id": 72
                },
                {
                    "img": "lone_druid_lg.jpg",
                    "localized_name": "Lone Druid",
                    "attribute": "agi",
                    "id": 80
                },
                {
                    "img": "meepo_lg.jpg",
                    "localized_name": "Meepo",
                    "attribute": "agi",
                    "id": 82
                },
                {
                    "img": "nyx_assassin_lg.jpg",
                    "localized_name": "Nyx Assassin",
                    "attribute": "agi",
                    "id": 88
                },
                {
                    "img": "naga_siren_lg.jpg",
                    "localized_name": "Naga Siren",
                    "attribute": "agi",
                    "id": 89
                },
                {
                    "img": "slark_lg.jpg",
                    "localized_name": "Slark",
                    "attribute": "agi",
                    "id": 93
                },
                {
                    "img": "medusa_lg.jpg",
                    "localized_name": "Medusa",
                    "attribute": "agi",
                    "id": 94
                },
                {
                    "img": "troll_warlord_lg.jpg",
                    "localized_name": "Troll Warlord",
                    "attribute": "agi",
                    "id": 95
                },
                {
                    "img": "ember_spirit_lg.jpg",
                    "localized_name": "Ember Spirit",
                    "attribute": "agi",
                    "id": 106
                },
                {
                    "img": "terrorblade_lg.jpg",
                    "localized_name": "Terrorblade",
                    "attribute": "agi",
                    "id": 109
                }
            ],
            [
                {
                    "img": "bane_lg.jpg",
                    "localized_name": "Bane",
                    "attribute": "int",
                    "id": 3
                },
                {
                    "img": "crystal_maiden_lg.jpg",
                    "localized_name": "Crystal Maiden",
                    "attribute": "int",
                    "id": 5
                },
                {
                    "img": "puck_lg.jpg",
                    "localized_name": "Puck",
                    "attribute": "int",
                    "id": 13
                },
                {
                    "img": "storm_spirit_lg.jpg",
                    "localized_name": "Storm Spirit",
                    "attribute": "int",
                    "id": 17
                },
                {
                    "img": "windrunner_lg.jpg",
                    "localized_name": "Windranger",
                    "attribute": "int",
                    "id": 21
                },
                {
                    "img": "zuus_lg.jpg",
                    "localized_name": "Zeus",
                    "attribute": "int",
                    "id": 22
                },
                {
                    "img": "lina_lg.jpg",
                    "localized_name": "Lina",
                    "attribute": "int",
                    "id": 25
                },
                {
                    "img": "lich_lg.jpg",
                    "localized_name": "Lich",
                    "attribute": "int",
                    "id": 31
                },
                {
                    "img": "lion_lg.jpg",
                    "localized_name": "Lion",
                    "attribute": "int",
                    "id": 26
                },
                {
                    "img": "shadow_shaman_lg.jpg",
                    "localized_name": "Shadow Shaman",
                    "attribute": "int",
                    "id": 27
                },
                {
                    "img": "witch_doctor_lg.jpg",
                    "localized_name": "Witch Doctor",
                    "attribute": "int",
                    "id": 30
                },
                {
                    "img": "enigma_lg.jpg",
                    "localized_name": "Enigma",
                    "attribute": "int",
                    "id": 33
                },
                {
                    "img": "tinker_lg.jpg",
                    "localized_name": "Tinker",
                    "attribute": "int",
                    "id": 34
                },
                {
                    "img": "necrolyte_lg.jpg",
                    "localized_name": "Necrophos",
                    "attribute": "int",
                    "id": 36
                },
                {
                    "img": "warlock_lg.jpg",
                    "localized_name": "Warlock",
                    "attribute": "int",
                    "id": 37
                },
                {
                    "img": "queenofpain_lg.jpg",
                    "localized_name": "Queen of Pain",
                    "attribute": "int",
                    "id": 39
                },
                {
                    "img": "death_prophet_lg.jpg",
                    "localized_name": "Death Prophet",
                    "attribute": "int",
                    "id": 43
                },
                {
                    "img": "pugna_lg.jpg",
                    "localized_name": "Pugna",
                    "attribute": "int",
                    "id": 45
                },
                {
                    "img": "dazzle_lg.jpg",
                    "localized_name": "Dazzle",
                    "attribute": "int",
                    "id": 50
                },
                {
                    "img": "leshrac_lg.jpg",
                    "localized_name": "Leshrac",
                    "attribute": "int",
                    "id": 52
                },
                {
                    "img": "furion_lg.jpg",
                    "localized_name": "Nature's Prophet",
                    "attribute": "int",
                    "id": 53
                },
                {
                    "img": "dark_seer_lg.jpg",
                    "localized_name": "Dark Seer",
                    "attribute": "int",
                    "id": 55
                },
                {
                    "img": "enchantress_lg.jpg",
                    "localized_name": "Enchantress",
                    "attribute": "int",
                    "id": 58
                },
                {
                    "img": "jakiro_lg.jpg",
                    "localized_name": "Jakiro",
                    "attribute": "int",
                    "id": 64
                },
                {
                    "img": "batrider_lg.jpg",
                    "localized_name": "Batrider",
                    "attribute": "int",
                    "id": 65
                },
                {
                    "img": "chen_lg.jpg",
                    "localized_name": "Chen",
                    "attribute": "int",
                    "id": 66
                },
                {
                    "img": "ancient_apparition_lg.jpg",
                    "localized_name": "Ancient Apparition",
                    "attribute": "int",
                    "id": 68
                },
                {
                    "img": "invoker_lg.jpg",
                    "localized_name": "Invoker",
                    "attribute": "int",
                    "id": 74
                },
                {
                    "img": "silencer_lg.jpg",
                    "localized_name": "Silencer",
                    "attribute": "int",
                    "id": 75
                },
                {
                    "img": "obsidian_destroyer_lg.jpg",
                    "localized_name": "Outworld Devourer",
                    "attribute": "int",
                    "id": 76
                },
                {
                    "img": "shadow_demon_lg.jpg",
                    "localized_name": "Shadow Demon",
                    "attribute": "int",
                    "id": 79
                },
                {
                    "img": "ogre_magi_lg.jpg",
                    "localized_name": "Ogre Magi",
                    "attribute": "int",
                    "id": 84
                },
                {
                    "img": "rubick_lg.jpg",
                    "localized_name": "Rubick",
                    "attribute": "int",
                    "id": 86
                },
                {
                    "img": "disruptor_lg.jpg",
                    "localized_name": "Disruptor",
                    "attribute": "int",
                    "id": 87
                },
                {
                    "img": "keeper_of_the_light_lg.jpg",
                    "localized_name": "Keeper of the Light",
                    "attribute": "int",
                    "id": 90
                },
                {
                    "img": "visage_lg.jpg",
                    "localized_name": "Visage",
                    "attribute": "int",
                    "id": 92
                },
                {
                    "img": "skywrath_mage_lg.jpg",
                    "localized_name": "Skywrath Mage",
                    "attribute": "int",
                    "id": 101
                }
            ],
            [
                {
                    "img": "axe_lg.jpg",
                    "localized_name": "Axe",
                    "attribute": "str",
                    "id": 2
                },
                {
                    "img": "earthshaker_lg.jpg",
                    "localized_name": "Earthshaker",
                    "attribute": "str",
                    "id": 7
                },
                {
                    "img": "pudge_lg.jpg",
                    "localized_name": "Pudge",
                    "attribute": "str",
                    "id": 14
                },
                {
                    "img": "sand_king_lg.jpg",
                    "localized_name": "Sand King",
                    "attribute": "str",
                    "id": 16
                },
                {
                    "img": "sven_lg.jpg",
                    "localized_name": "Sven",
                    "attribute": "str",
                    "id": 18
                },
                {
                    "img": "tiny_lg.jpg",
                    "localized_name": "Tiny",
                    "attribute": "str",
                    "id": 19
                },
                {
                    "img": "kunkka_lg.jpg",
                    "localized_name": "Kunkka",
                    "attribute": "str",
                    "id": 23
                },
                {
                    "img": "slardar_lg.jpg",
                    "localized_name": "Slardar",
                    "attribute": "str",
                    "id": 28
                },
                {
                    "img": "tidehunter_lg.jpg",
                    "localized_name": "Tidehunter",
                    "attribute": "str",
                    "id": 29
                },
                {
                    "img": "beastmaster_lg.jpg",
                    "localized_name": "Beastmaster",
                    "attribute": "str",
                    "id": 38
                },
                {
                    "img": "skeleton_king_lg.jpg",
                    "localized_name": "Wraith King",
                    "attribute": "str",
                    "id": 42
                },
                {
                    "img": "dragon_knight_lg.jpg",
                    "localized_name": "Dragon Knight",
                    "attribute": "str",
                    "id": 49
                },
                {
                    "img": "rattletrap_lg.jpg",
                    "localized_name": "Clockwerk",
                    "attribute": "str",
                    "id": 51
                },
                {
                    "img": "life_stealer_lg.jpg",
                    "localized_name": "Lifestealer",
                    "attribute": "str",
                    "id": 54
                },
                {
                    "img": "omniknight_lg.jpg",
                    "localized_name": "Omniknight",
                    "attribute": "str",
                    "id": 57
                },
                {
                    "img": "huskar_lg.jpg",
                    "localized_name": "Huskar",
                    "attribute": "str",
                    "id": 59
                },
                {
                    "img": "night_stalker_lg.jpg",
                    "localized_name": "Night Stalker",
                    "attribute": "str",
                    "id": 60
                },
                {
                    "img": "doom_bringer_lg.jpg",
                    "localized_name": "Doom",
                    "attribute": "str",
                    "id": 69
                },
                {
                    "img": "spirit_breaker_lg.jpg",
                    "localized_name": "Spirit Breaker",
                    "attribute": "str",
                    "id": 71
                },
                {
                    "img": "alchemist_lg.jpg",
                    "localized_name": "Alchemist",
                    "attribute": "str",
                    "id": 73
                },
                {
                    "img": "lycan_lg.jpg",
                    "localized_name": "Lycan",
                    "attribute": "str",
                    "id": 77
                },
                {
                    "img": "brewmaster_lg.jpg",
                    "localized_name": "Brewmaster",
                    "attribute": "str",
                    "id": 78
                },
                {
                    "img": "chaos_knight_lg.jpg",
                    "localized_name": "Chaos Knight",
                    "attribute": "str",
                    "id": 81
                },
                {
                    "img": "treant_lg.jpg",
                    "localized_name": "Treant Protector",
                    "attribute": "str",
                    "id": 83
                },
                {
                    "img": "undying_lg.jpg",
                    "localized_name": "Undying",
                    "attribute": "str",
                    "id": 85
                },
                {
                    "img": "wisp_lg.jpg",
                    "localized_name": "Io",
                    "attribute": "str",
                    "id": 91
                },
                {
                    "img": "centaur_lg.jpg",
                    "localized_name": "Centaur Warrunner",
                    "attribute": "str",
                    "id": 96
                },
                {
                    "img": "magnataur_lg.jpg",
                    "localized_name": "Magnus",
                    "attribute": "str",
                    "id": 97
                },
                {
                    "img": "shredder_lg.jpg",
                    "localized_name": "Timbersaw",
                    "attribute": "str",
                    "id": 98
                },
                {
                    "img": "bristleback_lg.jpg",
                    "localized_name": "Bristleback",
                    "attribute": "str",
                    "id": 99
                },
                {
                    "img": "tusk_lg.jpg",
                    "localized_name": "Tusk",
                    "attribute": "str",
                    "id": 100
                },
                {
                    "img": "abaddon_lg.jpg",
                    "localized_name": "Abaddon",
                    "attribute": "str",
                    "id": 102
                },
                {
                    "img": "elder_titan_lg.jpg",
                    "localized_name": "Elder Titan",
                    "attribute": "str",
                    "id": 103
                },
                {
                    "img": "legion_commander_lg.jpg",
                    "localized_name": "Legion Commander",
                    "attribute": "str",
                    "id": 104
                },
                {
                    "img": "earth_spirit_lg.jpg",
                    "localized_name": "Earth Spirit",
                    "attribute": "str",
                    "id": 107
                },
                {
                    "img": "phoenix_lg.jpg",
                    "localized_name": "Phoenix",
                    "attribute": "str",
                    "id": 110
                }
            ]
        ];
        var items = [
            {
                "id": 206,
                "img": "rod_of_atos_lg.jpg",
                "localized_name": "Rod of Atos",
                "qual": "rare",
                "cost": 3100
            },
            {
                "id": 176,
                "img": "ethereal_blade_lg.jpg",
                "localized_name": "Ethereal Blade",
                "qual": "epic",
                "cost": 4900
            },
            {
                "img": "desolator_lg.jpg",
                "cost": 4100,
                "id": 168,
                "qual": "artifact",
                "localized_name": "Desolator"
            },
            {
                "img": "mjollnir_lg.jpg",
                "cost": 5300,
                "id": 158,
                "qual": "artifact",
                "localized_name": "Mjollnir"
            },
            {
                "img": "butterfly_lg.jpg",
                "cost": 6000,
                "id": 139,
                "qual": "epic",
                "localized_name": "Butterfly"
            },
            {
                "img": "bloodstone_lg.jpg",
                "cost": 5050,
                "id": 121,
                "qual": "epic",
                "localized_name": "Bloodstone"
            },
            {
                "img": "satanic_lg.jpg",
                "cost": 6150,
                "id": 156,
                "qual": "artifact",
                "localized_name": "Satanic"
            },
            {
                "img": "necronomicon_3_lg.jpg",
                "cost": 2700,
                "id": 194,
                "qual": "rare",
                "localized_name": "Necronomicon"
            },
            {
                "img": "radiance_lg.jpg",
                "cost": 5150,
                "id": 137,
                "qual": "epic",
                "localized_name": "Radiance"
            },
            {
                "img": "bfury_lg.jpg",
                "cost": 4350,
                "id": 145,
                "qual": "epic",
                "localized_name": "Battle Fury"
            },
            {
                "img": "abyssal_blade_lg.jpg",
                "cost": 6750,
                "id": 208,
                "qual": "epic",
                "localized_name": "Abyssal Blade"
            },
            {
                "img": "dagon_5_lg.jpg",
                "cost": 2850,
                "id": 202,
                "qual": "rare",
                "localized_name": "Dagon"
            },
            {
                "img": "monkey_king_bar_lg.jpg",
                "cost": 5400,
                "id": 135,
                "qual": "epic",
                "localized_name": "Monkey King Bar"
            },
            {
                "img": "sheepstick_lg.jpg",
                "cost": 5675,
                "id": 96,
                "qual": "rare",
                "localized_name": "Scythe of Vyse"
            },
            {
                "img": "ultimate_scepter_lg.jpg",
                "cost": 4200,
                "id": 108,
                "qual": "rare",
                "localized_name": "Aghanim's Scepter"
            },
            {
                "img": "skadi_lg.jpg",
                "cost": 5675,
                "id": 160,
                "qual": "artifact",
                "localized_name": "Eye of Skadi"
            },
            {
                "img": "manta_lg.jpg",
                "cost": 5050,
                "id": 147,
                "qual": "epic",
                "localized_name": "Manta Style"
            },
            {
                "img": "armlet_lg.jpg",
                "cost": 2600,
                "id": 151,
                "qual": "epic",
                "localized_name": "Armlet of Mordiggian"
            },
            {
                "img": "vanguard_lg.jpg",
                "cost": 2225,
                "id": 125,
                "qual": "epic",
                "localized_name": "Vanguard"
            },
            {
                "img": "shivas_guard_lg.jpg",
                "cost": 4700,
                "id": 119,
                "qual": "epic",
                "localized_name": "Shiva's Guard"
            },
            {
                "img": "rapier_lg.jpg",
                "cost": 6200,
                "id": 133,
                "qual": "epic",
                "localized_name": "Divine Rapier"
            },
            {
                "img": "pipe_lg.jpg",
                "cost": 3625,
                "id": 90,
                "qual": "rare",
                "localized_name": "Pipe of Insight"
            },
            {
                "img": "heart_lg.jpg",
                "cost": 5500,
                "id": 114,
                "qual": "epic",
                "localized_name": "Heart of Tarrasque"
            },
            {
                "img": "helm_of_overlord.jpg",
                "cost": 6325,
                "id": 81,
                "qual": "rare",
                "localized_name": "Helm Of the Overlord"
            },
            {
                "img": "falcon_blade_lg.jpg",
                "cost": 1125,
                "id": 217,
                "qual": "rare",
                "localized_name": "Falcon Blade"
            },
            {
                "img": "sange_and_yasha_lg.jpg",
                "cost": 4100,
                "id": 154,
                "qual": "artifact",
                "localized_name": "Sange and Yasha"
            },
            {
                "img": "invis_sword_lg.jpg",
                "cost": 3000,
                "id": 152,
                "qual": "epic",
                "localized_name": "Shadow Blade"
            },
            {
                "img": "orchid_lg.jpg",
                "cost": 5025,
                "id": 98,
                "qual": "rare",
                "localized_name": "Orchid Malevolence"
            },
            {
                "img": "assault_lg.jpg",
                "cost": 5250,
                "id": 112,
                "qual": "epic",
                "localized_name": "Assault Cuirass"
            },
            {
                "img": "ancient_janggo_lg.jpg",
                "cost": 1875,
                "id": 185,
                "qual": "rare",
                "localized_name": "Drum of Endurance"
            },
            {
                "img": "sphere_lg.jpg",
                "cost": 5175,
                "id": 123,
                "qual": "epic",
                "localized_name": "Linken's Sphere"
            },
            {
                "img": "medallion_of_courage_lg.jpg",
                "cost": 1075,
                "id": 187,
                "qual": "rare",
                "localized_name": "Medallion of Courage"
            },
            {
                "img": "veil_of_discord_lg.jpg",
                "cost": 2675,
                "id": 190,
                "qual": "rare",
                "localized_name": "Veil of Discord"
            },
            {
                "img": "heavens_halberd_lg.jpg",
                "cost": 3850,
                "id": 210,
                "qual": "artifact",
                "localized_name": "Heaven's Halberd"
            },
            {
                "img": "black_king_bar_lg.jpg",
                "cost": 3975,
                "id": 116,
                "qual": "epic",
                "localized_name": "Black King Bar"
            },
            {
                "img": "hand_of_midas_lg.jpg",
                "cost": 2050,
                "id": 65,
                "qual": "common",
                "localized_name": "Hand of Midas"
            },
            {
                "img": "greater_crit_lg.jpg",
                "cost": 5550,
                "id": 141,
                "qual": "epic",
                "localized_name": "Daedalus"
            },
            {
                "img": "blink_lg.jpg",
                "cost": 2150,
                "id": 1,
                "qual": "component",
                "localized_name": "Blink Dagger"
            },
            {
                "img": "diffusal_blade_2_lg.jpg",
                "cost": 3300,
                "id": 196,
                "qual": "artifact",
                "localized_name": "Diffusal Blade"
            },
            {
                "img": "cyclone_lg.jpg",
                "cost": 2700,
                "id": 100,
                "qual": "rare",
                "localized_name": "Eul's Scepter of Divinity"
            },
            {
                "img": "mask_of_madness_lg.jpg",
                "cost": 1900,
                "id": 172,
                "qual": "artifact",
                "localized_name": "Mask of Madness"
            },
            {
                "img": "mekansm_lg.jpg",
                "cost": 2300,
                "id": 79,
                "qual": "rare",
                "localized_name": "Mekansm"
            }
        ];
        var boots = [
            {
                "img": "tranquil_boots_lg.jpg",
                "cost": 975,
                "id": 214,
                "qual": "rare",
                "localized_name": "Tranquil Boots"
            },
            {
                "img": "power_treads_lg.jpg",
                "cost": 1400,
                "id": 63,
                "qual": "common",
                "localized_name": "Power Treads"
            },
            {
				"img": "travel2_boots_lg.jpg",
				"cost": 4500,
				"id": 216,
				"qual": "common",
				"dname": "Boots of Travel 2"
            },
			{
                "img": "guardian_boots_lg.jpg",
                "cost": 5100,
                "id": 215 ,
                "qual": "rare",
                "localized_name": "Guardian Greaves"
            },
            {
                "img": "phase_boots_lg.jpg",
                "cost": 1350,
                "id": 50,
                "qual": "common",
                "localized_name": "Phase Boots"
            }
        ];
        var $hero_img = $("#hero-img");
        var $boot_img = $("#boot-img");
        var $item_img = [$("#item1-img"), $("#item2-img"), $("#item3-img"), $("#item4-img"), $("#item5-img")];

        var possible_attributes = [];
        for (var i = 0; i < 3; i++) {
            if($("#attribute" + (i + 1)).is(":checked")){
                possible_attributes.push(i);
            }
        }

        var attr_rand = possible_attributes[Math.floor(Math.random() * possible_attributes.length)];
        var hero_rand = Math.floor(Math.random() * heroes[attr_rand].length);
        $hero_img.attr("src", "assets/img/Heroes/".concat(heroes[attr_rand][hero_rand]["img"]));
        $hero_img.attr("title", heroes[attr_rand][hero_rand]["localized_name"]);
        var build_output = heroes[attr_rand][hero_rand]["localized_name"] + " \n";

        var boot_rand = Math.floor(Math.random() * boots.length);
        $boot_img.attr("src", "assets/img/Boots/".concat(boots[boot_rand]["img"]));
        $boot_img.attr("title", boots[boot_rand]["localized_name"]);
        build_output += boots[boot_rand]["localized_name"] + " \n";

        for (var i = 0; i < 5; i++) {
            var item_rand = Math.floor(Math.random() * items.length);
            $item_img[i].attr("src", "assets/img/Items/".concat(items[item_rand]["img"]));
            $item_img[i].attr("title", items[item_rand]["localized_name"]);
            build_output += items[item_rand]["localized_name"] + " \n";
            items.splice(item_rand, 1)
        }

        $("#build-output").val(build_output);
    });
});
