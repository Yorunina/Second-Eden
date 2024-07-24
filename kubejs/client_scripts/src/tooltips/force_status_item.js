
ItemEvents.tooltip((tooltip) => {
    tooltip.addAdvanced('kubejs:disband_canes', (item, advanced, text) => {
        text.add(1, Text.translatable('tooltip.item.kubejs.disband_canes.1').gray())
    })
    tooltip.addAdvanced('kubejs:emergency_evacuation_bell', (item, advanced, text) => {
        text.add(1, Text.translatable('tooltip.item.kubejs.emergency_evacuation_bell.1').gray())
    })
    tooltip.addAdvanced('kubejs:force_work_alarm', (item, advanced, text) => {
        text.add(1, Text.translatable('tooltip.item.kubejs.force_work_alarm.1').gray())
    })
    tooltip.addAdvanced('kubejs:force_work_bell', (item, advanced, text) => {
        text.add(1, Text.translatable('tooltip.item.kubejs.force_work_bell.1').gray())
    })
    tooltip.addAdvanced('kubejs:emotion_block_bell', (item, advanced, text) => {
        text.add(1, Text.translatable('tooltip.item.kubejs.emotion_block_bell.1').gray())
    })
    tooltip.addAdvanced('kubejs:bind_armor_protocol', (item, advanced, text) => {
        text.add(1, Text.translatable('tooltip.item.kubejs.bind_armor_protocol.1').gray())
    })
})