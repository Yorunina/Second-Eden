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
        new ColonyResearchModel('kubejs:overlimit', 2, [
            new BuildingRequirementModel('blacksmith', 5),
            new BuildingRequirementModel('alchemist', 5),
            new ItemRequirementModel(['minecraft:soul_lantern'], 1),
            new ItemRequirementModel(['minecraft:bone_block'], 32),
            new ItemRequirementModel(['minecraft:magma_cream'], 16),
        ])
            .setSortOrder(0)
            .setParentResearch('kubejs:overlimit/infinityintroduce')
            .setEffects([{ 'kubejs:effects/singulize': 1 }])
            .setSubtitle('com.kubejs.research.overlimit.singulize.subtitle')
    )
    event.addJson(`kubejs:researches/effects/singulize.json`, { "effect": true })

    // 中子开采协议
    event.addJson(`kubejs:researches/overlimit/neutronpilesift.json`,
        new ColonyResearchModel('kubejs:overlimit', 3, [
            new BuildingRequirementModel('sifter', 5),
            new ItemRequirementModel(['minecraft:soul_lantern'], 1),
            new ItemRequirementModel(['minecraft:bone_block'], 32),
            new ItemRequirementModel(['minecraft:magma_cream'], 16),
        ])
            .setSortOrder(0)
            .setParentResearch('kubejs:overlimit/singulize')
            .setEffects([{ 'kubejs:effects/neutronpilesift': 1 }])
            .setSubtitle('com.kubejs.research.overlimit.neutronpilesift.subtitle')
    )
    event.addJson(`kubejs:researches/effects/neutronpilesift.json`, { "effect": true })

    // 无限无线通讯协议
    event.addJson(`kubejs:researches/overlimit/infinitywirelessaccess.json`,
        new ColonyResearchModel('kubejs:overlimit', 2, [
            new BuildingRequirementModel('deliveryman', 10),
            new ItemRequirementModel(['minecraft:soul_lantern'], 1),
            new ItemRequirementModel(['minecraft:bone_block'], 32),
            new ItemRequirementModel(['minecraft:magma_cream'], 16),
        ])
            .setSortOrder(100)
            .setEffects([{ 'kubejs:effects/infinitywirelessaccess': 1 }])
            .setParentResearch('kubejs:overlimit/infinityintroduce')
            .setSubtitle('com.kubejs.research.overlimit.infinitywirelessaccess.subtitle')
    )
    event.addJson(`kubejs:researches/effects/infinitywirelessaccess.json`, { "effect": true })

    // 无穷无尽多维理论
    event.addJson(`kubejs:researches/overlimit/creativediskunlock.json`,
        new ColonyResearchModel('kubejs:overlimit', 2, [
            new BuildingRequirementModel('enchanter', 5),
            new BuildingRequirementModel('netherworker', 10),
            new ItemRequirementModel(['minecraft:soul_lantern'], 1),
            new ItemRequirementModel(['minecraft:bone_block'], 32),
            new ItemRequirementModel(['minecraft:magma_cream'], 16),
        ])
            .setSortOrder(200)
            .setEffects([{ 'kubejs:effects/creativediskunlock': 1 }])
            .setParentResearch('kubejs:overlimit/infinityintroduce')
            .setSubtitle('com.kubejs.research.overlimit.creativediskunlock.subtitle')
    )
    event.addJson(`kubejs:researches/effects/creativediskunlock.json`, { "effect": true })

    // 光速交易论坛
    event.addJson(`kubejs:researches/overlimit/lightspeedtradingforum.json`,
        new ColonyResearchModel('kubejs:overlimit', 3, [
            new ItemRequirementModel(['minecraft:iron_block'], 8),
            new ItemRequirementModel(['minecraft:magma_cream'], 16)
        ])
            .setSortOrder(200)
            .setEffects([{ 'kubejs:effects/lightspeedtradingforum': 1 }])
            .setParentResearch('kubejs:overlimit/infinitywirelessaccess')
            .setSubtitle('com.kubejs.research.overlimit.lightspeedtradingforum.subtitle')
    )
    event.addJson(`kubejs:researches/effects/lightspeedtradingforum.json`, { "effect": true })

    // 中子材料应用
    event.addJson(`kubejs:researches/overlimit/neutronmaterialapplication.json`,
        new ColonyResearchModel('kubejs:overlimit', 4, [
            new BuildingRequirementModel('mechanic', 5),
            new ItemRequirementModel(['minecraft:soul_lantern'], 1),
            new ItemRequirementModel(['minecraft:bone_block'], 32),
            new ItemRequirementModel(['minecraft:magma_cream'], 16),
        ])
            .setSortOrder(100)
            .setParentResearch('kubejs:overlimit/neutronpilesift')
            .setEffects([{ 'kubejs:effects/neutronmaterialapplication': 1 }])
            .setSubtitle('com.kubejs.research.overlimit.neutronmaterialapplication.subtitle')
    )
    event.addJson(`kubejs:researches/effects/neutronmaterialapplication.json`, { "effect": true })

    // 无尽催化
    event.addJson(`kubejs:researches/overlimit/infinitycatalyst.json`,
        new ColonyResearchModel('kubejs:overlimit', 3, [
            new ItemRequirementModel(['minecraft:soul_lantern'], 1),
            new ItemRequirementModel(['minecraft:bone_block'], 32),
            new ItemRequirementModel(['minecraft:magma_cream'], 16),
        ])
            .setSortOrder(100)
            .setParentResearch('kubejs:overlimit/singulize')
            .setEffects([{ 'kubejs:effects/infinitycatalyst': 1 }])
            .setSubtitle('com.kubejs.research.overlimit.infinitycatalyst.subtitle')
    )
    event.addJson(`kubejs:researches/effects/infinitycatalyst.json`, { "effect": true })

    // 无穷起源
    event.addJson(`kubejs:researches/overlimit/infinityorigin.json`,
        new ColonyResearchModel('kubejs:overlimit', 5, [
            new ItemRequirementModel(['minecraft:soul_lantern'], 1),
            new ItemRequirementModel(['minecraft:bone_block'], 32),
            new ItemRequirementModel(['minecraft:magma_cream'], 16),
        ])
            .setSortOrder(0)
            .setParentResearch('kubejs:overlimit/neutronmaterialapplication')
            .setEffects([{ 'kubejs:effects/infinityorigin': 1 }])
            .setSubtitle('com.kubejs.research.overlimit.infinityorigin.subtitle')
    )
    event.addJson(`kubejs:researches/effects/infinityorigin.json`, { "effect": true })
})