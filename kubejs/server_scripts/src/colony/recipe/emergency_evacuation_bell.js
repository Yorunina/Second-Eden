// priority: 500
const { ColonyCraftRecipes } = require("../../model/citizen_recipes_model")

ServerEvents.highPriorityData(event => {
    event.addJson(`kubejs:crafterrecipes/blacksmith/emergency_evacuation_bell.json`,
        new ColonyCraftRecipes('blacksmith_crafting',
            Item.of('kubejs:emergency_evacuation_bell'),
            [Item.of('minecraft:copper_ingot', 4), Item.of('minecraft:bell', 1)])
            .setResearchId('kubejs:effects/eebunlock', true))

})