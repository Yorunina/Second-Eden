// priority: 500
const { ColonyResearchModel, BuildingRequirementModel, ItemRequirementModel } = require("../../model/colony_research_model")

ServerEvents.highPriorityData(event => {
    event.addJson(`kubejs:researches/combat/summonraid.json`,
        new ColonyResearchModel('minecolonies:combat', 1, [
            new BuildingRequirementModel('enchanter', 1),
            new ItemRequirementModel(['minecraft:golden_carrot'], 125),
        ])
            .setEffects([{ 'kubejs:effects/summonraid': 1 }])
            .setSortOrder(1000)
            .setSubtitle('com.kubejs.research.combat.summonraid.subtitle')
    )
    event.addJson(`kubejs:researches/effects/summonraid.json`, { "effect": true })


    event.addJson(`kubejs:researches/combat/primarysouls.json`,
        new ColonyResearchModel('minecolonies:combat', 2, [
            new BuildingRequirementModel('alchemist', 1),
            new ItemRequirementModel(['minecraft:golden_carrot'], 175),
        ])
            .setEffects([{ 'kubejs:effects/primarysouls': 1 }])
            .setParentResearch('kubejs:combat/summonraid')
            .setSubtitle('com.kubejs.research.combat.primarysouls.subtitle')
    )
    event.addJson(`kubejs:researches/effects/primarysouls.json`, { "effect": true })


    event.addJson(`kubejs:researches/combat/advancedsouls.json`,
        new ColonyResearchModel('minecolonies:combat', 3, [
            new BuildingRequirementModel('alchemist', 3),
            new ItemRequirementModel(['minecraft:golden_carrot'], 175),
        ])
            .setEffects([{ 'kubejs:effects/advancedsouls': 1 }])
            .setParentResearch('kubejs:combat/primarysouls')
            .setSubtitle('com.kubejs.research.combat.advancedsouls.subtitle')
    )
    event.addJson(`kubejs:researches/effects/advancedsouls.json`, { "effect": true })


    event.addJson(`kubejs:researches/combat/undeadraid.json`,
        new ColonyResearchModel('minecolonies:combat', 2, [
            new BuildingRequirementModel('graveyard', 1),
            new ItemRequirementModel(['minecraft:golden_carrot'], 175),
        ])
            .setEffects([{ 'kubejs:effects/undeadraid': 1 }])
            .setParentResearch('kubejs:combat/summonraid')
            .setSubtitle('com.kubejs.research.combat.undeadraid.subtitle')
    )
    event.addJson(`kubejs:researches/effects/undeadraid.json`, { "effect": true })

    
    event.addJson(`kubejs:researches/combat/pillagersoul.json`,
        new ColonyResearchModel('minecolonies:combat', 4, [
            new BuildingRequirementModel('alchemist', 5),
            new ItemRequirementModel(['minecraft:golden_carrot'], 175),
        ])
            .setEffects([{ 'kubejs:effects/pillagersoul': 1 }])
            .setParentResearch('kubejs:combat/advancedsouls')
            .setSubtitle('com.kubejs.research.combat.pillagersoul.subtitle')
    )
    event.addJson(`kubejs:researches/effects/pillagersoul.json`, { "effect": true })

})