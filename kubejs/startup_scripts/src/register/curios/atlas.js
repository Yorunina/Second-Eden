const { COMMON, RARE, EPIC, LEGENDARY, OVERLIMIT } = require("../../utils/itemborder")

StartupEvents.registry('item', event => {
    // 初心地图册
    event.create('newer_atlas').rarity('epic').maxStackSize(1).maxDamage(3).tag('curios:atlas').tag(EPIC)
        .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
            .canEquip((item, slotContext) => onlyPlayerCanEquip(item, slotContext))
            .modifyAttribute('kubejs:treasure_fortune', 'NewerAtlasTreasureFortune', 2, 'addition')
            .modifyAttribute('kubejs:treasure_distance', 'NewerAtlasTreasureDistance', 1000, 'addition')
            .modifyAttribute('kubejs:encode_ability', 'NewerAtlasEncodeAbility', 100, 'addition')
        ).texture('kubejs:item/curios/newer_atlas')

    // 地图册
    event.create('common_atlas').rarity('common').maxStackSize(1).maxDamage(6).tag('curios:atlas').tag(COMMON)
        .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
            .canEquip((item, slotContext) => onlyPlayerCanEquip(item, slotContext))
            .modifyAttribute('kubejs:treasure_distance', 'CommonAtlasTreasureDistance', 1500, 'addition')
            .modifyAttribute('kubejs:encode_ability', 'CommonAtlasEncodeAbility', 1, 'addition')
        ).texture('kubejs:item/curios/common_atlas')

    // 高级地图册
    event.create('advanced_atlas').rarity('rare').maxStackSize(1).maxDamage(6).tag('curios:atlas').tag(RARE)
        .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
            .canEquip((item, slotContext) => onlyPlayerCanEquip(item, slotContext))
            .modifyAttribute('kubejs:treasure_distance', 'AdvancedAtlasTreasureDistance', 1500, 'addition')
            .modifyAttribute('kubejs:encode_ability', 'AdvancedAtlasEncodeAbility', 1, 'addition')
        ).texture('kubejs:item/curios/advanced_atlas')

    // 终极地图册
    event.create('ultra_atlas').rarity('epic').maxStackSize(1).maxDamage(6).tag('curios:atlas').tag(EPIC)
        .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
            .canEquip((item, slotContext) => onlyPlayerCanEquip(item, slotContext))
            .modifyAttribute('kubejs:treasure_distance', 'UltraAtlasTreasureDistance', 1500, 'addition')
            .modifyAttribute('kubejs:encode_ability', 'UltraAtlasEncodeAbility', 1, 'addition')
        ).texture('kubejs:item/curios/ultra_atlas')

    // 木材地图册
    event.create('wood_atlas').rarity('rare').maxStackSize(1).maxDamage(3).tag('curios:atlas').tag(RARE)
        .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
            .canEquip((item, slotContext) => onlyPlayerCanEquip(item, slotContext))
            .modifyAttribute('kubejs:treasure_fortune', 'WoodAtlasTreasureFortune', 2, 'addition')
            .modifyAttribute('kubejs:treasure_distance', 'WoodAtlasTreasureDistance', 800, 'addition')
        ).texture('kubejs:item/curios/wood_atlas')

    // 石材地图册
    event.create('stone_atlas').rarity('rare').maxStackSize(1).maxDamage(3).tag('curios:atlas').tag(RARE)
        .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
            .canEquip((item, slotContext) => onlyPlayerCanEquip(item, slotContext))
            .modifyAttribute('kubejs:treasure_fortune', 'WoodAtlasTreasureFortune', 2, 'addition')
            .modifyAttribute('kubejs:treasure_distance', 'WoodAtlasTreasureDistance', 800, 'addition')
        ).texture('kubejs:item/curios/stone_atlas')

    // 矿物地图册
    event.create('ore_atlas').rarity('rare').maxStackSize(1).maxDamage(3).tag('curios:atlas').tag(RARE)
        .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
            .canEquip((item, slotContext) => onlyPlayerCanEquip(item, slotContext))
            .modifyAttribute('kubejs:treasure_fortune', 'WoodAtlasTreasureFortune', 2, 'addition')
            .modifyAttribute('kubejs:treasure_distance', 'WoodAtlasTreasureDistance', 800, 'addition')
        ).texture('kubejs:item/curios/ore_atlas')

    // 食材地图册
    event.create('food_atlas').rarity('rare').maxStackSize(1).maxDamage(3).tag('curios:atlas').tag(RARE)
        .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
            .canEquip((item, slotContext) => onlyPlayerCanEquip(item, slotContext))
            .modifyAttribute('kubejs:treasure_fortune', 'WoodAtlasTreasureFortune', 2, 'addition')
            .modifyAttribute('kubejs:treasure_distance', 'WoodAtlasTreasureDistance', 800, 'addition')
        ).texture('kubejs:item/curios/food_atlas')

    // 奢侈品地图册
    event.create('luxury_atlas').rarity('rare').maxStackSize(1).maxDamage(3).tag('curios:atlas').tag(RARE)
        .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
            .canEquip((item, slotContext) => onlyPlayerCanEquip(item, slotContext))
            .modifyAttribute('kubejs:treasure_fortune', 'WoodAtlasTreasureFortune', 2, 'addition')
            .modifyAttribute('kubejs:treasure_distance', 'WoodAtlasTreasureDistance', 800, 'addition')
        ).texture('kubejs:item/curios/luxury_atlas')

    // 巨型地图册
    event.create('huge_atlas').rarity('epic').maxStackSize(1).maxDamage(6).tag(EPIC).tag('curios:atlas')
        .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
            .canEquip((item, slotContext) => onlyPlayerCanEquip(item, slotContext))
            .modifyAttribute('kubejs:treasure_fortune', 'HugeAtlasTreasureFortune', 2, 'addition')
            .modifyAttribute('kubejs:treasure_distance', 'HugeAtlasTreasureDistance', 2000, 'addition')
        ).texture('kubejs:item/curios/huge_atlas')
})
