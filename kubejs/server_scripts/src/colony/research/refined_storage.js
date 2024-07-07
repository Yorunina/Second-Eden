// priority: 500
const { ColonyResearchModel, BuildingRequirementModel, ItemRequirementModel } = require('../../model/colony_research_model')

ServerEvents.highPriorityData(event => {
    event.addJson(`kubejs:researches/technology/advancedquartzuseage.json`,
        new ColonyResearchModel('minecolonies:technology', 2, [
            new BuildingRequirementModel('blacksmith', 3),
            new ItemRequirementModel(['minecraft:soul_lantern'], 1),
            new ItemRequirementModel(['minecraft:bone_block'], 32),
            new ItemRequirementModel(['minecraft:magma_cream'], 16),
        ])
            .setEffects([{ 'kubejs:effects/advancedquartzuseage': 1 }])
            .setParentResearch('minecolonies:technology/hittingiron')
            .setSubtitle('com.kubejs.research.technology.advancedquartzuseage.subtitle')
    )
    event.addJson(`kubejs:researches/effects/advancedquartzuseage.json`, { "effect": true })

    event.addJson(`kubejs:researches/technology/multidimstoragetheory.json`,
        new ColonyResearchModel('minecolonies:technology', 2, [
            new BuildingRequirementModel('enchanter', 3),
            new BuildingRequirementModel('mechanic', 3),
            new ItemRequirementModel(['minecraft:soul_lantern'], 1),
            new ItemRequirementModel(['minecraft:bone_block'], 32),
            new ItemRequirementModel(['minecraft:magma_cream'], 16),
        ])
            .setEffects([{ 'kubejs:effects/multidimstoragetheory': 1 }])
            .setParentResearch('kubejs:technology/advancedquartzuseage')
            .setSubtitle('com.kubejs.research.technology.multidimstoragetheory.subtitle')
    )
    event.addJson(`kubejs:researches/effects/multidimstoragetheory.json`, { "effect": true })
})