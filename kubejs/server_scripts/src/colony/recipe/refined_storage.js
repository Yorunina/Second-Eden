// priority: 500
const { ColonyCraftRecipes } = require('../../model/citizen_recipes_model')

ServerEvents.recipes(event => {
    event.remove({ output: 'refinedstorage:quartz_enriched_iron' })
    event.remove({ output: 'refinedstorage:silicon' })

    event.remove({ output: 'refinedstorage:machine_casing' })
    event.remove({ output: 'refinedstorage:controller' })
    event.remove({ output: 'refinedstorage:grid' })
    event.remove({ output: 'refinedstorage:crafting_grid' })
    event.remove({ output: 'refinedstorage:fluid_grid' })
    event.remove({ output: 'refinedstorage:disk_manipulator' })
    event.remove({ output: 'refinedstorage:disk_drive' })

    
})

ServerEvents.highPriorityData(event => {
    // 石英进阶应用理论
    event.addJson(`kubejs:crafterrecipes/smelter/quartz_enriched_iron.json`,
        new ColonyCraftRecipes('smelter_custom', Item.of('refinedstorage:quartz_enriched_iron', 3), [Item.of('kubejs:steel_ingot', 1), Item.of('minecraft:iron_ingot', 2), Item.of('minecraft:quartz', 3)])
            .setMinBuildingLevel(3)
            .setResearchId('kubejs:effects/advancedquartzuseage', true))
    event.addJson(`kubejs:crafterrecipes/smelter/silicon.json`,
        new ColonyCraftRecipes('smelter_custom', Item.of('refinedstorage:silicon', 1), [Item.of('minecraft:quartz', 2)])
            .setMinBuildingLevel(3)
            .setResearchId('kubejs:effects/advancedquartzuseage', true))

    // 多维度存储理论
    event.addJson(`kubejs:crafterrecipes/mechanic/machine_casing.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('refinedstorage:machine_casing', 1), [Item.of('refinedstorage:quartz_enriched_iron', 8), Item.of('minecraft:redstone', 8), Item.of('minecraft:glowstone_dust', 8)])
            .setMinBuildingLevel(3)
            .setResearchId('kubejs:effects/multidimstoragetheory', true))
            
    event.addJson(`kubejs:crafterrecipes/enchanter/controller.json`,
        new ColonyCraftRecipes('enchanter_custom', Item.of('refinedstorage:controller', 1), [Item.of('refinedstorage:machine_casing', 1), Item.of('minecraft:soul_lantern', 1), Item.of('kubejs:echo_crystal', 1), Item.of('refinedstorage:silicon', 4)])
            .setMinBuildingLevel(3)
            .setResearchId('kubejs:effects/multidimstoragetheory', true))
})
