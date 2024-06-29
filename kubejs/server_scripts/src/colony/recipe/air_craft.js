// priority: 500
const { ColonyCraftRecipes } = require('../../model/citizen_recipes_model')

ServerEvents.recipes(event => {
    event.remove({ output: 'immersive_aircraft:boiler' })
    event.remove({ output: 'immersive_aircraft:engine' })
    event.remove({ output: 'immersive_aircraft:airship' })
    event.remove({ output: 'immersive_aircraft:cargo_airship' })
    event.remove({ output: 'immersive_aircraft:sail' })
})

ServerEvents.highPriorityData(event => {
    event.addJson(`kubejs:crafterrecipes/mechanic/boiler.json`,
        new ColonyCraftRecipes('blacksmith_crafting',
            Item.of('immersive_aircraft:boiler'),
            [Item.of('minecraft:copper_ingot', 16), Item.of('minecraft:blast_furnace', 4)])
            .setMinBuildingLevel(2))

    event.addJson(`kubejs:crafterrecipes/mechanic/engine.json`,
        new ColonyCraftRecipes('mechanic_crafting',
            Item.of('immersive_aircraft:engine'),
            [Item.of('minecraft:piston', 8), Item.of('immersive_aircraft:boiler', 4), Item.of('minecraft:netherrack', 8), Item.of('minecraft:smooth_stone', 16)])
            .setResearchId('minecolonies:effects/basicaircraftunlock', true))


    event.addJson(`kubejs:crafterrecipes/mechanic/sail.json`,
        new ColonyCraftRecipes('fletcher_crafting',
            Item.of('immersive_aircraft:sail'),
            [Item.of('minecraft:white_wool', 8), Item.of('minecraft:string', 4)]))


    event.addJson(`kubejs:crafterrecipes/mechanic/airship.json`,
        new ColonyCraftRecipes('mechanic_crafting',
            Item.of('immersive_aircraft:airship'),
            [Item.of('immersive_aircraft:hull', 8), Item.of('immersive_aircraft:engine', 4), Item.of('immersive_aircraft:sail', 16)])
            .setResearchId('minecolonies:effects/basicaircraftunlock', true))

    event.addJson(`kubejs:crafterrecipes/mechanic/cargo_airship.json`,
        new ColonyCraftRecipes('mechanic_crafting',
            Item.of('immersive_aircraft:cargo_airship'),
            [Item.of('immersive_aircraft:hull', 8), Item.of('immersive_aircraft:engine', 4), Item.of('immersive_aircraft:sail', 16), Item.of('minecraft:chest', 4)])
            .setResearchId('minecolonies:effects/basicaircraftunlock', true))
})

