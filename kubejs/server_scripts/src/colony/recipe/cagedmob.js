// priority: 500
const { ColonyCraftRecipes } = require("../../model/citizen_recipes_model")

ServerEvents.recipes(event => {
    event.remove({ output: 'cagedmobs:mob_cage' })
    event.remove({ output: 'cagedmobs:hopping_mob_cage' })
    event.remove({ output: 'cagedmobs:speed_i_upgrade' })
    event.remove({ output: 'cagedmobs:speed_ii_upgrade' })
    event.remove({ output: 'cagedmobs:speed_iii_upgrade' })
    event.remove({ output: 'cagedmobs:looting_upgrade' })
    event.remove({ output: 'cagedmobs:arrow_upgrade' })
    event.remove({ output: 'cagedmobs:cooking_upgrade' })
    event.remove({ output: 'cagedmobs:lightning_upgrade' })
    event.remove({ output: 'cagedmobs:experience_upgrade' })
})

ServerEvents.highPriorityData(event => {
    event.addJson(`kubejs:crafterrecipes/blacksmith/mob_cage.json`,
        new ColonyCraftRecipes('blacksmith_crafting', Item.of('cagedmobs:mob_cage'),
            [Item.of('minecraft:iron_block', 3), Item.of('minecraft:iron_bars', 6), Item.of('minecraft:chain', 9), Item.of('graveyard:soul_fire_brazier')])
            .setResearchId('kubejs:effects/locksoulincage', true))

    event.addJson(`kubejs:crafterrecipes/blacksmith/hopping_mob_cage.json`,
        new ColonyCraftRecipes('blacksmith_crafting', Item.of('cagedmobs:hopping_mob_cage'),
            [Item.of('cagedmobs:mob_cage', 1), Item.of('minecraft:hopper', 1), Item.of('minecraft:iron_ingot', 4)])
            .setResearchId('kubejs:effects/hoppingcage', true))

    event.addJson(`kubejs:crafterrecipes/mechanic/speed_i_upgrade.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('cagedmobs:speed_i_upgrade'),
            [Item.of('minecraft:netherite_ingot', 2), Item.of('minecraft:blackstone', 3), Item.of('minecraft:quartz_block', 1), Item.of('minecraft:coal_block', 3)])
            .setResearchId('kubejs:effects/morepowerfulcage', true))

    event.addJson(`kubejs:crafterrecipes/mechanic/speed_ii_upgrade.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('cagedmobs:speed_ii_upgrade'),
            [Item.of('cagedmobs:speed_i_upgrade', 1), Item.of('minecraft:blackstone', 3), Item.of('minecraft:nether_star', 3)])
            .setResearchId('kubejs:effects/morepowerfulcage', true))

    event.addJson(`kubejs:crafterrecipes/mechanic/speed_iii_upgrade.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('cagedmobs:speed_iii_upgrade'),
            [Item.of('cagedmobs:speed_ii_upgrade', 1), Item.of('minecraft:blackstone', 3), Item.of('cagedmobs:warden_receptor', 3)])
            .setResearchId('kubejs:effects/morepowerfulcage', true))

    event.addJson(`kubejs:crafterrecipes/mechanic/looting_upgrade.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('cagedmobs:looting_upgrade'),
            [Item.of('minecraft:enchanting_table', 1), Item.of('minecraft:emerald_block', 4), Item.of('minecraft:blackstone', 3), Item.of('minecraft:quartz_block', 1)])
            .setResearchId('kubejs:effects/morepowerfulcage', true))

    event.addJson(`kubejs:crafterrecipes/mechanic/arrow_upgrade.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('cagedmobs:arrow_upgrade'),
            [Item.of('minecraft:dispenser', 1), Item.of('minecraft:skeleton_skull', 1), Item.of('minecraft:blackstone', 3), Item.of('minecraft:quartz_block', 1)])
            .setResearchId('kubejs:effects/morepowerfulcage', true))

    event.addJson(`kubejs:crafterrecipes/mechanic/cooking_upgrade.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('cagedmobs:cooking_upgrade'),
            [Item.of('minecraft:campfire', 1), Item.of('minecraft:coal_block', 4), Item.of('minecraft:blackstone', 3), Item.of('minecraft:quartz_block', 1)])
            .setResearchId('kubejs:effects/morepowerfulcage', true))

    event.addJson(`kubejs:crafterrecipes/mechanic/lightning_upgrade.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('cagedmobs:lightning_upgrade'),
            [Item.of('minecraft:shulker_shell', 1), Item.of('minecraft:end_rod', 1), Item.of('minecraft:phantom_membrane', 3), Item.of('minecraft:quartz_block', 1)])
            .setResearchId('kubejs:effects/morepowerfulcage', true))

    event.addJson(`kubejs:crafterrecipes/mechanic/experience_upgrade.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('cagedmobs:experience_upgrade'),
            [Item.of('minecraft:glass_bottle', 1), Item.of('minecraft:lime_stained_glass', 4), Item.of('minecraft:blackstone', 3), Item.of('minecraft:emerald_block', 1)])
            .setResearchId('kubejs:effects/morepowerfulcage', true))
})
