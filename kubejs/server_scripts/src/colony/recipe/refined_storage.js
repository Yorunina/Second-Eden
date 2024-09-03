// priority: 500
const { $Recipe } = require("packages/net/minecraft/world/item/crafting/$Recipe")
const { ColonyCraftRecipes } = require("../../model/citizen_recipes_model")

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

    // 配方纠正
    event.remove({ output: 'refinedstorage:wrench' })
    event.shaped('refinedstorage:wrench', ['I I', 'III', ' I '], { I: 'refinedstorage:quartz_enriched_iron' })

    event.remove({ output: 'refinedstorage:network_card' })
    event.shaped('refinedstorage:network_card', ['III', 'PDP', 'III'], { I: 'refinedstorage:quartz_enriched_iron', P: 'minecraft:paper', D: 'minecraft:diamond' })

    event.remove({ output: 'refinedstorage:security_card' })
    event.shaped('refinedstorage:security_card', ['III', 'NSN', 'III'], { I: 'refinedstorage:quartz_enriched_iron', N: 'refinedstorage:network_card', S: 'refinedstorage:silicon' })

    event.remove({ output: 'refinedstorage:constructor' })
    event.shaped('refinedstorage:constructor', ['IEI', 'RLR', 'IEI'], { I: 'refinedstorage:quartz_enriched_iron', E: 'minecraft:ender_pearl', R: 'minecraft:redstone', L: 'refinedstorage:cable' })

    event.remove({ output: 'refinedstorage:destructor' })
    event.shaped('refinedstorage:destructor', ['IMI', 'RLR', 'IMI'], { I: 'refinedstorage:quartz_enriched_iron', M: 'minecraft:magma_cream', R: 'minecraft:redstone', L: 'refinedstorage:cable' })

    event.remove({ output: 'refinedstorage:exporter' })
    event.shapeless('refinedstorage:exporter', ['refinedstorage:cable', 'minecraft:black_dye', 'minecraft:ender_pearl'])

    event.remove({ output: 'refinedstorage:importer' })
    event.shapeless('refinedstorage:importer', ['refinedstorage:cable', 'minecraft:white_dye', 'minecraft:ender_pearl'])

    event.remove({ output: 'refinedstorage:external_storage' })
    event.shaped('refinedstorage:external_storage', ['IRI', 'CLC', 'IGI'], { I: 'refinedstorage:quartz_enriched_iron', C: 'minecraft:ender_chest', R: 'minecraft:redstone', L: 'refinedstorage:cable', G: 'minecraft:glowstone_dust' })

    event.remove({ output: 'refinedstorage:crafting_upgrade' })
    event.shaped('refinedstorage:crafting_upgrade', ['IEI', 'CUC', 'III'], { I: 'refinedstorage:quartz_enriched_iron', C: 'minecraft:crafting_table', E: 'minecraft:ender_pearl', U: 'refinedstorage:upgrade' })

    event.remove({ output: 'refinedstorage:detector' })
    event.shaped('refinedstorage:detector', ['IRI', 'CMC', 'IEI'], { I: 'refinedstorage:quartz_enriched_iron', C: 'minecraft:comparator', M: 'refinedstorage:machine_casing', E: 'minecraft:ender_pearl', R: 'minecraft:redstone' })

    event.remove({ output: 'refinedstorage:fluid_interface' })
    event.shapeless('refinedstorage:fluid_interface', ['refinedstorage:interface', 'minecraft:bucket'])

    event.remove({ output: 'minecolonies_compatibility:citizen_grid' })
    event.shapeless('minecolonies_compatibility:citizen_grid', [Ingredient.of('#refinedstorage:grid'), 'minecolonies:blockhutwarehouse'])


    event.remove({ output: 'refinedstorage:crafter' })
    event.remove({ output: 'refinedstorage:pattern_grid' })
    event.remove({ output: 'refinedstorage:pattern' })
    event.remove({ output: 'refinedstorage:crafting_monitor' })
    event.remove({ output: 'refinedstorage:crafter_manager' })
    event.remove({ output: 'refinedstorage:storage_monitor' })


    // 无线技术
    event.remove({ output: 'refinedstorage:network_receiver' })
    event.remove({ output: 'refinedstorage:network_transmitter' })
    event.remove({ output: 'refinedstorage:wireless_grid' })
    event.remove({ output: 'refinedstorage:wireless_universal_grid' })
    event.remove({ output: 'refinedstorage:wireless_fluid_grid' })
    event.remove({ output: 'refinedstorage:wireless_crafting_monitor' })
    event.remove({ output: 'refinedstorage:wireless_transmitter' })

    // 无限无线
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
    event.remove({ mod: 'refinedstorage', input: 'refinedstorage:advanced_processor' })
})

