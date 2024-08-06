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
})
