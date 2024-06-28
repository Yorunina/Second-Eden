// priority: 500
const { ColonyResearchModel, BuildingRequirementModel, ItemRequirementModel } = require('../../model/colony_research_model')

ServerEvents.highPriorityData(event => {
    event.addJson(`kubejs:researches/technology/lanternsunlock.json`,
        new ColonyResearchModel('minecolonies:technology', 2, [
            new BuildingRequirementModel('enchanter', 1),
            new ItemRequirementModel(['minecraft:soul_lantern'], 1),
            new ItemRequirementModel(['minecraft:soul_sand'], 32),
        ])
            .setEffects([{ 'kubejs:effects/lanternsunlock': 1 }])
            .setIcon('kubejs:scroll_maid')
            .setSubtitle('com.kubejs.research.technology.lanternsunlock.subtitle')
    )
    event.addJson(`kubejs:effects/lanternsunlock.json`, { "effect": true })

})

