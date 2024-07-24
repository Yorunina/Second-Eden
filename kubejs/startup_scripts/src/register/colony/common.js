const { EPIC, LEGENDARY } = require("../../utils/itemborder")

StartupEvents.registry('item', event => {
    event.create('force_work_alarm', 'basic')
        .maxStackSize(1)
        .tag(EPIC)
        .tag('minecolonies:hide_citizen_data')
        .texture('kubejs:item/force_work_alarm')

    event.create('force_work_bell', 'basic')
        .maxStackSize(1)
        .tag(LEGENDARY)
        .tag('minecolonies:hide_citizen_data')
        .texture('kubejs:item/force_work_bell')

    event.create('emotion_block_bell', 'basic')
        .maxStackSize(1)
        .tag(LEGENDARY)
        .tag('minecolonies:hide_citizen_data')
        .texture('kubejs:item/emotion_block_bell')

    event.create('bind_armor_protocol', 'basic')
        .maxStackSize(1)
        .tag(EPIC)
        .tag('minecolonies:hide_citizen_data')
        .texture('kubejs:item/bind_armor_protocol')

    event.create('go_camping', 'basic')
        .maxStackSize(1)
        .tag(LEGENDARY)
        .texture('kubejs:item/go_camping')

    event.create('emergency_evacuation_bell', 'basic')
        .maxStackSize(1)
        .tag(EPIC)
        .tag('minecolonies:hide_citizen_data')
        .texture('kubejs:item/emergency_evacuation_bell')

    event.create('disband_canes', 'basic')
        .maxStackSize(1)
        .tag(EPIC)
        .tag('minecolonies:hide_citizen_data')
        .texture('kubejs:item/disband_canes')
})
