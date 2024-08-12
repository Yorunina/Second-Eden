// priority: 500
const { ColonyCraftRecipes } = require("../../model/citizen_recipes_model")

ServerEvents.highPriorityData(event => {
    event.addJson(`kubejs:crafterrecipes/alchemist/iridium_ingot.json`,
        new ColonyCraftRecipes('alchemist_crafting', Item.of('kubejs:iridium_ingot'), [Item.of('kubejs:raw_iridium', 1), Item.of('minecraft:ender_pearl', 1), Item.of('minecolonies:magicpotion')])
            .setResearchId('kubejs:effects/iridiumunlock', true))

})

ServerEvents.recipes(event => {
    event.shaped('kubejs:iridium_helmet', ['SSS', 'S S', '   '], { S: 'kubejs:iridium_ingot' })
    event.shaped('kubejs:iridium_chestplate', ['S S', 'SSS', 'SSS'], { S: 'kubejs:iridium_ingot' })
    event.shaped('kubejs:iridium_leggings', ['SSS', 'S S', 'S S'], { S: 'kubejs:iridium_ingot' })
    event.shaped('kubejs:iridium_boots', ['   ', 'S S', 'S S'], { S: 'kubejs:iridium_ingot' })
    event.shaped('kubejs:iridium_pickaxe', ['SSS', ' T ', ' T '], { S: 'kubejs:iridium_ingot', T: 'minecraft:stick' })
    event.shaped('kubejs:iridium_axe', ['SS ', 'ST ', ' T '], { S: 'kubejs:iridium_ingot', T: 'minecraft:stick' })
    event.shaped('kubejs:iridium_sword', [' S ', ' S ', ' T '], { S: 'kubejs:iridium_ingot', T: 'minecraft:stick' })
    event.shaped('kubejs:iridium_hoe', ['SS ', ' T ', ' T '], { S: 'kubejs:iridium_ingot', T: 'minecraft:stick' })
    event.shaped('kubejs:iridium_shovel', [' S ', ' T ', ' T '], { S: 'kubejs:iridium_ingot', T: 'minecraft:stick' })

})