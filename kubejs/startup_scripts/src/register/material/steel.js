const { RARE } = require("../../utils/itemborder")

ItemEvents.toolTierRegistry(event => {
    event.add('steel', tier => {
        tier.uses = 1200
        tier.speed = 7
        tier.attackDamageBonus = 3
        tier.level = 3
        tier.enchantmentValue = 10
        tier.repairIngredient = 'kubejs:steel_ingot'
    })
})

StartupEvents.registry('block', event => {
    event.create('steel_block', 'basic')
        .tag(RARE)
        .soundType("netherite_block")
        .textureAll('kubejs:block/steel_block')
        .resistance(1500)
        .hardness(6)
        .requiresTool(true)
        .tagBlock('minecraft:mineable/pickaxe')
})


StartupEvents.registry('item', event => {
    event.create('steel_ingot', 'basic').tag(RARE).tag('forge:ingots/titanium').texture('kubejs:item/steel_ingot')
})

ItemEvents.armorTierRegistry(event => {
    event.add('steel', tier => {
        tier.durabilityMultiplier = 40
        tier.slotProtections = [2, 5, 7, 2]
        tier.enchantmentValue = 10
        tier.equipSound = 'minecraft:item.armor.equip_iron'
        tier.toughness = 1.0
        tier.knockbackResistance = 0.0
        tier.repairIngredient = 'kubejs:steel_ingot'
    })
})

StartupEvents.registry('item', event => {

    event.create('steel_helmet', 'helmet').texture('kubejs:item/steel_helmet').tier('steel').tag('minecraft:trimmable_armor').tag(RARE)
    event.create('steel_chestplate', 'chestplate').texture('kubejs:item/steel_chestplate').tier('steel').tag('minecraft:trimmable_armor').tag(RARE)
    event.create('steel_leggings', 'leggings').texture('kubejs:item/steel_leggings').tier('steel').tag('minecraft:trimmable_armor').tag(RARE)
    event.create('steel_boots', 'boots').texture('kubejs:item/steel_boots').tier('steel').tag('minecraft:trimmable_armor').tag(RARE)

    event.create('steel_sword', 'sword').tag('minecraft:swords').tag('forge:tools').tag(RARE).tag('minecraft:tools').texture('kubejs:item/steel_sword').tier('steel')

    event.create('steel_pickaxe', 'pickaxe').tag('minecraft:pickaxes').tag('forge:tools').tag('forge:tools/pickaxes').tag('minecraft:tools').texture('kubejs:item/steel_pickaxe').tier('steel').tag(RARE)
    event.create('steel_axe', 'axe').tag('minecraft:axes').tag('forge:tools').tag('forge:tools/axes').tag('minecraft:tools').texture('kubejs:item/steel_axe').tier('steel').tag(RARE)
    event.create('steel_hoe', 'hoe').tag('minecraft:hoes').tag('forge:tools').tag('forge:tools/hoes').tag('minecraft:tools').texture('kubejs:item/steel_hoe').tier('steel').tag(RARE)
    event.create('steel_shovel', 'shovel').tag('minecraft:shovels').tag('forge:tools').tag('forge:tools/shovels').tag('minecraft:tools').texture('kubejs:item/steel_shovel').tier('steel').tag(RARE)

})