// priority: 500
const { ColonyResearchModel, ItemRequirementModel, BuildingRequirementModel } = require('../../model/colony_research_model')

ServerEvents.highPriorityData(event => {
    event.addJson(`kubejs:researches/technology/lanternsunlock.json`,
        new ColonyResearchModel('minecolonies:technology', 2, [
            new ItemRequirementModel(['minecraft:soul_lantern'], 1),
            new ItemRequirementModel(['minecraft:soul_sand'], 32),
        ])
            .setEffects([{ 'kubejs:effects/lanternsunlock': 1 }])
            .setParentResearch('minecolonies:technology/morescrolls')
            .setIcon('minecolonies:blockhutenchanter')
            .setSubtitle('com.kubejs.research.technology.lanternsunlock.subtitle')
    )
    event.addJson(`kubejs:researches/effects/lanternsunlock.json`, { "effect": true })

    event.addJson(`kubejs:researches/technology/advancedlanternsunlock.json`,
        new ColonyResearchModel('minecolonies:technology', 3, [
            new BuildingRequirementModel('enchanter', 5),
            new ItemRequirementModel(['minecraft:soul_lantern'], 1),
            new ItemRequirementModel(['minecraft:soul_sand'], 32),
        ])
            .setEffects([{ 'kubejs:effects/advancedlanternsunlock': 1 }])
            .setParentResearch('kubejs:technology/lanternsunlock')
            .setIcon('minecolonies:blockhutenchanter')
            .setSubtitle('com.kubejs.research.technology.advancedlanternsunlock.subtitle')
    )
    event.addJson(`kubejs:researches/effects/advancedlanternsunlock.json`, { "effect": true })
})

