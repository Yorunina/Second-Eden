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
                if (CitizenCustomLootStrategy[customLootType]) {
                    CitizenCustomLootStrategy[customLootType](ctx)
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
            if (OthersCustomLootStrategy[customLootType]) {
                OthersCustomLootStrategy[customLootType](ctx)
            }
        })
})


/**
 * @constant
 * @type {Object<string,function($LootContextJS):void>}
 */
const CitizenCustomLootStrategy = {
    'custom_raid': function (event) {
        let entityKilled = event.getEntity()
        let entityScore = 0
        if (entityKilled.persistentData.contains('entity_score')) {
            entityScore = entityKilled.persistentData.getDouble('entity_score')
        }
        switch (true) {
            case entityScore <= 20:
                event.addLoot(LootEntry.of('minecraft:raw_gold').when(c => c.randomChance(0.3)))
                event.addLoot(LootEntry.of('minecraft:raw_iron').when(c => c.randomChance(0.5)))
                event.addLoot(LootEntry.of('minecraft:raw_copper').when(c => c.randomChance(0.2)))
                event.addLoot(LootEntry.of('minecraft:coal').when(c => c.randomChance(0.5)))
                break
            case entityScore <= 50:
                event.addLoot(LootEntry.of('minecraft:raw_gold').when(c => c.randomChance(0.4)))
                event.addLoot(LootEntry.of('minecraft:raw_iron').when(c => c.randomChance(0.8)))
                event.addLoot(LootEntry.of('minecraft:raw_copper').when(c => c.randomChance(0.3)))
                event.addLoot(LootEntry.of('minecraft:coal').when(c => c.randomChance(0.5)))
                event.addLoot(LootEntry.of('minecraft:lapis_lazuli').when(c => c.randomChance(0.6)))
                event.addLoot(LootEntry.of('minecraft:redstone_dust').when(c => c.randomChance(0.6)))
                break
            case entityScore <= 100:
                event.addLoot(LootEntry.of('minecraft:raw_gold').when(c => c.randomChance(0.5)))
                event.addLoot(LootEntry.of('minecraft:raw_iron').when(c => c.randomChance(1)))
                event.addLoot(LootEntry.of('minecraft:lapis_lazuli').when(c => c.randomChance(1)))
                event.addLoot(LootEntry.of('minecraft:redstone_dust').when(c => c.randomChance(1)))
                event.addLoot(LootEntry.of('minecraft:diamond').when(c => c.randomChance(0.2)))
                break
            case entityScore <= 150:
                event.addLoot(LootEntry.of('minecraft:raw_gold').when(c => c.randomChance(1)))
                event.addLoot(LootEntry.of('minecraft:raw_iron').when(c => c.randomChance(1)))
                event.addLoot(LootEntry.of('minecraft:lapis_lazuli').when(c => c.randomChance(1)))
                event.addLoot(LootEntry.of('minecraft:redstone_dust').when(c => c.randomChance(1)))
                event.addLoot(LootEntry.of('minecraft:diamond').when(c => c.randomChance(0.25)))
                event.addLoot(LootEntry.of('minecraft:netherite_scrap').when(c => c.randomChance(0.1)))
            case entityScore > 150:
                event.addLoot(LootEntry.of('minecraft:diamond').when(c => c.randomChance(0.5)))
                event.addLoot(LootEntry.of('minecraft:netherite_scrap').when(c => c.randomChance(0.2)))
                break
        }
    },
    'undead_raid_leader': function (event) {
        let entityKilled = event.getEntity()
        let rank = entityKilled.persistentData.contains('rank') ? entityKilled.persistentData.getInt('rank') : 1
        event.addLoot(Item.of('kubejs:undead_raid_book', 1, { 'rank': NBT.intTag(rank + 1) }))
    }
}

/**
 * @constant
 * @type {Object<string,function($LootContextJS):void>}
 */
const OthersCustomLootStrategy = {
    'undead_raid_leader': function (event) {
        let entityKilled = event.getEntity()
        let rank = entityKilled.persistentData.contains('rank') ? entityKilled.persistentData.getInt('rank') : 1
        event.addLoot(Item.of('kubejs:undead_raid_book', 1, { 'rank': NBT.intTag(rank + 1) }))
    }
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


