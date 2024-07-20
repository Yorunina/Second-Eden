// priority: 500
const { ColonyResearchModel, ItemRequirementModel } = require("../../model/colony_research_model")

ServerEvents.highPriorityData(event => {
    event.addJson(`kubejs:researches/technology/scrollmaidunlock.json`,
        new ColonyResearchModel('minecolonies:technology', 2, [
            new ItemRequirementModel(['minecraft:armor_stand'], 4),
            new ItemRequirementModel(['minecraft:glistering_melon_slice'], 16),
            new ItemRequirementModel(['minecraft:amethyst_shard'], 16),
        ])
            .setEffects([{ 'kubejs:effects/scrollmaidunlock': 1 }])
            .setParentResearch('minecolonies:technology/morescrolls')
            .setSubtitle('com.kubejs.research.technology.scrollmaidunlock.subtitle')
    )
    event.addJson(`kubejs:researches/effects/scrollmaidunlock.json`, { "effect": true })
})