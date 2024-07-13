// priority: 500
const { ColonyCraftRecipes } = require("../../model/citizen_recipes_model")

ServerEvents.highPriorityData(event => {
    // 奇点化
    event.addJson(`kubejs:crafterrecipes/alchemist/singulize_potion.json`,
        new ColonyCraftRecipes('alchemist_crafting', Item.of('kubejs:singulize_potion'), [Item.of('graveyard:corruption', 24), Item.of('minecraft:nether_wart', 24), Item.of('cagedmobs:nether_star_fragment', 1)])
            .setMinBuildingLevel(5)
            .setResearchId('kubejs:effects/singulize', true))

    // SingularityList.forEach(ctx => {
    //     event.addJson(`kubejs:crafterrecipes/blacksmith/${ctx.name}.json`,
    //         new ColonyCraftRecipes('blacksmith_crafting', ctx.output, [ctx.input])
    //             .setTool('singulize_potion')
    //             .setMinBuildingLevel(5)
    //             .setResearchId('kubejs:effects/singulize', true))
    // })
})
