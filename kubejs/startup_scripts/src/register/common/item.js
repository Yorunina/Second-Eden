StartupEvents.registry('item', event => {
    event.create('echo_crystal', 'basic').texture('kubejs:item/echo_crystal')
    event.create('coal_coke', 'basic').burnTime(3200).texture('kubejs:item/coal_coke')
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
})