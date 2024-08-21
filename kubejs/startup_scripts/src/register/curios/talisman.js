    
StartupEvents.registry(event => {

    event.create('go_camping', 'basic')
        .maxStackSize(1)
        .tag('curios:ring')
        .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
            .canEquip(() => true)
            .modifyAttribute('minecraft:luck', 'GoCampingLuck', 1, 'addition')
        )
        .tag(LEGENDARY)
        .texture('kubejs:item/curios/go_camping')
})

