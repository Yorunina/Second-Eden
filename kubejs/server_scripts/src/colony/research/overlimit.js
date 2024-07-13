// priority: 500
const { ColonyResearchModel, BuildingRequirementModel, ItemRequirementModel } = require("../../model/colony_research_model")

ServerEvents.highPriorityData(event => {
    // 初识无限
    event.addJson(`kubejs:researches/overlimit/infinityintroduce.json`,
        new ColonyResearchModel('kubejs:overlimit', 1, [
            new BuildingRequirementModel('townhall', 5),
            new BuildingRequirementModel('library', 5),
            new ItemRequirementModel(['minecraft:soul_lantern'], 1),
            new ItemRequirementModel(['minecraft:bone_block'], 32),
            new ItemRequirementModel(['minecraft:magma_cream'], 16),
        ])
            .setEffects([{ 'kubejs:effects/infinityintroduce': 1 }])
            .setSubtitle('com.kubejs.research.overlimit.infinityintroduce.subtitle')
    )
    event.addJson(`kubejs:researches/effects/infinityintroduce.json`, { "effect": true })

    // 奇点化
    event.addJson(`kubejs:researches/overlimit/singulize.json`,
        new ColonyResearchModel('kubejs:overlimit', 1, [
            new BuildingRequirementModel('blacksmith', 5),
            new BuildingRequirementModel('alchemist', 5),
            new ItemRequirementModel(['minecraft:soul_lantern'], 1),
            new ItemRequirementModel(['minecraft:bone_block'], 32),
            new ItemRequirementModel(['minecraft:magma_cream'], 16),
        ])
            .setParentResearch('kubejs:overlimit/infinityintroduce')
            .setEffects([{ 'kubejs:effects/singulize': 1 }])
            .setSubtitle('com.kubejs.research.overlimit.singulize.subtitle')
    )
    event.addJson(`kubejs:researches/effects/singulize.json`, { "effect": true })
})