ServerEvents.highPriorityData(event => {
    // 石英进阶应用理论
    event.addJson(`kubejs:crafterrecipes/blacksmith/quartz_enriched_iron.json`,
        new ColonyCraftRecipes('blacksmith_crafting', Item.of('refinedstorage:quartz_enriched_iron', 3), [Item.of('kubejs:steel_ingot', 1), Item.of('minecraft:iron_ingot', 2), Item.of('refinedstorage:silicon', 1)])
            .setMinBuildingLevel(3)
            .setResearchId('kubejs:effects/advancedquartzuseage', true))
    event.addJson(`kubejs:crafterrecipes/blacksmith/silicon.json`,
        new ColonyCraftRecipes('blacksmith_crafting', Item.of('refinedstorage:silicon', 1), [Item.of('minecraft:quartz', 2)])
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



    // 自动制作管理
    event.addJson(`kubejs:crafterrecipes/mechanic/crafter.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('refinedstorage:crafter', 1), [Item.of('refinedstorage:machine_casing', 1), Item.of('refinedstorage:silicon', 16), Item.of('minecraft:crafting_table', 4)])
            .setMinBuildingLevel(3)
            .setResearchId('kubejs:effects/autocraftmanager', true))

    event.addJson(`kubejs:crafterrecipes/mechanic/pattern.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('refinedstorage:pattern', 1), [Item.of('refinedstorage:quartz_enriched_iron', 3), Item.of('minecraft:redstone', 3), Item.of('minecraft:glass', 3)])
            .setMinBuildingLevel(3)
            .setResearchId('kubejs:effects/autocraftmanager', true))

    event.addJson(`kubejs:crafterrecipes/mechanic/pattern_grid.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('refinedstorage:pattern_grid', 1), [Item.of('refinedstorage:pattern', 1), Item.of('refinedstorage:grid', 1)])
            .setMinBuildingLevel(3)
            .setResearchId('kubejs:effects/autocraftmanager', true))

    event.addJson(`kubejs:crafterrecipes/mechanic/crafting_monitor.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('refinedstorage:crafting_monitor', 1), [Item.of('refinedstorage:pattern', 4), Item.of('refinedstorage:machine_casing', 1), Item.of('minecraft:glass', 4)])
            .setMinBuildingLevel(3)
            .setResearchId('kubejs:effects/autocraftmanager', true))

    event.addJson(`kubejs:crafterrecipes/mechanic/crafter_manager.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('refinedstorage:crafter_manager', 1), [Item.of('refinedstorage:machine_casing', 1), Item.of('refinedstorage:quartz_enriched_iron', 3), Item.of('refinedstorage:crafter', 3), Item.of('minecraft:glass', 3)])
            .setMinBuildingLevel(3)
            .setResearchId('kubejs:effects/autocraftmanager', true))

    event.addJson(`kubejs:crafterrecipes/mechanic/storage_monitor.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('refinedstorage:storage_monitor', 1), [Item.of('refinedstorage:machine_casing', 1), Item.of('refinedstorage:quartz_enriched_iron', 3), Item.of('minecraft:ender_chest', 3), Item.of('minecraft:glass', 3)])
            .setMinBuildingLevel(3)
            .setResearchId('kubejs:effects/autocraftmanager', true))

    // 无线技术
    event.addJson(`kubejs:crafterrecipes/mechanic/network_receiver.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('refinedstorage:network_receiver', 1), [Item.of('minecraft:ender_pearl', 4), Item.of('refinedstorage:machine_casing', 1), Item.of('minecraft:netherite_ingot', 1)])
            .setMinBuildingLevel(3)
            .setResearchId('kubejs:effects/wirelessaccess', true))

    event.addJson(`kubejs:crafterrecipes/mechanic/network_transmitter.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('refinedstorage:network_transmitter', 1), [Item.of('minecraft:ender_pearl', 4), Item.of('refinedstorage:machine_casing', 1), Item.of('minecraft:netherite_ingot', 1)])
            .setMinBuildingLevel(3)
            .setResearchId('kubejs:effects/wirelessaccess', true))

    event.addJson(`kubejs:crafterrecipes/mechanic/wireless_transmitter.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('refinedstorage:wireless_transmitter', 1), [Item.of('minecraft:ender_pearl', 1), Item.of('refinedstorage:machine_casing', 1), Item.of('refinedstorage:quartz_enriched_iron', 6)])
            .setMinBuildingLevel(3)
            .setResearchId('kubejs:effects/wirelessaccess', true))

    event.addJson(`kubejs:crafterrecipes/mechanic/creative_wireless_universal_grid.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('universalgrid:creative_wireless_universal_grid', 1), [Item.of('refinedstorage:network_card', 3), Item.of('refinedstorage:wireless_transmitter', 1), Item.of('refinedstorage:crafting_grid', 1)])
            .setMinBuildingLevel(3)
            .setResearchId('kubejs:effects/wirelessaccess', true))

    // 无穷无尽多维理论
    event.addJson(`kubejs:crafterrecipes/mechanic/creative_storage_disk.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('refinedstorage:creative_storage_disk', 1), [Item.of('refinedstorage:64k_storage_part', 64), Item.of('refinedstorage:silicon', 64), Item.of('kubejs:echo_crystal', 16), Item.of('refinedstorage:storage_housing')])
            .setMinBuildingLevel(5)
            .setResearchId('kubejs:effects/creativediskunlock', true))

    event.addJson(`kubejs:crafterrecipes/mechanic/creative_fluid_storage_disk.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('refinedstorage:creative_fluid_storage_disk', 1), [Item.of('refinedstorage:64k_storage_part', 64), Item.of('minecraft:glass', 64), Item.of('kubejs:echo_crystal', 16), Item.of('refinedstorage:storage_housing')])
            .setMinBuildingLevel(5)
            .setResearchId('kubejs:effects/creativediskunlock', true))

    event.addJson(`kubejs:crafterrecipes/mechanic/creative_storage_block.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('refinedstorage:creative_storage_block', 1), [Item.of('refinedstorage:64k_storage_part', 64), Item.of('refinedstorage:silicon', 64), Item.of('kubejs:echo_crystal', 16), Item.of('refinedstorage:machine_casing')])
            .setMinBuildingLevel(5)
            .setResearchId('kubejs:effects/creativediskunlock', true))

    event.addJson(`kubejs:crafterrecipes/mechanic/creative_fluid_storage_block.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('refinedstorage:creative_fluid_storage_block', 1), [Item.of('refinedstorage:64k_storage_part', 64), Item.of('minecraft:glass', 64), Item.of('kubejs:echo_crystal', 16), Item.of('refinedstorage:machine_casing')])
            .setMinBuildingLevel(5)
            .setResearchId('kubejs:effects/creativediskunlock', true))

    // 无限无线通讯协议
    event.addJson(`kubejs:crafterrecipes/enchanter/infinity_card.json`,
        new ColonyCraftRecipes('enchanter_custom', Item.of('rsinfinitybooster:infinity_card', 1), [Item.of('refinedstorage:network_card', 16), Item.of('kubejs:echo_crystal', 16), Item.of('minecraft:chorus_fruit', 64)])
            .setMinBuildingLevel(5)
            .setResearchId('kubejs:effects/infinitywirelessaccess', true))

    event.addJson(`kubejs:crafterrecipes/enchanter/dimension_card.json`,
        new ColonyCraftRecipes('enchanter_custom', Item.of('rsinfinitybooster:dimension_card', 1), [Item.of('refinedstorage:network_card', 16), Item.of('kubejs:echo_crystal', 16), Item.of('minecraft:ender_eye', 32)])
            .setMinBuildingLevel(5)
            .setResearchId('kubejs:effects/infinitywirelessaccess', true))
})
