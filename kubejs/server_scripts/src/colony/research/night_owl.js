// priority: 500
const { ColonyResearchModel, BuildingRequirementModel, ItemRequirementModel } = require("../../model/colony_research_model")

ServerEvents.highPriorityData(event => {
    event.addJson(`kubejs:researches/civilian/nightowl3.json`,
        new ColonyResearchModel('minecolonies:civilian', 5, [
            new BuildingRequirementModel('hospital', 3),
            new ItemRequirementModel(['minecraft:golden_carrot'], 125),
        ])
            .setEffects([{ 'minecolonies:effects/workingdayhaddition': 3 }])
            .setParentResearch('minecolonies:civilian/nightowl2')
            .setSubtitle('com.kubejs.research.civilian.nightowl3.subtitle')
    )

    event.addJson(`kubejs:researches/civilian/nightowl4.json`,
        new ColonyResearchModel('minecolonies:civilian', 5, [
            new BuildingRequirementModel('hospital', 5),
            new ItemRequirementModel(['minecraft:golden_carrot'], 175),
        ])
            .setEffects([{ 'minecolonies:effects/workingdayhaddition': 4 }])
            .setParentResearch('kubejs:civilian/nightowl3')
            .setSubtitle('com.kubejs.research.civilian.nightowl4.subtitle')
    )
})