// priority: 500
const { ColonyCraftRecipes } = require("../../model/citizen_recipes_model")

ServerEvents.highPriorityData(event => {
    event.addJson(`kubejs:crafterrecipes/blacksmith/trial_key.json`,
        new ColonyCraftRecipes('blacksmith_crafting', Item.of('trials:trial_key'),
            [Item.of('minecraft:skeleton_skull'), Item.of('minecraft:copper_ingot', 6)])
            .setMinBuildingLevel(3))

    event.addJson(`kubejs:crafterrecipes/blacksmith/trial_key_3.json`,
        new ColonyCraftRecipes('blacksmith_crafting', Item.of('trials:trial_key', 3),
            [Item.of('minecraft:wither_skeleton_skull'), Item.of('minecraft:copper_ingot', 18)])
            .setMinBuildingLevel(5))

    event.addJson(`kubejs:crafterrecipes/enchanter/book_of_enlight.json`,
        new ColonyCraftRecipes('enchanter_custom', Item.of('kubejs:book_of_enlight', 1),
            [Item.of('minecraft:book'), Item.of('minecraft:glowstone_dust')])
            .setMinBuildingLevel(3))

    event.addJson(`kubejs:crafterrecipes/cursher/nether_star.json`,
        new ColonyCraftRecipes('crusher_custom', Item.of('minecraft:quartz', 64), [Item.of('minecraft:nether_star', 1)])
            .setIntermediate('minecraft:air')
            .setMinBuildingLevel(5))

    event.addJson(`kubejs:crafterrecipes/cursher/soul_soil.json`,
        new ColonyCraftRecipes('crusher_custom', Item.of('minecraft:soul_sand', 3), [Item.of('minecraft:soul_soil', 1)])
            .setIntermediate('minecraft:air'))

    event.addJson(`kubejs:crafterrecipes/cursher/echo_crystal.json`,
        new ColonyCraftRecipes('crusher_custom', Item.of('minecraft:echo_shard', 3), [Item.of('kubejs:echo_crystal', 1)])
            .setIntermediate('minecraft:air')
            .setMinBuildingLevel(3))

    event.addJson(`kubejs:crafterrecipes/cursher/prismarine.json`,
        new ColonyCraftRecipes('crusher_custom', Item.of('minecraft:prismarine_shard', 4), [Item.of('minecraft:prismarine', 1)])
            .setIntermediate('minecraft:air'))

    event.addJson(`kubejs:crafterrecipes/alchemist/oxidized_copper.json`,
        new ColonyCraftRecipes('alchemist_crafting', Item.of('minecraft:oxidized_copper', 1), [Item.of('minecraft:copper_block', 1)])
            .setIntermediate('minecraft:air'))
})
