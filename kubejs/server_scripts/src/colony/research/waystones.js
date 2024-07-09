// priority: 500
const { ColonyResearchModel, BuildingRequirementModel, ItemRequirementModel } = require("../../model/colony_research_model")

ServerEvents.highPriorityData(event => {
    event.addJson(`kubejs:researches/technology/waystonesunlock.json`,
        new ColonyResearchModel('minecolonies:technology', 2, [
            new ItemRequirementModel(['minecraft:soul_lantern'], 1),
            new ItemRequirementModel(['minecraft:bone_block'], 32),
            new ItemRequirementModel(['minecraft:magma_cream'], 16),
        ])
            .setEffects([{ 'kubejs:effects/waystonesunlock': 1 }])
            .setParentResearch('minecolonies:technology/morescrolls')
            .setSubtitle('com.kubejs.research.technology.waystonesunlock.subtitle')
    )
    event.addJson(`kubejs:researches/effects/waystonesunlock.json`, { "effect": true })
})