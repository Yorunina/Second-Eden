// priority: 500
const { ColonyResearchModel, BuildingRequirementModel, ItemRequirementModel } = require('../../model/colony_research_model')

ServerEvents.highPriorityData(event => {
    event.addJson(`kubejs:researches/civilian/moreusefulbackpack.json`,
        new ColonyResearchModel('minecolonies:civilian', 2, [
            new BuildingRequirementModel('hospital', 1),
            new ItemRequirementModel(['minecraft:soul_lantern'], 1),
            new ItemRequirementModel(['minecraft:bone_block'], 32),
            new ItemRequirementModel(['minecraft:magma_cream'], 16),
        ])
            .setEffects([{ 'kubejs:effects/moreusefulbackpack': 1 }])
            .setParentResearch('minecolonies:civilian/firstaid')
            .setSubtitle('com.kubejs.research.civilian.moreusefulbackpack.subtitle')
    )
    event.addJson(`kubejs:researches/effects/moreusefulbackpack.json`, { "effect": true })
})