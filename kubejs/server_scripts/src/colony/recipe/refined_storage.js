// priority: 500
const { $Recipe } = require("packages/net/minecraft/world/item/crafting/$Recipe")
const { ColonyCraftRecipes } = require("../../model/citizen_recipes_model")

ServerEvents.recipes(event => {
    event.remove({ output: 'refinedstorage:quartz_enriched_iron' })
    event.remove({ output: 'refinedstorage:silicon' })

    event.remove({ output: 'refinedstorage:machine_casing' })
    event.remove({ output: 'refinedstorage:storage_housing' })
    event.remove({ output: 'refinedstorage:controller' })
    event.remove({ output: 'refinedstorage:grid' })
    event.remove({ output: 'refinedstorage:crafting_grid' })
    event.remove({ output: 'refinedstorage:fluid_grid' })
    event.remove({ output: 'refinedstorage:disk_manipulator' })
    event.remove({ output: 'refinedstorage:disk_drive' })
    event.remove({ output: 'refinedstorage:1k_storage_part' })
    event.remove({ output: 'refinedstorage:4k_storage_part' })
    event.remove({ output: 'refinedstorage:16k_storage_part' })
    event.remove({ output: 'refinedstorage:64k_storage_part' })
    event.remove({ output: 'refinedstorage:64k_fluid_storage_part' })
    event.remove({ output: 'refinedstorage:256k_fluid_storage_part' })
    event.remove({ output: 'refinedstorage:1024k_fluid_storage_part' })
    event.remove({ output: 'refinedstorage:4096k_fluid_storage_part' })

    event.remove({ output: 'refinedstorage:creative_storage_disk' })
    event.remove({ output: 'refinedstorage:creative_fluid_storage_disk' })
    event.remove({ output: 'refinedstorage:creative_storage_block' })
    event.remove({ output: 'refinedstorage:creative_fluid_storage_block' })
    event.remove({ output: 'refinedstorage:upgrade' })

    // todo 自动制作管理缺少部分配方
    event.remove({ output: 'refinedstorage:crafter' })
    // event.remove({ output: 'refinedstorage:network_transmitter' })
    event.findRecipes().forEach(/**@param {$Recipe} recipe*/recipe => {
        recipe.replaceInput('refinedstorage:basic_processor', Item.of('minecraft:zombie_head'))
        recipe.replaceInput('refinedstorage:improved_processor', Item.of('minecraft:creeper_head'))
        recipe.replaceInput('refinedstorage:advanced_processor', Item.of('minecraft:skeleton_skull'))
        recipe.replaceInput('refinedstorage:construction_core', Item.of('minecraft:wither_skeleton_skull'))
        recipe.replaceInput('refinedstorage:destruction_core', Item.of('minecraft:zombie_head'))
    })
    // event.remove({ output: 'refinedstorage:crafter_manager' })
    // event.remove({ output: 'refinedstorage:wireless_transmitter' })
    // event.remove({ output: 'refinedstorage:network_receiver' })
    // event.remove({ output: 'refinedstorage:pattern_grid' })
    // event.remove({ output: 'refinedstorage:destructor' })
    // event.remove({ output: 'refinedstorage:crafting_monitor' })
    // event.remove({ output: 'refinedstorage:constructor' })
    // event.remove({ output: 'refinedstorage:network_card' })
    // event.remove({ output: 'refinedstorage:fluid_interface' })
    // event.remove({ output: 'refinedstorage:storage_monitor' })
    // event.remove({ output: 'refinedstorage:detector' })
    // event.remove({ output: 'refinedstorage:exporter' })
    // event.remove({ output: 'refinedstorage:importer' })
    // event.remove({ output: 'refinedstorage:external_storage' })
    // event.remove({ output: 'refinedstorage:wrench' })
    // event.remove({ output: 'refinedstorage:crafting_upgrade' })
    // event.remove({ output: 'refinedstorage:security_card' })

    event.remove({ output: 'rsinfinitybooster:infinity_card' })
    event.remove({ output: 'rsinfinitybooster:dimension_card' })

    // 删除其余配方防止混淆
    event.remove({ output: 'refinedstorage:raw_advanced_processor' })
    event.remove({ output: 'refinedstorage:basic_processor' })
    event.remove({ output: 'refinedstorage:improved_processor' })
    event.remove({ output: 'refinedstorage:advanced_processor' })
    event.remove({ output: 'refinedstorage:construction_core' })
    event.remove({ output: 'refinedstorage:processor_binding' })
    event.remove({ output: 'refinedstorage:destruction_core' })
    event.remove({ output: 'refinedstorage:raw_basic_processor' })
    event.remove({ output: 'refinedstorage:raw_improved_processor' })
})

