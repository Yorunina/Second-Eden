// priority: 500
const { ColonyResearchModel, BuildingRequirementModel, ItemRequirementModel } = require("../../model/colony_research_model")

ServerEvents.highPriorityData(event => {
    // 高级石英使用
    event.addJson(`kubejs:researches/technology/advancedquartzuseage.json`,
        new ColonyResearchModel('minecolonies:technology', 2, [
            new BuildingRequirementModel('blacksmith', 3),
            new ItemRequirementModel(['kubejs:steel_ingot'], 16),
            new ItemRequirementModel(['minecraft:redstone'], 64),
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
            new ItemRequirementModel(['minecraft:ender_chest'], 4),
            new ItemRequirementModel(['refinedstorage:silicon'], 32),
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
            new ItemRequirementModel(['minecraft:lodestone'], 3),
            new ItemRequirementModel(['refinedstorage:silicon'], 32),
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
            new ItemRequirementModel(['refinedstorage:4k_storage_part'], 4),
            new ItemRequirementModel(['refinedstorage:quartz_enriched_iron'], 64),
        ])
            .setEffects([{ 'kubejs:effects/morediskunlock': 1 }])
            .setParentResearch('kubejs:technology/multidimstoragetheory')
            .setSubtitle('com.kubejs.research.technology.morediskunlock.subtitle')
    )
    event.addJson(`kubejs:researches/effects/morediskunlock.json`, { "effect": true })

    // 无线通讯协议
    event.addJson(`kubejs:researches/technology/wirelessaccess.json`,
        new ColonyResearchModel('minecolonies:technology', 4, [
            new BuildingRequirementModel('deliveryman', 5),
            new ItemRequirementModel(['minecraft:ender_eye'], 12),
            new ItemRequirementModel(['refinedstorage:quartz_enriched_iron'], 32),
        ])
            .setEffects([{ 'kubejs:effects/wirelessaccess': 1 }])
            .setParentResearch('kubejs:technology/multidimstoragetheory')
            .setSubtitle('com.kubejs.research.technology.wirelessaccess.subtitle')
    )
    event.addJson(`kubejs:researches/effects/wirelessaccess.json`, { "effect": true })
})