// priority: 500
const { ColonyCraftRecipes } = require("../../model/citizen_recipes_model")

ServerEvents.highPriorityData(event => {
    // 奇点化
    event.addJson(`kubejs:crafterrecipes/alchemist/singulize_potion.json`,
        new ColonyCraftRecipes('alchemist_crafting', Item.of('kubejs:singulize_potion'), [Item.of('graveyard:corruption', 24), Item.of('minecraft:nether_wart', 24), Item.of('minecraft:nether_star', 1)])
            .setMinBuildingLevel(5)
            .setResearchId('kubejs:effects/singulize', true))

    event.addJson(`kubejs:crafterrecipes/blacksmith/singularity_copper.json`,
        new ColonyCraftRecipes('blacksmith_crafting', Item.of('kubejs:singularity_copper'), [Item.of('minecraft:copper_ingot', 1024)])
            .setTool('singulize_potion')
            .setMinBuildingLevel(5)
            .setResearchId('kubejs:effects/singulize', true))

    event.addJson(`kubejs:crafterrecipes/blacksmith/singularity_iron.json`,
        new ColonyCraftRecipes('blacksmith_crafting', Item.of('kubejs:singularity_iron'), [Item.of('minecraft:iron_ingot', 1024)])
            .setTool('singulize_potion')
            .setMinBuildingLevel(5)
            .setResearchId('kubejs:effects/singulize', true))

    event.addJson(`kubejs:crafterrecipes/blacksmith/singularity_gold.json`,
        new ColonyCraftRecipes('blacksmith_crafting', Item.of('kubejs:singularity_gold'), [Item.of('minecraft:gold_ingot', 1024)])
            .setTool('singulize_potion')
            .setMinBuildingLevel(5)
            .setResearchId('kubejs:effects/singulize', true))

    event.addJson(`kubejs:crafterrecipes/blacksmith/singularity_netherite.json`,
        new ColonyCraftRecipes('blacksmith_crafting', Item.of('kubejs:singularity_netherite'), [Item.of('minecraft:netherite_ingot', 1024)])
            .setTool('singulize_potion')
            .setMinBuildingLevel(5)
            .setResearchId('kubejs:effects/singulize', true))

    event.addJson(`kubejs:crafterrecipes/blacksmith/singularity_diamond.json`,
        new ColonyCraftRecipes('blacksmith_crafting', Item.of('kubejs:singularity_diamond'), [Item.of('minecraft:diamond', 1024)])
            .setTool('singulize_potion')
            .setMinBuildingLevel(5)
            .setResearchId('kubejs:effects/singulize', true))

    event.addJson(`kubejs:crafterrecipes/blacksmith/singularity_emerald.json`,
        new ColonyCraftRecipes('blacksmith_crafting', Item.of('kubejs:singularity_emerald'), [Item.of('minecraft:emerald', 1024)])
            .setTool('singulize_potion')
            .setMinBuildingLevel(5)
            .setResearchId('kubejs:effects/singulize', true))

    event.addJson(`kubejs:crafterrecipes/blacksmith/singularity_amethyst.json`,
        new ColonyCraftRecipes('blacksmith_crafting', Item.of('kubejs:singularity_amethyst'), [Item.of('minecraft:amethyst_shard', 1024)])
            .setTool('singulize_potion')
            .setMinBuildingLevel(5)
            .setResearchId('kubejs:effects/singulize', true))

    event.addJson(`kubejs:crafterrecipes/blacksmith/singularity_prismarine.json`,
        new ColonyCraftRecipes('blacksmith_crafting', Item.of('kubejs:singularity_prismarine'), [Item.of('minecraft:prismarine', 1024)])
            .setTool('singulize_potion')
            .setMinBuildingLevel(5)
            .setResearchId('kubejs:effects/singulize', true))

    event.addJson(`kubejs:crafterrecipes/blacksmith/singularity_quartz.json`,
        new ColonyCraftRecipes('blacksmith_crafting', Item.of('kubejs:singularity_quartz'), [Item.of('minecraft:quartz', 1024)])
            .setTool('singulize_potion')
            .setMinBuildingLevel(5)
            .setResearchId('kubejs:effects/singulize', true))

    event.addJson(`kubejs:crafterrecipes/blacksmith/singularity_lapis.json`,
        new ColonyCraftRecipes('blacksmith_crafting', Item.of('kubejs:singularity_lapis'), [Item.of('minecraft:lapis_lazuli', 1024)])
            .setTool('singulize_potion')
            .setMinBuildingLevel(5)
            .setResearchId('kubejs:effects/singulize', true))

    event.addJson(`kubejs:crafterrecipes/blacksmith/singularity_redstone.json`,
        new ColonyCraftRecipes('blacksmith_crafting', Item.of('kubejs:singularity_redstone'), [Item.of('minecraft:redstone_block', 1024)])
            .setTool('singulize_potion')
            .setMinBuildingLevel(5)
            .setResearchId('kubejs:effects/singulize', true))

    event.addJson(`kubejs:crafterrecipes/blacksmith/singularity_glowstone.json`,
        new ColonyCraftRecipes('blacksmith_crafting', Item.of('kubejs:singularity_glowstone'), [Item.of('minecraft:glowstone', 1024)])
            .setTool('singulize_potion')
            .setMinBuildingLevel(5)
            .setResearchId('kubejs:effects/singulize', true))

    event.addJson(`kubejs:crafterrecipes/blacksmith/singularity_coal.json`,
        new ColonyCraftRecipes('blacksmith_crafting', Item.of('kubejs:singularity_coal'), [Item.of('minecraft:coal', 1024)])
            .setTool('singulize_potion')
            .setMinBuildingLevel(5)
            .setResearchId('kubejs:effects/singulize', true))

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

    // 无限无线通讯协议
    event.addJson(`kubejs:crafterrecipes/enchanter/infinity_card.json`,
        new ColonyCraftRecipes('enchanter_custom', Item.of('rsinfinitybooster:infinity_card', 1), [Item.of('refinedstorage:network_card', 16), Item.of('kubejs:echo_crystal', 16), Item.of('minecraft:chorus_fruit', 128)])
            .setMinBuildingLevel(5)
            .setResearchId('kubejs:effects/infinitywirelessaccess', true))

    event.addJson(`kubejs:crafterrecipes/enchanter/dimension_card.json`,
        new ColonyCraftRecipes('enchanter_custom', Item.of('rsinfinitybooster:dimension_card', 1), [Item.of('refinedstorage:network_card', 16), Item.of('kubejs:echo_crystal', 16), Item.of('minecraft:ender_eye', 32)])
            .setMinBuildingLevel(5)
            .setResearchId('kubejs:effects/infinitywirelessaccess', true))

    // 中子素收集
    // todo 需要测试配方以及合理性，补充低级别配方奖励
    event.addJson(`kubejs:crafterrecipes/blacksmith/sifter_mesh_netherite.json`,
        new ColonyCraftRecipes('blacksmith_crafting', Item.of('kubejs:sifter_mesh_netherite', 1), [Item.of('minecraft:netherite_ingot', 1)])
            .setMinBuildingLevel(5)
            .setResearchId('kubejs:effects/neutronpilesift', true))

    // 中子材料应用
    event.addJson(`kubejs:crafterrecipes/mechanic/neutron_sizing_machinery.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('kubejs:neutron_sizing_machinery'), [Item.of('kubejs:neutron_ingot', 1), Item.of('kubejs:iridium_ingot', 3), Item.of('immersive_aircraft:eco_engine', 8), Item.of('kubejs:singulize_potion', 1)])
            .setMinBuildingLevel(5)
            .setResearchId('kubejs:effects/neutronmaterialapplication', true))


    event.addJson(`kubejs:crafterrecipes/blacksmith/neutron_helmet.json`,
        new ColonyCraftRecipes('blacksmith_crafting', Item.of('neutron_helmet'), [Item.of('kubejs:neutron_ingot', 1)])
            .setTool('sizing_machinery')
            .setMinBuildingLevel(5)
            .setResearchId('kubejs:effects/neutronmaterialapplication', true))
    event.addJson(`kubejs:crafterrecipes/blacksmith/neutron_helmet.json`,
        new ColonyCraftRecipes('blacksmith_crafting', Item.of('neutron_chestplate'), [Item.of('kubejs:neutron_ingot', 1)])
            .setTool('sizing_machinery')
            .setMinBuildingLevel(5)
            .setResearchId('kubejs:effects/neutronmaterialapplication', true))
    event.addJson(`kubejs:crafterrecipes/blacksmith/neutron_helmet.json`,
        new ColonyCraftRecipes('blacksmith_crafting', Item.of('neutron_leggings'), [Item.of('kubejs:neutron_ingot', 1)])
            .setTool('sizing_machinery')
            .setMinBuildingLevel(5)
            .setResearchId('kubejs:effects/neutronmaterialapplication', true))
    event.addJson(`kubejs:crafterrecipes/blacksmith/neutron_helmet.json`,
        new ColonyCraftRecipes('blacksmith_crafting', Item.of('neutron_boots'), [Item.of('kubejs:neutron_ingot', 1)])
            .setTool('sizing_machinery')
            .setMinBuildingLevel(5)
            .setResearchId('kubejs:effects/neutronmaterialapplication', true))
    event.addJson(`kubejs:crafterrecipes/blacksmith/neutron_helmet.json`,
        new ColonyCraftRecipes('blacksmith_crafting', Item.of('neutron_sword'), [Item.of('kubejs:neutron_ingot', 1)])
            .setTool('sizing_machinery')
            .setMinBuildingLevel(5)
            .setResearchId('kubejs:effects/neutronmaterialapplication', true))
    event.addJson(`kubejs:crafterrecipes/blacksmith/neutron_helmet.json`,
        new ColonyCraftRecipes('blacksmith_crafting', Item.of('neutron_pickaxe'), [Item.of('kubejs:neutron_ingot', 1)])
            .setTool('sizing_machinery')
            .setMinBuildingLevel(5)
            .setResearchId('kubejs:effects/neutronmaterialapplication', true))
    event.addJson(`kubejs:crafterrecipes/blacksmith/neutron_helmet.json`,
        new ColonyCraftRecipes('blacksmith_crafting', Item.of('neutron_axe'), [Item.of('kubejs:neutron_ingot', 1)])
            .setTool('sizing_machinery')
            .setMinBuildingLevel(5)
            .setResearchId('kubejs:effects/neutronmaterialapplication', true))
    event.addJson(`kubejs:crafterrecipes/blacksmith/neutron_helmet.json`,
        new ColonyCraftRecipes('blacksmith_crafting', Item.of('neutron_hoe'), [Item.of('kubejs:neutron_ingot', 1)])
            .setTool('sizing_machinery')
            .setMinBuildingLevel(5)
            .setResearchId('kubejs:effects/neutronmaterialapplication', true))
    event.addJson(`kubejs:crafterrecipes/blacksmith/neutron_helmet.json`,
        new ColonyCraftRecipes('blacksmith_crafting', Item.of('neutron_shovel'), [Item.of('kubejs:neutron_ingot', 1)])
            .setTool('sizing_machinery')
            .setMinBuildingLevel(5)
            .setResearchId('kubejs:effects/neutronmaterialapplication', true))

})


