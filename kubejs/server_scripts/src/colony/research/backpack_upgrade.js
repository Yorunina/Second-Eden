// priority: 500
const { ColonyResearchModel, BuildingRequirementModel, ItemRequirementModel } = require("../../model/colony_research_model")

ServerEvents.highPriorityData(event => {
    event.addJson(`kubejs:researches/civilian/usefulbackpackupgrade.json`,
        new ColonyResearchModel('minecolonies:civilian', 2, [
            new BuildingRequirementModel('hospital', 1),
            new ItemRequirementModel(['minecraft:leather'], 32),
            new ItemRequirementModel(['minecraft:iron_ingot'], 32),
            new ItemRequirementModel(['minecraft:loom'], 4),
        ])
            .setEffects([{ 'kubejs:effects/usefulbackpackupgrade': 1 }])
            .setParentResearch('minecolonies:civilian/firstaid')
            .setSubtitle('com.kubejs.research.civilian.usefulbackpackupgrade.subtitle')
    )
    event.addJson(`kubejs:researches/effects/usefulbackpackupgrade.json`, { "effect": true })
})