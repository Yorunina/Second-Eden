const { $ServerPlayer } = require("packages/net/minecraft/server/level/$ServerPlayer")
const { GetColonyByPlayer } = require("../utils/colony")
const { $CompoundTag } = require("packages/net/minecraft/nbt/$CompoundTag")
const { RandomGet } = require("../utils/common")

ServerEvents.tick(event => {
    if (event.server.tickCount % 20 != 0) return
    let server = event.server
    let level = server.getOverworld()
    if (level.getDayTime() % 24000 >= 20) return
    let players = server.getPlayers()
    if (players.size() <= 0) return
    let hadGivenGiftSet = new Set()
    players.forEach(/**@param {$ServerPlayer} player*/player => {
        let colony = GetColonyByPlayer(level, player)
        if (!colony) return
        let colonyId = colony.getID()
        if (hadGivenGiftSet.has(colonyId)) return
        hadGivenGiftSet.add(colonyId)

        let day = colony.getDay()
        let overallHappiness = colony.getOverallHappiness()

        let townHallBuilding = colony.getBuildingManager().getTownHall()
        if (!townHallBuilding) return
        let buildingItemCap = townHallBuilding.getCapability(ForgeCapabilities.ITEM_HANDLER).orElse(null)
        let randomCitizen = colony.getCitizenManager().getRandomCitizen()
        if (day <= 7) {
            switch (day) {
                case 1:
                    if (randomCitizen) {
                        let nbt = new $CompoundTag()
                        nbt.putString('levelReq', '1')
                        let item = Item.of('kubejs:building_gift_box', 3, nbt)
                        buildingItemCap.insertItem(item, false)

                        player.tell(Text.translate('msg.colony.daily_rews_1.1', Text.yellow(randomCitizen.getName()), Text.of(item.getDisplayName()).append(' x ').append(item.getCount())))
                    }
                    break
                case 3:
                    if (randomCitizen) {
                        let item = Item.of('kubejs:wood_atlas', 1)
                        buildingItemCap.insertItem(item, false)

                        player.tell(Text.translate('msg.colony.daily_rews_3.1', Text.yellow(randomCitizen.getName()), Text.of(item.getDisplayName()).append(' x ').append(item.getCount())))
                    }
                    break
                case 5:
                    if (randomCitizen) {
                        let item = Item.of('torchmaster:megatorch', 1)
                        buildingItemCap.insertItem(item, false)

                        player.tell(Text.translate('msg.colony.daily_rews_3.1', Text.yellow(randomCitizen.getName()), Text.of(item.getDisplayName()).append(' x ').append(item.getCount())))
                    }
                    break
                case 7:
                    if (randomCitizen) {
                        let item = Item.of('kubejs:snoop_ring', 1)
                        buildingItemCap.insertItem(item, false)

                        player.tell(Text.translate('msg.colony.daily_rews_3.1', Text.yellow(randomCitizen.getName()), Text.of(item.getDisplayName()).append(' x ').append(item.getCount())))
                    }
                    break
            }
            return
        }

        switch (true) {
            case overallHappiness > 5 && overallHappiness < 7:
                if (Math.random() > 0.2) return
                if (randomCitizen) {
                    let item = RandomGet(OverallHappinessGiftList1)
                    buildingItemCap.insertItem(item, false)

                    player.tell(Text.translate('msg.colony.daily_overallHappiness_rews_5_7.1', Text.gold(day), Text.yellow(randomCitizen.getName()), Text.of(item.getDisplayName()).append(' x ').append(item.getCount())))
                }
                break
            case overallHappiness < 9:
                if (Math.random() > 0.15) return
                if (randomCitizen) {
                    let item = RandomGet(OverallHappinessGiftList2)
                    buildingItemCap.insertItem(item, false)

                    player.tell(Text.translate('msg.colony.daily_overallHappiness_rews_7_9.1', Text.gold(day), Text.yellow(randomCitizen.getName()), Text.of(item.getDisplayName()).append(' x ').append(item.getCount())))
                }
                break
            case overallHappiness < 10:
                if (Math.random() > 0.1) return
                if (randomCitizen) {
                    let item = RandomGet(OverallHappinessGiftList3)
                    buildingItemCap.insertItem(item, false)

                    player.tell(Text.translate('msg.colony.daily_overallHappiness_rews_9_10.1', Text.gold(day), Text.yellow(randomCitizen.getName()), Text.of(item.getDisplayName()).append(' x ').append(item.getCount())))
                }
                break
        }
    })
})


const OverallHappinessGiftList1 = [
    Item.of('kubejs:building_gift_box', 1, {'levelReq': '1'}),
    Item.of('minecraft:iron_ingot', 16),
    Item.of('minecraft:leather', 16),
    Item.of('minecraft:glowstone', 8),
    Item.of('permanentsponges:aqueous_sponge', 6),
    Item.of('villagersplus:oceanographer_table', 1),
    Item.of('villagersplus:occultist_table', 1),
    Item.of('simplehats:hatbag_uncommon', 1),
    Item.of('kubejs:soul_gem_creativity', 3),
    Item.of('kubejs:soul_gem_adaptability', 3),
    Item.of('kubejs:soul_gem_agility', 3),
    Item.of('kubejs:soul_gem_athletics', 3),
    Item.of('kubejs:soul_gem_focus', 3),
    Item.of('kubejs:soul_gem_dexterity', 3),
    Item.of('kubejs:soul_gem_intelligence', 3),
    Item.of('kubejs:soul_gem_knowledge', 3),
    Item.of('kubejs:soul_gem_mana', 3),
    Item.of('kubejs:soul_gem_strength', 3),
    Item.of('kubejs:soul_gem_stamina', 3),
]


const OverallHappinessGiftList2 = [
    Item.of('kubejs:building_gift_box', 1, {'levelReq': '2'}),
    Item.of('relics:relic_experience_bottle', 8),
    Item.of('arcanelanterns:life_lantern', 3),
    Item.of('kubejs:book_of_enlight', 16),
    Item.of('kubejs:waypointer_necklace', 1),
    Item.of('lightmanscurrency:trading_core', 3),
    Item.of('minecraft:nether_star', 1),
    Item.of('simplehats:hatbag_rare', 1),
    Item.of('kubejs:skill_book_strength', 1),
    Item.of('kubejs:skill_book_agility', 1),
    Item.of('kubejs:skill_book_intelligence', 1),
    Item.of('kubejs:stone_atlas', '{Damage:0}'),
    Item.of('kubejs:wood_atlas', '{Damage:0}'),
    Item.of('kubejs:ore_atlas', '{Damage:0}'),
    Item.of('kubejs:luxury_atlas', '{Damage:0}'),
    Item.of('waystones:warp_stone', '{Damage:0}')
]

const OverallHappinessGiftList3 = [
    Item.of('kubejs:building_gift_box', 1, {'levelReq': '3'}),
    Item.of('kubejs:master_certificate', 1),
    Item.of('minecraft:netherite_ingot', 3),
    Item.of('immersive_aircraft:biplane', 1),
    Item.of('kubejs:epic_citrine_ring', 1),
    Item.of('kubejs:raw_iridium', 1),
    Item.of('kubejs:echo_crystal', 1),
    Item.of('simplehats:hatbag_epic', 1)
]