ServerEvents.highPriorityData(event => {
    // 石英进阶应用理论
    event.addJson(`kubejs:crafterrecipes/smelter/quartz_enriched_iron.json`,
        new ColonyCraftRecipes('smelter_custom', Item.of('refinedstorage:quartz_enriched_iron', 3), [Item.of('kubejs:steel_ingot', 1), Item.of('minecraft:iron_ingot', 2), Item.of('refinedstorage:silicon', 1)])
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

    event.addJson(`kubejs:crafterrecipes/mechanic/storage_housing.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('refinedstorage:storage_housing', 1), [Item.of('refinedstorage:quartz_enriched_iron', 3), Item.of('minecraft:redstone', 3), Item.of('minecraft:glass', 2)])
            .setMinBuildingLevel(3)
            .setResearchId('kubejs:effects/multidimstoragetheory', true))

    event.addJson(`kubejs:crafterrecipes/enchanter/controller.json`,
        new ColonyCraftRecipes('enchanter_custom', Item.of('refinedstorage:controller', 1), [Item.of('refinedstorage:machine_casing', 1), Item.of('minecraft:soul_lantern', 1), Item.of('kubejs:echo_crystal', 1), Item.of('refinedstorage:silicon', 4)])
            .setMinBuildingLevel(3)
            .setResearchId('kubejs:effects/multidimstoragetheory', true))

    event.addJson(`kubejs:crafterrecipes/mechanic/grid.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('refinedstorage:grid', 1), [Item.of('refinedstorage:machine_casing', 1), Item.of('minecraft:glass', 4), Item.of('refinedstorage:silicon', 4)])
            .setMinBuildingLevel(3)
            .setResearchId('kubejs:effects/multidimstoragetheory', true))

    event.addJson(`kubejs:crafterrecipes/mechanic/crafting_grid.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('refinedstorage:crafting_grid', 1), [Item.of('refinedstorage:grid', 1), Item.of('minecraft:crafting_table', 4)])
            .setMinBuildingLevel(3)
            .setResearchId('kubejs:effects/multidimstoragetheory', true))

    event.addJson(`kubejs:crafterrecipes/mechanic/fluid_grid.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('refinedstorage:fluid_grid', 1), [Item.of('refinedstorage:grid', 1), Item.of('minecraft:glass', 16)])
            .setMinBuildingLevel(3)
            .setResearchId('kubejs:effects/multidimstoragetheory', true))

    event.addJson(`kubejs:crafterrecipes/mechanic/disk_manipulator.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('refinedstorage:disk_manipulator', 1), [Item.of('refinedstorage:machine_casing', 1), Item.of('refinedstorage:quartz_enriched_iron', 8), Item.of('refinedstorage:1k_storage_part', 1)])
            .setMinBuildingLevel(3)
            .setResearchId('kubejs:effects/multidimstoragetheory', true))

    event.addJson(`kubejs:crafterrecipes/mechanic/disk_drive.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('refinedstorage:disk_drive', 1), [Item.of('refinedstorage:machine_casing', 1), Item.of('refinedstorage:quartz_enriched_iron', 8), Item.of('minecraft:ender_eye', 8)])
            .setMinBuildingLevel(3)
            .setResearchId('kubejs:effects/multidimstoragetheory', true))

    event.addJson(`kubejs:crafterrecipes/mechanic/1k_storage_part.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('refinedstorage:1k_storage_part', 1), [Item.of('refinedstorage:quartz_enriched_iron', 4), Item.of('minecraft:ender_eye', 1), Item.of('refinedstorage:silicon', 8)])
            .setMinBuildingLevel(3)
            .setResearchId('kubejs:effects/multidimstoragetheory', true))

    event.addJson(`kubejs:crafterrecipes/mechanic/4k_storage_part.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('refinedstorage:4k_storage_part', 1), [Item.of('refinedstorage:1k_storage_part', 4), Item.of('refinedstorage:silicon', 8)])
            .setMinBuildingLevel(3)
            .setResearchId('kubejs:effects/multidimstoragetheory', true))


    event.addJson(`kubejs:crafterrecipes/mechanic/64k_fluid_storage_part.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('refinedstorage:64k_fluid_storage_part', 1), [Item.of('refinedstorage:quartz_enriched_iron', 4), Item.of('minecraft:ender_eye', 1), Item.of('minecraft:glass', 8)])
            .setMinBuildingLevel(3)
            .setResearchId('kubejs:effects/multidimstoragetheory', true))

    event.addJson(`kubejs:crafterrecipes/mechanic/256k_fluid_storage_part.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('refinedstorage:256k_fluid_storage_part', 1), [Item.of('refinedstorage:64k_fluid_storage_part', 4), Item.of('refinedstorage:silicon', 8)])
            .setMinBuildingLevel(3)
            .setResearchId('kubejs:effects/multidimstoragetheory', true))

    // 更多磁盘
    event.addJson(`kubejs:crafterrecipes/mechanic/16k_storage_part.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('refinedstorage:16k_storage_part', 1), [Item.of('refinedstorage:4k_storage_part', 4), Item.of('refinedstorage:silicon', 8)])
            .setMinBuildingLevel(4)
            .setResearchId('kubejs:effects/morediskunlock', true))

    event.addJson(`kubejs:crafterrecipes/mechanic/64k_storage_part.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('refinedstorage:64k_storage_part', 1), [Item.of('refinedstorage:16k_storage_part', 4), Item.of('refinedstorage:silicon', 8)])
            .setMinBuildingLevel(4)
            .setResearchId('kubejs:effects/morediskunlock', true))

    event.addJson(`kubejs:crafterrecipes/mechanic/1024k_fluid_storage_part.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('refinedstorage:1024k_fluid_storage_part', 1), [Item.of('refinedstorage:256k_fluid_storage_part', 4), Item.of('refinedstorage:silicon', 8)])
            .setMinBuildingLevel(4)
            .setResearchId('kubejs:effects/morediskunlock', true))

    event.addJson(`kubejs:crafterrecipes/mechanic/4096k_fluid_storage_part.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('refinedstorage:4096k_fluid_storage_part', 1), [Item.of('refinedstorage:1024k_fluid_storage_part', 4), Item.of('refinedstorage:silicon', 8)])
            .setMinBuildingLevel(4)
            .setResearchId('kubejs:effects/morediskunlock', true))

    event.addJson(`kubejs:crafterrecipes/mechanic/upgrade.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('refinedstorage:upgrade', 1), [Item.of('refinedstorage:quartz_enriched_iron', 6), Item.of('minecraft:glass', 2), Item.of('refinedstorage:silicon', 4)])
            .setMinBuildingLevel(4)
            .setResearchId('kubejs:effects/morediskunlock', true))

    // 无穷无尽多维理论
    event.addJson(`kubejs:crafterrecipes/mechanic/creative_storage_disk.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('refinedstorage:creative_storage_disk', 1), [Item.of('refinedstorage:64k_storage_part', 64), Item.of('refinedstorage:silicon', 128), Item.of('kubejs:echo_crystal', 16), Item.of('refinedstorage:storage_housing')])
            .setMinBuildingLevel(5)
            .setResearchId('kubejs:effects/creativediskunlock', true))

    event.addJson(`kubejs:crafterrecipes/mechanic/creative_fluid_storage_disk.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('refinedstorage:creative_fluid_storage_disk', 1), [Item.of('refinedstorage:64k_storage_part', 64), Item.of('minecraft:glass', 128), Item.of('kubejs:echo_crystal', 16), Item.of('refinedstorage:storage_housing')])
            .setMinBuildingLevel(5)
            .setResearchId('kubejs:effects/creativediskunlock', true))

    event.addJson(`kubejs:crafterrecipes/mechanic/creative_storage_block.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('refinedstorage:creative_storage_block', 1), [Item.of('refinedstorage:64k_storage_part', 64), Item.of('refinedstorage:silicon', 128), Item.of('kubejs:echo_crystal', 16), Item.of('refinedstorage:machine_casing')])
            .setMinBuildingLevel(5)
            .setResearchId('kubejs:effects/creativediskunlock', true))

    event.addJson(`kubejs:crafterrecipes/mechanic/creative_fluid_storage_block.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('refinedstorage:creative_fluid_storage_block', 1), [Item.of('refinedstorage:64k_storage_part', 64), Item.of('minecraft:glass', 128), Item.of('kubejs:echo_crystal', 16), Item.of('refinedstorage:machine_casing')])
            .setMinBuildingLevel(5)
            .setResearchId('kubejs:effects/creativediskunlock', true))

    // 自动制作管理
    event.addJson(`kubejs:crafterrecipes/mechanic/crafter.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('refinedstorage:crafter', 1), [Item.of('refinedstorage:machine_casing', 1), Item.of('refinedstorage:silicon', 16), Item.of('minecraft:crafting_table', 4)])
            .setMinBuildingLevel(3)
            .setResearchId('kubejs:effects/autocraftmanage', true))

    // todo 自动制作管理,删除原配方对于某些特定物品的依赖
    // ['refinedstorage:network_transmitter', 'refinedstorage:crafter_manager', 'refinedstorage:wireless_transmitter', 'refinedstorage:network_receiver', 'refinedstorage:pattern_grid', 'refinedstorage:destructor', 'refinedstorage:crafting_monitor', 'refinedstorage:constructor', 'refinedstorage:network_card', 'refinedstorage:fluid_interface', 'refinedstorage:storage_monitor', 'refinedstorage:detector', 'refinedstorage:exporter', 'refinedstorage:importer', 'refinedstorage:external_storage', 'refinedstorage:wrench', 'refinedstorage:crafting_upgrade', 'refinedstorage:security_card']

    // 无限无线通讯协议
    event.addJson(`kubejs:crafterrecipes/enchanter/infinity_card.json`,
        new ColonyCraftRecipes('enchanter_custom', Item.of('rsinfinitybooster:infinity_card', 1), [Item.of('refinedstorage:network_card', 16), Item.of('kubejs:echo_crystal', 16), Item.of('minecraft:chorus_fruit', 128)])
            .setMinBuildingLevel(5)
            .setResearchId('kubejs:effects/infinitywirelessaccess', true))

    event.addJson(`kubejs:crafterrecipes/enchanter/dimension_card.json`,
        new ColonyCraftRecipes('enchanter_custom', Item.of('rsinfinitybooster:dimension_card', 1), [Item.of('refinedstorage:network_card', 16), Item.of('kubejs:echo_crystal', 16), Item.of('minecraft:ender_eye', 32)])
            .setMinBuildingLevel(5)
            .setResearchId('kubejs:effects/infinitywirelessaccess', true))
})
