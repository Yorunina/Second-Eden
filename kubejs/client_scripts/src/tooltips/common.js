ItemEvents.tooltip((tooltip) => {
    tooltip.addAdvanced('kubejs:magic_mirror', (item, advanced, text) => {
        text.add(1, Text.translatable('tooltip.item.kubejs.magic_mirror.1').gray())
    })
})
