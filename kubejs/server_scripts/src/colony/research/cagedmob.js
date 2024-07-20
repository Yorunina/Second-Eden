// priority: 500
const { ColonyResearchModel, BuildingRequirementModel, ItemRequirementModel } = require("../../model/colony_research_model")

ServerEvents.highPriorityData(event => {
    // 基础
    event.addJson(`kubejs:researches/technology/locksoulincage.json`,
        new ColonyResearchModel('minecolonies:technology', 2, [
            new BuildingRequirementModel('graveyard', 3),
            new ItemRequirementModel(['graveyard:dark_iron_ingot'], 16),
            new ItemRequirementModel(['minecraft:soul_soil'], 64),
            new ItemRequirementModel(['minecraft:soul_campfire'], 3),
        ])
            .setEffects([{ 'kubejs:effects/locksoulincage': 1 }])
            .setParentResearch('minecolonies:technology/opennether')
            .setSubtitle('com.kubejs.research.technology.locksoulincage.subtitle')
    )
    event.addJson(`kubejs:researches/effects/locksoulincage.json`, { "effect": true })

    // 漏式
    event.addJson(`kubejs:researches/technology/hoppingcage.json`,
        new ColonyResearchModel('minecolonies:technology', 3, [
            new ItemRequirementModel(['cagedmobs:mob_cage'], 3),
            new ItemRequirementModel(['minecraft:hopper'], 16),
            new ItemRequirementModel(['minecraft:iron_ingot'], 64),
        ])
            .setEffects([{ 'kubejs:effects/hoppingcage': 1 }])
            .setParentResearch('kubejs:technology/locksoulincage')
            .setSubtitle('com.kubejs.research.technology.hoppingcage.subtitle')
    )
    event.addJson(`kubejs:researches/effects/hoppingcage.json`, { "effect": true })

    // 升级
    event.addJson(`kubejs:researches/technology/morepowerfulcage.json`,
        new ColonyResearchModel('minecolonies:technology', 3, [
            new BuildingRequirementModel('graveyard', 5),
            new ItemRequirementModel(['minecraft:blackstone'], 64),
            new ItemRequirementModel(['minecraft:netherite_ingot'], 1),
            new ItemRequirementModel(['minecraft:quartz_block'], 16),
        ])
            .setEffects([{ 'kubejs:effects/morepowerfulcage': 1 }])
            .setParentResearch('kubejs:technology/locksoulincage')
            .setSubtitle('com.kubejs.research.technology.morepowerfulcage.subtitle')
    )
    event.addJson(`kubejs:researches/effects/morepowerfulcage.json`, { "effect": true })
})