const { LEGENDARY } = require("../../utils/itemborder")
StartupEvents.registry('item', event => {
    event.create('go_camping')
        .maxStackSize(1)
        .tag('curios:charm')
        .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
            .canEquip(() => true)
            .modifyAttribute('minecraft:generic.luck', 'GoCampingLuck', 1, 'addition')
        )
        .tag(LEGENDARY)
        .texture('kubejs:item/curios/go_camping')
})

