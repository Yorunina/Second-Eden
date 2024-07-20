const { RARE, EPIC, LEGENDARY } = require("../../utils/itemborder")

StartupEvents.registry('item', event => {
    event.create('emergency_evacuation_bell', 'basic')
        .maxStackSize(1)
        .tag(EPIC)
        .tag('minecolonies:hide_citizen_data')
        .texture('kubejs:item/emergency_evacuation_bell')

    event.create('raid_book', 'basic')
        .maxStackSize(1)
        .tag(RARE)
        .tag('minecolonies:hide_citizen_data')
        .texture('kubejs:item/raid_book')

    event.create('undead_raid_book', 'basic')
        .maxStackSize(1)
        .tag(EPIC)
        .tag('minecolonies:hide_citizen_data')
        .texture('kubejs:item/undead_raid_book')

    event.create('custom_raid_book', 'basic')
        .maxStackSize(1)
        .tag(LEGENDARY)
        .tag('minecolonies:hide_citizen_data')
        .texture('kubejs:item/custom_raid_book')

    // 分开写的原因 - 如果同一物品使用Minecolonies的科技锁定，它的Tooltips会异常展示
    event.create('zombie_orb', 'basic').color(0x139133).maxStackSize(64).tag('kubejs:specific_raid_orb').tag(EPIC).texture('kubejs:item/raid_orb')
    event.create('skeleton_orb', 'basic').color(0xD6D5D0).maxStackSize(64).tag('kubejs:specific_raid_orb').tag(EPIC).texture('kubejs:item/raid_orb')
    event.create('cave_spider_orb', 'basic').color(0x7BA100).maxStackSize(64).tag('kubejs:specific_raid_orb').tag(EPIC).texture('kubejs:item/raid_orb')
    event.create('creeper_orb', 'basic').color(0x00BD23).maxStackSize(64).tag('kubejs:specific_raid_orb').tag(EPIC).texture('kubejs:item/raid_orb')
    event.create('blaze_orb', 'basic').color(0xCC5200).maxStackSize(64).tag('kubejs:specific_raid_orb').tag(EPIC).texture('kubejs:item/raid_orb')
    event.create('husk_orb', 'basic').color(0xCCA704).maxStackSize(64).tag('kubejs:specific_raid_orb').tag(EPIC).texture('kubejs:item/raid_orb')
    event.create('pillager_orb', 'basic').color(0x00613a).maxStackSize(64).tag('kubejs:specific_raid_orb').tag(EPIC).texture('kubejs:item/raid_orb')
    event.create('ravager_orb', 'basic').color(0x003561).maxStackSize(64).tag('kubejs:specific_raid_orb').tag(EPIC).texture('kubejs:item/raid_orb')
    event.create('evoker_orb', 'basic').color(0x2F005E).maxStackSize(64).tag('kubejs:specific_raid_orb').tag(EPIC).texture('kubejs:item/raid_orb')
    event.create('wither_skeleton_orb', 'basic').color(0x302F33).maxStackSize(64).tag('kubejs:specific_raid_orb').tag(EPIC).texture('kubejs:item/raid_orb')
    event.create('vindicator_orb', 'basic').color(0xBA362F).maxStackSize(64).tag('kubejs:specific_raid_orb').tag(EPIC).texture('kubejs:item/raid_orb')

    // takesapillage
    event.create('archer_orb', 'basic').color(0x00944A).maxStackSize(64).tag('kubejs:specific_raid_orb').tag(EPIC).texture('kubejs:item/raid_orb')
    event.create('legioner_orb', 'basic').color(0xC0C4C4).maxStackSize(64).tag('kubejs:specific_raid_orb').tag(EPIC).texture('kubejs:item/raid_orb')
    event.create('skirmisher_orb', 'basic').color(0x694600).maxStackSize(64).tag('kubejs:specific_raid_orb').tag(EPIC).texture('kubejs:item/raid_orb')


    // 通用方案
    event.create('custom_raid_orb', 'basic').maxStackSize(64).tag(LEGENDARY).texture('kubejs:item/raid_orb')

    event.create('raid_entity_modifier', 'basic').maxStackSize(64).tag(LEGENDARY).texture('kubejs:item/raid_entity_modifier')

})
