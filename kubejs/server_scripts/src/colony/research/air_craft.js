// priority: 500
const { ColonyResearchModel, BuildingRequirementModel, ItemRequirementModel } = require("../../model/colony_research_model")

ServerEvents.highPriorityData(event => {
    event.addJson(`kubejs:researches/technology/basicaircraftunlock.json`,
        new ColonyResearchModel('minecolonies:technology', 3, [
            new BuildingRequirementModel('mechanic', 1),
            new ItemRequirementModel(['minecraft:piston'], 32),
            new ItemRequirementModel(['minecraft:blaze_powder'], 16)
        ])
            .setEffects([{ 'kubejs:effects/basicaircraftunlock': 1 }])
            .setParentResearch('minecolonies:technology/whatyaneed')
            .setSubtitle('com.kubejs.research.technology.basicaircraftunlock.subtitle')
    )
    event.addJson(`kubejs:researches/effects/basicaircraftunlock.json`, { "effect": true })
    
    event.addJson(`kubejs:researches/technology/advancedaircraftunlock.json`,
        new ColonyResearchModel('minecolonies:technology', 4, [
            new BuildingRequirementModel('mechanic', 3),
            new ItemRequirementModel(['immersive_aircraft:engine'], 16),
            new ItemRequirementModel(['immersive_aircraft:cargo_airship'], 3)
        ])
            .setEffects([{ 'kubejs:effects/advancedaircraftunlock': 1 }])
            .setParentResearch('kubejs:technology/basicaircraftunlock')
            .setSubtitle('com.kubejs.research.technology.advancedaircraftunlock.subtitle')
    )
    event.addJson(`kubejs:researches/effects/advancedaircraftunlock.json`, { "effect": true })
    
    event.addJson(`kubejs:researches/technology/aircraftaddition.json`,
        new ColonyResearchModel('minecolonies:technology', 4, [
            new BuildingRequirementModel('blacksmith', 4),
            new ItemRequirementModel(['immersive_aircraft:boiler'], 16),
            new ItemRequirementModel(['minecraft:copper_ingot'], 64)
        ])
            .setEffects([{ 'kubejs:effects/aircraftaddition': 1 }])
            .setParentResearch('kubejs:technology/basicaircraftunlock')
            .setSubtitle('com.kubejs.research.technology.aircraftaddition.subtitle')
    )
    event.addJson(`kubejs:researches/effects/aircraftaddition.json`, { "effect": true })

    event.addJson(`kubejs:researches/technology/airweaponpower.json`,
        new ColonyResearchModel('minecolonies:technology', 5, [
            new BuildingRequirementModel('blacksmith', 5),
            new ItemRequirementModel(['minecraft:crossbow'], 3),
            new ItemRequirementModel(['immersive_aircraft:nether_engine'], 16)
        ])
            .setEffects([{ 'kubejs:effects/airweaponpower': 1 }])
            .setParentResearch('kubejs:technology/aircraftaddition')
            .setSubtitle('com.kubejs.research.technology.airweaponpower.subtitle')
    )
    event.addJson(`kubejs:researches/effects/airweaponpower.json`, { "effect": true })
})