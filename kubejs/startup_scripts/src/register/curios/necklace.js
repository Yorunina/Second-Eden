const { EPIC } = require("../../utils/itemborder")

StartupEvents.registry('item', event => {
    event.create('waypointer_necklace')
        .maxStackSize(1)
        .tag(EPIC)
        .tag('curios:necklace')
        .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
            .canEquip((item, slotContext) => onlyPlayerCanEquip(item, slotContext))
            .modifyAttribute('kubejs:encode_ability', 'WayPointerDecodeAbility', -1, 'addition')
        )
        .texture('kubejs:item/curios/waypointer_necklace')
})