// priority: 500
const { ColonyResearchModel, BuildingRequirementModel, ItemRequirementModel } = require("../../model/colony_research_model")

ServerEvents.highPriorityData(event => {
    event.addJson(`kubejs:researches/technology/coalcokeunlock.json`,
        new ColonyResearchModel('minecolonies:technology', 2, [
            new BuildingRequirementModel('smeltery', 1),
            new ItemRequirementModel(['minecraft:bone_meal'], 32),
            new ItemRequirementModel(['minecraft:blast_furnace'], 3),
            new ItemRequirementModel(['minecraft:coal'], 64),
        ])
            .setEffects([{ 'kubejs:effects/coalcokeunlock': 1 }])
            .setParentResearch('minecolonies:technology/hot')
            .setSubtitle('com.kubejs.research.technology.coalcokeunlock.subtitle')
    )
    event.addJson(`kubejs:researches/effects/coalcokeunlock.json`, { "effect": true })

    event.addJson(`kubejs:researches/technology/steelunlock.json`,
        new ColonyResearchModel('minecolonies:technology', 3, [
            new BuildingRequirementModel('smeltery', 2),
            new ItemRequirementModel(['kubejs:coal_coke'], 16),
            new ItemRequirementModel(['minecraft:bone_block'], 32),
        ])
            .setEffects([{ 'kubejs:effects/steelunlock': 1 }])
            .setParentResearch('kubejs:technology/coalcokeunlock')
            .setSubtitle('com.kubejs.research.technology.steelunlock.subtitle')
    )
    event.addJson(`kubejs:researches/effects/steelunlock.json`, { "effect": true })
})