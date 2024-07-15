// priority: 1000

import { $CompoundTag } from "packages/net/minecraft/nbt/$CompoundTag"
import { $EntityType$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $Attribute$Type } from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"

/**
 * 
 * @param {$EntityType$Type<(any)>} entityType 
 * @param {Number} count 
 */
export function CustomRaidEntityType(entityType, count) {
    this.entityType = entityType
    this.count = count
    /**@type {Map<$Attribute$Type,AttributeModifier>} */
    this.modifiers = new Map()
    this.nbt = new $CompoundTag()
}

CustomRaidEntityType.prototype = {
    /**
     * 设置该类型生物数量
     * @param {Number} count 
     * @returns {CustomRaidEntityType}
     */
    setCount(count) {
        this.count = count
        return this
    },
    /**
     * 添加该类型生物修饰符
     * @param {$Attribute$Type} name 
     * @param {String} identifier
     * @param {Number} amount 
     * @param {$AttributeModifier$Operation_} operation 
     * @returns {CustomRaidEntityType}
     */
    setAttrModifier(name, identifier, amount, operation) {
        this.modifiers.set(String(identifier), { 'name': name, 'identifier': identifier, 'amount': amount, 'operation': operation })
        return this
    },
    /**
     * @typedef {Object} AttributeModifier
     * @property {$Attribute$Type} name 
     * @property {Number} amount 
     * @property {String} identifier
     * @property {$AttributeModifier$Operation_} operation 
     */
    /**
     * 获取某个属性的修饰符
     * @param {String} identifier 
     * @returns {AttributeModifier}
     */
    getAttrModifier(identifier) {
        return this.modifiers.get(identifier)
    },
    /**
     * 是否有某个属性的修饰符
     * @param {String} identifier 
     * @returns {boolean}
     */
    hasAttrModifier(identifier) {
        return this.modifiers.has(identifier)
    },
    /**
     * 作为nbt返回
     * @returns {$CompoundTag}
     */
    writeAsNbt() {
        let modifiersNbt = new $CompoundTag()
        this.modifiers.forEach((value, key, map) => {
            modifiersNbt.put(key, {
                'name': NBT.stringTag(value.name), 'identifier': NBT.stringTag(value.identifier), 'amount': NBT.doubleTag(value.amount), 'operation': NBT.stringTag(value.operation)
            })
        })
        let nbt = NBT.toTagCompound({
            'entityType': NBT.stringTag(this.entityType),
            'count': NBT.intTag(this.count),
            'modifiers': modifiersNbt
        })
        return nbt
    },
    /**
     * 从nbt中读取modifiers并且装载
     * @param {$CompoundTag} nbt 
     * @returns {CustomRaidEntityType}
     */
    readFromNbtModifiers(nbt) {
        nbt.allKeys.forEach(key => {
            let attributeNbt = nbt.getCompound(key)
            this.setAttrModifier(attributeNbt.getString('name'), attributeNbt.getString('identifier'), attributeNbt.getDouble('amount'), attributeNbt.getString('operation'))
        })
        return this
    }
}