const { OVERLIMIT, OVERLIMIT } = require("../../utils/itemborder")

ItemEvents.toolTierRegistry(event => {
    event.add('neutron', tier => {
        tier.uses = 15000
        tier.speed = 5
        tier.attackDamageBonus = 16
        tier.level = 4
        tier.enchantmentValue = 20
        tier.repairIngredient = 'kubejs:neutron_ingot'
    })
})

StartupEvents.registry('block', event => {
    event.create('neutron_block', 'basic')
        .soundType("netherite_block")
        .textureAll('kubejs:block/neutron_block')
        .resistance(8000)
        .hardness(20)
        .requiresTool(true)
        .tagBlock('minecraft:mineable/pickaxe')
})

StartupEvents.registry('item', event => {
    event.create('neutron_ingot', 'basic').tag(OVERLIMIT).texture('kubejs:item/neutron_ingot')
    event.create('neutron_nugget', 'basic').maxStackSize(64).tag(OVERLIMIT).texture('kubejs:item/neutron_nugget')
    event.create('neutron_pile', 'basic').maxStackSize(64).tag(OVERLIMIT).texture('kubejs:item/neutron_pile')
})

ItemEvents.armorTierRegistry(event => {
    event.add('neutron', tier => {
        tier.durabilityMultiplier = 300
        tier.slotProtections = [7, 10, 12, 5]
        tier.enchantmentValue = 20
        tier.equipSound = 'minecraft:item.armor.equip_iron'
        tier.toughness = 1.5
        tier.knockbackResistance = 0.05
        tier.repairIngredient = 'kubejs:neutron_ingot'
    })
})

StartupEvents.registry('item', event => {
    event.create('neutron_helmet', 'helmet').texture('kubejs:item/neutron_helmet').tier('neutron').tag('minecraft:trimmable_armor').tag(OVERLIMIT)
    event.create('neutron_chestplate', 'chestplate').texture('kubejs:item/neutron_chestplate').tier('neutron').tag('minecraft:trimmable_armor').tag(OVERLIMIT)
    event.create('neutron_leggings', 'leggings').texture('kubejs:item/neutron_leggings').tier('neutron').tag('minecraft:trimmable_armor').tag(OVERLIMIT)
    event.create('neutron_boots', 'boots').texture('kubejs:item/neutron_boots').tier('neutron').tag('minecraft:trimmable_armor').tag(OVERLIMIT)

    event.create('neutron_sword', 'sword').tag('minecraft:swords').tag('forge:tools').tag('minecraft:tools').texture('kubejs:item/neutron_sword').tier('neutron').tag(OVERLIMIT)

    event.create('neutron_pickaxe', 'pickaxe').tag('minecraft:pickaxes').tag('travelersbackpack:acceptable_tools').tag('forge:tools').tag('forge:tools/pickaxes').tag('minecraft:tools').texture('kubejs:item/neutron_pickaxe').tier('neutron').tag(OVERLIMIT)
    event.create('neutron_axe', 'axe').tag('minecraft:axes').tag('forge:tools').tag('forge:tools/axes').tag('minecraft:tools').texture('kubejs:item/neutron_axe').tier('neutron').tag(OVERLIMIT)
    event.create('neutron_hoe', 'hoe').tag('minecraft:hoes').tag('forge:tools').tag('forge:tools/hoes').tag('minecraft:tools').texture('kubejs:item/neutron_hoe').tier('neutron').tag(OVERLIMIT)
    event.create('neutron_shovel', 'shovel').tag('minecraft:shovels').tag('forge:tools').tag('forge:tools/shovels').tag('minecraft:tools').texture('kubejs:item/neutron_shovel').tier('neutron').tag(OVERLIMIT)
})