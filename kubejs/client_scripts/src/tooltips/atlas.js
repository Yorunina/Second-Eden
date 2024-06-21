ItemEvents.tooltip((tooltip) => {
    tooltip.addAdvanced('#curios:atlas', (item, advanced, text) => {
        text.add(1, [Text.gray(Text.translate('tooltips.kubejs.item.atlas.1')), Text.gray(item?.nbt?.remains ? item.nbt.remains : 0)])
    })
})

