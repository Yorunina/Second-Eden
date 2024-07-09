ItemEvents.tooltip((tooltip) => {
    tooltip.addAdvanced('kubejs:undead_raid_book', (item, advanced, text) => {
        text.add(1, Text.translatable('tooltip.item.kubejs.undead_raid_book.1').gray())
    })
    tooltip.addAdvanced('kubejs:raid_book', (item, advanced, text) => {
        text.add(1, Text.translatable('tooltip.item.kubejs.raid_book.1').gray())
    })
})