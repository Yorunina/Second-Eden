// priority: 500
const { ColonyCraftRecipes } = require('../../model/citizen_recipes_model')

ServerEvents.highPriorityData(event => {
    event.addJson(`kubejs:crafterrecipes/enchanter/life_lantern.json`,
        new ColonyCraftRecipes('enchanter_custom', Item.of('arcanelanterns:life_lantern'), [Item.of('minecraft:soul_lantern'), Item.of('minecraft:soul_sand', 16)])
            .setResearchId('minecolonies:effects/lanternsunlock', true))
})

