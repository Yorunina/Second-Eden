// priority: 500
const { ColonyCraftRecipes } = require("../../model/citizen_recipes_model")

ServerEvents.recipes(event => {
    event.remove({ output: 'waystones:warp_stone' })
    event.remove({ output: 'waystones:warp_dust' })
})

ServerEvents.highPriorityData(event => {
    event.addJson(`kubejs:crafterrecipes/enchanter/warp_stone.json`,
        new ColonyCraftRecipes('enchanter_custom', Item.of('waystones:warp_stone'), [Item.of('minecraft:ender_pearl', 4), Item.of('minecraft:amethyst_shard', 4), Item.of('minecraft:emerald', 1)])
            .setResearchId('kubejs:effects/waystonesunlock', true))

    event.addJson(`kubejs:crafterrecipes/enchanter/warp_dust.json`,
        new ColonyCraftRecipes('enchanter_custom', Item.of('waystones:warp_dust'), [Item.of('minecraft:ender_pearl', 1), Item.of('minecraft:amethyst_shard', 1)])
            .setResearchId('kubejs:effects/waystonesunlock', true))
})