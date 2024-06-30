// priority: 500
const { ColonyCraftRecipes } = require('../../model/citizen_recipes_model')

ServerEvents.recipes(event => {
    event.remove({ output: 'immersive_aircraft:boiler' })
    event.remove({ output: 'immersive_aircraft:engine' })
    event.remove({ output: 'immersive_aircraft:airship' })
    event.remove({ output: 'immersive_aircraft:cargo_airship' })
    event.remove({ output: 'immersive_aircraft:sail' })

    event.remove({ output: 'immersive_aircraft:propeller' })
    event.remove({ output: 'immersive_aircraft:quadrocopter' })
    event.remove({ output: 'immersive_aircraft:biplane' })
    event.remove({ output: 'immersive_aircraft:gyrodyne' })

    event.remove({ output: 'immersive_aircraft:improved_landing_gear' })
    event.remove({ output: 'immersive_aircraft:enhanced_propeller' })
    event.remove({ output: 'immersive_aircraft:eco_engine' })
    event.remove({ output: 'immersive_aircraft:nether_engine' })
    event.remove({ output: 'immersive_aircraft:industrial_gears' })
    event.remove({ output: 'immersive_aircraft:steel_boiler' })
    event.remove({ output: 'immersive_aircraft:sturdy_pipes' })
    event.remove({ output: 'immersive_aircraft:gyroscope' })
    event.remove({ output: 'immersive_aircraft:hull_reinforcement' })
})

ServerEvents.highPriorityData(event => {
    // 基础航空学
    event.addJson(`kubejs:crafterrecipes/blacksmith/boiler.json`,
        new ColonyCraftRecipes('blacksmith_crafting',
            Item.of('immersive_aircraft:boiler'),
            [Item.of('minecraft:copper_ingot', 16), Item.of('minecraft:blast_furnace', 4)])
            .setMinBuildingLevel(2))

    event.addJson(`kubejs:crafterrecipes/mechanic/engine.json`,
        new ColonyCraftRecipes('mechanic_crafting',
            Item.of('immersive_aircraft:engine'),
            [Item.of('minecraft:piston', 8), Item.of('immersive_aircraft:boiler', 4), Item.of('minecraft:netherrack', 8), Item.of('minecraft:smooth_stone', 16)])
            .setResearchId('kubejs:effects/basicaircraftunlock', true))

    event.addJson(`kubejs:crafterrecipes/fletcher/sail.json`,
        new ColonyCraftRecipes('fletcher_crafting',
            Item.of('immersive_aircraft:sail'),
            [Item.of('minecraft:white_wool', 8), Item.of('minecraft:string', 4)]))

    event.addJson(`kubejs:crafterrecipes/mechanic/airship.json`,
        new ColonyCraftRecipes('mechanic_crafting',
            Item.of('immersive_aircraft:airship'),
            [Item.of('immersive_aircraft:hull', 8), Item.of('immersive_aircraft:engine', 4), Item.of('immersive_aircraft:sail', 16)])
            .setResearchId('kubejs:effects/basicaircraftunlock', true))

    // 先进航空学
    event.addJson(`kubejs:crafterrecipes/blacksmith/propeller.json`,
        new ColonyCraftRecipes('blacksmith_crafting',
            Item.of('immersive_aircraft:propeller'),
            [Item.of('minecraft:iron_ingot', 16), Item.of('minecraft:copper_ingot', 4)])
            .setResearchId('kubejs:effects/advancedaircraftunlock', true))

    event.addJson(`kubejs:crafterrecipes/mechanic/quadrocopter.json`,
        new ColonyCraftRecipes('mechanic_crafting',
            Item.of('immersive_aircraft:quadrocopter'),
            [Item.of('immersive_aircraft:propeller', 4), Item.of('immersive_aircraft:engine', 4), Item.of('minecraft:bamboo', 16)])
            .setResearchId('kubejs:effects/advancedaircraftunlock', true))

    event.addJson(`kubejs:crafterrecipes/mechanic/biplane.json`,
        new ColonyCraftRecipes('mechanic_crafting',
            Item.of('immersive_aircraft:biplane'),
            [Item.of('immersive_aircraft:propeller', 1), Item.of('immersive_aircraft:engine', 4), Item.of('immersive_aircraft:hull', 8)])
            .setResearchId('kubejs:effects/advancedaircraftunlock', true))

    event.addJson(`kubejs:crafterrecipes/mechanic/gyrodyne.json`,
        new ColonyCraftRecipes('mechanic_crafting',
            Item.of('immersive_aircraft:gyrodyne'),
            [Item.of('immersive_aircraft:hull', 8), Item.of('immersive_aircraft:engine', 4), Item.of('immersive_aircraft:sail', 4), Item.of('immersive_aircraft:propeller', 1)])
            .setResearchId('kubejs:effects/advancedaircraftunlock', true))
    
    // 模块化航空
    event.addJson(`kubejs:crafterrecipes/blacksmith/improved_landing_gear.json`,
        new ColonyCraftRecipes('blacksmith_crafting',
            Item.of('immersive_aircraft:improved_landing_gear'),
            [Item.of('immersive_aircraft:hull', 8), Item.of('immersive_aircraft:engine', 4), Item.of('immersive_aircraft:sail', 4), Item.of('immersive_aircraft:propeller', 1)])
            .setResearchId('kubejs:effects/aircraftaddition', true))
})