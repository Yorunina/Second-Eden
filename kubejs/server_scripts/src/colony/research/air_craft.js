// priority: 500
const { ColonyResearchModel, BuildingRequirementModel, ItemRequirementModel } = require('../../model/colony_research_model')

ServerEvents.highPriorityData(event => {
    event.addJson(`kubejs:researches/technology/basicaircraftunlock.json`,
        new ColonyResearchModel('minecolonies:technology', 3, [
            new BuildingRequirementModel('mechanic', 1),
            new ItemRequirementModel(['minecraft:iron_block'], 8),
            new ItemRequirementModel(['minecraft:magma_cream'], 16)
        ])
            .setEffects([{ 'kubejs:effects/basicaircraftunlock': 1 }])
            .setParentResearch('minecolonies:technology/whatyaneed')
            .setSubtitle('com.kubejs.research.technology.basicaircraftunlock.subtitle')
    )
    event.addJson(`kubejs:researches/effects/basicaircraftunlock.json`, { "effect": true })
    
    event.addJson(`kubejs:researches/technology/advancedaircraftunlock.json`,
        new ColonyResearchModel('minecolonies:technology', 4, [
            new BuildingRequirementModel('mechanic', 3),
            new ItemRequirementModel(['minecraft:iron_block'], 8),
            new ItemRequirementModel(['minecraft:magma_cream'], 16)
        ])
            .setEffects([{ 'kubejs:effects/advancedaircraftunlock': 1 }])
            .setParentResearch('minecolonies:technology/whatyaneed')
            .setSubtitle('com.kubejs.research.technology.advancedaircraftunlock.subtitle')
    )
    event.addJson(`kubejs:researches/effects/advancedaircraftunlock.json`, { "effect": true })
    
    event.addJson(`kubejs:researches/technology/aircraftaddition.json`,
        new ColonyResearchModel('minecolonies:technology', 4, [
            new BuildingRequirementModel('blacksmith', 4),
            new ItemRequirementModel(['minecraft:iron_block'], 8),
            new ItemRequirementModel(['minecraft:magma_cream'], 16)
        ])
            .setEffects([{ 'kubejs:effects/aircraftaddition': 1 }])
            .setParentResearch('minecolonies:technology/whatyaneed')
            .setSubtitle('com.kubejs.research.technology.aircraftaddition.subtitle')
    )
    event.addJson(`kubejs:researches/effects/aircraftaddition.json`, { "effect": true })

})
