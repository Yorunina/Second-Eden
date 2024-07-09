// priority: 500
const { ColonyCraftRecipes } = require("../../model/citizen_recipes_model")

ServerEvents.recipes(event => {
    event.remove({ mod: 'waystones' })
})

ServerEvents.highPriorityData(event => {
    // todo 配方锁
    event.addJson(`kubejs:crafterrecipes/enchanter/coal_coke.json`,
        new ColonyCraftRecipes('enchanter_custom', Item.of('waystones:warp_stone'), [Item.of('minecraft:coal', 2), Item.of('minecraft:bone_meal')])
            .setResearchId('kubejs:effects/waystonesunlock', true))

})