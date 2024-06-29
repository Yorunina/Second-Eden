// priority: 500
const { ColonyCraftRecipes } = require('../../model/citizen_recipes_model')

ServerEvents.recipes(event => {
    event.remove({ mod: 'arcanelanterns' })
})

ServerEvents.highPriorityData(event => {
    // 基础灯笼解锁
    event.addJson(`kubejs:crafterrecipes/enchanter/cloud_lantern.json`,
        new ColonyCraftRecipes('enchanter_custom',
            Item.of('arcanelanterns:cloud_lantern'),
            [Item.of('minecraft:snow_block', 8), Item.of('minecraft:phantom_membrane', 3), Item.of('minecraft:soul_lantern', 1)])
            .setResearchId('minecolonies:effects/lanternsunlock', true))

    event.addJson(`kubejs:crafterrecipes/enchanter/boreal_lantern.json`,
        new ColonyCraftRecipes('enchanter_custom',
            Item.of('arcanelanterns:boreal_lantern'),
            [Item.of('minecraft:cobweb', 3), Item.of('minecraft:quartz', 16), Item.of('minecraft:soul_lantern', 1)])
            .setResearchId('minecolonies:effects/lanternsunlock', true))


    event.addJson(`kubejs:crafterrecipes/enchanter/warding_lantern.json`,
        new ColonyCraftRecipes('enchanter_custom',
            Item.of('arcanelanterns:warding_lantern'),
            [Item.of('minecraft:warped_fungus', 3), Item.of('minecraft:obsidian', 3), Item.of('minecraft:soul_lantern', 1)])
            .setResearchId('minecolonies:effects/lanternsunlock', true))

    event.addJson(`kubejs:crafterrecipes/enchanter/containing_lantern.json`,
        new ColonyCraftRecipes('enchanter_custom',
            Item.of('arcanelanterns:containing_lantern'),
            [Item.of('minecraft:chain', 8), Item.of('minecraft:fishing_rod', 1), Item.of('minecraft:soul_lantern', 1)])
            .setResearchId('minecolonies:effects/lanternsunlock', true))

    event.addJson(`kubejs:crafterrecipes/enchanter/feral_lantern.json`,
        new ColonyCraftRecipes('enchanter_custom',
            Item.of('arcanelanterns:feral_lantern'),
            [Item.of('minecraft:glowstone', 1), Item.of('minecraft:fire_charge', 3), Item.of('minecraft:soul_lantern', 1)])
            .setResearchId('minecolonies:effects/lanternsunlock', true))

    event.addJson(`kubejs:crafterrecipes/enchanter/wailing_lantern.json`,
        new ColonyCraftRecipes('enchanter_custom',
            Item.of('arcanelanterns:wailing_lantern'),
            [Item.of('minecraft:chain', 8), Item.of('minecraft:fishing_rod', 1), Item.of('minecraft:soul_lantern', 1)])
            .setResearchId('minecolonies:effects/lanternsunlock', true))

    event.addJson(`kubejs:crafterrecipes/enchanter/brilliant_lantern.json`,
        new ColonyCraftRecipes('enchanter_custom',
            Item.of('arcanelanterns:brilliant_lantern'),
            [Item.of('minecraft:shulker_shell', 1), Item.of('minecraft:paper', 9), Item.of('minecraft:soul_lantern', 1)])
            .setResearchId('minecolonies:effects/lanternsunlock', true))
    // 高级灯笼解锁
    event.addJson(`kubejs:crafterrecipes/enchanter/life_lantern.json`,
        new ColonyCraftRecipes('enchanter_custom',
            Item.of('arcanelanterns:life_lantern'),
            [Item.of('minecraft:golden_apple', 3), Item.of('minecraft:moss_block', 32), Item.of('minecraft:soul_lantern', 1)])
            .setResearchId('minecolonies:effects/advancedlanternsunlock', true))

    event.addJson(`kubejs:crafterrecipes/enchanter/love_lantern.json`,
        new ColonyCraftRecipes('enchanter_custom',
            Item.of('arcanelanterns:love_lantern'),
            [Item.of('minecraft:golden_carrot', 3), Item.of('minecraft:rabbit_foot', 3), Item.of('minecraft:soul_lantern', 1)])
            .setResearchId('minecolonies:effects/advancedlanternsunlock', true))

    event.addJson(`kubejs:crafterrecipes/enchanter/withering_lantern.json`,
        new ColonyCraftRecipes('enchanter_custom',
            Item.of('arcanelanterns:withering_lantern'),
            [Item.of('minecraft:wither_rose', 3), Item.of('minecraft:coal_block', 3), Item.of('minecraft:soul_lantern', 1)])
            .setResearchId('minecolonies:effects/advancedlanternsunlock', true))
})