// priority: 500
const { ColonyResearchModel, BuildingRequirementModel, ItemRequirementModel } = require('../../model/colony_research_model')

ServerEvents.highPriorityData(event => {
    event.addJson(`kubejs:researches/technology/basicaircraftunlock.json`,
        new ColonyResearchModel('minecolonies:technology', 2, [
            new BuildingRequirementModel('mechanic', 1),
            new ItemRequirementModel(['minecraft:iron_block'], 8),
            new ItemRequirementModel(['minecraft:magma_cream'], 16)
        ])
            .setEffects([{ 'kubejs:effects/basicaircraftunlock': 1 }])
            .setIcon('immersive_aircraft:airship')
            .setSubtitle('com.kubejs.research.technology.basicaircraftunlock.subtitle')
    )
    event.addJson(`kubejs:effects/basicaircraftunlock.json`, { "effect": true })
    

})
