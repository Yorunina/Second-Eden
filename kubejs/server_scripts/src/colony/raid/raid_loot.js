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
                let customLootType = String(entity.persistentData.getString('custom_loot'))
                if (CitizenCustomLootStrategies[customLootType]) {
                    CitizenCustomLootStrategies[customLootType](ctx)
                }
            }
            citizenRaidCommonLoot(ctx)
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
    'custom_raid': function (event) {
        let entityKilled = event.getEntity()
        let entityScore = 0
        if (entityKilled.persistentData.contains('entity_score')) {
            entityScore = entityKilled.persistentData.getDouble('entity_score')
        }
        switch (true) {
            case entityScore >= 0:
                event.addLoot(LootEntry.of('minecraft:raw_iron').withChance(0.2).applyLootingBonus([1, 2, 3]))
                event.addLoot(LootEntry.of('minecraft:raw_copper').withChance(0.1).applyLootingBonus([1, 2, 3]))
                event.addLoot(LootEntry.of('minecraft:coal').withChance(0.3).applyLootingBonus([1, 2, 3]))
            case entityScore >= 10:
                event.addLoot(LootEntry.of('minecraft:raw_gold').withChance(0.2).applyLootingBonus([1, 2, 3]))
            case entityScore >= 30:
                event.addLoot(LootEntry.of('minecraft:lapis_lazuli').withChance(0.1).applyLootingBonus([1, 2, 3]))
                event.addLoot(LootEntry.of('minecraft:redstone_dust').withChance(0.15).applyLootingBonus([1, 3, 6]))
            case entityScore >= 50:
                event.addLoot(LootEntry.of('minecraft:amethyst_shard').withChance(0.1).applyLootingBonus([1, 3, 6]))
                event.addLoot(LootEntry.of('minecraft:diamond').withChance(0.05).applyLootingBonus([1, 2, 3]))
                event.addLoot(LootEntry.of('minecraft:prismarine_shard').withChance(0.1).applyLootingBonus([1, 3, 6]))
                event.addLoot(LootEntry.of('minecraft:blaze_rod').withChance(0.1).applyLootingBonus([1, 2, 3]))
            case entityScore >= 100:
                event.addLoot(LootEntry.of('minecraft:quartz').withChance(0.3).applyLootingBonus([1, 2, 3]))
                event.addLoot(LootEntry.of('minecraft:diamond').withChance(0.1).applyLootingBonus([1, 2, 3]))
                event.addLoot(LootEntry.of('minecraft:netherite_scrap').withChance(0.1).applyLootingBonus([1, 2, 3]))
            case entityScore >= 150:
                event.addLoot(LootEntry.of('minecraft:prismarine_shard').withChance(0.5).applyLootingBonus([1, 2, 3]))
                event.addLoot(LootEntry.of('minecraft:netherite_scrap').withChance(0.2).applyLootingBonus([1, 2, 3]))
        }
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
    if (EntityOrbMap.has(entityTypeStringt) && Math.random() < 0.1) {
        event.addLoot(EntityOrbMap.get(entityTypeStringt))
    }
}

const EntityOrbMap = new Map()
    .set('minecraft:zombie', 'kubejs:zombie_orb')
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


