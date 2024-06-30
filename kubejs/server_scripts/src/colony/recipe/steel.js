// priority: 500
const { ColonyCraftRecipes } = require('../../model/citizen_recipes_model')

ServerEvents.highPriorityData(event => {
    event.addJson(`kubejs:crafterrecipes/enchanter/coal_coke.json`,
        new ColonyCraftRecipes('smelter_custom', Item.of('kubejs:coal_coke'), [Item.of('minecraft:coal', 2), Item.of('minecraft:bone_meal')])
            .setResearchId('kubejs:effects/coalcokeunlock', true))

    event.addJson(`kubejs:crafterrecipes/enchanter/steel_ingot.json`,
        new ColonyCraftRecipes('smelter_custom', Item.of('kubejs:steel_ingot'), [Item.of('minecraft:iron_ingot', 2), Item.of('kubejs:coal_coke', 2)])
            .setResearchId('kubejs:effects/steelunlock', true))
})

ServerEvents.recipes(event => {
    event.shaped('kubejs:steel_helmet', ['SSS','S S','   '], {S:'kubejs:steel_ingot'})
    event.shaped('kubejs:steel_chestplate', ['S S','SSS','SSS'], {S:'kubejs:steel_ingot'})
    event.shaped('kubejs:steel_leggings', ['SSS','S S','S S'], {S:'kubejs:steel_ingot'})
    event.shaped('kubejs:steel_boots', ['   ','S S','S S'], {S:'kubejs:steel_ingot'})
    event.shaped('kubejs:steel_pickaxe', ['SSS',' T ',' T '], {S:'kubejs:steel_ingot', T:'minecraft:stick'})
    event.shaped('kubejs:steel_axe', ['SS ','ST ',' T '], {S:'kubejs:steel_ingot', T:'minecraft:stick'})
    event.shaped('kubejs:steel_sword', [' S ',' S ',' T '], {S:'kubejs:steel_ingot', T:'minecraft:stick'})
    event.shaped('kubejs:steel_hoe', ['SS ',' T ',' T '], {S:'kubejs:steel_ingot', T:'minecraft:stick'})
    event.shaped('kubejs:steel_shovel', [' S ',' T ',' T '], {S:'kubejs:steel_ingot', T:'minecraft:stick'})
})