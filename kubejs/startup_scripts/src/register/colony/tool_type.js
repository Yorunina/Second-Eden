const { RARE, COMMON, EPIC, LEGENDARY, OVERLIMIT } = require("../../utils/itemborder")

StartupEvents.registry('item', event => {
    event.create('common_coin_engraving', 'basic').maxDamage(18).texture('kubejs:item/coin_engraving').tag('kubejs:coin_engraving').tag(COMMON).maxStackSize(1)

    event.create('rare_coin_engraving', 'basic').maxDamage(36).texture('kubejs:item/coin_engraving').tag('kubejs:coin_engraving').tag(RARE).maxStackSize(1)

    event.create('epic_coin_engraving', 'basic').maxDamage(72).texture('kubejs:item/coin_engraving').tag('kubejs:coin_engraving').tag(EPIC).maxStackSize(1)

    event.create('legendary_coin_engraving', 'basic').maxDamage(144).texture('kubejs:item/coin_engraving').tag('kubejs:coin_engraving').tag(LEGENDARY).maxStackSize(1)

    event.create('overlimit_coin_engraving', 'basic').texture('kubejs:item/coin_engraving').tag('kubejs:coin_engraving').tag(OVERLIMIT).maxStackSize(1)

    // 合金筛网并不属于ToolType，但是其性质类似于ToolType，用于筛沙工的工作流程
    event.create('sifter_mesh_netherite', 'basic').maxDamage(3000).texture('kubejs:item/sifter_mesh_netherite').tag(LEGENDARY).maxStackSize(1)
})