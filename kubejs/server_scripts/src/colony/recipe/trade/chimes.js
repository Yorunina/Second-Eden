// priority: 500
const { ColonyCraftRecipes } = require("../../../model/citizen_recipes_model")

ServerEvents.recipes(event => {
    // 风铃配方
    ['chimes:bamboo_chimes', 'chimes:iron_chimes', 'chimes:carved_bamboo_chimes', 'chimes:copper_chimes', 'chimes:amethyst_chimes'].forEach(item => {
        event.remove({ output: item })
    })
})


ServerEvents.highPriorityData(event => {
    event.addJson(`kubejs:crafterrecipes/sawmill/bamboo_chimes.json`,
        new ColonyCraftRecipes('sawmill_custom',
            Item.of('chimes:bamboo_chimes'),
            [Item.of('supplementaries:item_shelf', 2), Item.of('minecraft:bamboo', 6), Item.of('minecraft:lead', 1)]))

    event.addJson(`kubejs:crafterrecipes/blacksmith/iron_chimes.json`,
        new ColonyCraftRecipes('blacksmith_crafting',
            Item.of('chimes:iron_chimes'),
            [Item.of('supplementaries:item_shelf', 2), Item.of('minecraft:iron_ingot', 6), Item.of('minecraft:lead', 1)])
        .setMinBuildingLevel(3))

    event.addJson(`kubejs:crafterrecipes/fletcher/carved_bamboo_chimes.json`,
        new ColonyCraftRecipes('fletcher_crafting',
            Item.of('chimes:carved_bamboo_chimes'),
            [Item.of('chimes:bamboo_chimes', 1)])
        .setTool('knife')
        .setMinBuildingLevel(2))

    event.addJson(`kubejs:crafterrecipes/blacksmith/copper_chimes.json`,
        new ColonyCraftRecipes('blacksmith_crafting',
            Item.of('chimes:copper_chimes'),
            [Item.of('supplementaries:item_shelf', 2), Item.of('minecraft:copper_ingot', 6), Item.of('minecraft:lead', 1)]))

    event.addJson(`kubejs:crafterrecipes/enchanter/amethyst_chimes.json`,
        new ColonyCraftRecipes('enchanter_custom',
            Item.of('chimes:amethyst_chimes'),
            [Item.of('supplementaries:item_shelf', 2), Item.of('minecraft:amethyst_shard', 6), Item.of('minecraft:lead', 1)]))
})
