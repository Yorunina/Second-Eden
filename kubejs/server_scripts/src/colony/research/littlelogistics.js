// priority: 500
const { ColonyResearchModel, BuildingRequirementModel, ItemRequirementModel } = require("../../model/colony_research_model")

ServerEvents.highPriorityData(event => {
    event.addJson(`kubejs:researches/civilian/littlelogisticsunlock.json`,
        new ColonyResearchModel('minecolonies:civilian', 3, [
            new BuildingRequirementModel('mechanic', 1),
            new ItemRequirementModel(['minecraft:soul_lantern'], 1),
            new ItemRequirementModel(['minecraft:bone_block'], 32),
            new ItemRequirementModel(['minecraft:magma_cream'], 16),
        ])
            .setEffects([{ 'kubejs:effects/littlelogisticsunlock': 1 }])
            .setParentResearch('minecolonies:civilian/rails')
            .setSubtitle('com.kubejs.research.civilian.littlelogisticsunlock.subtitle')
    )
    event.addJson(`kubejs:researches/effects/littlelogisticsunlock.json`, { "effect": true })
})