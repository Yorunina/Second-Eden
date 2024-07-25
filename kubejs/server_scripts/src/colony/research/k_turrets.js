// priority: 500
const { ColonyResearchModel, BuildingRequirementModel, ItemRequirementModel } = require("../../model/colony_research_model")

ServerEvents.highPriorityData(event => {
    event.addJson(`kubejs:researches/technology/kturrets.json`,
        new ColonyResearchModel('minecolonies:technology', 4, [
            new BuildingRequirementModel('mechanic', 3),
            new ItemRequirementModel(['kubejs:steel_block'], 8),
            new ItemRequirementModel(['minecraft:gunpowder'], 32),
        ])
            .setEffects([{ 'kubejs:effects/kturrets': 1 }])
            .setParentResearch('minecolonies:technology/enhanced_gates1')
            .setSubtitle('com.kubejs.research.technology.kturrets.subtitle')
    )
    event.addJson(`kubejs:researches/effects/kturrets.json`, { "effect": true })


    event.addJson(`kubejs:researches/technology/kdrones.json`,
        new ColonyResearchModel('minecolonies:technology', 5, [
            new BuildingRequirementModel('mechanic', 5),
            new ItemRequirementModel(['immersive_aircraft:quadrocopter'], 4),
            new ItemRequirementModel(['minecraft:gunpowder'], 32),
        ])
            .setEffects([{ 'kubejs:effects/kdrones': 1 }])
            .setParentResearch('kubejs:technology/kturrets')
            .setSubtitle('com.kubejs.research.technology.kdrones.subtitle')
    )
    event.addJson(`kubejs:researches/effects/kdrones.json`, { "effect": true })
})

