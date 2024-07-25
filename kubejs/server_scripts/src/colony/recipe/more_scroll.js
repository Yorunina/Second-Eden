// priority: 500
const { ColonyCraftRecipes } = require("../../model/citizen_recipes_model")

ServerEvents.highPriorityData(event => {
    event.addJson(`kubejs:crafterrecipes/enchanter/disband_canes.json`,
        new ColonyCraftRecipes('enchanter_custom', Item.of('kubejs:disband_canes'), [Item.of('minecraft:iron_ingot', 3), Item.of('minecolonies:scroll_area_tp')])
            .setResearchId('minecolonies:effects/morescrollsunlock', true))
})