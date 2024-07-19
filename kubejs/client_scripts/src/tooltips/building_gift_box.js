ItemEvents.tooltip((tooltip) => {
    tooltip.addAdvanced('kubejs:building_gift_box', (item, advanced, text) => {
        let lineNum = 1
        if (!item.hasNBT()) return
        if (item.nbt.contains('pack')) {
            text.add(lineNum++ , Text.translatable('tooltip.item.kubejs.building_gift_box.1').gray().append(Text.gold(item.nbt.getString('pack'))))
        }
        if (item.nbt.contains('blockName')) {
            text.add(lineNum++ , Text.translatable('tooltip.item.kubejs.building_gift_box.2').gray().append(Text.gold(item.nbt.getString('blockName'))))
        }
        if (item.nbt.contains('rePattern')) {
            text.add(lineNum++ , Text.translatable('tooltip.item.kubejs.building_gift_box.3').gray().append(Text.gold(item.nbt.getString('rePattern'))))
        }
        if (item.nbt.contains('levelReq')) {
            text.add(lineNum++ , Text.translatable('tooltip.item.kubejs.building_gift_box.4', Text.gold(item.nbt.getString('levelReq'))).gray())
        }
        if (item.nbt.contains('force') && item.nbt.getInt('force') == 1) {
            text.add(lineNum++ , Text.translatable('tooltip.item.kubejs.building_gift_box.5').darkRed())
        }

    })
})

