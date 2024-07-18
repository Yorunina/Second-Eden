// priority: 500
const { ColonyCraftRecipes } = require("../../model/citizen_recipes_model")

ServerEvents.highPriorityData(event => {
    // todo 需要测试；让染料工能够一定程度上转换木材，解决木材不统一导致的配方问题，同时降低生存压力
    ['birch', 'cherry', 'spruce', 'acacia', 'jungle', 'dark_oak', 'mangrove'].forEach(woodName => {
        event.addJson(`kubejs:crafterrecipes/dyer/${woodName}_discolored_log.json`,
            new ColonyCraftRecipes('dyer_crafting',
                Item.of('minecraft:oak_log'),
                [Item.of(`minecraft:${woodName}_log`)]))

        event.addJson(`kubejs:crafterrecipes/dyer/${woodName}_colored_log.json`,
            new ColonyCraftRecipes('dyer_crafting',
                Item.of(`minecraft:${woodName}_log`),
                [Item.of('minecraft:oak_log')]))

        event.addJson(`kubejs:crafterrecipes/dyer/${woodName}_discolored_planks.json`,
            new ColonyCraftRecipes('dyer_crafting',
                Item.of('minecraft:oak_planks'),
                [Item.of(`minecraft:${woodName}_planks`)]))

        event.addJson(`kubejs:crafterrecipes/dyer/${woodName}_colored_planks.json`,
            new ColonyCraftRecipes('dyer_crafting',
                Item.of(`minecraft:${woodName}_planks`),
                [Item.of('minecraft:oak_planks')]))
    })

})