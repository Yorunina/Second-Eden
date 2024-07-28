const { EPIC, COMMON } = require("../../utils/itemborder");

StartupEvents.registry('item', event => {
    event.create('echo_crystal', 'basic').tag(EPIC).texture('kubejs:item/echo_crystal')
    event.create('coal_coke', 'basic').tag(COMMON).burnTime(3200).texture('kubejs:item/coal_coke')
    event.create('eternal_steak', 'basic')
        .useAnimation('eat')
        .use((level, player, hand) => {
            return true;
        })
        .useDuration(itemStack => 20)
        .finishUsing((itemstack, level, entity) => {
            if (level.isClientSide()) return itemstack
            if (!entity.isPlayer()) return itemstack
            /**@type {$ServerPlayer_} */
            let player = entity
            player.eat(level, 'minecraft:cooked_beef')
            player.addItemCooldown(itemstack.id, 20 * 60)
            return itemstack
        })
        .texture('kubejs:item/eternal_steak')

    event.create('kubejs:linear_propulsion', 'basic').texture('kubejs:item/linear_propulsion')
    event.create('kubejs:obsidian_boiler', 'basic').texture('kubejs:item/obsidian_boiler')
})