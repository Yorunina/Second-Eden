const { $LootContextJS } = require("packages/com/almostreliable/lootjs/kube/$LootContextJS")
const { $AbstractCivilianEntity } = require("packages/com/minecolonies/api/entity/citizen/$AbstractCivilianEntity")
const { $LivingEntity } = require("packages/net/minecraft/world/entity/$LivingEntity")
const { EntityOrbMap } = require("../../const/entity_orb")

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
        event.addLoot(LootEntry.of('composite_material:creative_reinforced_book', 1).when(c => c.randomChance(0.025 * rank)))
        event.addLoot(LootEntry.of('composite_material:etherite_totem', 1).when(c => c.randomChance(0.025 * rank)))
    },
    'undead_raid': function (event) {
        let entityKilled = event.getEntity()
        let rank = entityKilled.persistentData.contains('rank') ? entityKilled.persistentData.getInt('rank') : 1
        event.addLoot(LootEntry.of('kubejs:raw_iridium', 1).when(c => c.randomChance(0.01 * rank)))
        event.addLoot(LootEntry.of('kubejs:echo_crystal', 1).when(c => c.randomChance(0.005 * rank)))
        event.addLoot(LootEntry.of('kubejs:netherite_scrap', 1).when(c => c.randomChance(0.005 * rank)))
        event.addLoot(LootEntry.of('composite_material:reinforced_book', 1).when(c => c.randomChance(0.01 * rank)))
        event.addLoot(LootEntry.of('composite_material:sepachanted_book', 1).when(c => c.randomChance(0.02 * rank)))
        event.addLoot(LootEntry.of('composite_material:purifichanted_book', 1).when(c => c.randomChance(0.02 * rank)))
        event.addLoot(LootEntry.of('composite_material:duplichanted_book', 1).when(c => c.randomChance(0.008 * rank)))
        event.addLoot(LootEntry.of('composite_material:disenchanted_book', 1).when(c => c.randomChance(0.02 * rank)))
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
        let nextRank = Math.max(rank + 1, 10)
        event.addLoot(Item.of('kubejs:undead_raid_book', 1, { 'rank': NBT.intTag(nextRank) }))
        event.addLoot(LootEntry.of('minecraft:netherite_scrap', 1).when(c => c.randomChance(0.01 * rank)))
        event.addLoot(LootEntry.of('minecraft:diamond', Math.ceil(rank / 5)).when(c => c.randomChance(0.01 * rank)))
    },
    /**
     * 
     * @param {$LootContextJS} event 
     */
    'undead_raid': function (event) {
        let entityKilled = event.getEntity()
        let rank = entityKilled.persistentData.contains('rank') ? entityKilled.persistentData.getInt('rank') : 1

        event.addLoot(LootEntry.of('minecraft:iron_ingot', Math.ceil(rank / 3)).when(c => c.randomChance(0.2 + 0.05 * rank)))
        event.addLoot(LootEntry.of('minecraft:copper_ingot', Math.ceil(rank / 3)).when(c => c.randomChance(0.2 + 0.05 * rank)))
        event.addLoot(LootEntry.of('minecraft:gold_ingot', Math.ceil(rank / 5)).when(c => c.randomChance(0.1 + 0.02 * rank)))

        let killer = event.getKillerEntity()
        if (killer && killer.isPlayer()) return

        event.addLoot(LootEntry.of('minecraft:diamond', Math.ceil(rank / 5)).when(c => c.randomChance(0.05 + 0.01 * rank)))
        event.addLoot(LootEntry.of('minecraft:emerald', Math.ceil(rank / 3)).when(c => c.randomChance(0.05 + 0.01 * rank)))
        event.addLoot(LootEntry.of('minecraft:netherite_scrap', 1).when(c => c.randomChance(0.025 + 0.01 * rank)))
        event.addLoot(LootEntry.of('minecraft:amethyst_shard', Math.ceil(rank / 2)).when(c => c.randomChance(0.05 + 0.02 * rank)))
        event.addLoot(LootEntry.of('minecraft:quartz', Math.ceil(rank / 2)).when(c => c.randomChance(0.05 + 0.01 * rank)))
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
