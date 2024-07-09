ItemEvents.tooltip((tooltip) => {
    tooltip.addAdvanced('kubejs:peaceful_ring', (item, advanced, text) => {
        text.add(1, Text.translatable('tooltip.item.kubejs.peaceful_ring.1').gray())
        text.add(2, Text.translatable('tooltip.item.kubejs.peaceful_ring.2').gray())
    })

    tooltip.addAdvanced('#kubejs:soul_gem', (item, advanced, text) => {
        text.add(1, Text.translatable(`tooltip.item.kubejs.${item.idLocation.path}.1`).gray())
    })

    tooltip.addAdvanced('kubejs:master_certificate', (item, advanced, text) => {
        text.add(1, Text.translatable(`tooltip.item.kubejs.master_certificate.1`).gold())
    })

    tooltip.addAdvanced('#curios:atlas', (item, advanced, text) => {
        text.add(1, Text.translatable(`tooltip.item.kubejs.atlas.1`, Text.gold((item.hasNBT() && item.nbt.contains('theme')) ? item.nbt.getString('theme') : 'random')).gray())
    })

    tooltip.addAdvanced('#curios:atlas', (item, advanced, text) => {
        text.add(1, Text.translatable(`tooltip.item.kubejs.atlas_theme_nametag.1`,
            Text.gold((item.hasNBT() && item.nbt.contains('itemId')) ? Item.of(item.nbt.getString('itemId')).getDisplayName() : Text.translatable('tooltip.item.kubejs.atlas_theme_nametag.2'))).gray())
        text.add(1, Text.translatable(`tooltip.item.kubejs.atlas_theme_nametag.3`,
            Text.gold((item.hasNBT() && item.nbt.contains('theme')) ? item.nbt.getString('theme') : 'random')).gray())
    })

})