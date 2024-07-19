const { $LootContextJS } = require("packages/com/almostreliable/lootjs/kube/$LootContextJS")
const { $AbstractCivilianEntity } = require("packages/com/minecolonies/api/entity/citizen/$AbstractCivilianEntity")
const { $LivingEntity } = require("packages/net/minecraft/world/entity/$LivingEntity")

LootJS.modifiers(event => {
    event.addLootTypeModifier(LootType.ENTITY)
        .killerPredicate(killer => {
            if (killer && killer instanceof $AbstractCivilianEntity) {
                return true
            }
            return false
        })
        .apply(ctx => {
            let { entity } = ctx
            if (entity.persistentData.contains('custom_loot')) {
                let customLootType = entity.persistentData.getString('custom_loot')
                if (CitizenCustomLootStrategies[customLootType]) {
                    CitizenCustomLootStrategies[customLootType](ctx)
                }
            } else {
                citizenRaidCommonLoot(ctx)
            }
        })


    event.addLootTypeModifier(LootType.ENTITY)
        .entityPredicate(entity => {
            if (entity instanceof $LivingEntity) {
                return entity.persistentData.contains('custom_loot')
            }
            return false
        })
        .killerPredicate(killer => {
            if (killer instanceof $AbstractCivilianEntity) {
                return false
            }
            return true
        })
        .apply(ctx => {
            let { entity } = ctx
            let customLootType = entity.persistentData.getString('custom_loot')
            if (OthersCustomLootStrategies[customLootType]) {
                OthersCustomLootStrategies[customLootType](ctx)
            }
        })
})


/**
 * @constant
 * @type {Object<string,function($LootContextJS):void>}
 */
const CitizenCustomLootStrategies = {
    'undead_raid': function (event) {
        event.addLoot('lightmanscurrency:coin_iron')
    },
}

/**
 * @constant
 * @type {Object<string,function($LootContextJS):void>}
 */
const OthersCustomLootStrategies = {
    'undead_raid': function (event) {
        event.addLoot('lightmanscurrency:coin_iron')
    },
}


/**
 * 常规市民击杀战利品
 * @param {$LootContextJS} event 
 */
function citizenRaidCommonLoot(event) {
    let { entity } = event
    let entityTypeStringt = String(entity.type)
    if (EntityOrbMap.has(entityTypeStringt) && Math.random() < 1) {
        event.addLoot(EntityOrbMap.get(entityTypeStringt))
    }
}

const EntityOrbMap = new Map().set('minecraft:zombie', 'kubejs:zombie_orb')
    .set('minecraft:skeleton', 'kubejs:skeleton_orb')
    .set('minecraft:cave_spider', 'kubejs:cave_spider_orb')
    .set('minecraft:creeper', 'kubejs:creeper_orb')
    .set('minecraft:blaze', 'kubejs:blaze_orb')
    .set('minecraft:husk', 'kubejs:husk_orb')
    .set('minecraft:pillager', 'kubejs:pillager_orb')
    .set('minecraft:ravager', 'kubejs:ravager_orb')
    .set('minecraft:evoker', 'kubejs:evoker_orb')
    .set('minecraft:wither_skeleton', 'kubejs:wither_skeleton_orb')
    .set('minecraft:vindicator', 'kubejs:vindicator_orb')
    .set('takesapillage:archer', 'kubejs:archer_orb')
    .set('takesapillage:legioner', 'kubejs:legioner_orb')
    .set('takesapillage:skirmisher', 'kubejs:skirmisher_orb')


