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
            if (EntityCustomLootStrategies[customLootType]) {
                EntityCustomLootStrategies[customLootType](ctx)
            }
        })
})


/**
 * @constant
 * @type {Object<string,function($LootContextJS):void>}
 */
const EntityCustomLootStrategies = {
    'undead_raid': function (event) {
        let { damageSource } = event
        let killer = damageSource.actual
        if (killer && killer.getType() == 'minecolonies:citizen') {
            event.addLoot('minecraft:diamond')
        }
        event.addLoot('lightmanscurrency:coin_iron')
    },
}