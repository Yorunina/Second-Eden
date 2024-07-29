ItemEvents.tooltip((tooltip) => {
    tooltip.addAdvanced('kubejs:evening_primrose_ring', (item, advanced, text) => {
        text.add(1, Text.translatable('tooltip.item.kubejs.evening_primrose_ring.1').green())
    })

    tooltip.addAdvanced('kubejs:snoop_ring', (item, advanced, text) => {
        text.add(1, Text.translatable('tooltip.item.kubejs.snoop_ring.1').green())
    })

    tooltip.addAdvanced('kubejs:friend_to_the_end', (item, advanced, text) => {
        if (item.nbt && item.nbt.friendName) {
            text.add([Text.translatable("tooltips.kubejs.friend_to_the_end.1").gray(), Text.gold(item.nbt.friendName)]);
        } else {
            text.add([Text.translatable("tooltips.kubejs.friend_to_the_end.2").gray()]);
        }
    })
})