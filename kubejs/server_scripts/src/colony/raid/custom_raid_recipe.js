// priority: 500
const { $CompoundTag } = require("packages/net/minecraft/nbt/$CompoundTag")
const { CustomRaidEntityType } = require("../../model/custom_raid_entity")
import { $EntityType$Type } from "packages/net/minecraft/world/entity/$EntityType"

// RaidBook Nbt Structure
// - entityList -> CompoundTag -> Map<Identifier, AttributeModifier>
//      - entityType -> String
//      - count -> Int
//      - modifiers -> CompoundTag -> Map<AttributeIdentifier, AttributeModifier>
//          - name -> String
//          - amount -> Double
//          - operation -> String

// RaidOrb Nbt Structure
// - count -> Int
// - customNbt -> String

// CustomRaidOrb Nbt Structure
// - entityType -> String
// - count -> Int
// - customNbt -> String

// RaidEntityModifier Nbt Structure
// - identifier -> String
// - modifiers -> CompoundTag -> Map<AttributeIdentifier, AttributeModifier>
//      - name -> String
//      - amount -> Double
//      - operation -> String

ServerEvents.recipes(event => {
    // 仅限原版生物的快捷添加方法
    ['zombie', 'skeleton', 'cave_spider', 'creeper', 'blaze', 'husk', 'pillager', 'ravager', 'evoker', 'wither_skeleton', 'vindicator'].forEach(entityType => {
        event.shapeless('kubejs:custom_raid_book', ['kubejs:custom_raid_book', `kubejs:${entityType}_orb`])
            .modifyResult((/** @type { $ModifyRecipeCraftingGrid_ }*/grid,/** @type { $ItemStack_ }*/ stack) => {
                let orb = grid.find(`kubejs:${entityType}_orb`, 0)
                let addCount = (orb.hasNBT() && orb.nbt.contains('count')) ? orb.nbt.getInt('count') : 1

                let customNbt = (orb.hasNBT() && orb.nbt.contains('customNbt')) ? NBT.toTagCompound(orb.nbt.getString('customNbt')) : new $CompoundTag()

                let raidBook = grid.find('kubejs:custom_raid_book', 0)
                return CustomRaidBookAddEntityCount(raidBook, entityType, `minecraft:${entityType}`, addCount, customNbt)
            })
    })
})

ServerEvents.recipes(event => {
    // takesapillage
    ['archer', 'legioner', 'skirmisher'].forEach(entityType => {
        event.shapeless('kubejs:custom_raid_book', ['kubejs:custom_raid_book', `kubejs:${entityType}_orb`])
            .modifyResult((/** @type { $ModifyRecipeCraftingGrid_ }*/grid,/** @type { $ItemStack_ }*/ stack) => {
                let orb = grid.find(`kubejs:${entityType}_orb`, 0)
                let addCount = (orb.hasNBT() && orb.nbt.contains('count')) ? orb.nbt.getInt('count') : 1

                let customNbt = (orb.hasNBT() && orb.nbt.contains('customNbt')) ? NBT.toTagCompound(orb.nbt.getString('customNbt')) : new $CompoundTag()

                let raidBook = grid.find('kubejs:custom_raid_book', 0)
                return CustomRaidBookAddEntityCount(raidBook, entityType, `takesapillage:${entityType}`, addCount, customNbt)
            })
    })
})

