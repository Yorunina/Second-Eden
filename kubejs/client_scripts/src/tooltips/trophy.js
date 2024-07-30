ItemEvents.tooltip((tooltip) => {
    tooltip.addAdvanced('trophymanager:trophy', (item, advanced, text) => {
        text.add(1, Text.translatable('tooltip.item.trophymanager.trophy.1').gray())
    })
})