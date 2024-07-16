ItemEvents.tooltip((tooltip) => {
    tooltip.addAdvanced('kubejs:evening_primrose_ring', (item, advanced, text) => {
        text.add(1, Text.translatable('tooltip.item.kubejs.evening_primrose_ring.1').green())
    })

    tooltip.addAdvanced('kubejs:snoop_ring', (item, advanced, text) => {
        text.add(1, Text.translatable('tooltip.item.kubejs.snoop_ring.1').green())
    })
})