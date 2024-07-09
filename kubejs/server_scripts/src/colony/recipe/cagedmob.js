// priority: 500
const { ColonyCraftRecipes } = require("../../model/citizen_recipes_model")

ServerEvents.recipes(event => {
    // event.remove({ output: 'cagedmobs:mob_cage' })
})

ServerEvents.highPriorityData(event => {
    // todo 配方材料
    event.addJson(`kubejs:crafterrecipes/blacksmith/mob_cage.json`,
        new ColonyCraftRecipes('blacksmith_crafting', Item.of('cagedmobs:mob_cage'),
            [Item.of('minecraft:iron_ingot', 4), Item.of('minecraft:gold_ingot', 4), Item.of('minecraft:crafting_table')])
            .setResearchId('kubejs:effects/locksoulincage', true))

    event.addJson(`kubejs:crafterrecipes/blacksmith/hopping_mob_cage.json`,
        new ColonyCraftRecipes('blacksmith_crafting', Item.of('cagedmobs:hopping_mob_cage'),
            [Item.of('minecraft:iron_ingot', 4), Item.of('minecraft:gold_ingot', 4), Item.of('minecraft:crafting_table')])
            .setResearchId('kubejs:effects/hoppingcage', true))

    event.addJson(`kubejs:crafterrecipes/blacksmith/speed_i_upgrade.json`,
        new ColonyCraftRecipes('blacksmith_crafting', Item.of('cagedmobs:speed_i_upgrade'),
            [Item.of('minecraft:iron_ingot', 4), Item.of('minecraft:gold_ingot', 4), Item.of('minecraft:crafting_table')])
            .setResearchId('kubejs:effects/hoppingcage', true))
})