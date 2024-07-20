// priority: 500
const { ColonyResearchModel, BuildingRequirementModel, ItemRequirementModel } = require("../../model/colony_research_model")

ServerEvents.highPriorityData(event => {
    event.addJson(`kubejs:researches/technology/iridiumunlock.json`,
        new ColonyResearchModel('minecolonies:technology', 4, [
            new BuildingRequirementModel('alchemist', 3),
            new ItemRequirementModel(['minecraft:dragon_breath'], 8),
            new ItemRequirementModel(['minecolonies:magicpotion'], 16),
        ])
            .setEffects([{ 'kubejs:effects/iridiumunlock': 1 }])
            .setParentResearch('minecolonies:technology/alchemist')
            .setSubtitle('com.kubejs.research.technology.iridiumunlock.subtitle')
    )
    event.addJson(`kubejs:researches/effects/iridiumunlock.json`, { "effect": true })
})