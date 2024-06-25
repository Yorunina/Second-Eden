StartupEvents.registry('item', event => {
    event.create('peaceful_ring')
        .maxStackSize(1)
        .tag('curios:ring')
        .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
            .canEquip((item, slotContext) => onlyPlayerCanEquip(item, slotContext))
        )
        .texture('kubejs:item/curios/peaceful_ring')
})