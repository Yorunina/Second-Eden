// priority: 500
const { ColonyResearchModel, BuildingRequirementModel, ItemRequirementModel } = require("../../model/colony_research_model")

ServerEvents.highPriorityData(event => {
    // 高级石英使用
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

    // 多维存储理论
    event.addJson(`kubejs:researches/technology/multidimstoragetheory.json`,
        new ColonyResearchModel('minecolonies:technology', 3, [
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

    // 自动制作管理
    event.addJson(`kubejs:researches/technology/autocraftmanager.json`,
        new ColonyResearchModel('minecolonies:technology', 4, [
            new BuildingRequirementModel('school', 3),
            new ItemRequirementModel(['minecraft:soul_lantern'], 1),
            new ItemRequirementModel(['minecraft:bone_block'], 32),
            new ItemRequirementModel(['minecraft:magma_cream'], 16),
        ])
            .setEffects([{ 'kubejs:effects/autocraftmanager': 1 }])
            .setParentResearch('kubejs:technology/multidimstoragetheory')
            .setSubtitle('com.kubejs.research.technology.autocraftmanager.subtitle')
    )
    event.addJson(`kubejs:researches/effects/autocraftmanager.json`, { "effect": true })


    // 更多磁盘
    event.addJson(`kubejs:researches/technology/morediskunlock.json`,
        new ColonyResearchModel('minecolonies:technology', 4, [
            new BuildingRequirementModel('enchanter', 4),
            new ItemRequirementModel(['minecraft:soul_lantern'], 1),
            new ItemRequirementModel(['minecraft:bone_block'], 32),
            new ItemRequirementModel(['minecraft:magma_cream'], 16),
        ])
            .setEffects([{ 'kubejs:effects/morediskunlock': 1 }])
            .setParentResearch('kubejs:technology/multidimstoragetheory')
            .setSubtitle('com.kubejs.research.technology.morediskunlock.subtitle')
    )
    event.addJson(`kubejs:researches/effects/morediskunlock.json`, { "effect": true })

    // 无限无线通讯协议
    event.addJson(`kubejs:researches/technology/infinitywirelessaccess.json`,
        new ColonyResearchModel('minecolonies:technology', 5, [
            new BuildingRequirementModel('deliveryman', 10),
            new ItemRequirementModel(['minecraft:soul_lantern'], 1),
            new ItemRequirementModel(['minecraft:bone_block'], 32),
            new ItemRequirementModel(['minecraft:magma_cream'], 16),
        ])
            .setEffects([{ 'kubejs:effects/infinitywirelessaccess': 1 }])
            .setParentResearch('kubejs:technology/autocraftmanager')
            .setSubtitle('com.kubejs.research.technology.infinitywirelessaccess.subtitle')
    )
    event.addJson(`kubejs:researches/effects/infinitywirelessaccess.json`, { "effect": true })

    // 无穷无尽多维理论
    event.addJson(`kubejs:researches/technology/creativediskunlock.json`,
        new ColonyResearchModel('minecolonies:technology', 5, [
            new BuildingRequirementModel('enchanter', 5),
            new BuildingRequirementModel('netherworker', 10),
            new ItemRequirementModel(['minecraft:soul_lantern'], 1),
            new ItemRequirementModel(['minecraft:bone_block'], 32),
            new ItemRequirementModel(['minecraft:magma_cream'], 16),
        ])
            .setEffects([{ 'kubejs:effects/creativediskunlock': 1 }])
            .setParentResearch('kubejs:technology/morediskunlock')
            .setSubtitle('com.kubejs.research.technology.creativediskunlock.subtitle')
    )
    event.addJson(`kubejs:researches/effects/creativediskunlock.json`, { "effect": true })
})