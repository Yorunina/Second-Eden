const { $CompoundTag } = require("packages/net/minecraft/nbt/$CompoundTag")
const { RandomGet } = require("../utils/common")
const { $IColonyManager } = require("packages/com/minecolonies/api/colony/$IColonyManager")
const { $IColony } = require("packages/com/minecolonies/api/colony/$IColony")
const { $ICitizenData } = require("packages/com/minecolonies/api/colony/$ICitizenData")
const { $InventoryUtils } = require("packages/com/minecolonies/api/util/$InventoryUtils")
const { ConvertMoneyIntoCoinItemList } = require("../utils/coin")
const { SendMsgToColonyOwner } = require("../utils/colony")


ServerEvents.tick(event => {
    if (event.server.tickCount % 20 != 0) return
    let server = event.server
    let level = server.getOverworld()
    if (level.getDayTime() % 24000 >= 20) return

    let colonies = $IColonyManager.getInstance().getAllColonies()
    colonies.forEach(/**@param {$IColony} colony*/colony => {
        // 如果殖民地不活跃，那么就不会进行税收
        if (!colony.isActive()) return
        dailyReward(colony)
        collectColonyTax(colony)
    })
})

/**
 * @param {$IColony} colony 
 * @returns 
 */
function collectColonyTax(colony) {
    // 税收是对于殖民者维度进行的
    let totalTaxAmount = 0
    let disableMourn = colony.getDisableMourn() ? 1 : 0
    let underEmergencyProtocol = colony.getUnderEmergencyProtocol() ? 1 : 0
    let citizenList = colony.getCitizenManager().getCitizens()
    citizenList.forEach(/**@param {$ICitizenData} citizen*/citizen => {
        // 一个殖民者必须就业，才会有对应的税收
        let workBuilding = citizen.getWorkBuilding()
        if (!workBuilding) return
        // 税收的水平取决于工作建筑的等级
        let buildingLevel = workBuilding.getBuildingLevel()
        // 幸福度越高，税收水平越高
        let happiness = citizen.getCitizenHappinessHandler().getHappiness(colony, citizen)
        // 如果启用状态控制则进行系数调整
        let isForceWork = citizen.getForceStatus() == 'guardLike' ? 1 : underEmergencyProtocol
        let citizenTax = Math.max(Math.ceil(1 * buildingLevel * (Math.ceil(happiness) * 0.5) * (1 - Math.max(0.5 * disableMourn, 0.9 * isForceWork))), 1)

        let coinList = ConvertMoneyIntoCoinItemList(ChocolateCoinList, citizenTax)
        coinList.forEach(coinItem => {
            citizen.getInventory().insertItem(coinItem, false)
        })

        totalTaxAmount = totalTaxAmount + citizenTax
    })

    SendMsgToColonyOwner(colony, Text.translatable('msg.colony.daily_tax.1', Text.gold(colony.getName()), Text.yellow(colony.getDay().toFixed()), Text.gold(totalTaxAmount.toFixed()), Text.gold(averageTax.toFixed(1))))
    return
}


/**
 * @param {$IColony} colony 
 * @returns 
 */
