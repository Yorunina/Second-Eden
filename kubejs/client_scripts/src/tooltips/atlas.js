ItemEvents.tooltip((tooltip) => {
    tooltip.addAdvanced('kubejs:peaceful_ring', (item, advanced, text) => {
        text.add(2, Text.gold(Text.translate('tooltip.item.kubejs.peaceful_ring')))
    })

    tooltip.addAdvanced('#kubejs:teaching_manual', (item, advanced, text) => {
        text.add(1, Text.gold(Text.translate(`tooltip.item.kubejs.${item.idLocation.path}.1`)))
        text.add(2, Text.gold(Text.translate(`tooltip.item.kubejs.${item.idLocation.path}.2`)))
    })

})