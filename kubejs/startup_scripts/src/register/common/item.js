const { EPIC, COMMON } = require("../../utils/itemborder");

StartupEvents.registry('item', event => {
    event.create('echo_crystal', 'basic').tag(EPIC).texture('kubejs:item/echo_crystal')
    event.create('coal_coke', 'basic').tag(COMMON).burnTime(3200).texture('kubejs:item/coal_coke')

    // 小工具
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

    event.create('kubejs:magic_mirror', 'basic')
        .useAnimation('bow')
        .use((level, player, hand) => {
            return true;
        })
        .useDuration(itemStack => 20)
        .finishUsing((itemstack, level, entity) => {
            if (level.isClientSide()) return itemstack
            if (!entity.isPlayer()) return itemstack
            return global.MagicMirrorFinishUsing(itemstack, level, entity)
        })
        .maxStackSize(1).tag(EPIC)
        .texture('kubejs:item/magic_mirror')

    // 沉浸式飞机扩展
    event.create('kubejs:linear_propulsion', 'basic').texture('kubejs:item/linear_propulsion')
    event.create('kubejs:obsidian_boiler', 'basic').texture('kubejs:item/obsidian_boiler')

    // 车万女仆兼容
    event.create('kubejs:spawn_maid_box', 'basic').maxStackSize(1).tag(EPIC).texture('kubejs:item/spawn_maid_box')

    // 试炼高塔兼容
    event.create('kubejs:trial_modifier', 'basic').maxStackSize(1).tag(EPIC).texture('kubejs:item/trial_modifier')

    // 奖杯剑
    event.create('kubejs:trophy_sword', 'sword')
        .tier('diamond')
        .attackDamageBaseline(2.0)
        .attackDamageBonus(3.0)
        .speedBaseline(-2.5)
        .speed(4.0)
        .maxDamage(32)
        .maxStackSize(1)
        .tag('minecraft:swords').tag('forge:tools').tag('minecraft:tools').texture('kubejs:item/trophy_sword').tag(EPIC)
})
