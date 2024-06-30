// priority: 500
const { ColonyResearchModel, BuildingRequirementModel, ItemRequirementModel } = require('../../model/colony_research_model')

ServerEvents.highPriorityData(event => {
    event.addJson(`kubejs:researches/technology/coalcokeunlock.json`,
        new ColonyResearchModel('minecolonies:technology', 2, [
            new BuildingRequirementModel('smeltery', 1),
            new ItemRequirementModel(['minecraft:soul_lantern'], 1),
            new ItemRequirementModel(['minecraft:bone_block'], 32),
            new ItemRequirementModel(['minecraft:magma_cream'], 16),
        ])
            .setEffects([{ 'kubejs:effects/coalcokeunlock': 1 }])
            .setParentResearch('minecolonies:technology/hot')
            .setSubtitle('com.kubejs.research.technology.coalcokeunlock.subtitle')
    )
    event.addJson(`kubejs:researches/effects/coalcokeunlock.json`, { "effect": true })

    event.addJson(`kubejs:researches/technology/steelunlock.json`,
        new ColonyResearchModel('minecolonies:technology', 3, [
            new BuildingRequirementModel('smeltery', 2),
            new ItemRequirementModel(['minecraft:soul_lantern'], 1),
            new ItemRequirementModel(['minecraft:bone_block'], 32),
            new ItemRequirementModel(['minecraft:magma_cream'], 16),
        ])
            .setEffects([{ 'kubejs:effects/steelunlock': 1 }])
            .setParentResearch('kubejs:technology/coalcokeunlock')
            .setSubtitle('com.kubejs.research.technology.steelunlock.subtitle')
    )
    event.addJson(`kubejs:researches/effects/steelunlock.json`, { "effect": true })
})