// priority: 500
const { ColonyResearchModel, ItemRequirementModel } = require("../../model/colony_research_model")

ServerEvents.highPriorityData(event => {
    event.addJson(`kubejs:researches/civilian/eebunlock.json`,
        new ColonyResearchModel('minecolonies:civilian', 2, [
            new ItemRequirementModel(['minecraft:bell'], 4),
            new ItemRequirementModel(['transmog:void_fragment'], 8),
        ])
            .setEffects([{ 'kubejs:effects/eebunlock': 1 }])
            .setParentResearch('minecolonies:civilian/firstaid')
            .setSubtitle('com.kubejs.research.civilian.eebunlock.subtitle')
    )
    event.addJson(`kubejs:researches/effects/eebunlock.json`, { "effect": true })

    event.addJson(`kubejs:researches/civilian/fwaunlock.json`,
        new ColonyResearchModel('minecolonies:civilian', 3, [
            new ItemRequirementModel(['minecraft:bell'], 4),
            new ItemRequirementModel(['minecraft:ghast_tear'], 1),
            new ItemRequirementModel(['minecraft:turtle_helmet'], 1),
        ])
            .setEffects([{ 'kubejs:effects/fwaunlock': 1 }])
            .setParentResearch('kubejs:civilian/eebunlock')
            .setSubtitle('com.kubejs.research.civilian.fwaunlock.subtitle')
    )
    event.addJson(`kubejs:researches/effects/fwaunlock.json`, { "effect": true })

    event.addJson(`kubejs:researches/civilian/bapunlock.json`,
        new ColonyResearchModel('minecolonies:civilian', 2, [
            new ItemRequirementModel(['minecraft:book'], 16),
            new ItemRequirementModel(['minecraft:honey_block'], 8),
            new ItemRequirementModel(['minecraft:quartz_block'], 8),
        ])
            .setEffects([{ 'kubejs:effects/bapunlock': 1 }])
            .setParentResearch('kubejs:civilian/eebunlock')
            .setSubtitle('com.kubejs.research.civilian.bapunlock.subtitle')
    )
    event.addJson(`kubejs:researches/effects/bapunlock.json`, { "effect": true })

    event.addJson(`kubejs:researches/civilian/fwbunlock.json`,
        new ColonyResearchModel('minecolonies:civilian', 4, [
            new ItemRequirementModel(['minecraft:bell'], 4),
            new ItemRequirementModel(['minecraft:ghast_tear'], 4),
            new ItemRequirementModel(['minecraft:nether_star'], 1),
        ])
            .setEffects([{ 'kubejs:effects/fwbunlock': 1 }])
            .setParentResearch('kubejs:civilian/fwaunlock')
            .setSubtitle('com.kubejs.research.civilian.fwbunlock.subtitle')
    )
    event.addJson(`kubejs:researches/effects/fwbunlock.json`, { "effect": true })

    event.addJson(`kubejs:researches/civilian/ebbunlock.json`,
        new ColonyResearchModel('minecolonies:civilian', 4, [
            new ItemRequirementModel(['minecraft:bell'], 4),
            new ItemRequirementModel(['minecraft:pufferfish'], 16),
            new ItemRequirementModel(['minecraft:echo_shard'], 4),
        ])
            .setEffects([{ 'kubejs:effects/ebbunlock': 1 }])
            .setParentResearch('kubejs:civilian/bapunlock')
            .setSubtitle('com.kubejs.research.civilian.ebbunlock.subtitle')
    )
    event.addJson(`kubejs:researches/effects/ebbunlock.json`, { "effect": true })
})