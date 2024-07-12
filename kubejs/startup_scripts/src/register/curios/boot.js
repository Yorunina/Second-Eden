const { COMMON, RARE, EPIC, LEGENDARY, OVERLIMIT } = require("../../utils/itemborder")

StartupEvents.registry('item', event => {
    event.create('hiking_boots').maxStackSize(1).maxDamage(3).tag('curios:feet').tag(RARE)
        .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
            .modifyAttribute('forge:step_height_addition', 'TrekkingPoleStepHeightAddition', 0.5, 'addition')
        ).texture('kubejs:item/curios/hiking_boots')
})