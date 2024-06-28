// priority: 500
const { ColonyCraftRecipes } = require('../../model/citizen_recipes_model')

ServerEvents.highPriorityData(event => {
    event.addJson(`kubejs:crafterrecipes/mechanic/airship.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('immersive_aircraft:airship'), [Item.of('minecraft:oak_wood', 16)])
            .setResearchId('minecolonies:effects/basicaircraftunlock', true))
})

