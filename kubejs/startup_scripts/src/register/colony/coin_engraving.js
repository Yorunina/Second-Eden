const { RARE, COMMON, EPIC, LEGENDARY, OVERLIMIT } = require("../../utils/itemborder")

StartupEvents.registry('item', event => {
    event.create('common_coin_engraving', 'basic').maxDamage(36).texture('kubejs:item/coin_engraving').tag(COMMON).maxStackSize(1)

    event.create('rare_coin_engraving', 'basic').maxDamage(72).texture('kubejs:item/coin_engraving').tag(RARE).maxStackSize(1)

    event.create('epic_coin_engraving', 'basic').maxDamage(144).texture('kubejs:item/coin_engraving').tag(EPIC).maxStackSize(1)

    event.create('legendary_coin_engraving', 'basic').maxDamage(288).texture('kubejs:item/coin_engraving').tag(LEGENDARY).maxStackSize(1)

    event.create('overlimit_coin_engraving', 'basic').texture('kubejs:item/coin_engraving').tag(OVERLIMIT).maxStackSize(1)
})