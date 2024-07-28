// priority: 500
const { ColonyResearchModel, BuildingRequirementModel, ItemRequirementModel } = require("../../model/colony_research_model")

ServerEvents.highPriorityData(event => {
    event.addJson(`kubejs:researches/landmarks/sakuramoon.json`,
        new ColonyResearchModel('kubejs:landmarks', 1, [
            new BuildingRequirementModel('townhall', 6),
            new ItemRequirementModel(['minecraft:nether_star', 1])
        ])
            .setHidden(false)
            .setEffects([{ 'kubejs:effects/resourcebee': 1 }])
            .setSubtitle('com.kubejs.research.landmarks.sakuramoon.subtitle')
    )
    // 养蜂员将会产出幸运矿石
    event.addJson(`kubejs:researches/effects/resourcebee.json`, { "effect": true })

    event.addJson(`kubejs:researches/landmarks/kokotonitower.json`,
        new ColonyResearchModel('kubejs:landmarks', 1, [
            new BuildingRequirementModel('townhall', 6),
            new ItemRequirementModel(['minecraft:nether_star', 1])
        ])
            .setHidden(false)
            .setEffects([{ 'kubejs:effects/druidmorepowerfulpotion': 1 }])
            .setSubtitle('com.kubejs.research.landmarks.kokotonitower.subtitle')
    )
    // 德鲁伊药水等级 3 -> 5
    event.addJson(`kubejs:researches/effects/druidmorepowerfulpotion.json`, { "effect": true })

    event.addJson(`kubejs:researches/landmarks/treehouse.json`,
        new ColonyResearchModel('kubejs:landmarks', 1, [
            new BuildingRequirementModel('townhall', 6),
            new ItemRequirementModel(['minecraft:nether_star', 1])
        ])
            .setHidden(false)
            .setEffects([{ 'kubejs:effects/fartherbuildingdistance': 1 }])
            .setSubtitle('com.kubejs.research.landmarks.treehouse.subtitle')
    )
    // 建筑工建筑距离增加10 -> 20
    event.addJson(`kubejs:researches/effects/fartherbuildingdistance.json`, { "effect": true })

    event.addJson(`kubejs:researches/landmarks/leavesmaze.json`,
        new ColonyResearchModel('kubejs:landmarks', 1, [
            new BuildingRequirementModel('townhall', 6),
            new ItemRequirementModel(['minecraft:nether_star', 1])
        ])
            .setHidden(false)
            .setEffects([{ 'kubejs:effects/effectivelogging': 1 }])
            .setSubtitle('com.kubejs.research.landmarks.leavesmaze.subtitle')
    )
    // 伐木工产出原木加倍
    event.addJson(`kubejs:researches/effects/effectivelogging.json`, { "effect": true })

    event.addJson(`kubejs:researches/landmarks/pantheon.json`,
        new ColonyResearchModel('kubejs:landmarks', 1, [
            new BuildingRequirementModel('townhall', 6),
            new ItemRequirementModel(['minecraft:nether_star', 1])
        ])
            .setHidden(false)
            .setEffects([{ 'kubejs:effects/agilityisdamage': 1 }])
            .setSubtitle('com.kubejs.research.landmarks.pantheon.subtitle')
    )
    // 弓箭手敏捷伤害除法系数 4 -> 2
    event.addJson(`kubejs:researches/effects/agilityisdamage.json`, { "effect": true })


    // EiffelTower
    event.addJson(`kubejs:researches/landmarks/eiffeltower1.json`,
        new ColonyResearchModel('kubejs:landmarks', 1, [
            new BuildingRequirementModel('townhall', 6),
            new ItemRequirementModel(['minecraft:nether_star', 1])
        ])
            .setHidden(false)
            .setSubtitle('com.kubejs.research.landmarks.eiffeltower1.subtitle')
    )
    event.addJson(`kubejs:researches/landmarks/eiffeltower2.json`,
        new ColonyResearchModel('kubejs:landmarks', 1, [
            new BuildingRequirementModel('townhall', 6),
            new ItemRequirementModel(['minecraft:nether_star', 1])
        ])
            .setParentResearch('kubejs:landmarks/eiffeltower1')
            .setHidden(false)
            .setSubtitle('com.kubejs.research.landmarks.eiffeltower2.subtitle')
    )
    event.addJson(`kubejs:researches/landmarks/eiffeltower3.json`,
        new ColonyResearchModel('kubejs:landmarks', 1, [
            new BuildingRequirementModel('townhall', 6),
            new ItemRequirementModel(['minecraft:nether_star', 1])
        ])
            .setParentResearch('kubejs:landmarks/eiffeltower2')
            .setHidden(false)
            .setSubtitle('com.kubejs.research.landmarks.eiffeltower3.subtitle')
    )
    event.addJson(`kubejs:researches/landmarks/eiffeltower.json`,
        new ColonyResearchModel('kubejs:landmarks', 1, [
            new BuildingRequirementModel('townhall', 6),
            new ItemRequirementModel(['minecraft:nether_star', 1])
        ])
            .setParentResearch('kubejs:landmarks/eiffeltower3')
            .setHidden(false)
            .setEffects([{ 'kubejs:effects/smeltingmaster': 1 }])
            .setSubtitle('com.kubejs.research.landmarks.eiffeltower.subtitle')
    )
    // 冶炼厂冶炼时，如果触发了双倍，那么会变成三倍；如果触发了三倍，那么会变成五倍
    event.addJson(`kubejs:researches/effects/smeltingmaster.json`, { "effect": true })
})

