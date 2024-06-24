const { $EntityType } = require("packages/net/minecraft/world/entity/$EntityType")
const { $RangedAttribute } = require("packages/net/minecraft/world/entity/ai/attributes/$RangedAttribute")
const { $ForgeRegistries } = require("packages/net/minecraftforge/registries/$ForgeRegistries")

StartupEvents.registry("attribute", event => {
    /**
     * 宝藏距离：玩家使用宝藏能力时，出现宝藏的距离系数。
     */
    event.createCustom("kubejs:treasure_distance", () => new $RangedAttribute("attribute.kubejs.treasure_distance", 0, 0, 65535).setSyncable(true))
    /**
     * 宝藏幸运：玩家使用宝藏能力时，出现宝藏的稀有度描述系数。
     */
    event.createCustom("kubejs:treasure_fortune", () => new $RangedAttribute("attribute.kubejs.treasure_fortune", 0, 0, 1024).setSyncable(true))
    /**
     * 教育能力：在主动提高殖民地工人能力时，能力提升的系数
     */
    event.createCustom("kubejs:education_ability", () => new $RangedAttribute("attribute.kubejs.education_ability", 0, 0, 1024).setSyncable(true))
    /**
     * 解密能力：在他人使用空投、宝藏能力时，监听到事件的概率
     */
    event.createCustom("kubejs:decode_ability", () => new $RangedAttribute("attribute.kubejs.decode_ability", 0, 0, 128).setSyncable(true))
    /**
     * 加密能力：减少他人监听到自己使用空投能力的概率
     */
    event.createCustom("kubejs:encode_ability", () => new $RangedAttribute("attribute.kubejs.encode_ability", 0, 0, 128).setSyncable(true))
})

ForgeModEvents.onEvent("net.minecraftforge.event.entity.EntityAttributeModificationEvent", event => {
    event.add($EntityType.PLAYER, "kubejs:treasure_distance")
    event.add($EntityType.PLAYER, "kubejs:treasure_fortune")
    event.add($EntityType.PLAYER, "kubejs:education_ability")
    event.add($EntityType.PLAYER, "kubejs:decode_ability")
    event.add($EntityType.PLAYER, "kubejs:encode_ability")
})


/**
 * @param {Special.Attribute} attributeId
 */
function getAttribute(attributeId) {
    return $ForgeRegistries.ATTRIBUTES.getValue(attributeId) ?? null
}

