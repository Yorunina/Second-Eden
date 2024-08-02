ItemEvents.tooltip((tooltip) => {
    tooltip.addAdvanced('kubejs:trial_modifier', (item, advanced, text) => {
        let lineNum = 1
        let applyType = 'any'
        let lootTableIdentifier = 'default'
        let lootTable = ''
        if (item.hasNBT()) {
            if (item.nbt.contains('applyType')) {
                applyType = item.nbt.getString('applyType')
            }
            if (item.nbt.contains('lootTableIdentifier')) {
                lootTableIdentifier = item.nbt.getString('lootTableIdentifier')
            } else {
                // 如果没有identifier，兜底展示loottable原文
                if (item.nbt.contains('lootTable')) {
                    lootTable = item.nbt.getString('lootTable')
                }
            }
        }

        text.add(lineNum++, Text.of('☆ ').gray().append(Text.translatable(`tooltip.item.kubejs.trial_modifier.1`).gray()).append(Text.translatable(`tooltip.item.kubejs.trial_modifier.${applyType}`).gold()))

        if (lootTable) {
            text.add(lineNum++, Text.of('☆ ').gray().append(Text.translatable(`tooltip.item.kubejs.trial_modifier.2`)).gray().append(Text.gold(lootTable)))
        } else {
            text.add(lineNum++, Text.of('☆ ').gray().append(Text.translatable(`tooltip.item.kubejs.trial_modifier.2`).gray()).append(Text.translatable(`loottable.identifier.kubejs.${lootTableIdentifier}`).gold()))
        }
    })
})