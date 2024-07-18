// priority: 500
const { ColonyResearchModel, ItemRequirementModel } = require("../../model/colony_research_model")

ServerEvents.highPriorityData(event => {
    event.addJson(`kubejs:researches/civilian/eebunlock.json`,
        new ColonyResearchModel('minecolonies:civilian', 2, [
            new ItemRequirementModel(['minecraft:soul_lantern'], 1),
            new ItemRequirementModel(['minecraft:bone_block'], 32),
            new ItemRequirementModel(['minecraft:magma_cream'], 16),
        ])
            .setEffects([{ 'kubejs:effects/eebunlock': 1 }])
            .setParentResearch('minecolonies:civilian/firstaid')
            .setSubtitle('com.kubejs.research.civilian.eebunlock.subtitle')
    )
    event.addJson(`kubejs:researches/effects/eebunlock.json`, { "effect": true })

    event.addJson(`kubejs:researches/civilian/fwaunlock.json`,
        new ColonyResearchModel('minecolonies:civilian', 3, [
            new ItemRequirementModel(['minecraft:soul_lantern'], 1),
            new ItemRequirementModel(['minecraft:bone_block'], 32),
            new ItemRequirementModel(['minecraft:magma_cream'], 16),
        ])
            .setEffects([{ 'kubejs:effects/fwaunlock': 1 }])
            .setParentResearch('kubejs:civilian/eebunlock')
            .setSubtitle('com.kubejs.research.civilian.fwaunlock.subtitle')
    )
    event.addJson(`kubejs:researches/effects/fwaunlock.json`, { "effect": true })

    event.addJson(`kubejs:researches/civilian/bapunlock.json`,
        new ColonyResearchModel('minecolonies:civilian', 2, [
            new ItemRequirementModel(['minecraft:soul_lantern'], 1),
            new ItemRequirementModel(['minecraft:bone_block'], 32),
            new ItemRequirementModel(['minecraft:magma_cream'], 16),
        ])
            .setEffects([{ 'kubejs:effects/bapunlock': 1 }])
            .setParentResearch('kubejs:civilian/eebunlock')
            .setSubtitle('com.kubejs.research.civilian.bapunlock.subtitle')
    )
    event.addJson(`kubejs:researches/effects/bapunlock.json`, { "effect": true })

    event.addJson(`kubejs:researches/civilian/fwbunlock.json`,
        new ColonyResearchModel('minecolonies:civilian', 4, [
            new ItemRequirementModel(['minecraft:soul_lantern'], 1),
            new ItemRequirementModel(['minecraft:bone_block'], 32),
            new ItemRequirementModel(['minecraft:magma_cream'], 16),
        ])
            .setEffects([{ 'kubejs:effects/fwbunlock': 1 }])
            .setParentResearch('kubejs:civilian/fwaunlock')
            .setSubtitle('com.kubejs.research.civilian.fwbunlock.subtitle')
    )
    event.addJson(`kubejs:researches/effects/fwbunlock.json`, { "effect": true })

    event.addJson(`kubejs:researches/civilian/ebbunlock.json`,
        new ColonyResearchModel('minecolonies:civilian', 4, [
            new ItemRequirementModel(['minecraft:soul_lantern'], 1),
            new ItemRequirementModel(['minecraft:bone_block'], 32),
            new ItemRequirementModel(['minecraft:magma_cream'], 16),
        ])
            .setEffects([{ 'kubejs:effects/ebbunlock': 1 }])
            .setParentResearch('kubejs:civilian/fwaunlock')
            .setSubtitle('com.kubejs.research.civilian.ebbunlock.subtitle')
    )
    event.addJson(`kubejs:researches/effects/ebbunlock.json`, { "effect": true })
})