ServerEvents.recipes(event => {
    event.shapeless('kubejs:custom_raid_book', ['kubejs:custom_raid_book', `kubejs:custom_raid_orb`])
        .modifyResult((/** @type { $ModifyRecipeCraftingGrid_ }*/grid,/** @type { $ItemStack_ }*/ stack) => {
            let orb = grid.find(`kubejs:custom_raid_orb`, 0)
            if (!orb.hasNBT()) return Item.of('minecraft:air')
            if (!orb.nbt.contains('entityType')) return Item.of('minecraft:air')
            let entityType = orb.nbt.getString('entityType')
            if (!orb.nbt.contains('identifier')) return Item.of('minecraft:air')
            let entityIdentifier = orb.nbt.getString('identifier')

            let addCount = orb.nbt.contains('count') ? orb.nbt.getInt('count') : 1

            let customNbt = orb.nbt.contains('customNbt') ? NBT.toTagCompound(orb.nbt.getString('customNbt')) : new $CompoundTag()

            let raidBook = grid.find('kubejs:custom_raid_book', 0)
            return CustomRaidBookAddEntityCount(raidBook, entityIdentifier, entityType, addCount, customNbt)
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

            let targetEntityIdentifier = modifierItemNbt.contains('identifier') ? modifierItemNbt.getString('identifier') : 'random'

            let raidBook = grid.find('kubejs:custom_raid_book', 0)
            let raidBookNbt = raidBook.hasNBT() ? raidBook.getNbt() : new $CompoundTag()
            let entityListNbt = raidBookNbt.contains('entityList') ? raidBookNbt.getCompound('entityList') : new $CompoundTag()

            switch (targetEntityIdentifier) {
                case 'all':
                    if (entityListNbt.allKeys.length <= 0) return Item.of('minecraft:air')
                    let entityIdentifierList = entityListNbt.getAllKeys()
                    entityIdentifierList.forEach(entityIdentifier => {
                        CustomRaidBookEntityListNbtModifier(entityListNbt, modifierListNbt, entityIdentifier)
                    })
                    break
                case 'random':
                    if (entityListNbt.allKeys.length <= 0) return Item.of('minecraft:air')
                    targetEntityIdentifier = RandomGet(entityListNbt.allKeys)
                    CustomRaidBookEntityListNbtModifier(entityListNbt, modifierListNbt, targetEntityIdentifier)
                    break
                default:
                    if (!entityListNbt.contains(targetEntityIdentifier)) return Item.of('minecraft:air')
                    CustomRaidBookEntityListNbtModifier(entityListNbt, modifierListNbt, targetEntityIdentifier)
            }
            raidBookNbt.put('entityList', entityListNbt)
            return raidBook.withNBT(raidBookNbt)
        })

})

/**
 * @param {$CompoundTag} entityListNbt - 实体列表的 NBT 数据
 * @param {$CompoundTag} modifierListNbt - 修饰器列表的 NBT 数据
 * @param {string} entityIdentifier - 实体标识符
 * @returns {$CompoundTag} - 修改后的实体列表的 NBT 数据
 */
function CustomRaidBookEntityListNbtModifier(entityListNbt, modifierListNbt, entityIdentifier) {
    let entityNbt = entityListNbt.getCompound(entityIdentifier)
    let entityType = entityNbt.getString('entityType')
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
    entityListNbt.put(entityIdentifier, entityModel.writeAsNbt())
    return entityListNbt
}


/**
 * @param {$ItemStack} raidBook
 * @param {$EntityType$Type<(any)>} entityType 
 * @param {Number} addCount 
 * @returns 
 */
function CustomRaidBookAddEntityCount(raidBook, identifier, entityType, addCount, customNbt) {
    let raidBookNbt = raidBook.hasNBT() ? raidBook.getNbt() : new $CompoundTag()
    let entityListNbt = raidBookNbt.contains('entityList') ? raidBookNbt.getCompound('entityList') : new $CompoundTag()

    let entityModel = new CustomRaidEntityType(entityType, addCount)
    entityModel.nbt.merge(customNbt)

    if (entityListNbt.contains(identifier)) {
        let entityNbt = entityListNbt.getCompound(identifier)
        let count = entityNbt.getInt('count')
        entityModel.setCount(count + addCount)
        if (entityNbt.contains('modifiers')) {
            entityModel.readFromNbtModifiers(entityNbt.getCompound('modifiers'))
        }
    }

    entityListNbt.put(identifier, entityModel.writeAsNbt())
    raidBookNbt.put('entityList', entityListNbt)
    return raidBook.withNBT(raidBookNbt)
}