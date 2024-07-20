// priority: 500
const { ColonyResearchModel, ItemRequirementModel, BuildingRequirementModel } = require("../../model/colony_research_model")

ServerEvents.highPriorityData(event => {
    event.addJson(`kubejs:researches/technology/lanternsunlock.json`,
        new ColonyResearchModel('minecolonies:technology', 2, [
            new ItemRequirementModel(['minecraft:soul_lantern'], 8),
            new ItemRequirementModel(['minecraft:nether_wart'], 64),
        ])
            .setEffects([{ 'kubejs:effects/lanternsunlock': 1 }])
            .setParentResearch('minecolonies:technology/morescrolls')
            .setSubtitle('com.kubejs.research.technology.lanternsunlock.subtitle')
    )
    event.addJson(`kubejs:researches/effects/lanternsunlock.json`, { "effect": true })

    event.addJson(`kubejs:researches/technology/advancedlanternsunlock.json`,
        new ColonyResearchModel('minecolonies:technology', 3, [
            new BuildingRequirementModel('enchanter', 5),
            new ItemRequirementModel(['minecraft:soul_lantern'], 8),
            new ItemRequirementModel(['minecraft:wither_skeleton_skull'], 1),
        ])
            .setEffects([{ 'kubejs:effects/advancedlanternsunlock': 1 }])
            .setParentResearch('kubejs:technology/lanternsunlock')
            .setSubtitle('com.kubejs.research.technology.advancedlanternsunlock.subtitle')
    )
    event.addJson(`kubejs:researches/effects/advancedlanternsunlock.json`, { "effect": true })
})

