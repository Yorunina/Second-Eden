
ItemEvents.tooltip((tooltip) => {
    tooltip.addAdvanced('kubejs:waypointer_necklace', (item, advanced, text) => {
        text.add(1, Text.translatable('tooltip.item.kubejs.waypointer_necklace.1').gray())
    })
})
