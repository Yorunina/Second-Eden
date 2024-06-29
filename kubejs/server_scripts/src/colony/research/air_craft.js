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
            .setIcon('minecolonies:blockhutmechanic')
            // 机械小屋解锁前置
            .setParentResearch('minecolonies:technology/whatyaneed')
            .setSubtitle('com.kubejs.research.technology.basicaircraftunlock.subtitle')
    )
    event.addJson(`kubejs:researches/effects/basicaircraftunlock.json`, { "effect": true })
    

})
