// priority: 500
const { ColonyCraftRecipes } = require('../../model/citizen_recipes_model')

ServerEvents.recipes(event => {
    event.remove({ output: 'sophisticatedbackpacks:advanced_feeding_upgrade' })
    event.remove({ output: 'sophisticatedbackpacks:feeding_upgrade' })
    event.remove({ output: 'sophisticatedbackpacks:stack_upgrade_tier_1' })
    event.remove({ output: 'sophisticatedbackpacks:stack_upgrade_tier_2' })
    event.remove({ output: 'sophisticatedbackpacks:stack_upgrade_tier_3' })
    event.remove({ output: 'sophisticatedbackpacks:stack_upgrade_tier_4' })
})

ServerEvents.highPriorityData(event => {
    event.addJson(`kubejs:crafterrecipes/blacksmith/advanced_feeding_upgrade.json`,
        new ColonyCraftRecipes('blacksmith_crafting', Item.of('sophisticatedbackpacks:advanced_feeding_upgrade'), [Item.of('sophisticatedbackpacks:feeding_upgrade'), Item.of('minecraft:iron_ingot', 4), Item.of('minecraft:chorus_fruit', 2)])
            .setResearchId('kubejs:effects/moreusefulbackpack', true))

    event.addJson(`kubejs:crafterrecipes/blacksmith/feeding_upgrade.json`,
        new ColonyCraftRecipes('blacksmith_crafting', Item.of('sophisticatedbackpacks:feeding_upgrade'), [Item.of('minecraft:iron_ingot', 4), Item.of('minecraft:copper_ingot', 12), Item.of('sophisticatedbackpacks:upgrade_base'), Item.of('minecraft:piston', 4)])
            .setResearchId('kubejs:effects/moreusefulbackpack', true))

    event.addJson(`kubejs:crafterrecipes/blacksmith/stack_upgrade_tier_1.json`,
        new ColonyCraftRecipes('blacksmith_crafting', Item.of('sophisticatedbackpacks:stack_upgrade_tier_1'), [Item.of('minecraft:iron_ingot', 16), Item.of('minecraft:diamond', 2), Item.of('sophisticatedbackpacks:upgrade_base'), Item.of('minecraft:netherite_ingot', 1)])
            .setResearchId('kubejs:effects/moreusefulbackpack', true))
    event.addJson(`kubejs:crafterrecipes/blacksmith/stack_upgrade_tier_2.json`,
        new ColonyCraftRecipes('blacksmith_crafting', Item.of('sophisticatedbackpacks:stack_upgrade_tier_2'), [Item.of('sophisticatedbackpacks:stack_upgrade_tier_1', 4), Item.of('minecraft:diamond', 4), Item.of('minecraft:netherite_ingot', 2)])
            .setResearchId('kubejs:effects/moreusefulbackpack', true))
    event.addJson(`kubejs:crafterrecipes/blacksmith/stack_upgrade_tier_3.json`,
        new ColonyCraftRecipes('blacksmith_crafting', Item.of('sophisticatedbackpacks:stack_upgrade_tier_3'), [Item.of('sophisticatedbackpacks:stack_upgrade_tier_2', 4), Item.of('minecraft:diamond', 6), Item.of('minecraft:netherite_ingot', 3)])
            .setResearchId('kubejs:effects/moreusefulbackpack', true))
    event.addJson(`kubejs:crafterrecipes/blacksmith/stack_upgrade_tier_4.json`,
        new ColonyCraftRecipes('blacksmith_crafting', Item.of('sophisticatedbackpacks:stack_upgrade_tier_4'), [Item.of('sophisticatedbackpacks:stack_upgrade_tier_3', 4), Item.of('minecraft:diamond', 8), Item.of('minecraft:netherite_ingot', 4)])
            .setResearchId('kubejs:effects/moreusefulbackpack', true))
})

