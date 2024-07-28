// priority: 500
const { ColonyCraftRecipes } = require("../../model/citizen_recipes_model")


ServerEvents.highPriorityData(event => {
    // 樱花月
    event.addJson(`kubejs:crafterrecipes/enchanter/enchanted_golden_apple.json`,
        new ColonyCraftRecipes('enchanter_custom', Item.of('minecraft:enchanted_golden_apple'), [Item.of('minecraft:golden_apple', 3), Item.of('minecraft:amethyst_shard', 1)])
            .setResearchId('kubejs:effects/resourcebee', true))
})
