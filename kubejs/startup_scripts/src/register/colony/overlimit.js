const { OVERLIMIT } = require("../../utils/itemborder")

StartupEvents.registry('item', event => {
    event.create('singulize_potion', 'basic').maxStackSize(1).maxDamage(1).tag(OVERLIMIT).texture('kubejs:item/singulize_potion')
})