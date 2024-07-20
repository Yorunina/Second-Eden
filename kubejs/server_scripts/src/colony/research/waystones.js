// priority: 500
const { ColonyResearchModel, ItemRequirementModel } = require("../../model/colony_research_model")

ServerEvents.highPriorityData(event => {
    event.addJson(`kubejs:researches/technology/waystonesunlock.json`,
        new ColonyResearchModel('minecolonies:technology', 2, [
            new ItemRequirementModel(['minecraft:lapis_lazuli'], 32),
            new ItemRequirementModel(['minecraft:amethyst_shard'], 16),
        ])
            .setEffects([{ 'kubejs:effects/waystonesunlock': 1 }])
            .setParentResearch('minecolonies:technology/morescrolls')
            .setSubtitle('com.kubejs.research.technology.waystonesunlock.subtitle')
    )
    event.addJson(`kubejs:researches/effects/waystonesunlock.json`, { "effect": true })
})