// priority: 500
const { $CompoundTag } = require("packages/net/minecraft/nbt/$CompoundTag")
const { CustomRaidEntityType } = require("../../model/custom_raid_entity")
import { $EntityType$Type } from "packages/net/minecraft/world/entity/$EntityType"

ServerEvents.recipes(event => {
    event.shapeless('kubejs:custom_raid_book', ['kubejs:custom_raid_book', 'kubejs:zombie_orb'])
        .modifyResult((/** @type { $ModifyRecipeCraftingGrid_ }*/grid,/** @type { $ItemStack_ }*/ stack) => {
            let orb = grid.find('kubejs:zombie_orb', 0)
            let addCount = (orb.hasNBT() && orb.nbt.contains('count')) ? orb.nbt.getInt('count') : 1
            let raidBook = grid.find('kubejs:custom_raid_book', 0)
            return CustomRaidBookAddEntityCount(raidBook, 'minecraft:zombie', addCount)
        })

    event.shapeless('kubejs:custom_raid_book', ['kubejs:custom_raid_book', 'kubejs:skeleton_orb'])
        .modifyResult((/** @type { $ModifyRecipeCraftingGrid_ }*/grid,/** @type { $ItemStack_ }*/ stack) => {
            let orb = grid.find('kubejs:skeleton_orb', 0)
            let addCount = (orb.hasNBT() && orb.nbt.contains('count')) ? orb.nbt.getInt('count') : 1
            let raidBook = grid.find('kubejs:custom_raid_book', 0)
            return CustomRaidBookAddEntityCount(raidBook, 'minecraft:skeleton', addCount)
        })

    event.shapeless('kubejs:custom_raid_book', ['kubejs:custom_raid_book', 'kubejs:cave_spider_orb'])
        .modifyResult((/** @type { $ModifyRecipeCraftingGrid_ }*/grid,/** @type { $ItemStack_ }*/ stack) => {
            let orb = grid.find('kubejs:cave_spider_orb', 0)
            let addCount = (orb.hasNBT() && orb.nbt.contains('count')) ? orb.nbt.getInt('count') : 1
            let raidBook = grid.find('kubejs:custom_raid_book', 0)
            return CustomRaidBookAddEntityCount(raidBook, 'minecraft:cave_spider', addCount)
        })

    event.shapeless('kubejs:custom_raid_book', ['kubejs:custom_raid_book', 'kubejs:creeper_orb'])
        .modifyResult((/** @type { $ModifyRecipeCraftingGrid_ }*/grid,/** @type { $ItemStack_ }*/ stack) => {
            let orb = grid.find('kubejs:creeper_orb', 0)
            let addCount = (orb.hasNBT() && orb.nbt.contains('count')) ? orb.nbt.getInt('count') : 1
            let raidBook = grid.find('kubejs:custom_raid_book', 0)
            return CustomRaidBookAddEntityCount(raidBook, 'minecraft:creeper', addCount)
        })

    event.shapeless('kubejs:custom_raid_book', ['kubejs:custom_raid_book', 'kubejs:blaze_orb'])
        .modifyResult((/** @type { $ModifyRecipeCraftingGrid_ }*/grid,/** @type { $ItemStack_ }*/ stack) => {
            let orb = grid.find('kubejs:blaze_orb', 0)
            let addCount = (orb.hasNBT() && orb.nbt.contains('count')) ? orb.nbt.getInt('count') : 1
            let raidBook = grid.find('kubejs:custom_raid_book', 0)
            return CustomRaidBookAddEntityCount(raidBook, 'minecraft:blaze', addCount)
        })

    event.shapeless('kubejs:custom_raid_book', ['kubejs:custom_raid_book', 'kubejs:husk_orb'])
        .modifyResult((/** @type { $ModifyRecipeCraftingGrid_ }*/grid,/** @type { $ItemStack_ }*/ stack) => {
            let orb = grid.find('kubejs:husk_orb', 0)
            let addCount = (orb.hasNBT() && orb.nbt.contains('count')) ? orb.nbt.getInt('count') : 1
            let raidBook = grid.find('kubejs:custom_raid_book', 0)
            return CustomRaidBookAddEntityCount(raidBook, 'minecraft:husk', addCount)
        })

    event.shapeless('kubejs:custom_raid_book', ['kubejs:custom_raid_book', 'kubejs:pillager_orb'])
        .modifyResult((/** @type { $ModifyRecipeCraftingGrid_ }*/grid,/** @type { $ItemStack_ }*/ stack) => {
            let orb = grid.find('kubejs:pillager_orb', 0)
            let addCount = (orb.hasNBT() && orb.nbt.contains('count')) ? orb.nbt.getInt('count') : 1
            let raidBook = grid.find('kubejs:custom_raid_book', 0)
            return CustomRaidBookAddEntityCount(raidBook, 'minecraft:pillager', addCount)
        })

    event.shapeless('kubejs:custom_raid_book', ['kubejs:custom_raid_book', 'kubejs:ravager_orb'])
        .modifyResult((/** @type { $ModifyRecipeCraftingGrid_ }*/grid,/** @type { $ItemStack_ }*/ stack) => {
            let orb = grid.find('kubejs:ravager_orb', 0)
            let addCount = (orb.hasNBT() && orb.nbt.contains('count')) ? orb.nbt.getInt('count') : 1
            let raidBook = grid.find('kubejs:custom_raid_book', 0)
            return CustomRaidBookAddEntityCount(raidBook, 'minecraft:ravager', addCount)
        })

    event.shapeless('kubejs:custom_raid_book', ['kubejs:custom_raid_book', 'kubejs:evoker_orb'])
        .modifyResult((/** @type { $ModifyRecipeCraftingGrid_ }*/grid,/** @type { $ItemStack_ }*/ stack) => {
            let orb = grid.find('kubejs:evoker_orb', 0)
            let addCount = (orb.hasNBT() && orb.nbt.contains('count')) ? orb.nbt.getInt('count') : 1
            let raidBook = grid.find('kubejs:custom_raid_book', 0)
            return CustomRaidBookAddEntityCount(raidBook, 'minecraft:evoker', addCount)
        })

    event.shapeless('kubejs:custom_raid_book', ['kubejs:custom_raid_book', 'kubejs:wither_skeleton_orb'])
        .modifyResult((/** @type { $ModifyRecipeCraftingGrid_ }*/grid,/** @type { $ItemStack_ }*/ stack) => {
            let orb = grid.find('kubejs:wither_skeleton_orb', 0)
            let addCount = (orb.hasNBT() && orb.nbt.contains('count')) ? orb.nbt.getInt('count') : 1
            let raidBook = grid.find('kubejs:custom_raid_book', 0)
            return CustomRaidBookAddEntityCount(raidBook, 'minecraft:wither_skeleton', addCount)
        })

    event.shapeless('kubejs:custom_raid_book', ['kubejs:custom_raid_book', 'kubejs:vindicator_orb'])
        .modifyResult((/** @type { $ModifyRecipeCraftingGrid_ }*/grid,/** @type { $ItemStack_ }*/ stack) => {
            let orb = grid.find('kubejs:vindicator_orb', 0)
            let addCount = (orb.hasNBT() && orb.nbt.contains('count')) ? orb.nbt.getInt('count') : 1
            let raidBook = grid.find('kubejs:custom_raid_book', 0)
            return CustomRaidBookAddEntityCount(raidBook, 'minecraft:vindicator', addCount)
        })
})


