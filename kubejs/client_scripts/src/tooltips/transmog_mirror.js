ItemEvents.tooltip((tooltip) => {
    tooltip.addAdvanced('kubejs:transmog_mirror', (item, advanced, text) => {
        text.add(1, Text.translatable('tooltip.item.kubejs.transmog_mirror.1', Text.yellow(item.nbt?.name ? item.nbt.getString('name') : Text.translatable('tooltip.item.kubejs.transmog_mirror.2'))).gold())
    })
})