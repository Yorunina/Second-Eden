const { $CompoundTag } = require("packages/net/minecraft/nbt/$CompoundTag")
const { CustomRaidEntityType } = require("../model/custom_raid_entity")

ItemEvents.tooltip((tooltip) => {
    tooltip.addAdvanced('kubejs:custom_raid_book', (item, advanced, text) => {
        let initNum = 1
        if (!(item.hasNBT() && item.nbt.contains('entityList'))) return
        /** @type {$CompoundTag} */
        let entityList = item.nbt.getCompound('entityList')

        entityList.allKeys.forEach(/**@param {string} entityIdentifier*/entityIdentifier => {
            let entityModelNbt = entityList.getCompound(entityIdentifier)
            let entityType = entityModelNbt.getString('entityType')
            let count = entityModelNbt.getInt('count')
            let modifiers = entityModelNbt.getCompound('modifiers')
            let entityModel = new CustomRaidEntityType(entityType, count).readFromNbtModifiers(modifiers)

            text.add(initNum++,
                Text.of('☆ ').gray()
                    .append(Text.translatable(`entity.identifier.kubejs.${entityIdentifier}`).yellow())
                    .append(Text.gray(' x '))
                    .append(Text.gray(entityModel.count.toFixed(0))))

            if (tooltip.isShift()) {
                entityModel.modifiers.forEach((attributeModifier, attributeIdentifier) => {
                    text.add(initNum++,
                        Text.of('   - ').gray()
                            .append(Text.translatable(`attribute.identifier.kubejs.${attributeIdentifier}`, attributeModifier.amount).gray()))
                })
            }
            if (tooltip.isCtrl()) {
                text.add(initNum++, Text.of('   - ').gray().append(Text.translatable('tooltip.item.kubejs.custom_raid_book.1', Text.gold(entityModel.calculateRaidEntityScore())).gray()))
            }
        })
    })

    tooltip.addAdvanced('#kubejs:specific_raid_orb', (item, advanced, text) => {
        let initNum = 1
        if (!item.hasNBT()) return
        let count = item.nbt.contains('count') ? item.nbt.getInt('count') : 1

        if (item.nbt.contains('identifier')) {
            text.add(initNum++,
                Text.of('☆ ').gray()
                    .append(Text.translatable(`tooltip.item.kubejs.specific_raid_orb.1`).gray())
                    .append(Text.translatable(`entity.identifier.kubejs.${item.nbt.getString('identifier')}`).yellow()))
        }

        text.add(initNum++,
            Text.of('☆ ').gray()
                .append(Text.translatable(`tooltip.item.kubejs.specific_raid_orb.2`).gray())
                .append(Text.gold(count.toFixed(0))))


    })

    tooltip.addAdvanced('kubejs:custom_raid_orb', (item, advanced, text) => {
        let initNum = 1
        if (!item.hasNBT()) return
        if (!item.nbt.contains('identifier')) return

        let count = item.nbt.contains('count') ? item.nbt.getInt('count') : 1
        let entityIdentifier = item.nbt.getString('identifier')
        text.add(initNum++,
            Text.of('☆ ').gray()
                .append(Text.translatable(`entity.identifier.kubejs.${entityIdentifier}`).yellow())
                .append(Text.gray(' x '))
                .append(Text.gray(count.toFixed(0))))
    })

    tooltip.addAdvanced('kubejs:raid_entity_modifier', (item, advanced, text) => {
        let initNum = 1
        if (!item.hasNBT()) return
        if (!item.nbt.contains('identifier') || !item.nbt.contains('modifiers')) return
        /** @type {$CompoundTag} */
        let modifiersNbt = item.nbt.getCompound('modifiers')
        let entityIdentifier = item.nbt.getString('identifier')
        text.add(initNum++,
            Text.of('☆ ').gray()
                .append(Text.translatable(`tooltip.item.kubejs.raid_entity_modifier.1`).gray())
                .append(Text.translatable(`entity.identifier.kubejs.${entityIdentifier}`).yellow()))
        modifiersNbt.allKeys.forEach(attributeIdentifier => {
            let attributeNbt = modifiersNbt.getCompound(attributeIdentifier)
            text.add(initNum++, Text.of('   - ').gray()
                .append(Text.translatable(`attribute.identifier.kubejs.${attributeIdentifier}`, attributeNbt.getDouble('amount')).gray()))
        })
    })
})