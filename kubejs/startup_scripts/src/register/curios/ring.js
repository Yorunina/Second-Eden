StartupEvents.registry('item', event => {
    // 和平之戒
    event.create('peaceful_ring')
        .maxStackSize(1)
        .tag('curios:ring')
        .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
            .canEquip(() => true)
        )
        .texture('kubejs:item/curios/peaceful_ring')

    // 窃听之戒
    event.create('snoop_ring')
        .maxStackSize(1)
        .tag('curios:ring')
        .tag('kubejs:snoop')
        .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
            .canEquip((item, slotContext) => onlyPlayerCanEquip(item, slotContext))
            .modifyAttribute('kubejs:decode_ability', 'SnoopRingDecodeAbility', 3, 'addition')
        )
        .texture('kubejs:item/curios/snoop_ring')
        
    // 月见草之语
    event.create('evening_primrose_ring')
        .maxStackSize(1)
        .tag('curios:ring')
        .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
            .canEquip((item, slotContext) => onlyPlayerCanEquip(item, slotContext))
            .modifyAttribute('kubejs:encode_ability', 'EveningPrimroseEncodeAbility', -5, 'addition')
            .modifyAttribute('puffish_attributes:player.fortune', 'EveningPrimroseFortune', 1, 'addition')
            .modifyAttribute('kubejs:treasure_fortune', 'EveningPrimroseTreasureFortune', 2, 'addition')
        )
        .texture('kubejs:item/curios/evening_primrose_ring')

    // 红宝石戒指
    event.create('evening_primrose_ring')
        .maxStackSize(1)
        .tag('curios:ring')
        .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
            .canEquip((item, slotContext) => onlyPlayerCanEquip(item, slotContext))
            .modifyAttribute('kubejs:encode_ability', 'EveningPrimroseEncodeAbility', -5, 'addition')
            .modifyAttribute('kubejs:treasure_fortune', 'EveningPrimroseTreasureFortune', 2, 'addition')
        )
        .texture('kubejs:item/curios/evening_primrose_ring')
})