const { EPIC } = require("../../utils/itemborder")

ItemEvents.toolTierRegistry(event => {
    event.add('iridium', tier => {
        tier.uses = 3000
        tier.speed = 9
        tier.attackDamageBonus = 6
        tier.level = 4
        tier.enchantmentValue = 18
        tier.repairIngredient = 'kubejs:iridium_ingot'
    })
})

StartupEvents.registry('block', event => {
    event.create('iridium_block', 'basic')
        .material('netherite_block')
        .soundType("netherite_block")
        .textureAll('kubejs:block/iridium_block')
        .resistance(3000)
        .hardness(8)
        .requiresTool(true)
        .tagBlock('minecraft:mineable/pickaxe')
})


StartupEvents.registry('item', event => {
    event.create('iridium_ingot', 'basic').texture('kubejs:item/iridium_ingot')
})

ItemEvents.armorTierRegistry(event => {
    event.add('iridium', tier => {
        tier.durabilityMultiplier = 60
        tier.slotProtections = [3, 6, 8, 3]
        tier.enchantmentValue = 18
        tier.equipSound = 'minecraft:item.armor.equip_iron'
        tier.toughness = 1.5
        tier.knockbackResistance = 0.05
        tier.repairIngredient = 'kubejs:iridium_ingot'
    })
})

StartupEvents.registry('item', event => {

    event.create('iridium_helmet', 'helmet').texture('kubejs:item/iridium_helmet').tier('iridium').tag('minecraft:trimmable_armor').rarity('epic').tag(EPIC)
    event.create('iridium_chestplate', 'chestplate').texture('kubejs:item/iridium_chestplate').tier('iridium').tag('minecraft:trimmable_armor').rarity('epic').tag(EPIC)
    event.create('iridium_leggings', 'leggings').texture('kubejs:item/iridium_leggings').tier('iridium').tag('minecraft:trimmable_armor').rarity('epic').tag(EPIC)
    event.create('iridium_boots', 'boots').texture('kubejs:item/iridium_boots').tier('iridium').tag('minecraft:trimmable_armor').rarity('epic').tag(EPIC)

    event.create('iridium_sword', 'sword').tag('minecraft:swords').tag('forge:tools').tag('minecraft:tools').texture('kubejs:item/iridium_sword').tier('iridium').rarity('epic').tag(EPIC)

    event.create('iridium_pickaxe', 'pickaxe').tag('minecraft:pickaxes').tag('travelersbackpack:acceptable_tools').tag('forge:tools').tag('forge:tools/pickaxes').tag('minecraft:tools').texture('kubejs:item/iridium_pickaxe').tier('iridium').rarity('epic').tag(EPIC)
    event.create('iridium_axe', 'axe').tag('minecraft:axes').tag('forge:tools').tag('forge:tools/axes').tag('minecraft:tools').texture('kubejs:item/iridium_axe').tier('iridium').rarity('epic').tag(EPIC)
    event.create('iridium_hoe', 'hoe').tag('minecraft:hoes').tag('forge:tools').tag('forge:tools/hoes').tag('minecraft:tools').texture('kubejs:item/iridium_hoe').tier('iridium').rarity('epic').tag(EPIC)
    event.create('iridium_shovel', 'shovel').tag('minecraft:shovels').tag('forge:tools').tag('forge:tools/shovels').tag('minecraft:tools').texture('kubejs:item/iridium_shovel').tier('iridium').rarity('epic').tag(EPIC)

    event.create('raw_iridium', 'basic').texture('kubejs:item/raw_iridium').rarity('epic').tag(EPIC)
})