ServerEvents.recipes(event => {
    event.shapeless('kubejs:custom_raid_book', ['kubejs:custom_raid_book', 'kubejs:raid_entity_modifier'])
        .modifyResult((/** @type { $ModifyRecipeCraftingGrid_ }*/grid,/** @type { $ItemStack_ }*/ stack) => {
            let modifierItem = grid.find('kubejs:raid_entity_modifier', 0)
            if (!modifierItem.hasNBT()) return Item.of('minecraft:air')
            let modifierItemNbt = modifierItem.getNbt()
            if (!modifierItemNbt.contains('modifiers')) return Item.of('minecraft:air')

            let modifierListNbt = modifierItemNbt.getCompound('modifiers')

            let targetEntityType = modifierItemNbt.contains('entityType') ? modifierItemNbt.getString('entityType') : 'random'

            let raidBook = grid.find('kubejs:custom_raid_book', 0)
            let raidBookNbt = raidBook.hasNBT() ? raidBook.getNbt() : new $CompoundTag()
            let entityListNbt = raidBookNbt.contains('entityList') ? raidBookNbt.getCompound('entityList') : new $CompoundTag()

            switch (targetEntityType) {
                case 'all':
                    if (entityListNbt.allKeys.length <= 0) return Item.of('minecraft:air')
                    entityListNbt.allKeys.forEach(entityType => {
                        let entityNbt = entityListNbt.getCompound(entityType)
                        let count = entityNbt.getInt('count')
                        let entityModel = new CustomRaidEntityType(entityType, count)
                        if (entityNbt.contains('modifiers')) {
                            entityModel.readFromNbtModifiers(entityNbt.getCompound('modifiers'))
                        }
    
                        modifierListNbt.allKeys.forEach(identifier => {
                            let attributeNbt = modifierListNbt.getCompound(identifier)
                            let amount = 0
                            if (entityModel.hasAttrModifier(identifier)) {
                                amount = entityModel.getAttrModifier(identifier).amount
                            }
                            entityModel.setAttrModifier(attributeNbt.getString('name'), identifier, amount + attributeNbt.getDouble('amount'), attributeNbt.getString('operation'))
                        })
                        entityListNbt.put(entityType, entityModel.writeAsNbt())
                    })
                    break
                case 'random':
                    if (entityListNbt.allKeys.length <= 0) return Item.of('minecraft:air')
                    targetEntityType = RandomGet(entityListNbt.allKeys)
                // 没有break，以使得进入default的通用处理逻辑
                default:
                    if (!entityListNbt.contains(targetEntityType)) return Item.of('minecraft:air')
                    let entityNbt = entityListNbt.getCompound(targetEntityType)
                    let count = entityNbt.getInt('count')
                    let entityModel = new CustomRaidEntityType(targetEntityType, count)
                    if (entityNbt.contains('modifiers')) {
                        entityModel.readFromNbtModifiers(entityNbt.getCompound('modifiers'))

                    }

                    modifierListNbt.allKeys.forEach(identifier => {
                        let attributeNbt = modifierListNbt.getCompound(identifier)
                        let amount = 0
                        if (entityModel.hasAttrModifier(identifier)) {
                            amount = entityModel.getAttrModifier(identifier).amount
                        }
                        entityModel.setAttrModifier(attributeNbt.getString('name'), identifier, amount + attributeNbt.getDouble('amount'), attributeNbt.getString('operation'))
                    })
                    entityListNbt.put(targetEntityType, entityModel.writeAsNbt())
            }

            raidBookNbt.put('entityList', entityListNbt)
            return raidBook.withNBT(raidBookNbt)
        })

})

/**
 * @param {$ItemStack} raidBook 
 * @param {$EntityType$Type<(any)>} entityType 
 * @param {Number} addCount 
 * @returns 
 */
function CustomRaidBookAddEntityCount(raidBook, entityType, addCount) {
    let raidBookNbt = raidBook.hasNBT() ? raidBook.getNbt() : new $CompoundTag()
    let entityListNbt = raidBookNbt.contains('entityList') ? raidBookNbt.getCompound('entityList') : new $CompoundTag()

    let entityModel = new CustomRaidEntityType(entityType, addCount)

    if (entityListNbt.contains(entityType)) {
        let entityNbt = entityListNbt.getCompound(entityType)
        let count = entityNbt.getInt('count')
        entityModel.setCount(count + addCount)
        if (entityNbt.contains('modifiers')) {
            entityModel.readFromNbtModifiers(entityNbt.getCompound('modifiers'))
        }
    }

    entityListNbt.put(entityType, entityModel.writeAsNbt())
    raidBookNbt.put('entityList', entityListNbt)
    return raidBook.withNBT(raidBookNbt)
}