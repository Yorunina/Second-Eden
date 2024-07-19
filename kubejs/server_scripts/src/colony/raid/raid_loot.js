const { $LootContextJS } = require("packages/com/almostreliable/lootjs/kube/$LootContextJS")
const { $LivingEntity } = require("packages/net/minecraft/world/entity/$LivingEntity")

LootJS.modifiers(event => {
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


            if (killer && killer.getType() == 'minecolonies:citizen') {
                if (CitizenCustomLootStrategies[customLootType]) {
                    CitizenCustomLootStrategies[customLootType](ctx)
                }
                citizenRaidCommonLoot(ctx)
            } else {
                if (CitizenCustomLootStrategies[customLootType]) {
                    CitizenCustomLootStrategies[customLootType](ctx)
                }
            }

        })
})


/**
 * @constant
 * @type {Object<string,function($LootContextJS):void>}
 */
const CitizenCustomLootStrategies = {
    'undead_raid': function (event) {
        let { damageSource } = event
        event.addLoot('lightmanscurrency:coin_iron')
    },
}

/**
 * @constant
 * @type {Object<string,function($LootContextJS):void>}
 */
const OthersCustomLootStrategies = {
    'undead_raid': function (event) {
        let { damageSource } = event
        event.addLoot('lightmanscurrency:coin_iron')
    },
}


// todo 填入
/**
 * 常规市民击杀战利品
 * @param {$LootContextJS} event 
 */
function citizenRaidCommonLoot(event) {
    let random = Math.random()
    switch (true) {
        case random < 0.01:
            event.addLoot('minecraft:gold_ingot')
            break
    }
}