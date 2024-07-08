// priority: 500
const { ColonyCraftRecipes } = require("../../model/citizen_recipes_model")

ServerEvents.highPriorityData(event => {
    event.addJson(`kubejs:crafterrecipes/enchanter/scroll_maid.json`,
        new ColonyCraftRecipes('enchanter_custom', Item.of('touhou_little_maid:entity_placeholder', '{RecipeId:"touhou_little_maid:altar/spawn_box"}'), [Item.of('minecraft:heart_of_the_sea'), Item.of('minecraft:rotten_flesh', 16)])
            .setResearchId('kubejs:effects/scrollmaidunlock', true))
})