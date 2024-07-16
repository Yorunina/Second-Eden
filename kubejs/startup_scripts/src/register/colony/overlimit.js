const { OVERLIMIT } = require("../../utils/itemborder")

StartupEvents.registry('item', event => {
    event.create('singulize_potion', 'basic').maxStackSize(1).maxDamage(8).tag(OVERLIMIT).texture('kubejs:item/singulize_potion')

    event.create('singularity_copper', 'basic').maxStackSize(64).color(0xE47B55).tag(OVERLIMIT)
    event.create('singularity_iron', 'basic').maxStackSize(64).color(0xFCFCFC).tag(OVERLIMIT)
    event.create('singularity_gold', 'basic').maxStackSize(64).color(0xFAF25E).tag(OVERLIMIT)
    event.create('singularity_netherite', 'basic').maxStackSize(64).color(0x4C484C).tag(OVERLIMIT)
    event.create('singularity_diamond', 'basic').maxStackSize(64).color(0x9FF8E5).tag(OVERLIMIT)
    event.create('singularity_emerald', 'basic').maxStackSize(64).color(0x17DA61).tag(OVERLIMIT)
    event.create('singularity_amethyst', 'basic').maxStackSize(64).color(0xB18CF0).tag(OVERLIMIT)
    event.create('singularity_prismarine', 'basic').maxStackSize(64).color(0xA2CEC0).tag(OVERLIMIT)
    event.create('singularity_quartz', 'basic').maxStackSize(64).color(0xE2DCD3).tag(OVERLIMIT)
    event.create('singularity_lapis', 'basic').maxStackSize(64).color(0x5980DF).tag(OVERLIMIT)
    event.create('singularity_redstone', 'basic').maxStackSize(64).color(0xe80000).tag(OVERLIMIT)
    event.create('singularity_glowstone', 'basic').maxStackSize(64).color(0xFCBA5D).tag(OVERLIMIT)
    event.create('singularity_coal', 'basic').maxStackSize(64).color(0x2A261D).tag(OVERLIMIT)

    event.create('infinity_catalyst', 'basic').maxStackSize(64).tag(OVERLIMIT)

    event.create('infinity_ingot', 'basic').maxStackSize(64).tag(OVERLIMIT)
    event.create('infinity_nugget', 'basic').maxStackSize(64).tag(OVERLIMIT)

    event.create('neutron_sizing_machinery', 'basic').maxDamage(8).maxStackSize(64).tag(OVERLIMIT)
    
})