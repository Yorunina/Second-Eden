// priority: 500
const { ColonyCraftRecipes } = require("../../model/citizen_recipes_model")

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
    event.remove({ output: 'immersive_aircraft:warship' })
    
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
            [Item.of('minecraft:copper_ingot', 16), Item.of('minecraft:blast_furnace', 4)]))

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

    event.addJson(`kubejs:crafterrecipes/mechanic/cargo_airship.json`,
        new ColonyCraftRecipes('mechanic_crafting',
            Item.of('immersive_aircraft:cargo_airship'),
            [Item.of('immersive_aircraft:hull', 8), Item.of('immersive_aircraft:engine', 4), Item.of('immersive_aircraft:sail', 16), Item.of('minecraft:chest', 4)])
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
            [Item.of('kubejs:steel_ingot', 8), Item.of('immersive_aircraft:engine', 1), Item.of('minecraft:copper', 4)])
            .setResearchId('kubejs:effects/aircraftaddition', true))

    event.addJson(`kubejs:crafterrecipes/mechanic/enhanced_propeller.json`,
        new ColonyCraftRecipes('mechanic_crafting',
            Item.of('immersive_aircraft:enhanced_propeller'),
            [Item.of('kubejs:steel_ingot', 8), Item.of('immersive_aircraft:engine', 1), Item.of('immersive_aircraft:propeller', 2)])
            .setResearchId('kubejs:effects/aircraftaddition', true))

    event.addJson(`kubejs:crafterrecipes/mechanic/eco_engine.json`,
        new ColonyCraftRecipes('mechanic_crafting',
            Item.of('immersive_aircraft:eco_engine'),
            [Item.of('kubejs:steel_ingot', 4), Item.of('immersive_aircraft:engine', 1), Item.of('minecraft:copper', 16)])
            .setResearchId('kubejs:effects/aircraftaddition', true))

    event.addJson(`kubejs:crafterrecipes/mechanic/nether_engine.json`,
        new ColonyCraftRecipes('mechanic_crafting',
            Item.of('immersive_aircraft:nether_engine'),
            [Item.of('kubejs:steel_ingot', 8), Item.of('immersive_aircraft:engine', 1), Item.of('minecraft:blaze_powder', 6)])
            .setResearchId('kubejs:effects/aircraftaddition', true))

    event.addJson(`kubejs:crafterrecipes/mechanic/industrial_gears.json`,
        new ColonyCraftRecipes('mechanic_crafting',
            Item.of('immersive_aircraft:industrial_gears'),
            [Item.of('kubejs:steel_ingot', 12), Item.of('minecraft:obsidian', 1)])
            .setResearchId('kubejs:effects/aircraftaddition', true))

    event.addJson(`kubejs:crafterrecipes/blacksmith/steel_boiler.json`,
        new ColonyCraftRecipes('blacksmith_crafting',
            Item.of('immersive_aircraft:steel_boiler'),
            [Item.of('immersive_aircraft:boiler', 1), Item.of('kubejs:steel_ingot', 8), Item.of('minecraft:blaze_powder', 3)])
            .setResearchId('kubejs:effects/aircraftaddition', true))

    event.addJson(`kubejs:crafterrecipes/blacksmith/sturdy_pipes.json`,
        new ColonyCraftRecipes('blacksmith_crafting',
            Item.of('immersive_aircraft:sturdy_pipes'),
            [Item.of('kubejs:steel_ingot', 4), Item.of('minecraft:copper_ingot', 16), Item.of('minecraft:coal', 3)])
            .setResearchId('kubejs:effects/aircraftaddition', true))

    event.addJson(`kubejs:crafterrecipes/mechanic/gyroscope.json`,
        new ColonyCraftRecipes('mechanic_crafting',
            Item.of('immersive_aircraft:gyroscope'),
            [Item.of('kubejs:steel_ingot', 8), Item.of('minecraft:compass', 1), Item.of('minecraft:iron_nugget', 1)])
            .setResearchId('kubejs:effects/aircraftaddition', true))

    event.addJson(`kubejs:crafterrecipes/blacksmith/hull_reinforcement.json`,
        new ColonyCraftRecipes('blacksmith_crafting',
            Item.of('immersive_aircraft:hull_reinforcement'),
            [Item.of('kubejs:steel_ingot', 8), Item.of('immersive_aircraft:hull', 1), Item.of('minecraft:obsidian', 3)])
            .setResearchId('kubejs:effects/aircraftaddition', true))

    event.addJson(`kubejs:crafterrecipes/blacksmith/obsidian_boiler.json`,
        new ColonyCraftRecipes('blacksmith_crafting',
            Item.of('kubejs:obsidian_boiler'),
            [Item.of('kubejs:steel_ingot', 8), Item.of('immersive_aircraft:nether_engine', 1), Item.of('minecraft:obsidian', 16)])
            .setResearchId('kubejs:effects/aircraftaddition', true))

    event.addJson(`kubejs:crafterrecipes/blacksmith/linear_propulsion.json`,
        new ColonyCraftRecipes('blacksmith_crafting',
            Item.of('kubejs:linear_propulsion'),
            [Item.of('kubejs:steel_ingot', 8), Item.of('immersive_aircraft:improved_landing_gear', 1), Item.of('minecraft:quartz_block', 8)])
            .setResearchId('kubejs:effects/aircraftaddition', true))

    // 制空权
    event.addJson(`kubejs:crafterrecipes/mechanic/warship.json`,
        new ColonyCraftRecipes('mechanic_crafting',
            Item.of('immersive_aircraft:warship'),
            [Item.of('immersive_aircraft:industrial_gears', 1), Item.of('immersive_aircraft:hull_reinforcement', 4), Item.of('immersive_aircraft:engine', 4), Item.of('immersive_aircraft:sail', 4)])
            .setResearchId('kubejs:effects/airweaponpower', true))

    event.addJson(`kubejs:crafterrecipes/mechanic/rotary_cannon.json`,
        new ColonyCraftRecipes('mechanic_crafting',
            Item.of('immersive_aircraft:rotary_cannon'),
            [Item.of('minecraft:dispenser', 2), Item.of('minecraft:copper_ingot', 8), Item.of('immersive_aircraft:industrial_gears', 2)])
            .setResearchId('kubejs:effects/airweaponpower', true))

    event.addJson(`kubejs:crafterrecipes/mechanic/heavy_crossbow.json`,
        new ColonyCraftRecipes('mechanic_crafting',
            Item.of('immersive_aircraft:heavy_crossbow'),
            [Item.of('minecraft:crossbow', 1), Item.of('kubejs:steel_ingot', 4), Item.of('immersive_aircraft:industrial_gears', 1)])
            .setResearchId('kubejs:effects/airweaponpower', true))

    event.addJson(`kubejs:crafterrecipes/mechanic/telescope.json`,
        new ColonyCraftRecipes('mechanic_crafting',
            Item.of('immersive_aircraft:telescope'),
            [Item.of('minecraft:spyglass', 1), Item.of('kubejs:steel_ingot', 3), Item.of('immersive_aircraft:industrial_gears', 1)])
            .setResearchId('kubejs:effects/airweaponpower', true))

    event.addJson(`kubejs:crafterrecipes/mechanic/bomb_bay.json`,
        new ColonyCraftRecipes('mechanic_crafting',
            Item.of('immersive_aircraft:bomb_bay'),
            [Item.of('minecraft:tnt', 3), Item.of('minecraft:slime_block', 2), Item.of('kubejs:steel_ingot', 4), Item.of('immersive_aircraft:industrial_gears', 1)])
            .setResearchId('kubejs:effects/airweaponpower', true))
})