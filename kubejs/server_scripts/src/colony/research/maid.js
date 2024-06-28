// priority: 500
const { ColonyResearchModel, BuildingRequirementModel, ItemRequirementModel } = require('../../model/colony_research_model')

ServerEvents.highPriorityData(event => {
    event.addJson(`kubejs:researches/technology/scrollmaidunlock.json`,
        new ColonyResearchModel('minecolonies:technology', 2, [
            new BuildingRequirementModel('enchanter', 3),
            new ItemRequirementModel(['minecraft:soul_lantern'], 1),
            new ItemRequirementModel(['minecraft:bone_block'], 32),
            new ItemRequirementModel(['minecraft:magma_cream'], 16),
        ])
            .setEffects([{ 'kubejs:effects/scrollmaidunlock': 1 }])
            .setIcon('kubejs:scroll_maid')
            .setSubtitle('com.kubejs.research.technology.scrollmaidunlock.subtitle')
    )
    event.addJson(`kubejs:effects/scrollmaidunlock.json`, { "effect": true })

})