function dailyReward(colony) {
    let day = colony.getDay()
    let overallHappiness = colony.getOverallHappiness()

    let townHallBuilding = colony.getBuildingManager().getTownHall()
    if (!townHallBuilding) return
    let buildingItemCap = townHallBuilding.getCapability(ForgeCapabilities.ITEM_HANDLER).orElse(null)
    if (!buildingItemCap) return

    let randomCitizen = colony.getCitizenManager().getRandomCitizen()
    if (day <= 7) {
        switch (day) {
            case 1:
                if (randomCitizen) {
                    let nbt = new $CompoundTag()
                    nbt.putString('levelReq', '1')
                    let item = Item.of('kubejs:building_gift_box', 3, nbt)
                    $InventoryUtils.addItemStackToItemHandlerWithResult(buildingItemCap, item)
                    SendMsgToColonyOwner(colony, Text.translate('msg.colony.daily_rews_1.1', Text.yellow(randomCitizen.getName()), Text.of(item.getDisplayName()).append(' x ').append(item.getCount())))
                }
                break
            case 3:
                if (randomCitizen) {
                    let item = Item.of('kubejs:wood_atlas', 1)
                    $InventoryUtils.addItemStackToItemHandlerWithResult(buildingItemCap, item)
                    SendMsgToColonyOwner(colony, Text.translate('msg.colony.daily_rews_3.1', Text.yellow(randomCitizen.getName()), Text.of(item.getDisplayName()).append(' x ').append(item.getCount())))
                }
                break
            case 5:
                if (randomCitizen) {
                    let item = Item.of('torchmaster:megatorch', 1)
                    $InventoryUtils.addItemStackToItemHandlerWithResult(buildingItemCap, item)
                    SendMsgToColonyOwner(colony, Text.translate('msg.colony.daily_rews_5.1', Text.yellow(randomCitizen.getName()), Text.of(item.getDisplayName()).append(' x ').append(item.getCount())))
                }
                break
            case 7:
                if (randomCitizen) {
                    let item = Item.of('kubejs:snoop_ring', 1)
                    $InventoryUtils.addItemStackToItemHandlerWithResult(buildingItemCap, item)
                    SendMsgToColonyOwner(colony, Text.translate('msg.colony.daily_rews_7.1', Text.yellow(randomCitizen.getName()), Text.of(item.getDisplayName()).append(' x ').append(item.getCount())))
                }
                break
        }
        return
    }

    switch (true) {
        case overallHappiness < 5:
            break
        case overallHappiness < 7:
            if (Math.random() > 0.2) return
            if (randomCitizen) {
                let item = RandomGet(OverallHappinessGiftList1)
                $InventoryUtils.addItemStackToItemHandlerWithResult(buildingItemCap, item)
                SendMsgToColonyOwner(colony, Text.translate('msg.colony.daily_overallHappiness_rews_5_7.1', Text.gold(day.toFixed()), Text.yellow(randomCitizen.getName()), Text.of(item.getDisplayName()).append(' x ').append(item.getCount())))
            }
            break
        case overallHappiness < 9:
            if (Math.random() > 0.2) return
            if (randomCitizen) {
                let item = RandomGet(OverallHappinessGiftList2)
                $InventoryUtils.addItemStackToItemHandlerWithResult(buildingItemCap, item)
                SendMsgToColonyOwner(colony, Text.translate('msg.colony.daily_overallHappiness_rews_7_9.1', Text.gold(day.toFixed()), Text.yellow(randomCitizen.getName()), Text.of(item.getDisplayName()).append(' x ').append(item.getCount())))
            }
            break
        case overallHappiness < 10:
            if (Math.random() > 0.2) return
            if (randomCitizen) {
                let item = RandomGet(OverallHappinessGiftList3)
                $InventoryUtils.addItemStackToItemHandlerWithResult(buildingItemCap, item)
                SendMsgToColonyOwner(colony, Text.translate('msg.colony.daily_overallHappiness_rews_9_10.1', Text.gold(day.toFixed()), Text.yellow(randomCitizen.getName()), Text.of(item.getDisplayName()).append(' x ').append(item.getCount())))
            }
            break
    }
}


const OverallHappinessGiftList1 = [
    Item.of('kubejs:building_gift_box', 1, { 'levelReq': '1' }),
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
    Item.of('minecraft:diamond', 3)
]


const OverallHappinessGiftList2 = [
    Item.of('kubejs:building_gift_box', 1, { 'levelReq': '2' }),
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
    Item.of('waystones:warp_stone', '{Damage:0}'),
    Item.of('minecraft:diamond', 8),
    Item.of('minecraft:emerald', 16)
]

const OverallHappinessGiftList3 = [
    Item.of('kubejs:building_gift_box', 1, { 'levelReq': '3' }),
    Item.of('kubejs:master_certificate', 1),
    Item.of('minecraft:netherite_ingot', 3),
    Item.of('immersive_aircraft:biplane', 1),
    Item.of('kubejs:epic_citrine_ring', 1),
    Item.of('kubejs:raw_iridium', 1),
    Item.of('kubejs:echo_crystal', 1),
    Item.of('simplehats:hatbag_epic', 1),
    Item.of('minecraft:diamond', 16)
]