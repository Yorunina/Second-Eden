ItemEvents.tooltip((tooltip) => {
    tooltip.addAdvanced('kubejs:peaceful_ring', (item, advanced, text) => {
        text.add(1, Text.translatable('tooltip.item.kubejs.peaceful_ring.1').gold())
        text.add(2, Text.translatable('tooltip.item.kubejs.peaceful_ring.2').gold())
    })

    tooltip.addAdvanced('#kubejs:soul_gem', (item, advanced, text) => {
        text.add(1, Text.translatable(`tooltip.item.kubejs.${item.idLocation.path}`).gold())
    })

    tooltip.addAdvanced('kubejs:master_certificate', (item, advanced, text) => {
        text.add(1, Text.translatable(`tooltip.item.kubejs.master_certificate`).gold())
    })
})