ItemEvents.tooltip((tooltip) => {
    tooltip.addAdvanced('kubejs:transmog_mirror', (item, advanced, text) => {
        text.add(1, Text.translatable('tooltip.item.kubejs.transmog_mirror.1', item.nbt?.name ? item.nbt.getString('name') : '无记录玩家'))
    })
})