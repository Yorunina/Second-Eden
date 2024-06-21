StartupEvents.registry('item', event => {
    event.create('newer_atlas')
        .maxStackSize(1)
        .maxDamage(8)
        .tag('curios:atlas')
        .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
            .canEquip((item, slotContext) => onlyPlayerCanEquip(item, slotContext))
            .modifyAttribute('kubejs:treasure_fortune', 'NewerAtlasTreasureFortune', 10, 'addition')
            .modifyAttribute('kubejs:treasure_distance', 'NewerAtlasTreasureDistance', 1024, 'addition')
        )
        .texture('kubejs:item/curios/newer_atlas')
})

ForgeEvents.onEvent('net.minecraftforge.event.AnvilUpdateEvent', event => {
    if (event.getLeft().hasTag('curios:atlas')) {
        event.setOutput('minecraft:air')
    }
})