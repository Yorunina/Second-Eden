// priority: 500
const { ColonyResearchModel, BuildingRequirementModel, ItemRequirementModel } = require("../../model/colony_research_model")

ServerEvents.highPriorityData(event => {
    event.addJson(`kubejs:researches/civilian/introeconomics.json`,
        new ColonyResearchModel('minecolonies:civilian', 1, [
            new BuildingRequirementModel('townhall', 2),
            new ItemRequirementModel(['minecraft:iron_block'], 8),
            new ItemRequirementModel(['minecraft:magma_cream'], 16)
        ])
            .setEffects([{ 'kubejs:effects/introeconomics': 1 }])
            .setSubtitle('com.kubejs.research.civilian.introeconomics.subtitle')
    )
    event.addJson(`kubejs:researches/effects/introeconomics.json`, { "effect": true })

    event.addJson(`kubejs:researches/civilian/intermedeconomics.json`,
        new ColonyResearchModel('minecolonies:civilian', 2, [
            new BuildingRequirementModel('townhall', 3),
            new ItemRequirementModel(['minecraft:iron_block'], 8),
            new ItemRequirementModel(['minecraft:magma_cream'], 16)
        ])
            .setEffects([{ 'kubejs:effects/intermedeconomics': 1 }])
            .setParentResearch('kubejs:civilian/introeconomics')
            .setSubtitle('com.kubejs.research.civilian.intermedeconomics.subtitle')
    )
    event.addJson(`kubejs:researches/effects/intermedeconomics.json`, { "effect": true })

    event.addJson(`kubejs:researches/civilian/adveconomics.json`,
        new ColonyResearchModel('minecolonies:civilian', 3, [
            new BuildingRequirementModel('townhall', 5),
            new ItemRequirementModel(['minecraft:iron_block'], 8),
            new ItemRequirementModel(['minecraft:magma_cream'], 16)
        ])
            .setEffects([{ 'kubejs:effects/adveconomics': 1 }])
            .setParentResearch('kubejs:civilian/intermedeconomics')
            .setSubtitle('com.kubejs.research.civilian.adveconomics.subtitle')
    )
    event.addJson(`kubejs:researches/effects/adveconomics.json`, { "effect": true })

    event.addJson(`kubejs:researches/civilian/coinageunlock.json`,
        new ColonyResearchModel('minecolonies:civilian', 2, [
            new ItemRequirementModel(['minecraft:iron_block'], 8),
            new ItemRequirementModel(['minecraft:magma_cream'], 16)
        ])
            .setEffects([{ 'kubejs:effects/coinageunlock': 1 }])
            .setParentResearch('kubejs:civilian/introeconomics')
            .setSubtitle('com.kubejs.research.civilian.coinageunlock.subtitle')
    )
    event.addJson(`kubejs:researches/effects/coinageunlock.json`, { "effect": true })

})