// priority: 500
const { ColonyResearchModel, BuildingRequirementModel, ItemRequirementModel } = require("../../model/colony_research_model")

ServerEvents.highPriorityData(event => {
    event.addJson(`kubejs:researches/overlimit/singularpoint.json`,
        new ColonyResearchModel('kubejs:overlimit', 2, [
            new ItemRequirementModel(['minecraft:soul_lantern'], 1),
            new ItemRequirementModel(['minecraft:bone_block'], 32),
            new ItemRequirementModel(['minecraft:magma_cream'], 16),
        ])
            .setEffects([{ 'kubejs:effects/singularpoint': 1 }])
            .setSubtitle('com.kubejs.research.overlimit.singularpoint.subtitle')
    )
    event.addJson(`kubejs:researches/effects/singularpoint.json`, { "effect": true })
})