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

            text.add(initNum++, `${Text.translatable(`entity.identifier.kubejs.${entityIdentifier}`)} x ${entityModel.count}`)
            if (tooltip.isShift()) {
                entityModel.modifiers.forEach((attributeModifier, attributeIdentifier, map) => {
                    text.add(initNum++, `    - ${Text.translatable(`attribute.identifier.kubejs.${attributeIdentifier}`, attributeModifier.amount)}`)
                })
            }
        })
    })

    tooltip.addAdvanced('#kubejs:specific_raid_orb', (item, advanced, text) => {
        let initNum = 1
        if (!item.hasNBT()) return
        /** @type {$CompoundTag} */
        let count = item.nbt.contains('count') ? item.nbt.getCompound('count') : 1
        text.add(initNum++, `${Text.translatable(`tooltip.item.kubejs.specific_raid_orb.1`)} x ${count}`)
        if (tooltip.isShift()) {
            let customNbt = item.nbt.contains('customNbt') ? item.nbt.getCompound('customNbt') : '{}'
            text.add(initNum++, `${Text.translatable(`tooltip.item.kubejs.specific_raid_orb.2`)} ${customNbt}`)
        }
    })

    tooltip.addAdvanced('kubejs:custom_raid_orb', (item, advanced, text) => {
        let initNum = 1
        if (!item.hasNBT()) return
        if (!item.nbt.contains('identifier')) return
        /** @type {$CompoundTag} */
        let count = item.nbt.contains('count') ? item.nbt.getCompound('count') : 1
        let entityIdentifier = item.nbt.getCompound('identifier')
        entityIdentifier
        text.add(initNum++, `${Text.translatable(`entity.identifier.kubejs.${entityIdentifier}`)} x ${count}`)
        if (tooltip.isShift()) {
            let customNbt = item.nbt.contains('customNbt') ? item.nbt.getCompound('customNbt') : '{}'
            text.add(initNum++, `${Text.translatable(`tooltip.item.kubejs.specific_raid_orb.2`)} ${customNbt}`)
        }
    })

    tooltip.addAdvanced('kubejs:raid_entity_modifier', (item, advanced, text) => {
        let initNum = 1
        if (!item.hasNBT()) return
        if (!item.nbt.contains('identifier') || !item.nbt.contains('modifiers')) return
        /** @type {$CompoundTag} */
        let modifiersNbt = item.nbt.getCompound('modifiers')
        let entityIdentifier = item.nbt.getCompound('identifier')
        text.add(initNum++, `${Text.translatable(`entity.identifier.kubejs.${entityIdentifier}`)}`)
        modifiersNbt.allKeys.forEach(attributeIdentifier => {
            let attributeNbt = modifiersNbt.getCompound(attributeIdentifier)
            text.add(initNum++, `${Text.translatable(`attribute.identifier.kubejs.${attributeIdentifier}`, attributeNbt.getInt('amount'))}`)
        })
    })
})